/**
 * Mehrspielermodus fuer Calliope mini (MakeCode Arcade, n3) ueber ein Jacdac-Kabel.
 *
 * Jedes Geraet startet als Host und fuehrt sein eigenes Spiel aus. Es meldet sich
 * regelmaessig ueber einen eigenen Jacdac-Dienst (SRV_MULTIPLAYER_HOST) am Bus.
 * Sieht ein Host einen anderen Host, fragt er "Mitspielen?". Bei "Ja" wird er
 * Gast: Er pausiert sein Spiel und sendet nur noch seine Tasten ueber einen
 * eigenen Gast-Dienst. Der Host ordnet den Gast als Spieler 2
 * zu und drueckt dessen Tasten in controller.player2 (max. 2 Spieler).
 *
 * Wir lesen die Pakete direkt ueber jacdac.PACKET_PROCESS. Jedes Gast-Paket
 * enthaelt den kompletten Tastenzustand plus einen Druckzaehler je Taste.
 * Dadurch bleibt keine Taste haengen, und ein kurzer Druck geht auch dann
 * nicht verloren, wenn genau sein Paket auf dem Bus verschluckt wird.
 */
namespace jacdac.multiplayer {
    // eigener (nicht standardisierter) Dienst: "Ich bin ein Host und nehme Gaeste an"
    export const SRV_MULTIPLAYER_HOST = 0x1c4e6a57
    // eigener Dienst: "Ich bin Gast und sende meine Tasten"
    export const SRV_MULTIPLAYER_GUEST = 0x1c4e6a58

    // Register-Codes; als Report: SystemCmd.GetRegister | Code
    const REG_GUEST_STATE = 0x101 // u8 Tastenmaske, 6 x u8 Druckzaehler
    const REG_HOST_PLAYERS = 0x101 // MAX_GUESTS x 8 Byte Geraete-IDs ab Spieler 2, i32 Programmkennung
    const REG_HOST_GAME_STATE = 0x102 // frei belegbarer Spielzustand (sendGameState)
    const REG_HOST_SCREEN = 0x103 // u8 erste Spalte, u8 Anzahl, Bilddaten der Spalten (mirrorScreen)
    const REG_HOST_VALUES = 0x104 // je Wert: u8 Namenslaenge, Name (UTF-8), f64 Wert (sendValue)
    // Spielfeld (sendPlayfield)
    const REG_HOST_FRAME = 0x105 // u8 Bildnummer, u8 Teil, u8 Teile, i16 Kamera x, i16 Kamera y, u8 Hintergrundfarbe, u8 Hintergrundbild, dann je Sprite FRAME_ENTRY
    const REG_HOST_IMAGE = 0x106 // u8 Platz, u8 Breite, u8 Hoehe, u16 Versatz, Pixel (spaltenweise, 4 Bit)
    const REG_HOST_TILEMAP = 0x107 // u16 Spalten, u16 Zeilen, u8 Kachelgroesse (scale), je Kachelbild u8 Platz
    const REG_HOST_TILES = 0x108 // u16 Zeile, u16 erste Spalte, Kachelnummern
    const REG_HOST_INFO = 0x109 // u8 Flags, i32 Punkte, i32 Leben (Spieler 1)
    const REG_HOST_SAY = 0x10a // je Sprechblase: u16 Sprite-ID, u8 Textfarbe, u8 Hintergrund, u8 Laenge, Text

    // maximal 2 Spieler: Host (Spieler 1) + 1 Gast (Spieler 2)
    const MAX_GUESTS = 1
    const HOST_REPORT_INTERVAL = 250
    // Wiederholung des Zustands, falls ein Paket verloren geht. Nicht zu oft:
    // jedes zusaetzliche Paket erhoeht die Kollisionsgefahr auf dem Ein-Draht-Bus.
    const GUEST_REPORT_INTERVAL = 100
    // so lange ohne Daten gilt die Verbindung als getrennt. Auf dem Calliope mini
    // treten gelegentlich Aussetzer von gut 5 s auf, die sich von selbst loesen;
    // die sollen nicht als Trennung zaehlen.
    const TIMEOUT = 6000
    // so lange ohne Daten vom Gast: seine Tasten loslassen, damit nichts weiterlaeuft
    const RELEASE_TIMEOUT = 300

    // Reihenfolge wie Controller.buttons: links, hoch, rechts, runter, A, B
    // (Bit 0..5 in der Tastenmaske); Menue wird nicht uebertragen.
    const NUM_BUTTONS = 6

    const enum Role {
        Host,
        Guest,
    }

    class HostServer extends jacdac.Server {
        constructor() {
            super(SRV_MULTIPLAYER_HOST)
        }

        sendPlayers(guests: string[]) {
            const buf = Buffer.create(MAX_GUESTS * 8 + 4)
            for (let i = 0; i < MAX_GUESTS; ++i)
                if (guests[i]) buf.write(i * 8, Buffer.fromHex(guests[i]))
            // Kennung des Programms: nur Geraete mit demselben Spiel spielen zusammen
            buf.setNumber(NumberFormat.Int32LE, MAX_GUESTS * 8, control.programHash())
            this.sendReport(
                JDPacket.from(SystemCmd.GetRegister | REG_HOST_PLAYERS, buf)
            )
        }

        sendGameState(data: Buffer) {
            this.sendReport(
                JDPacket.from(SystemCmd.GetRegister | REG_HOST_GAME_STATE, data)
            )
        }

        sendScreen(data: Buffer) {
            this.sendReport(
                JDPacket.from(SystemCmd.GetRegister | REG_HOST_SCREEN, data)
            )
        }

        sendReg(reg: number, data: Buffer) {
            this.sendReport(JDPacket.from(SystemCmd.GetRegister | reg, data))
        }
    }

    class GuestServer extends jacdac.Server {
        // Byte 0: Tastenmaske (Bit k = Taste k), Byte 1..6: Druckzaehler je Taste
        readonly state = Buffer.create(1 + NUM_BUTTONS)

        constructor() {
            super(SRV_MULTIPLAYER_GUEST)
        }

        handlePacket(pkt: JDPacket) {
            if (pkt.isRegGet && pkt.regCode == REG_GUEST_STATE) this.sendState()
        }

        setButton(k: number, pressed: boolean) {
            if (pressed) {
                this.state[0] |= 1 << k
                this.state[1 + k] = (this.state[1 + k] + 1) & 0xff
            } else this.state[0] &= ~(1 << k)
        }

        sendState() {
            this.sendReport(
                JDPacket.from(SystemCmd.GetRegister | REG_GUEST_STATE, this.state)
            )
        }
    }

    let started = false
    let role = Role.Host
    let hostServer: HostServer
    let guestServer: GuestServer

    // Host: Geraete-ID je Spieler-Slot (Slot 0 = Spieler 2), letzter Kontakt
    // und zuletzt gesehene Druckzaehler (7 Byte wie GuestServer.state)
    const guests: string[] = [null, null, null]
    const guestSeen: number[] = [0, 0, 0]
    const guestState: Buffer[] = [null, null, null]

    // Host: andere Hosts am Bus und bereits beantwortete Anfragen
    const otherHosts: string[] = []
    const otherHostSeen: number[] = []
    const answeredHosts: string[] = []
    let prompting = false

    // Gast
    let myHost: string = null
    let myHostSeen = 0
    let myPlayer = 0

    function guestController(slot: number): controller.Controller {
        if (slot == 0) return controller.player2
        if (slot == 1) return controller.player3
        return controller.player4
    }

    function hasGuests() {
        for (let i = 0; i < MAX_GUESTS; ++i) if (guests[i]) return true
        return false
    }

    function hostAlive(id: string) {
        const i = otherHosts.indexOf(id)
        return i >= 0 && control.millis() - otherHostSeen[i] < TIMEOUT
    }

    function setGuestButtons(slot: number, mask: number) {
        const ctrl = guestController(slot)
        for (let k = 0; k < NUM_BUTTONS; ++k)
            ctrl.buttons[k].setPressed(!!(mask & (1 << k)))
    }

    function handleGuestState(id: string, data: Buffer) {
        if (data.length < 1 + NUM_BUTTONS) return
        let slot = guests.indexOf(id)
        if (slot < 0) {
            for (let i = 0; i < MAX_GUESTS; ++i)
                if (!guests[i]) {
                    slot = i
                    break
                }
            if (slot < 0) return // alle Spieler belegt
            guests[slot] = id
            // erste Zaehler uebernehmen, ohne alte Druecke nachzuspielen
            guestState[slot] = data.slice(0, 1 + NUM_BUTTONS)
            guestState[slot][0] = 0
            guestController(slot).connected = true
            hostServer.sendPlayers(guests)
        }
        guestSeen[slot] = control.millis()

        const prev = guestState[slot]
        const btns = guestController(slot).buttons
        const mask = data[0]
        for (let k = 0; k < NUM_BUTTONS; ++k) {
            const btn = btns[k]
            const pressed = !!(mask & (1 << k))
            if (data[1 + k] != prev[1 + k]) {
                // neuer Druck seit dem letzten Paket - auch wenn wir das
                // Paket mit "gedrueckt" verpasst haben
                if (btn.isPressed()) btn.setPressed(false) // verpasstes Loslassen
                btn.setPressed(true)
                if (!pressed) btn.setPressed(false) // kurzer Tipper
            } else {
                btn.setPressed(pressed)
            }
        }
        guestState[slot] = data.slice(0, 1 + NUM_BUTTONS)
    }

    function handleHostPlayers(id: string, data: Buffer) {
        const now = control.millis()
        if (role == Role.Guest) {
            if (id != myHost) return
            myHostSeen = now
            const self = jacdac.bus.selfDevice.deviceId
            myPlayer = 0
            for (let i = 0; i < MAX_GUESTS; ++i)
                if (data.slice(i * 8, 8).toHex() == self) myPlayer = i + 2
            return
        }

        let i = otherHosts.indexOf(id)
        if (i < 0) {
            otherHosts.push(id)
            otherHostSeen.push(now)
        } else otherHostSeen[i] = now

        // laeuft auf dem anderen Calliope mini dasselbe Spiel? (gleiche Hex-Datei =
        // gleiche Programmkennung; aeltere Versionen ohne Kennung zaehlen als anders)
        const sameGame = data.length >= MAX_GUESTS * 8 + 4 &&
            data.getNumber(NumberFormat.Int32LE, MAX_GUESTS * 8) == control.programHash()
        if (!sameGame) {
            if (otherGameHinted.indexOf(id) < 0) {
                otherGameHinted.push(id)
                showOtherGameHint()
            }
            return
        }

        if (!prompting && !hasGuests() && answeredHosts.indexOf(id) < 0) {
            prompting = true
            control.runInParallel(() => askJoin(id))
        }
    }

    // Dienste-Liste je Partnergeraet aus dessen Anmeldung (Announce). Jacdac nimmt
    // Geraete nach 2 s Funkstille aus bus.devices; mit dem eigenen Speicher werden
    // ihre Pakete nach einem Aussetzer sofort wieder erkannt, ohne auf die naechste
    // Anmeldung zu warten.
    const knownIds: string[] = []
    const knownServices: Buffer[] = []

    function serviceClassOf(id: string, serviceIndex: number) {
        const i = knownIds.indexOf(id)
        if (i < 0 || serviceIndex == 0) return 0
        const services = knownServices[i]
        if ((serviceIndex << 2) + 4 > services.length) return 0
        return services.getNumber(NumberFormat.UInt32LE, serviceIndex << 2)
    }

    function handlePacket(pkt: JDPacket) {
        if (!pkt.isReport) return
        const id = pkt.deviceIdentifier
        if (id == jacdac.bus.selfDevice.deviceId) return
        if (pkt.serviceIndex == 0) {
            if (pkt.serviceCommand == SystemCmd.Announce) {
                const i = knownIds.indexOf(id)
                if (i < 0) {
                    knownIds.push(id)
                    knownServices.push(pkt.data)
                } else knownServices[i] = pkt.data
            }
            return
        }
        const cls = serviceClassOf(id, pkt.serviceIndex)
        const cmd = pkt.serviceCommand
        if (
            cls == SRV_MULTIPLAYER_GUEST &&
            cmd == (SystemCmd.GetRegister | REG_GUEST_STATE)
        ) {
            if (role == Role.Host) handleGuestState(id, pkt.data)
        } else if (
            cls == SRV_MULTIPLAYER_HOST &&
            cmd == (SystemCmd.GetRegister | REG_HOST_PLAYERS)
        ) {
            handleHostPlayers(id, pkt.data)
        } else if (
            cls == SRV_MULTIPLAYER_HOST &&
            (cmd & 0xf000) == SystemCmd.GetRegister &&
            role == Role.Guest && id == myHost
        ) {
            // zaehlt auch als Lebenszeichen des Hosts
            myHostSeen = control.millis()
            const reg = cmd & 0xfff
            if (reg == REG_HOST_GAME_STATE) {
                if (gameStateHandler) gameStateHandler(pkt.data)
            } else if (reg == REG_HOST_SCREEN) receiveScreen(pkt.data)
            else if (reg == REG_HOST_VALUES) {
                if (valuesReceiver) valuesReceiver(pkt.data)
            } else if (reg >= REG_HOST_FRAME && reg <= REG_HOST_SAY) {
                if (playfieldReceiver) playfieldReceiver(reg, pkt.data)
            }
        }
    }

    // Empfaenger und Gast-Einrichtung der Zusatzfunktionen. Sie werden erst gesetzt, wenn
    // ein Programm deren Bloecke benutzt (dasselbe Programm laeuft auf beiden Geraeten);
    // so baut pxt den Code nur in Spiele ein, die ihn brauchen.
    let valuesReceiver: (data: Buffer) => void = null
    let playfieldReceiver: (reg: number, data: Buffer) => void = null
    const guestSetups: (() => void)[] = []
    // Gast zeichnet selbst (Sprites der Spiel-Szene), statt "Verbunden" anzuzeigen
    let guestDrawsItself = false
    // Gast: Zeit des letzten Spielfeld-Bildes (sendPlayfield)
    let frameReceived = 0

    function hostLoop() {
        let lastReport = 0
        while (role == Role.Host) {
            const now = control.millis()
            if (now - lastReport >= HOST_REPORT_INTERVAL) {
                hostServer.sendPlayers(guests)
                lastReport = now
            }
            for (let slot = 0; slot < MAX_GUESTS; ++slot) {
                if (!guests[slot]) continue
                const silent = now - guestSeen[slot]
                if (silent > TIMEOUT) {
                    setGuestButtons(slot, 0)
                    guestController(slot).connected = false
                    guests[slot] = null
                } else if (silent > RELEASE_TIMEOUT) {
                    // kurzer Aussetzer: Figur anhalten, Spieler aber behalten
                    setGuestButtons(slot, 0)
                }
            }
            pause(50)
        }
    }

    // Hinweis, wenn am Kabel ein Calliope mini mit einem anderen Spiel haengt
    // (einmal je Geraet, ueber dem laufenden Spiel)
    const otherGameHinted: string[] = []

    function showOtherGameHint() {
        const until = control.millis() + 3500
        const hint = scene.createRenderable(1000, () => {
            if (control.millis() < until)
                drawBox(["Anderes Spiel erkannt", "Gleiches Spiel auf", "beide Calliope mini!"])
        })
        control.runInParallel(() => {
            pause(3600)
            hint.destroy()
        })
    }

    function drawBox(lines: string[]) {
        const h = 12 + lines.length * 12
        const top = (screen.height - h) >> 1
        screen.fillRect(8, top, screen.width - 16, h, 15)
        screen.drawRect(8, top, screen.width - 16, h, 1)
        for (let i = 0; i < lines.length; ++i)
            screen.printCenter(lines[i], top + 8 + i * 12, i == 0 ? 5 : 1)
    }

    function askJoin(id: string) {
        game.pushScene()
        let answer = 0 // 0 = offen, 1 = ja, 2 = nein
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => (answer = 1))
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => (answer = 2))
        game.onPaint(() => {
            drawBox(["Calliope mini erkannt!", "Mitspielen?", "A = Ja   B = Nein"])
        })
        pauseUntil(() => answer != 0 || hasGuests() || !hostAlive(id))
        game.popScene()

        if (answer != 0) answeredHosts.push(id)
        if (answer == 1 && !hasGuests() && hostAlive(id)) becomeGuest(id)
        prompting = false
    }

    let lastGuestSend = 0

    function sendGuestState() {
        lastGuestSend = control.millis()
        guestServer.sendState()
    }

    // Taste k hat sich geaendert: sofort senden. Geht das Paket verloren, holt
    // der Host den Druck ueber die Druckzaehler im naechsten Paket nach.
    function onGuestButton(k: number, pressed: boolean) {
        guestServer.setButton(k, pressed)
        sendGuestState()
    }

    function becomeGuest(id: string) {
        role = Role.Guest
        myHost = id
        myHostSeen = control.millis()
        hostServer.stop()
        guestServer.start()

        // eigenes Spiel pausieren; die Tasten-Ereignisse gehen ab jetzt an
        // diese Szene. Ereignisse statt Abfragen: so wird auch ein Tipper
        // erfasst, der kuerzer als ein Bildaufbau ist.
        game.pushScene()
        const btns = controller.player1.buttons
        for (let k = 0; k < NUM_BUTTONS; ++k) {
            const key = k
            btns[k].onEvent(ControllerButtonEvent.Pressed, () => {
                onGuestButton(key, true)
                // B fuehrt nach einem Verbindungsabbruch zurueck ins eigene Spiel
                if (btns[key] == controller.B && control.millis() - myHostSeen > TIMEOUT)
                    control.reset()
            })
            btns[k].onEvent(ControllerButtonEvent.Released, () => onGuestButton(key, false))
        }
        // MENU blendet beim gespiegelten Bildschirm die Bildrate ein und aus
        controller.menu.onEvent(ControllerButtonEvent.Pressed, () => {
            if (mirrorImage) mirrorStats = !mirrorStats
        })
        game.onPaint(() => {
            const connected = control.millis() - myHostSeen < TIMEOUT
            if (guestDrawsItself) return // Sprites dieser Szene; Hinweise in guestOverlay
            if (mirrorImage && !guestRenderer) {
                // gespiegelter Bildschirm des Hosts (mirrorScreen)
                screen.drawImage(mirrorImage, 0, 0)
                if (mirrorStats) drawMirrorStats()
                if (!connected)
                    drawBox(["Verbindung getrennt", "Kabel pruefen", "B = eigenes Spiel"])
                return
            }
            if (guestRenderer) {
                // das Spiel zeichnet die Ansicht des Gastes selbst (z. B. aus dem
                // Spielzustand des Hosts); nur Verbindungsprobleme werden ueberlagert
                guestRenderer(screen)
                if (!connected)
                    drawBox(["Verbindung getrennt", "Kabel pruefen", "B = eigenes Spiel"])
                return
            }
            screen.fill(12)
            if (!connected)
                drawBox(["Verbindung getrennt", "Kabel pruefen", "B = eigenes Spiel"])
            else if (!myPlayer) drawBox(["Verbinde...", "Bitte warten"])
            else drawBox(["Verbunden", "Du bist Spieler " + myPlayer])
            // Tastenanzeige: gedrueckte Tasten leuchten
            const mask = guestServer.state[0]
            for (let k = 0; k < NUM_BUTTONS; ++k)
                screen.fillRect(20 + k * 20, screen.height - 16, 14, 8, mask & (1 << k) ? 7 : 11)
        })

        // Zustand regelmaessig wiederholen
        control.runInParallel(() => {
            while (true) {
                if (control.millis() - lastGuestSend >= GUEST_REPORT_INTERVAL) sendGuestState()
                pause(GUEST_REPORT_INTERVAL >> 1)
            }
        })

        // Zusatzfunktionen (Werte, Spielfeld) richten sich in der Gast-Szene ein
        for (const setup of guestSetups) setup()
    }

    // Der Gast zeichnet selbst (Sprites in seiner Szene): kein "Verbunden"-Bildschirm,
    // Hinweise und gespiegelte Bilder liegen ueber allem (Sprites liegen ueber game.onPaint)
    function selfDrawingGuest() {
        if (guestDrawsItself) return
        guestDrawsItself = true
        guestSetups.push(() => {
            scene.createRenderable(scene.HUD_Z + 10, (target: Image, camera: scene.Camera) => {
                // zeigt der Host gerade eine andere Szene (sendPlayfield), kommen Bildstreifen
                if (mirrorImage && mirrorReceived > frameReceived) target.drawImage(mirrorImage, 0, 0)
                if (control.millis() - myHostSeen >= TIMEOUT)
                    drawBox(["Verbindung getrennt", "Kabel pruefen", "B = eigenes Spiel"])
            })
        })
    }

    /**
     * Starts the Jacdac multiplayer mode. Called automatically
     * as soon as the extension is added to the project.
     */
    export function start() {
        if (started) return
        started = true
        hostServer = new HostServer()
        guestServer = new GuestServer()
        hostServer.start()
        jacdac.bus.on(jacdac.PACKET_PROCESS, handlePacket)
        control.runInParallel(hostLoop)
    }

    // --- Spielzustand fuer beide Bildschirme (fuer Fortgeschrittene, JavaScript) ---
    // Der Host berechnet das Spiel und schickt regelmaessig einen kleinen Zustand
    // (bis ca. 200 Byte) an den Gast; der Gast zeichnet daraus seine eigene Ansicht.

    let gameStateHandler: (data: Buffer) => void = null
    let guestRenderer: (target: Image) => void = null

    /**
     * True if this device plays as guest (player 2). Its own game is
     * paused then; the game logic runs on the host.
     */
    //% blockId=jacdac_multiplayer_is_guest block="is player 2"
    //% blockNamespace=controller group="Multiplayer" weight=4
    //% help=reference/jacdac-multiplayer
    export function isGuest() {
        return role == Role.Guest
    }

    /**
     * Host: sends a game state to the guest (only if a guest is connected).
     * About 10-20 times per second is enough; the guest can interpolate in between.
     */
    export function sendGameState(data: Buffer) {
        if (role == Role.Host && hasGuests() && hostServer) hostServer.sendGameState(data)
    }

    /**
     * Guest: called for every game state received from the host.
     */
    export function onGameState(handler: (data: Buffer) => void) {
        gameStateHandler = handler
    }

    /**
     * Guest: instead of the "Connected - you are player 2" screen, this
     * function draws every frame (e.g. the playfield from the last game state).
     */
    export function setGuestRenderer(renderer: (target: Image) => void) {
        guestRenderer = renderer
    }

    // --- Bildschirm spiegeln (mirrorScreen) ---
    // Der Host teilt den Bildschirm in Streifen zu MIRROR_COLS Spalten (Bilder sind
    // spaltenweise gespeichert, 4 Bit je Pixel: 60 Byte je Spalte bei 120 Pixeln Hoehe).
    // Jeder Streifen hat ein eigenes kleines Bild, dessen Puffer wir selbst halten:
    // drawImage kopiert den Bildschirmausschnitt nativ hinein, hash() vergleicht nativ.
    // Gesendet werden nur geaenderte Streifen, hoechstens MIRROR_BUDGET je Durchlauf,
    // damit die Tasten des Gastes noch auf den Bus passen und die Sende-Warteschlange
    // (10 Pakete) nicht ueberlaeuft. Ein umlaufender Streifen wird zusaetzlich immer
    // gesendet; so heilen verlorene Pakete nach etwa einer Sekunde.
    const MIRROR_COLS = 3 // 3 x 60 Byte + 2 Byte Kopf passen in ein Jacdac-Paket (236 Byte)
    const MIRROR_INTERVAL = 20 // ms zwischen zwei Durchlaeufen
    const MIRROR_BUDGET = 5 // Pakete je Durchlauf (~250 Pakete/s, ~45 KB/s)
    const IMAGE_HEADER_SIZE = 8

    let mirroring = false
    let mirrorStrips: Image[]
    let mirrorRaw: Buffer[]
    let mirrorSent: number[] // Pruefsumme des zuletzt gesendeten Streifens
    let mirrorNext = 0 // naechster Streifen, bei dem die Suche beginnt
    let mirrorRefresh = 0 // naechster Streifen fuer die Auffrischung
    let mirrorGuest: string = null

    // Gast
    let mirrorImage: Image = null
    let mirrorBuf: Buffer = null
    let mirrorStats = false
    let mirrorReceived = 0 // Zeit des letzten Streifens
    let mirrorPackets = 0
    let mirrorBytes = 0
    let mirrorStatsStart = 0
    let mirrorStatsText = ""

    function columnBytes(height: number) {
        return ((height * 4 + 31) >> 5) << 2
    }

    // Bild, dessen Pixel direkt in buf liegen (Kopf + spaltenweise 4-Bit-Pixel)
    function imageWithBuffer(width: number, height: number): Buffer {
        const buf = Buffer.create(IMAGE_HEADER_SIZE + width * columnBytes(height))
        buf[0] = 0x87 // IMAGE_HEADER_MAGIC
        buf[1] = 4 // Bit je Pixel
        buf.setNumber(NumberFormat.UInt16LE, 2, width)
        buf.setNumber(NumberFormat.UInt16LE, 4, height)
        return buf
    }

    function mirrorLoop() {
        mirrorSetup()
        while (true) {
            pause(MIRROR_INTERVAL)
            if (role != Role.Host || !mirroring || !hasGuests()) continue
            // neuer Gast: alles neu senden
            if (guests[0] != mirrorGuest) {
                mirrorGuest = guests[0]
                mirrorResend()
            }
            mirrorTick()
        }
    }

    function mirrorSetup() {
        if (mirrorStrips) return
        const w = screen.width
        const h = screen.height
        const strips = Math.idiv(w + MIRROR_COLS - 1, MIRROR_COLS)
        mirrorStrips = []
        mirrorRaw = []
        mirrorSent = []
        for (let i = 0; i < strips; ++i) {
            const cols = Math.min(MIRROR_COLS, w - i * MIRROR_COLS)
            const raw = imageWithBuffer(cols, h)
            mirrorRaw.push(raw)
            mirrorStrips.push(image.ofBuffer(raw))
            mirrorSent.push(-1)
        }
    }

    function mirrorResend() {
        for (let i = 0; i < mirrorSent.length; ++i) mirrorSent[i] = -1
    }

    // sendet geaenderte Streifen des aktuellen Bildschirms (hoechstens MIRROR_BUDGET)
    function mirrorTick() {
        const strips = mirrorStrips.length
        let budget = MIRROR_BUDGET
        for (let n = 0; n < strips && budget > 0; ++n) {
            const i = (mirrorNext + n) % strips
            mirrorStrips[i].drawImage(screen, -i * MIRROR_COLS, 0)
            const hash = mirrorRaw[i].hash(30)
            if (hash != mirrorSent[i]) {
                sendStrip(i, hash)
                budget--
                mirrorNext = (i + 1) % strips
            }
        }
        if (budget > 0) {
            // nichts (mehr) geaendert: einen Streifen zur Sicherheit erneut senden
            const i = mirrorRefresh
            mirrorRefresh = (mirrorRefresh + 1) % strips
            mirrorStrips[i].drawImage(screen, -i * MIRROR_COLS, 0)
            sendStrip(i, mirrorRaw[i].hash(30))
        }
    }

    function sendStrip(i: number, hash: number) {
        const raw = mirrorRaw[i]
        const data = Buffer.create(2 + raw.length - IMAGE_HEADER_SIZE)
        data[0] = i * MIRROR_COLS
        data[1] = raw.getNumber(NumberFormat.UInt16LE, 2) // Spalten
        data.write(2, raw.slice(IMAGE_HEADER_SIZE))
        hostServer.sendScreen(data)
        mirrorSent[i] = hash
    }

    function receiveScreen(data: Buffer) {
        if (data.length < 2) return
        if (!mirrorImage) {
            mirrorBuf = imageWithBuffer(screen.width, screen.height)
            mirrorImage = image.ofBuffer(mirrorBuf)
            mirrorStatsStart = control.millis()
        }
        const colBytes = columnBytes(screen.height)
        const x = data[0]
        const cols = data[1]
        if (x + cols > screen.width || data.length < 2 + cols * colBytes) return
        mirrorBuf.write(IMAGE_HEADER_SIZE + x * colBytes, data.slice(2, cols * colBytes))
        mirrorReceived = control.millis()
        mirrorPackets++
        mirrorBytes += cols * colBytes
    }

    // Pakete/s und daraus "volle Bilder"/s (so viele komplette Bildschirme pro Sekunde
    // kaemen an, wenn sich alles aendern wuerde)
    function drawMirrorStats() {
        const now = control.millis()
        if (now - mirrorStatsStart >= 1000) {
            const full = screen.width * columnBytes(screen.height)
            const tenths = Math.idiv(mirrorBytes * 10, full)
            mirrorStatsText = mirrorPackets + " Pakete/s  " +
                Math.idiv(tenths, 10) + "." + (tenths % 10) + " Bilder/s"
            mirrorPackets = 0
            mirrorBytes = 0
            mirrorStatsStart = now
        }
        screen.fillRect(0, 0, screen.width, 10, 15)
        screen.print(mirrorStatsText, 2, 1, 1)
    }

    /**
     * Shows the screen of this Calliope mini also on the Calliope mini of
     * player 2 (connected via Jacdac). Only changed parts of the screen are
     * sent; fast games with a moving background stutter on player 2's screen.
     */
    //% blockId=jacdac_multiplayer_mirror_screen
    //% block="mirror screen to player 2"
    //% blockNamespace=controller group="Multiplayer" weight=10
    //% help=reference/jacdac-multiplayer
    export function mirrorScreen() {
        if (mirroring) return
        mirroring = true
        control.runInParallel(mirrorLoop)
    }

    // --- Werte an Spieler 2 senden (Bloecke) ---
    // Der Host verschickt benannte Zahlen: bei einer Aenderung sofort und alle
    // VALUE_REPORT_INTERVAL ms alle zusammen, falls ein Paket verloren ging. Der Gast
    // merkt sich die Werte und ruft die Ereignisse im Bildtakt seiner Szene auf, wie
    // andere Ereignisse im Spiel.
    const VALUE_REPORT_INTERVAL = 250
    const MAX_NAME = 40 // Byte
    const MAX_PAYLOAD = 232 // Nutzdaten je Jacdac-Paket (236) mit etwas Reserve
    const valueNames: string[] = []
    const valueData: number[] = []
    const valueKnown: boolean[] = []
    const valueChanged: boolean[] = []
    const valueHandlerNames: string[] = []
    const valueHandlers: ((value: number) => void)[] = []
    let valuesStarted = false

    function startValues() {
        if (valuesStarted) return
        valuesStarted = true
        valuesReceiver = receiveValues
        guestSetups.push(() => game.onUpdate(dispatchValues))
        control.runInParallel(valuesLoop)
    }

    function valueIndex(name: string) {
        let i = valueNames.indexOf(name)
        if (i < 0) {
            valueNames.push(name)
            valueData.push(0)
            valueKnown.push(false)
            valueChanged.push(false)
            i = valueNames.length - 1
        }
        return i
    }

    function encodeValue(i: number) {
        let name = Buffer.fromUTF8(valueNames[i])
        if (name.length > MAX_NAME) name = name.slice(0, MAX_NAME)
        const buf = Buffer.create(1 + name.length + 8)
        buf[0] = name.length
        buf.write(1, name)
        buf.setNumber(NumberFormat.Float64LE, 1 + name.length, valueData[i])
        return buf
    }

    function valuesLoop() {
        while (true) {
            pause(VALUE_REPORT_INTERVAL)
            if (role != Role.Host || !hasGuests()) continue
            let entries: Buffer[] = []
            let size = 0
            for (let i = 0; i < valueNames.length; ++i) {
                if (!valueKnown[i]) continue
                const entry = encodeValue(i)
                if (size + entry.length > MAX_PAYLOAD) {
                    hostServer.sendReg(REG_HOST_VALUES, Buffer.concat(entries))
                    entries = []
                    size = 0
                }
                entries.push(entry)
                size += entry.length
            }
            if (size) hostServer.sendReg(REG_HOST_VALUES, Buffer.concat(entries))
        }
    }

    function receiveValues(data: Buffer) {
        let k = 0
        while (k < data.length) {
            const len = data[k]
            if (k + 1 + len + 8 > data.length) return
            const i = valueIndex(data.slice(k + 1, len).toString())
            const v = data.getNumber(NumberFormat.Float64LE, k + 1 + len)
            if (!valueKnown[i] || valueData[i] !== v) {
                valueData[i] = v
                valueKnown[i] = true
                valueChanged[i] = true
            }
            k += 1 + len + 8
        }
    }

    function dispatchValues() {
        for (let i = 0; i < valueNames.length; ++i) {
            if (!valueChanged[i]) continue
            valueChanged[i] = false
            for (let h = 0; h < valueHandlers.length; ++h)
                if (valueHandlerNames[h] == valueNames[i]) valueHandlers[h](valueData[i])
        }
    }

    /**
     * Sends a named number from the game to player 2's Calliope mini. It is sent
     * right away when it changes and repeated regularly, so a lost packet does no harm.
     * @param name name of the value, eg: "x"
     * @param value number to send, eg: 0
     */
    //% blockId=jacdac_multiplayer_send_value block="send value $name = $value to player 2"
    //% name.defl="x"
    //% blockNamespace=controller group="Multiplayer" weight=8
    //% help=reference/jacdac-multiplayer
    export function sendValue(name: string, value: number) {
        startValues()
        const i = valueIndex(name)
        const changed = !valueKnown[i] || valueData[i] !== value
        valueData[i] = value
        valueKnown[i] = true
        if (changed && role == Role.Host && hostServer && hasGuests())
            hostServer.sendReg(REG_HOST_VALUES, encodeValue(i))
    }

    /**
     * Player 2: runs when a value with this name arrives that is new or has changed.
     * @param name name of the value, eg: "x"
     */
    //% blockId=jacdac_multiplayer_on_value block="on value $name received $value"
    //% name.defl="x"
    //% draggableParameters="reporter"
    //% blockNamespace=controller group="Multiplayer" weight=7
    //% help=reference/jacdac-multiplayer
    export function onValue(name: string, handler: (value: number) => void) {
        startValues()
        valueHandlerNames.push(name)
        valueHandlers.push(handler)
    }

    /**
     * Player 2: the last received value with this name (0 if none has arrived yet).
     * @param name name of the value, eg: "x"
     */
    //% blockId=jacdac_multiplayer_value block="received value $name"
    //% name.defl="x"
    //% blockNamespace=controller group="Multiplayer" weight=6
    //% help=reference/jacdac-multiplayer
    export function receivedValue(name: string): number {
        startValues()
        const i = valueNames.indexOf(name)
        return i < 0 ? 0 : valueData[i]
    }

    /**
     * Runs on the Calliope mini that becomes player 2, right after it joined. Its own
     * game is paused; create the sprites of player 2's view here. The "Connected"
     * screen is not shown then.
     */
    //% blockId=jacdac_multiplayer_on_guest_start block="on start as player 2"
    //% blockNamespace=controller group="Multiplayer" weight=5
    //% help=reference/jacdac-multiplayer
    export function onStartAsGuest(handler: () => void) {
        selfDrawingGuest()
        guestSetups.push(() => control.runInParallel(handler))
    }

    // --- Spielfeld an Spieler 2 senden (sendPlayfield) ---
    // Statt Pixeln schickt der Host, was auf dem Spielfeld liegt: je Bild die Kamera und
    // fuer jedes sichtbare Sprite Position und Bild (8 Byte), dazu einmalig jedes Sprite-
    // und Kachelbild, die Tilemap, Punkte, Leben und Sprechblasen. Der Gast baut daraus
    // echte Sprites, Tilemap und Anzeige in seiner Szene nach und zeichnet sie selbst -
    // so bleibt das Bild auch bei scrollenden Spielen fluessig. Zeigt der Host eine andere
    // Szene (Dialog, game.splash, Game Over), wird wie bei mirrorScreen gespiegelt.
    // Nicht uebertragen: Partikel, eigene Zeichnungen (Renderables) und Hintergrund-Ebenen.
    const PLAYFIELD_INTERVAL = 40 // ms je Bild (das GameKit-Display schafft ~25 Bilder/s)
    const PLAYFIELD_SLOW_INTERVAL = 250 // Wiederholung von Tilemap-Kopf, Punkten, Sprechblasen
    const IMAGE_BUDGET = 3 // Bild-Pakete je Durchlauf
    const ROW_BUDGET = 2 // geaenderte Tilemap-Zeilen je Durchlauf
    const ROWS_CHECKED = 8 // Tilemap-Zeilen, die je Durchlauf verglichen werden
    const MAX_FRAME_PARTS = 4 // ~110 Sprites
    const CACHE_SIZE = 96 // Bildplaetze
    const NO_IMAGE = 255
    const FRAME_HEADER = 9
    const FRAME_ENTRY = 8 // u16 Sprite-ID, u8 Bildplatz, i16 links, i16 oben, u8 Flags
    const FRAME_TRANSFORM = 12 // f32 sx, f32 sy, f32 Drehung (Flag ENTRY_TRANSFORM)
    const ENTRY_RELATIVE = 1
    const ENTRY_TRANSFORM = 2
    const IMAGE_CHUNK_HEADER = 5
    const SAY_ENTRY_HEADER = 5
    const MAX_SAY = 40 // Byte Text je Sprechblase

    let playfieldScene: scene.Scene = null
    let playfieldGuest: string = null
    let frameNo = 0
    let frameSeq = 0
    let lastSlow = 0
    // Host: Bild-Zwischenspeicher, Platz = Index
    const cacheImg: Image[] = []
    const cacheRev: number[] = []
    const cacheUsed: number[] = [] // frameNo der letzten Verwendung
    const cachePixels: Buffer[] = []
    const cacheSent: number[] = [] // bereits gesendete Bytes von cachePixels
    let refreshSlot = 0
    let refreshOffset = 0
    // Host: Tilemap, Punkte, Sprechblasen
    let tmData: tiles.TileMapData = null
    let tmHeader: Buffer = null
    let tmRowHash: number[] = []
    let tmRowNext = 0
    let tmRowRefresh = 0
    let lastInfo: Buffer = null
    let lastSay: Buffer = null

    // Gast
    let playfieldReady = false
    const gImages: Image[] = []
    const gPixels: Buffer[] = []
    const gIds: number[] = []
    const gSprites: Sprite[] = []
    const gFrame: number[] = [] // Bildnummer, in der das Sprite zuletzt vorkam
    const gSeen: number[] = []
    const gSay: string[] = []
    let gKind = 0
    let gTilemap: Buffer = null
    let gTilemapHeader: Buffer = null
    let gLifeZero = false

    /**
     * Sends the playfield (sprites, tilemap, score and lives) to player 2's
     * Calliope mini, which draws it itself. Much smoother than mirroring the
     * screen; particles and custom drawings are not shown on player 2's screen.
     */
    //% blockId=jacdac_multiplayer_send_playfield block="send playfield to player 2"
    //% blockNamespace=controller group="Multiplayer" weight=9
    //% help=reference/jacdac-multiplayer
    export function sendPlayfield() {
        if (playfieldScene) return
        playfieldScene = game.currentScene()
        selfDrawingGuest()
        playfieldReceiver = receivePlayfield
        guestSetups.push(() => (playfieldReady = true))
        control.runInParallel(playfieldLoop)
    }

    function playfieldLoop() {
        let otherScene = false
        while (true) {
            pause(PLAYFIELD_INTERVAL)
            if (role != Role.Host || !hasGuests()) continue
            // neuer Gast: alles neu senden
            if (guests[0] != playfieldGuest) {
                playfieldGuest = guests[0]
                for (let i = 0; i < cacheSent.length; ++i) cacheSent[i] = 0
                tmHeader = null
                tmRowHash = []
                lastInfo = null
                lastSay = null
            }
            const sc = game.currentScene()
            if (sc != playfieldScene) {
                // Dialog, game.splash, Game Over: Bildschirm spiegeln
                mirrorSetup()
                if (!otherScene) mirrorResend()
                otherScene = true
                mirrorTick()
                continue
            }
            otherScene = false
            frameNo++
            const now = control.millis()
            const slow = now - lastSlow >= PLAYFIELD_SLOW_INTERVAL
            if (slow) lastSlow = now
            const frame = buildFrame(sc, slow)
            syncTilemap(sc, slow)
            // Bilder vor dem Bild, das sie verwendet
            sendImages()
            for (const part of frame) hostServer.sendReg(REG_HOST_FRAME, part)
            sendInfo(slow)
        }
    }

    function imagePixels(img: Image) {
        const raw = imageWithBuffer(img.width, img.height)
        image.ofBuffer(raw).drawImage(img, 0, 0)
        return raw.slice(IMAGE_HEADER_SIZE)
    }

    // Platz des Bildes im Zwischenspeicher; neue oder geaenderte Bilder werden gesendet
    function slotOf(img: Image) {
        if (!img || img.width > 255 || img.height > 255) return NO_IMAGE
        let i = cacheImg.indexOf(img)
        if (i < 0) {
            if (cacheImg.length < CACHE_SIZE) {
                cacheImg.push(img)
                cacheRev.push(-1)
                cacheUsed.push(0)
                cachePixels.push(null)
                cacheSent.push(0)
                i = cacheImg.length - 1
            } else {
                // den am laengsten unbenutzten Platz neu belegen
                for (let k = 0; k < CACHE_SIZE; ++k)
                    if (cacheUsed[k] != frameNo && (i < 0 || cacheUsed[k] < cacheUsed[i])) i = k
                if (i < 0) return NO_IMAGE
                cacheImg[i] = img
                cacheRev[i] = -1
            }
        }
        cacheUsed[i] = frameNo
        const rev = img.revision()
        if (rev != cacheRev[i]) {
            cacheRev[i] = rev
            cachePixels[i] = imagePixels(img)
            cacheSent[i] = 0
        }
        return i
    }

    function sendImageChunk(i: number, offset: number) {
        const px = cachePixels[i]
        const n = Math.min(MAX_PAYLOAD - IMAGE_CHUNK_HEADER, px.length - offset)
        const buf = Buffer.create(IMAGE_CHUNK_HEADER + n)
        buf[0] = i
        buf[1] = cacheImg[i].width
        buf[2] = cacheImg[i].height
        buf.setNumber(NumberFormat.UInt16LE, 3, offset)
        buf.write(IMAGE_CHUNK_HEADER, px.slice(offset, n))
        hostServer.sendReg(REG_HOST_IMAGE, buf)
        return offset + n
    }

    function sendImages() {
        let budget = IMAGE_BUDGET
        for (let i = 0; i < cacheImg.length && budget > 0; ++i) {
            while (budget > 0 && cacheSent[i] < cachePixels[i].length) {
                cacheSent[i] = sendImageChunk(i, cacheSent[i])
                budget--
            }
        }
        // alles gesendet: ein Stueck eines benutzten Bildes erneut (heilt verlorene Pakete)
        for (let n = 0; budget > 0 && n < cacheImg.length; ++n) {
            if (refreshSlot >= cacheImg.length) refreshSlot = 0
            const i = refreshSlot
            if (frameNo - cacheUsed[i] < 25 && refreshOffset < cachePixels[i].length) {
                refreshOffset = sendImageChunk(i, refreshOffset)
                budget--
                if (refreshOffset < cachePixels[i].length) continue
            }
            refreshSlot++
            refreshOffset = 0
        }
    }

    // Kamera, Hintergrund und Sprites (in Zeichenreihenfolge) in Pakete aufgeteilt;
    // nebenbei die Sprechblasen der Sprites
    function buildFrame(sc: scene.Scene, slow: boolean) {
        const cam = sc.camera
        const entries: Buffer[] = []
        const says: Buffer[] = []
        let saySize = 0
        for (const s of sc.allSprites) {
            if (!(s instanceof Sprite)) continue
            const sp = s as Sprite
            if (sp.flags & SpriteFlag.Invisible) continue
            const relative = !!(sp.flags & SpriteFlag.RelativeToCamera)
            const l = Math.floor(sp.left)
            const t = Math.floor(sp.top)
            // ausserhalb des Bildschirms (mit Rand fuer Drehung und Sprechblase)
            const x = relative ? l : l - cam.drawOffsetX
            const y = relative ? t : t - cam.drawOffsetY
            if (x > screen.width + 16 || y > screen.height + 16 || x + sp.width < -16 || y + sp.height < -32)
                continue
            const slot = slotOf(sp.image)
            if (slot == NO_IMAGE) continue
            const transform = sp.sx != 1 || sp.sy != 1 || sp.rotation != 0
            const e = Buffer.create(FRAME_ENTRY + (transform ? FRAME_TRANSFORM : 0))
            e.setNumber(NumberFormat.UInt16LE, 0, sp.id & 0xffff)
            e[2] = slot
            e.setNumber(NumberFormat.Int16LE, 3, l)
            e.setNumber(NumberFormat.Int16LE, 5, t)
            e[7] = (relative ? ENTRY_RELATIVE : 0) | (transform ? ENTRY_TRANSFORM : 0)
            if (transform) {
                e.setNumber(NumberFormat.Float32LE, 8, sp.sx)
                e.setNumber(NumberFormat.Float32LE, 12, sp.sy)
                e.setNumber(NumberFormat.Float32LE, 16, sp.rotation)
            }
            entries.push(e)

            const say = (sp as any).sayRenderer as sprites.BaseSpriteSayRenderer
            if (say && say.text) {
                let text = Buffer.fromUTF8(say.text)
                if (text.length > MAX_SAY) text = text.slice(0, MAX_SAY)
                if (saySize + SAY_ENTRY_HEADER + text.length <= MAX_PAYLOAD) {
                    const b = Buffer.create(SAY_ENTRY_HEADER + text.length)
                    b.setNumber(NumberFormat.UInt16LE, 0, sp.id & 0xffff)
                    b[2] = say.fgColor
                    b[3] = say.bgColor
                    b[4] = text.length
                    b.write(SAY_ENTRY_HEADER, text)
                    says.push(b)
                    saySize += b.length
                }
            }
        }
        const sayBuf = Buffer.concat(says)
        if (!lastSay || slow || !sayBuf.equals(lastSay)) {
            lastSay = sayBuf
            hostServer.sendReg(REG_HOST_SAY, sayBuf)
        }

        const bg = sc.background
        const bgSlot = bg.hasBackgroundImage() ? slotOf(bg.image) : NO_IMAGE
        const parts: Buffer[] = []
        let start = 0
        while (parts.length < MAX_FRAME_PARTS) {
            let end = start
            let size = FRAME_HEADER
            while (end < entries.length && size + entries[end].length <= MAX_PAYLOAD) {
                size += entries[end].length
                end++
            }
            const buf = Buffer.create(FRAME_HEADER)
            buf[0] = frameSeq
            buf.setNumber(NumberFormat.Int16LE, 3, cam.drawOffsetX)
            buf.setNumber(NumberFormat.Int16LE, 5, cam.drawOffsetY)
            buf[7] = bg.color
            buf[8] = bgSlot
            parts.push(Buffer.concat([buf].concat(entries.slice(start, end))))
            start = end
            if (start >= entries.length) break
        }
        for (let p = 0; p < parts.length; ++p) {
            parts[p][1] = p
            parts[p][2] = parts.length
        }
        frameSeq = (frameSeq + 1) & 0xff
        return parts
    }

    function syncTilemap(sc: scene.Scene, slow: boolean) {
        const tm = sc.tileMap
        const data = tm && tm.enabled ? tm.data : null
        if (data !== tmData) {
            tmData = data
            tmHeader = null
            tmRowHash = []
        }
        let header: Buffer
        if (data) {
            const set = data.getTileset()
            const n = Math.min(set.length, MAX_PAYLOAD - 5)
            header = Buffer.create(5 + n)
            header.setNumber(NumberFormat.UInt16LE, 0, data.width)
            header.setNumber(NumberFormat.UInt16LE, 2, data.height)
            header[4] = data.scale
            // haelt die Kachelbilder im Zwischenspeicher
            for (let k = 0; k < n; ++k) header[5 + k] = slotOf(set[k])
        } else header = Buffer.create(5) // keine Tilemap
        if (!tmHeader || slow || !header.equals(tmHeader)) {
            tmHeader = header
            hostServer.sendReg(REG_HOST_TILEMAP, header)
        }
        if (!data) return

        const w = data.width
        const h = data.height
        // zur Sicherheit nach und nach jede Zeile erneut senden
        if (slow) {
            if (tmRowRefresh >= h) tmRowRefresh = 0
            tmRowHash[tmRowRefresh++] = -1
        }
        let budget = ROW_BUDGET
        for (let n = 0; n < Math.min(ROWS_CHECKED, h) && budget > 0; ++n) {
            if (tmRowNext >= h) tmRowNext = 0
            const r = tmRowNext++
            const row = Buffer.create(w)
            for (let c = 0; c < w; ++c) row[c] = data.getTile(c, r)
            const hash = row.hash(30)
            if (hash === tmRowHash[r]) continue
            tmRowHash[r] = hash
            budget--
            for (let c = 0; c < w; c += MAX_PAYLOAD - 4) {
                const n = Math.min(MAX_PAYLOAD - 4, w - c)
                const buf = Buffer.create(4 + n)
                buf.setNumber(NumberFormat.UInt16LE, 0, r)
                buf.setNumber(NumberFormat.UInt16LE, 2, c)
                buf.write(4, row.slice(c, n))
                hostServer.sendReg(REG_HOST_TILES, buf)
            }
        }
    }

    // nur Spieler 1: jede Abfrage von info.player2 schaltet die Anzeige des Hosts auf
    // den Mehrspieler-Modus um (initMultiHUD), auch wenn das Spiel sie nicht nutzt
    function sendInfo(slow: boolean) {
        const buf = Buffer.create(9)
        if (info.hasScore()) {
            buf[0] |= 1
            buf.setNumber(NumberFormat.Int32LE, 1, info.score())
        }
        if (info.hasLife()) {
            buf[0] |= 2
            buf.setNumber(NumberFormat.Int32LE, 5, info.life())
        }
        if (!lastInfo || slow || !buf.equals(lastInfo)) {
            lastInfo = buf
            hostServer.sendReg(REG_HOST_INFO, buf)
        }
    }

    // --- Gast ---

    function receivePlayfield(reg: number, data: Buffer) {
        if (!playfieldReady) return
        if (reg == REG_HOST_FRAME) receiveFrame(data)
        else if (reg == REG_HOST_IMAGE) receiveImage(data)
        else if (reg == REG_HOST_TILEMAP) receiveTilemap(data)
        else if (reg == REG_HOST_TILES) receiveTiles(data)
        else if (reg == REG_HOST_INFO) receiveInfo(data)
        else if (reg == REG_HOST_SAY) receiveSay(data)
    }

    // Bild eines Platzes; seine Pixel liegen in gPixels und werden dort ergaenzt
    function guestImage(slot: number, w: number, h: number) {
        let img = gImages[slot]
        if (!img || img.width != w || img.height != h) {
            const buf = imageWithBuffer(w, h)
            img = image.ofBuffer(buf)
            gImages[slot] = img
            gPixels[slot] = buf
            gTilemapHeader = null // Tilemap mit dem neuen Bild neu aufbauen
        }
        return img
    }

    function receiveImage(data: Buffer) {
        if (data.length < IMAGE_CHUNK_HEADER || !data[1] || !data[2]) return
        const slot = data[0]
        guestImage(slot, data[1], data[2])
        const offset = data.getNumber(NumberFormat.UInt16LE, 3)
        const n = data.length - IMAGE_CHUNK_HEADER
        const buf = gPixels[slot]
        if (IMAGE_HEADER_SIZE + offset + n > buf.length) return
        buf.write(IMAGE_HEADER_SIZE + offset, data.slice(IMAGE_CHUNK_HEADER, n))
    }

    function receiveFrame(data: Buffer) {
        if (data.length < FRAME_HEADER) return
        const now = control.millis()
        frameReceived = now
        const seq = data[0]
        const part = data[1]
        const sc = game.currentScene()
        sc.camera.offsetX = data.getNumber(NumberFormat.Int16LE, 3)
        sc.camera.offsetY = data.getNumber(NumberFormat.Int16LE, 5)
        sc.background.color = data[7]
        sc.background._image = data[8] == NO_IMAGE ? undefined : gImages[data[8]]

        let z = part * 32
        let k = FRAME_HEADER
        while (k + FRAME_ENTRY <= data.length) {
            const id = data.getNumber(NumberFormat.UInt16LE, k)
            const img = gImages[data[k + 2]]
            const left = data.getNumber(NumberFormat.Int16LE, k + 3)
            const top = data.getNumber(NumberFormat.Int16LE, k + 5)
            const flags = data[k + 7]
            k += FRAME_ENTRY
            let sx = 1
            let sy = 1
            let rotation = 0
            if (flags & ENTRY_TRANSFORM) {
                if (k + FRAME_TRANSFORM > data.length) break
                sx = data.getNumber(NumberFormat.Float32LE, k)
                sy = data.getNumber(NumberFormat.Float32LE, k + 4)
                rotation = data.getNumber(NumberFormat.Float32LE, k + 8)
                k += FRAME_TRANSFORM
            }
            if (!img) continue // Bild noch nicht angekommen

            let i = gIds.indexOf(id)
            let s: Sprite
            if (i < 0) {
                if (!gKind) gKind = SpriteKind.create()
                s = sprites.create(img, gKind)
                s.setFlag(SpriteFlag.Ghost, true)
                gIds.push(id)
                gSprites.push(s)
                gFrame.push(seq)
                gSeen.push(now)
                gSay.push(null)
                i = gIds.length - 1
            } else s = gSprites[i]
            s.setImage(img)
            if (s.sx != sx) s.sx = sx
            if (s.sy != sy) s.sy = sy
            if (s.rotation != rotation) s.rotation = rotation
            s.left = left
            s.top = top
            s.z = z++
            s.setFlag(SpriteFlag.RelativeToCamera, !!(flags & ENTRY_RELATIVE))
            s.setFlag(SpriteFlag.Invisible, false)
            gFrame[i] = seq
            gSeen[i] = now
        }

        if (part == data[2] - 1) {
            // nicht mehr gesendete Sprites ausblenden, nach einer Weile loeschen
            for (let i = gIds.length - 1; i >= 0; --i) {
                if (gFrame[i] == seq) continue
                if (now - gSeen[i] < 2000) {
                    gSprites[i].setFlag(SpriteFlag.Invisible, true)
                    continue
                }
                gSprites[i].destroy()
                gIds.removeAt(i)
                gSprites.removeAt(i)
                gFrame.removeAt(i)
                gSeen.removeAt(i)
                gSay.removeAt(i)
            }
        }
    }

    function receiveTilemap(data: Buffer) {
        if (data.length < 5) return
        if (gTilemapHeader && data.equals(gTilemapHeader)) return
        const w = data.getNumber(NumberFormat.UInt16LE, 0)
        const h = data.getNumber(NumberFormat.UInt16LE, 2)
        const sc = game.currentScene()
        if (!w || !h) {
            gTilemapHeader = data
            if (sc.tileMap && sc.tileMap.enabled) sc.tileMap.setData(null)
            return
        }
        const scale = data[4]
        const size = 1 << scale
        const set: Image[] = []
        for (let k = 5; k < data.length; ++k)
            set.push(data[k] == NO_IMAGE ? image.create(size, size) :
                gImages[data[k]] || guestImage(data[k], size, size))
        if (!gTilemap || gTilemap.getNumber(NumberFormat.UInt16LE, 0) != w ||
            gTilemap.getNumber(NumberFormat.UInt16LE, 2) != h) {
            gTilemap = Buffer.create(4 + w * h)
            gTilemap.setNumber(NumberFormat.UInt16LE, 0, w)
            gTilemap.setNumber(NumberFormat.UInt16LE, 2, h)
        }
        gTilemapHeader = data
        tiles.setCurrentTilemap(tiles.createTilemap(gTilemap, image.create(w, h), set, scale as TileScale))
    }

    function receiveTiles(data: Buffer) {
        if (!gTilemap || data.length < 4) return
        const w = gTilemap.getNumber(NumberFormat.UInt16LE, 0)
        const h = gTilemap.getNumber(NumberFormat.UInt16LE, 2)
        const row = data.getNumber(NumberFormat.UInt16LE, 0)
        const col = data.getNumber(NumberFormat.UInt16LE, 2)
        const n = data.length - 4
        if (row >= h || col + n > w) return
        gTilemap.write(4 + row * w + col, data.slice(4, n))
    }

    function receiveInfo(data: Buffer) {
        if (data.length < 9) return
        if (data[0] & 1) {
            const v = data.getNumber(NumberFormat.Int32LE, 1)
            if (!info.hasScore() || info.score() != v) info.setScore(v)
        }
        if (data[0] & 2) {
            const v = data.getNumber(NumberFormat.Int32LE, 5)
            // Leben 0 beendet sonst das Spiel auf dem Gast; das macht der Host
            if (!gLifeZero) {
                gLifeZero = true
                info.onLifeZero(() => { })
            }
            if (!info.hasLife() || info.life() != v) info.setLife(v)
        }
    }

    function receiveSay(data: Buffer) {
        const shown: number[] = []
        let k = 0
        while (k + SAY_ENTRY_HEADER <= data.length) {
            const id = data.getNumber(NumberFormat.UInt16LE, k)
            const fg = data[k + 2]
            const bg = data[k + 3]
            const len = data[k + 4]
            if (k + SAY_ENTRY_HEADER + len > data.length) break
            const text = data.slice(k + SAY_ENTRY_HEADER, len).toString()
            k += SAY_ENTRY_HEADER + len
            const i = gIds.indexOf(id)
            if (i < 0) continue
            shown.push(id)
            const key = fg + "/" + bg + "/" + text
            if (gSay[i] != key) {
                gSay[i] = key
                gSprites[i].sayText(text, undefined, false, fg, bg)
            }
        }
        for (let i = 0; i < gIds.length; ++i)
            if (gSay[i] && shown.indexOf(gIds[i]) < 0) {
                gSay[i] = null
                gSprites[i].sayText("")
            }
    }

    start()
}

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
            cmd == (SystemCmd.GetRegister | REG_HOST_GAME_STATE)
        ) {
            if (role == Role.Guest && id == myHost) {
                // zaehlt auch als Lebenszeichen des Hosts
                myHostSeen = control.millis()
                if (gameStateHandler) gameStateHandler(pkt.data)
            }
        } else if (
            cls == SRV_MULTIPLAYER_HOST &&
            cmd == (SystemCmd.GetRegister | REG_HOST_SCREEN)
        ) {
            if (role == Role.Guest && id == myHost) {
                myHostSeen = control.millis()
                receiveScreen(pkt.data)
            }
        }
    }

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
        while (true) {
            pause(MIRROR_INTERVAL)
            if (role != Role.Host || !mirroring || !hasGuests()) continue
            // neuer Gast: alles neu senden
            if (guests[0] != mirrorGuest) {
                mirrorGuest = guests[0]
                for (let i = 0; i < strips; ++i) mirrorSent[i] = -1
            }
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

    start()
}

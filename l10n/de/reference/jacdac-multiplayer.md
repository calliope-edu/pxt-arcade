# Jacdac-Mehrspielermodus

Spiele zu zweit: Verbinde zwei Calliope mini mit GameKit über ein **Jacdac-Kabel**. Ein Calliope mini führt das Spiel aus, der zweite wird zum Controller für **Spieler 2**.

![Jacdac-Kabel](/static/libs/jacdac-multiplayer.png)

## So funktioniert's

1. Lade das **gleiche Programm** auf beide Calliope mini. Die Erweiterung prüft das: Läuft auf dem anderen Calliope mini ein anderes Spiel, erscheint statt der Frage zum Mitspielen kurz die Meldung **"Anderes Spiel erkannt"**.
2. Verbinde die beiden Geräte über ihre **Jacdac-Buchsen** mit einem Jacdac-Kabel.
3. Auf beiden Displays erscheint die Frage **"Calliope mini erkannt! Mitspielen?"**.
4. Drücke auf **einem** der beiden Geräte **A = Ja**. Dieses Gerät wird zum Controller und zeigt **"Verbunden – Du bist Spieler 2"**.
5. Auf dem anderen Gerät läuft das Spiel weiter. Dort steuerst du **Spieler 1**, und der Controller steuert **Spieler 2**.

Mit **B = Nein** spielt jedes Gerät weiter sein eigenes Spiel.

## ~ hint

**Nur ein Bildschirm zeigt das Spiel.** Das Spiel läuft auf dem Gerät, auf dem niemand "Ja" gedrückt hat. Der Controller zeigt nur an, ob er verbunden ist – außer du verwendest den Block **Bildschirm an Spieler 2 spiegeln** (siehe unten).

## ~

## Spieler 2 in deinem Programm

Zum Steuern braucht die Erweiterung keine eigenen Blöcke (ihre Blöcke für den zweiten Bildschirm findest du weiter unten). Spieler 2 programmierst du mit den normalen **Controller**-Blöcken für **Spieler 2**: Alles, was auf dem Controller gedrückt wird, kommt im Spiel als Taste von Spieler 2 an.

```cards
controller.player2.moveSprite(null)
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

Gesendet werden die Richtungstasten sowie **A** und **B**. Die **Menü**-Taste bleibt auf dem Controller.

## Beispiel: zwei Figuren #example

Spieler 1 steuert die rote Figur, Spieler 2 auf dem zweiten Calliope mini die grüne. Mit **A** sagt jede Figur "Hallo!". Sobald der Controller verbunden ist, erscheint eine Meldung.

```blocks
let rot = sprites.create(img`
    . . 2 2 2 2 . .
    . 2 2 2 2 2 2 .
    2 2 1 2 2 1 2 2
    2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    2 2 1 1 1 1 2 2
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
`, SpriteKind.Player)
let gruen = sprites.create(img`
    . . 7 7 7 7 . .
    . 7 7 7 7 7 7 .
    7 7 1 7 7 1 7 7
    7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7
    7 7 1 1 1 1 7 7
    . 7 7 7 7 7 7 .
    . . 7 7 7 7 . .
`, SpriteKind.Player)
rot.setPosition(50, 60)
gruen.setPosition(110, 60)
rot.setStayInScreen(true)
gruen.setStayInScreen(true)
controller.moveSprite(rot)
controller.player2.moveSprite(gruen)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rot.sayText("Hallo!", 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    gruen.sayText("Hallo!", 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("Spieler 2 ist da!")
})
```

## Beispiel: wenn Spieler 2 das Kabel zieht

Kommen keine Daten mehr vom Controller, lässt das Spiel nach kurzer Zeit alle Tasten von Spieler 2 los, damit seine Figur stehen bleibt. Erst nach etwa 6 Sekunden ohne Verbindung meldet das Spiel, dass Spieler 2 nicht mehr verbunden ist – so führen kurze Aussetzer am Kabel nicht zu einer Trennung.

```blocks
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.splash("Spieler 2 ist weg", "Kabel prüfen!")
})
```

Der Controller zeigt **"Verbindung getrennt"**. Mit **B** startet er neu und kehrt zu seinem eigenen Spiel zurück.

## ~ hint

**Tipps**

* **Strom:** Jeder Calliope mini braucht eine eigene Stromversorgung (USB oder Batterie). Das Jacdac-Kabel versorgt kein zweites GameKit mit Strom.
* **Zwei Spieler:** Der Mehrspielermodus verbindet genau **zwei** Calliope mini.
* **Neu verbinden:** Wenn "Nein" gewählt wurde, starte beide Calliope mini neu, damit die Frage wieder erscheint.
* **Kabel:** Beide Jacdac-Buchsen des Calliope mini funktionieren gleich – du kannst jede davon verwenden.
* **Nicht mischen:** Verwende diese Erweiterung und die normale **Jacdac**-Erweiterung nicht im selben Projekt.

## ~

## Bildschirm an Spieler 2 spiegeln

Mit diesem Block (Kategorie **Controller**, Gruppe **Mehrspieler**) zeigt auch der Calliope mini von Spieler 2 das Spiel. Setze ihn in **beim Start**:

```blocks
jacdac.multiplayer.mirrorScreen()
```

Der Host schickt sein Bild über das Jacdac-Kabel, aber nur die Teile, die sich seit dem letzten Mal geändert haben. Theoretisch passen etwa **4 bis 5 komplett neue Bilder pro Sekunde** durch das Kabel. Ändert sich nur wenig (eine Figur läuft über einen ruhigen Hintergrund), ist das Bild für Spieler 2 viel flüssiger. Bei Spielen mit scrollendem Hintergrund oder vielen bewegten Teilen ruckelt der zweite Bildschirm. Der Host schickt nur so viel, wie er kann, während die Tasten von Spieler 2 trotzdem sofort durchkommen.

Das Spiel läuft weiterhin nur auf dem Host. Der zweite Calliope mini zeigt das gespiegelte Bild und ist gleichzeitig der Controller: Seine Tasten steuern **Spieler 2** im Spiel, genau wie ohne Spiegeln. Spieler 2 programmierst du also wie oben mit den Controller-Blöcken für **Spieler 2**.

**Bildrate anzeigen:** Drücke die **MENU**-Taste am Calliope mini von Spieler 2. Oben siehst du die empfangenen Pakete pro Sekunde und wie viele vollständige Bilder das ergeben würde. Drücke **MENU** erneut, um die Anzeige auszublenden.

## Spielfeld an Spieler 2 senden

Flüssiger als Spiegeln: Mit diesem Block (Kategorie **Controller**, Gruppe **Mehrspieler**) schickt der Host nicht das fertige Bild, sondern das, was auf dem Spielfeld ist. Setze ihn in **beim Start**:

```blocks
jacdac.multiplayer.sendPlayfield()
```

Der Calliope mini von Spieler 2 baut daraus Sprites, Tilemap, Kamera, Hintergrund, **Punkte und Leben von Spieler 1** sowie Sprechblasen nach und zeichnet sie selbst. Pro Bild gehen nur Positionen über das Kabel; jedes Bild und jede Kachel wird nur einmal geschickt. Deshalb bleibt das Bild auch in scrollenden Spielen flüssig. Das Spiel läuft weiterhin nur auf dem Host, und das Gerät von Spieler 2 steuert wie immer **Spieler 2**.

Zeigt der Host etwas anderes als das Spielfeld (z. B. **game.splash**, einen Dialog oder "Game Over"), wird dieses Bild wie beim Spiegel-Block gespiegelt.

## ~ hint

**Nicht übertragen werden:** Partikeleffekte, Bilder, die das Spiel selbst auf den Bildschirm zeichnet, Hintergrundebenen (Parallaxe) sowie Punkte und Leben von **Spieler 2**. Für Spieler 2 schickst du die Punkte mit den Wert-Blöcken (siehe unten).

## ~

## Werte an Spieler 2 senden

Mit diesen Blöcken baust du die Ansicht von Spieler 2 selbst. Der Host schickt benannte Zahlen, z. B. die Position des Balls. Wenn das Gerät von Spieler 2 beitritt, erstellt es eigene Sprites und bewegt sie zu den empfangenen Werten. Ein Wert wird sofort geschickt, wenn er sich ändert, und regelmäßig wiederholt.

```cards
jacdac.multiplayer.sendValue("x", 0)
jacdac.multiplayer.onValue("x", function (value) {})
jacdac.multiplayer.receivedValue("x")
jacdac.multiplayer.onStartAsGuest(function () {})
jacdac.multiplayer.isGuest()
```

Da auf beiden Calliope mini **das gleiche Programm** läuft, sind beide Seiten im selben Projekt: **beim Start als Spieler 2** läuft nur auf dem Gerät von Spieler 2, und **ist Spieler 2** unterscheidet die beiden Geräte in Schleifen. Der Bildschirm "Verbunden – Du bist Spieler 2" erscheint nicht, sobald du **beim Start als Spieler 2** verwendest.

## Beispiel: Ball auf beiden Bildschirmen

```blocks
let ball2: Sprite = null
let ball = sprites.create(img`
    . 5 5 .
    5 5 5 5
    5 5 5 5
    . 5 5 .
`, SpriteKind.Projectile)
ball.setVelocity(50, 35)
ball.setBounceOnWall(true)
game.onUpdate(function () {
    jacdac.multiplayer.sendValue("x", ball.x)
    jacdac.multiplayer.sendValue("y", ball.y)
    jacdac.multiplayer.sendValue("score 2", info.player2.score())
})
jacdac.multiplayer.onStartAsGuest(function () {
    ball2 = sprites.create(img`
        . 5 5 .
        5 5 5 5
        5 5 5 5
        . 5 5 .
    `, SpriteKind.Projectile)
})
jacdac.multiplayer.onValue("score 2", function (value) {
    info.player2.setScore(value)
})
game.onUpdate(function () {
    if (jacdac.multiplayer.isGuest() && ball2) {
        ball2.setPosition(jacdac.multiplayer.receivedValue("x"), jacdac.multiplayer.receivedValue("y"))
    }
})
```

Der Wert "score 2" zeigt auch, wie du mit **Spielfeld an Spieler 2 senden** die Punkte von Spieler 2 überträgst: Die Wert-Blöcke funktionieren zusätzlich zum Spielfeld.

## ~ hint

**Speicher:** Mehrspielerspiele mit Sprites, Kollisionen und Punkten sind meist zu groß für die Übertragung per Bluetooth. Der Editor erstellt sie dann automatisch für die Übertragung mit dem USB-Kabel (siehe [Ohne Bluetooth](/reference/usb-only)). **Spielfeld an Spieler 2 senden** braucht etwa 18 KB, die Wert-Blöcke etwa 5 KB.

## ~

## Für Fortgeschrittene: das Spiel auf beiden Bildschirmen

Was die Wert-Blöcke tun, funktioniert in **JavaScript** auch mit einem eigenen Datenpaket: Der Host schickt regelmäßig einen kleinen **Spielzustand** (zum Beispiel Positionen und Punkte, bis zu etwa 200 Bytes), und der Gast zeichnet daraus seine eigene Ansicht.

```typescript-ignore
// Host: etwa 10-20 mal pro Sekunde den Zustand schicken
const state = Buffer.create(4)
state[0] = info.score()
jacdac.multiplayer.sendGameState(state)

// Gast: Zustand empfangen ...
let punkte = 0
jacdac.multiplayer.onGameState(function (data) {
    punkte = data[0]
})
// ... und statt "Verbunden" jedes Bild selbst zeichnen
jacdac.multiplayer.setGuestRenderer(function (target) {
    target.fill(9)
    target.printCenter("Punkte: " + punkte, 50, 1)
})
```

`jacdac.multiplayer.isGuest()` sagt dir, ob dein Gerät gerade der Gast ist. Die gesamte Spiellogik läuft immer auf dem Host; der Gast schickt weiterhin nur seine Tasten.

## Technischer Hintergrund

Jacdac ist ein Bus über eine einzige Datenleitung (beim Calliope mini V3 an Pin **P12**). Jedes Gerät meldet sich dort regelmäßig. Der Controller schickt alle 100 Millisekunden seinen vollständigen Tastenzustand und zusätzlich sofort, wenn sich etwas ändert, einschließlich eines Zählers für jeden Tastendruck. So geht selbst ein sehr kurzer Druck nicht verloren, wenn ein Datenpaket auf dem Kabel verschluckt wird.

## Siehe auch

[Controller](/reference/controller),
[Jacdac](https://jacdac.github.io/jacdac-docs/)

```package
jacdac-multiplayer
```

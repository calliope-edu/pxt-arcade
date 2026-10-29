# Jacdac-Mehrspielermodus

Spielt zu zweit: Verbinde zwei Calliope mini mit GameKit über ein **Jacdac-Kabel**. Ein Calliope mini führt das Spiel aus, der zweite wird zum Controller für **Spieler 2**.

![Jacdac-Kabel](/static/libs/jacdac-multiplayer.png)

## So funktioniert es

1. Spiele **dasselbe Programm** auf beide Calliope mini. Die Erweiterung prüft das: Läuft auf dem anderen Calliope mini ein anderes Spiel, erscheint kurz der Hinweis **„Anderes Spiel erkannt“** statt der Frage zum Mitspielen.
2. Verbinde die beiden Geräte über ihre **Jacdac-Buchsen** mit einem Jacdac-Kabel.
3. Auf beiden Displays erscheint die Frage **„Calliope mini erkannt! Mitspielen?“**.
4. Drücke auf **einem** der beiden Geräte **A = Ja**. Dieses Gerät wird zum Controller und zeigt **„Verbunden – Du bist Spieler 2“**.
5. Auf dem anderen Gerät läuft das Spiel weiter. Dort steuerst du **Spieler 1**, der Controller steuert **Spieler 2**.

Mit **B = Nein** spielt jedes Gerät sein eigenes Spiel weiter.

## ~ hint

**Nur ein Bildschirm zeigt das Spiel.** Das Spiel läuft auf dem Gerät, auf dem niemand „Ja“ gedrückt hat. Der Controller zeigt nur, ob er verbunden ist – außer du verwendest den Block **Bildschirm an GameKit 2 spiegeln** (siehe unten).

## ~

## Spieler 2 im Programm

Für das Steuern braucht die Erweiterung keine eigenen Blöcke (ihre Blöcke für den zweiten Bildschirm stehen weiter unten). Du programmierst Spieler 2 mit den normalen **Controller**-Blöcken für **Spieler 2**: Alles, was am Controller gedrückt wird, kommt im Spiel als Taste von Spieler 2 an.

```cards
controller.player2.moveSprite(null)
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

Übertragen werden die Richtungstasten sowie **A** und **B**. Die **Menü**-Taste bleibt auf dem Controller.

## Beispiel: Zwei Figuren #example

Spieler 1 steuert die rote Figur, Spieler 2 am zweiten Calliope mini die grüne. Mit **A** sagt die jeweilige Figur „Hallo!“. Sobald der Controller verbunden ist, erscheint eine Meldung.

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

## Beispiel: Wenn Spieler 2 das Kabel zieht

Kommen keine Daten mehr vom Controller, lässt das Spiel nach kurzer Zeit alle Tasten von Spieler 2 los, damit seine Figur stehen bleibt. Erst nach etwa 6 Sekunden ohne Verbindung meldet das Spiel, dass Spieler 2 nicht mehr verbunden ist – kurze Aussetzer auf dem Kabel führen so nicht zu einer Trennung.

```blocks
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.splash("Spieler 2 ist weg", "Kabel prüfen!")
})
```

Auf dem Controller erscheint **„Verbindung getrennt“**. Mit **B** startet er neu und kehrt zu seinem eigenen Spiel zurück.

## ~ hint

**Tipps**

* **Strom:** Jeder Calliope mini braucht seine eigene Stromversorgung (USB oder Batterie). Über das Jacdac-Kabel wird kein zweites GameKit versorgt.
* **Zwei Spieler:** Der Mehrspielermodus verbindet genau **zwei** Calliope mini.
* **Neu verbinden:** Wurde „Nein“ gewählt, starte beide Calliope mini neu, damit die Frage wieder erscheint.
* **Kabel:** Beide Jacdac-Buchsen des Calliope mini funktionieren gleich – du kannst jede verwenden.
* **Nicht mischen:** Verwende in einem Projekt nicht gleichzeitig diese Erweiterung und die normale **Jacdac**-Erweiterung.

## ~

## Bildschirm an GameKit 2 spiegeln

Mit diesem Block (Kategorie **Controller**, Gruppe **Multiplayer**) zeigt auch der Calliope mini von Spieler 2 das Spiel. Setze ihn in **beim Start**:

```blocks
jacdac.multiplayer.mirrorScreen()
```

Der Host schickt sein Bild über das Jacdac-Kabel, und zwar nur die Teile, die sich seit dem letzten Mal geändert haben. Rechnerisch passen etwa **4 bis 5 komplett neue Bilder pro Sekunde** über das Kabel. Ändert sich nur wenig (eine Figur läuft über einen ruhigen Hintergrund), ist das Bild bei Spieler 2 deutlich flüssiger. Bei Spielen mit scrollendem Hintergrund oder vielen bewegten Teilen ruckelt es auf dem zweiten Bildschirm. Der Host schickt nur so viel, dass die Tasten von Spieler 2 weiterhin sofort durchkommen.

Das Spiel läuft dabei weiter nur auf dem Host. Der zweite Calliope mini zeigt das gespiegelte Bild und ist gleichzeitig der Controller: Seine Tasten steuern im Spiel **Spieler 2**, genau wie ohne Spiegeln. Du programmierst Spieler 2 also wie oben mit den Controller-Blöcken für **Spieler 2**.

**Bildrate anzeigen:** Drücke am Calliope mini von Spieler 2 die **MENU**-Taste. Oben erscheinen die empfangenen Pakete pro Sekunde und wie viele komplette Bilder das ergeben würde. Nochmal **MENU** blendet die Anzeige wieder aus.

## Spielfeld an GameKit 2 senden

Flüssiger als das Spiegeln: Mit diesem Block (Kategorie **Controller**, Gruppe **Multiplayer**) schickt der Host nicht das fertige Bild, sondern was auf dem Spielfeld liegt. Setze ihn in **beim Start**:

```blocks
jacdac.multiplayer.sendPlayfield()
```

GameKit 2 baut daraus Sprites, Tilemap, Kamera, Hintergrund, **Punkte und Leben von Spieler 1** und Sprechblasen nach und zeichnet sie selbst. Pro Bild gehen nur Positionen über das Kabel; jedes Bild und jede Kachel wird nur einmal geschickt. Deshalb bleibt das Bild auch bei scrollenden Spielen flüssig. Das Spiel läuft weiter nur auf dem Host, und GameKit 2 steuert wie immer **Spieler 2**.

Zeigt der Host etwas anderes als das Spielfeld (z. B. **game.splash**, einen Dialog oder „Game Over“), wird dieses Bild wie beim Spiegeln übertragen.

## ~ hint

**Was nicht übertragen wird:** Partikeleffekte, Bilder, die das Spiel selbst auf den Bildschirm zeichnet, Hintergrund-Ebenen (Parallax) und die Punkte und Leben von **Spieler 2**. Für Spieler 2 kannst du die Punkte mit den Wert-Blöcken übertragen (siehe unten).

## ~

## Werte an GameKit 2 senden

Mit diesen Blöcken baust du die Ansicht von GameKit 2 selbst. Der Host schickt benannte Zahlen, z. B. die Position des Balls. GameKit 2 erstellt beim Beitreten eigene Sprites und setzt sie auf die empfangenen Werte. Ein Wert wird bei jeder Änderung sofort gesendet und regelmäßig wiederholt.

```cards
jacdac.multiplayer.sendValue("x", 0)
jacdac.multiplayer.onValue("x", function (value) {})
jacdac.multiplayer.receivedValue("x")
jacdac.multiplayer.onStartAsGuest(function () {})
jacdac.multiplayer.isGuest()
```

Da auf beiden Calliope mini **dasselbe Programm** läuft, stehen beide Seiten im selben Projekt: **wenn dieses Gerät GameKit 2 wird** läuft nur auf GameKit 2, und **ist GameKit 2** unterscheidet die beiden Geräte in Schleifen. Die Anzeige „Verbunden – Du bist Spieler 2“ erscheint nicht, sobald du **wenn dieses Gerät GameKit 2 wird** verwendest.

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
    jacdac.multiplayer.sendValue("punkte 2", info.player2.score())
})
jacdac.multiplayer.onStartAsGuest(function () {
    ball2 = sprites.create(img`
        . 5 5 .
        5 5 5 5
        5 5 5 5
        . 5 5 .
    `, SpriteKind.Projectile)
})
jacdac.multiplayer.onValue("punkte 2", function (value) {
    info.player2.setScore(value)
})
game.onUpdate(function () {
    if (jacdac.multiplayer.isGuest() && ball2) {
        ball2.setPosition(jacdac.multiplayer.receivedValue("x"), jacdac.multiplayer.receivedValue("y"))
    }
})
```

Der Wert „punkte 2“ zeigt auch, wie du mit **Spielfeld an GameKit 2 senden** die Punkte von Spieler 2 überträgst: Die Wert-Blöcke funktionieren zusätzlich zum Spielfeld.

## ~ hint

**Speicher:** Mehrspieler-Spiele mit Sprites, Kollisionen und Punkten sind meist zu groß für die Übertragung per Bluetooth. Der Editor erstellt sie dann automatisch für die Übertragung per USB-Kabel (siehe [Ohne Bluetooth](/reference/usb-only)). **Spielfeld an GameKit 2 senden** braucht etwa 18 KB, die Wert-Blöcke etwa 5 KB.

## ~

## Für Fortgeschrittene: das Spiel auf beiden Bildschirmen

Dasselbe wie mit den Wert-Blöcken geht in **JavaScript** auch mit einem eigenen Datenpaket: Der Host schickt regelmäßig einen kleinen **Spielzustand** (z. B. Positionen und Punkte, bis etwa 200 Byte), und der Gast zeichnet daraus seine eigene Ansicht.

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

Mit `jacdac.multiplayer.isGuest()` erfährst du, ob dein Gerät gerade Gast ist. Gerechnet wird immer auf dem Host; der Gast schickt weiterhin nur seine Tasten.

## Technischer Hintergrund

Jacdac ist ein Bus über ein einzelnes Datenkabel (beim Calliope mini V3 am Pin **P12**). Jedes Gerät meldet sich dort regelmäßig an. Der Controller sendet seinen kompletten Tastenzustand alle 100 Millisekunden und zusätzlich sofort bei jeder Änderung, inklusive eines Zählers für jeden Tastendruck. So geht auch ein sehr kurzer Druck nicht verloren, wenn einmal ein Datenpaket auf dem Kabel verschluckt wird.

## Siehe auch

[Controller](/reference/controller),
[Jacdac](https://jacdac.github.io/jacdac-docs/)

```package
jacdac-multiplayer
```

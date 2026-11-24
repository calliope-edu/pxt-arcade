# setze Standard-Wiederholung

Lege die Zeit für wiederholte Tastenereignisse für alle Controller-Tasten fest.

```sig
controller.setRepeatDefault(0, 0)
```

Wenn du ein wiederholtes Tastenereignis verwendest, möchtest du vielleicht festlegen, wann und wie oft dein Spiel über einen Tastendruck informiert wird, wenn eine Controller-Taste lange gedrückt gehalten wird. Du kannst die Zeit zwischen dem ersten Drücken einer Taste und dem Moment festlegen, in dem dein Programm erfährt, dass die Taste gedrückt ist. So entscheidest du, ab welcher Dauer ein Tastendruck für dein Spiel gilt. Wenn der Spieler die Taste gedrückt hält, will dein Spiel wahrscheinlich nur ab und zu davon erfahren, um Aktualisierungen vorzunehmen. Deshalb kannst du auch die Zeit zwischen den Ereignissen festlegen, die deinem Programm mitteilen, dass eine Taste noch gedrückt ist.

## Parameter

* **delay**: die [Anzahl](/types/number) an Millisekunden, die zwischen dem Drücken einer Taste und dem Empfang des Tastenereignisses durch das Programm gewartet wird.
* **interval**: die [Anzahl](/types/number) an Millisekunden zwischen mehreren Tastenereignissen, solange eine Taste gedrückt bleibt.

## Beispiel #example

Erstelle ein Sprite mit einem runden Bild. Setze die Wiederholzeit für Tastenereignisse auf `200` Millisekunden, wenn eine Controller-Taste gedrückt gehalten wird. Bewege das Sprite nach unten rechts, wenn Taste **A** gedrückt wird. Wenn Taste **B** gedrückt wird, schicke das Sprite schneller in die andere Richtung.

```blocks
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    meinSprite.top += 1
    meinSprite.left += 1
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    meinSprite.top += -4
    meinSprite.left += -4
})
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
meinSprite.top = 0
meinSprite.left = 0
controller.setRepeatDefault(500, 200)
```

## Siehe auch #seealso

[wenn Ereignis](/reference/controller/on-event)

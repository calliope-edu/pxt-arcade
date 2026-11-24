# langen Text anzeigen

Zeige ein Dialogfenster mit einem längeren Text an.

```sig
game.showLongText("", DialogLayout.Bottom)
```

Wenn du deinem Spieler eine lange Nachricht geben möchtest, kannst du dafür einen Dialog mit langem Text verwenden. Der Dialog erscheint an der Stelle auf dem Bildschirm, die du auswählst: an einem der Bildschirmränder, in der Mitte oder auf dem ganzen Bildschirm.

Wenn der Spieler die Nachricht fertig gelesen hat, wird der Dialog mit der Taste **A** geschlossen und das Spiel geht weiter. Ist der Text zu lang, um ihn auf einmal zu sehen, kann der Spieler auf das Dialogfenster klicken, um weiterzublättern.

## Parameter

* **str**: eine [Zeichenkette](/types/string) mit dem Text, der im Dialog angezeigt wird.
* **layout**: die Position des Dialogs auf dem Bildschirm. Die Positionen sind:
>* ``left``: der Dialog wird am linken Bildschirmrand angezeigt
>* ``right``: der Dialog wird am rechten Bildschirmrand angezeigt
>* ``top``: der Dialog wird am oberen Bildschirmrand angezeigt
>* ``bottom``: der Dialog wird am unteren Bildschirmrand angezeigt
>* ``center``: der Dialog wird in der Bildschirmmitte angezeigt
>* ``full screen``: der Dialog nimmt den ganzen Bildschirm ein

## Beispiel #example

### Text auf allen Seiten #ex1

Zeige für jede gedrückte Controller-Taste einen Dialog mit langem Text an einer anderen Bildschirmposition an.

```blocks
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the left", DialogLayout.Left)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the right", DialogLayout.Right)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the top", DialogLayout.Top)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the bottom", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text in the center", DialogLayout.Center)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text in full screen", DialogLayout.Full)
})
```

### Den Text durchblättern

Zeige eine sehr lange Zeichenkette in einem Dialog mit langem Text an, wenn die Taste **A** gedrückt wird. Blättere durch den Dialog, um den ganzen Text zu sehen.

```blocks
let veryLongText = "A very"
for (let i = 0; i < 40; i++) {
    veryLongText = veryLongText + ", very"
}
veryLongText = veryLongText + " long text string!"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText(veryLongText, DialogLayout.Center)
})
```

[Dialog-Textfarbe festlegen](/reference/game/set-dialog-text-color)

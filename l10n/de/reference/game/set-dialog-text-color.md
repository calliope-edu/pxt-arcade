# Dialog-Textfarbe festlegen

Lege die Farbe für den Text fest, der im Dialog mit langem Text angezeigt wird.

```sig
game.setDialogTextColor(0)
```

## Parameter

* **color**: die [Zahl](/types/number) der Farbe, mit der der Dialogtext angezeigt wird.

## Beispiel #example

Zeige Text mit der Farbe `10` im Dialog mit langem Text an.

```blocks
game.setDialogTextColor(10)
game.showLongText("Some long text with color!", DialogLayout.Center)
```

## Siehe auch #seealso

[Dialograhmen festlegen](/reference/game/set-dialog-frame),
[Dialog-Cursor festlegen](/reference/game/set-dialog-cursor),
[langen Text anzeigen](/reference/game/show-long-text)



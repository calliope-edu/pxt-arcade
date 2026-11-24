# Dialog-Cursor festlegen

Lege das Bild für den Dialog-Cursor fest.

```sig
game.setDialogCursor(null)
```

Der Dialog-Cursor ist ein kleines Bild, das im Dialograhmen angezeigt wird. Es zeigt dem Spieler, mit welcher Taste der Dialog geschlossen wird. Du kannst das Aussehen des Cursors ändern, indem du ein anderes Bild dafür festlegst.

Mit einem leeren Bild kannst du wieder den ursprünglichen (Standard-)Cursor verwenden:

```block
game.setDialogCursor(img``)
```

## Parameter

* **cursor**: ein [Bild](/types/image), das als Dialog-Cursor verwendet wird.

## Beispiele #example

Erstelle ein neues rundes Cursorbild mit einem fetten Buchstaben darin. Lege das Bild als neuen Dialog-Cursor fest.

```blocks
game.setDialogCursor(img`
. . 8 8 8 8 8 8 . . 
. 8 8 8 1 1 8 8 8 . 
8 8 8 1 8 8 1 8 8 8 
8 8 8 1 1 1 1 8 8 8 
8 8 8 1 8 8 1 8 8 8 
8 8 8 1 8 8 1 8 8 8 
. 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 . . 
`)
game.showLongText("A new, much bolder cursor!", DialogLayout.Center)
```

## Siehe auch #seealso

[Dialograhmen festlegen](/reference/game/set-dialog-frame),
[Dialog-Textfarbe festlegen](/reference/game/set-dialog-text-color),
[langen Text anzeigen](/reference/game/show-long-text)


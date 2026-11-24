# Dialograhmen festlegen

Lege das Rahmenbild für das Dialogfenster mit langem Text fest.

```sig
game.setDialogFrame(null)
```
Ein Dialograhmen umfasst den äußeren Rand und das Innere des Dialogs. Du erstellst einen Dialograhmen, indem du ein [Bild](/types/image) anlegst, dessen Pixel den Rand und das Innere des Rahmens darstellen.

Das Rahmenbild braucht genug Pixel, damit der Dialog weiß, wie das Rahmendesign aussehen soll. Der einfachste Rahmen ist ein Bild mit 3 Zeilen und 3 Spalten. Das reicht, um festzulegen, welche Farben die Ränder haben und welche Farbe die Mitte hat:

```block
game.setDialogFrame(img`
9 9 9 
9 5 9 
9 9 9 
`)
```

Mit einem leeren Bild kannst du den Rahmen wieder auf den ursprünglichen (Standard-)Rahmen zurücksetzen:

```block
game.setDialogFrame(img``)
```

## Parameter

* **frame**: ein [Bild](/types/image), das als Dialograhmen verwendet wird.

## Beispiele #example

### Einfacher Rahmen

Zeige eine Nachricht in einem Dialog mit einem einfachen Rahmen aus einem `3` x `3` großen Bild.

```blocks
game.setDialogFrame(img`
3 3 3
3 9 3
3 3 3
`)
game.showLongText("A really simple frame here", DialogLayout.Center)
```

### Schicker Rahmen #ex2

Erstelle einen neuen Dialograhmen mit einem schicken Rand und einer Farbe im Inneren.

```blocks
game.showLongText("Here's the old frame...", DialogLayout.Center)
game.setDialogFrame(img`
2 2 1 1 2 2 1 1 2 2 1 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 1 2 2 1 1 2 2 1 1 2 2 
`)
game.showLongText("How do you like my new fancy frame?", DialogLayout.Center)
```

## Siehe auch #seealso

[Dialog-Cursor festlegen](/reference/game/set-dialog-cursor),
[Dialog-Textfarbe festlegen](/reference/game/set-dialog-text-color),
[langen Text anzeigen](/reference/game/show-long-text)


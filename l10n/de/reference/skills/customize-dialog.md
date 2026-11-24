## Einen Dialog anpassen

Mit dem Block ``||game:zeige langen Text||`` wird ein Text in einem umrahmten _Dialog_ auf dem Bildschirm angezeigt. Text, Dialograhmen und Cursor werden in Standardfarben angezeigt. Wenn du diese Elemente an die Farben deines Spiels anpassen möchtest, kannst du eigene Farben und Bilder für sie auswählen.

### Dialoge

Ein Dialog ist ein umrahmtes Feld mit einer Textnachricht, das beim Anzeigen einen Teil des Bildschirms verdeckt. Ein Dialog wird mit dem Block ``||game:zeige langen Text||`` erstellt. Für Text, Dialograhmen und Cursor sind Standardfarben und -bilder festgelegt.

```block
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

#### Dialogelemente

* Die im Dialog angezeigte Nachricht ist das, was du als Text-Parameter für ``||game:zeige langen Text||`` festlegst.
* Der Dialograhmen ist ein Bild, das als Hintergrund hinter der Textnachricht angezeigt wird.
* Ein Dialog-Cursor ist ein Symbol, das dir zeigt, dass du eine Taste drücken sollst, um den Dialog zu schließen und dein Spiel fortzusetzen.

```sim
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

### Die Textfarbe ändern

Eine eigene Farbe für den Text einer Dialognachricht legst du mit dem Block ``||game:setze Dialog-Textfarbe||`` fest.

```blocks
game.setDialogTextColor(2)
game.showLongText("Let's use red for the dialog text color.", DialogLayout.Top)
```

### Den Dialograhmen ändern

Der Dialograhmen ist ein Hintergrundbild, das festlegt, was hinter dem Nachrichtentext des Dialogs angezeigt wird. Normalerweise hat das Bild eine Randfarbe an seiner Kante und eine einfarbige Fläche oder ein Muster für den restlichen Hintergrund. Wenn das Rahmenbild kleiner ist als der angezeigte Dialog, wird das Bild vergrößert, um die Fläche des Dialogs auszufüllen.

```blocks
game.setDialogFrame(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `)
game.showLongText("Like my dialog border and background?", DialogLayout.Center)
```

### Den Dialog-Cursor ändern

Der Dialog-Cursor ist ein kleines Symbol unten rechts im Dialograhmen. Er ist ein Hinweis darauf, dass du eine Taste drücken sollst, um den Dialog zu schließen. Du kannst dein eigenes Cursor-Bild zeichnen und es mit ``||game:setze Dialog-Cursor||`` für deine Dialoge festlegen.

```blocks
game.setDialogCursor(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f 5 5 5 5 5 f f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 f f f f f 5 f f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 f f f f f f f 5 f f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 f f f f f f f f f 5 f f 
    f f 5 5 f f f f f f f f f 5 5 f 
    f f 5 f f f f f f f f f f f 5 f 
    f f f f f f f f f f f f f f f f 
    `)
game.showLongText("Use my own dialog cursor image.", DialogLayout.Right)
```

### Beispiel

Das folgende Beispiel ersetzt alle drei Standard-Dialogelemente durch eigene.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Once upon a time, dialogs only had default colors. Well, let's change that.", DialogLayout.Bottom)
})
game.setDialogTextColor(1)
game.setDialogCursor(img`
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    `)
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
```

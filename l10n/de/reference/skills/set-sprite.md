## Ein Haupt-Sprite hinzufügen

Füge deinem Projekt ein Haupt-Sprite hinzu.

Dein Haupt-Sprite ist normalerweise deine Spielfigur, es kann aber auch Text oder ein anderes wichtiges Element sein.

Wenn dein Haupt-Sprite eine Spielfigur ist, möchtest du es wahrscheinlich mit dem Controller bewegen können. Außerdem möchtest du es vermutlich entweder auf dem Bildschirm halten oder die Kamera ihm folgen lassen, wenn es den Spielbereich verlässt.


### Beispielcode

Haupt-Sprite auf dem Bildschirm halten:

```block
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(meinSprite)
meinSprite.setFlag(SpriteFlag.StayInScreen, true)

```


Haupt-Sprite mit der Kamera folgen:

```block
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(meinSprite)
scene.cameraFollowSprite(meinSprite)

```

### Dein neues Sprite einrichten

Im Allgemeinen fügst du den Code zum Einrichten deines Sprites in den Container **beim Start** ein. Wenn du schon fortgeschrittener bist, kannst du dein Sprite in einer Funktion einrichten und diese Funktion in **beim Start** aufrufen.

#### Dem Sprite einen Namen geben

Das erste Argument im Block **setze [meinSprite] auf** ist der Name der [__*Variablen*__](#varied "eine Bezeichnung, die den Platz für etwas freihält, das sich ändern kann"), die das Sprite in deinem Programm darstellt. Wenn du dein Sprite zum Beispiel **meinSprite** nennst, musst du darauf achten, **meinSprite** auch in anderen Blöcken auszuwählen, die seine Eigenschaften festlegen.


#### Die Sprite-Art festlegen

Das letzte Argument im Block **setze [meinSprite] auf** ist die [__*Art*__](#kindness "die Gruppe (oder Klasse), zu der es gehört"). Damit legst du fest, zu welcher Gruppe das Sprite gehört. Wenn du ein Sprite als deine Hauptspielfigur festlegst, solltest du die **Art** in der Regel auf **Player** lassen.


#### Sprite-Bild bearbeiten

Klicke auf das graue Quadrat (im grauen Oval), um zum Bild-Editor zu gelangen. Dort kannst du eines von drei Dingen tun:

1. Ein Bild im **Bild-Editor** zeichnen
![Bild-Editor](/static/reference/image-editor-01.jpg "Das ist der Bild-Editor" )

2. Zur **Galerie** wechseln und ein Bild aus der Hauptbibliothek auswählen
![Galerie](/static/reference/image-editor-02.jpg "Das ist die Galerie" )

3. Zu **Assets** wechseln und ein Bild aus der Projektbibliothek auswählen
![Asset-Editor](/static/reference/image-editor-03.jpg "Das ist der Asset-Editor" )


#### Zeichnen mit dem Bild-Editor

Der Arcade-Bild-Editor ist ein Pixel-Malprogramm, in dem du mit deiner 16-Farben-Palette zeichnen kannst.

Hier ist eine Übersicht der Werkzeuge, die dir zur Verfügung stehen:
![Beschrifteter Bild-Editor](/static/reference/image-editor-04.jpg "Beschrifteter Bild-Editor")

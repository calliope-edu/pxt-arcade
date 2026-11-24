# erstelle

Erstelle einen neuen Sprite mit einem Pixelbild.

```sig
sprites.create(null)
```

Sprites bieten alle Funktionen, um Bilder zu bewegen und zu animieren. Deine Sprites können Kollisionen und Überlappungen mit anderen Objekten erkennen. Zu Beginn befinden sich Sprites in der Mitte des Bildschirms und bewegen sich nicht. Position und Bewegung eines Sprites legst du in deinem Code fest. Sprites sind einer **Art** (kind) zugeordnet, damit sie als Teil einer Gruppe oder eines Typs erkannt werden können, zum Beispiel ``Player`` und ``Enemy``.

## Parameter

* **img**: ein [Bild](/types/image), für das ein Sprite erstellt wird.
* **kind**: die Art des zu erstellenden Sprites. Es gibt bereits vordefinierte Sprite-Arten wie ``Player``, ``Enemy``, ``Food`` usw. Du kannst den bereits definierten `SpriteKind`-Typen (Namespace) auch eigene Arten hinzufügen.

## Rückgabewerte

* ein Spiel-[Sprite](/types/sprite), der ein Bild enthält.


## Beispiele #example

### Smiley-Gesicht #ex1

Erstelle einen Sprite mit einem Smiley-Bild und zeige ihn auf dem Bildschirm an.

```blocks
let smiley: Sprite = null
smiley = sprites.create(img`
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . 1 1 e e e e e e e 1 . . . 
. . 1 e e e e e e e e e e 1 . . 
. 1 e e e e e e e e e e e e 1 . 
1 e e e e 1 1 e e e 1 1 e e e 1 
1 e e e e 1 1 e e e 1 1 e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e e e 1 e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e 1 e e e e e 1 e e e 1 
1 e e e e e 1 1 1 1 1 e e e e 1 
. 1 e e e e e e e e e e e e 1 . 
. . 1 e e e e e e e e e e 1 . . 
. . . 1 1 e e e e e e e 1 . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
`, SpriteKind.Player)
```

### Fahr das Auto #ex2

Lege die Hintergrundfarbe der Szene fest und erstelle einen Sprite mit einem Autobild. Lass das Auto nach rechts über den Bildschirm fahren.

```blocks
let theCar: Sprite = null
scene.setBackgroundColor(3)
theCar = sprites.create(img`
. . . . . f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . . . f d d d d d d d d d d d d d d d d f . . . . . . . . . . 
. . . f d d d d f f f f f f d d f f f f f f f . . . . . . . . . 
. . . f d d d d f . . . . f d d f . . . . . f f . . . . . . . . 
. . . f d d d d f . . . . f d d f . . . . . . f . . . . . . . . 
. . f d d d d d f f . . . f d d f . . . f f f d f f f f f . . . 
. f d d d d d d d f f f f f d d f f f f d d d d d d d d f . . . 
. f d d d f f f d d d d d d d d d d d d d d f f f d d d f . . . 
. f d d f f f f f d d d d d d d d d d d d f f f f f d d f . . . 
. f f . f f f f f . f f f f f f f f f f . f f f f f . f f . . . 
. . . . f f f f f . . . . . . . . . . . . f f f f f . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . f f f . . . . . . . 

`, SpriteKind.Player)
theCar.vx = 20
game.onUpdate(function () {
    if (theCar.x > scene.screenWidth() + 16) {
        theCar.x = -16
    }
})
```

## #seealso

[Projektil erstellen](/reference/sprites/create-projectile)
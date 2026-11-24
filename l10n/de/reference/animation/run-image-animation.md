# Bildanimation ausführen

Führe in einem Sprite eine Animation aus einem Array von Bildern aus.

```sig
animation.runImageAnimation(null, null)
```

Eine Animation erzeugt den Eindruck, dass sich ein Objekt innerhalb eines _Bildes_ bewegt.
Ein einzelnes Bild ist eine Momentaufnahme des Objekts zu einem Zeitpunkt seiner Bewegung.
Werden verschiedene Bilder mit kurzen Pausen nacheinander gezeigt, entsteht der Eindruck einer Bewegung.

## Sprite-Animationen

Animationen werden in einem [Sprite](/types/sprite) angezeigt. Wo auch immer sich der Sprite befindet,
dort läuft auch die Animation. Du erstellst deine Animation, indem du zwei oder mehr Bilder in das **frames**-Array des Sprites einfügst. Du kannst die Zeit zwischen den Bildern einstellen, damit die Animation schnell oder langsam läuft. Soll sich die Animation ständig wiederholen, kannst du sie in einer _Schleife_ laufen lassen.

### ~ hint

#### Rahmen- und Bildgrößen

Die Größe des Rahmens wird so angepasst, dass der Inhalt jedes Bildes angezeigt wird. Wenn einige Bilder im frames-Array nicht zueinander passen, wird die Rahmengröße der Animation
vergrößert, damit jedes Bild angezeigt werden kann.

Am besten machst du alle Bilder in deinem frames-Array gleich groß, damit
Positionsänderungen und Bewegungen deines Objekts richtig aussehen.

### ~

## Parameter

* **sprite**: der Sprite, in dem die Animation läuft.
* **frames**: ein Array von Bildern, die die Animation bilden.
* **frameInterval**: die [Anzahl](/types/number) der Millisekunden, die gewartet wird, bevor das nächste Bild angezeigt wird.
* **loop**: ein [boolescher](/types/boolean) Wert; bei ``true`` wiederholt sich die Animation. Bei ``false`` läuft sie nur einmal.

## Beispiel #example

### Laufanimation

Erstelle eine Animation einer laufenden Person und führe sie aus. Lege die Animationsbilder als Array
von Bildern fest, die die Person in verschiedenen Bewegungsphasen zeigen.

```blocks
scene.setBackgroundColor(13)
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
animation.runImageAnimation(
meinSprite,
[img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
`, img`
    . . . . . . . . . . . .
    . . . f f f f f f . . .
    . f f f e e e e f f f .
    f f f e e e e e e f f f
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d 4 e f e
    f f f e 4 4 4 4 d d 4 e
    e 4 f b 1 1 1 e d d e .
    . . f 6 6 6 6 f e e . .
    . . f f f f f f f . . .
    . . f f f . . . . . . .
`, img`
    . . . . . . . . . . . .
    . . . f f f f f f . . .
    . f f f e e e e f f f .
    f f f e e e e e e f f f
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    e f e 4 d b b d d e f .
    e 4 d d 4 4 4 4 e f f f
    . e d d e 1 1 1 b f 4 e
    . . e e f 6 6 6 6 f . .
    . . . f f f f f f f . .
    . . . . . . . f f f . .
`, img`
    . . . f f f f f . . . .
    . . f e e e e e f f . .
    . f e e e e e e e f f .
    f e e e e e e e f f f f
    f e e 4 e e e f f f f f
    f e e 4 4 e e e f f f f
    f f e 4 4 4 4 4 f f f f
    f f e 4 4 f f 4 e 4 f f
    . f f d d d d 4 d 4 f .
    . . f b b d d 4 f f f .
    . . f e 4 4 4 e e f . .
    . . f 1 1 1 e d d 4 . .
    . . f 1 1 1 e d d e . .
    . . f 6 6 6 f e e f . .
    . . . f f f f f f . . .
    . . . . . f f f . . . .
`],
500,
true
)
```

### Trampoline

Führe auf einem Sprite, der auch eine Bildanimation hat, eine Bewegungsanimation aus. Erzeuge den
Effekt einer Person, die auf einem Trampolin springt.

```blocks
scene.setBackgroundColor(1)
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
animation.runImageAnimation(
meinSprite,
[img`
    . . . . . . . . . . . . .
    . . . . . f f f f . . . .
    . . . f f f f f f f f . .
    . . f f f f f f c f f f .
    f f f f f f f c c f f f c
    f f f f c f f f f f f f c
    . c c c f f f e e f f c c
    . f f f f f e e f f c c f
    . f f f b f e e f b f f f
    . f f 4 1 f 4 4 f 1 4 f f
    . . f e 4 4 4 4 4 e e f e
    . f e f b 7 7 7 e 4 4 4 e
    . e 4 f 7 7 7 7 e 4 4 e .
    . . . f 6 6 6 6 6 e e . .
    . . . f f f f f f f . . .
    . . . f f f . . . . . . .
`, img`
    . . . . . . . . . . . . .
    . . . . f f f f . . . . .
    . . f f f f f f f f . . .
    . f f f c f f f f f f . .
    c f f f c c f f f f f f f
    c f f f f f f f c f f f f
    c c f f e e f f f c c c .
    f c c f f e e f f f f f .
    f f f b f e e f b f f f .
    f f 4 1 f 4 4 f 1 4 f f .
    e f e e 4 4 4 4 4 e f . .
    e 4 4 4 e 7 7 7 b f e f .
    . e 4 4 e 7 7 7 7 f 4 e .
    . . e e 6 6 6 6 6 f . . .
    . . . f f f f f f f . . .
    . . . . . . . f f f . . .
`],
500,
true
)
animation.runMovementAnimation(
meinSprite,
animation.animationPresets(animation.bobbing),
1000,
true
)
```

## Siehe auch #seealso

[Bewegungsanimation ausführen](/reference/animation/run-movement-animation),
[Animation stoppen](/reference/animation/stop-animation)

```package
animation
```
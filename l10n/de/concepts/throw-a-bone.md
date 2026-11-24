# Wirf einen Knochen

## {Einführung @unplugged}

``||sprites:Sprites||`` einzurichten kann mit vielen verschiedenen Blöcken ganz schön kompliziert werden. ``||sprites:Projektile||`` sind besondere ``||sprites:Sprites||``, die dafür gemacht sind, sich über den Bildschirm zu bewegen. Sie machen dir solche Abläufe viel einfacher.

So kannst du ganz leicht zum Beispiel Asteroiden bauen, die über den Bildschirm fliegen, oder Laser, die aus einem Raumschiff geschossen werden.

## {Schritt 1 @fullscreen}

Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||`` und ziehe ihn in ``||loops:beim Start||``. Öffne den Bildeditor für ``||variables(noclick):meinSprite||`` und wähle oder male ein Bild von einem Skelett.

```blocks
let meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Schritt 2 @fullscreen}

Suche ``||sprites:Projektil von meinSprite||`` in ``||sprites:Sprites||`` und ziehe ihn in ``||loops:beim Start||``, und zwar **unter** ``||variables(sprites):setze meinSprite auf||``.

So entsteht ein ``||sprites:Sprite||``, der an derselben Stelle startet wie ``||sprites:meinSprite||`` – ganz egal, wo dieser gerade auf dem Bildschirm ist.

```blocks
let meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let projektil = sprites.createProjectileFromSprite(img`
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
`, meinSprite, 50, 50)
```

## {Schritt 3 @fullscreen}

Öffne den Bildeditor für ``||variables(sprites):projektil||`` und male einen Knochen.

```blocks
let meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, 50, 50)
```

## {Schritt 4 @fullscreen}

Ändere in ``||sprites:Projektil||`` den Wert ``||sprites:vy||`` von `50` auf `-15`, damit er sich **nach oben** statt **nach unten** bewegt.

```blocks
let meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, 50, -15)
```

## {Schritt 5 @fullscreen}

Suche ``||controller:wenn Knopf A gedrückt||`` in ``||controller:Controller||`` und ziehe ihn in den Arbeitsbereich. Ziehe ``||variables(sprites):setze projektil auf||`` aus ``||loops:beim Start||`` in ``||controller:wenn Knopf A gedrückt||``.

So entsteht ein Ereignis, das jedes Mal passiert, wenn die Person, die das Spiel spielt, den Knopf ``||controller:A||`` drückt. Immer dann „wirft“ ``||variables(noclick):meinSprite||`` einen neuen Knochen nach oben rechts.

```blocks
let meinSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . f f f f . . . . . . . . . .
. . . . . . . . f f 1 1 1 1 f f . . . . . . . .
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . .
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . .
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . .
. . . f b f b f f c f 1 1 f c d d f . . . . . .
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . .
. . . . . . . c c b d b 1 b 1 f c f . . . . . .
. . . . . . . f f f b f b f d f f . . . . . . .
. . . . . . . . f f f f f f f f . . . . . . . .
. . . . . . . . f f f f f f f f f f f . . . . .
. . . . . . . . . f f f f f c 1 1 1 c f . . . .
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . .
. . . . . . . . . . f f f f b f b f b f . . . .
. . . . . . . . . . . f f f f . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projektil = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . 1 1 1 1 1 1 1 . .
    . . . . . . 1 1 1 1 . 1 1 1 . .
    . . 1 1 . 1 1 1 1 . . . . . . .
    . 1 1 1 1 1 1 . . . . . . . . .
    . 1 1 1 1 1 . . . . . . . . . .
    . . 1 1 1 1 . . . . . . . . . .
    . . . 1 1 1 . . . . . . . . . .
    . . . . 1 1 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, meinSprite, 50, -15);
})
```

## {Geschafft}

Glückwunsch, dein Skelett wirft jetzt Knochen!

Wenn du dein Projekt weiter ausbauen willst, findest du hier ein paar Ideen, die du ausprobieren kannst, nachdem du auf `Fertig` geklickt hast:

* Füge ``||controller:bewege meinSprite mit Knöpfen||`` zu ``||loops:beim Start||`` hinzu, damit sich das Skelett über den Bildschirm bewegen und von verschiedenen Stellen aus Knochen werfen kann.
* Erstelle einen weiteren Sprite und benutze ein ``||sprites:wenn überlappt||``-Ereignis, damit dieser Sprite den Knochen fangen kann.
* Erzeuge einen Spray-Effekt beim Werfen, indem du ``||sprites:meinSprite beginne Spray Effekt||`` in das Ereignis ``||controller:wenn Knopf A gedrückt||`` einfügst, und lass das Spray vom Knochen kommen.

# alle der Art

Hole alle Sprites einer bestimmten Art.

```sig
sprites.allOfKind(SpriteKind.Player)
```

Du kannst ein Array der aktuellen Sprites einer bestimmten Art abrufen. Wenn du zum Beispiel herausfinden möchtest, wo sich alle `Enemy`-Sprites in deinem Spiel befinden, kannst du ein Array von ihnen holen und ihre Position prüfen.

## Parameter

* **kind**: die Art der Sprites, von denen du ein Array möchtest, zum Beispiel `Player` oder `Enemy`.

## Beispiel #example

Setze eine Spielfigur in die Mitte des Bildschirms. Lass eine Menge Kleckse an zufälligen Positionen erscheinen. Wenn Kleckse zu nah an der Spielfigur sind, sollen sie zerstört werden, sobald die Taste `A` gedrückt wird.

```blocks
namespace SpriteKind {
    export const Blob = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let icky of sprites.allOfKind(SpriteKind.Blob)) {
        x2 = (icky.x - meinSprite.x) ** 2
        y2 = (icky.y - meinSprite.y) ** 2
        if (Math.sqrt(x2 + y2) < meinSprite.width * 2) {
            sprites.destroy(icky, effects.disintegrate, 500)
        }
    }
})
let y2 = 0
let x2 = 0
let blob: Sprite = null
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 40; index++) {
    blob = sprites.create(img`
        . 2 2 2 . 2 2 . 
        2 2 5 2 2 2 2 2 
        2 f 2 2 5 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 f 2 f 2 2 2 
        . 2 2 2 2 2 2 . 
        . 2 . 2 2 5 2 . 
        `, SpriteKind.Blob)
    blob.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
```

## Siehe auch #seealso

[zerstöre alle Sprites der Art](/reference/sprites/sprite/destroy-all-sprites-of-kind)

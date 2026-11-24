# alle Sprites der Art zerstören

Zerstöre alle Sprites einer bestimmten Art.

```sig
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
```

Du kannst alle aktuellen Sprites einer bestimmten Art zerstören. Zum Beispiel kannst du alle `Enemy`-Sprites in deinem Spiel explodieren lassen, indem du sie mit einem Zerfalls-Partikeleffekt zerstörst.

## Parameter

* **kind**: die Art der Sprites, die du zerstören möchtest, zum Beispiel `Player` oder `Enemy`.
* **effect**: ein Partikeleffekt, der angezeigt wird, wenn ein Sprite zerstört wird.
* **duration**: die Zeit in Millisekunden, wie lange der **effect** angezeigt wird.

## Beispiel #example

Erstelle ein Spiel, in dem dein Spieler den Kontakt mit `Blob`-Sprites vermeiden muss, um am Leben zu bleiben. Schicke die Blobs mit zufälligen Geschwindigkeiten von der rechten Bildschirmseite. Gib deinem Spieler eine Superkraft, mit der er alle aktuellen Blobs mit einem Druck auf die Taste `A` wegzappen kann.

```blocks
namespace SpriteKind {
    export const Blob = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Blob, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Blob, function (sprite, anderesSprite) {
    info.changeLifeBy(-1)
})
let blob: Sprite = null
info.setLife(3)
let meinSprite = sprites.create(img`
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
controller.moveSprite(meinSprite)
meinSprite.left = 10
game.onUpdateInterval(500, function () {
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
    blob.setFlag(SpriteFlag.AutoDestroy, true)
    blob.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    blob.vx = randint(-10, -50)
})
```

## Siehe auch #seealso

[Effekt starten](/reference/sprites/sprite/start-effect),
[zerstören](/reference/sprites/sprite/destroy),
[wenn zerstört](/reference/sprites/on-destroyed),

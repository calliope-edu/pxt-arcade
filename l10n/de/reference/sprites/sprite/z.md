# z (Eigenschaft)

Rufe die Tiefenebene (Z-Reihenfolge) eines Sprites auf dem Bildschirm ab oder lege sie fest.

## Abrufen

Rufe die Tiefenebene des Sprites ab.

```block
let meinSprite: Sprite = null

let depth = meinSprite.z
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Tiefe des Sprites auf dem Bildschirm ist.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.z = 0
```

### Parameter

* **value**: die neue Tiefe des Sprites auf dem Bildschirm.

## Tiefe von Sprites

Das Bild eines Sprites ist ein zweidimensionales Rechteck. Du kannst einem Sprite eine Tiefenebene zuweisen, damit er über oder unter Sprites erscheint, die auf anderen Tiefenebenen liegen. Das gibt Sprites eine dritte Dimension, obwohl sie keine echten festen Körper sind. Die Tiefenebene heißt _Z-Reihenfolge_, nach der dritten Dimension **z**.

Sprites haben beim Erstellen eine Tiefe von `0`. Bei Sprites auf derselben Tiefenebene hängt die Überlappung ihrer Pixel davon ab, wann sie erstellt wurden. Später erstellte Sprites überdecken früher erstellte Sprites auf derselben Ebene. Um die Überlappung zu steuern, kannst du Sprites verschiedenen Ebenen in der Z-Reihenfolge zuweisen. Sprites mit einem höheren **z**-Wert überdecken Sprites mit einem niedrigeren **z**-Wert.

## Beispiele #example

### Darüber und darunter bewegen #ex1

Erstelle zwei Block-Sprites in Grün und Orange. Lass den orangen Sprite über den grünen hinweg laufen. Jedes Mal, wenn der orange Sprite am grünen vorbeikommt, ändert er seine Z-Reihenfolge, sodass er entweder darunter oder darüber läuft.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let greenBlock = image.create(32, 48)
greenBlock.fill(7)
let orangeBlock = image.create(48, 16)
orangeBlock.fill(4)
let greenSprite = sprites.create(greenBlock, SpriteKind.Example)
let orangeSprite = sprites.create(orangeBlock, SpriteKind.Example)
greenSprite.z = 0
orangeSprite.left = 0
orangeSprite.z = 1
orangeSprite.vx = 40

game.onUpdateInterval(500, function () {
    if (orangeSprite.x < 0 || orangeSprite.x > scene.screenWidth()) {
        orangeSprite.vx = orangeSprite.vx * -1
        if (orangeSprite.z < 0) {
            orangeSprite.z = 1
            greenSprite.say("over")
        } else {
            orangeSprite.z = -1
            greenSprite.say("under")
        }
    }
})
```

### Überlappende Quadrate #ex2

Verwende ein Array, um eine Reihe überlappender Block-Sprites in verschiedenen Farben zu speichern. Gib jedem Sprite einen **Z**-Wert, der um eins größer ist als der des vorherigen Sprites. Wenn eine Taste gedrückt wird, kehre die Z-Reihenfolge der Sprites um, sodass sie sich in der umgekehrten Richtung überlappen.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let colorBlocks: Sprite[] = []
let blockImg: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i <= 8 - 1; i++) {
        colorBlocks[i].z = colorBlocks[i].z * -1
    }
})
for (let j = 0; j <= 8 - 1; j++) {
    blockImg = image.create(32, 32)
    blockImg.fill(j + 2)
    blockImg.drawRect(0, 0, 32, 32, 1)
    colorBlocks[j] = sprites.create(blockImg, 0)
    colorBlocks[j].left = j * 16 + 8
    colorBlocks[j].top = j * 10 + 8
    colorBlocks[j].z = j
}
```

## Siehe auch #seealso

[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)

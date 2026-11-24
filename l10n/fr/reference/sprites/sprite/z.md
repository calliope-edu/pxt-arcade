# z (propriété)

Obtiens ou définis le niveau de profondeur (ordre Z) d'un sprite à l'écran.

## Obtenir

Obtiens le niveau de profondeur du sprite.

```block
let monSprite: Sprite = null

let depth = monSprite.z
```

### Valeur retournée

* un [nombre](/types/number) qui est la profondeur actuelle du sprite à l'écran.

## Définir

```block
let monSprite: Sprite = null

monSprite.z = 0
```

### Paramètre

* **value** : la nouvelle profondeur du sprite à l'écran.

## Profondeur des sprites

L'image du sprite est un rectangle à deux dimensions. Tu peux attribuer un niveau de profondeur à un sprite pour qu'il apparaisse au-dessus ou en dessous des sprites qui se trouvent à d'autres niveaux de profondeur. Cela donne une troisième dimension aux sprites, même s'ils ne sont pas vraiment des objets solides. Le niveau de profondeur s'appelle l'_ordre Z_, en référence à la troisième dimension **z**.

Les sprites ont une profondeur de `0` quand ils sont créés. Les pixels des sprites au même niveau de profondeur se chevauchent selon leur ordre de création. Les sprites créés plus tard recouvrent ceux créés plus tôt lorsqu'ils sont au même niveau. Pour contrôler le chevauchement des sprites, tu peux les placer à différents niveaux de l'ordre Z. Les sprites avec une valeur **z** plus élevée recouvrent ceux qui ont une valeur **z** plus faible.

## Exemples #example

### Passer dessus et dessous #ex1

Crée deux sprites en forme de bloc, un vert et un orange. Fais passer le sprite orange par-dessus le vert. Chaque fois que le sprite orange passe près du vert, change son ordre Z pour qu'il passe soit dessous, soit dessus.

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

### Carrés superposés #ex2

Utilise un tableau pour contenir un ensemble de sprites en forme de bloc superposés de différentes couleurs. Donne à chaque sprite une valeur **Z** supérieure de un à celle du sprite précédent. Quand un bouton est pressé, inverse l'ordre Z de l'ensemble des sprites pour qu'ils se superposent dans le sens inverse.

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

## Voir aussi #seealso

[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)

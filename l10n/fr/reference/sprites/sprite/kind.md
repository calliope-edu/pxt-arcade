# kind

Obtiens le type du sprite.

```sig
sprites.create(null).kind()
```

Pour garder une trace des différentes sortes de sprites, tu peux leur attribuer un _type_. C'est une valeur qui aide à les identifier et à décider quelles actions effectuer lorsque des événements se produisent dans le jeu. Il n'y a pas de règles ou de noms particuliers pour choisir les types. Les types de sprites de ton jeu pourraient être définis ainsi :

```typescript-ignore
namespace SpriteKind {
    export const Player = SpriteKind.create()
    export const Enemy = SpriteKind.create()
}
```

## Retourne

* une valeur [numérique](/types/number) qui est le type actuel du sprite.

## Exemple #example

Crée un sprite ``Player`` et deux sprites ``Friend``. Toutes les 2 secondes, transforme l'un des sprites amis en ``Enemy``. Toutes les 10 secondes, fais redevenir amis les sprites ennemis.

```blocks
namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
let player: Sprite = null
let friend2: Sprite = null
let friend1: Sprite = null
let greenBlock: Image = null
greenBlock = image.create(16, 16)
greenBlock.fill(7)
player = sprites.create(greenBlock, SpriteKind.Player)
friend1 = sprites.create(greenBlock, SpriteKind.Friend)
friend1.x = scene.screenWidth() / 4
friend2 = sprites.create(greenBlock, SpriteKind.Friend)
friend2.x = scene.screenWidth() * 3 / 4
game.onUpdateInterval(10000, function () {
    friend1.setKind(SpriteKind.Friend)
    friend2.setKind(SpriteKind.Friend)
})
game.onUpdateInterval(2000, function () {
    if (friend1.kind() == SpriteKind.Friend) {
        friend1.setKind(SpriteKind.Enemy)
    } else if (friend2.kind() == SpriteKind.Friend) {
        friend2.setKind(SpriteKind.Enemy)
    }
})
```

## Voir aussi #seealso

[définir le type](/reference/sprites/sprite/set-kind)

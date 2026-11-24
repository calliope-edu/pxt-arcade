# définir le type

Définis le type (kind) du sprite.

```sig
sprites.create(null).setKind(0)
```

### Paramètre

* **value** : un [nombre](/types/number) qui est le nouveau type à définir pour le sprite.

### Types de sprites

Pour garder une trace des différentes sortes de sprites, tu peux leur attribuer un _type_. C'est une valeur qui aide à les identifier et à décider quelles actions effectuer lorsque des événements se produisent dans le jeu. Il n'y a pas de règles ni de noms particuliers pour choisir les types. La façon de faire est cependant d'attribuer un type dans l'espace de noms **SpriteKind**.

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Comet = SpriteKind.create()
}
```

Certains types par défaut font déjà partie de **SpriteKind**. Ce sont :

* SpriteKind.Player
* SpriteKind.Enemy
* SpriteKind.Food
* SpriteKind.Projectile

Lorsque tu crées un sprite, tu peux éventuellement lui attribuer un type :

```block
let monSprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

```typescript-ignore
let monSprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

Si tu créais un jeu spatial, tu pourrais avoir des types comme ceux-ci :

```typescript
namespace SpriteKind {
    export const Ship = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const moon = SpriteKind.create()
}
```

Pendant le jeu, si un sprite doit changer de type, par exemple une ``Planet`` qui devient un ``Asteroid``, il te suffit de définir le nouveau type avec **setKind**.

## Exemple #example

Crée un sprite ``Player`` et deux sprites ``Friend``. Toutes les 2 secondes, transforme l'un des sprites amis en ``Enemy``. Toutes les 10 secondes, les sprites ennemis redeviennent des amis.

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

[créer](/reference/sprites/create), [type](/reference/sprites/sprite/kind)

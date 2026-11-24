# sprite Kind

Obtient un objet type de sprite à partir d'un identifiant de type de sprite.

```sig
sprites._spriteKind(0)
```

Pour distinguer les différents types de sprites, on leur attribue un _type_ (kind). C'est une valeur qui aide à les identifier et à décider quelles actions effectuer quand des événements se produisent dans le jeu. Les types de sprites de ton jeu pourraient être définis comme ceci :

```typescript-ignore
namespace SpriteKind {
    export const Player = SpriteKind.create()
    export const Enemy = SpriteKind.create()
    export const Food = SpriteKind.create()
    ...
}
```

Dans les blocs, un identifiant de type de sprite sert à créer un élément type de sprite qui peut être assigné à une variable ou utilisé comme paramètre :

```block
let enemyKind = SpriteKind.Enemy
```

## Paramètres

* **kind** : l'identifiant de type de sprite pour lequel obtenir l'objet type.

## Retourne

* un objet [type](/reference/sprites/sprite/kind) de sprite pour un identifiant de type de sprite.

## Exemple #example

Crée plusieurs sprites `Food` à des positions aléatoires sur l'écran. Utilise un objet type de sprite pour l'identifiant `Food` afin de détruire tous les sprites `Food`.

```blocks
let monSprite: Sprite = null
let foodKind = SpriteKind.Food
for (let index = 0; index <= 4; index++) {
    monSprite = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
    monSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
for (let value of sprites.allOfKind(foodKind)) {
    pause(1000)
    value.destroy()
}
```

## Voir aussi #seealso

[type](/reference/sprites/sprite/kind)

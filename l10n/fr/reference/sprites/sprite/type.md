# type (propriété)

Obtiens ou définis le type (kind) d'un sprite.

## Obtenir

Obtiens le type du sprite.

```block
let monSprite: Sprite = null

let myKind = monSprite.type
```

```typescript-ignore
let myKind = monSprite.type
```

### Valeur retournée

* un [nombre](/types/number) qui est le type actuel du sprite.

## Définir

```block
let monSprite: Sprite = null

monSprite.type = 0
```

```typescript-ignore
monSprite.type = 0
```

### Paramètre

* **value** : le nouveau type à attribuer au sprite.

## Types de sprites

Pour distinguer les différents sprites, tu peux leur attribuer un _type_ (kind). C'est une valeur qui aide à les identifier et à décider quelles actions effectuer quand des événements se produisent dans le jeu. Il n'y a pas de règles ni de noms particuliers pour choisir les types. Une bonne méthode consiste toutefois à créer une liste énumérée de types comme ceci :

```typescript
enum SpriteKind {
    Player,
    Enemy
}
```

Ensuite, quand tu crées un sprite, tu peux lui attribuer un type si tu le souhaites :

```block
enum SpriteKind {
    Player,
    Enemy
}
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

Si tu faisais un jeu spatial, tu pourrais avoir des types comme ceux-ci :

```typescript
enum SpriteKind {
    Ship,
    Planet,
    Asteroid,
    Moon
}
```

## Exemple #example

Crée un sprite ``Player`` et deux sprites ``Friend``. Toutes les 2 secondes, transforme l'un des sprites amis en ``Enemy``. Toutes les 10 secondes, fais redevenir amis les sprites ennemis.

```blocks
enum SpriteKind {
    Player,
    Friend,
    Enemy
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
    friend1.type = SpriteKind.Friend
    friend2.type = SpriteKind.Friend
})
game.onUpdateInterval(2000, function () {
    if (friend1.type == SpriteKind.Friend) {
        friend1.type = SpriteKind.Enemy
    } else if (friend2.type == SpriteKind.Friend) {
        friend2.type = SpriteKind.Enemy
    }
})
```

## Voir aussi #seealso

[créer](/reference/sprites/sprite/create)

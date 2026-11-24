# lorsqu'un sprite est créé

Exécute du code lorsqu'un sprite est créé.


```sig
sprites.onCreated(0, function (sprite) {

})
```

Les sprites sont créés à l'aide des fonctions [créer](/reference/sprites/sprite/destroy) et [créer un projectile](/reference/sprites/create-projectile). Tu peux réagir à un événement de création de sprite et exécuter du code lorsqu'il se produit.

Les sprites ont trois types : ``player``, ``food``, ``coin``. Tu peux suivre la création de n'importe quel sprite d'un type particulier en utilisant le paramètre d'objet sprite appelé ``sprite``.

```blocks
sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprite.say("Hello, I'm new here")
})
let smiley = sprites.create(img`
    . . . . . f f f f f f f . . . .
    . . . f f e e e e e e e f . . .
    . . f e e e e e e e e e e f . .
    . f e e e e e e e e e e e e f .
    f e e e e f f e e e f f e e e f
    f e e e e f f e e e f f e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e f e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e f e e e e e f e e e f
    f e e e e e f f f f f e e e e f
    . f e e e e e e e e e e e e f .
    . . f e e e e e e e e e e f . .
    . . . f f e e e e e e e f . . .
    . . . . . f f f f f f f . . . .
    `, SpriteKind.Player)
```

## Paramètres

* **type** : le type de sprite dont il faut surveiller l'événement de création. Ce sont ``player``, ``food`` et ``coin``.
* **sprite** : le [sprite](/types/sprite) dont il faut surveiller l'événement de création. Utilise ``sprite`` pour un événement sur tous les sprites d'un certain **type**.
* **handler** : le code à exécuter lorsque le sprite est créé.

## Exemple #example

Crée un sprite ``player`` comme « observateur » de la création et de la destruction d'un sprite ``food``. Fais dire quelque chose à l'observateur lorsque de la nourriture est créée et lorsqu'elle est détruite.

```blocks
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    viewer.say("food's gone!!", 1000)
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    viewer.say("I see food!", 1000)
})
let viewer: Sprite = null
let playerBlock = image.create(16, 16)
playerBlock.fill(7)
viewer = sprites.create(playerBlock, SpriteKind.Player)
viewer.setPosition(8, 32)
let foodBlock = image.create(32, 32)
foodBlock.fill(8)
pause(1000)
let snack = sprites.create(foodBlock, SpriteKind.Food)
snack.say("new food here")
pause(2000)
snack.destroy()
```

## Voir aussi #seeaslo

[lorsqu'un sprite est détruit](/reference/sprites/on-destroyed),
[créer](/reference/sprites/sprite/destroy),
[créer un projectile](/reference/sprites/create-projectile)
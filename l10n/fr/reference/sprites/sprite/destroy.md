# détruire

Détruit le sprite.

```sig
sprites.create(null).destroy()
```

Le sprite se détruit immédiatement. Il est retiré du jeu et ne chevauchera plus aucun autre sprite et n'entrera plus en collision avec eux.

Les sprites sont aussi détruits quand leur [durée de vie](/reference/sprites/sprite/lifespan) atteint `0`, ou quand ils sortent de l'écran alors que l'option ``auto destroy`` est activée.

Tu peux aussi choisir un effet de particules optionnel à afficher sur le sprite quand il est détruit.

## Paramètres

* **effect** : un effet intégré optionnel à afficher quand le sprite est détruit.


## Exemple #example

### Avaler le joueur #ex1

Crée un sprite ``Player`` et un sprite ``Enemy``. Le joueur se déplace dans la zone ouverte du sprite ennemi. Quand un chevauchement des deux est détecté, détruis le ``Player``.

```blocks
let enemy: Sprite = null
let catchBox: Image = null
let player: Sprite = null
let yellowBlock: Image = null

yellowBlock = image.create(16, 16)
yellowBlock.fill(5)
yellowBlock.drawRect(0, 0, 16, 16, 1)
player = sprites.create(yellowBlock, SpriteKind.Player)
player.left = 0
catchBox = image.create(32, 32)
catchBox.drawRect(0, 0, 32, 32, 1)
catchBox.drawLine(0, 6, 0, 25, 0)
enemy = sprites.create(catchBox, SpriteKind.Enemy)
enemy.right = scene.screenWidth() - 16
player.vx = 20
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, autreSprite) {
    autreSprite.say("Gulp!", 1000)
    sprite.destroy()
})
```

### Afficher un effet de destruction #ex2

Crée un sprite carré. Détruis le sprite après 3 secondes et affiche un effet ``fountain``.

```blocks
let square = image.create(32, 32)
square.fill(2)
square.drawRect(0, 0, 32, 32, 1)
let sqSprite = sprites.create(square)
pause(3000)
sqSprite.destroy(effects.fountain)
```

## Voir aussi #seealso

[lorsque détruit](/reference/sprites/on-destroyed),
[durée de vie](/reference/sprites/sprite/lifespan),
[définir l'option](/reference/sprites/sprite/set-flag)
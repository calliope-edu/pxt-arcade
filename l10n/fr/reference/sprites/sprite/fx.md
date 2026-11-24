# fx (propriété)

Obtiens ou définis la friction qui s'oppose au mouvement d'un sprite dans la direction horizontale.

## Obtenir

Obtiens la friction horizontale du sprite.

```block
let monSprite: Sprite = null

let horzAccel = monSprite.fx
```

```typescript-ignorelet
horzAccel = monSprite.fx
```

### Retourne

* un [nombre](/types/number) qui est la friction horizontale actuelle du sprite.

## Définir

Définis la friction horizontale du sprite.

```block
let monSprite: Sprite = null

monSprite.fx = 0
```

```typescript-ignore
monSprite.fx = 0
```

### Paramètre

* **value** : la nouvelle friction horizontale qui s'oppose au mouvement du sprite, en pixels par seconde, par seconde.

## Friction horizontale du sprite

La friction est une force qui s'oppose au mouvement d'un sprite. Si un sprite a une vitesse horizontale (`vx`), sa friction le ralentit jusqu'à ce que sa vitesse horizontale atteigne `0`. C'est comme définir une accélération horizontale opposée, sauf que cette accélération opposée disparaît dès que le sprite s'arrête.

## Exemples #example

### Mesurer le temps d'arrêt #ex1

Déplace le sprite de gauche à droite à travers l'écran. Utilise la bonne quantité de friction (`fx`) pour que le sprite s'arrête au bout de `3` secondes.

```blocks
let stopTime = 0
let counting = true
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
monSprite.setStayInScreen(true)
monSprite.left = 0
monSprite.fx = 30
monSprite.vx = 90
game.onUpdateInterval(100, function () {
    if (counting) {
        stopTime += 0.1
        if (monSprite.vx == 0) {
            counting = false
            monSprite.sayText("" + stopTime + "sec", 5000, false)
        }
    }
})
```

### Sprite sautillant #ex2

Fais bouger un sprite de gauche à droite. Fais-le sauter vers la droite une fois par seconde.

```blocks
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
monSprite.setStayInScreen(true)
monSprite.left = 0
monSprite.fx = 80
monSprite.vx = 80
for (let index = 0; index < 3; index++) {
    monSprite.vx = 80
    pause(1000)
}
```

## Voir aussi #seealso

[fy](/reference/sprites/sprite/fy),
[ax](/reference/sprites/sprite/ax)

# fy (propriété)

Obtiens ou définis la friction qui s'oppose au mouvement d'un sprite dans la direction verticale.

## Obtenir

Obtiens la friction verticale du sprite.

```block
let monSprite: Sprite = null

let horzAccel = monSprite.fy
```

```typescript-ignorelet
horzAccel = monSprite.fy
```

### Retourne

* un [nombre](/types/number) qui est la friction verticale actuelle du sprite.

## Définir

Définis la friction verticale du sprite.

```block
let monSprite: Sprite = null

monSprite.fy = 0
```

```typescript-ignore
monSprite.fy = 0
```

### Paramètre

* **value** : la nouvelle friction verticale qui s'oppose au mouvement du sprite, en pixels par seconde, par seconde.

## Friction verticale du sprite

La friction est une force qui s'oppose au mouvement d'un sprite. Si un sprite a une vitesse verticale (`vy`), sa friction le ralentit jusqu'à ce que sa vitesse verticale atteigne `0`. C'est comme définir une accélération verticale opposée, sauf que cette accélération opposée disparaît dès que le sprite s'arrête.

## Exemples #example

### Mesurer le temps d'arrêt #ex1

Déplace le sprite de haut en bas à travers l'écran. Utilise la bonne quantité de friction (`fy`) pour que le sprite s'arrête au bout de `3` secondes.

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
monSprite.top = 0
monSprite.fy = 20
monSprite.vy = 60
game.onUpdateInterval(100, function () {
    if (counting) {
        stopTime += 0.1
        if (monSprite.vy == 0) {
            counting = false
            monSprite.sayText("" + stopTime + "sec", 5000, false)
        }
    }
})
```

### Sprite sautillant #ex2

Fais bouger un sprite de haut en bas. Fais-le sauter une fois par seconde.

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
monSprite.top = 0
monSprite.fy = 60
monSprite.vy = 60
for (let index = 0; index < 3; index++) {
    monSprite.vy = 60
    pause(1000)
}
```

## Voir aussi #seealso

[fx](/reference/sprites/sprite/fx),
[ay](/reference/sprites/sprite/ay)

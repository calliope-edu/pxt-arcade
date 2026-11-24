# ay (propriété)

Obtient ou définit l'accélération verticale d'un sprite en pixels par seconde, par seconde.

## Obtenir

Obtient l'accélération verticale du sprite.

```block
let monSprite: Sprite = null

let horzAccel = monSprite.ay
```

```typescript-ignorelet
horzAccel = monSprite.ay
```

### Retourne

* un [nombre](/types/number) qui est l'accélération verticale actuelle du sprite.

## Définir

```block
let monSprite: Sprite = null

monSprite.ay = 0
```

```typescript-ignore
monSprite.ay = 0
```

### Paramètre

* **value** : la nouvelle accélération verticale du sprite en pixels par seconde, par seconde.

## Accélération verticale du sprite

La valeur de l'accélération détermine à quelle rapidité la vitesse du sprite va changer. L'accélération fait accélérer le sprite vers le bas ou vers le haut. Une valeur positive augmente la vitesse du sprite vers le bas (`bottom`). Une valeur négative augmente sa vitesse vers le haut (`top`).

L'accélération peut aussi servir de force opposée. Si un sprite se déplace vers le bas à une certaine vitesse et qu'on applique une accélération verticale négative, le sprite continue vers le bas mais ralentit. Quand sa vitesse atteint `0`, le sprite commence à se déplacer vers le haut.


### ~ hint

#### Comment la vitesse change

La vitesse est la distance qu'un objet parcourt pendant une certaine période de temps. Dans ton jeu, la distance est mesurée en pixels, donc la vitesse d'un sprite est en _pixels par seconde_. La vitesse change quand on _accélère_ un objet. Dans ton jeu, un sprite est accéléré d'un certain changement de vitesse par seconde. L'accélération est donc mesurée en _pixels par seconde par seconde_.

Si la vitesse d'un sprite est actuellement de `0` et que son accélération est réglée à `2`, le sprite se déplacera à une vitesse de 2 pixels par seconde après une seconde. Après deux secondes, il se déplace à 4 pixels par seconde, et ainsi de suite.

### ~

## Exemples #example

### Aller de chaque côté #ex1

Accélère un sprite pendant qu'il se déplace du haut de l'écran vers le bas, puis revient.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let monSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
monSprite.top = 0
monSprite.vy = 0
monSprite.ay = 10
game.onUpdateInterval(500, function () {
    if (monSprite.y < 0 || monSprite.y > scene.screenHeight()) {
        monSprite.vy = monSprite.vy * -1
        monSprite.ay = monSprite.ay * -1

    }
})
```

### À quelle vitesse allait-il ? #ex2

Accélère un sprite à `100` en partant d'une vitesse de `0`. Vérifie après environ `1` seconde à quelle vitesse le sprite se déplaçait.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let interval = 0
let monSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
monSprite.top = 0
monSprite.vy = 0
monSprite.ay = 100
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        monSprite.say("My speed is " + monSprite.vy + " pixels/sec")
        monSprite.ay = 0
        monSprite.vy = 0
    }
    interval += 1
})
```
### Force opposée #ex3

Fais se déplacer un sprite du haut de l'écran vers le bas. Applique une accélération dans la direction opposée pour ralentir le sprite et le renvoyer vers le haut.

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
monSprite.vy = 80
monSprite.ay = -35
```

## Voir aussi #seealso

[ax](/reference/sprites/sprite/ax),
[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)

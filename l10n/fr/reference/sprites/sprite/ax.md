# ax (propriété)

Obtient ou définit l'accélération horizontale d'un sprite en pixels par seconde, par seconde.

## Obtenir

Obtient l'accélération horizontale du sprite.

```block
let monSprite: Sprite = null

let horzAccel = monSprite.ax
```

```typescript-ignorelet
horzAccel = monSprite.ax
```

### Retourne

* un [nombre](/types/number) qui est l'accélération horizontale actuelle du sprite.

## Définir

```block
let monSprite: Sprite = null

monSprite.ax = 0
```

```typescript-ignore
monSprite.ax = 0
```

### Paramètre

* **value** : la nouvelle accélération horizontale du sprite en pixels par seconde, par seconde.

## Accélération horizontale du sprite

La valeur de l'accélération détermine à quelle rapidité la vitesse du sprite va changer. L'accélération fait accélérer le sprite vers la droite ou vers la gauche. Une valeur positive augmente la vitesse du sprite vers la droite (`right`). Une valeur négative augmente sa vitesse vers la gauche (`left`).

L'accélération peut aussi servir de force opposée. Si un sprite se déplace vers la droite à une certaine vitesse et qu'on applique une accélération horizontale négative, le sprite continue vers la droite mais ralentit. Quand sa vitesse atteint `0`, le sprite commence à se déplacer vers la gauche.

### ~ hint

#### Comment la vitesse change

La vitesse est la distance qu'un objet parcourt pendant une certaine période de temps. Dans ton jeu, la distance est mesurée en pixels, donc la vitesse d'un sprite est en _pixels par seconde_. La vitesse change quand on _accélère_ un objet. Dans ton jeu, un sprite est accéléré d'un certain changement de vitesse par seconde. L'accélération est donc mesurée en _pixels par seconde par seconde_.

Si la vitesse d'un sprite est actuellement de `0` et que son accélération est réglée à `2`, le sprite se déplacera à une vitesse de 2 pixels par seconde après une seconde. Après deux secondes, il se déplace à 4 pixels par seconde, et ainsi de suite.

### ~

## Exemples #example

### Aller de chaque côté #ex1

Accélère un sprite pendant qu'il se déplace du côté gauche de l'écran vers le côté droit, puis revient.

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
monSprite.left = 0
monSprite.vx = 0
monSprite.ax = 10
game.onUpdateInterval(500, function () {
    if (monSprite.x < 0 || monSprite.x > scene.screenWidth()) {
        monSprite.vx = monSprite.vx * -1
        monSprite.ax = monSprite.ax * -1

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
monSprite.left = 0
monSprite.vx = 0
monSprite.ax = 100
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        monSprite.say("My speed is " + monSprite.vx + " pixels/sec")
        monSprite.ax = 0
        monSprite.vx = 0
    }
    interval += 1
})
```

### Force opposée #ex3

Fais se déplacer un sprite du côté gauche de l'écran vers le côté droit. Applique une accélération dans la direction opposée pour ralentir le sprite et le renvoyer vers la gauche.

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
monSprite.vx = 100
monSprite.ax = -35
```

## Voir aussi #seealso

[ay](/reference/sprites/sprite/ay),
[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)

# top (propriété)

Obtiens ou définis la position du haut du sprite à l'écran.

## Obtenir

Obtiens la position du haut du sprite.

```block
let monSprite: Sprite = null

let topPosition = monSprite.top
```

```typescript-ignore
let topPosition = monSprite.top
```

### Valeur retournée

* un [nombre](/types/number) qui est la position actuelle du haut du sprite à l'écran.

## Définir

```block
let monSprite: Sprite = null

monSprite.top = 0
```

```typescript-ignore
monSprite.top = 0
```

### Paramètre

* **value** : la nouvelle position du haut du sprite à l'écran.

## Positions des sprites

L'image du sprite forme un rectangle composé d'un certain nombre de rangées de pixels. Le **haut** (top) du sprite est la position verticale de la première rangée de pixels du sprite à l'écran. Le haut du sprite peut avoir une valeur supérieure à la hauteur de l'écran. Il peut aussi avoir une valeur inférieure au haut de l'écran (le haut de l'écran vaut `0` et la valeur du haut du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

## Exemples #example

### D'un côté à l'autre #ex1

Déplace un sprite vers le bas de l'écran. Attends 2 secondes, puis déplace-le vers le haut.

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
forever(function () {
    monSprite.bottom = scene.screenHeight()
    pause(2000)
    monSprite.top = 0
    pause(2000)
})
```

### Rester dans les limites #ex2

Fais partir un sprite du côté gauche de l'écran vers le haut. Dans une boucle ``||game:on game update||``, vérifie si le sprite a touché le bord supérieur de l'écran. Si c'est le cas, remets le sprite du côté gauche de l'écran.

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
monSprite.vy = 40
game.onUpdateInterval(500, function () {
    if (monSprite.top > scene.screenHeight()) {
        monSprite.top = 0
        monSprite.say("Reset!", 500)
    }
})
```
## Voir aussi #seealso

[gauche](/reference/sprites/sprite/left),
[haut](/reference/sprites/sprite/top),
[bas](/reference/sprites/sprite/bottom),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)


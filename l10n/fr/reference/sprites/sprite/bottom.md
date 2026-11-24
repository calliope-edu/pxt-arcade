# bottom (propriété)

Obtient ou définit la position du bas du sprite sur l'écran.

## Obtenir

Obtient la position du bas du sprite.

```block
let monSprite: Sprite = null

let bottomPosition = monSprite.bottom
```

```typescript-ignore
let bottomPosition = monSprite.bottom
```

### Retourne

* un [nombre](/types/number) qui est la position actuelle du bas du sprite sur l'écran.

## Définir

```block
let monSprite: Sprite = null

monSprite.bottom = 0
```

```typescript-ignore
monSprite.bottom = 0
```

### Paramètre

* **value** : la nouvelle position du bas du sprite sur l'écran.

## Positions du sprite

L'image du sprite forme un rectangle composé d'un certain nombre de lignes de pixels. Le **bas** (bottom) du sprite est la position verticale de la dernière ligne de pixels du sprite sur l'écran. Le bas du sprite peut avoir une valeur supérieure à la hauteur de l'écran. Il peut aussi avoir une valeur inférieure au haut de l'écran (le haut vaut `0` et la valeur du bas du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

## Exemples #example

### D'un côté à l'autre #ex1

Déplace un sprite en haut de l'écran. Attends 2 secondes puis déplace-le en bas.

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
    monSprite.top = 0
    pause(2000)
    monSprite.bottom = scene.screenHeight()
    pause(2000)
})
```

### Rester dans les limites #ex2

Fais se déplacer un sprite du bas de l'écran vers le haut. Dans une boucle ``||game:on game update||``, vérifie si le sprite a touché le haut de l'écran. Si c'est le cas, replace le sprite en bas de l'écran.

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
monSprite.bottom = scene.screenHeight()
monSprite.vy = -40
game.onUpdateInterval(500, function () {
    if (monSprite.bottom < 0) {
        monSprite.bottom = scene.screenHeight()
        monSprite.say("Reset!", 500)
    }
})
```
## Voir aussi #seealso

[left](/reference/sprites/sprite/left),
[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)


# left (propriété)

Obtiens ou définis la position gauche du sprite à l'écran.

## Obtenir

Obtiens la position gauche du sprite.

```block
let monSprite: Sprite = null

let leftPosition = monSprite.left
```

```typescript-ignore
let leftPosition = monSprite.left
```

### Retourne

* un [nombre](/types/number) qui est la position gauche actuelle du sprite à l'écran.

## Définir

Définis la position gauche du sprite.

```block
let monSprite: Sprite = null

monSprite.left = 0
```

```typescript-ignore
monSprite.left = 0
```

### Paramètre

* **value** : la nouvelle position gauche du sprite à l'écran.

## Positions du sprite

L'image du sprite forme un rectangle composé d'un certain nombre de colonnes de pixels. Le côté **gauche** (left) du sprite est la position horizontale de la première colonne de pixels du sprite à l'écran. Le côté gauche du sprite peut avoir une valeur supérieure à la largeur de l'écran. Il peut aussi avoir une valeur inférieure au bord gauche de l'écran (le bord gauche de l'écran vaut `0` et la valeur du côté gauche du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

## Exemples #example

### D'un côté à l'autre #ex1

Déplace un sprite vers le côté droit de l'écran. Attends 2 secondes, puis déplace-le vers le côté gauche.

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
    monSprite.right = scene.screenWidth()
    pause(2000)
    monSprite.left = 0
    pause(2000)
})
```

### Rester dans les limites #ex2

Fais se déplacer un sprite du côté droit de l'écran vers la gauche. Dans une boucle ``||game:à chaque mise à jour du jeu||``, vérifie si le sprite a touché le bord gauche de l'écran. Si c'est le cas, replace le sprite sur le côté droit de l'écran.

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
monSprite.right = scene.screenWidth()
monSprite.vx = -40
game.onUpdateInterval(500, function () {
    if (monSprite.left < 0) {
        monSprite.right = scene.screenWidth()
        monSprite.say("Reset!", 500)
    }
})

```
## Voir aussi #seealso

[right](/reference/sprites/sprite/right),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)

# right (propriété)

Obtiens ou définis la position droite du sprite à l'écran.

## Obtenir

Obtiens la position droite du sprite.

```block
let monSprite: Sprite = null

let rightPosition = monSprite.right
```

```typescript-ignore
let rightPosition = monSprite.right
```

### Retourne

* un [nombre](/types/number) qui est la position droite actuelle du sprite à l'écran.

## Définir

```block
let monSprite: Sprite = null

monSprite.right = 0
```

```typescript-ignore
monSprite.right = 0
```

### Paramètre

* **value** : la nouvelle position droite du sprite à l'écran.

## Positions du sprite

L'image du sprite forme un rectangle composé d'un certain nombre de colonnes de pixels. Le côté **droit** (right) du sprite est la position horizontale de la dernière colonne de pixels du sprite à l'écran. Le côté droit du sprite peut avoir une valeur supérieure à la largeur de l'écran. Il peut aussi avoir une valeur inférieure au bord gauche de l'écran (le bord gauche de l'écran vaut `0` et la valeur du côté droit du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

## Exemples #example

### D'un côté à l'autre #ex1

Déplace un sprite vers le côté gauche de l'écran. Attends 2 secondes, puis déplace-le vers le côté droit.

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
    monSprite.left = 0
    pause(2000)
    monSprite.right = scene.screenWidth()
    pause(2000)
})
```

### Rester dans les limites #ex2

Fais se déplacer un sprite du côté gauche de l'écran vers la droite. Dans une boucle ``||game:à chaque mise à jour du jeu||``, vérifie si le sprite a touché le bord droit de l'écran. Si c'est le cas, replace le sprite sur le côté gauche de l'écran.

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
monSprite.vx = 40
game.onUpdateInterval(500, function () {
    if (monSprite.right > scene.screenWidth()) {
        monSprite.left = 0
        monSprite.say("Reset!", 500)
    }
})
```
## Voir aussi #seealso

[left](/reference/sprites/sprite/left),
[top](/reference/sprites/sprite/top),
[bottom](/reference/sprites/sprite/bottom),
[x](/reference/sprites/sprite/x),
[y](/reference/sprites/sprite/y)


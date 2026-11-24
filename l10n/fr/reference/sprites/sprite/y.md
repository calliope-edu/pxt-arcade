# y (propriété)

Obtiens ou définis la position verticale du centre d'un sprite à l'écran.

## Obtenir

Obtiens la position verticale du centre du sprite.

```block
let monSprite: Sprite = null

let vert = monSprite.y
```

```typescript-ignore
let vert = monSprite.y
```

### Valeur retournée

* un [nombre](/types/number) qui est la position verticale actuelle du centre du sprite à l'écran.

## Définir

```block
let monSprite: Sprite = null

monSprite.y = 0
```

```typescript-ignore
monSprite.y = 0
```

### Paramètre

* **value** : la nouvelle position verticale du centre du sprite à l'écran.

## Positions des sprites

L'image du sprite forme un rectangle composé d'un certain nombre de rangées de pixels. La position **y** du sprite est la position verticale de la rangée centrale des pixels du sprite à l'écran. La position **y** du sprite peut avoir une valeur supérieure à la hauteur de l'écran. Elle peut aussi avoir une valeur inférieure au bord supérieur de l'écran (le haut de l'écran vaut `0` et la position **y** du sprite est alors négative). Dans ce cas, une partie ou la totalité du sprite n'est pas visible à l'écran.

## Exemple #example

Définis les positions **x** et **y** du sprite à `64`. Fais dire au sprite quelle est sa valeur **y**.

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
monSprite.x = 64
monSprite.y = 64
monSprite.say("I'm centered at y:" + monSprite.y)
```

## Voir aussi #seealso

[x](/reference/sprites/sprite/x),
[gauche](/reference/sprites/sprite/left),
[droite](/reference/sprites/sprite/right),
[haut](/reference/sprites/sprite/top),
[bas](/reference/sprites/sprite/bottom)

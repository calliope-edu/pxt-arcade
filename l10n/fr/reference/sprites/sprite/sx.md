# sx (propriété)

Obtiens ou définis le facteur d'échelle pour la largeur d'un sprite.

## Obtenir

Obtiens l'échelle de largeur du sprite.

```block
let monSprite: Sprite = null

let xScale = monSprite.sx
```

```typescript-ignorelet
xScale = monSprite.sx
```

### Retourne

* un [nombre](/types/number) qui est l'échelle actuelle de la largeur du sprite.

## Définir

Définis l'échelle de largeur du sprite.

```block
let monSprite: Sprite = null

monSprite.sx = 2
```

```typescript-ignore
monSprite.sx = 2
```

### Paramètre

* **value** : le nouveau facteur d'échelle de largeur pour la taille du sprite.

## Exemples #example

### Étirer et réduire la largeur #ex1

Augmente l'échelle de la largeur d'un sprite de `1` chaque seconde. Agrandis-le tant qu'il est petit et réduis-le quand il est grand.

```blocks
let expand = 0
let monSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    if (monSprite.sx == 1) {
        expand = 1
    } else if (monSprite.sx == 6) {
        expand = -1
    }
    monSprite.sx += expand
})
```

## Voir aussi #seealso

[sy](/reference/sprites/sprite/sy),
[échelle](/reference/sprites/sprite/scale)

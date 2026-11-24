# sy (propriété)

Obtiens ou définis le facteur d'échelle pour la hauteur d'un sprite.

## Obtenir

Obtiens l'échelle de hauteur du sprite.

```block
let monSprite: Sprite = null

let xScale = monSprite.sy
```

```typescript-ignorelet
xScale = monSprite.sy
```

### Retourne

* un [nombre](/types/number) qui est l'échelle actuelle de la hauteur du sprite.

## Définir

Définis l'échelle de hauteur du sprite.

```block
let monSprite: Sprite = null

monSprite.sy = 2
```

```typescript-ignore
monSprite.sy = 2
```

### Paramètre

* **value** : le nouveau facteur d'échelle de hauteur pour la taille du sprite.

## Exemples #example

### Étirer et réduire la hauteur #ex1

Augmente l'échelle de la hauteur d'un sprite de `1` chaque seconde. Agrandis-le tant qu'il est petit et réduis-le quand il est grand.

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
    if (monSprite.sy == 1) {
        expand = 1
    } else if (monSprite.sy == 6) {
        expand = -1
    }
    monSprite.sy += expand
})
```

## Voir aussi #seealso

[sx](/reference/sprites/sprite/sx),
[échelle](/reference/sprites/sprite/scale)

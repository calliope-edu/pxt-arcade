# scale (propriété)

Obtiens ou définis le facteur d'échelle pour la largeur et la hauteur d'un sprite.

## Obtenir

Obtiens l'échelle du sprite.

```block
let monSprite: Sprite = null

let xScale = monSprite.scale
```

```typescript-ignorelet
xScale = monSprite.scale
```

### Retourne

* un [nombre](/types/number) qui est l'échelle actuelle du sprite.

## Définir

Définis l'échelle du sprite.

```block
let monSprite: Sprite = null

monSprite.scale = 2
```

```typescript-ignore
monSprite.scale = 2
```

### Paramètre

* **value** : le nouveau facteur d'échelle pour la taille du sprite.

## Exemples #example

### Agrandir et rétrécir #ex1

Augmente l'échelle d'un sprite de `1` chaque seconde. Agrandis-le tant qu'il est petit et rétrécis-le quand il est grand.

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
    if (monSprite.scale == 1) {
        expand = 1
    } else if (monSprite.scale == 6) {
        expand = -1
    }
    monSprite.scale += expand
})
```

## Voir aussi #seealso

[sx](/reference/sprites/sprite/sx),
[sy](/reference/sprites/sprite/sy)

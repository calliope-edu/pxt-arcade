# image de sprite

Le bloc conteneur et éditeur d'une image de sprite.

```sig
images._spriteImage(null)
```

Un clic sur la fenêtre d'image du bloc ouvre l'éditeur d'images, où tu peux créer une nouvelle image ou modifier l'image actuelle. L'image est utilisée lors de la création d'un sprite ou comme autre image à attribuer à un sprite.

## Paramètres

* **image** : l'[image](/types/image) à utiliser pour un sprite.

## Exemple #example

Crée un nouveau sprite avec l'image d'un donut.

```blocks
let monSprite = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
```

## Voir aussi

[créer](/reference/sprites/create),
[définir l'image](/reference/sprites/sprite/set-image)
# faire défiler

Fait défiler les pixels d'une image vers le haut, le bas, la droite ou la gauche.

```sig
image.create(0, 0).scroll(0, 0)
```

Les images défilent d'un certain nombre de lignes ou de colonnes de pixels (la distance de défilement). Une image peut même défiler à la fois en lignes et en colonnes. Le sens du défilement dépend du signe (-) de la distance de défilement. Pour défiler vers le haut, on utilise une valeur négative. Pour défiler vers la gauche, on utilise aussi une valeur négative. Pour défiler vers le bas ou vers la droite, on utilise des valeurs positives.

Le défilement est une opération _destructive_. Cela signifie que les pixels qui sortent de l'image sont perdus et ne peuvent pas y revenir. Pendant le défilement, les positions d'origine des pixels déplacés sont remplacées par des pixels transparents.

## Paramètres

* **dx** : le [nombre](/types/number) de pixels dont faire défiler l'image vers la gauche ou la droite. Utilise une valeur négative pour défiler vers la gauche.
* **dy** : le [nombre](/types/number) de pixels dont faire défiler l'image vers le haut ou le bas. Utilise une valeur négative pour défiler vers le haut.

## Exemples #example

### Bandes de couleur #ex1

Fais défiler une image de 15 bandes de couleur vers le haut jusqu'à ce qu'elle disparaisse.

```blocks
let showBands: Sprite = null
let colorBands: Image = null
let scrollCount = 0
scrollCount = 16
colorBands = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
d d d d d d d d d d d d d d d d 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
`
showBands = sprites.create(colorBands)
game.onUpdateInterval(500, function () {
    if (scrollCount > 0) {
        colorBands.scroll(0, -1)
        scrollCount += -1
    }
})
```

### Défilement en diagonale #ex2

Fais défiler un carré vert en diagonale vers le bas et la droite.

```blocks
let showSquare: Sprite = null
let greenSquare: Image = null
greenSquare = image.create(32, 32)
greenSquare.fill(6)
showSquare = sprites.create(greenSquare)
game.onUpdateInterval(500, function () {
    greenSquare.scroll(1, 1)
})
```

## Voir aussi #seealso

[retourner horizontalement](/reference/images/image/flip-x),
[retourner verticalement](/reference/images/image/flip-y)
# cloner

Copie une image pour en faire une autre identique.

```sig
image.create(0, 0).clone()
```

Une nouvelle image est créée, qui est une copie de l'originale. La disposition de l'image et les couleurs des pixels sont les mêmes.

## Valeur renvoyée

* une [image](/types/image) qui est une copie exacte de l'image originale.

## Exemple #example

Dessine un bonhomme bâton dans une image. Clone l'image et affiche-la sous l'image originale.

```blocks
let stickPerson1 = img`
. . . a a . . .
. . a . . a . .
. . . a a . . .
. . . a . . . .
a a a a a a a .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . a   a . . .
. a . . . a . .
. a a . . a a .
`
let stickPerson2 = stickPerson1.clone()

let showPerson1 = sprites.create(stickPerson1)
let showPerson2 = sprites.create(stickPerson2)
showPerson2.y = showPerson1.y + 16
```

## Voir aussi #seealso

[créer](/reference/images/create)


# mouvement vertical

Permet au sprite corgi de sauter vers le haut avec le bouton flèche haut.

```sig
corgio.create().verticalMovement()
```

## Paramètres

* **on**: a [boolean](/types/boolean) qui, lorsqu'elle vaut `true`, fait sauter le sprite corgi verticalement vers le haut avec le bouton flèche haut.

## Exemple #example

Crée un nouveau corgi à la position par défaut sur l'écran et donne-lui du mouvement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## Voir aussi #seealso

[mouvement horizontal](/reference/corgio/horizontal-movement)

```package
corgio
```
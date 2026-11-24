# mouvement horizontal

Active le mouvement horizontal du corgi avec les boutons flèche gauche et droite.

```sig
corgio.create().horizontalMovement()
```

## Paramètres

* **on**: a [boolean](/types/boolean) qui, lorsqu'elle vaut `true`, déplace le sprite corgi horizontalement avec les boutons flèche gauche et droite.

## Exemple #example

Crée un nouveau corgi à la position par défaut sur l'écran et donne-lui du mouvement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## Voir aussi #seealso

[mouvement vertical](/reference/corgio/vertical-movement), [caméra suit](/reference/corgio/camera-follow)

```package
corgio
```
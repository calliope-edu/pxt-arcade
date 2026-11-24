# créer

Crée un sprite corgi de jeu de plateformes.

```sig
corgio.create()
```

## Paramètres

* **kind** : le [type](/reference/sprites/sprite/kind) de sprite pour le corgi.
* **x** : la position horizontale initiale du sprite corgi sur l'écran.
* **y** : la position verticale initiale du sprite corgi sur l'écran.

## Valeur retournée

* un [sprite](/types/sprite) qui est le nouveau corgi.

## Exemple #example

Crée un nouveau corgi à la position par défaut sur l'écran et donne-lui du mouvement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement()
myCorg.horizontalMovement()
```

## Voir aussi #seealso

[créer](/reference/sprites/create)

```package
corgio
```
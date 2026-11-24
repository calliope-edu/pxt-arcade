# mettre à jour le sprite

Fais changer l'image du corgi quand il se déplace.

```sig
corgio.create().updateSprite(true)
```

Si c'est activé, l'image du sprite corgi change quand il se déplace, pour qu'il semble regarder dans la direction du mouvement.

## Paramètres

* **on**: a [boolean](/types/boolean) qui, lorsqu'elle vaut `true`, fait changer l'image du sprite corgi quand il se déplace.

## Exemple #example

Fais changer l'image du corgi quand il se déplace vers la gauche ou la droite.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.updateSprite()
```

## Voir aussi #seealso

[mouvement horizontal](/reference/corgio/horizontal-movement), [caméra suit](/reference/corgi/camera-follow)

```package
corgio
```
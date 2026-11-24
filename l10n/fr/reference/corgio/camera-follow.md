# caméra suit

Permet à la caméra de la scène de suivre le sprite corgi.

```sig
corgio.create().cameraFollow(true)
```

## Paramètres

* **on**: a [boolean](/types/boolean) qui, lorsqu'elle vaut `true`, fait suivre le sprite corgi par la caméra de la scène.

## Exemple #example

Fais suivre le corgi par la caméra de la scène.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.cameraFollow()
```

## Voir aussi #seealso

[mouvement horizontal](/reference/corgio/horizontal-movement), [mouvement vertical](/reference/corgio/vertical-movement)

```package
corgio
```
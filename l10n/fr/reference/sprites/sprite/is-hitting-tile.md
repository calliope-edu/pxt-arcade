# is Hitting Tile

Vérifie si le sprite touche une tuile murale ou non.

```sig
sprites.create(null).isHittingTile(CollisionDirection.Left)
```

La fonction vérifie si le sprite touche actuellement une tuile murale sur l'un de ses quatre côtés. Si le sprite touche la tuile murale, `true` est retourné.

Le sprite doit être en mouvement (une vitesse ``vx`` ou ``vy`` différente de `0`) avant la vérification du contact avec une tuile. Sinon, `false` est retourné même si le sprite touche la tuile murale.

## Paramètres

* **direction** : la direction dans laquelle vérifier une collision avec un mur : ``left``, ``right``, ``top`` ou ``bottom``

## Retourne

* une valeur [booléenne](/types/boolean) qui est `true` si le sprite touche une tuile murale ou `false` s'il ne touche pas de tuile murale.

## Exemple

Construis un mur de briques avec des tuiles dans la scène. Envoie un sprite en forme de flèche vers le mur. Si le sprite touche le mur, renvoie-le dans la direction opposée.

```blocks
let flipImage: Image = null
let monSprite: Sprite = null
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 f 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 f 2 2 2 f 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
`, true)
scene.setTileMap(img`
. . . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. 2 . . . . . . . . 
. . . . . . . . . . 
`)
flipImage = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
monSprite = sprites.create(flipImage, SpriteKind.Player)
monSprite.vx = -50
game.onUpdate(function () {
    if (monSprite.isHittingTile(CollisionDirection.Left)) {
        flipImage.flipX()
        monSprite.vx = monSprite.vx * -1
    }
})
```

## Voir aussi #seealso

[tuile touchée depuis](/reference/sprites/sprite/tile-hit-from),
[lorsque touche une tuile](/reference/sprites/on-hit-tile)
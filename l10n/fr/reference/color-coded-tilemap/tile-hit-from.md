# tile Hit From

Savoir quel type de tuile un sprite a touché.

```sig
scene.tileHitFrom(sprites.create(null), CollisionDirection.Left)
```

Si un sprite touche une tuile mur, tu peux savoir de quel type de tuile il s'agit. L'index de la tuile dans la carte est renvoyé.

## Paramètres

* **direction** : la direction dans laquelle vérifier une collision avec un mur : ``left``, ``right``, ``top`` ou ``bottom``.

## Valeur retournée

* un [nombre](/types/number) qui est l'index de la tuile mur en contact avec le sprite.

## Exemple

Construis un mur de briques avec des tuiles dans la scène. Envoie un sprite en forme de flèche vers le mur. Quand le sprite touche le mur, fais-lui dire quel type de tuile il a touché.

```blocks
let monSprite: Sprite = null
let flipImage: Image = null
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    sprite.say("tile: " + scene.tileHitFrom(sprite, CollisionDirection.Left))
})
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
```

## Voir aussi #seealso

[lorsque touche la tuile](/reference/scene/on-hit-tile)
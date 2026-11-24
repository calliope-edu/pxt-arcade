# type de tuile à

Vérifie si le type de tuile à côté du sprite est d'un type précis

```sig
sprites.create(null).tileKindAt(Direction.Center, img``)
```

Tu peux vérifier si les tuiles à côté ou en dessous de ton sprite ont une [image](/types/image) de tuile précise. Une valeur booléenne est retournée.

## Paramètres

* **direction** : la direction de la tuile par rapport au sprite : ``left``, ``right``, ``top``, ``bottom`` ou ``center`` (directement sous ton sprite).
* **image** : l'image de tuile choisie

## Retourne

* une valeur [booléenne](/types/boolean) qui indique si la tuile a l'image indiquée.

## Exemple

Construis un mur de briques avec des tuiles dans la scène. Envoie un sprite flèche vers le mur. Lorsque le sprite touche le mur, fais-lui dire quel type de tuile il a touché.

```blocks
let monSprite: Sprite = null
let flipImage: Image = null
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    sprite.say("tile: " + sprite.tileHitFrom(CollisionDirection.Left))
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
// TODO tiles.setTilemap(tiles.createTilemap(null, 0, 8 ** 8, 9)); 
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

[touche une tuile](/reference/sprites/sprite/is-hitting-tile),
[lors du chevauchement d'une tuile](/reference/tiles/on-overlap-tile)
[lors de la collision avec un mur](/reference/tiles/on-hit-wall)
# Tilemaps

Une extension pour plusieurs tilemaps et des blocs de tilemap supplémentaires.

Cette extension contient des fonctions avancées pour travailler avec les tilemaps en blocs.

## Utilisation

## createSpritesOnTiles

Le bloc ``||tiles.createSpritesOnTiles||`` crée un sprite vide à chaque position où se trouve la tuile indiquée. Combine-le avec ``||sprites.onCreated||`` pour donner aux sprites vides une image, une position, etc.

### Paramètres

* `tileKind` est l'image de la tuile sur laquelle les sprites sont créés
* `spriteKind` est le type des sprites créés

### Exemple 1

Crée une petite case verte sur chaque tuile vide.

```blocks

sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setImage(img`
        7 7 
        7 7 
        `)
})
tiles.setTilemap(tiles.createTilemap(hex`0400040000000000000000000000000000000000`, img`
. . . . 
. . . . 
. . . . 
. . . . 
`, [myTiles.transparency16], TileScale.Sixteen))

tiles.createSpritesOnTiles(myTiles.transparency16, SpriteKind.Enemy)

```

Source : [microsoft/pxt-tilemaps](https://github.com/microsoft/pxt-tilemaps/tree/v1.12.0) (v1.12.0)

```package
tilemaps
```

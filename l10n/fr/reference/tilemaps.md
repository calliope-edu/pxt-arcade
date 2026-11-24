# Tilemaps

Une extension pour gérer plusieurs tilemaps et des blocs de tilemap supplémentaires.

Cette extension contient des API avancées pour travailler avec les tilemaps dans les blocs.

## Utilisation

## createSpritesOnTiles

Le bloc ``||tiles.createSpritesOnTiles||`` crée un sprite vide au-dessus de chaque emplacement contenant la tuile indiquée. Combine-le avec ``||sprites.onCreated||`` pour initialiser les sprites vides avec une image, une position, etc.

### Paramètres

* `tileKind` est l'image de la tuile sur laquelle les sprites seront créés
* `spriteKind` est le type de sprite qui sera créé

### Exemple 1

Crée une petite boîte verte sur chaque tuile vide.

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

Source: [microsoft/pxt-tilemaps](https://github.com/microsoft/pxt-tilemaps/tree/v1.12.0) (v1.12.0)

```package
tilemaps
```

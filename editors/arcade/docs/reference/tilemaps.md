# Tilemaps

An extension for handling multiple tilemaps and extra tilemap blocks.

This extension contains advanced APIs for working with tilemaps in blocks.

## Usage

## createSpritesOnTiles

The ``||tiles.createSpritesOnTiles||`` block creates an empty sprite on top of each location with the specified tile. Combine this with ``||sprites.onCreated||`` to initialize the empty sprites with an image, position, etc.

### Parameters

* `tileKind` is the image of the tile where sprites will be created
* `spriteKind` is the kind of sprite that will be created

### Example 1

Create a small green box on each empty tile.

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

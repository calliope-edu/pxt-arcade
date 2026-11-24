# Tilemaps

Eine Erweiterung zum Verwalten mehrerer Tilemaps und mit zusätzlichen Tilemap-Blöcken.

Diese Erweiterung enthält fortgeschrittene APIs, um mit Tilemaps in Blöcken zu arbeiten.

## Verwendung

## createSpritesOnTiles

Der Block ``||tiles.createSpritesOnTiles||`` erstellt ein leeres Sprite über jeder Position mit der angegebenen Kachel. Kombiniere ihn mit ``||sprites.onCreated||``, um die leeren Sprites mit einem Bild, einer Position usw. zu initialisieren.

### Parameter

* `tileKind` ist das Bild der Kachel, auf der Sprites erstellt werden
* `spriteKind` ist die Art des Sprites, das erstellt wird

### Beispiel 1

Erstelle ein kleines grünes Kästchen auf jeder leeren Kachel.

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

Quelle: [microsoft/pxt-tilemaps](https://github.com/microsoft/pxt-tilemaps/tree/v1.12.0) (v1.12.0)

```package
tilemaps
```

# Tilemaps

Eine Erweiterung für mehrere Tilemaps und zusätzliche Tilemap-Blöcke.

Diese Erweiterung enthält fortgeschrittene Funktionen für die Arbeit mit Tilemaps in Blöcken.

## Verwendung

## createSpritesOnTiles

Der Block ``||tiles.createSpritesOnTiles||`` erstellt auf jeder Position mit der angegebenen Kachel ein leeres Sprite. Kombiniere ihn mit ``||sprites.onCreated||``, um den leeren Sprites ein Bild, eine Position usw. zu geben.

### Parameter

* `tileKind` ist das Bild der Kachel, auf der die Sprites erstellt werden
* `spriteKind` ist die Art der Sprites, die erstellt werden

### Beispiel 1

Erstelle auf jeder leeren Kachel ein kleines grünes Kästchen.

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

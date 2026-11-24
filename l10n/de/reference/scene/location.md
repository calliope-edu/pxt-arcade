# Position

Das Positions-Objekt enthält die Positionsangaben eines Spielelements auf der Kachelkarte.

## column (Eigenschaft)

Ruft die Kachelspalte eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let col = location.column
```

```typescript-ignore
let col = location.column
```

### Rückgabe

* eine [Zahl](/types/number): die Kachelspalte des Objekts auf der Kachelkarte.

## row (Eigenschaft)

Ruft die Kachelzeile eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let row = location.row
```

```typescript-ignore
let row = location.row
```

### Rückgabe

* eine [Zahl](/types/number): die Kachelzeile des Objekts auf der Kachelkarte.

## x (Eigenschaft)

Ruft die horizontale Mittelposition eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let horz = location.x
```

```typescript-ignore
let horz = location.x
```

### Rückgabe

* eine [Zahl](/types/number): die aktuelle horizontale Mittelposition des Objekts auf der Kachelkarte in Pixeln.

## y (Eigenschaft)

Ruft die vertikale Mittelposition eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let vert = location.y
```

```typescript-ignore
let vert = location.y
```

### Rückgabe

* eine [Zahl](/types/number): die vertikale Mittelposition des Objekts auf der Kachelkarte in Pixeln.

## left (Eigenschaft)

Ruft die Position der linken Seite eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let left = location.left
```

```typescript-ignore
let left = location.left
```

### Rückgabe

* eine [Zahl](/types/number): die linke Seite des Objekts auf der Kachelkarte in Pixeln.

## right (Eigenschaft)

Ruft die Position der rechten Seite eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let right = location.right
```

```typescript-ignore
let right = location.right
```

### Rückgabe

* eine [Zahl](/types/number): die rechte Seite des Objekts auf der Kachelkarte in Pixeln.

## top (Eigenschaft)

Ruft die Position der oberen Seite eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let top = location.top
```

```typescript-ignore
let top = location.top
```

### Rückgabe

* eine [Zahl](/types/number): die rechte Seite des Objekts auf der Kachelkarte in Pixeln.

## bottom (Eigenschaft)

Ruft die Position der unteren Seite eines Objekts auf der Kachelkarte ab.

```block
let location: tiles.Location = null

let bottom = location.bottom
```

```typescript-ignore
let bottom = location.bottom
```

### Rückgabe

* eine [Zahl](/types/number): die rechte Seite des Objekts auf der Kachelkarte in Pixeln.

## Beispiel #example

Gestalte mit Kacheln auf einer Kachelkarte eine karierte Tischdecke. Erstelle ein Hamburger-Sprite und setze es an eine zufällige Stelle auf der Tischdecke. Finde heraus, wo der Hamburger ist, und zeige seine Position an.

```blocks
tiles.setCurrentTilemap(tilemap`level1`)
let meinSprite = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Player)
meinSprite.setPosition(randint(16, 144), randint(16, 104))
let location = meinSprite.tilemapLocation()
let displayString = "My hamburger is at "
displayString = "" + displayString + "x = "
displayString = "" + displayString + location.x + ", y = " + location.y
displayString = "" + displayString + " and over the tile at column = "
displayString = "" + displayString + location.column + ", row = " + location.row
game.showLongText(displayString, DialogLayout.Bottom)
```

## Siehe auch #seealso

[benachbarte Position abrufen](/reference/scene/get-neighboring-location)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "tile4": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile2"
    },
    "tile5": {
        "data": "hwQQABAAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile3"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAzMDEwMzAxMDMwMTAzMDEwMzAxMDEwMzAyMDMwMjAzMDIwMzAyMDMwMzAyMDMwMjAzMDIwMzAyMDMwMTAxMDMwMjAzMDIwMzAyMDMwMjAzMDMwMjAzMDIwMzAyMDMwMjAzMDEwMTAzMDIwMzAyMDMwMjAzMDIwMzAzMDIwMzAyMDMwMjAzMDIwMzAxMDEwMzAxMDMwMTAzMDEwMzAxMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5"
        ],
        "displayName": "level1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```
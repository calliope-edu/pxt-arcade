# Kachelkarte

Ein Kachelkarten-Objekt, das ein Level für die Spielszene festlegt.

```sig
tiles._tilemapEditor(null)
```

Eine **Kachelkarte** (tilemap) ist ein Datenobjekt, das die Abmessungen, Ebenen und Kacheln einer Kachelanordnung enthält, mit der die Szene eines Spiels festgelegt wird.

## Kachelkarten erstellen und verwenden

Kachelkarten werden nicht programmiert, sondern mit einem Kachelkarten-Editor erstellt. Wenn du deinem Projekt eine Kachelkarte hinzufügst, enthält sie ein Standardlayout, bei dem alle Zeilen und Spalten mit transparenten Kacheln gefüllt sind.

```block
tiles.setCurrentTilemap(tilemap`level2`)
```

Du bearbeitest die Kachelkarte mit dem Kachelkarten-Editor. Beim Programmieren mit Blöcken öffnet sich der Kachelkarten-Editor, wenn du auf das Kartenbild im Kachelkarten-Block klickst. Wenn du Code bearbeitest, öffnet sich der Kachelkarten-Editor durch Klicken auf das Kartensymbol in der Codezeile, in der du die Kachelkarte verwendest.

Du gestaltest deine Spielszene, also dein _Level_, mit Kacheln, die du selbst erstellst oder aus der Kachelbibliothek auswählst. Du kannst auch die Größe der Kachelkarte und Kacheleigenschaften festlegen. Das Beispiel hier zeigt eine Kachelkarte für ein Labyrinthspiel: 

```block
tiles.setCurrentTilemap(tilemap`level1`)
```

Nach dem Bearbeiten wird eine Kachelkarte als Projekt-Asset gespeichert. Die Kachelkarte wird als Level definiert und bekommt einen Bezeichner wie `level1`. Im Code verwendest du die Kachelkarte mit ihrem Bezeichner so:

```typescript-ignore
tiles.setCurrentTilemap(tilemap`level1`)
```

Du kannst eine Kachelkarte direkt in Szenen- und Kacheloperationen verwenden oder als zugewiesene Variable:

```block
let myTilemap = tilemap`level1`
tiles.setCurrentTilemap(myTilemap)
```

## Das Kachelkarten-Objekt

Kachelkarten sind komplexe Datenobjekte und werden als Level definiert, die Kacheln an verschiedenen Zeilen- und Spaltenpositionen enthalten. Wenn eine Kachelkarte zu einem Projekt hinzugefügt wird, enthalten die Projekt-Assets sowohl die Kachelkarte als auch ihre Kacheln. Die Asset-Daten einer Kachelkarte könnten so aussehen:

```typescript-ignore
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "tile2": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "tile3": {
        "data": "hwQQABAAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAyMDAwMDAwMDEwMTAwMDMwMzAwMDIwMjAwMDAwMDAxMDAwMDAzMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDIwMDAwMDMwMDAzMDAwMTAxMDAwMjAyMDAwMDAwMDMwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3"
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

## Siehe auch

[aktuelle Kachelkarte festlegen](/reference/tiles/set-current-tilemap)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "tile2": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "tile3": {
        "data": "hwQQABAAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"    
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAyMDAwMDAwMDEwMTAwMDMwMzAwMDIwMjAwMDAwMDAxMDAwMDAzMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDIwMDAwMDMwMDAzMDAwMTAxMDAwMjAyMDAwMDAwMDMwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3"
        ],
        "displayName": "level1"
    },
    "level2": {
        "id": "level2",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ],
        "displayName": "level4"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```
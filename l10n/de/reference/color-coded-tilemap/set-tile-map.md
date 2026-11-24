# setze Kachelkarte

Ordne Bildkacheln als Muster in der Szene an.

```sig
scene.setTileMap(null)
```

Deine Spielszene enthält eine [Kachelkarte](/reference/color-coded-tilemap/tile-map). Eine Kachelkarte ist eine Anordnung (ein Muster) von Bildkacheln, die einen Teil der Szene ausfüllen. Am Anfang hat die Szene eine leere Kachelkarte und es wird kein Kachelmuster angezeigt. Um deine Szene aufzubauen, musst du einige Kacheln erstellen, sie zur Szene hinzufügen und der Szene dann sagen, wo die Kacheln platziert werden sollen.

Die Kachelkarte verwendet ein Bild als Vorlage, um die Kacheln in der Szene anzuordnen. Die Farbnummern im Bild sind Kennungen (ein Index) für Bildkacheln, die zur Szene hinzugefügt wurden. Kachelindizes werden an verschiedenen Stellen der Karte platziert, um festzulegen, was in der Szene angezeigt wird. Wenn keine Kachel mit einem Index festgelegt ist, der zu einer Farbnummer in der Karte passt, wird die Szene an dieser Kachelposition stattdessen mit der eigentlichen Farbe dieser Nummer gefüllt.

Kacheln werden anhand ihrer Position in der Karte in der Szene platziert. Hier ist eine einfarbige Kachel mit dem Index `3`:

```block
scene.setTile(3, img`7`)
```

Vier dieser Kacheln werden in die Mitte der Karte gesetzt, wobei die Farbnummer als passender Index dient:

```typescript
scene.setTileMap(img`
. a . 9
. 3 3 2
2 3 3 .
9 . a .
`)
```

Statt der Farbe `3` wird an dieser Stelle der Szene also das Kachelbild angezeigt, das dem Index `3` zugeordnet ist.

## Parameter

* **map**: ein [Bild](/types/image), dessen Pixel die Indizes der Kachelbilder enthalten, die in der Szene angezeigt werden.

## Beispiel #example

### Schachbrettkarte #ex1

Erstelle eine kleine karierte Kachelkarte mit zwei einfarbigen Kacheln.

```blocks
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
a a
a a
`)
scene.setTileMap(img`
1 2
2 1
`)
```
### Farbnummern ohne Kachel #ex2

Erstelle eine Kachelkarte mit Farbnummern ohne passende Kachel und mit unterschiedlich großen Kacheln.

```blocks
scene.setTile(1, img`
d d d d
d d b b
d d b b
b b b b
`)
scene.setTile(2, img`
a a
a a
`)
scene.setTileMap(img`
1 2 7
2 1 7
7 7 7
`)
```

## Siehe auch #seealso

[Kachelkarte](/reference/color-coded-tilemap/tile-map),
[setze Kachel](/reference/color-coded-tilemap/set-tile)

```package
color-coded-tilemap
```
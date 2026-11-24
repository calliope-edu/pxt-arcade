# Kachelkarte

Deine Spielszene enthält eine Kachelkarte. Eine Kachelkarte ist eine Anordnung (ein Muster) von Bildkacheln, die einen Teil oder die ganze Szene ausfüllen. Am Anfang hat die Szene eine leere Kachelkarte und es wird kein Kachelmuster angezeigt. Um deine Szene aufzubauen, musst du einige Kacheln erstellen, sie zur Szene hinzufügen und der Szene dann sagen, wo die Kacheln platziert werden sollen.

## Kacheln

Eine Kachel ist ein Bild, das als Teil einer Kachelkarte verwendet wird. Mit Kacheln kann die Szene dasselbe Bild wiederholt an verschiedenen Stellen anzeigen.

```block
scene.setTile(1, img`
d d
d d
`)
scene.setTile(4, img`
5 c 5 c 5 c
c 5 c 5 5 5
5 5 5 c 5 c
c 5 c 5 c 5
5 c 5 5 5 c
c 5 c 5 c 5
`)
```

Kacheln verwenden eine Farbnummer als Kennung (Index). Um eine Kachel in die Szene zu setzen, wird diese Nummer an eine Stelle der Kachelkarte gesetzt. Hier kennzeichnet die Farbnummer `1` eine einfarbige Kachel.

```typescript
scene.setTile(1, img`
d d
d d
`)
```
### Kachelgrößen

Kacheln können jede Größe haben, und ihre Größen müssen nicht gleich sein. Die Szene zeigt unterschiedlich große Kacheln eventuell mit angepassten Abmessungen an, damit sie ihre Anordnung aus der Karte in der Szene behalten.

### Sprite-Kollisionen

Eine Kachel hat eine besondere Eigenschaft: Sie kann eine _Kollision_ mit einem Sprite auslösen. Wenn sich ein Sprite bewegt und eine Kachel berührt, die du für Kollisionen festgelegt hast, kann sie den Sprite aufhalten oder ablenken, sodass er nicht hindurchkommt. Schalte Kollisionen ``on``, um die Sprites zu blockieren.

```block
scene.setTile(6, img`8`, true)
```

## Kachelkarte der Szene

Die Kachelkarte ist ein Plan, wo bestimmte Kacheln hingesetzt werden. Die Karte hat Zeilen und Spalten, die an jeder Stelle einen Kachelindex enthalten. Eigentlich ist die Kachelkarte ein Bild, bei dem die Farbnummern an den Pixelpositionen keine Pixel, sondern Kachelindizes sind.

Wie funktioniert das? Um das herauszufinden, erstellen wir zwei kleine Kacheln und fügen sie zur Szene hinzu.

```block
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
a a
a a
`)
```

Jetzt erstellen wir eine Karte, um mit den Kacheln ein Muster zu bilden.

```block
scene.setTileMap(img`
1 2
2 1
`)
```

Du siehst, dass die Farbnummern in der Karte zu den Farbnummern der Kacheln passen. Die Kacheln `1` und `2` sind in der Karte als Schachbrettmuster angeordnet. Zusammen sehen die Blöcke im Code so aus:

```typescript
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

Nachdem die Kachelkarte gesetzt wurde, erscheint das Muster in der Szene. 

```sim
let tile2: Image = null
let tile1: Image = null
tile1 = image.create(32, 32)
tile1.fill(13)
tile2 = image.create(32, 32)
tile2.fill(10)
scene.setTile(1, tile1)
scene.setTile(2, tile2)
scene.setTileMap(img`
1 1 2 2 
1 1 2 2
2 2 1 1
2 2 1 1
`)
```

### Farbnummern ohne Kachel

Wenn die Kachelkarte Farbnummern enthält, zu denen keine Kachel in der Szene passt, wird die Farbnummer nicht als Index, sondern nur als Füllfarbe verwendet. Der Kachelbereich wird dann einfach mit der Farbe dieser Nummer gefüllt.

```block
scene.setTileMap(img`
7 7 7 7
7 1 2 7
7 2 1 7
7 7 7 7
`)
```

Das Bild der Karte mit der Farbnummer `7` ohne passende Kachel sieht so aus:

```typescript
scene.setTileMap(img`
7 7 7 7
7 1 2 7
7 2 1 7
7 7 7 7
`)
```

### Unterschiedliche Kachelgrößen

Wenn die Kachelkarte Kacheln unterschiedlicher Größe enthält, passt die Szene die Größe der Kacheln bei der Anzeige eventuell an, damit sie zusammenpassen. Falls nötig, werden größere Kacheln teilweise überdeckt oder verkleinert, damit sie neben die kleineren Kacheln passen.

Wenn du diese zwei Kachelgrößen in der Karte mischst:

```typescript
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
4 4 4 4
4 4 4 4
4 4 4 4
4 4 4 4
`)
scene.setTileMap(img`
1 2
2 1
`)
```

zeigt die Szene sie so an:

```sim
let tile1 = image.create(32, 32)
tile1.fill(13)
let tile2 = image.create(64, 64)
tile2.fill(4)
scene.setTile(1, tile1)
scene.setTile(2, tile2)
scene.setTileMap(img`
1 2
2 1
`)
```

## Siehe auch #seealso

[setze Kachel](/reference/color-coded-tilemap/set-tile),
[setze Kachelkarte](/reference/color-coded-tilemap/set-tile-map)

```package
color-coded-tilemap
```
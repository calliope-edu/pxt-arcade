# Seitlich scrollendes Rennen

## {Einführung @unplugged}

Erstelle ein seitlich scrollendes Autorennspiel, in dem du über Hindernisse springst und bis zur Ziellinie kommst.

![Autorennen im Spiel](/static/recipes/side-scroller/car-race.gif)

## {Schritt 1 - Hintergrundfarbe festlegen}

Lege zuerst die Hintergrundfarbe für dein Rennspiel fest. Ziehe aus der Werkzeugkasten-Schublade ``||scene:Szene||`` einen ``||scene:setze Hintergrundfarbe auf||``-Block in den Arbeitsbereich. Lege ihn in den ``||loops:beim Start||``-Block.

Klicke im ``||scene:setze Hintergrundfarbe auf||``-Block auf das graue Oval, um eine Farbe auszuwählen.

![Hintergrundfarbe](/static/recipes/side-scroller/background-color.png)

```blocks
scene.setBackgroundColor(6)
```

## {Schritt 2 - Tilemap erstellen}

Jetzt benutzen wir eine Tilemap für die Straße in unserem Spiel. Ziehe aus der Werkzeugkasten-Schublade ``||scene:Szene||`` einen ``||scene:setze Tilemap auf||``-Block in den ``||loops:beim Start||``-Block, unter den ``||scene:setze Hintergrundfarbe auf||``-Block.

![Tilemap festlegen](/static/recipes/side-scroller/set-tilemap.png)

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level_0`)
```

## {Schritt 3 - Größe der Leinwand festlegen}

Klicke im ``||scene:setze Tilemap auf||``-Block auf das graue Quadrat, um den Tilemap-Editor zu öffnen.

Stelle unten links die Größe der Leinwand auf **50** mal **8** Pixel ein. So wird der Hintergrund deines Spiels sehr breit und niedrig.

![Größe der Leinwand](/static/recipes/side-scroller/canvas-size.png)

## {Schritt 4 - Die Straße zeichnen}

Wähle eine **Kachel** aus der Kachel-Galerie oder zeichne deine eigene Kachel für die Rennstrecke. Im Bereich **Verschiedenes** der Kachel-Galerie findest du eine Straßenkachel, die du benutzen kannst.

Klicke auf das **Stift**-Symbol und zeichne die Straße entlang des unteren Rands deiner Tilemap-Leinwand.

![Straßenkachel](/static/recipes/side-scroller/road-tile.png)

## {Schritt 5 - Hindernisse erstellen}

Öffne noch einmal den Tilemap-Editor, indem du auf das Quadrat im ``||scene:setze Tilemap auf||``-Block klickst. Diesmal erstellen wir ein Hindernis, über das dein Auto springen muss.

Wähle eine Kachel aus der Galerie oder zeichne deine eigene Kachel für ein Hindernis – das könnte Wasser, heiße Lava oder Stacheln sein!

Setze an verschiedenen Stellen mitten auf deiner Straße bis zu drei Hinderniskacheln nebeneinander.

![Hindernisse](/static/recipes/side-scroller/obstacles.png)

## {Schritt 6 - Ziellinie erstellen}

Öffne den Tilemap-Editor wieder, indem du auf das Quadrat im ``||scene:setze Tilemap auf||``-Block klickst. Jetzt erstellen wir die Ziellinie für unser Rennen.

Wähle eine Kachel aus der Galerie oder zeichne deine eigene Kachel für die Ziellinie und zeichne sie am rechten Rand deiner Tilemap-Leinwand ein.

![Ziellinie](/static/recipes/side-scroller/finish-line.png)

## {Schritt 7 - Die Wände zeichnen}

Geh ein letztes Mal in den Tilemap-Editor. Als Letztes fügen wir in unserer Tilemap Wände auf der Straße hinzu, auf denen unser Auto fahren kann.

Klicke auf das **Wand**-Werkzeug und zeichne damit entlang der Straßenkacheln.

![Wände](/static/recipes/side-scroller/walls.png)

## {Schritt 8 - Fertige Rennstrecke}

Im Simulator siehst du jetzt einen Teil deiner neuen Rennstrecke. Noch ist nicht die ganze Strecke zu sehen, aber der Rest erscheint, sobald dein Auto vorwärtsfährt.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
```

## {Geschafft @unplugged}

Jetzt bauen wir ein Rennauto und geben ihm Bewegungseigenschaften, damit es über die Rennstrecke fährt, die du gerade erstellt hast.

|      |
|:----:|
| [![Auto erstellen](/static/recipes/side-scroller/02-create-car.gif)](#recipe:/recipes/side-scroller/02-create-car) |
| [**Ein Rennauto erstellen**](#recipe:/recipes/side-scroller/02-create-car) |


```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAA/8z//wAAAMzP/P//wP////////8AAAD//8zM/AAAAADw////AAAAAP////8AAMz8/////8D////PzP//AAD///////8AAADw///P/wAAAADM////AAAAAPD///8AAPD//8zM/8D//8z8////AMD8//z//P8AAAAAAP/PzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAzMjAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDIyMjIyMjIyMDAyMDIyMjIyMjAwMjAyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.vehicle.roadHorizontal",
            "myTiles.tile1",
            "sprites.dungeon.greenOuterEast0"
        ]
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```
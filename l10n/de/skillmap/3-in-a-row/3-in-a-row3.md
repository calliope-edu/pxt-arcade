# Drei in einer Reihe – Teil 3

## 👀 Schau dir deinen Code an

- :computer: Im 1. Tutorial haben wir unser Spielfeld als **Tilemap** aufgebaut und mit 💎 **zufälligen Symbolen** gefüllt.

- :computer: Im 2. Tutorial haben wir dafür gesorgt, dass du den 🕹️ **Cursor bewegen** kannst, und eine Funktion erstellt, die Dreierreihen gleicher Kacheln 🔎 **findet und entfernt**.

- :computer: In diesem letzten Tutorial programmieren wir, wie die Kacheln im Cursor ↔️ **getauscht** werden.

Dein Code aus den vorherigen Aktivitäten ist schon im Arbeitsbereich.

Nimm dir einen Moment Zeit und schau dir an, was dieser Code macht, bevor du zum nächsten Schritt gehst.

Wenn dein Code nicht funktioniert, kannst du unten **Ersetze meinen Code** wählen, um einen Startcode zu verwenden.

## Tauschen mit dem A-Knopf

Jetzt kommt der letzte Teil unseres Spiels: Der A-Knopf soll Kacheln tauschen!

---

- :game: Ziehe aus ``||controller:Controller||`` einen ``||controller:wenn A Knopf gedrückt||``-Block in einen freien Bereich des Arbeitsbereichs.

```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Variablen zum Tauschen erstellen

Wir brauchen ein paar 🔤 Variablen, um uns die Kacheln zu merken, die wir tauschen.

---

- :variables: Erstelle in der Werkzeugkasten-Kategorie ``||variables:Variablen||`` mit der Schaltfläche **Erstelle eine Variable...** 3 Variablen mit den Namen **locationRight**, **locationLeft** und **swapImage**.

``||variables(noclick):locationRight||`` – speichert die rechte Kachel im Cursor<br/>
``||variables(noclick):locationLeft||`` – speichert die linke Kachel im Cursor<br/>
``||variables(noclick):swapImage||`` – ist ein Zwischenspeicher zum Tauschen der Kachelbilder

- :variables: Ziehe jetzt aus der Werkzeugkasten-Kategorie ``||variables:Variablen||`` drei ``||variables:setze||``-Blöcke in den ``||controller(noclick):wenn A Knopf gedrückt||``-Block und wähle dabei als Variablennamen **locationRight**, **locationLeft** und **swapImage**

```blocks
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = 0
    locationLeft = 0
    swapImage = 0
})
```

## Die Position der 👉 rechten Kachel im Cursor ermitteln

Die Kachel unter der Mitte eines Sprites gilt als dessen 📍 Position auf der Tilemap. Wegen der Lage des Cursors liegt diese Position auf der rechten Kachel.

---

- :tree: Ziehe aus ``||scene:Szene||`` den ``||scene:Kachelkartenposition von cursor||``-Block in den ``||variables(noclick):setze locationRight||``-Block und ersetze damit die **0**

```blockconfig.local
let cursor: Sprite = null
cursor.tilemapLocation()
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    locationRight = cursor.tilemapLocation()
    locationLeft = 0
    swapImage = 0
})
```

## Die Position der 👈 linken Kachel im Cursor ermitteln

Jetzt suchen wir die Kachel auf der linken Seite des Cursors.

---

- :tree: Ziehe aus ``||scene:Szene||`` den ``||scene:Kachelkartenposition links von locationRight||``-Block in den ``||variables(noclick):setze locationLeft||``-Block und ersetze damit die **0**

So erhältst du die Position eine Kachel weiter links!

```blockconfig.local
let locationRight: tiles.Location = null
locationRight.getNeighboringLocation(CollisionDirection.Left)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    // @highlight
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = 0
})
```

## Das Bild der rechten Kachel speichern

Jetzt kennen wir die Positionen der rechten und linken Kachel im Cursor. Bevor wir tauschen, müssen wir eines der 🖼️ Kachelbilder zwischenspeichern.

---

- :tree: Ziehe aus der Werkzeugkasten-Kategorie ``||scene:Szene||`` einen ``||scene:Kachelbild an locationRight||``-Block in den ``||variables(noclick):swapImage||``-Block und ersetze damit die **0**

```blockconfig.local
tiles.tileImageAtLocation(locationRight)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    // @highlight
    swapImage = tiles.tileImageAtLocation(locationRight)
})
```

## Jetzt wird getauscht!

Jetzt ↔️ tauschen wir die beiden Kacheln wirklich!

---

- :tree: Ziehe aus ``||scene:Szene||`` den ``||scene:setzte Kachelbild an locationLeft auf locationRight||``-Block heraus und lege ihn ans Ende des ``||controller(noclick):wenn A Knopf gedrückt||``-Blocks

Damit kommt das Bild der linken Kachel an die Position der rechten Kachel!

```blockconfig.local
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    // @highlight
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
})
```

## Den Tausch abschließen

Jetzt müssen wir das zwischengespeicherte 🖼️ Bild der rechten Kachel an die 👈 linke Position setzen!

---

- :tree: Ziehe aus ``||scene:Szene||`` den ``||scene:setzte swapImage auf locationLeft||``-Block heraus und lege ihn ans Ende des ``||controller(noclick):wenn A Knopf gedrückt||``-Blocks

Jetzt haben beide Kacheln die Plätze getauscht!

```blockconfig.local
let locationLeft: tiles.Location = null
let swapImage: Image = null
tiles.setTileAt(locationLeft, swapImage)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
    // @highlight
    tiles.setTileAt(locationLeft, swapImage)
})
```

## ✅ Nach dem Tauschen auf Reihen prüfen

Nach jedem Tausch rufen wir hier unsere Funktion **clearMatches** auf, um zu prüfen, ob dabei Reihen auf dem Spielfeld entstanden sind.

---

- :function: Ziehe aus ``||functions:Funktionen||`` einen ``||functions:Aufruf clearMatches||``-Block ans Ende des ``||controller(noclick):wenn A Knopf gedrückt||``-Ereignisses

```blocks
// @hide
function clearMatches () {}
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
    tiles.setTileAt(locationLeft, swapImage)
    // @highlight
    clearMatches()
})
```

## 🎉 Herzlichen Glückwunsch!

Du hast ein Puzzlespiel „Drei in einer Reihe“ erstellt! 🟡🟢🟣  
Nimm dir Zeit, dein Spiel zu spielen. Welche Höchstpunktzahl schaffst du?

---

**So wird gespielt:**
- ➡️ Bewege deinen Cursor mit den **Pfeiltasten** oder dem **Joystick** über das Raster
- 🟢 Drücke **A**, um die Kacheln unter dem Cursor zu tauschen
- 3️⃣ Bilde Reihen aus 3 oder mehr gleichen Symbolen (waagerecht oder senkrecht)
- ❌ Wenn dein Tausch keine Reihe ergibt, endet das Spiel

## Mach weiter

Überlege dir, wie du dein Spiel aufs nächste Level bringen könntest.

---

**Ideen für Herausforderungen:**
- ⏱️ Füge einen Countdown für zusätzlichen Druck hinzu
- 🔊 Füge Hintergrundmusik zum Spiel hinzu
- 💎 Füge besondere Power-up-Edelsteine hinzu, die mehr Punkte bringen
- 💥 Füge eine Kettenreaktion hinzu, wenn neue Kacheln Reihen bilden
- 🔄 Ermögliche es, den Cursor zu drehen und senkrecht zu tauschen
- 🎞️ Füge Animationen hinzu
- ❤️ Erlaube eine bestimmte Anzahl von Tauschen ohne Reihe

Klicke auf **Fertig**, um zur Skillmap zurückzukehren. Hol dir dein Abzeichen und teile dein Spiel mit anderen!

```template
let cleared = false
let symbols: Image[] = []
let cursor: Sprite = null
scene.setBackgroundColor(13)
cursor = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
cursor.setPosition(80, 56)
tiles.setCurrentTilemap(tilemap`level1`)
symbols = [
assets.tile`Gem1`,
assets.tile`Gem2`,
assets.tile`Gem3`,
assets.tile`Gem4`,
assets.tile`Gem5`,
assets.tile`Gem6`
]
fillEmptyTiles()
info.setScore(0)
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 16
})
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            let myTilemap = 0
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    fillEmptyTiles()
    if (!(cleared)) {
        game.gameOver(false)
    }
}
```

```blockconfig.global
function clearMatches () {}
function fillEmptyTiles () {}
cursor.startEffect(effects.confetti, 500)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
```

```package
tileScanner=github:riknoll/arcade-tile-scanner
```

```assetjson
{
  "README.md": " \n\n\n> Open this page at [https://jaqster.github.io/gems/](https://jaqster.github.io/gems/)\n\n## Use as Extension\n\nThis repository can be added as an **extension** in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **New Project**\n* click on **Extensions** under the gearwheel menu\n* search for **https://github.com/jaqster/gems** and import\n\n## Edit this project\n\nTo edit this repository in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **Import** then click on **Import URL**\n* paste **https://github.com/jaqster/gems** and click import\n\n#### Metadata (used for search, rendering)\n\n* for PXT/arcade\n<script src=\"https://makecode.com/gh-pages-embed.js\"></script><script>makeCodeRender(\"{{ site.makecode.home_url }}\", \"{{ site.github.owner_name }}/{{ site.github.repository_name }}\");</script>\n",
  "assets.json": "",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Gems\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"2.0.63\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\",\n    \"assetPack\": true\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAACIiIiIiIgAYIaIiIiIiAhgdnd3d3eHCGB2d3d3d4cIYHZ3d3d3hwhgdnd3d3eHCGB2EXd3d4cIYHYRd3d3hwhgdhF3d3eHCGB2ERF3d4cIYHYREXd3hwhgdnd3d3eHCGB2d3d3d4cIAGZmZmZmZgAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem1\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAADu7gAAAAAAAO7uAAAAAO7uIu4AAAAA7u4i7gAA7u4iIiLuAADu7iIiIu7u7iIiIiIi7u7uIiIiIiLuREQiESIiIu5ERCIRIiIi7gAAREQiIiLuAABERCIiIu4AAAAAREQi7gAAAABERCLuAAAAAAAAREQAAAAAAABERA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem2\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAzMzMzAAAAMyqqqqqzAAAzKqqqqrMALCqqqqqqqoMsKqqqqqqqgywqqqqqqqqDLCqqqqqqqoMsKoRqqqqqgywqhGqqqqqDLCqqhGqqqoMsKqqEaqqqgwAu6qqqqq7AAC7qqqqqrsAAAC7u7u7AAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem3\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAAAAACIiAAAAAAAAIiIAAAAAACImZmIAAAAAIiZmYgAAACImZmZmYgAAIiZmZmZiABmmZmZmZmZiGaZmZmZmZmIZpkRmZmZmYhmmRGZmZmZiABmmRGZmWYAAGaZEZmZZgAAAGaZmWYAAAAAZpmZZgAAAAAAZmYAAAAAAABmZgAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem4\"\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAAAAAADu7u4AAAAAAO7u7gAAAADuVVVV7gAAAO5VVVXuAADuVVVVVVXuAO5VVVVVVe5EVVVVVVVV7kRVVVVVVVXuRFURVVVVVe5EVRFVVVVV7gBEVRFVVVXuAERVEVVVVe4AAERVVVVEAAAARFVVVUQAAAAAREREAAAAAABEREQAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem5\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAADAzMwMAAAAAMzMzMwAAADMMzMzM8wAADwzMzMzwwC7MzMzMzMzzLszMzMzMzPMuzMRMzMzM8y7MxEzMzMzzAA7MxEzM7MAALszETMzuwAAALu7u7sAAAAAsLu7CwAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem6\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Gem1\":\n            case \"tile1\":return tile1;\n            case \"Gem2\":\n            case \"tile2\":return tile2;\n            case \"Gem3\":\n            case \"tile3\":return tile3;\n            case \"Gem4\":\n            case \"tile4\":return tile4;\n            case \"Gem5\":\n            case \"tile5\":return tile5;\n            case \"Gem6\":\n            case \"tile6\":return tile6;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

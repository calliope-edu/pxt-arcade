# Drei in einer Reihe – Teil 1

## Einführung @showdialog

Willkommen bei **Drei in einer Reihe**! 🟡🟢🟣

In dieser Skillmap erstellst du ein lustiges 🧩 Puzzlespiel, in dem du Kacheln tauschst, um 3 oder mehr gleiche Symbole in eine Reihe zu bringen! 🩵🩵🩵

![Spielidee „Drei in einer Reihe“](/static/skillmap/3-in-a-row/match3.gif)

Bewege einen ☐ Cursor über das Spielfeld, ↔️ tausche Kacheln und bilde Reihen, um Punkte zu sammeln. ⚠️ Aber pass auf – wenn dein Tausch keine Reihe ergibt, ist das Spiel vorbei!

## 🎨 Hintergrundfarbe festlegen

Lass uns eine ⬜ helle Hintergrundfarbe für unser Spiel festlegen.

---

- :tree: Ziehe aus der Kategorie ``||scene:Szene||`` im **Werkzeugkasten** einen ``||scene:setze Hintergrundfarbe auf||``-Block in den ``||loops(noclick):beim Start||``-Container im Arbeitsbereich

💡 _Auf einem hellen Hintergrund sind die 🌈 bunten Kacheln besser zu erkennen!_

```blocks
// @highlight
scene.setBackgroundColor(13)
```

## Einen Auswahl-Sprite erstellen

Jetzt brauchen wir einen 👾 Sprite, der als Cursor zeigt, welche Kacheln auf dem Raster ausgewählt sind.

---

- :paper plane: Ziehe aus der Kategorie ``||sprites:Sprites||`` einen ``||variables(sprites):setze cursor auf Sprite vom Typ Player||``-Block ans Ende des ``||loops(noclick):beim Start||``-Containers

~hint Was ist ein Sprite? 💡

---

Ein **Sprite** ist in einem Spiel ein Objekt mit Eigenschaften und Verhalten. Das kann eine Spielfigur 😊 sein, ein Gegner 👿 oder irgendetwas ⭐, das sich bewegen oder etwas tun kann.

hint~

```blockconfig.local
let cursor: Sprite = null
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
```

```blocks
scene.setBackgroundColor(13)
// @highlight
let cursor = sprites.create(img`
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
```

## 📌 Den Cursor platzieren

Lass uns den Cursor zu Beginn in die Mitte des 💻 Bildschirms setzen.

---

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den ``||sprites:setze Position von cursor||``-Block ans Ende des ``||loops(noclick):beim Start||``-Containers

💡 _Der Bildschirm ist 160 Pixel breit und 120 Pixel hoch. Bei **(80, 56)** steht der Cursor ungefähr in der Mitte!_

```blocks
scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
// @highlight
cursor.setPosition(80, 56)
```

## 📱 Die Tilemap einrichten

Jetzt bauen wir das 𖣯 Spielfeld mit einer Tilemap!

---

- :tree: Ziehe aus der Werkzeugkasten-Kategorie ``||scene:Szene||`` einen ``||scene:setze Tilemap auf||``-Block ans Ende des ``||loops(noclick):beim Start||``-Containers

- :mouse pointer: Klicke auf das graue Feld, um den **Tilemap-Editor** zu öffnen

- :mouse pointer: Stelle unten links die Größe der Tilemap auf **10 Spalten** Breite und **7 Zeilen** Höhe ein und klicke dann auf **Fertig**

![Größe der Zeichenfläche](/static/skillmap/3-in-a-row/canvasSize.png "Größe der Zeichenfläche")

- :lightbulb: **Zeichne noch nichts** auf die Tilemap – wir füllen sie mit Code!

~hint Was ist eine Tilemap? 💡

---

Eine 📱 Tilemap ist ein Raster, in dem jedes Feld ein Kachelbild mit 16x16 Pixeln enthalten kann. Perfekt für Puzzlespiele wie dieses!

Unser Spielfeld wird 10 Kacheln breit × 7 Kacheln hoch.

hint~

```blocks
scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
// @highlight
tiles.setCurrentTilemap(tilemap`level1`)
```

## 💎 Ein Array mit Edelsteinen erstellen

Lass uns ein Array mit 🟩🟠🔷 Symbolen – glänzenden Edelsteinen – hinzufügen, um unser Spielfeld zu füllen.

- :arrays: Öffne im Bereich **Fortgeschritten** des Werkzeugkastens die Kategorie ``||arrays:Arrays||``, ziehe einen ``||variables:setze symbols auf Array von||``-Block heraus und lege ihn ans Ende des ``||loops(noclick):beim Start||``-Blocks

- :mouse pointer: Klicke auf die leeren grauen Kachelfelder im ``||arrays(noclick):Array||``-Block und wähle für jedes einen anderen Edelstein aus

~hint Was ist ein Array? 💡

---

Ein Array ist eine Sammlung von Werten desselben Typs. Stell dir ein Array wie eine Reihe von Briefkästen 📫📫📫 vor, in denen jeweils ein anderer ✉️ Brief liegt.

hint~

```blockconfig.local
let symbols: Image[] = []
symbols = [
assets.tile`Gem1`,
assets.tile`Gem2`,
assets.tile`Gem3`,
assets.tile`Gem4`,
assets.tile`Gem5`,
assets.tile`Gem6`,
]
```

```blocks
scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
// @highlight
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
```

## 📥 Eine Funktion zum Füllen leerer Kacheln erstellen

Lass uns eine Funktion bauen, die alle leeren Felder auf dem Spielfeld mit zufälligen Symbolen füllt! 🌈➡️⬜

---

- :function: Klicke im Bereich **Fortgeschritten** des Werkzeugkastens auf ``||functions:Funktionen||`` und dann auf die Schaltfläche **Erstelle eine Funktion...**

- :mouse pointer: Nenne die Funktion **_fillEmptyTiles_** und klicke auf **Fertig**

Dadurch entsteht ein neuer Funktionsblock in deinem Arbeitsbereich.

```blocks
function fillEmptyTiles () {
	
}
```

## 🔄 Eine Schleife zum Finden leerer Kacheln hinzufügen

Jetzt fügen wir Code hinzu, der alle ⬜ leeren Felder auf dem Spielfeld findet.

---

- :loops: Ziehe aus ``||loops:Schleifen||`` den Block ``||loops:für Element value von list||`` in die Funktion ``||functions(noclick):fillEmptyTiles||``

- :mouse pointer: Klicke auf das Dropdown-Menü ``||variables(noclick):value||`` und wähle **Variable umbenennen...** 

- :mouse pointer: Gib **_emptyTile_** als Variablennamen ein und klicke dann auf OK

- :tree: Ziehe aus der Werkzeugkasten-Kategorie ``||scene:Szene||`` einen ``||scene:Array aller [tile] Standorte||``-Block und lege ihn anstelle der Variable ``||variables(noclick):list||`` in den ``||loops(noclick):für Element||``-Block

~hint Was macht das? 💡

---

Diese Schleife findet jede leere (transparente) Kachelposition auf dem Spielfeld. Danach füllen wir jede davon mit einem Edelstein!

hint~

```blocks
function fillEmptyTiles () {
    // @highlight
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
    }
}
```

## Leere Kacheln mit zufälligen Symbolen füllen

Innerhalb der Schleife setzen wir an jede leere Stelle einen 🎲 zufälligen Edelstein aus unserem symbols-Array.

---

- :tree: Ziehe aus der Kategorie ``||scene:Szene||`` einen ``||scene:setzte [erhalte zufälligen Wert] auf emptyTile||``-Block in die ``||loops(noclick):für Element||``-Schleife

```blockconfig.local
let symbols: Image[] = []
tiles.setTileAt(emptyTile, symbols._pickRandom())
```

```blocks
let symbols: Image[] = []
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        // @highlight
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
```

## Die Füll-Funktion aufrufen

Jetzt 📢 rufen wir unsere Funktion auf, damit das Spielfeld beim Spielstart gefüllt wird!

---

- :function: Ziehe aus der Werkzeugkasten-Kategorie ``||functions:Funktionen||`` einen ``||functions:Aufruf fillEmptyTiles||``-Block ans Ende des ``||loops(noclick):beim Start||``-Blocks

```blocks
// @hide
function fillEmptyTiles () {}

scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
// @highlight
fillEmptyTiles()
```

## 📶 Punktzahl hinzufügen

Die Punktzahl startet bei 0. Für jede gefundene Reihe gibt es einen Punkt.

---

- :id card: Ziehe aus ``||info:Info||`` den ``||info:setze Punktzahl auf 0||``-Block ans Ende des ``||loops(noclick):beim Start||``-Containers.

```blocks
// @hide
function fillEmptyTiles () {}

scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
fillEmptyTiles()
// @highlight
info.setScore(0)
```

## Teste dein Spiel!

- :binoculars: Schau dir das Spielfenster an.

Du solltest Folgendes sehen:
- ✅ Ein Raster voller zufälliger, bunter Symbole
- ✅ Einen Cursor (schwarzer quadratischer Rahmen) in der Mitte
- ✅ Eine Punktzahl von 0 oben rechts

Wenn etwas nicht stimmt, geh zurück und überprüfe deinen Code!

Klicke auf **Fertig**, um mit den nächsten Tutorials weiterzumachen. Dort lernst du, wie du deinen Cursor über den Bildschirm 🕹️ bewegst und ↔️ Kacheln tauschst.

```blocks
scene.setBackgroundColor(13)
let cursor = sprites.create(img`
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
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
fillEmptyTiles()
info.setScore(0)
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
```

```blockconfig.global
scene.setBackgroundColor(13)
let cursor: Sprite = null
cursor.setPosition(80, 56)
function fillEmptyTiles () {}
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

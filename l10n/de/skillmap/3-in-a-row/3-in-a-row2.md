# Drei in einer Reihe – Teil 2

## 👀 Schau dir deinen Code an

- :computer: Im letzten Tutorial haben wir unser 𖣯 Spielfeld aufgebaut.

- :computer: In diesem Tutorial sorgen wir dafür, dass du den 🕹️ **Cursor bewegen** kannst, und erstellen eine Funktion, die nach passenden Kacheln 🔎 **sucht**.

Dein Code aus der letzten Aktivität ist schon im Arbeitsbereich.

Nimm dir einen Moment Zeit und schau dir an, was dieser Code macht, bevor du zum nächsten Schritt gehst.

Wenn dein Code nicht funktioniert, kannst du unten **Ersetze meinen Code** wählen, um einen Startcode zu verwenden.

## Den Cursor nach oben und unten bewegen

Jetzt, wo unser Spielfeld steht, lassen wir den rechteckigen Cursor mit dem Joystick oder den Pfeiltasten über den Bildschirm wandern!

Zuerst bewegen wir ihn nach oben und unten.

---

- :game: Ziehe aus der Werkzeugkasten-Kategorie ``||controller:Controller||`` die Blockgruppe ``||controller:wenn nach oben Knopf gedrückt||`` in einen freien Bereich des Arbeitsbereichs

💡 _Jede Kachel ist 16x16 Pixel groß, also bewegen wir uns jeweils um 16 Pixel. Nach ⬆️ OBEN bewegen heißt, vom **y**-Wert (der senkrechten Achse) etwas abzuziehen_

- :game: Ziehe aus ``||controller:Controller||`` eine weitere Blockgruppe ``||controller:wenn nach oben Knopf gedrückt||`` in den Arbeitsbereich. Vielleicht fällt dir auf, dass die Blöcke grau und deaktiviert werden. Das beheben wir gleich!

- :mouse pointer: Klicke im Block auf das Dropdown-Feld **nach oben** und ändere die Richtung in **nach unten**

- :mouse pointer: Ändere im Block ``||controller:wenn nach unten Knopf gedrückt||`` den **y**-Wert auf positiv **16**

```blocks
let cursor: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 16
})
```

```blockconfig.local
let cursor: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
```

## Den Cursor nach links und rechts bewegen

Als Nächstes bewegen wir den Cursor auf dem Spielfeld nach links und rechts.

---

- :game: Ziehe aus der Werkzeugkasten-Kategorie ``||controller:Controller||`` die Blockgruppe ``||controller:wenn links Knopf gedrückt||`` in einen freien Bereich des Arbeitsbereichs

- :game: Ziehe aus ``||controller:Controller||`` eine weitere Blockgruppe ``||controller:wenn links Knopf gedrückt||`` in den Arbeitsbereich

- :mouse pointer: Klicke in dieser zweiten Blockgruppe auf das Dropdown-Feld **links** und ändere die Richtung in **rechts**

💡 _Nach ↔️ rechts und links bewegen heißt, den **x**-Wert (die waagerechte Achse) zu ändern_

- :mouse pointer: Ändere im Block ``||controller:wenn rechts Knopf gedrückt||`` den x-Wert auf positiv **16**

~hint Verwirrt von x und y? 💡

---

- **x** ist die waagerechte Position (links/rechts)
  - Negativer (➖) Wert = nach links bewegen ⬅️
  - Positiver (➕) Wert = nach rechts bewegen ➡️
- **y** ist die senkrechte Position (oben/unten)
  - Negativer (➖) Wert = nach oben bewegen ⬆️
  - Positiver (➕) Wert = nach unten bewegen ⬇️

hint~

```blocks
let cursor: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 16
})
```

```blockconfig.local
let cursor: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -16
})
```

## 🧪 Teste die Cursor-Bewegung!

- :binoculars: Bewege deinen Cursor mit dem 🕹️ Joystick oder den Pfeiltasten über das Raster!

Der Cursor sollte von Kachel zu Kachel springen, immer genau ☐ ein Feld weit.

## 💞 Die Funktion zum Prüfen auf Reihen erstellen

Jetzt erstellen wir eine Funktion, die passende Kacheln 🔎 findet und 🚫 entfernt!

---

- :function: Öffne im Werkzeugkasten die Kategorie ``||functions:Funktionen||`` und klicke auf **Erstelle eine Funktion...**

- :mouse pointer: Nenne sie **_clearMatches_** und klicke auf **Fertig**

```blocks
function clearMatches () {
	
}
```

## Merken, ob Reihen gefunden wurden

Wir müssen wissen, ob Reihen entfernt wurden. Dafür verwenden wir eine boolesche Variable.

---

- :variables: Öffne die Kategorie ``||variables:Variablen||`` und klicke auf **Erstelle eine Variable...** 

- :mouse pointer: Gib **_cleared_** als Namen ein und klicke auf **Fertig**

- :variables: Ziehe aus dem Menü ``||variables(noclick):Variablen||`` einen ``||variables:setze cleared auf 0||``-Block in die Funktion ``||functions(noclick):clearMatches||``

- :random: Ziehe aus ``||logic:Logik||`` einen ``||logic:<falsch>||``-Block in den ``||variables(noclick):setze cleared||``-Block und ersetze damit die **0**

So wird ``||variables(noclick):cleared||`` zu Beginn jeder Prüfung auf **falsch** gesetzt.

~hint Was ist ein Boolean? 💡

---
Eine boolesche Variable enthält entweder den Wert ✅ **wahr** oder ❌ **falsch**. Damit kannst du gut steuern, was in einem Programm passiert.

hint~

```blocks
let cleared = false
function clearMatches () {
    // @highlight
    cleared = false
}
```

## 🔄 Jede Symbolart durchgehen

Wir müssen für jedes 🟩🟠🔷 Symbol einzeln nach Reihen suchen.

---

- :loops: Ziehe aus ``||loops:Schleifen||`` einen ``||loops:für Element value von list||``-Block in die Funktion ``||functions(noclick):clearMatches||`` hinter den ``||variables(noclick):setze cleared||``-Block.

- :mouse pointer: Klicke im ``||loops(noclick):für Element||``-Block auf das Dropdown-Menü ``||variables(noclick):value||`` und wähle **Variable umbenennen...** 

- :mouse pointer: Gib **_gem_** als Variablennamen ein und klicke dann auf OK

- :mouse pointer: Klicke jetzt auf das Dropdown-Menü ``||variables(noclick):list||`` und wähle das Array ``||variables(noclick):symbols||``.

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    // @highlight
    for (let gem of symbols) {
    }
}
```

## Mit dem Tile Scanner Reihen finden

Jetzt verwenden wir eine besondere Erweiterung namens 🔎 **Tile Scanner**, um Dreierreihen zu finden!

---

- :loops: Ziehe aus ``||loops:Schleifen||`` einen weiteren ``||loops:für Element value von list||``-Block und lege ihn in die vorhandene ``||loops(noclick):für Element||``-Schleife.

- :mouse pointer: Klicke in diesem ``||loops(noclick):für Element||``-Block auf das Dropdown-Menü ``||variables(noclick):gem||`` und wähle **Neue Variable...** 

- :mouse pointer: Gib **_location_** als Variablennamen ein und klicke dann auf OK

💡 _Schleifen in anderen Schleifen nennt man 🪺 „verschachtelte Schleifen“_

- :binoculars: Ziehe aus der Werkzeugkasten-Kategorie ``||tileScanner:Tile Scanner||`` den Block ``||tileScanner:scan for horizontal or vertical lines that match tile||`` und ersetze damit die Variable ``||variables(noclick):list||`` im ``||loops(noclick):für Element location||``-Block

~hint Was macht das? 💡

---

Dieser Block sucht nach ↔️ waagerechten oder ↕️ senkrechten Linien mit 🔷🔷🔷 3 gleichen Kacheln in einer Reihe und gibt die Ergebnisse als Array von Positionen zurück.

hint~

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        // @highlight
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
        }
    }
}
```

## Die gefundenen Kacheln entfernen

Wenn wir eine Reihe finden, entfernen wir diese Kacheln!

---

- :binoculars: Ziehe aus ``||tileScanner:Tile Scanner||`` einen ``||tileScanner:set tile at myLocations||``-Block heraus und lege ihn in die innere ``||loops(noclick):für Element||``-Schleife

- :mouse pointer: Ziehe die Variable ``||variables(noclick):location||`` aus dem ``||loops(noclick):für Element||``-Block heraus und lege sie in den ``||tileScanner(noclick):set tile||``-Block anstelle von ``||variables(noclick):myLocations||``

Damit werden die gefundenen Kacheln gelöscht! ⛔⛔⛔

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            // @highlight
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
        }
    }
}
```

## ♫ Musik und Effekte hinzufügen!

Lass uns die Reihe mit einem ♫ Sound und 🎉 Effekten feiern!

---

Füge in die innere ``||loops(noclick):für||``-Schleife folgende Blöcke ein:

- :paper plane: Ziehe aus ``||sprites:Sprites||`` einen ``||sprites:cursor beginne Konfetti Effekt||``-Block und lege ihn hinter den ``||tileScanner(noclick):set tile||``-Block

- :headphones: Ziehe aus ``||music:Musik||`` einen ``||music:play sound||``-Block heraus und lege ihn hinter den ``||sprites(noclick):beginne Effekt||``-Block

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            // @highlight
            cursor.startEffect(effects.confetti, 500)
            // @highlight
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        }
    }
}
```

```blockconfig.local
let cursor: Sprite = null
cursor.startEffect(effects.confetti, 500)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
```

## 🥇 cleared auf wahr setzen und einen Punkt vergeben

Da wir eine Reihe gefunden haben, setzen wir die boolesche Variable **cleared** auf ✅ wahr und geben einen Punkt zu unserer 📝 Punktzahl dazu.

---

- :variables: Ziehe aus der Werkzeugkasten-Kategorie ``||variables:Variablen||`` einen ``||variables:setze||``-Block heraus und lege ihn hinter den ``||music(noclick):play sound||``-Block

- :mouse pointer: Klicke im ``||variables(noclick):setze||``-Block auf das Dropdown-Menü mit dem Variablennamen und wähle die Variable ``||variables(noclick):cleared||``

- :random: Ziehe aus ``||logic:Logik||`` einen ``||logic:<wahr>||``-Block in den ``||variables(noclick):setze cleared||``-Block und ersetze damit die **0**

- :id card: Ziehe aus ``||info:Info||`` einen ``||info:ändere Punktzahl um 1||``-Block heraus und lege ihn hinter den ``||variables(noclick):setze cleared||``-Block

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            // @highlight
            cleared = true
            // @highlight
            info.changeScoreBy(1)
        }
    }
}
```

## Leere Kacheln nach dem Entfernen wieder auffüllen

Nach dem Entfernen der Reihen müssen wir die leeren Felder mit neuen 🟩🟠🔷 Symbolen füllen – zum Glück haben wir dafür schon eine Funktion!

---

- :function: Ziehe aus der Werkzeugkasten-Kategorie ``||functions:Funktionen||`` einen ``||functions:Aufruf fillEmptyTiles||``-Block hinter das Ende der beiden für-Schleifen (aber noch in die Funktion ``||functions(noclick):clearMatches||``)

```blocks
let cursor: Sprite = null
let symbols: Image[] = []
let cleared = false
// @hide
function fillEmptyTiles () {}
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    // @highlight
    fillEmptyTiles()
}
```

## ❌ Spielende, wenn keine Reihe entsteht

Wenn wir nach dem Durchlaufen der verschachtelten Schleife für jeden 🔷 Edelstein keine Kacheln entfernt haben, verlieren wir das Spiel. 😞

---

- :random: Ziehe aus ``||logic:Logik||`` einen ``||logic:wenn <wahr> dann||``-Block heraus und lege ihn hinter den Aufruf von ``||functions(noclick):fillEmptyTiles||``

- :random: Ziehe aus ``||logic:Logik||`` einen ``||logic:nicht < >||``-Block in den ``||logic(noclick):wenn <wahr> dann||``-Block und ersetze damit ``||logic(noclick):<wahr>||``

- :variables: Ziehe aus ``||variables:Variablen||`` eine ``||variables:cleared||``-Variable in den ``||logic(noclick):nicht||``-Block

- :circle: Ziehe aus dem Menü ``||game:Spiel||`` einen ``||game:Spielende||``-Block in den ``||logic(noclick):wenn <nicht cleared> dann||``-Block und stelle den Schalter auf **VERLIEREN**

~hint Was macht dieser Code? 💡

---

Wenn ``||variables(noclick):cleared||`` am Ende unserer Schleifen immer noch ❌ **falsch** ist (nichts entfernt), wurde keine Reihe gefunden. Das Spiel endet, weil der Tausch keine Reihe ergeben hat 🥺

hint~

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
// @hide
function fillEmptyTiles () {}
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    fillEmptyTiles()
    // @highlight
    if (!(cleared)) {
        // @highlight
        game.gameOver(false)
    }
}
```

## 🤩 Super gemacht!

👏 Dein Spiel macht schon große Fortschritte!

Klicke auf **Fertig**, um zum letzten Teil der Skillmap zu gelangen. Dort programmierst du, wie die Kacheln ↔️ getauscht werden.

```template
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
function fillEmptyTiles () {}
let gem: Image = null
tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)
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

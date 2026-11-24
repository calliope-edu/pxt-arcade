# 3 à la suite – Partie 3

## 👀 Relis ton code

- :computer: Dans le 1er tutoriel, nous avons préparé notre plateau de jeu sous forme de **plan des tuiles** et l'avons rempli de 💎 **symboles aléatoires**.

- :computer: Dans le 2e tutoriel, nous avons permis de 🕹️ **déplacer le curseur** sur l'écran et créé une fonction qui 🔎 **recherche et efface** les alignements de 3 cases identiques.

- :computer: Dans ce dernier tutoriel, nous allons programmer l'↔️ **échange des cases** sous le curseur.

Ton code des activités précédentes est déjà dans l'espace de travail.

Prends un moment pour regarder ce que fait ce code avant de passer à l'étape suivante.

Si ton code ne fonctionne pas, tu peux cliquer sur **Remplacer mon code** ci-dessous pour utiliser un code de départ.

## Échanger avec le bouton A

Pour la dernière partie de notre jeu, faisons en sorte que le bouton A échange les cases !

---

- :game: Depuis ``||controller:Contrôleur||``, fais glisser un bloc ``||controller:quand bouton A est appuyé||`` dans une zone vide de l'espace de travail.

```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Créer les variables pour l'échange

Nous devons créer quelques 🔤 variables pour garder la trace des cases que nous échangeons.

---

- :variables: Dans la catégorie ``||variables:Variables||`` de la boîte à outils, utilise le bouton **Créer une variable...** pour créer 3 variables nommées : **locationRight**, **locationLeft** et **swapImage**.

``||variables(noclick):locationRight||`` - contiendra la case de droite sous le curseur<br/>
``||variables(noclick):locationLeft||`` - contiendra la case de gauche sous le curseur<br/>
``||variables(noclick):swapImage||`` - sert de stockage temporaire pour échanger les images des cases

- :variables: Maintenant, depuis la catégorie ``||variables:Variables||``, fais glisser trois blocs ``||variables:définir||`` dans le bloc ``||controller(noclick):quand bouton A est appuyé||`` et choisis comme noms de variables **locationRight**, **locationLeft** et **swapImage**

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

## Trouver l'emplacement de la case 👉 de droite du curseur

La case qui se trouve sous le centre d'un sprite est considérée comme son 📍 emplacement dans le plan des tuiles. À cause de la position du curseur, cet emplacement correspond en fait à la case de droite.

---

- :tree: Depuis ``||scene:Scène||``, fais glisser le bloc ``||scene:emplacement de cursor dans le plan des tuiles||`` dans le bloc ``||variables(noclick):définir locationRight||`` à la place du **0**

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

## Trouver l'emplacement de la case 👈 de gauche du curseur

Trouvons maintenant la case qui se trouve à gauche dans le curseur.

---

- :tree: Depuis ``||scene:Scène||``, fais glisser le bloc ``||scene:emplacement à gauche de locationRight||`` dans le bloc ``||variables(noclick):définir locationLeft||`` à la place du **0**

On obtient ainsi l'emplacement situé une case plus à gauche !

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

## Sauvegarder l'image de la case de droite

Maintenant que nous avons les emplacements des cases de droite et de gauche, nous devons, avant de les échanger, sauvegarder temporairement l'une des 🖼️ images.

---

- :tree: Depuis la catégorie ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:image de la tuile à locationRight||`` et dépose-le dans le bloc ``||variables(noclick):swapImage||`` à la place du **0**

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

## Faire l'échange !

Maintenant, ↔️ échangeons vraiment les deux cases !

---

- :tree: Depuis ``||scene:Scène||``, fais glisser le bloc ``||scene:définir image de la tuile à locationLeft à locationRight||`` et dépose-le à la fin du bloc ``||controller(noclick):quand bouton A est appuyé||``

Cela place l'image de la case de gauche à l'emplacement de la case de droite !

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

## Terminer l'échange

Nous devons maintenant placer l'🖼️ image de la case de droite, sauvegardée temporairement, à la position de 👈 gauche !

---

- :tree: Depuis ``||scene:Scène||``, fais glisser le bloc ``||scene:définir swapImage à locationLeft||`` et dépose-le à la fin du bloc ``||controller(noclick):quand bouton A est appuyé||``

Les deux cases ont maintenant échangé leurs places !

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

## ✅ Chercher des alignements après l'échange

Après chaque échange, c'est ici que nous appelons notre fonction **clearMatches** pour vérifier si un alignement s'est formé sur le plateau.

---

- :function: Depuis ``||functions:Fonctions||``, fais glisser un bloc ``||functions:appel clearMatches||`` à la fin de l'événement ``||controller(noclick):quand bouton A est appuyé||``

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

## 🎉 Félicitations !

Tu as créé un jeu de réflexion « 3 à la suite » ! 🟡🟢🟣  
Prends un moment pour jouer à ton jeu. Quel est le meilleur score que tu peux atteindre ?

---

**Rappel des règles :**
- ➡️ Utilise les **touches fléchées** ou le **joystick** pour déplacer ton curseur sur la grille
- 🟢 Appuie sur **A** pour échanger les cases sous le curseur
- 3️⃣ Aligne 3 symboles identiques ou plus (horizontalement ou verticalement)
- ❌ Si ton échange ne forme aucun alignement, la partie est terminée

## Pour aller plus loin

Réfléchis à des moyens de faire passer ton jeu au niveau supérieur.

---

**Idées de défis :**
- ⏱️ Ajoute un minuteur pour plus de pression
- 🔊 Ajoute une musique de fond au jeu
- 💎 Ajoute des gemmes bonus spéciales qui rapportent plus de points
- 💥 Ajoute une réaction en chaîne quand les nouvelles cases forment des alignements
- 🔄 Permets de faire pivoter le curseur pour faire des échanges verticaux
- 🎞️ Ajoute des animations
- ❤️ Autorise un certain nombre d'échanges sans alignement

Clique sur **Terminé** pour revenir au parcours. Récupère ton badge et partage ton jeu avec les autres !

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

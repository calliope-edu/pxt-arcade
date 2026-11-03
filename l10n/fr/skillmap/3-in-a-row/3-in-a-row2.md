# 3 à la suite – Partie 2

## 👀 Relis ton code

- :computer: Dans le tutoriel précédent, nous avons préparé notre 𖣯 plateau de jeu.

- :computer: Dans ce tutoriel, nous allons permettre de 🕹️ **déplacer le curseur** sur l'écran et créer une fonction qui 🔎 **recherche** les cases identiques alignées.

Ton code de l'activité précédente est déjà dans l'espace de travail.

Prends un moment pour regarder ce que fait ce code avant de passer à l'étape suivante.

Si ton code ne fonctionne pas, tu peux cliquer sur **Remplacer mon code** ci-dessous pour utiliser un code de départ.

## Déplacer le curseur vers le haut et vers le bas

Maintenant que notre plateau est prêt, faisons bouger le curseur rectangulaire sur l'écran avec le joystick ou les touches fléchées !

D'abord, faisons-le bouger vers le haut et vers le bas.

---

- :game: Depuis la catégorie ``||controller:Contrôleur||`` de la boîte à outils, fais glisser le groupe de blocs ``||controller:quand bouton haut est appuyé||`` dans une zone vide de l'espace de travail

💡 _Chaque case mesure 16x16 pixels, donc on se déplace de 16 pixels à la fois. Aller vers le ⬆️ HAUT signifie soustraire de l'axe **y** (vertical)_

- :game: Depuis ``||controller:Contrôleur||``, fais glisser un autre groupe de blocs ``||controller:quand bouton haut est appuyé||`` dans l'espace de travail. Tu remarqueras peut-être qu'ils deviennent gris et désactivés. On va corriger ça tout de suite !

- :mouse pointer: Clique sur le menu déroulant **haut** du bloc et change la direction en **bas**

- :mouse pointer: Dans le bloc ``||controller:quand bouton bas est appuyé||``, change la valeur de **y** en **16** positif

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

## Déplacer le curseur vers la gauche et vers la droite

Ensuite, faisons bouger le curseur vers la gauche et vers la droite sur le plateau.

---

- :game: Depuis la catégorie ``||controller:Contrôleur||`` de la boîte à outils, fais glisser le groupe de blocs ``||controller:quand bouton gauche est appuyé||`` dans une zone vide de l'espace de travail

- :game: Depuis ``||controller:Contrôleur||``, fais glisser un autre groupe de blocs ``||controller:quand bouton gauche est appuyé||`` dans l'espace de travail

- :mouse pointer: Dans ce deuxième groupe de blocs, clique sur le menu déroulant **gauche** du bloc et change la direction en **droite**

💡 _Aller à ↔️ droite et à gauche signifie changer la valeur de l'axe **x** (horizontal)_

- :mouse pointer: Dans le bloc ``||controller:quand bouton droite est appuyé||``, change la valeur de x en **16** positif

~hint Tu confonds x et y ? 💡

---

- **x** est la position horizontale (gauche/droite)
  - Valeur négative (➖) = déplacement vers la gauche ⬅️
  - Valeur positive (➕) = déplacement vers la droite ➡️
- **y** est la position verticale (haut/bas)
  - Valeur négative (➖) = déplacement vers le haut ⬆️
  - Valeur positive (➕) = déplacement vers le bas ⬇️

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

## 🧪 Teste le déplacement du curseur !

- :binoculars: Essaie de déplacer ton curseur sur la grille avec le 🕹️ joystick ou les touches fléchées !

Le curseur doit sauter de case en case, en avançant exactement d'☐ une case à la fois.

## 💞 Créer la fonction qui vérifie les alignements

Créons maintenant une fonction qui 🔎 trouve et 🚫 efface les cases identiques alignées !

---

- :function: Ouvre la catégorie ``||functions:Fonctions||`` de la boîte à outils et clique sur **Créer une fonction...**

- :mouse pointer: Nomme-la **_clearMatches_** et clique sur **Terminé**

```blocks
function clearMatches () {
	
}
```

## Savoir si des alignements ont été trouvés

Nous devons savoir si des alignements ont été effacés. Pour cela, nous allons utiliser une variable booléenne.

---

- :variables: Ouvre la catégorie ``||variables:Variables||`` et clique sur **Créer une variable...**

- :mouse pointer: Tape **_cleared_** comme nom et clique sur **Terminé**

- :variables: Depuis le menu ``||variables(noclick):Variables||``, fais glisser un bloc ``||variables:définir cleared à 0||`` dans la fonction ``||functions(noclick):clearMatches||``

- :random: Depuis ``||logic:Logique||``, fais glisser un bloc ``||logic:<faux>||`` dans le bloc ``||variables(noclick):définir cleared||`` à la place du **0**

Ainsi, ``||variables(noclick):cleared||`` vaut **faux** au début de chaque vérification.

~hint C'est quoi, un booléen ? 💡

---
Une variable booléenne contient soit la valeur ✅ **vrai**, soit ❌ **faux**. Elle est pratique pour contrôler différentes actions dans un programme.

hint~

```blocks
let cleared = false
function clearMatches () {
    // @highlight
    cleared = false
}
```

## 🔄 Parcourir chaque type de symbole

Nous devons chercher les alignements pour chaque symbole 🟩🟠🔷 séparément.

---

- :loops: Depuis ``||loops:Boucles||``, fais glisser un bloc ``||loops:pour l’élément value de list||`` dans la fonction ``||functions(noclick):clearMatches||``, après le bloc ``||variables(noclick):définir cleared||``.

- :mouse pointer: Dans le bloc ``||loops(noclick):pour l’élément||``, clique sur le menu déroulant ``||variables(noclick):value||`` et choisis **Renommer la variable...**

- :mouse pointer: Tape **_gem_** comme nom de variable, puis clique sur OK

- :mouse pointer: Clique maintenant sur le menu déroulant ``||variables(noclick):list||`` et choisis le tableau ``||variables(noclick):symbols||``.

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

## Utiliser le Tile Scanner pour trouver les alignements

Nous allons maintenant utiliser une extension spéciale appelée 🔎 **Tile Scanner** pour trouver les alignements de 3 !

---

- :loops: Depuis ``||loops:Boucles||``, fais glisser un autre bloc ``||loops:pour l’élément value de list||`` et place-le dans la boucle ``||loops(noclick):pour l’élément||`` existante.

- :mouse pointer: Dans ce bloc ``||loops(noclick):pour l’élément||``, clique sur le menu déroulant ``||variables(noclick):gem||`` et choisis **Nouvelle variable...**

- :mouse pointer: Tape **_location_** comme nom de variable, puis clique sur OK

💡 _Des boucles placées dans d'autres boucles s'appellent des 🪺 « boucles imbriquées »_

- :binoculars: Depuis la catégorie ``||tileScanner:Tile Scanner||`` de la boîte à outils, fais glisser le bloc ``||tileScanner:scan for horizontal or vertical lines that match tile||`` à la place de la variable ``||variables(noclick):list||`` dans le bloc ``||loops(noclick):pour l’élément location||``

~hint À quoi ça sert ? 💡

---

Ce bloc cherche toutes les lignes ↔️ horizontales ou ↕️ verticales où se trouvent 🔷🔷🔷 3 cases identiques à la suite, et renvoie le résultat sous forme de tableau d'emplacements.

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

## Effacer les cases alignées

Quand nous trouvons un alignement, effaçons ces cases !

---

- :binoculars: Depuis ``||tileScanner:Tile Scanner||``, fais glisser un bloc ``||tileScanner:set tile at myLocations||`` et dépose-le dans la boucle intérieure ``||loops(noclick):pour l’élément||``

- :mouse pointer: Fais glisser la variable ``||variables(noclick):location||`` hors du bloc ``||loops(noclick):pour l’élément||`` et dépose-la dans le bloc ``||tileScanner(noclick):set tile||`` à la place de ``||variables(noclick):myLocations||``

Cela efface les cases alignées ! ⛔⛔⛔

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

## ♫ Ajouter de la musique et des effets !

Fêtons l'alignement avec un ♫ son et des 🎉 effets !

---

Dans la boucle intérieure ``||loops(noclick):pour||``, ajoute les blocs suivants :

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser un bloc ``||sprites:cursor commencer effet confetti||`` et dépose-le après le bloc ``||tileScanner(noclick):set tile||``

- :headphones: Depuis ``||music:Musique||``, fais glisser un bloc ``||music:jouer son||`` et dépose-le après le bloc ``||sprites(noclick):commencer effet||``

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

## 🥇 Mettre cleared à vrai et ajouter un point

Maintenant que nous avons trouvé un alignement, nous devons mettre la variable booléenne **cleared** à ✅ vrai et ajouter un point à notre 📝 score.

---

- :variables: Depuis la catégorie ``||variables:Variables||`` de la boîte à outils, fais glisser un bloc ``||variables:définir||`` et dépose-le après le bloc ``||music(noclick):jouer son||``

- :mouse pointer: Dans le bloc ``||variables(noclick):définir||``, clique sur le menu déroulant du nom de variable et choisis la variable ``||variables(noclick):cleared||``

- :random: Depuis ``||logic:Logique||``, fais glisser un bloc ``||logic:<vrai>||`` dans le bloc ``||variables(noclick):définir cleared||`` à la place du **0**

- :id card: Depuis ``||info:Info||``, fais glisser un bloc ``||info:modifier le score de 1||`` et dépose-le après le bloc ``||variables(noclick):définir cleared||``

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

## Remplir les cases vides après l'effacement

Après avoir effacé les alignements, nous devons remplir les espaces vides avec de nouveaux symboles 🟩🟠🔷. Heureusement, nous avons déjà une fonction pour ça !

---

- :function: Depuis la catégorie ``||functions:Fonctions||`` de la boîte à outils, fais glisser un bloc ``||functions:appel fillEmptyTiles||`` après la fin des deux boucles (mais toujours dans la fonction ``||functions(noclick):clearMatches||``)

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

## ❌ Fin de partie s'il n'y a pas d'alignement

Après avoir parcouru les boucles imbriquées pour chercher des alignements de chaque 🔷 gemme, si aucune case n'a été effacée, alors on perd la partie. 😞

---

- :random: Depuis ``||logic:Logique||``, fais glisser un bloc ``||logic:si <vrai> alors||`` et dépose-le après l'appel ``||functions(noclick):fillEmptyTiles||``

- :random: Depuis ``||logic:Logique||``, fais glisser un bloc ``||logic:non < >||`` et dépose-le dans le bloc ``||logic(noclick):si <vrai> alors||`` à la place de ``||logic(noclick):<vrai>||``

- :variables: Depuis ``||variables:Variables||``, fais glisser une variable ``||variables:cleared||`` dans le bloc ``||logic(noclick):non||``

- :circle: Depuis le menu ``||game:Jeu||``, fais glisser un bloc ``||game:jeu terminé||`` dans le bloc ``||logic(noclick):si <non cleared> alors||`` et mets l'interrupteur sur **PERDU**

~hint Que fait ce code ? 💡

---

Si ``||variables(noclick):cleared||`` vaut toujours ❌ **faux** à la fin de nos boucles, cela signifie qu'aucun alignement n'a été trouvé. La partie se termine, car le joueur a fait un échange qui n'a formé aucun alignement 🥺

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

## 🤩 Bravo !

👏 Ton jeu avance bien !

Clique sur **Terminé** pour passer à la dernière partie du parcours, où tu vas programmer l'↔️ échange des cases.

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

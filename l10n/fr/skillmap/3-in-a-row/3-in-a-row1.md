# 3 à la suite – Partie 1

## Introduction @showdialog

Bienvenue dans **3 à la suite** ! 🟡🟢🟣

Dans ce parcours, tu vas créer un super 🧩 jeu de réflexion où tu échanges des cases pour aligner 3 symboles identiques ou plus ! 🩵🩵🩵

![Principe du jeu « 3 à la suite »](/static/skillmap/3-in-a-row/match3.gif)

Déplace un ☐ curseur sur le plateau, ↔️ échange des cases et forme des alignements pour marquer des points. ⚠️ Mais attention : si ton échange ne forme aucun alignement, la partie est terminée !

## 🎨 Choisir la couleur d'arrière-plan

Choisissons une couleur d'arrière-plan ⬜ claire pour notre jeu.

---

- :tree: Depuis la catégorie ``||scene:Scène||`` de la **boîte à outils**, fais glisser un bloc ``||scene:définir couleur d'arrière-plan à||`` dans le conteneur ``||loops(noclick):au démarrage||`` de l'espace de travail

💡 _Sur un fond clair, les cases 🌈 colorées se voient mieux !_

```blocks
// @highlight
scene.setBackgroundColor(13)
```

## Créer un sprite de sélection

Il nous faut maintenant un 👾 sprite qui sert de curseur pour montrer quelles cases sont sélectionnées sur la grille.

---

- :paper plane: Depuis la catégorie ``||sprites:Sprites||``, fais glisser un bloc ``||variables(sprites):définir cursor à sprite de type Player||`` à la fin du conteneur ``||loops(noclick):au démarrage||``

~hint C'est quoi, un sprite ? 💡

---

Dans un jeu, un **sprite** est un objet qui a des propriétés et des comportements. Ça peut être un joueur 😊, un ennemi 👿 ou n'importe quoi ⭐ qui peut bouger ou faire quelque chose.

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

## 📌 Placer le curseur

Au départ, plaçons le curseur au milieu de l'💻 écran.

---

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser le bloc ``||sprites:définir la position de cursor||`` à la fin du conteneur ``||loops(noclick):au démarrage||``

💡 _L'écran fait 160 pixels de large et 120 pixels de haut. À **(80, 56)**, le curseur est presque au centre !_

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

## 📱 Préparer le plan des tuiles

Créons maintenant le 𖣯 plateau de jeu avec un plan des tuiles !

---

- :tree: Depuis la catégorie ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:définir plan des tuiles à||`` à la fin du conteneur ``||loops(noclick):au démarrage||``

- :mouse pointer: Clique sur la case grise pour ouvrir l'**éditeur de plan des tuiles**

- :mouse pointer: En bas à gauche, règle la taille du plan sur **10 colonnes** de large et **7 lignes** de haut, puis clique sur **Terminé**

![taille du plan](/static/skillmap/3-in-a-row/canvasSize.png "taille du plan")

- :lightbulb: **Ne dessine encore rien** sur le plan : on va le remplir avec du code !

~hint C'est quoi, un plan des tuiles ? 💡

---

Un 📱 plan des tuiles est une grille où chaque case peut contenir une image de tuile de 16x16 pixels. Parfait pour des jeux de réflexion comme celui-ci !

Notre plateau fera 10 tuiles de large × 7 tuiles de haut.

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

## 💎 Créer un tableau de pierres précieuses

Ajoutons un tableau de 🟩🟠🔷 symboles – des pierres précieuses brillantes – pour remplir notre plateau.

- :arrays: Dans la section **Avancé** de la boîte à outils, ouvre la catégorie ``||arrays:Tableaux||``, fais glisser un bloc ``||variables:définir symbols à tableau de||`` et dépose-le à la fin du bloc ``||loops(noclick):au démarrage||``

- :mouse pointer: Clique sur les cases grises vides du bloc ``||arrays(noclick):tableau||`` et choisis une pierre différente pour chacune

~hint C'est quoi, un tableau ? 💡

---

Un tableau est une collection de valeurs du même type. Imagine un tableau comme une rangée de boîtes aux lettres 📫📫📫 qui contiennent chacune une ✉️ lettre différente.

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

## 📥 Créer une fonction pour remplir les cases vides

Créons une fonction qui remplit toutes les cases vides du plateau avec des symboles aléatoires ! 🌈➡️⬜

---

- :function: Clique sur ``||functions:Fonctions||`` dans la section **Avancé** de la boîte à outils, puis sur le bouton **Créer une fonction...**

- :mouse pointer: Nomme la fonction **_fillEmptyTiles_** et clique sur **Terminé**

Un nouveau bloc de fonction apparaît dans ton espace de travail.

```blocks
function fillEmptyTiles () {
	
}
```

## 🔄 Ajouter une boucle pour trouver les cases vides

Ajoutons maintenant du code qui trouve toutes les cases ⬜ vides du plateau.

---

- :loops: Depuis ``||loops:Boucles||``, fais glisser ``||loops:pour l’élément value de list||`` dans la fonction ``||functions(noclick):fillEmptyTiles||``

- :mouse pointer: Clique sur le menu déroulant ``||variables(noclick):value||`` et choisis **Renommer la variable...** 

- :mouse pointer: Tape **_emptyTile_** comme nom de variable, puis clique sur Ok

- :tree: Depuis la catégorie ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:tableau des emplacements de [tile]||`` et dépose-le à la place de la variable ``||variables(noclick):list||`` dans le bloc ``||loops(noclick):pour l’élément||``

~hint À quoi ça sert ? 💡

---

Cette boucle trouve chaque emplacement de tuile vide (transparent) sur le plateau. Ensuite, on remplira chacun avec une pierre précieuse !

hint~

```blocks
function fillEmptyTiles () {
    // @highlight
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
    }
}
```

## Remplir les cases vides avec des symboles aléatoires

Dans la boucle, plaçons à chaque emplacement vide une pierre 🎲 aléatoire tirée de notre tableau symbols.

---

- :tree: Depuis la catégorie ``||scene:Scène||``, fais glisser un bloc ``||scene:définir [obtenir une valeur aléatoire] à emptyTile||`` dans la boucle ``||loops(noclick):pour l’élément||``

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

## Appeler la fonction de remplissage

Maintenant, 📢 appelons notre fonction pour remplir le plateau au début de la partie !

---

- :function: Depuis la catégorie ``||functions:Fonctions||`` de la boîte à outils, fais glisser un bloc ``||functions:appel fillEmptyTiles||`` à la fin du bloc ``||loops(noclick):au démarrage||``

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

## 📶 Ajouter le score

Le score commence à 0. On gagnera un point pour chaque alignement trouvé.

---

- :id card: Depuis ``||info:Info||``, fais glisser le bloc ``||info:définir score à 0||`` à la fin du conteneur ``||loops(noclick):au démarrage||``.

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

## Teste ton jeu !

- :binoculars: Regarde la fenêtre du jeu.

Tu devrais voir :
- ✅ Une grille remplie de symboles colorés aléatoires
- ✅ Un curseur (contour carré noir) au milieu
- ✅ Un score de 0 en haut à droite

Si quelque chose ne va pas, reviens en arrière et vérifie ton code !

Clique sur **Terminé** pour passer aux tutoriels suivants, où tu apprendras à 🕹️ déplacer ton curseur sur l'écran et à ↔️ échanger des cases.

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

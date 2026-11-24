# Nourris le panda

## 1. Nourris le panda

**🎋 C'est l'heure du repas ! 🎋**

Le panda préféré de tous a faim, alors
écrivons du code pour lui donner de délicieux bambous.

---

- :binoculars:  Regarde le code dans ton espace de travail.
Il devrait te sembler familier. 

Te souviens-tu de ce que fait chaque bloc ?


## 2. Va chercher du bambou

**D'abord, il te faut du bambou.**

---

- :game:  Dans ``||controller:Contrôleur||``, fais glisser un conteneur  
``||controller:quand bouton [A] est appuyé ||``  
dans l'espace de travail.

- :paper plane:  Accroche un nouveau bloc  
``||variables(sprites):définir [monSprite] à sprite [ ] de type [Player]||``  
à l'intérieur.

- :mouse pointer:  N'oublie pas de changer le type en ``||sprites:Food||``, puis clique sur
la case grise et dessine un délicieux morceau de bambou dans l'**éditeur d'images**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let monSprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . .
        . . 7 . . . . . . 6 7 . . . . .
        . . 7 7 . . . . . 6 6 . . . . .
        . . 7 7 . . 6 . . 8 8 . . . . .
        . . 7 7 . . 6 . . 6 7 7 . . . .
        . . 6 7 6 . 6 . . 6 7 7 . . . .
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 .
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . .
        . . 7 7 7 6 . 6 . 6 6 7 6 . . .
        . . . 8 6 6 . 6 . 8 7 8 8 . . .
        . . . 6 6 6 . 6 . 6 7 7 6 . . .
        . . . 6 6 7 . . 6 . 7 7 . 7 . .
        . . . 6 6 6 6 6 6 . 7 6 7 . . .
        . . . . 8 8 8 . . . 6 6 . . . .
        . . . . 6 7 6 . 7 7 6 6 . . . .
        . . . . 6 6 6 . . 7 6 . . . . .
        `, SpriteKind.Food)
})
```


## 3. Essaie !  @showdialog

**Appuie sur le bouton Ⓐ**

---

Regarde ton écran de jeu pour voir ce qui se passe.


## 4. Bambou au hasard

**C'est le moment d'éparpiller le bambou dans l'enclos du panda !**

---

- :paper plane:  Dans ``||sprites:Sprites||``, prends un bloc  
``||sprites:définir la position de [monSprite] à x [0] y [0]||``  
et place-le à la **fin** du conteneur  
``||controller:quand bouton [A] est appuyé ||``.   


- :calculator:  Dans ``||math:Maths||``, prends deux blocs de valeur  
``||math:choisir aléatoirement entre [0] et [10]||``  
et utilise-les pour remplacer les valeurs **x** et **y** du nouveau bloc **définir la position**.

- :mouse pointer:  Essaie différents nombres pour voir comment ils changent la façon dont le bambou est placé **au hasard** sur l'écran.


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let monSprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . .
        . . 7 . . . . . . 6 7 . . . . .
        . . 7 7 . . . . . 6 6 . . . . .
        . . 7 7 . . 6 . . 8 8 . . . . .
        . . 7 7 . . 6 . . 6 7 7 . . . .
        . . 6 7 6 . 6 . . 6 7 7 . . . .
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 .
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . .
        . . 7 7 7 6 . 6 . 6 6 7 6 . . .
        . . . 8 6 6 . 6 . 8 7 8 8 . . .
        . . . 6 6 6 . 6 . 6 7 7 6 . . .
        . . . 6 6 7 . . 6 . 7 7 . 7 . .
        . . . 6 6 6 6 6 6 . 7 6 7 . . .
        . . . . 8 8 8 . . . 6 6 . . . .
        . . . . 6 7 6 . 7 7 6 6 . . . .
        . . . . 6 6 6 . . 7 6 . . . . .
        `, SpriteKind.Food)
        //@highlight
    monSprite.setPosition(randint(10, 150), randint(10, 110))
})
```


## 5. Repas du panda

**Appuie sur le bouton Ⓐ (ou sur la barre d'espace)** pour déposer de la nourriture pour le panda.


## 6. Aide le panda

**Oh, le panda n'est pas très doué pour trouver sa nourriture... aidons-le !**

---

- :paper plane:  Ouvre ``||sprites:Sprites||`` et fais glisser un bloc  
``||sprites:définir que [monEnnemi] suive [monSprite]||``   
à la **fin**
du conteneur ``||controller:quand bouton A est appuyé||``.

- :mouse pointer:  Change la première variable en ``||variables(noclick):panda||``, puis teste ton code sur l'écran de jeu.

```blocks
let panda:Sprite = null;
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let monSprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . .
        . . 7 . . . . . . 6 7 . . . . .
        . . 7 7 . . . . . 6 6 . . . . .
        . . 7 7 . . 6 . . 8 8 . . . . .
        . . 7 7 . . 6 . . 6 7 7 . . . .
        . . 6 7 6 . 6 . . 6 7 7 . . . .
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 .
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . .
        . . 7 7 7 6 . 6 . 6 6 7 6 . . .
        . . . 8 6 6 . 6 . 8 7 8 8 . . .
        . . . 6 6 6 . 6 . 6 7 7 6 . . .
        . . . 6 6 7 . . 6 . 7 7 . 7 . .
        . . . 6 6 6 6 6 6 . 7 6 7 . . .
        . . . . 8 8 8 . . . 6 6 . . . .
        . . . . 6 7 6 . 7 7 6 6 . . . .
        . . . . 6 6 6 . . 7 6 . . . . .
        `, SpriteKind.Food)
    monSprite.setPosition(randint(10, 150), randint(10, 110))
    //@highlight
    panda.follow(monSprite)
})
```

## 7. Bon appétit

**😋 L'heure de croquer 😋**

On peut aider le panda à trouver ses en-cas en exécutant du code quand le
panda **chevauche** le bambou.

---

- :paper plane:  Dans ``||sprites:Sprites||``, sors un conteneur  
``||sprites:quand [sprite] de type [Player] chevauche [othersprite] de type [Player]||``  
et dépose-le dans l'espace de travail.

- :mouse pointer:  Clique sur le deuxième menu déroulant ``||sprites:Player||``
et choisis **Food**.

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
})
```

## 8. Détruis le sprite

- :paper plane:  Ensuite, prends un bloc  
``||sprites:détruire [monSprite] ⊕||``  
dans ``||sprites:Sprites||``
et mets-le dans le conteneur **chevauche**.

- :mouse pointer:  Attrape ``||variables(noclick):autreSprite||`` dans le titre du conteneur **chevauche** et fais-le glisser vers le bas pour remplacer ``||variables(noclick):monSprite||`` dans le bloc **détruire**.

![Exemple : quelqu'un fait glisser la variable autreSprite hors du conteneur vers l'autre bloc](static/skillmap/zoo/overlaps-food-sprite.gif "Voilà comment on fait !")

```blocks

}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
    //@highlight
    autreSprite.destroy()
})
```


## 9. Effets spéciaux

- :mouse pointer:  Clique sur l'icône plus du bloc  
``||sprites:détruire [autreSprite] ⊕||``   
pour ajouter un effet qui se joue quand le panda commence à croquer. 

_💡 **spray** et **disintegrate** marchent bien tous les deux ici !_



```blocks

}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
    //@highlight
    autreSprite.destroy(effects.spray, 500)
})
```


## 10. Panda rassasié

**Bravo !**

Ce panda a droit à un vrai festin !

Essaie ton jeu sur l'écran de jeu et, quand tu as fini,
clique sur **Terminé** pour continuer ton aventure au zoo.




```customts
tiles.setTilemap(tilemap`level1`)
```

```template
let panda = sprites.create(img`
    . f f f . . . . f f f . . . . .
    f c c c f f f f c c c f . . . .
    f c a d 1 1 1 1 d a c f . . . .
    f a d 1 1 1 1 1 1 d f . . . . .
    . f c c c 1 1 c c c d f . . . .
    . f c f c 1 1 c f c d f f f . .
    . f c c 1 c c 1 c c f d c c f .
    . f d 1 1 f f 1 1 d f 1 1 c c f
    . . f d d d d d d a c 1 1 1 c f
    . . f c 1 1 1 1 1 c c 1 1 1 c f
    . . f c 1 1 1 1 1 c c 1 1 1 c f
    . . f c f f f f f c c 1 1 c c f
    . . f c f . . . f c f f f f c f
    . . f f . . . . f f . . . . f f
    `, SpriteKind.Player)
panda.setVelocity(randint(20, 50), randint(40, 60))
panda.setBounceOnWall(true)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"*(U`8Cz%UdX%QVrRLAj]\">Player</variable><variable type=\"KIND_SpriteKind\" id=\",p#pZ[t5Tx3AJuLMboP?\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"YMZp[xD?jgxk5yDV=q;C\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"M;=(qFqSV|s///LTH|kZ\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"s%O)x$i~/?,4ZPs%k;E5\">Animal</variable><variable id=\"|2r#YO`9Pls^yzC3lc4/\">panda</variable><variable id=\"A)F#HAC#}PGF8r].R!k@\">bamboo</variable><variable id=\"sd/oyN~_[Y/M*O1?~z[U\">monSprite</variable><variable id=\"lvyeJH`H_zT4C_`*RWL`\">monEnnemi</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Animal = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level1`)\n",
  "pxt.json": "{\n    \"name\": \"Feed the Panda\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.49\",\n        \"tag\": \"v1.3.49\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/cc243b20c0547dd26f27296be900f62d5c04211b\",\n        \"target\": \"1.3.49\",\n        \"pxt\": \"6.8.37\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tileGrass1\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

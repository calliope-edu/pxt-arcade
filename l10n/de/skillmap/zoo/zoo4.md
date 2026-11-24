# Füttere den Panda

## 1. Füttere den Panda

**🎋 Fütterungszeit! 🎋**

Der Lieblingspanda aller Besucher hat Hunger. Lass uns
Code schreiben, um ihn mit leckerem Bambus zu füttern.

---

- :binoculars:  Sieh dir den Code in deinem Arbeitsbereich an.
Er sollte dir bekannt vorkommen. 

Weißt du noch, was jeder Block macht?


## 2. Hol Bambus

**Zuerst brauchst du etwas Bambus.**

---

- :game:  Ziehe aus ``||controller:Controller||`` einen  
``||controller:wenn [A] Knopf gedrückt ||``  
Container in den Arbeitsbereich.

- :paper plane:  Hänge einen neuen  
``||variables(sprites):setze [meinSprite] auf Sprite [ ] vom Typ [Player]||``  
Block hinein.

- :mouse pointer:  Ändere den Typ unbedingt auf ``||sprites:Food||``, klicke dann auf
das graue Quadrat und male im **Bildeditor** ein leckeres Stück Bambus.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let meinSprite = sprites.create(img`
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


## 3. Probier es aus!  @showdialog

**Drücke den Ⓐ-Knopf**

---

Schau im Spielfenster, was passiert.


## 4. Bambus zufällig verteilen

**Zeit, den Bambus im Panda-Gehege zu verteilen!**

---

- :paper plane:  Nimm aus ``||sprites:Sprites||`` einen  
``||sprites:setze Position von [meinSprite] auf x [0] y [0]||``  
Block und setze ihn ans **Ende** des  
``||controller:wenn [A] Knopf gedrückt ||``   
Containers.

- :calculator:  Nimm aus ``||math:Mathematik||`` zwei  
``||math:wähle eine zufällige Zahl von [0] bis [10]||``  
Werteblöcke und ersetze damit die Werte **x** und **y** im neuen **setze Position**-Block.

- :mouse pointer:  Probier verschiedene Zahlen aus und schau, wie sie beeinflussen, wo der Bambus **zufällig** auf dem Bildschirm landet.


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let meinSprite = sprites.create(img`
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
    meinSprite.setPosition(randint(10, 150), randint(10, 110))
})
```


## 5. Panda-Futter

**Drücke den Ⓐ-Knopf (oder die Leertaste)**, um Futter für den Panda hinzulegen.


## 6. Hilf dem Panda

**Oh, der Panda findet das Futter nicht so gut ... helfen wir ihm!**

---

- :paper plane:  Öffne ``||sprites:Sprites||`` und ziehe einen  
``||sprites:setze [meinGegenpart] folgend [meinSprite]||``   
Block ans **Ende**
des Containers ``||controller:wenn A Knopf gedrückt||``.

- :mouse pointer:  Ändere den ersten Variablenwert in ``||variables(noclick):panda||`` und teste deinen Code im Spielfenster.

```blocks
let panda:Sprite = null;
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let meinSprite = sprites.create(img`
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
    meinSprite.setPosition(randint(10, 150), randint(10, 110))
    //@highlight
    panda.follow(meinSprite)
})
```

## 7. Guten Appetit

**😋 Mampfzeit 😋**

Wir können dem Panda beim Finden der Snacks helfen, indem wir Code ausführen, wenn der
Panda den Bambus **überlappt**.

---

- :paper plane:  Zieh aus ``||sprites:Sprites||`` einen  
``||sprites:wenn [sprite] der Art [Player] überlappt [othersprite] der Art [Player]||``  
Container heraus und leg ihn im Arbeitsbereich ab.

- :mouse pointer:  Klicke auf das zweite ``||sprites:Player||``-Dropdown-Menü
und wähle **Food**.

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
})
```

## 8. Zerstöre das Sprite

- :paper plane:  Nimm als Nächstes einen  
``||sprites:Zerstöre [meinSprite] ⊕||``  
Block aus ``||sprites:Sprites||``
und leg ihn in den **überlappt**-Container.

- :mouse pointer:  Nimm ``||variables(noclick):anderesSprite||`` aus der Titelzeile des **überlappt**-Containers und ziehe es nach unten, um ``||variables(noclick):meinSprite||`` im **Zerstöre**-Block zu ersetzen.

![Beispiel, wie jemand die Variable anderesSprite aus dem Container in den anderen Block zieht](static/skillmap/zoo/overlaps-food-sprite.gif "So geht das also!")

```blocks

}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
    //@highlight
    anderesSprite.destroy()
})
```


## 9. Spezialeffekte

- :mouse pointer:  Klicke auf das Plus-Symbol im  
``||sprites:Zerstöre [anderesSprite] ⊕||``   
Block, um einen Effekt hinzuzufügen, der abgespielt wird, wenn der Panda zu mampfen beginnt. 

_💡 Hier passen sowohl **spray** als auch **disintegrate** gut!_



```blocks

}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
    //@highlight
    anderesSprite.destroy(effects.spray, 500)
})
```


## 10. Satter Panda

**Super gemacht!**

Der Panda bekommt eine ordentliche Mahlzeit!

Probier dein Spiel im Spielfenster aus, und wenn du fertig bist,
klicke auf **Fertig**, um deine Reise durch den Zoo fortzusetzen.




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
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"*(U`8Cz%UdX%QVrRLAj]\">Player</variable><variable type=\"KIND_SpriteKind\" id=\",p#pZ[t5Tx3AJuLMboP?\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"YMZp[xD?jgxk5yDV=q;C\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"M;=(qFqSV|s///LTH|kZ\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"s%O)x$i~/?,4ZPs%k;E5\">Animal</variable><variable id=\"|2r#YO`9Pls^yzC3lc4/\">panda</variable><variable id=\"A)F#HAC#}PGF8r].R!k@\">bamboo</variable><variable id=\"sd/oyN~_[Y/M*O1?~z[U\">meinSprite</variable><variable id=\"lvyeJH`H_zT4C_`*RWL`\">meinGegenpart</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Animal = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level1`)\n",
  "pxt.json": "{\n    \"name\": \"Feed the Panda\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.49\",\n        \"tag\": \"v1.3.49\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/cc243b20c0547dd26f27296be900f62d5c04211b\",\n        \"target\": \"1.3.49\",\n        \"pxt\": \"6.8.37\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tileGrass1\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

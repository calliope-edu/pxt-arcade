# Beweg den Truthahn
### @explicitHints true


## Willkommen @showdialog

Fröhlichen **Truthahn-Tag!**

In dieser Aktivität lernst du, wie du ein hüpfendes
Plattformspiel baust.

![Ein animiertes GIF des Spiels, das wir gleich bauen](/static/skillmap/turkey/turkey1.gif "Schau, was wir heute machen!")

Klicke auf „Ok“, um loszulegen.




## {2. Wir brauchen einen HELDEN}

**Wo ist der Truthahn??**

---

Lass uns zuerst einen Truthahn-Sprite erstellen und ihn in Bewegung bringen.


- :paper plane: Nimm aus der Kategorie ``||sprites:Sprites||``
den Block <br/>
```block
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```
<br/>und setze ihn **ans Ende** des Containers ``||loops(noclick):beim Start||``,
der schon im Arbeitsbereich liegt.


~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur oder jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Auch unser Truthahn wird ein Sprite.

hint~


#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```


## {3. Wir brauchen einen Truthahn}

Wähle den großen Truthahn ...

---

- :paint brush: Klicke auf das leere graue Kästchen,
wechsle dann zur **Galerie** und klicke auf den Truthahn im ersten Feld.

![Spieler aus Meine Assets auswählen](/static/skillmap/turkey/pick-player.gif "Wechsle zur Galerie und wähle den Spieler")

#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
```



## {4. Steuere den Spieler}

**Zeit, den Spieler in Bewegung zu bringen**

---

- :game: Nimm aus der Kategorie ``||controller:Controller||`` den Block<br/>
```block
controller.moveSprite(bigTurkey, 100, 0)
```
<br/>und zieh ihn **ans Ende** des Containers <br/>
``||loops(noclick):beim Start||``.
<br/>

Dieser Block ist so eingestellt, dass du den Truthahn nach links und rechts bewegen kannst, aber nicht nach oben oder unten.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
// @highlight
controller.moveSprite(bigTurkey, 100, 0)
```


## {5. Probier es aus}


- :binoculars: Teste dein Projekt im Spielfenster!

Du solltest deinen Sprite mit dem Steuerkreuz oder den Pfeiltasten auf deiner Tastatur bewegen können.

![Das Spielfenster findest du unten rechts](/static/skillmap/turkey/game.png)




## {6. Schwerkraft hinzufügen}

**Damit man das Spiel spielen kann, braucht es Schwerkraft.**

Dafür fügen wir eine Beschleunigung hinzu.

---

- :paper plane: Nimm aus der Kategorie ``||sprites:Sprites||`` den Block
```block
let bigTurkey: Sprite = null
bigTurkey.ay = 500
```
und setze ihn **ans Ende** des Containers
``||loops(noclick):beim Start||``.


~hint Was ist Beschleunigung? 💡

---

Die Beschleunigung bestimmt, wie sich die Geschwindigkeit in eine Richtung verändert.

Wir müssen die Geschwindigkeit des Truthahns in vertikaler Richtung (nach oben und unten) verändern.

hint~


#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
// @highlight
bigTurkey.ay = 500
```

## {7. Mit der Kamera folgen}

**Hoppla! Der Truthahn fällt aus dem Bild!**

---

- :tree: Damit du den Truthahn im Blick behältst, geh zu ``||scene:Szene||`` und zieh<br/>
```block
scene.cameraFollowSprite(bigTurkey)
```
<br/>**ans Ende** des Containers
``||loops(noclick):beim Start||``.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
// @highlight
scene.cameraFollowSprite(bigTurkey)

```


## {8. Schau noch mal}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Dein Truthahn sollte auf einer Plattform landen,
und dann solltest du ihn mit dem Steuerkreuz oder den Pfeiltasten bewegen können.




## {9. Ganz unten starten}

**Der Truthahn ist gelandet, aber er ist schon fast oben auf der Kachelkarte!**

Lass uns ihn auf eine besondere Kachel am Boden setzen.

---

- :tree: Zieh aus ``||scene:Szene||`` den Block
```block
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency16`)
```
**ans Ende** des Containers
``||loops(noclick):beim Start||``.



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency16`)
```

## {10. Ganz unten starten}


- :mouse pointer: Klicke auf das karierte Quadrat und wähle die **Start**-Kachel aus.
Sie sieht aus wie eine lila Linie am unteren Rand des Quadrats.
![Die Startkachel für den Truthahn](/static/skillmap/turkey/start-tile.png "Wähle die erste nicht leere Kachel.")



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
```

## {11. Springen}

Jetzt, wo der Truthahn am Boden steht,
soll er mit der **A**-Taste springen können!

---

- :game: Zieh aus ``||controller:Controller||`` den Block<br/>
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let bigTurkey: Sprite = null
    bigTurkey.vy = -300
})
```
<br/>auf **eine freie Stelle** im Arbeitsbereich.

Dieser Code ändert jedes Mal, wenn du die A-Taste (oder die Leertaste auf deiner Tastatur) drückst, kurz die Geschwindigkeit des Truthahns.

~hint Was ist Geschwindigkeit? 💡

---

Die Geschwindigkeit gibt an, wie schnell sich etwas in eine bestimmte Richtung bewegt.

In diesem Schritt ändern wir, wie schnell sich der Truthahn nach oben und unten bewegt.

hint~

#### ~ tutorialhint

```blocks
let bigTurkey: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

## {12. Spiel dein Spiel!}


- :binoculars: Teste dein Spiel!

Probier dein Spiel mit den Pfeiltasten und der A-Taste (oder der Leertaste) aus.

Schaffst du es, deinen Truthahn bis ganz nach oben zu bringen?



## {Geschafft}

Wenn du fertig gespielt hast, klicke auf **Fertig**,
um zur Skillmap zurückzukehren.

Im nächsten Level erfährst du, wie du deine Truthahn-Freunde
aus ihren Käfigen rettest!


~hint Wie teile ich mein Spiel? 💡

---

**Möchtest du dein Spiel teilen?**

Klicke auf „Fertig“, um zur Skillmap zurückzukehren, und such dann unten rechts
nach dem Teilen-Button.

![Teile deine Karte](/static/skillmap/turkey/share.gif )

hint~




```blockconfig.global
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)

tiles.placeOnRandomTile(bigTurkey, img`.`)

scene.cameraFollowSprite(bigTurkey)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
turkey_imgs=github:kiki-lee/turkey_imgs
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})

let bigTurkey: Sprite = null

bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
tiles.placeOnRandomTile(bigTurkey, turkey_imgs.start)
bigTurkey.ay = 500
controller.moveSprite(bigTurkey, 100, 0)
scene.cameraFollowSprite(bigTurkey)

```


```customts
scene.setBackgroundColor(9)
tiles.setTilemap(turkey_imgs.level1)

namespace SpriteKind {
    //% isKind
    export const Rescued = SpriteKind.create()
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" id=\"EY`vhO:h*%a^dk.UR446\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"turkey_tiles\",\n    \"version\": \"0.0.1\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"testFiles\": [],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.46\",\n        \"tag\": \"v1.12.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/e66fb08db35df2249cd64300195259c64d497106\",\n        \"target\": \"1.12.46\",\n        \"pxt\": \"8.5.57\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#FF93C4\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#249CA3\",\n        \"#78DC52\",\n        \"#B86F6F\",\n        \"#87F2FF\",\n        \"#8E2EC4\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ],\n    \"assetPack\": true\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAuwAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAAuw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"start\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzNzd3d3d3d3N3LBLtLAiu8vcALtEuyK7xMzMzMzMzMzM3N3d3dzd3M3cKyKy3O7czdy7u7Lc7tzM3ACwu9zu3M3MzMzM3O7cztzd3d3c7tzO3Lvu7ty+3Mvc6x3t3O7cztzr8e/c7tzOzMzMzMz8zMzc3d3d3f3dzQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cage\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwYTAwMDAyMDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzAxMDIwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNjAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjA5MDAwMDAwMDAwMDA1MDQwNDA0MDQwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDkwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDQwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjA2MDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDUwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMTAyMDAwMDAwMDAwMDAwMDkwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDUwNDA2MDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDYwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDQwNDA0MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA2MDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDUwNDA0MDQwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNDA0MDEwMjAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNjAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA2MDAwMDAwMDAwMDA1MDYwMDAwMDkwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAxMDIwMDAwMDkwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDA5MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA0MDYwMDAwMDAwMDAwMDUwNDA2MDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDQwNjAwMDAwMDA1MDQwNDA0MDYwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMTAyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDAwMDAwMDAyMDIyMjIwMjAwMDAyMDIyMjIyMjIyMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjAyMDAwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjIyMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAyMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIyMDAwMDAwMDAyMjIyMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMjIwMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMjAwMjAwMDAwMDAwMjAwMjIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMDIyMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjIyMDIwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMjIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAyMDIyMDIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDIyMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIyMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIwMDIyMjAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMjIwMDIwMDAwMDAwMDAwMDAyMDIyMjIyMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDIwMDIwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMjIyMjIwMjIyMDIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIwMjIwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDIwMDAwMjIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIwMjIyMjAyMDAyMjAyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDAwMjAyMjAyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIyMjIyMjAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMjIyMDAyMDAwMDIwMjIwMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIyMDIwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAyMjIyMDIwMDAwMDAwMDAwMDAyMDAyMDAyMjIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMjAyMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjIyMDAyMDIyMjIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.skillmap.islandTile3\",\n            \"sprites.skillmap.islandTile5\",\n            \"sprites.skillmap.islandTile1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.swamp.swampTile16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`1000a00002070707070707070707070707070701020707070707070707070707070707010200000000000000000000000000000102000000000000000000000000000001020600000000000000000005040406010209000000000005040404040404060102000000000000000000000000000001020504060000000000000000000000010200000000000000000000000000000102000000000000050600000000000001020000000000000000000000000000010200000000000000000000000000000102000504060000000000000504040601020000000000000000000000000000010200000000000005060000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000050404060000000102000000000000050600000000090001020000000000000000000005040406010200000000000000000000000000000102040404040600000000000000000001020000000000000000000000000000010200000000000000000504060000000102000000000000000000000000000001020000000000000000000000000000010200000000000504040600000000000102000000050600000000000000000001020000000000000000000000000000010206000000000000000000050600000102000000000000000000000000000001020900000000000000000000000000010200050600000000000000000504060102000005060000000000000000000001020000000000000000000000000000010200000005040600000000000000000102000000000000000000000000000001020000000000000000050600000000010200000000000000000000050600000102050404040600000000000000000001020000000000000000000000000000010200000000000000000000000005060102000000000000090000050600000001020000000000000000000000000000010200000000000504060000000000000102000000000000000000000000000001020000000000000000000005040406010200050406000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000005040600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000000005060000000102000000000000000000000000000001020504060000000000000000000000010200000000000005040600000000000102000000090000000000000000000001020000000000000000000005040406010200000005060000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000050600000000000000000001020000000005040406000000000000010200000000000000000000000000000102050406000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000000000005060000000504040601020000000000000000000000000000010200000000000000000000000000000102000005040404040406000000000001020000000000000000000000000000010200000000000000000000050600000102000000000000000000000000000001020000000000000009000000000000010200000000000000000000000000050102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000506000102000504060000000000000000000001020000000000000000000000000000010200000000000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000900000000050404040600000102000000000000000000000000000001020504040406000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000506000000000000010200000000000506000000000000000102000000000000000000000000000001020000000000000000000504040404010200050406000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000506000000090000000102000000000000000000000000000001020000000000000000000005040600010200000000000000000000000000000102000000000504060000000000000001020504040600000000000000000000010200000000000000000000000000000102000000000000000000050406000001020000000000000000000000000000010200000000000000000000000000000102000000000005040600000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200090000000000000000000000000102000000000000000000000000000001020406000000000005060000090000010200000000000000000000000000000102000000000000000000000504040601020000000504060000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000000000050404060000000001020000000000000000000000000000010200000000000000000000000504060102050406000000000000000000000001020000000000000009000000000000010200000000000000000000000000000102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000005060001020000090000000504040600000000010200000000000000000000000000000102000005060000000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000050406000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000050406000009000001020000000000000000000000000000010200000000000000000000050404060102000000000000000000000000000001020000000504040600000000000000010200000900000000000000000000000102000000000000000000000000000001020404060000000000050406000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200000000000000000000090000000102000000000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000504040600000005040404060001020000000000000000000000000000010200000000000008000000000000000102030303030303030303030303030303`, img`\n2..............2\n2..............2\n2..............2\n2..............2\n22.........22222\n2......222222222\n2..............2\n2222...........2\n2..............2\n2......22......2\n2..............2\n2..............2\n2.222......22222\n2..............2\n2......22......2\n2..............2\n2..............2\n2.......2222...2\n2......22......2\n2..........22222\n2..............2\n222222.........2\n2..............2\n2........222...2\n2..............2\n2..............2\n2.....2222.....2\n2...22.........2\n2..............2\n22.........22..2\n2..............2\n2..............2\n2.22........2222\n2..22..........2\n2..............2\n2...222........2\n2..............2\n2........22....2\n2..........22..2\n222222.........2\n2..............2\n2............222\n2.........22...2\n2..............2\n2.....222......2\n2..............2\n2..........22222\n2.222...22.....2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..............2\n2.........22...2\n2..............2\n2222...........2\n2......222.....2\n2..............2\n2..........22222\n2...22.........2\n2..............2\n2..............2\n2..22..........2\n2...22.........2\n2....2222......2\n2..............2\n2222......22...2\n2..............2\n2..............2\n2.....22...22222\n2..............2\n2..............2\n2..2222222.....2\n2..............2\n2..........22..2\n2..............2\n2..............2\n2.............22\n2.....2222.....2\n2..............2\n2...........22.2\n2.222..........2\n2..............2\n2.......22.....2\n2..............2\n2..............2\n2.......22222..2\n2..............2\n222222.........2\n2..............2\n2..............2\n2......22......2\n2.....22.......2\n2..............2\n2.........222222\n2.222..........2\n2..............2\n2..............2\n2.....22.......2\n2..............2\n2..........222.2\n2..............2\n2....222.......2\n22222..........2\n2..............2\n2.........222..2\n2..............2\n2..............2\n2.....222......2\n2..............2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2..............2\n222.....22.....2\n2..............2\n2..........22222\n2...222........2\n2..............2\n2..............2\n2..............2\n2..22..........2\n2......2222....2\n2..............2\n2...........2222\n2222...........2\n2..............2\n2..............2\n2.....2222.....2\n2..............2\n2..............2\n2...........22.2\n2......2222....2\n2..............2\n2..22..........2\n2..............2\n2..............2\n2...222........2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..........22222\n2..............2\n2...2222.......2\n2..............2\n2..............2\n2222.....222...2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2.........22...2\n2..............2\n2..............2\n2.2222...22222.2\n2..............2\n2..............2\n2222222222222222\n`, [myTiles.transparency16,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.swamp.swampTile16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"start\":\n            case \"tile1\":return tile1;\n            case \"cage\":\n            case \"tile2\":return tile2;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}

```

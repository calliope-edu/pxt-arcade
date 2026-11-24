# Wachtel-Schlüpfzeit

## So viele Wachteln!   @showdialog

Es ist Wachtel-Brutzeit! Die Wachteln legen überall
Eier.

Lass sie uns einfangen und zurück in den
Wachtelstall bringen.


## 2. Such den Handschuh

Sieh dir zuerst den Code im Arbeitsbereich an.

---

- :binoculars:  Findest du, wo der Wachtelfang-Handschuh erstellt wird
und wo die Controller-Knöpfe aktiviert werden?

---

Im Moment passiert nichts, wenn der Handschuh eine Wachtel überlappt.

Das sollten wir ändern.


## 3. Überlappen

**Fangen wir ein paar Vögel!**

---

- :paper plane:  Ziehe aus ``||sprites:Sprites||`` einen </br>
``||sprites:wenn [sprite] der Art [Player] überlappt [othersprite] der Art [Player]||`` </br>
Container in den Arbeitsbereich.

- :mouse pointer:  Klicke auf das **zweite** ``||sprites:Player||``-Dropdown und
ändere es in ``||sprites:Quail||``.


```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quail, function (sprite, anderesSprite) {
})
```

## 4. Folge dem Handschuh

**✋ Wenn du eine Wachtel gefangen hast, soll sie in deiner Hand bleiben**

---

- :paper plane:  Nimm ebenfalls aus ``||sprites:Sprites||``  </br>
``||sprites:setze [meinGegenpart] folgend [meinSprite] ||``  </br>
und ziehe ihn in den leeren **überlappt**-Container.

- :mouse pointer:  Nimm den Werteblock ``||variables(noclick):anderesSprite||`` aus der Titelzeile des äußeren Containers und
ziehe ihn nach unten, um das Argument ``||variables(noclick):meinGegenpart||`` im **folgend**-Block zu ersetzen.



```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
let meinSprite: Sprite = null;
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quail, function (sprite, anderesSprite) {
    //@highlight
    anderesSprite.follow(meinSprite)
})
```

## 5. Probier es aus

**Probier das Spiel im Spielfenster aus.**

---

Was passiert? </br>
Was passiert nicht?


## 6. Bring sie weg

**Wir müssen die Wachteln zurück in den Stall bringen.**

---

- :tree:  Ziehe aus ``||scene:Szene||`` einen </br>
``||scene:wenn [sprite] vom Typ [Player] überlappt [ ] bei [location]||`` </br>
Container in den Arbeitsbereich.

- :mouse pointer:  Ändere **Player** in **Quail** und die leere Kachel in die **Stall**-Kachel (coop).

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Quail, assets.tile`coop`, function (sprite, location) {

})
```


## 7. Zerstören

- :paper plane:  Hänge aus ``||sprites:Sprites||`` einen </br>
``||sprites:Zerstöre [meinSprite]||`` </br>
Block in den leeren überlappt-Container.

- :mouse pointer:  Nimm den Werteblock ``||variables(noclick):sprite||`` aus dem </br>
**überlappt**-Container und ziehe ihn nach unten, um das </br>
Argument ``||variables(noclick):meinSprite||`` im **Zerstöre**-Block zu ersetzen.

---

**Zieh ein paar Wachteln in den Stall und schau, was passiert!**

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Quail, assets.tile`coop`, function (sprite, location) {
    //@highlight
    sprite.destroy()
})
```

## 8. Sammle die Eier

**Jetzt musst du dich um die lästigen übrig gebliebenen Wachteleier kümmern**

---

- :mouse pointer:  Klicke mit der rechten Maustaste auf deinen </br>
``||sprites:wenn [sprite] der Art [Player] überlappt [othersprite] der Art [Quail]||`` </br>
Container und wähle im Menü **Duplizieren**. Ändere dann das zweite
Argument von **Quail** in **Egg**.

- :mouse pointer:  Klicke mit der rechten Maustaste auf deinen </br>
``||scene:wenn [sprite] vom Typ [Quail] überlappt [coop] bei [location]||`` </br>
Container und wähle im Menü **Duplizieren**.
Ändere dann den Typ von **Quail** in **Egg**.

---

Schau im Spielfenster, wie schnell du alle Wachteln wegräumen kannst!

```blocks
namespace SpriteKind {
    export const Egg = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Egg, function (sprite, anderesSprite) {
    anderesSprite.follow(sprite)
})

scene.onOverlapTile(SpriteKind.Egg, assets.tile`coop`, function (sprite, location) {
    sprite.destroy()
})
```


## 9. Geschafft

**Jetzt spiel dein Spiel!**

Schaffst du es, alle Eier einzusammeln, bevor noch mehr Wachteln schlüpfen?

Wenn du fertig gespielt hast, klicke auf **Fertig**, um zurück zur Karte zu gehen. Dort kannst du
dein Spiel mit Familie und Freunden teilen!


```template
let meinSprite = sprites.create(img`
. . . . . 8 8 . 8 6 . 8 6 . . .
. . . . 8 6 6 8 6 7 8 6 7 6 . .
. . . . 8 7 7 8 6 6 8 6 7 6 . .
. . . . 8 6 6 8 6 6 8 6 6 8 f .
. . . . 8 7 7 f 7 7 f 7 7 f 7 6
. . . . f 7 7 f 7 7 f 7 7 f 7 6
. . 8 8 f 6 6 f 6 6 f 6 6 f 7 6
. 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8
. 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8
. f 6 6 6 6 6 6 6 6 6 6 6 6 6 f
. f 6 6 6 6 6 6 6 6 6 6 6 6 7 f
. . f 7 7 7 7 7 7 7 7 7 7 7 7 f
. . . f 7 7 7 7 7 7 7 7 7 7 f .
. . . f 8 7 7 7 7 7 7 7 7 6 f .
. . . . f 8 6 6 6 6 6 6 6 6 8 .
. . . . . f f f f 8 8 8 8 8 . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite)
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"_IBKL^~yT2$W1U3D6v*s\">meinSprite</variable><variable type=\"KIND_SpriteKind\" id=\";Xcb7$zV,_oi)g;tJQUQ\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"TNqB.-5qY@-1s=+VW{di\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"4/GGbI3A]We^*Uu4WtMK\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"#m652-$Asb--@{r,wN,t\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"VhqsXNXdC!%Oo*#$v7G2\">Quail</variable><variable type=\"KIND_SpriteKind\" id=\"F!}fL6;/Lo_ov,p,H@1,\">Egg</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Quail = SpriteKind.create()\n    export const Egg = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level1`)\n",
  "pxt.json": "{\n    \"name\": \"Quail Hatching\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.4.28\",\n        \"tag\": \"v1.4.28\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/9569656def042c35d28e981045e67afaa1feed7c\",\n        \"target\": \"1.4.28\",\n        \"pxt\": \"6.12.9\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAC3zMzMzMz//6u7u6vMu7vLvLu7u/qZud+8u7u7+pm537y7u7v6mbnfvLu7u/qZud+8u7u7+pm537y7u7v6mbnfvLu7u/qZsd+8u7u7+hm537y7u7v6kbnfvLu7u/qZsd+8u7u7+hmx37y7u7v6Ebnfq7u7q8y7u8u3zMzMzMz//w==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"coop\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDIwMjAyMGEwMjAyMDIwMjAzMDcwOTA5MDkwOTA5MDkwOTA5MDgwNzA5MDkwOTA5MDkwOTA5MDkwODA3MDkwOTA5MDkwOTA5MDkwOTA4MDcwOTA5MDkwOTA5MDkwOTA5MDgwNzA5MDkwOTA5MDkwOTA5MDkwODA3MDkwOTA5MDkwOTA5MDkwOTA4MDUwNjA2MDYwNjA2MDYwNjA2MDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.castle.tilePath9\",\n            \"sprites.castle.tilePath7\",\n            \"sprites.castle.tilePath8\",\n            \"sprites.castle.tilePath4\",\n            \"sprites.castle.tilePath6\",\n            \"sprites.castle.tilePath5\",\n            \"myTiles.tile1\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a000800010202020a020202020307090909090909090908070909090909090909080709090909090909090807090909090909090908070909090909090909080709090909090909090805060606060606060604`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"coop\":\n            case \"tile1\":return tile1;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

```customts
namespace SpriteKind {
    //% isKind
    export const Quail = SpriteKind.create()
    //% isKind
    export const Egg = SpriteKind.create()
}
tiles.setTilemap(tilemap`level1`)
sprites.onDestroyed(SpriteKind.Egg, function (sprite) {
    quail = sprites.create(img`
        f f . . . . . . . . . .
        . . f . . . . . . . . .
        . c c c c . . . . . . .
        . c 1 c c b . . . . . .
        f c c c b d b . . . . .
        . . b b b d d b . . . .
        . . b b b d b d b . . .
        . . b b b b b d d b b b
        . . b b b b b b b b b b
        . . . . b b b b b . . .
        . . . . . 4 . 4 . . . .
        . . . . . 4 . . . . . .
        `, SpriteKind.Quail)
    quail.setPosition(sprite.x, sprite.y)
    quail.setVelocity(randint(80, 120), randint(80, 120))
    quail.setBounceOnWall(true)
    quail.z = 10
})

let quail_egg: Sprite = null
let quail: Sprite = null
for (let index = 0; index < randint(3, 5); index++) {
    quail = sprites.create(img`
        f f . . . . . . . . . .
        . . f . . . . . . . . .
        . c c c c . . . . . . .
        . c 1 c c b . . . . . .
        f c c c b d b . . . . .
        . . b b b d d b . . . .
        . . b b b d b d b . . .
        . . b b b b b d d b b b
        . . b b b b b b b b b b
        . . . . b b b b b . . .
        . . . . . 4 . 4 . . . .
        . . . . . 4 . . . . . .
        `, SpriteKind.Quail)
    quail.setVelocity(randint(-100, 100), randint(-100, 100))
    quail.setPosition(randint(10, 150), randint(10, 110))
    quail.setBounceOnWall(true)
    quail.z = 10
}
game.onUpdateInterval(3000, function () {
    if (sprites.allOfKind(SpriteKind.Quail).length < 30) {
        for (let value of sprites.allOfKind(SpriteKind.Quail)) {
            let following = game.currentScene().followingSprites;
            if (!following || !following.some(el => el.self == value)) {
                quail_egg = sprites.create(img`
                    . . . c c . . .
                    . . c 1 1 c . .
                    . c b 1 1 b c .
                    c b 1 1 1 b b c
                    c 1 1 1 1 1 1 c
                    c 1 1 b 1 1 1 c
                    . c 1 1 1 b c .
                    . . c c c c . .
                    `, SpriteKind.Egg)
                quail_egg.setPosition(value.x, value.y)
                quail_egg.lifespan = randint(2000, 3000)
            }
        }
    }
})
game.onUpdate(function() {
    if (sprites.allOfKind(SpriteKind.Quail).length == 0 && sprites.allOfKind(SpriteKind.Egg).length == 0) {
        game.gameOver(true)
    }
})
```

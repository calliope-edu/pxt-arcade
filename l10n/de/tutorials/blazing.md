# Lodernder Ruhm
### @explicitHints true


## Lodernder Ruhm Einführung @showdialog

In diesem Tutorial zeigen wir dir, wie du ein Mehrspieler-Spiel baust, in dem ihr Feuer ausweichen müsst.

![Spiele Lodernder Ruhm](/static/tutorials/blazing/blazing.gif " ")




## {2. Dein erster Block}

**Wähle deine Figuren**

Wir haben im Arbeitsbereich schon ein Array mit Figuren vorbereitet.

---

- :mouse pointer: Klicke auf jede Figur und ändere sie so, wie es dir gefällt.



#### ~ tutorialhint

```blocks
//@highlight
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



## {3. Spieler festlegen}

**Füge Spieler 1 hinzu**

- :suitcase: Öffne die Kategorie ``||bundles:Bundles||`` und ziehe das <br/>
``||bundles:erstelle Spieler||``<br/>
Bundle **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
//@highlight
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
```


## {4. Was habe ich gemacht?}

**Lies hier, was jeder Block macht ...**

Scrolle nach unten, um zur nächsten Anweisung zu kommen.

---

```block
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```
Dieser Block erstellt ein Array mit Bildern, die wir beim Einrichten der Spieler verwenden.

---


```block
for (let index = 0; index <= 2; index++) { }
```
Das ist eine `for loop` (Zählschleife). Sie läuft dreimal und setzt den Wert von `index` auf 0, 1 und 2. Das nutzen wir, wenn wir die einzelnen Spieler einrichten.

---

```block
mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
```
Bei jedem Schleifendurchlauf bekommt der richtige Spieler das passende Bild aus dem Array.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
```
Nach allen drei Durchläufen der Schleife stehen alle drei Spieler an der richtigen Stelle auf dem Bildschirm (mit etwas eigener Mathematik, die den Index aus der `for loop` verwendet).

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
```
Damit wird die vertikale Beschleunigung jedes Sprites auf 600 gesetzt – das wirkt wie Schwerkraft.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
```
Damit fällt kein Sprite aus dem Bildschirm, sobald die Schwerkraft wirkt.




## {5. Teste dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an, um zu sehen, was dein Code macht.

Du solltest drei Sprites in einer Reihe sehen.


~hint Was ist ein Sprite? 💡

---

In Arcade nennt man jede Figur und jedes Bild, das etwas tut, ein **SPRITE**.

Sprites haben Eigenschaften, die du benutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Unsere Spieler werden auch Sprites sein.

hint~




## {6. SPRINGEN}

**Lass jeden Spieler springen, wenn er den (A)-Knopf drückt.**

- :game: Ziehe aus der Kategorie ``||mp:Mehrspieler||`` das <br/>
``||mp:wenn Knopf [A] [gedrückt] für [Spieler]||`` <br/>
Bundle in einen **freien** Bereich des Arbeitsbereichs. <br/>

Wenn jetzt ein Spieler seinen (A)-Knopf drückt, trotzt sein Sprite kurz der Schwerkraft.



#### ~ tutorialhint

```blocks
//@highlight
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
```



## {7. Projektile hinzufügen}

**Lass das Feuer fliegen!**

- :circle: Öffne die Kategorie ``||game:Spiel||`` und ziehe das<br/>
``||game:wenn Spielupdate alle [900] ms||``<br/>
Bundle in einen **freien** Bereich des Arbeitsbereichs.


- :mouse pointer: Klicke auf das leere graue Feld, um ein Bild für das Projektil auszuwählen.
![Wechsle zu Meine Assets](/static/skillmap/assets/my-assets-three.png " ")
Wechsle zur Bibliothek **Meine Assets** und wähle den Feuerball.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(900, function () {
    let projektil = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projektil.y = randint(0, 120)
})
```



## {8. Ziellinie hinzufügen}

**Füge einen Endpunkt hinzu**

Wir müssen wissen, wann die Projektile die linke Seite des Bildschirms erreichen, damit die Spieler einen Punkt bekommen.

---

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe den<br/>
``||variables(sprites):setze [finish] auf Sprite vom Typ [Finish]||``
<br/>Block **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.


- :mouse pointer: Klicke auf das leere Bildfeld und wechsle zur Bibliothek **Meine Assets**.<br/>
![Wechsle zu Meine Assets](/static/skillmap/assets/my-assets-three.png " ")
Wähle die hohe schwarze Linie namens **finish**.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
//@highlight
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)

```




## {9. Ziellinie verschieben}

**Verschiebe die Ziellinie nach links.**

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe<br/>
``||sprites:setze [finish] [x] auf [0]||``<br/>
**ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
//@highlight
    finish.x = 0
```



## {10. Schau mal}


- :binoculars: Schau dir dein Spiel noch einmal an.

Der erste Spieler sollte springen, wenn du den **(A)-Knopf** oder die Leertaste drückst.

**Spieler 2** springt, wenn du die **Taste U** auf deiner Tastatur drückst<br/>
(oder du klickst auf die Mehrspieler-Symbole, um jeden Spieler mit der Leertaste zu testen).

![Spiele mit den Emulator-Knöpfen](/static/tutorials/assets/multi.png " ")



## {11. Punkte hinzufügen}

**Gib Punkte, wenn die Projektile die Linie erreichen.**

- :users: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe das<br/>
``||sprites:wenn [sprite] der Art [Projectile] überlappt||``
<br/>Bundle in einen **freien** Bereich des Arbeitsbereichs.


Dieses Ereignis gibt einen Punkt, wenn die Feuerball-Projektile die Ziellinie berühren.


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
})
```




## {12. Leben hinzufügen}

**Lege die Leben für die Gruppe fest.**

- :id card: Öffne die Kategorie ``||info:Info||`` und ziehe<br/>
``||info:setze Anzahl Leben auf [5]||``<br/>
**ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
    finish.x = 0
    //@highlight
    info.setLife(5)
```




## {13. Leben abziehen}

**Zieh Leben ab, wenn die Spieler getroffen werden.**


- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe das<br/>
``||sprites:wenn Sprite der Art [Projectile] überlappt ... [Player]||``<br/>
Bundle in einen **freien** Bereich des Arbeitsbereichs.

Damit verliert die Gruppe ein Leben, wenn ein Projektil einen Spieler berührt.


```blockconfig.local
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, anderesSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, anderesSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```




## {14. Spiel los!}


- :binoculars: Spiel dein Spiel!

Benutze die Mehrspieler-Symbole, um dein Spiel mit jedem Spieler zu testen.

![Spiele mit den Emulator-Knöpfen](/static/tutorials/assets/multi.png " ")

Ihr solltet ein Leben verlieren, wenn ein Feuerball jemanden aus dem Team trifft, aber einen Punkt bekommen, wenn alle Spieler einem Feuerball ausweichen.




## {Geschafft}

**🔥 Super gemacht 🔥**

Du hast dein Mehrspieler-Spiel fertiggestellt!

Wenn du so weit bist, melde dich an und wähle **Fertig**, um online mit Freunden zusammen dein Spiel zu gewinnen.

**Schafft dein Team 20 Punkte, bevor alle Leben weg sind?**






```blockconfig.global


let finish = sprites.create(img`.`, SpriteKind.Finish)
let projektil = sprites.createProjectileFromSide(img`.`, -75, 0)

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})

bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        let locations: tiles.Location[] = []
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
})

game.onUpdateInterval(900, function () {
    projektil = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projektil.y = randint(0, 120)
})
finish.x = 0
info.setLife(5)

```

```template
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



```ghost
namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, anderesSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
})
let projektil: Sprite = null
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
for (let index = 0; index <= 2; index++) {
    let locations: tiles.Location[] = []
    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
}
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.x = 0
info.setLife(5)
game.onUpdateInterval(900, function () {
    projektil = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projektil.y = randint(0, 120)
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -200
    } else if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -200
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).vy = -200
    }
})


```


```package
multiplayer
```

```customts
namespace SpriteKind {
    //% isKind
    export const Finish = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="erstelle Spieler"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="erstelle Ziellinie"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap2(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="erstelle Spieler"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap3(handler: () => void) {
        handler();
    }

}

```

```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAEQkAgAAAABE1VUtIAAAQF3VVUUiAgBAVRVR1SICAEQdEdHdJCQAVBVRFVEtJABUFVERUUUkAFTVVRFRRSQA1N0RVVVNJABAXREV0S0kAEBdVR3RJAIAQFRVXVUkAgBARNRdRQAAAAAARCQCAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"fireball\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMQMAAAAQARAM8QAAABAQzQzMwwAAEAiQzwzxAAARCQiwzPDAEAkQiLCM8MARCIiJEIzwwAkJCQyJDLDACRMLCIiIsNEJPJUIiIiwiIkUlUiIiLCRCRVVSIiIkIAQFVVIiIiRAAAXEUkIjIEAABQBEBERAAAAEAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"red duck\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuwiMsAAACwvYuIiAwAALBmuIyIywAAu2tmyIjIALBrtmbGiMgAu2Zma7aIyABra2vWa4bIAGu8bGZmZsi7a/ZLZmZmxmZr1kRmZmbGu2vdRGZmZrYAsEREZmZmuwAATLRrZtYLAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"blue duck\"\n    },\n    \"p7I@x)wGtLkpOtwZ\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuw3csAAACwvdvd3QwAALBVvdzdywAAu1tVzd3NALBbtVXF3c0Au1VVW7XdzQBbW1vVW9XNAFu8XFVVVc27W/VLVVVVxVVb1URVVVXFu1vdRFVVVbUAsEREVVVVuwAATLRbVdULAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"orange duck\"\n    },\n    \"image1\": {\n        \"data\": \"hwQCAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"finish\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"fireball\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . 4 4 4 4 4 . . . . . . \n. . . 4 4 4 5 5 5 d 4 4 4 4 . . \n. . 4 d 5 d 5 5 5 d d d 4 4 . . \n. . 4 5 5 1 1 1 d d 5 5 5 4 . . \n. 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . \n. 4 d d 1 1 5 5 5 1 1 5 5 d 4 . \n. 4 5 5 1 1 5 1 1 5 5 d d d 4 . \n. 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . \n. 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . \n. . 2 4 d d 5 5 5 5 d d 5 4 . . \n. . . 2 2 4 d 5 5 d d 4 4 . . . \n. . 2 2 2 2 2 4 4 4 2 2 2 . . . \n. . . 2 2 4 4 4 4 4 4 2 2 . . . \n. . . . . 2 2 2 2 2 2 . . . . . \n`;\n            case \"image3\":\n            case \"red duck\":return img`\n. . . . . . . . . 4 2 4 . . . . \n. . . . . . . . . 4 2 4 . . . . \n. . . . . . 4 4 4 4 4 4 . . . . \n. . . . . 4 4 2 2 2 2 2 4 . . . \n. . . . 4 4 2 4 c 2 2 5 5 c . . \n. 4 4 4 4 2 2 2 4 f 5 5 5 5 5 4 \n. 4 3 2 4 2 2 4 c 4 5 5 5 5 4 . \n. . 4 2 2 4 2 2 2 5 5 5 5 4 . . \n. . 4 3 2 2 4 2 2 2 2 2 2 4 . . \n. 4 3 4 2 2 2 3 2 2 2 2 2 2 4 . \n4 3 3 c 3 2 2 4 2 2 2 2 2 2 4 . \nc 3 3 3 c c 4 2 2 2 2 2 2 2 4 . \nc 4 3 3 3 3 3 2 2 2 2 2 2 2 4 . \n. c 3 3 3 3 3 3 2 2 2 2 2 3 4 . \n. . c 4 3 3 3 3 3 2 2 2 4 4 . . \n. . . c c c c c c c c 4 4 . . . \n`;\n            case \"image4\":\n            case \"blue duck\":return img`\n. . . . . . . . . b 6 b . . . . \n. . . . . . . . . b 6 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 6 6 6 6 6 b . . . \n. . . . b b 6 b c 6 6 d 4 c . . \n. b b b b 6 6 6 b f d d 4 4 4 b \n. b d 6 b 6 6 b c b 4 4 4 4 b . \n. . b 6 6 b 6 6 6 4 4 4 4 b . . \n. . b 8 6 6 b 6 6 6 6 6 6 b . . \n. b 8 b 6 6 6 d 6 6 6 6 6 6 b . \nb 8 8 c 8 6 6 b 6 6 6 6 6 6 b . \nc 8 8 8 c c b 6 6 6 6 6 6 6 b . \nc b 8 8 8 8 8 6 6 6 6 6 6 6 b . \n. c 8 8 8 8 8 8 6 6 6 6 6 d b . \n. . c b 8 8 8 8 8 6 6 6 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"p7I@x)wGtLkpOtwZ\":\n            case \"orange duck\":return img`\n. . . . . . . . . b 5 b . . . . \n. . . . . . . . . b 5 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 5 5 5 5 5 b . . . \n. . . . b b 5 b c 5 5 d 4 c . . \n. b b b b 5 5 5 b f d d 4 4 4 b \n. b d 5 b 5 5 b c b 4 4 4 4 b . \n. . b 5 5 b 5 5 5 4 4 4 4 b . . \n. . b d 5 5 b 5 5 5 5 5 5 b . . \n. b d b 5 5 5 d 5 5 5 5 5 5 b . \nb d d c d 5 5 b 5 5 5 5 5 5 b . \nc d d d c c b 5 5 5 5 5 5 5 b . \nc b d d d d d 5 5 5 5 5 5 5 b . \n. c d d d d d d 5 5 5 5 5 d b . \n. . c b d d d d d 5 5 5 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"image1\":\n            case \"finish\":return img`\nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"dcuHOE)w3Dy2ga(*,{/+\">playerImages</variable><variable id=\"9XsA+9Yp~ML+3fS2UxPk\">index</variable><variable id=\"Iu0IA-Q`Z6{q;AY6Pq~N\">locations</variable><variable id=\"+1[X;7m[URg[C#$iB]W}\">finish</variable><variable id=\"~RqTMBwD|[OkKCrcz@$=\">projektil</variable><variable id=\"RX5_{hl_iket8GKqRp_O\">meinSprite</variable><variable type=\"KIND_SpriteKind\" id=\"##QU.N~3_~jV,Az:bFcd\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"A84S$,NiW.X)*7t?i-(L\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"`lZ-0^Tql%66mA(dw1)`\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"=V6!#QIO]F:I#R`7|2*.\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"swEIFl7XM8#;:QqasIzT\">Finish</variable></variables></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Blazing Glory - Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.24\",\n        \"tag\": \"v1.12.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/89b1551216675ebebbbe889528fa9279c1a7bef3\",\n        \"target\": \"1.12.24\",\n        \"pxt\": \"8.5.35\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency18\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency18 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency18\":return transparency18;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
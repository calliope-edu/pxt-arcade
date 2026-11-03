# Geburtstags-Schleifen-Schlacht
### @explicitHints true


## Geburtstags-Schleifen-Schlacht Einführung @showdialog

In diesem Tutorial zeigen wir dir, wie du deine eigene Geburtstags-Schleifen-Schlacht baust.

![Spiele Geburtstags-Schleifen-Schlacht](/static/tutorials/holiday/bbb.gif "So spielt man die Geburtstags-Schleifen-Schlacht")




## {2. Dein erster Block}

**Bereit zum Programmieren?**

Lass uns einen Hintergrund festlegen.


- :tree: Öffne die Kategorie ``||scene:Szene||`` **in der Werkzeugleiste** und nimm
```block
scene.setBackgroundImage(img`.`)
```
und lege ihn in den leeren <br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.




#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```


## {3. Dein erster Block}


- :mouse pointer: Klicke auf das leere graue Feld im <br/>
``||scene(noclick):setze Hintergrundbild auf [ ]||`` <br/>
Block und wechsle zur Bibliothek **Meine Assets**.<br/>
![Wechsle zu Meine Assets](/static/skillmap/assets/my-assets-three.png " ")
Wähle den Geburtstagshintergrund namens **bday_bg**.
![Wähle den Geburtstagshintergrund](/static/tutorials/holiday/bbd.png " ")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`bday_bg`)
```


## {4. Spieler 1 festlegen}

**Füge Spieler 1 hinzu**

- :suitcase: Öffne die Kategorie ``||bundles:Bundles||`` und ziehe das
```block
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```
Bundle **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
//@highlight
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```




## {5. Spieler 1 festlegen}

- :mouse pointer: Klicke auf das leere graue Feld im <br/>
``||mp(noclick):set player 1||`` <br/>
Block und wechsle zur Bibliothek **Meine Assets**.<br/>
![Wechsle zu Meine Assets](/static/skillmap/assets/my-assets-three.png " ")
Wähle das rot-orangefarbene Geschenk namens **p1**.
![Wähle das rote Geschenk](/static/tutorials/holiday/p1.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    //@highlight
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```





## {6. Teste dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an, um zu sehen, was dein Code macht.

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

![Das Spielfenster findest du unten rechts](/static/skillmap/mole/game1.png "Klicke auf das kleine Spielfenster, um das größere Spielfenster zu öffnen.")

hint~

Du solltest dein Hintergrundbild mit einem rot-orangefarbenen Geschenk auf der linken Seite sehen.

Wenn du mit der Maus über dem Spielfenster bist, sollte sich das Geschenk mit den Pfeiltasten nach oben und unten bewegen, aber nicht nach links oder rechts.





## {7. Was habe ich gemacht?}

**Lies hier, was jeder Block macht ...**

Scrolle nach unten, um zur nächsten Anweisung zu kommen.


- :tree:  ---
```block
scene.setBackgroundImage(assets.image`bday_bg`)
```
Dieser Block setzt den Hintergrund des Spielfensters auf das Bild, das du ausgewählt hast.


- :users: ---
```block
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
```
Dieser Block erstellt ein **Sprite**, das "player1" zugeordnet ist, und setzt seinen **Typ** auf "Player". Außerdem bekommt es das Bild eines roten Geschenks.


- :users:  ---
```block
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
```
Mit diesem Block kann der erste Spieler das Sprite von "player1" mit den Pfeiltasten bewegen. Der Wert von **vx** ist auf **0** gesetzt, damit man das Geschenk mit den Tasten nicht nach links und rechts bewegen kann.



- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
```
Dieser Block sorgt dafür, dass das Sprite von "player1" den Bildschirm nicht verlässt, wenn die Tasten zu lange gedrückt werden.


- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
```
Dieser Block setzt den linken Rand des Sprites von "player1" auf 15 Pixel Abstand zum linken Bildschirmrand.





## {8. Spieler 2 festlegen}

**Füge Spieler 2 hinzu**

- :suitcase: Öffne die Kategorie ``||bundles:Bundles||`` und ziehe das
```block
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```
Bundle **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.


- :mouse pointer: Klicke auf das leere graue Feld im <br/>
``||mp(noclick):set player 2||`` <br/>
Block und wechsle zur Bibliothek **Meine Assets**.<br/>
![Wechsle zu Meine Assets](/static/skillmap/assets/my-assets-three.png " ")
Wähle das blaue Geschenk namens **p2**.
![Wähle das blaue Geschenk](/static/tutorials/holiday/p2.png " ")



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
//@highlight
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```


## {9. Teste dein Spiel!}


- :binoculars: Schau dir dein Projekt noch einmal im Spielfenster an.

Du solltest deinen Hintergrund mit einem rot-orangefarbenen Geschenk links und einem blauen Geschenk rechts sehen.

Das blaue Geschenk kannst du mit den Tasten **I** und **K** auf deiner Tastatur nach oben und unten bewegen.




## {10. Schleife abfeuern}

**Wirf eine Schleife ins Spiel!**

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe den
```block
sprites.launchBow()
```
Block **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.




#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

//@highlight
sprites.launchBow()

```



## {9. Punkte hinzufügen}

**Gib Punkte für jede Schleife!**

Lass uns ein Überlappungs-Ereignis hinzufügen, das erkennt, wenn ein Spieler eine Schleife fängt.

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe das
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```
Bundle in einen **freien Bereich** des Arbeitsbereichs.


Jedes Mal, wenn jetzt eine Schleife einen Spieler berührt, verschwindet sie in einer Konfettiwolke, der Spieler bekommt einen Punkt und eine neue Schleife erscheint im Spielfenster.



#### ~ tutorialhint

```blocks

//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```



## {10. Spiel los!}


- :binoculars: Spiel dein Spiel noch einmal!

Du solltest beide Spieler nach oben und unten bewegen können (mit den Pfeiltasten und mit **I**, **K** auf der Tastatur).

Jeder Spieler sollte Punkte bekommen, wenn er eine Schleife fängt!




## {12. Spielende}

Zum Schluss fügst du einen Countdown hinzu, damit das Spiel weiß, wann es einen Gewinner verkünden soll.

- :ticket: Öffne die Kategorie ``||carnival:Carnival||`` und ziehe den
```block
carnival.startCountdownGame(60, carnival.WinTypes.Multi)
```
Block **ans Ende** des<br/>
``||loops(noclick):beim Start||`` <br/>
-Container, der schon im Arbeitsbereich ist.


Jetzt verkündet das Spiel nach 60 Sekunden den Gewinner!

Findest du heraus, wie du das Spiel länger oder kürzer machen kannst?



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})


//@highlight
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```




## {11. Geschafft}

**🎉 Super gemacht 🎉**

Du hast deine eigene Geburtstags-Schleifen-Schlacht fertiggestellt!

Wenn du so weit bist, melde dich an und klicke auf **Fertig**, um einen Freund oder eine Freundin online zu einer Mehrspieler-Schlacht herauszufordern!






```blockconfig.global

scene.setBackgroundImage(img`.`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})

bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```


```package
multiplayer
arcade-carnival=github:microsoft/arcade-carnival#v0.0.7
```

```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
sprites.launchBow()
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```





```customts
namespace SpriteKind {
    //% isKind
    export const Bow = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * just run the code
    */
    //% block="create player 1"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="create player 2"  weight=200
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap2(handler: () => void) {
        handler();
    }
}

namespace sprites{
    /**
    * Launches a new bow either to
    * the right or to the left
    */
    //% block="launch new bow"  weight=200
    export function launchBow () {
        let bow = sprites.create(assets.image`bow`, SpriteKind.Bow)
        bow.setPosition(80, 90)
        bow.setVelocity([-150, 150]._pickRandom(), [75, -75]._pickRandom())
        bow.setBounceOnWall(true)
    }
}

```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQZABkAAAAAu7u7CwAAAAAAAAAAAAAAAOvu7ru7u7u7uwAAAAAAAADr7u6+IiIiIiILAAAAAAAAu+7uviIiIiIiuwAAAAAAsEvu7u4rIiIiIrIAAAAAALBE6+7uKyIiIiIiCwAAAACwRLS7u7siIiIiIrIAAAAAsES0IiKyu7u7u7u7AAAAALBERCsiskREREREtAAAAACwREQrIrJERERERLQAAAAAsEREKyKyRERERES0AAAAALBERCsiskREREREtAAAAACwRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAsES0IiJLREREREQLAAAAALBEtCKyRERERES0AAAAAAAAS7QiskREREREtAAAAAAAALC7IrJERERERLQAAAAAAACwKyKyu7u7u7u7AAAAAAAAACsisgAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQZABkAAAAAAGtmtgAAAAAAAAAAAAAAALBrZra7u7u7u7sAAAAAAACwu2a2mZmZmZm5AAAAAAAAm7lmtpmZmZmZuQAAAAAAsJm5ZraZmZmZmbkAAAAAALCZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACwmblmZpuZmZmZmQsAAAAAsJmZa2a2mZmZmZm5AAAAALCZmWtmtpmZmZmZuQAAAACwmZlrZraZmZmZmbkAAAAAsJmZa2a2mZmZmZm5AAAAALCZuWZmtru7u7u7uwAAAACwmbm7u7tmZmZmZrYAAAAAsJmLiIhrZmZmZmYLAAAAALCbiIiIa2ZmZma2AAAAAAAAu4iIuGZmZmZmuwAAAAAAAIuIiLhmZmZmZgsAAAAAAACLiIi7u7u7u7sAAAAAAAAAu7u7CwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAsLsLAAAAAACw1b3MzAAAALBVvVvFDACwu1W7VdUMALu1u1VbvQywXbVVVbXLALBVtVVV1csAsFW1VVXVywCwXbURVbXLAAC7GxtVu70MALDbsbtb1QwAALBVvVXFDAAAsNW9zMwAAACwuwsAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bow\"\n    },\n    \"image3\": {\n        \"data\": \"hwSgAHgAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3dHd3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd0d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d0R0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dEd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsRERERERGx290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbG7290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbG7ERERERERu90d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0bERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxGxERERERsdsd3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxuxERERERsdsd3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b27GxERuxEREREREbsd3d3dEd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bsREbG7uxsRsREREREREbsd3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsbERERsRsRsRsREREREbEb3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbERERsbsREbsREREREbEb3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbEREREbEREbsREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERG7EREREbEbEbEREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1N0dERG7EREREbEbEbEbEREREREb3dHd3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dRN0dmRG7EREREbG7EbEbEREREREb3dHd3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3UTUXZSZmRGxERERERG7EREbEREREREbHd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URVWZSZmRGxGxERERG7EREbEREREREbHd3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2dkdERGxERERERG7EREbEREREREb0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTUQUERG5GxERERGxGxGxEREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVSVmZm5GxERERGxGxGxEREREREb3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RmZkZGxERERGxGxGxERERERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U3d3d2ZGRERGxERERGxGxGxGxERERER3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URUlZmZmRERuxERERGxGxGxERERERER3d3d3d0dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U1EldkRGRERuxERERGxGxGxEREREREb3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERGxERERERGxGxGxEREREb3d3d3RHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERuxERERERGxGxGxEREREb3d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZuxERERERGxGxGxERERER3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZGxERERERGxGxERERERER3d0d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1E3Z2ZmZERGxERERERGxGxEREREREb3d0R0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1UVZmZmRGxGxERERGxGxG7EREREREb3d3dEd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dVd0dmRGxGxERERGxGxG7EREREREb3d3dHdHd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3R3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERGxGxG7EREREREb3d3d3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERG7ERG7EREREREb3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dkRG7ERERERG7ERG7EREREREb3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVJSZmbEbEREREbG7ERG7EREREbEb3R3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVZ3ZmbEbEREREbEbEbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbsREbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsRERERsbsREbEbEREREbEbHd3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsRERERsRsREbsREREREbEb0d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsREbERuxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R2xGxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERsRsREREREbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERuxERERERsbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERGxGxERERERsdsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERG7ERERERERu90d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REbsbERERERERu90d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0Ru7sRERERERGx290d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3duxERERERERG73d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHREREREREbHb3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3RHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bday_bg\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"p1\":return img`\n.............bbbbbb......\n....bbbbbbbbb444444bb....\nbbbbb4444444444444444b...\nbeeb444444444444444444bb.\nbeeeeb4444444444444444bbb\nbeeeeebb4444bbbbbbbbbbb22\nbeeeeeb2bbbb2222222222222\nbeeeeeb222222222222222222\nbbeeeeb222222222222222222\n.bbbeeb2222222222222bbbbb\n.b22bbb22222bbbbbbbb444b.\n.b2222bbbbbb44444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n..bb222b444444444444444b.\n...bb22b444444444444bbbb.\n.....b2b4444bbbbbbbb.....\n......bbbbbb.............\n.........................\n`;\n            case \"image2\":\n            case \"p2\":return img`\n......bbbbbb.............\n....bb999999bbbbbbbbb....\n...b9999999999999999bbbbb\n.bb999999999999999999b88b\nbbb9999999999999999b8888b\n66bbbbbbbbbbb9999bb88888b\n6666666666666bbbb6b88888b\n666666666666666666b88888b\n666666666666666666b8888bb\nbbbbb6666666666666b88bbb.\n.b999bbbbbbbb66666bbb66b.\n.b99999999999bbbbbb6666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b666bb..\n.bbbb999999999999b66bb...\n.....bbbbbbbb9999b6b.....\n.............bbbbbb......\n.........................\n`;\n            case \"image4\":\n            case \"bow\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . b b b b . . . . . . \n. . . . . b d 5 5 d b . . . . . \n. . . . b b 5 5 5 5 b b . . . . \n. . . . b 5 5 5 5 5 b b . . . . \n. b b b b b b b b b 1 d b b b . \n. b 5 5 5 b 5 5 5 1 b 1 5 5 b . \n. b d 5 5 b 5 5 5 1 1 b 5 d b . \n. b d d b 5 5 5 5 5 5 b d d b . \n. . b b b 5 5 5 5 5 5 b b b . . \n. . c b 5 b 5 5 5 5 b b 5 c . . \n. . c 5 5 5 b d d b b 5 5 c . . \n. . c 5 5 d b b b b d 5 5 c . . \n. . c c d b c c c c b d c c . . \n. . . c c c . . . . c c c . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"bday_bg\":return img`\nd1dddddddddddddddddddddddddd1dddddddddddddddddddddddddddd11dddddddddddddddddddddddd1dddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddd1\nd11dddddddddddddddddddddddd11ddddddddddddddddddddddddddd1111dddddddddddddddddddddd11ddddddddddddddddddddddddd1111dddddddddddddddddddddddd11ddddddddddddddddddd11\nddd11dddddddddddddddddddddd111dddddddddddddddddddddddd11dddd11ddddddddddddddddddd1111dddddddddddddddddddddd11ddd1dddddddddddddddddddddd11d11ddddddddddddddddd11d\nddddd1dddddddddddddddddddd1dd11ddddddddddddddddddddd11ddddddd1dddddddddddddddddd1ddd11dddddddddddddddddddd1dddddd1dddddddddddddddddddd11ddd11ddddddddddddddd11dd\ndddddd1111dddddddddddddddd1ddd1dddddddddddddddddd111dddddddddd11ddddddddddddddd11dddd1ddddddddddddddddd111dddddddd1dddddddddddddddddd11dddd111ddddddddddddd11ddd\ndddddddddd111dddddddddddd1ddddd1ddddddddddddd1111ddddddddddddddd1dddddddddddddd1dddddd1dddddddddddddd11dddddddddddd11ddddddddddddddd1ddddddd1ddddddddddddd11dddd\nddddddddddddd1111ddddddd11dddddd11ddddddd1111dddddddddddddddddddd11ddddddddddd1ddddddd11dddddddddddd1dddddddddddddddd11ddddddddddd11ddddddddd1ddddddddddd11ddddd\nddddddddddddddddd1111dd1ddddddddd1ddd1111dddddddddddddddddddddddddd1ddddddddd11ddddddddd1dddddddd111ddddddddddddddddddd111ddddd111dddddddddddd1dddddddd11ddddddd\nddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddddd1111dddd11ddddddddddd11dddd11ddddddddddddddddddddddddd111111ddddddddddddddd1d111111ddddddddd\ndddddddddddddddddddddd1dddddddddddd11ddddddddddddddddddddddddddddddddddd111111111ddddddd1111111ddddddddddddddddddddddddddd1111dd11111111111111111ddddddddddddddd\ndddddddddddddddddddd11ddddddddddddddd11dddddddddddddddddddddddddddddddd111ddddddd1111111ddd1111ddddddddddddddddddddddddd111ddddddddddddddddddddd11dddddddddddddd\ndddddddddddddddddd11ddddddddddddddddddd11ddddddddddddddddddddddddddddd1dddddddddddddddddddddddd111111dddddddddddddddd111ddddddddddddddddddddddddd11ddddddddddddd\ndddddddddddddddd11ddddddddddddddddddddddd111ddddddddddddddddddddd11111ddddddddddddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddd111ddddddddddd\nddddddddddddddd1dddddddddddddddddddddddddddd11111dddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddd\ndddddddddddddd1dddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddd\nddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddd\ndddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dd\nddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11\nd111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ddddd444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd45dddddd44dddd44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddd54dddd45ddddd44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44d99ddddd55ddddd55dddd45ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd455dd44dd99dd44d55dddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd449d44dd99dd55d9ddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd45dd9ddd5599ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd451991119999ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd119911191991119999111119dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111199911199999119999911119911ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111999111991911199999111999111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111991111199111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb111111119911111999111111bbbbb1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1bbbbbb111199911111991111bbbbb1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bbbbbbbbb111111111bbbbbb111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111b1bbbbbbbbbbbbbbb111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111bb1bb11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111b11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddb111bb1111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bb111111111111111111111111111111111b111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bb11111111111111111111111111111111bb11111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111bbb1111111111111111111111111111bbb111111bb1dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111bbb111111111111111111111111111bbb111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1bb1111111bbbbb111111111111111111111bbbb1111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbb1111111bbbbbb1111111111111111bbbb11111111bb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbbbb1111111bbbbbbbbbbb11111bbbbbbb11111111bb1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11111bbb1111111111bbbbbbbbbbbbbbbb1111111111bb11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bbbb111111111111111111111111111111111bb111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111bbb1111111111111111111111111111bbbb1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111bbbbb1111111111111111111111bbbbbb11111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111bbbbbb11111111111bbbbbbbbbb11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111bbbbbbbbbbbbbbbbbbb11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111b11bbb11111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b111111111111111111111111111111111111111111111111bdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b11111111111111111111111111111111111111111111111bbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111111111111111111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111111111111bbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb1111111111111111111111111111111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb11111111111111111111111111111111bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbb11111111111111111111111bbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb111bbb11bbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\ndddddddd111dddddddddddddddd11dddddddddddddddddd11ddddddddddddddddddddd1dddddddddddddddddddddd1dddddddddddddddddddd1dddddddddddddddddd1ddddddddddddddddd1dddddddd\ndddddd11ddddddddddddddd1111dddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd1dddddddddddddddddddd1ddddddddddddddddd11ddddddddddddddddd1ddddddddd\nddd111dddddddddddddd111dddddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd11dddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1dddddddddd\nd11ddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddddd1ddddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1ddddddddddd\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"+L@37OtAh-@U(h02.~C$\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"@fwth9I9VWKqCr_!k|C9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"QPxgI^19#P;R}ei9=H2(\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"Ib.*;}fFz`nX|a@Cv;48\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"tcGjS24Brz2f(}-2+.XM\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"9.C(:PBLZKYxNFd,AKyu\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"OEG4MWTI*GLfJSeT.eKN\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\":Ea#$n1nPt))9F=Z/B8U\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"@TbO|viA(x*OE^l~VAg{\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"b?V9^K)TLR$a`X?r]10S\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"~`%]c#P#JSb~yB6]osqs\">Moon</variable><variable type=\"KIND_SpriteKind\" id=\"`?JC.+4w3G#`B^^UK3)w\">Player1</variable><variable type=\"KIND_SpriteKind\" id=\")_!+w|]NQZ!.O,ZS.xVL\">Player2</variable><variable type=\"KIND_SpriteKind\" id=\"~r#(!_OeEM1Z7FwJL$QR\">Bow</variable><variable type=\"KIND_MultiplayerState\" id=\"0#~~A-8S60wBa$/tC#P;\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"T5n~2=KNl^tW;jE`-$wd\">life</variable><variable id=\".epr(Ghbmrv^*wX6Mxo`\">player_1</variable><variable id=\";8}vvBtXl8A!el%7ZzR)\">player_2</variable><variable id=\"oVpxnQ_d;[r?R`8=k|a~\">mySprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Birthday Bow Battle Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.22\",\n        \"tag\": \"v1.12.22\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5a74c95efabdfb2d0d4e687bbbf662ac2532527d\",\n        \"target\": \"1.12.22\",\n        \"pxt\": \"8.5.32\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
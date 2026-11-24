# Winter



## {Einführung @unplugged}

Hilf Leftie und Rightie, in ihrem Winterwunderland Schneeflocken zu fangen!

![Lass es schneien!](/static/tutorials/winter/winter.gif "Das bauen wir heute!" )



## {Schritt 2}

Das Wichtigste zuerst: Klicke auf deine Spielkonsole und finde heraus, was passiert, wenn du den Knopf (A) drückst.  Wenn du fertig bist, klicke auf das Symbol **Anleitung**, um zurückzukommen und zu erfahren, wie es weitergeht.


![So kommst du zurück zur Anleitung](/static/tutorials/winter/inst-toggle.gif "Wechsle von der Konsole zur Anleitung." )




## {Schritt 3}

Die Schneemänner wollen beim Springen Schneeflocken fangen, aber weit und breit ist keine Flocke zu sehen.

**Lass uns einen Schneesturm machen!**

---

- :paper plane : Zieh aus ``||sprites: Sprites||`` den Block <br/>
``||variables(sprites):setze [projektil] auf Projektil [ ] von der Seite mit vx [50] vy [50]||`` <br/>
in den leeren Container <br/>
``||game:wenn Spielupdate alle [300] ms||``. <br/>


- :paint brush: Klicke auf das leere graue Feld und wechsle zu **Meine Assets**, um eine Schneeflocke hinzuzufügen.


![So geht's](/static/tutorials/winter/choose-snow.gif "So funktioniert dieser Schritt." )


```blocks
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(assets.image`snowflake1`, 50,50)
})
```

---

![So geht's](/static/tutorials/winter/choose-snow.gif "So funktioniert dieser Schritt." )



## {Schritt 4}

**Probier dein Spiel im Spielfenster aus (unten rechts)**  
![Geh im Editor zum Spielfenster.](/static/skillmap/assets/game-win-tab.png "Vergiss nicht, dir dein Spiel anzuschauen!")

---

Jetzt haben wir ein Spiel!<br/>
Aber ... die Schneeflocken kommen nie bei Rightie an. Das ändern wir jetzt.



## {Schritt 5}

Lass uns den ganzen Schnee von der Seite des Bildschirms hereinschicken.

---

- :mouse pointer: Suche den Block <br/>
``||variables(sprites):setze [projektil] auf Projektil [❄️] von der Seite mit vx [50] vy [50]||`` <br/>
im Arbeitsbereich und ändere **vy** auf **0**.


- :calculator: Zieh aus der Kategorie ``||math:Mathematik||`` <br/>
den Block ``||math: wähle eine zufällige Zahl von [0] bis [10]||`` <br/>
herüber und ersetze damit den Wert für **vx**.

- :mouse pointer: Ändere das Minimum und Maximum der Zufallszahl auf **-125** und **125**.

![Zieh den Zufallsblock aus der Kategorie Mathematik in vx](/static/tutorials/winter/random.gif "So fügst du eine Zufallszahl hinzu." )


```blocks
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(assets.image`snowflake1`, randint(-125, 125), 0)
})
```

---

![Zieh den Zufallsblock aus der Kategorie Mathematik in vx](/static/tutorials/winter/random.gif "So fügst du eine Zufallszahl hinzu." )


## {Schritt 6}

Hm, jetzt fliegen die Schneeflocken nur ganz oben über den Bildschirm.  Lass uns jede Schneeflocke auf eine zufällige Höhe setzen.

---

- :paper plane: Zieh aus ``||sprites:Sprites||`` den Block <br/>
``||sprites:setze [meinSprite] [x] auf [0]||`` <br/>
in den Container **wenn Spielupdate**.


- :mouse pointer: Damit dieser Block mit der Schneeflocke arbeitet, klicke auf
``||variables(noclick):meinSprite||`` und ändere es im Dropdown-Menü in ``||variables(noclick):projektil||``.

- :mouse pointer: Um die Position nach oben und unten auf dem Bildschirm zu ändern, klicke auf ``||sprites:x||`` und ändere es im Dropdown-Menü in ``||sprites:y||``


```blocks
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(assets.image`snowflake1`, randint(-125, 125), 0)
    snowflake.y = 0
})
```


## {Schritt 7}


- :calculator: Damit die Schneeflocken auf einer zufälligen Höhe hereinfliegen, zieh <br/>
``||math:wähle eine zufällige Zahl von [0] bis [10]||`` <br/>
in den Block<br/>
``||sprites:setze [projektil] [y] auf [0]||``<br/>
und ersetze damit die **0**.


- :mouse pointer: Damit die Schneeflocken nur zwischen der Oberkante der Wippe und der Unterseite des Astes fliegen, ändere die Zufallszahlen auf **30** bis **80**.

![Zieh den Zufallsblock aus der Kategorie Mathematik in den y-Wert](/static/tutorials/winter/change-height.gif "So fügst du eine Zufallszahl hinzu." )


```blocks
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(assets.image`snowflake1`, randint(-125, 125), 0)
    snowflake.y = randint(30, 80)
})
```

## {Schritt 8}

Damit dein Spiel noch besonderer wird, kannst du eigene Schneeflocken hinzufügen!

---

- :bolt: Um mehr Schneeflocken ins Spiel zu bringen, klicke auf die Kategorie **Simplified** und zieh <br/>
``||simplified: choose one of [ ] [ ] +||`` <br/>
herüber, um damit die Schneeflocke in deinem roten Block **setze projektil** zu ersetzen.

- :mouse pointer: Klicke auf jedes leere graue Feld und wähle (_oder zeichne_) eine neue Schneeflocke.<br/>
_💡 Du kannst auf das Pluszeichen rechts am Block <br/>
``||simplified: choose one of [ ] [ ] +||`` <br/>
klicken, um weitere leere Felder hinzuzufügen._

![Füge mehr Schneeflocken hinzu](/static/tutorials/winter/random-img.gif "So fügst du eine zufällige Bildauswahl hinzu." )


```blocks
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(simplified.chooseRandomImage(assets.image`snowflake1`, img`
. d . . d . d . . d . .
d 1 d . d 1 d 9 d 1 d .
. d . d d . d 9 . d . .
. d 9 1 d 1 . 1 d . . .
1 . 1 . 1 . 1 9 d d d .
. d 9 d . 1 . 1 . 1 . 1
. . . 9 1 . 1 d d 9 d .
. . d . d 1 d . 9 . . .
. d 1 d 9 . d d 1 d . .
d . d . 9 1 d . d . d .
. d . . d . d . . d . .
. . . . . 1 . . . . . .
`, img`
. . . 9 . 9 . 9
9 . . . 1 . 1 .
. 1 . 1 . 1 . .
9 . 1 . 1 . . .
. 1 . 1 . 1 . 9
9 . 1 . 9 . 1 .
. 1 . . 1 . . 9
. . 9 . . 9 1 .
`), randint(-125, 125), 0)
    snowflake.y = randint(30, 80)
})
```


## {Geschafft}

**❄️ Geschafft ❄️**

---

Probier es jetzt auf dem Spielbildschirm aus! Siehst du alle deine Schneeflocken?

Wie viele kannst du fangen, bevor die Zeit abläuft?

Wenn du fertig gespielt hast, klicke auf **Fertig** und teile dein Spiel mit Familie und Freunden!


```template
game.onUpdateInterval(300, function () {

})
```

```ghost
let leftie: Sprite = null
game.onUpdateInterval(300, function () {
    let snowflake = sprites.createProjectileFromSide(assets.image`snowflake1`, randint(-125, 125), 0)
    snowflake.y = randint(30, 80)
})
scene.setBackgroundColor(10)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    leftie.setImage(img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bbb335c.
        cdcccdddddb55bb5bb3335c.
        cddbddddddb555bb5b3335c.
        cddddddddddb5555b53335c.
        ccddddddbd55bb55c5555c..
        .ccddddbbbdd55cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `)
})
```


```customts
namespace SpriteKind {
    export const Snowperson = SpriteKind.create()
    export const Active = SpriteKind.create()
}
namespace wintertutorial {
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (active.bottom < 33) {
            active.vy = 250
        }
    })
    sprites.onOverlap(SpriteKind.Active, SpriteKind.Projectile, function (sprite, anderesSprite) {
        anderesSprite.destroy()
        info.changeScoreBy(1)
    })
    info.onCountdownEnd(function () {
        game.gameOver(true)
    })
    scene.onHitWall(SpriteKind.Active, function (sprite, location) {
        sprite.vy = 0
        if (tiles.tileAtLocationEquals(location, assets.tile`platform1`)) {
            active = rightie
            sprite.setKind(SpriteKind.Snowperson)
            seesaw.setImage(assets.image`tiltLeft`)
        } else if (tiles.tileAtLocationEquals(location, assets.tile`platform2`)) {
            active = leftie
            sprite.setKind(SpriteKind.Snowperson)
            seesaw.setImage(assets.image`lessTilt`)
        }
        active.vy = -250
        active.setKind(SpriteKind.Active)
    })
    let seesaw: Sprite = null
    let active: Sprite = null
    let rightie: Sprite = null
    let leftie: Sprite = null
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level1`)
    leftie = sprites.create(assets.image`leftie`, SpriteKind.Active)
    leftie.setPosition(20, 7)
    rightie = sprites.create(assets.image`rightie`, SpriteKind.Snowperson)
    rightie.setPosition(140, 104)
    active = leftie
    seesaw = sprites.create(assets.image`tiltRight`, SpriteKind.Player)
    seesaw.bottom = 120
    game.splash("Press the (A) button to", "jump and catch snowflakes!")
    info.startCountdown(15)
}
```


```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQIAAgAAAAAEBAAEAABAAAQABABAQEBEBAQEAEAAQAAEAABAAEBAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"snowflake1\"\n    },\n    \"]7PQ2-*{{~]py=iF[~r#\": {\n        \"data\": \"hwSgACAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAABEAAAAAAAAADgAAAAAAEBARAAAAAAAAAA4AAAAAABHRHQAAAAAAAADgAAAAABER0REAAAAAAAAA4AAAABEdEdERAAAAAAAAAOAAAAARHRHdEQAAAAAAAADgAAAQER0RHREAAAAAAAAAu7sAEdEdER0RAAAAAAAAALu7ERHdEdEdEQAAAAAAAAC7uxER3RHREREAAAAAAAAAu7sAEdER0RERAAAAAAAAAAAOABDREREdEQAAAAAAAAAADgAA0R0R0REAAAAAAAAAAA4AABEdEdERAAAAAAAAAADgAAAQERHdEQAAAAAAAAAA4AAAAAERHREAAAAAAAAAAOAAAAAAABERAAAAAAAAAADgAAAAAAAQEQAAAAAAAAAA4AAAAAAAABAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADg\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"tiltRight\"\n    },\n    \"7jH`2dH$3O%eu)}y/t7}\": {\n        \"data\": \"hwSgACAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAABEAAAAAAAAAAOAAAAAAEBARAAAAAAAAAADgAAAAABHRHQAAAAAAAAAA4AAAABER0REAAAAAAAAAAA4AABEdEdERAAAAAAAAAAAOAAARHRHdEQAAAAAAAAAADgAQER0RHREAAAAAAAAAu7sAEdEdER0RAAAAAAAAALu7ERHdEdEdEQAAAAAAAAC7uxER3RHREREAAAAAAAAAu7sAEdER0RERAAAAAAAAAOAAABDREREdEQAAAAAAAADgAAAA0R0R0REAAAAAAAAA4AAAABEdEdERAAAAAAAAAOAAAAAQERHdEQAAAAAAAAAOAAAAAAERHREAAAAAAAAADgAAAAAAABERAAAAAAAAAA4AAAAAAAAQEQAAAAAAAAAOAAAAAAAAABAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"tiltLeft\"\n    },\n    \"0Sl|Ag?-%VgN*Ar!yH]\": {\n        \"data\": \"hwSgACAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAABEAAAAAAAAADgAAAAAAEBARAAAAAAAAAA4AAAAAABHRHQAAAAAAAADgAAAAABER0REAAAAAAAAA4AAAABEdEdERAAAAAAAAAOAAAAARHRHdEQAAAAAAAADgAAAQER0RHREAAAAAAAAAu7sAEdEdER0RAAAAAAAAALu7ERHdEdEdEQAAAAAAAAC7uxER3RHREREAAAAAAAAAu7sAEdER0RERAAAAAAAAAAAOABDREREdEQAAAAAAAAAADgAA0R0R0REAAAAAAAAAAA4AABEdEdERAAAAAAAAAADgAAAQERHdEQAAAAAAAAAA4AAAAAERHREAAAAAAAAAAOAAAAAAABERAAAAAAAAAADgAAAAAAAQEQAAAAAAAAAA4AAAAAAAABAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADg\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"lessTilt\"\n    },\n    \"tw)YMb%W\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAA8PAAAAAAAAAAAAAAAP8AALC7AAAAAAAAAPAPsNvduwAAAAAAAAD/293d3QsAAAK7uwv7HdHR3b0AACId3SsdERER3b0AICcSES3SERER0b0gchIR8dEiERIR3b0AIhEfEd8i0SIR0b0AIBFBFN9yLRIR3b0AsBFPFN8nIhER0b0AsBER9NFy0hER0b0AsBERFCHSIh0R0b0AALsRESEdIdIR0b0AAAC7uwv7ESIREb0AAAAAAAD/GxIREQsAAAAAAAAPsBsRuwAAAAAAAPAPALC7AAAAAAAAAAAPAAAAAAAAAAAAAAAPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPDwAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"leftie\"\n    },\n    \"r|f$7wl#Q\": {\n        \"data\": \"hwQYABgAAAAAAAAAAPAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAD/AAAAAAAAAAAAAPAPAMDMAAAAAAAAAAAPwNzdzAAAAAAAAADP3NLd3QwAAADMzAz83SLd3c0AAMwdES3dLRLR3c0AwB0RESHSIhER3c0AwBER9BFy0hER3c0AwBFPFB8nIh0R3c0AwBFBER9yIdIR3c3wzxEfER8iESIR3c0A/xER8REiERIR0c3w/x8RESESERER0c3w//cRESEREREREc3/f//PzAz8HREREc3//wAPAAD/HBEREQz/DwAAAPAPwBwRzAAAAAAA8A8AAMDMAAAAAAAA//AAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"rightie\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"snowflake1\":return img`\n. . . 1 . 1 . . \n. 1 . . 1 . . . \n. . . 1 . . . 1 \n1 . 1 . 1 . 1 . \n. 1 . 1 . 1 . 1 \n1 . . . 1 . . . \n. . . 1 . . 1 . \n. . 1 . 1 . . . \n`;\n            case \"]7PQ2-*{{~]py=iF[~r#\":\n            case \"tiltRight\":return img`\neee.............................................................................................................................................................\n...eeeee........................................................................................................................................................\n........eeeee...................................................................................................................................................\n.............eeeee..............................................................................................................................................\n..................eeeeee........................................................................................................................................\n........................eeeee...................................................................................................................................\n.............................eeeee..............................................................................................................................\n..................................eeeee.........................................................................................................................\n.......................................eeeee....................................................................................................................\n............................................eeeee...............................................................................................................\n.................................................eeeee..........................................................................................................\n......................................................eeeee.....................................................................................................\n...........................................................eeeeee...............................................................................................\n.................................................................eeee...........................................................................................\n.....................................................................eeeee....bbbb..............................................................................\n..........................................................................eeeebbbb..............................................................................\n..............................................................................bbbbeee...........................................................................\n..............................................................................bbbb...eeeee......................................................................\n...............................................................................11.........eeeee.................................................................\n...............................................................................11..............eeeeee...........................................................\n..............................................................................1111...................eeeee......................................................\n.............................................................................111111.......................eeeee.................................................\n...........................................................................1111dd1111..........................eeeee............................................\n...........................................................................111dddddd11..............................eeeee.......................................\n..........................................................................1dddd1111dd11..................................eeeee..................................\n..........................................................................111111111111........................................eeeee.............................\n.........................................................................11111111111111............................................eeeee........................\n........................................................................1111111ddd11111.................................................eeeeee..................\n.........................................................................111dddd11d11dd1......................................................eeeee.............\n........................................................................1dddd111111ddd111..........................................................eeeee........\n.......................................................................11d111111111111111...............................................................eeeee...\n.......................................................................1111111111111111111...................................................................eee\n`;\n            case \"7jH`2dH$3O%eu)}y/t7}\":\n            case \"tiltLeft\":return img`\n.............................................................................................................................................................eee\n........................................................................................................................................................eeeee...\n...................................................................................................................................................eeeee........\n..............................................................................................................................................eeeee.............\n........................................................................................................................................eeeeee..................\n...................................................................................................................................eeeee........................\n..............................................................................................................................eeeee.............................\n.........................................................................................................................eeeee..................................\n....................................................................................................................eeeee.......................................\n...............................................................................................................eeeee............................................\n..........................................................................................................eeeee.................................................\n.....................................................................................................eeeee......................................................\n...............................................................................................eeeeee...........................................................\n...........................................................................................eeee.................................................................\n..............................................................................bbbb....eeeee.....................................................................\n..............................................................................bbbbeeee..........................................................................\n...........................................................................eeebbbb..............................................................................\n......................................................................eeeee...bbbb..............................................................................\n.................................................................eeeee.........11...............................................................................\n...........................................................eeeeee..............11...............................................................................\n......................................................eeeee...................1111..............................................................................\n.................................................eeeee.......................111111.............................................................................\n............................................eeeee..........................1111dd1111...........................................................................\n.......................................eeeee...............................111dddddd11..........................................................................\n..................................eeeee...................................1dddd1111dd11.........................................................................\n.............................eeeee........................................111111111111..........................................................................\n........................eeeee............................................11111111111111.........................................................................\n..................eeeeee................................................1111111ddd11111.........................................................................\n.............eeeee.......................................................111dddd11d11dd1........................................................................\n........eeeee...........................................................1dddd111111ddd111.......................................................................\n...eeeee...............................................................11d111111111111111.......................................................................\neee....................................................................1111111111111111111......................................................................\n`;\n            case \"0Sl|Ag?-%VgN*Ar!yH]\":\n            case \"lessTilt\":return img`\neee.............................................................................................................................................................\n...eeeee........................................................................................................................................................\n........eeeee...................................................................................................................................................\n.............eeeee..............................................................................................................................................\n..................eeeeee........................................................................................................................................\n........................eeeee...................................................................................................................................\n.............................eeeee..............................................................................................................................\n..................................eeeee.........................................................................................................................\n.......................................eeeee....................................................................................................................\n............................................eeeee...............................................................................................................\n.................................................eeeee..........................................................................................................\n......................................................eeeee.....................................................................................................\n...........................................................eeeeee...............................................................................................\n.................................................................eeee...........................................................................................\n.....................................................................eeeee....bbbb..............................................................................\n..........................................................................eeeebbbb..............................................................................\n..............................................................................bbbbeee...........................................................................\n..............................................................................bbbb...eeeee......................................................................\n...............................................................................11.........eeeee.................................................................\n...............................................................................11..............eeeeee...........................................................\n..............................................................................1111...................eeeee......................................................\n.............................................................................111111.......................eeeee.................................................\n...........................................................................1111dd1111..........................eeeee............................................\n...........................................................................111dddddd11..............................eeeee.......................................\n..........................................................................1dddd1111dd11..................................eeeee..................................\n..........................................................................111111111111........................................eeeee.............................\n.........................................................................11111111111111............................................eeeee........................\n........................................................................1111111ddd11111.................................................eeeeee..................\n.........................................................................111dddd11d11dd1......................................................eeeee.............\n........................................................................1dddd111111ddd111..........................................................eeeee........\n.......................................................................11d111111111111111...............................................................eeeee...\n.......................................................................1111111111111111111...................................................................eee\n`;\n            case \"tw)YMb%W\":\n            case \"leftie\":return img`\n........................\n.........2..............\n.........22.............\n........2722bbb.........\n......227211111b........\n.......22111111b........\n......bd21f1f111b.......\n......b111144111b.......\n.f....bd11144441b.......\n..f...bd1f111f11b.......\n...f..bbd1fff111b.......\n..fff..22ddddd22...f..ff\n....ffbd2222722dbffffff.\n.....ff1d22727d1ff.....f\n.....bd1111d22211b......\n....bd1111d22d2211b.....\n....bd11122211d222b.....\n...bddd11121111d211b....\n...bdd1111111111111b....\n...bddd111111111111b....\n....bddd1d1d111111b.....\n....bddddddddddd11b.....\n.....bdddddddddddb......\n......bbbbbbbbbbb.......\n`;\n            case \"r|f$7wl#Q\":\n            case \"rightie\":return img`\n.................fff....\n.............f.fffff....\n.............fffffff....\n.........cccccfff7f.....\n........cd11111f7f......\n........c1111111ff......\n.......cd11f1f111ff.....\n.......c111441111c......\n.......c114411111c...ff.\n.......c11f111f11c..ff..\n.......cd11fff111c..f...\nf...f...221111122..f.f..\n.ffffffcd22722221cff....\n...f..cfdd7272211ff.....\n......cdd22211111dc.....\n.....cdd22d22111111c....\n.....c22211d2221111c....\n....cdd21111d2111111c...\n....cddd111111111111c...\n....cdddd11111111111c...\n.....cdddddddd11111c....\n.....cdddddddddd111c....\n......cdddddddddddc.....\n.......ccccccccccc......\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"z3GzZoJYWC$znobE{d#2\">active</variable><variable id=\"B}Uc1PVr3sG^G?F;woVT\">rightie</variable><variable id=\"%V5/g^O8_vA0A@X!b7yl\">seesaw</variable><variable id=\"K8=RKkOs?3^dnULxjSxC\">leftie</variable><variable id=\"5rp3u|]FGhglL!+kG8P;\">snowflake</variable><variable type=\"KIND_SpriteKind\" id=\"Hd[5v~wyE9I^eZkF-?|^\">Snowperson</variable><variable type=\"KIND_SpriteKind\" id=\"a%7G$4R*v{$_meg[u_[V\">Active</variable><variable type=\"KIND_SpriteKind\" id=\"lo@:U,fw=W,4LBgqdiG~\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"~WQH-s#.5?Mxch2@*U=p\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"GmpfmztvLoUV`gJbqTXY\">Food</variable><variable type=\"KIND_SpriteKind\" id=\")I2gy2IAqQEK.zyg.-f4\">Enemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundcolor\"><value name=\"color\"><shadow type=\"colorindexpicker\"><field name=\"index\">9</field></shadow></value><next><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data><next><block type=\"variables_set\"><field name=\"VAR\" id=\"K8=RKkOs?3^dnULxjSxC\">leftie</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`leftie`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.tw)YMb%W\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Active</field></shadow></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"K8=RKkOs?3^dnULxjSxC\">leftie</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"><field name=\"index\">15</field></shadow></value><value name=\"y\"><shadow type=\"positionPicker\"><field name=\"index\">7</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"B}Uc1PVr3sG^G?F;woVT\">rightie</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`rightie`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.r|f$7wl#Q\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Snowperson</field></shadow></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"B}Uc1PVr3sG^G?F;woVT\">rightie</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"><field name=\"index\">140</field></shadow></value><value name=\"y\"><shadow type=\"positionPicker\"><field name=\"index\">104</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"K8=RKkOs?3^dnULxjSxC\">leftie</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"%V5/g^O8_vA0A@X!b7yl\">seesaw</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`tiltRight`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.]7PQ2-*{{~]py=iF[~r#\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.bottom@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"%V5/g^O8_vA0A@X!b7yl\">seesaw</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">120</field></shadow></value><next><block type=\"gamecountdown\"><value name=\"duration\"><shadow type=\"math_number\"><field name=\"NUM\">30</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"gameinterval\" x=\"686\" y=\"0\"><value name=\"period\"><shadow type=\"timePicker\"><field name=\"ms\">300</field></shadow></value><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"5rp3u|]FGhglL!+kG8P;\">snowflake</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`snowflake1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image1\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"/><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">-125</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">125</field></shadow></value></block></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"5rp3u|]FGhglL!+kG8P;\">snowflake</field></block></value><value name=\"value\"><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">30</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">80</field></shadow></value></block></value></block></next></block></statement></block><block type=\"keyonevent\" x=\"1747\" y=\"0\"><field name=\"button\">controller.A</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"controls_if\"><value name=\"IF0\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"Sprite_blockCombine_get\"><field name=\"property\">Sprite.bottom</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field></block></value></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">33</field></shadow></value></block></value><statement name=\"DO0\"><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.vy@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">250</field></shadow></value></block></statement></block></statement></block><block type=\"spriteshitwall\" x=\"0\" y=\"669\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Active</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_location\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"tiles.Location\"/><field name=\"VALUE\">location</field></shadow></value><statement name=\"HANDLER\"><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.vy@set</field><value name=\"mySprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value><next><block type=\"controls_if\"><mutation elseif=\"1\"/><value name=\"IF0\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"maplocationistile\"><value name=\"location\"><shadow type=\"mapgettile\"/><block type=\"argument_reporter_custom\"><mutation typename=\"tiles.Location\"/><field name=\"VALUE\">location</field></block></value><value name=\"tile\"><shadow type=\"tileset_tile_picker\"><field name=\"tile\">assets.tile`platform1`</field></shadow></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"B}Uc1PVr3sG^G?F;woVT\">rightie</field></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Snowperson</field></shadow></value><next><block type=\"spritesetimage\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"%V5/g^O8_vA0A@X!b7yl\">seesaw</field></block></value><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`tiltLeft`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.7jH`2dH$3O%eu)}y/t7}\"}}</data></shadow></value></block></next></block></next></block></statement><value name=\"IF1\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"maplocationistile\"><value name=\"location\"><shadow type=\"mapgettile\"/><block type=\"argument_reporter_custom\"><mutation typename=\"tiles.Location\"/><field name=\"VALUE\">location</field></block></value><value name=\"tile\"><shadow type=\"tileset_tile_picker\"><field name=\"tile\">assets.tile`platform2`</field></shadow></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"K8=RKkOs?3^dnULxjSxC\">leftie</field></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Snowperson</field></shadow></value><next><block type=\"spritesetimage\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"%V5/g^O8_vA0A@X!b7yl\">seesaw</field></block></value><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`lessTilt`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.0Sl|Ag?-%VgN*Ar!yH]\"}}</data></shadow></value></block></next></block></next></block></statement><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.vy@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-250</field></shadow></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"z3GzZoJYWC$znobE{d#2\">active</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Active</field></shadow></value></block></next></block></next></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"659\" y=\"669\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Active</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">anderesSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Projectile</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">anderesSprite</field></block></value><next><block type=\"hudChangeScoreBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block></next></block></statement></block><block type=\"gamecountdownevent\" x=\"590\" y=\"890\"><statement name=\"HANDLER\"><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">true</field></shadow></value></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"winter - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.5.28\",\n        \"tag\": \"v1.5.28\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/67a784863907175d7e4ec434adfb6ef40b5b2f95\",\n        \"target\": \"1.5.28\",\n        \"pxt\": \"7.1.5\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAEBERHREdEQAREdEdER0RANERER0RHREQHREREREdERAdERERER0REdEREdERHRHR0RER3REdEdHREdEdER0R3dER0RERHRHd0RHREREdEdHREdERER0R0NEd0R3RHREQ0RERHdEREQDREREd0RERANERER3REREAERERHREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"platform1\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAERER0REREQARERHRERERABEdEd0REREQER0RHREREdEdHREdERER0RERER0RERERER0RHRERERERHREdEREREBEdEdERERHQHd0R0REREdAR0RHRERER0B3REREdEREQHdERER0RERAd0RHREREREB3REdEREREQHdER0REREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"platform2\"\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAAAAAABABAAAAAAAAEAEAAAAAAAAQAQAAAAAAABABAAAAAAAAEAEAAAAAAAAQAQAAAAAAABABAAAAAAAAEAEAAAAAAAAQAQAAAAAAABABAAAAAAAAEAEAAAAAAAAQAQAAAAAAABABAAAAAAAAEAEAAAAAAAAQAQAAAAAAABABAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"branch tile\"\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile2\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDA0MDQwNDA0MDQwNDA0MDQwNDA0MDUwNTA1MDEwMTAxMDEwNTA1MDUwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAzMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\",\n            \"myTiles.tile5\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a0008000404040404040404040405050501010101050505010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010101010301`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n2 2 2 2 2 2 2 2 2 2 \n`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"platform1\":\n            case \"tile2\":return tile2;\n            case \"platform2\":\n            case \"tile3\":return tile3;\n            case \"branch tile\":\n            case \"tile5\":return tile5;\n            case \"myTile\":\n            case \"tile1\":return tile1;\n            case \"myTile2\":\n            case \"tile4\":return tile4;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

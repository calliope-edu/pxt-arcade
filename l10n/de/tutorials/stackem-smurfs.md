# Schlümpfe stapeln
### @explicitHints true

## Einführung @showdialog

Hier ist etwas ziemlich Schlumpfiges im Gange!

![Programmiere ein Spiel mit den Schlümpfen](/static/tutorials/stackem-smurfs/stackem-smurfs.gif "Eine Animation von Schlümpfen, die in einem Beispielspiel vom Himmel fallen.")

In dieser Anleitung lernst du, wie du dein ganz eigenes Arcade-Spiel im Retro-Stil programmierst – mit den Schlümpfen!




## {2. Dein erster Block}

**Bereit zum Programmieren?**

Lass uns zum Start einen Schlumpf auf den Boden setzen.


---


- :sun: Öffne die Kategorie ``||smurfy: Smurfy||`` **im Werkzeugkasten** und nimm dir <br/>
``||smurfy:set first Smurf||``.<br/>
Stecke ihn in den leeren <br/>
``||loops(noclick): beim Start||`` <br/>
Block, der schon im Arbeitsbereich liegt.


💡 _Du kannst auf das Bild des Schlumpfs klicken, wenn du einen anderen auswählen möchtest!_

---


~hint Was bedeutet das? 🤷🏽

---

In den Anleitungen färben wir manche Wörter ein, damit du besser erkennst, wonach du suchst.

Wenn wir zum Beispiel den <br/>
``||smurfy:set first Smurf||``<br/>
Block vorschlagen, meinen wir diesen hier: <br/>

```block
smurfy.set_first_smurf(assets.image`jump`)
```

hint~



#### ~ tutorialhint

```blocks
//@highlight
smurfy.set_first_smurf(assets.image`jump`)
```




## {3. Schau auf deinen Bildschirm!}


- :binoculars: Sieh dir dein Projekt im Spielfenster an, um zu sehen, was dein Code bewirkt hat.

Du solltest einen Schlumpf auf dem Boden sitzen sehen.

---

![Das Spielfenster ist in der unteren linken Ecke](/static/tutorials/stackem-smurfs/game.jpg "Dein Spiel wird nach jedem Schritt automatisch in diesem Fenster geladen.")


## {4. Etwas Farbe}

Es ist ein bisschen dunkel. Lass uns etwas Farbe hinzufügen!

---

- :tree: Ziehe aus der Kategorie `||scene:Szene||`<br/>
`||scene:setze Hintergrundfarbe auf||`<br/>
in den `||loops(noclick):beim Start||`-Block.

💡 _Wenn du möchtest, kannst du auf das Farbfeld im Block klicken,
um eine neue Hintergrundfarbe auszuwählen._



#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
//@highlight
scene.setBackgroundColor(13)
```


## {5. Je mehr, desto besser}

Jetzt brauchen wir einen Schlumpf zum Stapeln!

---

-  :sun: Ziehe aus der Kategorie `||smurfy:Smurfy||`<br/>
`||smurfy:new floating Smurf||`<br/>
und stecke ihn **ans Ende** des `||loops(noclick):beim Start||`-Containers.



~hint Warum ans Ende? 🤷🏽‍♂️

---

Der Code, den wir schreiben, läuft innerhalb seines Containers von oben nach unten ab.
Weil der fallende Schlumpf einen anderen Schlumpf braucht, auf dem er landen kann, muss dieser Block
**nach** dem Block kommen, in dem wir den ersten Schlumpf setzen.

hint~


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
//@highlight
smurfy.add_floating_smurf()
```



## {6. Bereit zum Fallenlassen?}

Wir haben einen schwebenden Schlumpf – jetzt müssen wir dem Computer sagen, wann er ihn fallen lassen soll!

---

- :game: Nimm aus der Kategorie `||controller:Controller||`<br/>
`||controller:wenn A Knopf gedrückt||`<br/>
und lege ihn in **einen freien Bereich** des Arbeitsbereichs.

- :sun: Geh jetzt zu `||smurfy:Smurfy||` und ziehe<br/>
`||smurfy:drop Smurf||`<br/>
in den leeren<br/>
`||controller(noclick):wenn A Knopf gedrückt||`<br/>
Container, der jetzt im Arbeitsbereich liegt.

---

Probier dein Spiel aus! Du solltest deinen Schlumpf fallen lassen können, indem du im Spielfenster den (A)-Knopf
oder auf deiner Tastatur die **Leertaste** drückst.


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    smurfy.drop_smurf()
})
```



## {7. Mehr Spannung}

Lass uns mit Soundeffekten für Wirkung sorgen!

---

- :headphones: Suche dir in der Kategorie `||music:Musik||` einen Block aus, der dir gefällt, und
lege ihn irgendwo in den<br/>
`||controller(noclick):wenn A Knopf gedrückt||`<br/>
Container, der schon in deinem Arbeitsbereich liegt.


- :mouse pointer: Wenn dein Block die Option<br/>
`||music(noclick):bis zum Ende||`<br/>
hat, klicke darauf, um ein Dropdown-Menü zu öffnen, und wähle dann<br/>
`||music(noclick):im Hintergrund||`

---

~hint Was soll ich nehmen? 🤷🏽‍♂️

---

Du kannst selbst entscheiden, ob bei jedem Druck auf den (A)-Knopf ein Soundeffekt erklingen
oder Musik spielen soll. Unser Beispiel verwendet den Soundeffekt **Wassertropfen** aus der
**Galerie** der Soundeffekte.

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
```

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
})
```


---

## {8. Mach es schwieriger}

Du hast jetzt ein fertiges Spiel! Kannst du das glauben?

Aber das Spiel ist ziemlich leicht zu gewinnen. Lass es uns schwieriger machen.

---

- :id card: Ziehe aus der Kategorie `||info:Info||`<br/>
`||info:starte Countdown (10) (s)||`<br/>
**ans Ende** deines <br/>
`||loops(noclick):beim Start||`-Containers.


- :id card: Ziehe einen weiteren <br/>
`||info:starte Countdown (10) (s)||`<br/>
Block **ans Ende** deines <br/>
`||controller(noclick):wenn A Knopf gedrückt||`-Containers.


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
//@highlight
info.startCountdown(10)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
    //@highlight
    info.startCountdown(10)
})
```



## {9. Wenn die Zeit abläuft}

Das ist toll, aber wenn die Zeit abläuft, ist das Spiel einfach vorbei.  Lass uns der Spielerin oder dem Spieler
mehr Chancen geben, einen hohen Turm zu bauen.

---

- :id card: Ziehe aus der Kategorie `||info:Info||` den<br/>
`||info:wenn Countdownende||`<br/>
Container in **einen freien Bereich** des Arbeitsbereichs.


- :id card: Geh zurück zur Kategorie `||info:Info||` und ziehe<br/>
`||info:ändere Leben um [-1]||`<br/>
in den **leeren** <br/>
`||info(noclick):wenn Countdownende||`<br/>
Container, der jetzt in deinem Arbeitsbereich liegt.


- :id card: Schließe diesen Teil ab, indem du einen neuen<br/>
`||info:starte Countdown (10) (s)||`<br/>
Block **ans Ende** des <br/>
`||info(noclick):wenn Countdownende||`<br/>
Containers in deinem Arbeitsbereich ziehst.

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(10)
})
```


## {10. Mehr Leben}

Wenn du mehr Chancen zum Gewinnen geben möchtest, kannst du die Anzahl der Leben
zu Beginn erhöhen.

---

- :id card: Ziehe aus der Kategorie `||info:Info||`<br/>
`||info:setze Anzahl Leben auf (5)||`<br/>
in den `||loops(onclick):beim Start||`-Container.

---

Das war's!  Spiel jetzt dein Spiel und schau, ob du es bis ganz nach oben schaffst!

#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.startCountdown(10)
//@highlight
info.setLife(5)
```




## {Geschafft}

**🥳 Super gemacht 🥳**

Du hast die Anleitung abgeschlossen!

Wenn du so weit bist, klicke auf **Fertig**, um dein Spiel mit Familie und Freunden zu teilen!


```blockconfig.global
scene.setBackgroundColor(13)
info.setLife(5)
music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```




```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    info.startCountdown(10)
    smurfy.drop_smurf()
})
info.onCountdownEnd(function () {
    info.startCountdown(10)
    info.changeLifeBy(-1)
})
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.setLife(3)
info.startCountdown(10)
music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004120000000400011d04000800012008000c000124`), music.PlaybackMode.InBackground)
music.baDing.play()
```



```package
arcade-sprite-data=github:microsoft/arcade-sprite-data#v0.0.5
```



```customts
namespace SpriteKind {
    export const Mountain = SpriteKind.create()
    export const Smurf = SpriteKind.create()
}


//% weight=100 color=#3ea8b8 icon="\uf185"
namespace smurfy {

    let smurf_weight = 0
    let smurf: Sprite = null
    let moving_smurf: Sprite = null
    let current_smurf: Sprite = null
    let bottom_smurf: Sprite = null
    let center_of_gravity = 0
    let mountain_smurfs: Sprite[] = []
    let top_smurf: Sprite = null
    let smurf_fell_off = false
    let village: Image[] = []
    export let speed = 60

    village = [assets.image`sit`, assets.image`squat`, assets.image`float`, assets.image`smurfette`, 
    assets.image`jump`, assets.image`ken`, assets.image`profile`]

    scene.onOverlapTile(SpriteKind.Smurf, assets.image`winCloud`, function (sprite, location) {
        game.gameOver(true)
    })

    sprites.onOverlap(SpriteKind.Smurf, SpriteKind.Mountain, function (sprite, otherSprite) {
        sprite.vy = 0
        sprite.ay = 0
        sprite.setKind(SpriteKind.Mountain)
        smurf_fell_off = will_the_smurf_fall_off(sprite, otherSprite)
        if (smurf_fell_off) {
            sprite.startEffect(effects.fire)
        } else if (will_the_stack_fall_down()) {
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            explode_smurfs()
            pause(1000)
            game.gameOver(false)
        } else {
            top_smurf = sprite
            scene.cameraFollowSprite(sprite)
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            info.changeScoreBy(1)
        }
        add_floating_smurf()
    })




    // calculate new center of gravity
    function will_the_stack_fall_down() {
        mountain_smurfs = sprites.allOfKind(SpriteKind.Mountain)
        center_of_gravity = 0
        for (let value of mountain_smurfs) {
            center_of_gravity += value.x
        }
        if (center_of_gravity / mountain_smurfs.length < bottom_smurf.left || center_of_gravity / mountain_smurfs.length > bottom_smurf.right) {
            return true
        }
        return false
    }

    function explode_smurfs() {
        current_smurf = bottom_smurf
        while (current_smurf) {
            current_smurf.setFlag(SpriteFlag.Ghost, true)
            current_smurf.setVelocity(randint(-200, 200), randint(-200, 200))
            current_smurf = sprites.readDataSprite(current_smurf, "smurf on top of me")
            scene.cameraFollowSprite(null)
        }
    }

    /**
    * Sets Smurf falling
    */
    //% blockId=drop_smurf 
    //% help=tutorial-only
    //% block="drop Smurf"
    export function drop_smurf() {
        moving_smurf.ay = 300
        moving_smurf.vx = 0
        moving_smurf.setFlag(SpriteFlag.BounceOnWall, false)
    }


    /**
    * Places first Smurf on ground
    */
    //% blockId=first_smurf 
    //% help=tutorial-only
    //% block="set first Smurf $myImage"
    //% myImage.shadow=screen_image_picker
    //% myImage.defl=assets.image`jump`
    //% weight=200
    export function set_first_smurf(myImage: Image) {
        tiles.setTilemap(assets.tilemap`level1`)
        smurf = sprites.create(myImage, SpriteKind.Mountain)
        smurf.ay = 300
        smurf.setPosition(80, 1225)
        scene.cameraFollowSprite(smurf)
        top_smurf = smurf
        smurf_weight = 22
        bottom_smurf = smurf
    }

    /**
    * Loads next Smurf into the air
    */
    //% blockId=add_smurf 
    //% help=tutorial-only
    //% block="new floating Smurf"
    export function add_floating_smurf() {
        speed = 60 + (info.score() * 3)
        moving_smurf = sprites.create(village[randint(0, village.length - 1)], SpriteKind.Smurf)
        if (moving_smurf.image.equals(top_smurf.image)) {
            sprites.destroy(moving_smurf)
            add_floating_smurf()
        } else {
            moving_smurf.bottom = top_smurf.top - 8
            moving_smurf.x = 80
            moving_smurf.setFlag(SpriteFlag.BounceOnWall, true)
            moving_smurf.vx = speed
        }
    }
    function will_the_smurf_fall_off(falling_smurf: Sprite, smurf_stack: Sprite) {
        if (falling_smurf.x > smurf_stack.right) {
            falling_smurf.setVelocity(50, -50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else if (falling_smurf.x < smurf_stack.left) {
            falling_smurf.setVelocity(-50, 50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else {
            return false
        }
    }
    scene.onHitWall(SpriteKind.Smurf, function (sprite, location) {
        if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            game.gameOver(false)
        }
    })
}
```

```assetjson
{
    "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAQAQAAAAAAABEBAAAAAAAAEQEAAAAAABARAQAAAAAAEREBAAAAAAAREQEAAAAAEBERAQAAAAAQEREBAAAAABAREQEAAAAAABERAQAAAAAAEBEBAAAAAAAQEQEAAAAAABARAQAAAAAAEBEBAAAAAAAAEQEAAAAAAAAQAQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cloud1\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAAAAQAQAAAAAAABEBAAAAAAAQEQEAAAAAABARAQAAAAAAEBEBAAAAAAAQEQEAAAAAABERAQAAAAAQEREBAAAAABAREQEAAAAAEBERAQAAAAAAEREBAAAAAAAREQEAAAAAABARAQAAAAAAABEBAAAAAAAAEQEAAAAAAAAQAQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cloud2\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAAAAQCQAAAAAAABEJAAAAAAAQEQkAAAAAABARCQAAAAAAEBEJAAAAAAAQEQkAAAAAABERCQAAAAAQEREJAAAAABAREQkAAAAAEBERCQAAAAAAEREJAAAAAAAREQkAAAAAABARCQAAAAAAABEJAAAAAAAAEQkAAAAAAAAQCQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"winCloud\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwNTAwMDAzMDMwMzAzMDMwMzAzMDMwMzAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tilePath2\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
    "images.g.jres": "{\n    \"image13\": {\n        \"data\": \"hwQYACAAAAAAAAAAAAAAAAAAAPD/DwAAAAAAAAAAAAAAAADf3f0PAAAAAAAAAAAAAADw0d3d/QAAAAAAAAAAAAAA8NHd3d0PAAAAAAAAAAAA8P/R3d3dDwAAAAAA/wAAAJ/5HxHd3Q8AAAAA8JkPAPCZmf//EfEAAADwD///+QDwmZ//Ef8PAAD/n/mZmf8A8Jn5H/EPAADw/Z+Zn5/5AJ/5/xH//wAAH9H/mZ/5mQ+Z//nx3d3/AB8RH5+ZmZ//+ZmZH93d3Q8fER/xmZmfn5mZmR/d3d39HxEfn5mZn5+ZmZkf3d3d/R8RHx+Z+ZmZmZn58RHR3f0fER+f+Z+Z/5mZ+RH/HxEP8BHR8ZmZmQ/5mR/xEfH/APAdERH/mfkAmf8fEfEPAAAA3xER8ZkPAJ/5+d0PAAAAAPDdEZ+Z+QDwmfn/AAAAAAAA/92fn/kA8JmZ+QAAAAAAAAD/n//5APCZmfkAAAAAAAAAAPCZDwAAn5n/AAAAAAAAAAAA/wAAAPD/DwAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"sit\"\n    },\n    \"image12\": {\n        \"data\": \"hwQYABoAAAAAAADwDwAAAAD/DwAAAAAAAAAAn/kAAADwmfkAAAAAAAAAAJ+ZDwAA/5n5AAAAAAAA/wDwmf8AAJ+Z+QAAAAAA8N0P8J+ZDwDwmfnwDwAAAPDRDx/xn/kA8JkP3/0AAAAf0f8fEZ/5AJ/58P3/AAAAH9Hf//+ZmQ+f//Df/QAAAB/RH5+ZmZ//md//HfEAAAAfER/xmZmZ//n//RHxAAAAHxHREZ+ZmZ/5Ef8R8QAAAB8RERGfmZmfHxHxH/EAAAAfERER8Zn5mR8RER/xAAAA8BEREZ+Z+ZkfERHx8QAAAPAdEfGZn/+Z/xEf8fEAAAAA3xHx+ZmfmfkR/RHxAAAAAPDd8fmf/5mZH/ER8QAAAAAA/92f+fCZmR/RH/EAAAAAAAD//w8An5kf0R/xAAAAAAAAAAAAAPCZH9Hf/QAAAAAAAAAAAAAA/9398A8AAAAAAAAAAAAAAJ//DwAAAAAAAAAAAAAAAACf+QAAAAAAAAAAAAAAAAAA8A8AAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"squat\"\n    },\n    \"image2\": {\n        \"data\": \"hwQSACAAAAAAAAAA8A8AAAAA8A8AAAAAAAD/BJ/5AADwAJ8JAAAAAADwRACf+Q8Anw+f/wAAAAAAT/Xw8fn58JkP/90PAAAAAE9FH5mZmf+Z/9/RDwAA/wBPVZ/xmZ8Pn/8R8f8P8PkA8FQfEZmf//GZH/GZ+Z/5APBUH5H5mR8Rn/kRn5mf+fD/T/WZmZn//5n5Ef+fmfHf/fH/mZn/VEWfH/GZ+RkP3/Ed8Z//VVVU9RHxmZn/8R8R3xHxX0RERVXfEf+Z/w/fEfEdEfH1X1RU9B3/mZ/53xERERHR//BFRUX/9Z+Z+fAdERER3Q8AX1RVVfSRmfEAHxER3f0AAE9FVEX/HxEPAPAf0f0PAADwVFX/8PH/AAAA8P8PAAAAAP//AAAPAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"smurfette\"\n    },\n    \"image14\": {\n        \"data\": \"hwQhACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAAAAAAAAAAAAAn5+fDwAAAAAAAAAAAAAAAAAAAACf//8PAAAAAAAAAAAAAAAAAAAAAP+Znw8AAP//AAAAAAAAAAAAAAAA8PmZDwDw3d3/AAAAAAAAAAAAAPAPn/kAAB/d3d0PAAAAAAAAAAAAn/nw+QAAH93d3f0AAAAAAAAA8P/5n//5AAAf3d3d/QAAAAAAAPDf/fmZ//kA/x/R3d3dDwAAAAAA3x3xmZn/+fCZ/x/R3d0PAAAAAPAdEdGf+fD58P8f8R/d3Q8AAAAA3xER8Z+Zn/n/ERER/xHxAAAAAAAfERGfmZmfmZkfEfEA/w8AAAAA8BHx8Zn/n5mZmR8RDwAAAAAAAADwEfHxmfnx+ZmZ+REPAAAAAAAAAPAR/fGZ+fH5mZn5EQ8AAAAAAAAA8BH9EZ/5//mZmfkRDwAAAAAAAADwEf3xmfmf+ZmZ+REPAAAAAAAAAPAR/Z/5+Z//n5n5EQ8AAAAAAAAAAN//mfn5mf/5/x/x/fD/AAAAAAAA8P+Zn5n5//kA8B8RHxEPAAAAAAAAAP/w/5//+QAA8P/R3f0AAAAAAAAAAACf+fD5AAD/Ed3d/QAAAAAAAAAAAPAPn/kA8BHd3d39AAAAAAAAAAAAAPD5mQ/w0d3d3Q8AAAAAAAAAAAAA/5mfD/DR3d3dDwAAAAAAAAAAAACf//8P8NHd3f0AAAAAAAAAAAAAAJ+fnw8A3939DwAAAAAAAAAAAAAA8P//AADw/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"jump\"\n    },\n    \"image11\": {\n        \"data\": \"hwQTACAAAAAAAADwDwAAAAAAAAAAAAAAAAAAn/kAAAAAAAAAAADwDwD/AJ+Z/w8AAAAAAAAAL/LwIg/wmU//DwAAAAAA8PL/8CIP//9E9PQAAAAAAPAv8i8i/x//RPT0APD/AADwIvIvIi8f8U/09PD/Iv//8CLyLyIv/5//T/T/mS8vIv8i8i8iL5/5RET/mZkv8v//IvIvIiL/T0REn/n///8v8i/yLyIiIk9ERJ+ZmZmZ+SIv8i8iIiLyRESfmZmZmZkvIvIvIiIin0/0/////5mfLyLy8CIi8pn//wDwLyKf//Ai8vAiIvL5mQ8AAPAi/w8AL/IALyLy+Z8PAADw/w8AAC/yAPAiIp/5DwAAn/kAAADwDwAA/yLy/wAAAJ/5AAAAAAAAAAD//w8AAADwDwAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ken\"\n    },\n    \"image10\": {\n        \"data\": \"hwQTACAAAAAAAAD//w8AAADwDwAAAAAAAAD/3f3/AAAAn/kAAAAAAADw3RGf+Q8AAJ/5AAAA8A8A3xHx+Z8PAADw/w8AAN/98B0R8fmZ/wAA8N3/DwAf/fAREfGZn/kA8B8Rn//wEfEfERERn5n5/////5mfHxHxHxEREfGZmZmZmZmZmR8R8R8RERGfmZmfmZmZmfkRH/EfEdERn5mZn/n///8f8R/xHxEf8Zn5mf+ZmR/x//8R8R8RH/+f+Z8P/5kfHxH/EfEfEd8f8Zn5D/D/Ef//8BHxHxH/H/+Z+QAA8P8AAPAd/fDRD/+fmQ8AAAAAAADw3/3w3Q/wmf8AAAAAAAAA8P3/AP8An5kPAAAAAAAAAADf/QAAAJ/5AAAAAAAAAAAA8A8AAADwDwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"profile\"\n    },\n    \"image15\": {\n        \"data\": \"hwQYACAAAAAAAAAAAAAAAAD///D//w8AAAAAAAAAAADwmfnf3d39DwAAAAAAAAAAn5mZHxER0f0AAAAAAAAAAJ+ZmR8RERHxAAAAAP8PAACfmf/w8RER8QAAAP+f+QDwmZ////EfEfEAAP/9+Z8P8Jn/3R/x/REPAPDd8fmZD5/53xER8RH//wDfEfGZnw+fnx8RER8REfHwHRERn5n5mZn5Ef//HxHx8B0REfGZ+ZmZ+RHfDx8R8d8RERGfmfmZmfkRHw/wEQ8fERERn5mZn5n5EfEPAP8AHxEf8Zn/n/+f+RH/AAAAAB8RH5+Z+Z8P////+QAAAAAfEd//n/mfDwCf+fkAAAAAHxH/EfH5mQ8A8Jn5AAAAAB/R/xH/+fkAAAD/DwAAAAAf0Q//n5n5AAAAAAAAAAAA8P0PH5+fDwAAAAAAAAAAAAD/APCZ/wAAAAAAAAAAAAAAAACfmQ8AAAAAAAAAAAAAAAAAn/kAAAAAAAAAAAAAAAAAAPAPAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"float\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}"
}
```
# Die Zeit fliegt
### @explicitHints true

## {Einführung @showdialog}

Bist du bereit, ein kurzes, lustiges Spiel mit einem Timer zu programmieren?

Los geht's!

![Animiertes Bild eines Froschs, der versucht, eine Fliege zu fangen](/static/tutorials/froggy/frog.gif "Kannst du dem Frosch helfen, die Fliege zu fangen?" )


## {2. Hintergrund hinzufügen}

**Bevor du einen Frosch hinzufügst, braucht er einen Platz zum Sitzen 🐸**

---

- :tree: Nimm aus der Kategorie ``||scene:Szene||``<br/>
``||scene: setze Hintergrundbild auf [ ]||``<br/>
und lass ihn im<br/>
``||loops(noclick):beim Start||``-Container einrasten, der schon im Arbeitsbereich ist.

~hint Willst du etwas anderes?💡

---

Wenn du den vorgegebenen Hintergrund nicht verwenden möchtest, klicke auf das Bild,
dann kannst du etwas Neues zeichnen. Oder du wechselst oben zum Tab **Galerie**
und wählst einen Hintergrund aus, der schon fertig ist.

hint~

- :mouse pointer: Klicke auf **Weiter**, wenn du bereit für die nächste Anweisung bist.

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(flies_imgs.background)
```

## {3. Ein Sprite hinzufügen}

**Zeit für einen Helden!**

---

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den Block<br/>
``||variables(sprites):setze [frog] auf Sprite [ ] vom Typ [Player]||``<br/>
an **das Ende** des<br/>
``||loops(noclick):beim Start||``-Containers.

~hint Du willst diesen Frosch nicht?💡

---

Wenn du unseren Frosch nicht verwenden möchtest, kannst du im Arbeitsbereich auf das Froschbild klicken,
dann kannst du etwas Neues zeichnen. Oder du wechselst zum Tab **Galerie** und
wählst etwas anderes aus.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(flies_imgs.background)
//@highlight
let frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
```

## {4. Ausprobieren}

**Schau dir dein Spielfenster unten rechts an.**

---

Sitzt dein Frosch da, wo du ihn haben willst? Wenn nicht, kannst du das im nächsten Schritt ändern.


## {5. Position festlegen}

- :paper plane: Wenn dir nicht gefällt, wo dein Sprite gelandet ist, lass einen<br/>
``||sprites:setze Position von [frog] auf x [80] y [60]||``<br/>
Block am **Ende** des<br/>
``||loops(noclick):beim Start||``-Containers einrasten.


- :mouse pointer: Probiere verschiedene Werte für **x** (waagerecht) und/oder **y** (senkrecht) aus, bis dein Sprite da erscheint, wo du ihn haben willst.


```validation.local
# BlocksExistValidator
* Enabled: false
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
//@highlight
frog.setPosition(85, 80)
```

## {6. Eine Fliege hinzufügen}

**😋 Zeit für einen Snack** <br/>
Der Frosch braucht etwas zu essen.

---

- :paper plane: Lass einen <br/>
``||variables(sprites):setze [fly] auf Sprite [ ] vom Typ [Food]||``<br/>
Block am **Ende** des<br/>
``||loops(noclick):beim Start||``-Containers einrasten.


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
//@highlight
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {7. Bring sie in Bewegung}

**😴 Es ist keine Herausforderung, wenn die Fliege nur herumsitzt**

---

- :paper plane: Damit sich die Fliege bewegt, lass einen <br/>
``||sprites:setze Geschwindigkeit von [fly] auf vx [200] vy [100]||`` <br/>
Block am **Ende** des <br/>
``||loops(noclick):beim Start||``-Containers einrasten.

_💡 Du kannst Geschwindigkeit und Richtung deiner Fliege mit diesen Zahlen anpassen.
Alles zwischen 100 und 200 macht Spaß._


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
//@highlight
fly.setVelocity(200, 100)
```



## {8. Ausprobieren}

**👀 Probiere dein Spiel noch einmal aus**

---

Macht es, was du erwartet hast? Ist die Fliege zu schnell vom Bildschirm verschwunden, um sie zu sehen?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {9. Abprallen}

**🕐 Das hat nicht lange gehalten**

Damit der Frosch eine faire Chance hat, soll die Fliege auf dem Bildschirm bleiben.

---

- :paper plane: Nimm aus ``||sprites:Sprites||`` einen <br/>
``||sprites:setze [fly] pralle gegen Wand <an>||`` <br/>
Block und lass ihn am **Ende** des <br/>
``||loops(noclick):beim Start||``-Containers einrasten. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
//@highlight
fly.setBounceOnWall(true)
```


## {10. Drück den Knopf}

**Wir wollen den Knopf drücken, um die Fliege zu fangen!**

---

- :game: Ziehe aus ``||controller:Controller||`` den Block <br/>
``||controller:wenn Knopf [A] [gedrückt]||`` <br/>
auf **eine freie Stelle** im Arbeitsbereich. <br/>

- :random: Lege in den neuen<br/>
``||controller(noclick):wenn Knopf [A] [gedrückt]||``-<br/>
 Container einen<br/>
``||logic:wenn <wahr> dann / sonst||``<br/>
Block (aus der Kategorie ``||logic:Logik||``).


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    if (true) {
    } else {
    }
})
```

## {11. Erwischt?}

- :paper plane: Nimm aus ``||sprites:Sprites||`` den Block <br/>
``||sprites:<[frog] überlappt sich mit [fly]>||`` <br/>
und setze ihn anstelle von **`<true>`** in den <br/>
``||logic(noclick):wenn <wahr> dann / sonst||``-Block ein. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
if (frog.overlapsWith(fly)) {
    } else {
    }
})
```


## {12. Nach Fliegen suchen}

Wenn wir den Ⓐ-Knopf drücken, kann eines von zwei Dingen passieren:
1. Die Fliege überlappt sich mit dem Frosch und wir gewinnen das Spiel mit einem Snack
2. Die Fliege überlappt sich nicht mit dem Frosch und unser Spieler verliert ein Leben

---

- :circle: Für den ersten Fall ziehe<br/>
``||game:Spielende <GEWONNEN>||``<br/>
in den oberen Teil des<br/>
``||logic:wenn <frog überlappt sich mit fly> dann / sonst||``-<br/>
Blocks.

- :id card: Für den zweiten Fall ziehe<br/>
``||info:ändere Leben um -1||``<br/>
in den unteren (**sonst**-)Teil des<br/>
``||logic:wenn <frog überlappt sich mit fly> dann / sonst||``-Blocks.

~hint Ich sehe keinen (sonst)-Teil 🤷🏽‍♀️

---

Es gibt zwei Arten von <br/>
``||logic(noclick):wenn <wahr>||``-<br/>
Containern, aus denen du wählen kannst:
```block
if (true) {
    } 
```
oder
```block
if (true) {
    } else {
    }
```

Wenn du den ersten siehst, klicke unten auf das weiße Pluszeichen **(+)**,
dann verwandelt er sich in den zweiten.


hint~


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        //@highlight
        game.gameOver(true)
    } else {
        //@highlight
        info.changeLifeBy(-1)
    }
})
```


## {Schritt 13}

**👀 Probiere dein Spiel im Simulator aus**

---

Wie sieht es aus? Verlierst du ein Leben, wenn die Fliege nicht über dem Frosch ist, wenn du (A) drückst? Gewinnst du das Spiel, wenn sie es ist?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {Schritt 14}

**⌚ Komm nicht zu spät**

Mach es spannender, indem du einen Countdown-Timer einbaust.

---

- :id card:  Nimm aus ``||info:Info||`` den Block<br/>
``||info:starte Countdown [10] (s)||``<br/>
und ziehe ihn an das Ende des<br/>
``||loops:beim Start||``-Containers.<br/>

Jetzt hast du genau 10 Sekunden, um die Fliege zu fangen, bevor das Spiel endet!


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)
//@highlight
info.startCountdown(10)

```



## {Schritt 15}

**🎉 Herzlichen Glückwunsch**

---

Du hast ein Spiel gebaut, das dein Timing testet!

Wenn du mit dem Programmieren fertig bist, klicke auf **Fertig**, um es mit Familie und Freunden zu teilen, oder
sieh dir die Herausforderungen unten an, um dein Spiel zu verändern.

---

- :question:  Füge einen Block hinzu, der die Anzahl der Leben ändert, mit denen du startest.

- :question:  Starte statt mit einer Fliege mit drei und lass jedes Mal eine verschwinden, wenn du ein Leben verlierst.

- :question:  Ändere das Thema, sodass statt eines Froschs, der Fliegen fängt, etwas ganz anderes passiert!


```validation.global
# BlocksExistValidator
```

```blockconfig.global
let fly: Sprite = null
let frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(80, 60)
info.startCountdown(10)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)
scene.setBackgroundImage(flies_imgs.background)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
frog.overlapsWith(fly)
if (false) { } else { }
game.gameOver(true)

let list = sprites.allOfKind(SpriteKind.Food)
list.pop().destroy()
for (let index = 0; index <= 4; index++) {

}
for (let index = 0; index < 4; index++) {

}
```


```package
flies_imgs=github:kiki-lee/flies_imgs#v0.0.3
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        game.gameOver(true)
    } else {
        info.changeLifeBy(-1)
    }
})
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
info.startCountdown(10)
info.setLife(3)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)

list = sprites.allOfKind(SpriteKind.Food)
    list.pop().destroy()
    for (let index = 0; index <= 4; index++) {

    }
    for (let index = 0; index < 4; index++) {

    }
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041e0000000400012a04000800012708000c00012410001400012218001c000120`), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)

```

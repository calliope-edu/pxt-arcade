# Freiwurf
### @explicitHints true

## {1. Einführung @showdialog}

Ziel genau und schau, ob du in diesem Basketball-Freiwurf-Spiel einen Slam Dunk schaffst!

![Freiwurf eines Spielers](/static/tutorials/free-throw/freethrow.gif)



## {2. Dein erster Block}

**Bereit zum Programmieren?**

Lass uns ein Basketballfeld als Hintergrund hinzufügen.

---


- :tree: Geh **im Werkzeugkasten** in die Kategorie ``||scene: Szene||`` und nimm <br/>
``||scene:setze Hintergrundbild auf [ ]||``<br/>
dann ziehe ihn in den leeren Block <br/>
``||loops(noclick): beim Start||`` <br/>
der schon im Arbeitsbereich liegt.



~hint Was bedeutet das? 🤷🏽

---

In den Anleitungen heben wir manchen Text hervor, damit du besser weißt, wonach du suchen sollst.

Wenn wir zum Beispiel den Block <br/>
``||scene:setze Hintergrundbild auf [ ]||``<br/>
vorschlagen, meinen wir diesen Block <br/>

```block
scene.setBackgroundImage(img`.`)
```

der in der Kategorie ``||scene:Szene||`` im Werkzeugkasten liegt.

hint~

- :paint brush: Klicke auf das leere graue Feld im Hintergrund-Block, um ein Basketballfeld zu malen <Br/>
(oder wechsle zur **Galerie**, um das zu wählen, das wir vorbereitet haben.)

<!--
<br/><br/>
💡 _The court image should be preloaded in the block, but you are welcome to edit the image if you like._
-->



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(throw_imgs.court)
```




## {3. Schau ins Spielfenster}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Du solltest den Basketballfeld-Hintergrund sehen, den du gerade hinzugefügt hast.

![Das Spielfenster findest du unten rechts](/static/tutorials/free-throw/game.png)






## {4. Erstelle die Spielfigur}

**Wähle deine Spielerin oder deinen Spieler!**<br/>
⛹🏾 ⛹🏼‍♀️ ⛹🏿‍♂️

---

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den Block<br/>
``||variables(sprites):setze [athlete] auf Sprite [ ] vom Typ [Player]||``<br/>
an **das Ende** des Containers
``||loops(noclick):beim Start||``.


~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur oder jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du benutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Auch unsere Sportlerin oder unser Sportler wird ein Sprite.

hint~


- :paint brush: Klicke auf das leere graue Feld im Sprite-Block, um deine Spielfigur zu malen <Br/>
(oder wechsle zur **Galerie**, um eine zu wählen, die wir vorbereitet haben.)



<!-- 

<br/><br/>
💡 _The athlete image should be preloaded in the block, but you are welcome to edit the image if you like._
-->

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
//@highlight
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)

```

## {5. Platziere die Spielfigur unten im Bild}


Lass uns die Spielfigur nach unten schieben, damit sie Platz hat.

---

- :paper plane: Nimm aus der Kategorie ``||sprites: Sprites||`` im Werkzeugkasten <br/>
``||sprites: setze Position von [athlete] auf x [80] y [90]||`` <br/>
und ziehe ihn ans **Ende** des Blocks
``||loops(noclick): beim Start||``
der schon im Arbeitsbereich liegt.


~hint Warum 80 und 90? 💡

---

Der Bildschirm ist 160 Pixel breit. Ein **x**-Wert von **80** setzt die Spielfigur also von links nach rechts gesehen in die Mitte.

Der **y**-Wert **90** setzt die Spielfigur nah an den unteren Rand, weil der Bildschirm 120 Pixel hoch ist.

Diese Zahlen sind genau so gewählt, dass die Spielfigur für die nächsten Schritte am richtigen Platz steht ... aber du kannst auch mit den Werten herumprobieren und schauen, was passiert, wenn du sie größer oder kleiner machst.

hint~




#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
//@highlight
athlete.setPosition(80, 90)
```





## {6. Setze die Geschwindigkeit der Spielfigur (Bewegung)}

In diesem Spiel läuft deine Spielfigur hin und her.

---

- :paper plane:  Ziehe aus ``||sprites:Sprites||`` den Block<br/>
``||sprites:setze Geschwindigkeit von [athelete] auf vx [50] vy [0]||``<br/>
an **das Ende** des Containers <br/>
``||loops(onclick):beim Start||``.


~hint Was sind vx und vy?💡

---

In MakeCode Arcade steht **vx** für die „Geschwindigkeit in x-Richtung“ – eine komplizierte Art zu sagen: „die Geschwindigkeit von einer Seite zur anderen“.

- Je größer dein **vx**-Wert ist, desto schneller bewegt sich etwas nach rechts.
- Je kleiner dein **vx**-Wert ist, desto schneller bewegt es sich nach links.
- Wenn **vx** 0 ist, bewegt sich nichts zur Seite.


Genauso steht **vy** für die „Geschwindigkeit in y-Richtung“ – eine
komplizierte Art zu sagen: „die Geschwindigkeit von oben nach unten“.

- Je größer dein **vy**-Wert ist, desto schneller bewegt sich etwas nach unten.
- Je kleiner dein **vy**-Wert ist, desto schneller bewegt es sich nach oben.
- Wenn **vy** 0 ist, bewegt sich nichts nach oben oder unten.

hint~


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
//@highlight
athlete.setVelocity(50, 0)
```



## {7. Schau wieder ins Spielfenster}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Deine Spielfigur sollte jetzt loslaufen.




## {8. Lass die Spielfigur von den Wänden abprallen}

**Die Spielfigur ist weggelaufen!** <br/>
Lass uns einen Block hinzufügen, der sie auf dem Spielfeld hält.

---

- :paper plane: Nimm aus ``||sprites:Sprites||`` einen <br/>
``||sprites:setze [athlete] pralle gegen Wand <an>||`` <br/>
Block und ziehe ihn ans **Ende** des Containers <br/>
``||loops(noclick):beim Start||``. <br/>



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
//@highlight
athlete.setBounceOnWall(true)

```




## {9. Erstelle den Basketballkorb}


Füge mit dem, was du beim Hinzufügen der Spielfigur gelernt hast, einen Korb hinzu und setze ihn an das Brett.

---

~hint Erinnere mich 🤨

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den Block<br/>
``||variables(sprites):setze [hoop] auf Sprite [ ] vom Typ [Goal]||``<br/>
an **das Ende** des Containers
``||loops(noclick):beim Start||`` und wähle dann den Korb aus der Galerie.

- :paper plane: Nimm aus der Kategorie ``||sprites: Sprites||`` im Werkzeugkasten <br/>
``||sprites: setze Position von [hoop] auf x [80] y [35]||`` <br/>
und ziehe ihn ans **Ende** des Blocks
``||loops(noclick): beim Start||``
der schon im Arbeitsbereich liegt.

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
//@highlight
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
//@highlight
hoop.setPosition(80, 35)
```



## {10. Wirf mit Knopf (A)}


Lass uns die Spielfigur so programmieren, dass sie Basketbälle wirft, wenn Knopf (A) gedrückt wird.


- :game: Ziehe aus ``||controller:Controller||`` den Container<br/>
``||controller:wenn [A] Knopf [gedrückt] ||``<br/>
in einen **freien Bereich** des Arbeitsbereichs.



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```




## {11. Wirf die Basketbälle}

**Füge die Basketball-Projektile hinzu.**


~hint Was sind Projektile?💡

---

In MakeCode Arcade sind Projektile Sprites, die sich von selbst bewegen,
oft in großer Zahl.

Projektile haben zusätzliche Eigenschaften, die normale Sprites nicht haben.
Zum Beispiel zerstören sie sich selbst, sobald sie den Bildschirm verlassen, damit
der Computer nicht überlastet wird.

hint~

---


- :paper plane: Ziehe <br/>
``||variables(sprites):setze [projectile] auf Projektil [ ] von [athlete] mit vx [0] vy [-100]||`` <br/>
in den **leeren** Container <br/>
``||controller(noclick):wenn [A] Knopf [gedrückt] ||``.<br/>


- :paint brush: Klicke auf das Basketball-Bild im Projektil-Block, wenn du deinen eigenen Basketball malen willst.


<!--
💡 _The projectile is a basketball, but you can click the ball and change it to whatever you like._
-->



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})
```




## {12. Probier es aus}


- :binoculars: Schau dir dein Spiel an!

Deine Spielfigur sollte sich auf dem Spielfeld hin und her bewegen.

Wenn du Knopf (A) (oder die Leertaste) drückst, sollte die Spielfigur einen Basketball zum oberen Bildschirmrand werfen.


💡 _Im nächsten Schritt fügen wir Punkte hinzu._


~hint Bei mir klappt es nicht 🤷‍♂️ 

---

Vergleiche deinen Code mit den Blöcken unten, um zu sehen, ob etwas fehlt:


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})


scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```




## {13. Punkte für einen Treffer}


**Lass Code laufen, wenn der Ball den Korb berührt!**

---


- :paper plane: Ziehe aus ``||sprites:Sprites||`` den Container<br/>
``||sprites:wenn [sprite] der Art [Projectile] überlappt [othersprite] der Art [Goal]||``<br/>
in einen **freien Bereich** des Arbeitsbereichs.


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {

})
```



## {14. Punkte für einen Korb}

**Gib einen Punkt und zerstöre den Ball.**

---


- :id card: Nimm aus ``||info:Info||`` <br/>
``||info:ändere Punktzahl um [1]||``  <br/>
und ziehe ihn in den **leeren** Container <br/>
``||sprites(noclick):wenn [sprite] der Art [Projectile] überlappt...||``<br/>
der schon im Arbeitsbereich liegt.


- :paper plane: Nimm aus ``||sprites:Sprites||`` <br/>
``||sprites:Zerstöre [sprite]||`` <br/>
und ziehe ihn ans **Ende** des Containers <br/>
``||sprites(noclick):wenn [sprite] der Art [Projectile] überlappt...||``<br/>
im Arbeitsbereich.


~hint Warum „sprite“ zerstören? 💡

---

Vielleicht denkst du, wir sollten **projectile** oder sogar **ball** zerstören, um den
Basketball loszuwerden, der den Korb berührt hat. Aber in diesem Überlappungs-Container musst du 
entweder <br/>
``||variables:sprite||`` oder ``||variables:otherSprite||``<br/> 
wählen, wenn du eines der **genauen** Objekte meinst, die sich berührt haben.

hint~



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
```



## {15. Schau noch einmal ins Spielfenster}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Du solltest jedes Mal genau einen Punkt bekommen, wenn dein Basketball den Korb berührt!



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


## {16. Füge ein Zeitlimit hinzu}

**Kommt dir das Spiel lang vor?**<br/>
🕔 🕔 🕔

Wir haben noch keine Möglichkeit zu gewinnen.
Lass uns einen Countdown hinzufügen.

---

- :id card:  Nimm aus ``||info:Info||``<br/>
 ``||info:starte Countdown [30] (s)||``<br/>
und ziehe ihn ans **Ende** des Containers <br/>
``||loops(noclick):beim Start||``.

---

🎮 **Spiel dein Spiel und schau, wie viele Punkte du in 30 Sekunden schaffst!**



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
```


<!--## You did a great job!!! @showdialog


### What did you think of this tutorial?

### 😍  😑  ☹️

Would you like to tell us more?

(Yes)  (No)

-->



## {18. Geschafft}

**🏀 Gut gemacht 🏀**

---

Du hast ein tolles Spiel programmiert!

**Schaffst du 20 Punkte, bevor der Countdown bei null ist?**

Wenn du fertig gespielt hast, klicke auf **Fertig**, damit du dein Spiel mit Familie und Freunden teilen kannst!











#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
//@highlight
info.startCountdown(30)

```


```blockconfig.global
namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)

athlete.setBounceOnWall(true)
info.startCountdown(30)
sprites.destroy(sprite)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) { })
projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)

scene.setBackgroundImage(img`.`)
```


```package
throw_imgs=github:kiki-lee/throw_imgs
```

```customts
namespace SpriteKind {
    //% isKind
    export const Goal = SpriteKind.create()
}

info.onCountdownEnd(function () {
    game.gameOver(true)
})
```


```ghost

    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ball`, athlete, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let athlete: Sprite = null
scene.setBackgroundImage(throw_imgs.court)
athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
info.onCountdownEnd(function () {
    game.gameOver(true)
})

game.setGameOverEffect(true, effects.confetti)
game.setGameOverMessage(true, "GAME OVER!")
game.setGameOverScoringType(game.ScoringType.HighScore)
```


```simtheme
{
    "palette": [
       "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FF93C4",
        "#FF8135",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#E3A591",
        "#A4839F",
        "#5F5F5F",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```

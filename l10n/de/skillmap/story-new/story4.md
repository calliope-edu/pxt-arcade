# Die kürzeste Geschichte
### @explicitHints true


## {Einführung @showdialog}

Lass uns das Gelernte nutzen, um eine kurze Geschichte zu erstellen, die du mit Familie und Freunden teilen kannst.

![Hier ist die Geschichte](/static/skillmap/story/story4.gif "Beispiel für eine Seite unserer Geschichte." )


## {Schritt 2}

Bevor du mit dieser Lektion anfängst, brauchst du eine Geschichte, die du erzählen möchtest.

Du kannst dir selbst eine ausdenken oder diese hier verwenden:

[**_Klicke hier, um Zeilen aus unserer Geschichte zu kopieren._**](#doc:/skillmap/story/story-example "Kopiere hier Zeilen aus unserer Geschichte.")





## {Schritt 3}


Hast du deine Geschichte?

**Gestalte deine erste Seite!**  <br/>
📚 📖 📚

---

- :tree:  Nimm aus ``||scene:Szene||``
```block
scene.setBackgroundImage(img`.`)
```
und setze ihn in den **leeren** Container<br/>
``||loops(noclick):beim Start||`` <br/>
, der schon im Arbeitsbereich ist.


- :paint brush:  **Klicke auf das leere Bildfeld**, um das erste Bild für deine Geschichte zu zeichnen.

💡 _Dir fällt keine Geschichte ein? Du kannst einen unserer Hintergründe verwenden._


#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(img`
9 9 9 9
9 9 9 9
7 7 7 7
`)
```




## {Schritt 4}

**Schau dir den Spielbildschirm an.**

- :binoculars: Wie sieht dein Hintergrund aus? Wo möchtest du den Text hinsetzen? Oben? In der Mitte? Unten?




## {Schritt 5}

**✨ Super ✨**

Gib dem Leser Zeit, dein Bild zu genießen, bevor du es mit Text überdeckst.

- :redo:  Ziehe aus ``||loops: Schleifen||``
```block
pause(1000)
```
**ans Ende** des Containers <br/>
``||loops(noclick):beim Start||``<br/>
, der schon im Arbeitsbereich ist.


- :mouse pointer:  Dieser Pausieren-Block hält das Programm 1 Sekunde (1000 ms) an, bevor es mit der nächsten Zeile weitergeht. Wenn du mehr Zeit möchtest, kannst du eine größere Zahl eintragen.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
// @highlight
pause(1000)

```

## {Schritt 6}

Füge deine erste Textseite hinzu.

---


- :circle:  Ziehe aus ``||game:Spiel||``
```block
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```
**ans Ende** des Containers <br/>
``||loops(noclick):beim Start||``<br/>
, der schon im Arbeitsbereich ist.


- :mouse pointer: Ändere den Text in die erste Zeile deiner Geschichte. Du kannst auch die Position deines Textes von ``||game(noclick):unten||`` auf einen anderen Bereich des Bildschirms ändern.


💡 _Hast du in einem anderen Level einen anderen Weg gefunden, Text hinzuzufügen, der dir besser gefällt? Dann nimm ruhig den!_




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
//@highlight
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```


## {Schritt 7}

**Mach noch eine Seite!**

Füge eine weitere Gruppe von Blöcken mit einem neuen Bild und einer neuen Zeile aus deiner Geschichte hinzu.

---

- :mouse pointer:  Füge so lange Blockgruppen hinzu, bis du am Ende angekommen bist.
```block
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Next door...", DialogLayout.Bottom)
```

💡 _Du musst die Blöcke nicht immer in derselben Reihenfolge hinzufügen. Möchtest du ein paar Bilder ohne Text zeigen? Oder den Text ändern, ohne das Bild zu ändern? Probier einfach aus, was dir gefällt!_


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Once upon a time, there was a lizard who lived beneath a toadstool.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Next door, there lived a butterfly on a daisy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Every day, the butterfly would sweep past and taunt the lizard from the sky.", DialogLayout.Bottom)
    game.showLongText("\"Ha ha!\" He would say. \"Your house doesn't smell as good as mine.\"", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    game.showLongText("She tried and tried, but she just couldn't get comfortable.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("No matter what she did, the fragrant flower didn't make her happy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("The next day, the lizard moved back to her toadstool and lived happily ever after.", DialogLayout.Bottom)
    })
```


## {Schritt 8}

**Schau dir an, was du hast.**

- :binoculars: Vergiss nicht, dich beim Bauen durch deine Geschichte zu klicken, um zu prüfen, ob das Timing passt.




## {Schritt 9}

**Mehr Action gefällig?**<br/>
🎥 🎥 🎥

Mit dem, was du im letzten Level gelernt hast, kannst du Sprites zu deiner Geschichte hinzufügen.

---

- :paper plane:  Nimm aus ``||sprites:Sprites||``
```block
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```
und setze ihn in den Container <br/>
``||loops(noclick):beim Start||``<br/>
an der Stelle ein, die am besten zu deiner Geschichte passt.


- :mouse pointer: Wähle dein Sprite aus und schau dann in der Kategorie ``||sprites:Sprites||`` nach weiteren Blöcken, mit denen
du dein Sprite genau platzieren oder bewegen kannst.




#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    //@highlight
   let meinSprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
    //@highlight
meinSprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)

```




## {Schritt 10}

**👏 Und wenn sie nicht gestorben sind ... 👏**

Möchtest du deine Geschichte mit etwas Besonderem beenden?

---

- :tree:  Nimm aus ``||scene:Szene||``
```block
effects.confetti.startScreenEffect()
```
und setze ihn **ans Ende** des Containers <br/>
``||loops(noclick):beim Start||``<br/>
ein, der schon im Arbeitsbereich ist.


- :mouse pointer:  Ändere **Konfetti** in das, was am besten zu deiner Geschichte passt!


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let meinSprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
meinSprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    //@highlight
    effects.bubbles.startScreenEffect()

```


## {Schritt 10}

**🎹 Soundeffekte 🎹**

Braucht deine Geschichte einen Soundtrack?

---

- :mouse pointer:  Nimm aus ``||music:Musik||`` einen beliebigen <br/>
``||music: spiele [ ]||``-Block <br/>
und füge ihn zu deinem Projekt hinzu.


- :mouse pointer:  Probiere aus, welche Geräusche du wo einsetzt, damit sie am meisten Wirkung haben.

#### ~ tutorialhint

```blocks
    //@highlight
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let meinSprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
meinSprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    effects.bubbles.startScreenEffect()
})
```


## {Geschafft}

**🤣 Glückwunsch 🤣**

Du hast eine Geschichte geschrieben, auf die du stolz sein kannst!


~hint Wie teile ich meine Geschichte?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf "Fertig", um zur Skillmap zurückzukehren, und suche dann unten rechts nach dem Teilen-Knopf.

![Teile deine Karte](/static/skillmap/assets/share.gif )

hint~


Wenn du deine Geschichte fertig gelesen hast, klicke auf **Fertig**, um zur Hauptseite zurückzukehren. Dort kannst du sie mit allen teilen, die du kennst!

```blockconfig.global
pause(1000)
let meinSprite: Sprite = null
carnival.addLabelTo(" ", carnival.Areas.Top)
game.showLongText("Once upon a time...", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
meinSprite.setFlag(SpriteFlag.StayInScreen, true)

```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
arcade-storytelling=github:microsoft/arcade-storytelling/
arcade-animations=github:microsoft/arcade-character-animations
short-story-assets-2=github:kiki-lee/short-story-assets-2#v0.0.5
short-story-assets-1=github:kiki-lee/short-story-assets-1#v0.0.6
```

```ghost
music.stopAllSounds()
scene.setBackgroundColor(1)
pauseUntil(() => controller.anyButton.isPressed())
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Once upon a time", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSong(hexhex`00780004080200`), music.PlaybackMode.InBackground)
let meinSprite = sprites.create(img`.`, SpriteKind.Player)
story.printText(":)", 0, 0)
story.startCutscene(function () {
    story.spriteSayText(meinSprite, ":)")
})
story.setPagePauseLength(1000, 1000)
story.printCharacterText("")
story.setSoundEnabled(false)
meinSprite.sayText(" ")
game.splash("")
game.showLongText("", DialogLayout.Bottom)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Top)
meinSprite.setPosition(0, 0)
story.cancelCurrentCutscene()
story.cancelSpriteMovement(meinSprite)
story.spriteMoveToLocation(meinSprite, 0, 0, 100)
music.setVolume(20)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
    animation.runImageAnimation(
meinSprite,
[img`.`],
100,
true
)

characterAnimations.loopFrames(
meinSprite,
[img`.`],
500,
characterAnimations.rule(Predicate.NotMoving)
)

meinSprite.startEffect(effects.spray)
meinSprite.setImage(img`.`)
scene.cameraShake(4, 500)
meinSprite.setVelocity(-20, 0)
meinSprite.x = 0
meinSprite.setFlag(SpriteFlag.StayInScreen, false)
```

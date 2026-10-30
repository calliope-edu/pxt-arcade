# Einführung in MakeCode Arcade
### @explicitHints true
### @hideDone true

## {Einführung @unplugged}

![Begeisterter Affe](/static/skillmap/interface/monkey.png "Der begeisterte Affe ist bereit!" )

**Bist du bereit, deine eigenen Spiele zu programmieren?**

In diesem Tutorial lernst du:
- den Anweisungen im Tutorial zu folgen
- Blöcke im Werkzeugkasten zu finden
- Code im Arbeitsbereich zu bauen
- dein Projekt auf dem eingebauten Spielbildschirm laufen zu lassen

Schon bald hast du dein ganz eigenes Arcade-Spiel!


## {Schritt 1}

**⭐Willkommen⭐**

Du hast gerade den wichtigsten Teil eines Tutorials entdeckt – **die Anweisungen lesen**!

- :info: Manchmal musst du scrollen, um alle Anweisungen zu lesen.

- :arrow right: Wenn du bereit für den nächsten Schritt bist, klicke auf **Weiter**.



## {Schritt 2}

Wir verstecken gern zusätzliche Infos in „Hinweisboxen“, damit die Anweisungen kürzer bleiben.

- :mouse pointer: Klicke auf die Hinweisbox unten, um zu sehen, was drin ist.

~hint Klicke hier für einen Hinweis 🕵🏽

---

**Glückwunsch!**

Du hast einen Hinweis gefunden!

hint~


Manchmal zeigen wir dir empfohlene Blöcke für einen Schritt.

- :mouse pointer: Klicke unten auf den runden Glühbirnen-Knopf, um ein Beispiel zu sehen.




#### ~ tutorialhint
```blocks
game.splash("You found me!")
```



## {Den Arbeitsbereich nutzen}

In deinem [__*Arbeitsbereich*__](#workIt "Der Bereich, in dem du Code baust")
verbindest du Codeblöcke zu deinem Programm.

---

- :mouse pointer:  Klicke in den Block ``||game(noclick):zeige Dialog " "||``, der schon im Arbeitsbereich liegt,
und **ändere den Satz** in etwas Spannenderes.

~hint Was ist ein Arbeitsbereich? 🕵🏽

---

![Der Arbeitsbereich](/static/tutorials/interface/workspace.png " " )

Der **Arbeitsbereich** ist die Fläche rechts neben dem Werkzeugkasten, in der du dein Programm baust.

Nur Blöcke, die im Arbeitsbereich verbunden sind, werden vom Computer ausgeführt.

hint~


#### ~ tutorialhint
```blocks
game.splash("I like bananas!")
```


## Lerne die Blöcke kennen  @showdialog

Blöcke kannst du aus dem [__*Werkzeugkasten*__](#tools "Die Leiste links neben deinem Arbeitsbereich mit den Blockkategorien.") ziehen, <br/>
verbinden, duplizieren und löschen.

Mach weiter, um mehr über Blöcke zu lernen.

![Block-Animation](/static/skillmap/interface/use_blocks.gif "Blöcke erscheinen, werden dupliziert und gelöscht." )



## {Dein Werkzeugkasten}

**Blöcke sind nicht immer schon im Arbeitsbereich.**

Wenn du einen Block hinzufügen sollst, zeigen wir ihn dir entweder als Bild wie dieses:
```block
game.splash(" ")
```
oder als hervorgehobenen Text, so:<br/>
 ``||game:zeige Dialog " "||``<br/>



~hint Willst du etwas Cooles sehen? 🕵🏽

---

Wenn du einen Block im Werkzeugkasten finden sollst und wir in der Anweisung hervorgehobenen Text verwenden, kannst du auf den farbigen Text klicken. Dann öffnet sich automatisch die richtige Kategorie im Werkzeugkasten.

Probier es gleich aus und klicke auf den Block unten!<br/>

``||game:zeige Dialog " "||``<br/>

hint~



## {Dein Werkzeugkasten 2}

**Schauen wir mal, wie das funktioniert**

- :tree:  Finde den Block<br/>
``||scene:setze Hintergrundfarbe auf [ ]||``<br/>
und stecke ihn **ganz oben** in den<br/>
``||loops(noclick):beim Start||``<br/>
Container, der schon im Arbeitsbereich liegt.

- :paint brush:  Klicke auf das leere Quadrat und wähle deine Lieblingsfarbe als Hintergrund.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {Die Ausnahme}

Wenn du den Block nicht findest, klicke auf den hervorgehobenen Text und die richtige Kategorie öffnet sich für dich.

- :paper plane:  Stecke
<br/>``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||``<br/>
ans **Ende** des <br/>
``||loops(noclick):beim Start||`` Containers.


- :paint brush:  Klicke auf das leere Kästchen, um ein [__*Sprite*__](#sprote "Ein 2D-Bild, das sich auf dem Bildschirm bewegt") zu zeichnen,
 oder wechsle zur **Galerie** und wähle eines von unseren aus.


 ~hint Was ist ein Sprite? 🕵🏽

---

In Arcade heißt jede Figur und jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(5)
game.splash("My monkey is better than yours")
let mySprite = sprites.create(img`
. . . . . f f f f f . . . . . .
. . . . f e e e e e f . . . . .
. . . f d d d d d d e f . . . .
. . f d f f d d f f d f f . . .
. c d d d e e d d d d e d f . .
. c d c d d d d c d d e f f . .
. c d d c c c c d d d e f f f f
. . c d d d d d d d e f f b d f
. . . c d d d d e e f f f d d f
. . . . f f f e e f e e e f f f
. . . . f e e e e e e e f f f .
. . . f e e e e e e f f f e f .
. . f f e e e e f f f f f e f .
. f b d f e e f b b f f f e f .
. f d d f f f f d d b f f f f .
. f f f f f f f f f f f f f . .
`, SpriteKind.Player)


```




## {Spielfenster}

Schau beim Programmieren immer wieder in dein [__*Spielfenster*__](#gamez "Spielsimulator, der das Ergebnis deines Codes zeigt").

- :binoculars: Sieh dir das Spielfenster an. <br/>
Siehst du eine Nachricht, die du wegklicken musst? Und siehst du danach das Sprite, das du ausgewählt hast?


![Suche das Spielfenster unten rechts](/static/skillmap/assets/game-window.png "Klicke auf das kleine Spielfenster, um das größere Spielfenster zu öffnen.")






## Container-Blöcke  @showdialog

Das ist ein [__*Container-Block*__](#blockIt "Block, der andere Blöcke enthält").


Container-Blöcke haben oben und unten eine flache Kante und in der Mitte eine Lücke,
in die andere Blöcke hineinpassen. Container-Blöcke bestimmen, wann der Code darin ausgeführt wird.

Hier ist ein Beispiel:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
```

_(Dieser Block führt Code aus, wenn der A-Knopf gedrückt wird.)_





## {Einen Container-Block verwenden}

- :game:   Finde den<br/>
``||controller:wenn [A] Knopf gedrückt ||`` <br/>
Container und ziehe ihn auf **eine freie Stelle** im Arbeitsbereich.



#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```



## Standard-Blöcke  @showdialog

Als Nächstes gibt es [__*Standard-Blöcke*__](#sBlockIt "Einzeilige Blöcke, aus denen die meisten Programme bestehen").

Standard-Blöcke sind einzeilige Blöcke mit Kerben oben und unten, mit denen sie
an andere Teile andocken. Sie werden in dem Container, in dem sie stecken,
der Reihe nach von oben nach unten ausgeführt.

Hier ist ein Beispiel für einen Standard-Block:

```block
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```

_(Dieser Block lässt Wasser aus der Mitte deines Sprites sprühen.)_




## {Standard-Blöcke 2}

- :paper plane:   Finde einen <br/>
``||sprites:[mySprite] beginne [spray] Effekt ⊕||``<br/>
Block und stecke ihn in den  <br/>
``||controller(noclick):wenn [A] Knopf gedrückt||``<br/>
Container, der schon in deinem Arbeitsbereich liegt ... und wähle dann einen neuen Effekt!

- :mouse pointer:   Klicke auf das **+** rechts neben dem neuen Block, um eine
zusätzliche Option aufzuklappen.



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, 500)
})
```



## Wert-Blöcke  @showdialog

Zum Schluss gibt es noch [__*Wert-Blöcke*__](#aBlockIt "besondere Teile, die anderen Blöcken Werte liefern").
Wert-Blöcke sind besondere Teile, die anderen Blöcken Informationen
hinzufügen. Manchmal sind sie spitz, manchmal abgerundet,
aber sie brauchen immer einen anderen Block, in den sie gesteckt werden. Wert-Blöcke sehen ungefähr so aus:

![Wert-Blöcke](/static/skillmap/interface/parameter-blocks.png "So sieht die Form eines Wert-Blocks aus" )

_💡 Wert-Blöcke haben unterschiedliche Formen, je nachdem,
welche Art von Information sie liefern. Jeder Wert passt nur
in bestimmte Lücken._




## {Wert-Blöcke 2}


- :calculator:   Nimm aus der Kategorie ``||math:Mathematik||`` einen <br/>
``||math: wähle eine zufällige Zahl von [0] bis [10]||``<br/>
Wert-Block und setze ihn anstelle von **500** ein.

- :mouse pointer:   Ändere den Zufallsbereich so, dass eine Zahl zwischen **100** und **600** gewählt wird.



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
  mySprite.startEffect(effects.confetti, randint(100,600))
}
```






## {Spielzeit}

**🕹️ Zeit zum Spielen 🕹️**

- :binoculars: Sieh dir das Spielfenster an. <br/>

Klicke auf den **Ⓐ**-Knopf (oder die Leertaste), um die Dialog-Nachricht wegzuklicken.

Klicke immer wieder auf **Ⓐ**, um deine Effekte zu sehen!





## {Alles zusammen}

**🎨 Jetzt wirst du kreativ 🎨**

Sieh dir all die anderen Blöcke im Werkzeugkasten an.

Es ist okay, wenn du nicht weißt, was sie alle tun.
Probier sie aus und schau, was passiert!

---

_💡 Teste dein Spiel alle paar Schritte, um sicherzugehen,
dass es sich so verhält, wie du willst!_




## {Geschafft @unplugged}

**🎈 Herzlichen Glückwunsch 🎈**

Du hast das Tutorial **„Einführung in MakeCode Arcade“** abgeschlossen!<br/>
Jetzt kannst du in Microsoft MakeCode Arcade tolle Sachen bauen.

---

Was möchtest du als Nächstes machen? 

|      |      |      |       |      |
|:----:|--|:----:|--|:----:|
| [![Skillmap](/static/tutorials/interface/skillmap.png)](--skillmap#docs:/skillmap/dino) | &emsp;&emsp; | [![Tutorial1](/static/tutorials/interface/tutorial.png)](#tutorial:/tutorials/turkey-jr) | &emsp;&emsp; | [![Zurück zur Startseite](/static/tutorials/interface/home.png)](/) |
| [**Probier eine Skillmap aus**](--skillmap#docs:/skillmap/dino) | | [**Neues Tutorial**](#tutorial:/tutorials/chase-the-pizza) | | [**Zurück zur Startseite**](/) | |



```ghost
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("The little unicorn walked into the meadow.", DialogLayout.Top)
    scene.cameraShake(4, 500)
})
scene.setBackgroundColor(9)
scene.setBackgroundImage()
mySprite.x += 0
effects.confetti.startScreenEffect()
effects.confetti.endScreenEffect()
mySprite.setPosition(70, randint(100, 600))
for (let index = 0; index < 4; index++) {
    controller.moveSprite(mySprite)
    music.setVolume(20)
    music.playMelody("- - - - - - - - ", 120)
}
game.onUpdateInterval(5000, function () {
    if (game.askForString("Continue?") == "Y" || game.askForString("Continue?") == "y") {
        mySprite.say(":)")
    }
    game.splash("")
})
music.setVolume(20)

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`into_forever_album_cover`)
    thisSong = music.createSong(assets.song`into_the_forever`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(thisSong, music.PlaybackMode.LoopingInBackground)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`perfect_society_album_cover`)
    thisSong = music.createSong(assets.song`perfectSociety`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`once_more_album_art`)
    thisSong = music.createSong(assets.song`once_more`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`i_am_groot_album_cover`)
    thisSong = music.createSong(assets.song`i_am_groot`)
})
let thisSong: music.Playable = null
scene.setBackgroundImage(assets.image`Zune`)

    if (thisSong) {
        music.play(thisSong, music.PlaybackMode.LoopingInBackground)
    }
```


```template
game.splash("These blocks are in your workspace!")

```
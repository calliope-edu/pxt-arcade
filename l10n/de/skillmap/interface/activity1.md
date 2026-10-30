# Lerne MakeCode Arcade kennen


## {Einführung @unplugged}
### @explicitHints true

![Begeisterter Affe](/static/skillmap/interface/monkey.png "Der begeisterte Affe ist bereit!" )

**Bist du bereit, deine eigenen Spiele zu programmieren?**

In diesem Tutorial lernst du:
- den Anweisungen im Tutorial zu folgen
- Blöcke im Werkzeugkasten zu finden
- Code im Arbeitsbereich zusammenzubauen
- dein Projekt im eingebauten Spielbildschirm auszuführen

Ehe du dich versiehst, hast du dein ganz eigenes Arcade-Spiel!

## {Schritt 1}

**⭐Willkommen⭐**

Du hast gerade den wichtigsten Teil eines Tutorials entdeckt – das Lesen der Anweisungen!

Manchmal sind die Anweisungen lang und du musst scrollen, um alles zu lesen.

_💡 Wenn du bereit für den nächsten Schritt bist, klicke auf **[Weiter]**._



## {Schritt 2}

In diesem Kasten findest du die Informationen für jeden Schritt.

Wenn du nicht alle Infos findest, die du brauchst,
klicke auf den Knopf mit der Glühbirne, um einen zusätzlichen Tipp zu bekommen.


#### ~ tutorialhint
```
You found the hints!
```


## {Den Arbeitsbereich benutzen}

Dein [__*Arbeitsbereich*__](#workIt "Der Bereich, in dem du Code baust")
ist der Bereich, in dem du Codeblöcke zu deinem Programm zusammensetzt.

---

- :mouse pointer:  Klicke in den Block ``||game:zeige Dialog " "||``, der schon im Arbeitsbereich liegt,
und ändere den vorgegebenen Satz in etwas Spannenderes.

_💡 Ist dir aufgefallen, dass das Wort __Arbeitsbereich__ im ersten Satz
besonders aussah? Fahre mit der Maus darüber, um eine Erklärung zu sehen._

#### ~ tutorialhint
```blocks
game.splash("I like bananas!")
```


## {Die Blöcke kennenlernen  @unplugged}

Blöcke kannst du aus dem [__*Werkzeugkasten*__](#tools "Die Leiste links neben deinem Arbeitsbereich, in der die Blockkategorien aufgelistet sind.") herausziehen,

verbinden, duplizieren und löschen.

Mach weiter, um mehr über Blöcke zu erfahren.

![Block-Animation](/static/skillmap/interface/use_blocks.gif "Blöcke erscheinen, werden dupliziert und gelöscht." )



## {Dein Werkzeugkasten}

**Die Blöcke, die du brauchst, liegen nicht immer schon im Arbeitsbereich.**

In den Anweisungen ist die Beschreibung eines Blocks oft
in derselben Farbe hervorgehoben wie die Kategorie
im Werkzeugkasten, in der er zu finden ist.

**Zum Beispiel:** Wir schreiben ``||game:zeige Dialog " "||``, wenn
du diesen Block finden sollst:

```block
game.splash(" ")
```

Dieser Block fügt deinem Projekt einen [__*Startbildschirm*__](#splasht "Eine bildschirmfüllende Nachricht, die angezeigt wird, während ein Programm oder Level lädt") hinzu.


## {Dein Werkzeugkasten 2}

**Schauen wir mal, wie das funktioniert**

- :tree:  Suche den Block
``||scene:setze Hintergrundfarbe auf [ ]||`` und setze ihn ganz oben in
den Container **beim Start**, der schon im Arbeitsbereich liegt.

- :paint brush:  Klicke auf das graue Feld im neuen Block, um den Hintergrund auf deine Lieblingsfarbe zu setzen.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {Die Ausnahme}

Keine Regel ohne Ausnahme – schauen wir uns also einen Block an,
der nicht die Farbe seiner Kategorie hat.

Der Block ``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||``
ist rot, liegt aber in der Kategorie ``||sprites:Sprites||``.

In diesem Fall kannst du in den Bläschen links neben den Anweisungen nachsehen, wo du den Block findest.

- :paper plane:  Setze ``||variables(sprites):setze [my sprite] auf Sprite [ ] vom Typ [Player]||`` ans
Ende des Containers **beim Start**.

- :paint brush:  Klicke auf das graue Feld im neuen Block und zeichne ein [__*Sprite*__](#sprote "Ein 2D-Bild, das sich auf dem Bildschirm bewegt") für deine Hauptfigur
 oder wechsle zur **Galerie**, um eins von unseren auszuwählen.


#### ~ tutorialhint

![Bildeditor öffnen](/static/skillmap/misc/open-image-editor-small.gif "So öffnest du den Bildeditor." )

---



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


## {Container-Blöcke}

**Jetzt schauen wir uns verschiedene Arten von Blöcken an und wie man sie benutzt.**

Das hier ist ein [__*Container-Block*__](#blockIt "Ein Block, der andere Blöcke enthält").
Container-Blöcke haben oben und unten eine flache Kante und in der Mitte
eine Lücke, in die andere Blöcke einrasten können. Container-Blöcke bestimmen,
*wann* der Code darin ausgeführt wird. Hier ist ein Beispiel:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```
---

- :game:   Suche einen Container-Block ``||controller:wenn [A] Knopf gedrückt ||``
und ziehe ihn in den Arbeitsbereich. Im nächsten Schritt baust du daran weiter.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```

## {Standardblöcke}

Als Nächstes gibt es [__*Standardblöcke*__](#sBlockIt "Einzeilige Blöcke, aus denen die meisten Programme größtenteils bestehen").
Standardblöcke sind einzeilige Blöcke mit Kerben oben und unten, mit denen
sie zwischen andere Teile einrasten. Diese Blöcke werden der Reihe nach von oben
nach unten in dem Container ausgeführt, in dem sie stecken.

Hier ist ein Beispiel für einen Standardblock:

```block
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```

---

- :paper plane:   Suche einen Block ``||sprites:[mySprite] beginne [spray] Effekt ⊕||``
und setze ihn in den Container ``||controller:wenn [A] Knopf gedrückt||``
… und dann wähle deinen eigenen Effekt!

- :mouse pointer:   Klicke auf das **⊕** rechts am neuen Block, um ein zusätzliches
[__*Argument*__](#iArgue "Eine zusätzliche Information, die der Block verwendet") aufzuklappen.

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, 500)
})
```



## {Werteblöcke}

Zum Schluss gibt es noch [__*Werteblöcke*__](#aBlockIt "Besondere Teile, die anderen Blöcken Werte liefern").
Werteblöcke sind besondere Teile, die anderen Blöcken Informationen
hinzufügen. Manchmal sind sie spitz, manchmal abgerundet,
aber sie brauchen immer einen anderen Block, in den sie einrasten. Werteblöcke sehen ungefähr so aus:

![Werteblöcke](/static/skillmap/interface/parameter-blocks.png "So sieht die Form eines Werteblocks aus" )

---

- :calculator:   Nimm aus der Kategorie ``||math:Mathematik||`` einen Werteblock ``||math: wähle eine zufällige Zahl von [0] bis [10]||``
und setze ihn in das Zahlenfeld des Effekt-Blocks.

- :mouse pointer:   Ändere den Zufallsbereich so, dass eine Zahl zwischen **100** und **600** gewählt wird.

---

_💡 Werteblöcke haben unterschiedliche Formen,
je nachdem, welche Art von Information sie liefern. Jeder Wert
passt nur in bestimmte Arten von Feldern._

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, randint(100,600))
}
```



## {Spielzeit}

**🕹️ Zeit zum Spielen 🕹️**

Schau dir das Spielfenster an.


Klicke auf den Knopf **Ⓐ**, um die Nachricht auf dem Startbildschirm wegzuklicken.
Klicke noch einmal, um deine Effekte zu starten!





## {Alles zusammen}

**🎨 Jetzt wirst du kreativ 🎨**

Schau dir ruhig die zusätzlichen Blöcke an, die wir in den Werkzeugkasten gelegt haben.

Es ist okay, wenn du nicht weißt, was sie alle machen.
Probiere sie aus und sieh, wie sie dein Spiel verändern!

---

**Tipp:** Teste dein Spiel alle paar Schritte, um sicherzugehen,
dass es sich so verhält, wie du willst!



## {Geschafft}

**🎈 Herzlichen Glückwunsch 🎈**

Du hast alles gelernt, was du brauchst, um mit einem neuen Tutorial weiterzumachen.

Jetzt kannst du auf **Fertig** klicken und loslegen, um Spiele mit MakeCode Arcade zu erstellen!




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

```


```template
game.splash("These blocks are in your workspace!")

```
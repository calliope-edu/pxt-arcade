# Pizza-Party
### @explicitHints true


## Pizza-Party Einführung @showdialog

Bist du bereit, eine Pizza-Party zu programmieren?

Folge diesem Tutorial und erstelle dein eigenes Mehrspieler-Erlebnis, das du online mit Familie und Freunden spielen kannst!



![Pizza-Party spielen](https://makecode.com/api/_h9zXUDJP47oF/thumb "Du kannst mit bis zu 4 Personen spielen!")





## {2. Dein erster Block}

**Lerne die Figuren kennen!**

Wir haben die Bilder aller Figuren schon in ein Array geladen.

So weiß das Programm, welches Bild
es welchem Spieler geben soll.


~hint Was ist ein Array?🕵🏽

---

In der Informatik ist ein **ARRAY** eine geordnete Liste von Elementen.

Wir geben dieser Liste einen Namen, damit wir später Elemente daraus abfragen können.

In unserem Programm haben wir die Liste zum Beispiel **characters** genannt.
Wenn wir das erste Bild aus dieser Liste horizontal spiegeln wollen, könnten wir einen Block
wie diesen zu unserem Programm hinzufügen:


```block
let characters: Image[] = []
characters[0].flipX()
```

hint~


#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
```




## {3. Bühne frei}

**Lass uns festlegen, wo das Spiel stattfindet.**

- :tree: Öffne die Kategorie ``||scene:Szene||`` und ziehe <br/>
``||scene:setze Hintergrundbild auf [ ]||``<br/>
an **das Ende** des<br/>
``||loops(noclick): beim Start||`` <br/>
Containers, der schon im Arbeitsbereich ist.

💡 _Wenn du einen anderen Hintergrund möchtest, klicke auf das Bild im Block und wähle einen neuen aus der **Galerie**._




#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]

//@highlight
scene.setBackgroundImage(newpizzaassets.city)
```




## {4. Spieler festlegen}

**Füge Spieler 1 hinzu**

- :suitcase: Öffne die Kategorie ``||pizza:Pizza||`` und ziehe <br/>
``||pizza:set game for [1] player(s) with [characters]||``<br/>
an **das Ende** des<br/>
``||loops(noclick): beim Start||`` <br/>
Containers, der schon im Arbeitsbereich ist.


~hint Kategorie Pizza? 🍕

---

In manchen Tutorials siehst du eigene Kategorien, die es in der normalen Oberfläche nicht gibt. Diese Kategorien sind **Erweiterungen**.

Jeder kann spezielle Blöcke bauen, die andere als Erweiterung zu ihrem Werkzeugkasten hinzufügen können. Weil wir aus einem Tutorial nicht in die **Erweiterungen**-Galerie kommen, sind die Kategorien, die du brauchst, schon im Werkzeugkasten.

Wenn du die Kategorie ``||pizza:Pizza||`` irgendwann in einem anderen Tutorial nutzen willst, hol dir den Teilen-Link für dieses fertige Projekt. Dann kannst du die Blöcke aus diesem Tutorial in ein anderes Projekt importieren!

hint~





#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
scene.setBackgroundImage(newpizzaassets.city)
//@highlight
pizza.setPlayersWith (characters, 1)
```



## {5. Teste dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an, um zu sehen, was dein Code macht.

Du solltest im Spielfenster ein einzelnes Sprite sehen, das wie das erste Bild in deinem Array aussieht.

**Klicke auf das Spielfenster und versuche, dein _Sprite_ mit den Pfeiltasten oder dem Joystick zu bewegen.**


~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur oder jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Auch unsere Spieler werden Sprites sein.

hint~




## {6. Mehr Spieler}

**Füge weitere Spieler hinzu.**

- :game: Ziehe aus der Kategorie ``||mp:Mehrspieler||`` das <br/>
``||mp:on [thisPlayer][connected]||`` <br/>
Bundle in einen **leeren** Bereich des Arbeitsbereichs. <br/>

Wenn jetzt weitere Spieler beitreten, erscheinen mehr Sprites im Spielfenster.

**Probier es aus, indem du links neben dem Spielfenster auf die Spieler-Symbole klickst.**

![Mit den Spieler-Knöpfen links neben dem Spielfenster testen](/static/tutorials/pizza-party/players1.png "Ein Bild, das die Spieler-Symbole hervorhebt")



#### ~ tutorialhint

```blocks
//@highlight
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
```



## {7. Pizza hinzufügen}

**Lass die Pizza fliegen!**

- :circle: Öffne die Kategorie ``||game:Spiel||`` und ziehe das<br/>
``||game: wenn Spielupdate alle [500] ms||``<br/>
Bundle in einen **leeren** Bereich des Arbeitsbereichs.


- :mouse pointer: Klicke auf das Bildquadrat im Bundle, wenn du ein anderes Pizzastück aus der **Galerie** wählen möchtest.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})
```




## {8. Schau mal}


- :binoculars: Schau dir dein Projekt noch einmal an.

Überall sollte Pizza herumfliegen!

~hint Warum passiert das? 🤷🏽‍♂️

---

Schauen wir uns die Blöcke an, die du gerade hinzugefügt hast.

---

<br/>
Dieser **Ereignis**-Block löst alle 500 Millisekunden eine Aktion aus. (Das heißt, jede halbe Sekunde läuft der Code in diesem Container.)


```block
game.onUpdateInterval(500, function () { })
```

---

<br/>
Dieser Block schießt das **Projektil** deiner Wahl vom Bildschirmrand ab – mit einer **Geschwindigkeit**, die bei jedem Durchlauf zufällig gewählt wird.


```block
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))

```


hint~


~hint Erzähl mir von Ereignissen! 🕵🏿‍♂️

---

**EREIGNISSE** sind Dinge, die passieren können (oder auch nicht), während der Code läuft.
Ein Spieler drückt vielleicht einen Knopf, ein Timer läuft ab oder ein Sprite überlappt ein anderes.

Jedem dieser Ereignisse kannst du in Arcade eine besondere Aktion zuweisen.

hint~


~hint Was sind Projektile? 🕵️

---

In MakeCode Arcade sind **PROJEKTILE** Sprites, die sich von selbst bewegen,
oft in großer Zahl.

Projektile haben zusätzliche Eigenschaften, die normale Sprites nicht haben.
Zum Beispiel zerstören sie sich selbst, sobald sie den Bildschirm verlassen, damit
der Computer nicht überlastet wird.

hint~


~hint Was ist Geschwindigkeit? 🕵🏻‍♀️

---

**GESCHWINDIGKEIT** (engl. velocity) gibt an, wie schnell sich etwas in eine bestimmte Richtung bewegt.

In MakeCode gibt es Geschwindigkeit in zwei Richtungen: **vx** und **vy**.

Das Feld **vx** steht für die Geschwindigkeit nach links und rechts.<br/>

_Geschwindigkeit in x-Richtung (waagerecht)_

- Ein **vx** größer als 0 bewegt etwas nach rechts.
- Ein **vx** kleiner als 0 bewegt etwas nach links.
- Ein **vx** von 0 ändert die Position nicht.


Das Feld **vy** steht für die Geschwindigkeit nach oben und unten.<br/>

_Geschwindigkeit in y-Richtung (senkrecht)_

- Ein **vy** größer als 0 bewegt etwas nach unten.
- Ein **vy** kleiner als 0 bewegt etwas nach oben.
- Ein **vy** von 0 ändert die Position nicht.

hint~



## {9. Punkte hinzufügen}

**Gib Punkte, wenn ein Spieler ein Projektil überlappt.**

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe das<br/>
``||sprites:wenn [sprite] der Art [Player] überlappt...||``
<br/>Bundle in einen **leeren** Bereich des Arbeitsbereichs.


~hint Was macht dieses Bundle? 🤷🏽‍♂️

---

Schauen wir uns die Blöcke an, die du gerade hinzugefügt hast.

---

<br/>
Dieser **Ereignis**-Block löst jedes Mal eine Aktion aus, wenn eines deiner Spieler-Sprites ein Projektil-Sprite überlappt. (Also immer, wenn eine Figur die Pizza berührt.)

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) { })
```

---

<br/>
Dieser Block zerstört das überlappte Pizza-Sprite (otherSprite). Außerdem
bekommt das Bild dabei einen besonderen Zerfallseffekt.

```block
    sprites.destroy(otherSprite, effects.disintegrate, 100)
```


---

<br/>
Dieser Block gibt dem Spieler, der die Pizza berührt hat, einen Punkt.

```block
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```




## {10. Testen!}


- :binoculars: Teste dein Projekt!

Benutze die Mehrspieler-Symbole, um dein Spiel mit jedem Spieler zu testen.

Jede Figur sollte einen Punkt bekommen, wenn sie eine Pizza berührt.





## {11. Wer zuerst 20 hat, gewinnt!}

**Wer zuerst 20 Punkte hat, gewinnt!**

- :users: Öffne die Kategorie ``||mp:Mehrspieler||`` und ziehe das<br/>
``||mp:on score [20] for [thisPlayer]||``
<br/>Bundle in einen **leeren** Bereich des Arbeitsbereichs.


~hint Was macht dieses Bundle? 🤷🏽‍♂️

---

Schauen wir uns die Blöcke an, die du gerade hinzugefügt hast.

---

<br/>
Dieser **Ereignis**-Block löst eine Aktion aus, sobald die Punktzahl eines Spielers 20 erreicht. 

```block
mp.onScore(20, function (thisPlayer) { })
```

---

<br/>
Dieser Block sorgt dafür, dass das Spiel sofort mit einem Sieg endet.

```block
    game.gameOver(true)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
```





## {12. Bring Schwung rein!}

**Lass uns etwas Schwung reinbringen!**

Machen wir das Spiel etwas spannender: Sprites dürfen sich gegenseitig aus dem Weg schubsen.

- :group: Öffne die Kategorie ``||mp:Mehrspieler||`` und ziehe das<br/>
``||mp:on [A] button [pressed] for [player]||``
<br/>Bundle in einen **leeren** Bereich des Arbeitsbereichs.


~hint Was macht dieses Bundle? 🤷🏽‍♂️

---

Schauen wir uns die Blöcke an, die du gerade hinzugefügt hast.

---

<br/>
Dieser **Ereignis**-Block löst eine Aktion aus, wenn ein Spieler den A-Knopf drückt.

```block
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {})
```

---

<br/>
Dieser Block ändert die Art des Spielers, der den A-Knopf gedrückt hat, in **Enemy**. Das heißt auch, dass dieser Spieler keine Punkte mehr durch Pizza bekommen kann.

```block
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
```

---


hint~


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
})
```





## {13. Der Rempler}

Hier fügen wir den Code hinzu, der einem anderen Spieler einen Punkt abzieht, wenn der neue Enemy mit ihm zusammenstößt. 


- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe das<br/>
``||sprites:wenn [sprite] der Art [Enemy] überlappt [otherSprite] der Art [Player]||``
<br/>Bundle in einen **leeren** Bereich des Arbeitsbereichs.


~hint Was macht dieses Bundle? 🤷🏽‍♂️

---

Schauen wir uns die Blöcke an, die du gerade hinzugefügt hast.

---

<br/>
Dieser **Ereignis**-Block löst eine Aktion aus, wenn der neue Enemy einen Player überlappt.

```block
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {  })
```

---

<br/>
Dieser Code lässt es so aussehen, als würde die Kamera eine halbe Sekunde lang um 4 Pixel wackeln.

```block
        scene.cameraShake(4, 500)
```

---

<br/>
Dieser Block zieht dem Spieler-Sprite einen Punkt ab.

```block
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
```

<br/>
Dieser Block macht den Enemy wieder zu einem Player, damit das Spiel weitergehen kann.

```block
    let sprite: Sprite = null
       sprite.setKind(SpriteKind.Player)
```

---


hint~

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```

```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```





## {14. Testen!}


- :binoculars: Teste dein Projekt mit zwei oder mehr Spielern.

Klicke auf den grünen Spieler neben dem Spielfenster und drücke dann den (A)-Knopf (oder die Leertaste), bevor du in einen anderen Spieler hineinläufst. Was passiert?


📝 _Hinweis: Wenn beide zusammenstoßenden Spieler die Leertaste (oder den A-Knopf) drücken, heben sie sich gegenseitig auf und niemand verliert Punkte. Du musst so lange in Spieler hineinlaufen, bis die Kamera wackelt, wenn du wieder Punkte sammeln willst!_


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```


## {15. Auf die Plätze, fertig, los}

Sorge dafür, dass alle bereit sind, bevor das Spiel startet: Füge am Anfang des Spiels einen Warte-Bildschirm 
mit Soundeffekten hinzu.

- :circle: Ziehe aus der Kategorie ``||game:Spiel||``<br/>
``||game:zeige Dialog ["Press (A) when everyone is"]...||`` an das Ende des <br/>
``||loops(noclick): beim Start||`` <br/>
Containers, der schon im Arbeitsbereich ist.


- :headphones: Ziehe aus der Kategorie ``||music:Musik||``<br/>
``||music:play [song ] [until done]||`` an das Ende des <br/>
``||loops(noclick): beim Start||`` <br/>
Containers, der schon im Arbeitsbereich ist.

- :mouse pointer: Klicke auf das leere Rechteck im<br/>
``||music(noclick):play song...||``-Block und wechsle zu **Meine Assets**, um **countdown** auszuwählen.



```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```

#### ~ tutorialhint

```blocks
let characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
scene.setBackgroundImage(newpizzaassets.city)
pizza.setPlayersWith (characters, 1)
//@highlight
game.splash("Press (A) when everyone is", "ready to start the game")
//@highlight
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)


```





## {18. Testen}


- :binoculars: Teste dein fertiges Spiel.

Du solltest Punkte sammeln können, indem du Pizza schnappst. Sobald du den (A)-Knopf drückst, sollte die Pizza einfach an dir vorbeifliegen.

**Für noch mehr Spaß: Melde dich an, dann kannst du online mit Freunden spielen!**


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```



## {Geschafft}

**🍕 Mega, Alter! 🍕**

Du hast dein Mehrspieler-Erlebnis fertig!

Wenn du bereit bist, melde dich an und klicke dann auf **Fertig**, um eine Online-Mehrspieler-Runde mit bis zu drei Freunden zu starten.

**Wer schafft als Erstes 20 Punkte?**


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```


```blockconfig.global
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})

let characters: Image[] = []
pizza.setPlayersWith(characters, 1)
scene.setBackgroundImage(newpizzaassets.city)

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
})

mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})

mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)

mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})

game.splash("Press (A) when everyone is", "ready to start the game")

```




```template
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]


```



```ghost

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setKind(SpriteKind.Enemy)
})
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
let projectile: Sprite = null
let characters: Image[] = []
game.splash("Press (A) when everyone is", "ready to start the game")
characters = [
assets.image`red`,
assets.image`blue`,
assets.image`orange`,
assets.image`green`
]
scene.setBackgroundImage(newpizzaassets.city)
pizza.setPlayersWith(characters, 1)
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`pep`, randint(-100, 100), randint(-100, 100))
})

```



```package
multiplayer
newpizzaassets=github:kiki-lee/new-pizza-assets#v0.0.3
```


```customts

//% color=#fe6e5f icon="\uf1ce"
namespace pizza {

    // Make sure not to remove later player when earlier player tested
    export let playersConnected=0;

    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters

    export function setPlayersWith(list: Image[], num: number) {
        if(num >= pizza.playersConnected){
            pizza.playersConnected = num;
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            let xloc = [
            40,
            120,
            40,
            120
            ]
            let yloc = [
            30,
            30,
            90,
            90
            ]
            for (let index = 0; index < num; index++) {
                if (index + 1 <= list.length){
                    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                    mp.moveWithButtons(mp.getPlayerByIndex(index))
                }
            }
        }
    }

    //% blockId=bump_sprite
    //% block="$thisSprite bump $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=otherSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }

}

namespace logic{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}


```

```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FDD3E6",
        "#FB9556",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#726977",
        "#A4839F",
        "#5C406c",
        "#E5CDC4",
        "#AD7B76",
        "#000000"
    ]
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"FYZr@.A$rvN+8LAu/_$h\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":x9Q1i5{znaav46Y1~,x\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"8?=r?1s$%!|AR+tf7xhO\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"k;xtmP}{Hv8/XJ4JfmDy\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"puO5l3FbJBWQ5r:v.SFZ\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"rqrZnC|Ly643G5Xj;3Kh\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"1:,xBs$=yz,5EBRM;^{.\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"-wYv[`!q~SM,o+^P@sIF\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"!uwdEu29lQNP1EOAR;vi\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"la/jdCwimN=V^:,%UZ0a\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"fL~@5nmZB#3Y()i{17,`\">Moon</variable><variable type=\"KIND_MultiplayerState\" id=\"4aX]Tag}almSu1Yh#8Y=\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"nq=+2BtO@:,/Mrxd`(.|\">life</variable><variable id=\"T^uPUb:rM1`*KXuDUK3c\">locations</variable><variable id=\"JS!BfWA8,N#*@#}3vHAw\">projectile</variable><variable id=\"sqUr3drqXd6o;h|zkI_$\">characters</variable><variable id=\"FVI~Q$-s??nIKC-CPr/|\">index</variable><variable id=\"vx~4_DS4tc2BE;Y^dEC.\">mySprite</variable><variable id=\"2$bvHnUD|Gf%IKIk|w(b\">myBall</variable><variable id=\"mKX7Jy~^SYAp6|Fxv{vl\">x-loc</variable><variable id=\"_dgCA+xg+vE.z_lmer$%\">y-loc</variable><variable id=\"C;y/-#PAqdSa80Uk-a}F\">list</variable><variable id=\"A-8gX8[k4p~V1+h$f@Ih\">number</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT_Music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

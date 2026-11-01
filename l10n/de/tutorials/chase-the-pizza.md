# Fang die Pizza
### @explicitHints true


### ~button /#tutorial:/tutorials/chase-the-pizza

Probier dieses Tutorial aus!

### ~

## Einführung @showdialog

![Spielanimation](/static/tutorials/chase-the-pizza/chasing.gif)

Erstelle ein Spiel, in dem du so viel Pizza wie möglich essen musst, 
bevor die Zeit abläuft! 


## {Schritt 2}

**Setze die Hintergrundfarbe**

---

- :tree: Öffne die <br/>
``||scene:Szene||``<br/>
Kategorie im Werkzeugkasten und ziehe <br/>
``||scene:setze Hintergrundfarbe auf [ ]||`` <br/>
in den **leeren** ``||loops(noclick):beim Start||``-Container, der schon in deinem Arbeitsbereich ist. 

~hint Was heißt das? 🤷🏽

---

In den Anweisungen heben wir manche Texte hervor, damit du besser erkennst, wonach du suchen sollst.

Wenn wir dir zum Beispiel den <br/>
``||scene:setze Hintergrundfarbe auf [ ]||``<br/>
Block vorschlagen, meinen wir diesen Block: <br/>

```block
scene.setBackgroundColor(13)
```

hint~

💡 _Du kannst gern deine eigene Farbe wählen, wenn dir die Farbe im Block nicht gefällt._ 


---

- :mouse pointer: Klicke auf den Knopf **Weiter**, um zum 
nächsten Schritt des Tutorials zu gelangen.


#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundColor(13)
```


## {Schritt 3}

Füge ein Spieler-**Sprite** hinzu.

---

- :paper plane: Öffne die Kategorie ``||sprites:Sprites||`` und ziehe <br/>
``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||`` <br/>
an **das Ende** des ``||loops(noclick):beim Start||``-Blocks, der schon in deinem Arbeitsbereich ist.

---


~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur und jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – 
zum Beispiel Größe, Position und Lebensdauer.

Auch unser Spieler ist ein Sprite.

hint~


~hint Zeig es mir 🔍

![Einen Sprite-Block hinzufügen](/static/tutorials/chase-the-pizza/mySprite.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`.`, SpriteKind.Player)
```

## {Schritt 4}

- :mouse pointer: Zeichne dein Sprite: Klicke auf das leere graue Quadrat im <br/> 
``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||`` <br/>
Block, um den **Sprite-Editor** zu öffnen. 


- :mouse pointer: Klicke auf **Fertig**, wenn du mit dem Zeichnen fertig bist.

~hint Zeig es mir 🔍

![Bildeditor](/static/tutorials/chase-the-pizza/draw.gif)

hint~



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


## {Schritt 5}

**Bring das Sprite in Bewegung**

---

- :game: Öffne ``||controller:Controller||`` und ziehe<br/> 
``||controller:bewege [mySprite] mit Knöpfen||``<br/>
an **das Ende** des <br/>
``||loops(noclick):beim Start||``-Blocks, der schon in deinem Arbeitsbereich ist.

Jetzt kannst du dein Sprite mit den Pfeiltasten auf dem Steuerkreuz oder deiner Tastatur über den Bildschirm bewegen. 


~hint Zeig es mir 🔍

![Den Bewegungsblock hinzufügen](/static/tutorials/chase-the-pizza/move.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```




## {Schritt 6}


- :binoculars: Teste dein Projekt im Spielfenster!

Du solltest dein Sprite mit dem Steuerkreuz oder den Pfeiltasten deiner Tastatur bewegen können.


![Das Spielfenster findest du unten rechts](/static/tutorials/chase-the-pizza/game.png)







## {Schritt 7}

**Füge eine Pizza hinzu**

---

- :paper plane: Öffne ``||sprites:Sprites||`` und ziehe<br/> 
``||variables(sprites):setze [pizza] auf Sprite [ ] vom Typ [Player]||``<br/> 
an **das Ende** des <br/>
``||loops(noclick):beim Start||``-Blocks, der schon in deinem Arbeitsbereich ist.


- :mouse pointer: Klicke auf **Player** in<br/>
``||variables(noclick):setze [pizza] auf Sprite [ ] vom Typ [Player]||``<br/> 
und wähle stattdessen **Food**. 

---

~hint Zeig es mir 🔍

![Die Pizza zu Food ändern](/static/tutorials/chase-the-pizza/food.gif)

hint~


```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
pizza = sprites.create(img`.`, SpriteKind.Food)
```


## {Schritt 8}


- :mouse pointer: Wähle deine Pizza aus: Klicke auf das leere graue Quadrat in <br/> 
``||variables(noclick):setze [pizza] auf Sprite [ ] vom Typ [Food]||``, <br/>
um den **Sprite-Editor** zu öffnen. 

- :mouse pointer: Wechsle oben zum Reiter **Galerie**. 
![Die Galerie auswählen](/static/skillmap/assets/gallery.png)


- :mouse pointer: Wähle deine Pizza aus und klicke dann auf **Fertig**.

~hint Zeig es mir 🔍

![Bildergalerie](/static/tutorials/chase-the-pizza/gallery.gif)

hint~


💡 _Du kannst deine Pizza auch selbst zeichnen, wenn du magst!_

```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
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
`, SpriteKind.Food)
```



## {Schritt 9}

**Lass etwas passieren, wenn sich die Sprites überlappen!**

---

- :paper plane: Öffne ``||sprites:Sprites||`` und ziehe den<br/>
``||sprites:wenn [sprite] der Art [Player] überlappt [otherSprite] der Art [Food]||``<br/>
Container in einen **freien Bereich** des Arbeitsbereichs.


🤷🏽‍♀️ _Brauchst du Hilfe? Klicke unten auf die Glühbirne im Kreis, um zu sehen, welche Blöcke du in diesem Schritt brauchst._



```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```



## {Schritt 10}

**Gib einen Punkt, wenn sich die Sprites überlappen**

---

- :id card: Öffne ``||info:Info||`` und ziehe<br/> 
``||info:ändere Punktzahl um [1]||``<br/> 
in den **leeren** <br/>
``||sprites(noclick):wenn [sprite] ... überlappt [otherSprite]||`` <br/>
Container, der schon im Arbeitsbereich ist.



```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```





## {Schritt 11}


- :binoculars: Teste dein Spiel!

Merkst du, dass du VIIIIEEEEL zu viele Punkte bekommst, wenn dein Spieler-Sprite 
die Pizza überlappt?  

Das reparieren wir im nächsten Schritt.




## {Schritt 12}

**Teleportiere die Pizza jedes Mal an eine zufällige Stelle, wenn sich die Sprites überlappen.**

~hint Was heißt zufällig? 🤷🏽‍♀️

---

Eine „zufällige“ Zahl ist ein Wert, den du vorher nicht vorhersagen kannst. 

In Arcade benutzen wir diesen Block:

```block
randint(0, scene.screenWidth())
```

um eine zufällige Zahl zwischen **0** und der **Breite des Bildschirms** zu bekommen.

hint~

---

- :paper plane: Öffne ``||sprites:Sprites||`` und ziehe <br/>
``||sprites:setze Position von [pizza] auf ...||``<br/> 
an **das Ende** des <br/>
``||sprites(noclick):wenn [sprite] ... überlappt [otherSprite]||`` <br/>
Containers, der schon im Arbeitsbereich ist.


```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
```




## {Schritt 13}

**Starte jedes Mal einen Countdown, wenn sich die Sprites überlappen.**

---

- :id card: Ziehe aus ``||info:Info||`` den Block <br/>
``||info:starte Countdown [3] (s)||`` <br/> 
an **das Ende** des <br/>
``||sprites(noclick):wenn [sprite] ... überlappt [otherSprite]||`` <br/>
Containers, der schon im Arbeitsbereich ist.


```blockconfig.local
let pizza = sprites.create(img`
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


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    // @highlight
    info.startCountdown(3)
})
```


## {Geschafft}

**🎉 Super gemacht! 🎉**

Du hast ein **Fang die Pizza**-Spiel gebaut.

Spiel dein Spiel. Wie viele Punkte schaffst du, bevor die Zeit abläuft?

Wenn du fertig gespielt hast, klicke auf **Fertig**, um dein Spiel mit Familie und Freunden zu teilen!



```blockconfig.local
let pizza = sprites.create(img`
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

#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
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
`, SpriteKind.Food)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
```


```blockconfig.global
let pizza: Sprite = null

scene.setBackgroundColor(13)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})
randint(0, scene.screenWidth())
pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
info.startCountdown(3)

```

```package
chase-the-pizza=github:kiki-lee/chase-the-pizza
```

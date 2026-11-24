# Sammle die Kleeblätter
### @explicitHints true

### ~button /#tutorial:/tutorials/collect-the-clovers

Probier dieses Tutorial aus!

### ~

## {Einführung @showdialog}

Erstelle ein Gartenspiel, in dem du vierblättrige Kleeblätter sammelst und den Bienen ausweichst!

![Das Spiel „Sammle die Kleeblätter“ in Aktion](/static/tutorials/collect-the-clovers/collect-clovers-sim.gif)



## {Schritt 2 – Hintergrundbild festlegen}


Fang damit an, die Szene einzurichten.


- :tree: Öffne die Kategorie ``||scene:Szene||`` und ziehe
```block
scene.setBackgroundImage(assets.image`background`)
```
in den ``||loops(noclick):beim Start||``<br/>
Container, der schon im Arbeitsbereich ist.


<!-- Removing until anigifs are ready>

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

![Hintergrundblock holen](/static/skillmap/star/set-bg.gif "Zieh den Block herein, um das Hintergrundbild festzulegen." )

hint~

------------>

- :mouse pointer: Wenn du fertig bist, klicke auf **Weiter**, um den nächsten Schritt zu sehen.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
```




## {Schritt 3}

**Wähle deinen Hintergrund!**<br/>
🖼 🖼 🖼

---


- :mouse pointer: Klicke auf das Bild in<br/>
```block
scene.setBackgroundImage(assets.image`background`)
```
um die Szene zu ändern.


- :paint brush: Zeichne einen schönen Rasen-Hintergrund oder wähle ein Bild aus der **Galerie**.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
```




## {Schritt 4}

**Schau ins Spielfenster 🎮**

Siehst du den Hintergrund, den du ausgewählt hast?

![Das Spielfenster ist unten links.](/static/skillmap/mole/game1.png " ")



## {Schritt 5}

**⭐ Wähle deinen Helden ⭐**<br/>

Möchtest du einen Hasen? Eine Prinzessin? Einen Krieger?


- :paper plane: Ziehe aus ``||sprites: Sprites||``
```block
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
```
an **das Ende** des ``||loops(noclick): beim Start||``-Containers.


- :paint brush: Klicke auf das Hasenbild und wechsle zur **Galerie**, um
 eine Figur für dein Projekt auszuwählen.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
//@highlight
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
```





## {Schritt 6}

**Der Held muss sich über den Bildschirm bewegen können.**


- :game: Hol dir aus der Kategorie ``||controller: Controller||``
```block
controller.moveSprite(hero)
```
und setze es an **das Ende** des ``||loops(noclick): beim Start||``-Blocks, der schon im Arbeitsbereich ist.




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
//@highlight
controller.moveSprite(hero)
```




## {Schritt 7 – Den Spieler auf dem Bildschirm halten}


**Der Held kann den Bildschirm verlassen, wenn es wild zugeht.**

Das reparieren wir jetzt.


- :paper plane: Hol dir aus der Kategorie ``||sprites: Sprites||``
```block
let hero: Sprite = null
hero.setStayInScreen(true)
```
und setze es an **das Ende** des ``||loops(noclick): beim Start||``-Blocks, der schon im Arbeitsbereich ist.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
//@highlight
hero.setStayInScreen(true)
```



## {Schritt 8}

**Schau ins Spielfenster 🎮**

Du solltest deinen Helden mit dem Steuerkreuz oder den Pfeiltasten bewegen können.

Dein Held sollte die ganze Zeit auf dem Bildschirm bleiben.



## {Schritt 9 – Spielupdate}

Alle 5 Sekunden sollen mehr Kleeblätter und Bienen im Spiel auftauchen.

- :circle: Hol dir aus der Kategorie ``||game:Spiel||``
```blocks
game.onUpdateInterval(200, function () { })
```
und setze es in einen **freien Bereich** des Arbeitsbereichs.


- :mouse pointer: Klicke auf den Wert **200 ms** und ändere ihn auf **5 Sekunden**
(das sind 5000 Millisekunden).


#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(5000, function () {

})
```




## {Schritt 10}

**Der Held braucht etwas zum Sammeln!**

Fügen wir ein paar Kleeblätter hinzu 🍀

---

- :paper plane:  Hol dir aus ``||sprites:Sprites||`` den Block
```block
    let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
```
und ziehe ihn in den leeren ``||game(noclick):wenn Spielupdate alle [5000] ms||``-Container, der schon in deinem Arbeitsbereich ist.


- :paint brush:  Klicke auf das **graue Quadrat** und zeichne ein Kleeblatt (oder wähle eines aus der **Galerie**).



#### ~ tutorialhint


```blocks
game.onUpdateInterval(5000, function () {
    //@highlight
    let clover = sprites.createProjectileFromSide(assets.image`collect`, 50, 50)
})
```

## {Schritt 11 – Zufällige Bewegungen hinzufügen}

Unsere Kleeblätter kommen immer von oben rechts und fallen nach unten links.

Mit Zufallszahlen bringen wir Abwechslung hinein.



- :calculator:  Ziehe aus der Kategorie ``||math:Mathematik||`` zwei
```block
randint(-50, 50)
```
Blöcke in den Arbeitsbereich.


- :mouse pointer: Setze je einen ``||math:wähle eine zufällige Zahl||``-Block anstelle der Werte **vx** und **vy** in den <bbr/>
``||variables:setze clover auf Projektil||`` <br/>
Block.


~hint Was sind Zufallszahlen? 💡

---

**Zufallszahlen** sind Zahlen, die keinem vorhersehbaren Muster folgen. Mit unserem `random`-Block bekommst du eine Zahl zwischen dem Minimum und dem Maximum, die du festlegst – aber du weißt vorher nicht, welche Zahl es wird.

Die Zahl wird jedes Mal neu gewählt, wenn der Block ausgeführt wird. Dabei kann zufällig dieselbe Zahl wie beim letzten Mal herauskommen oder eine andere.

hint~


~hint Was sind vx und vy? 💡

---

Das Feld **vx** steht für die **Geschwindigkeit** des Objekts von Seite zu Seite.<br/>
Die Geschwindigkeit eines Objekts gibt an, wie schnell es sich in eine Richtung bewegt.

_Geschwindigkeit in x-Richtung (waagerecht)_

- Ein **vx** größer als 0 lässt etwas nach rechts wandern.
- Ein **vx** kleiner als 0 lässt etwas nach links wandern.
- Ein **vx** von 0 ändert die Position nicht.

_Geschwindigkeit in y-Richtung (senkrecht)_

- Ein **vy** größer als 0 lässt etwas nach unten wandern.
- Ein **vy** kleiner als 0 lässt etwas nach oben wandern.
- Ein **vy** von 0 ändert die Position nicht.

hint~


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {

//@highlight
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
})
```

## {Schritt 12 – Bienen-Projektil hinzufügen @fullscreen}

Jetzt können wir die Biene hinzufügen 🐝

---

- :paper plane:  Hol dir aus ``||sprites:Sprites||``
```block
    let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
```
und ziehe es an **das Ende** des ``||game(noclick):wenn Spielupdate alle [5000] ms||``-Containers, der schon in deinem Arbeitsbereich ist.


- :paint brush:  Klicke auf das **graue Quadrat** und zeichne eine Biene (oder wähle eine aus der **Galerie**).


- :calculator:  Ziehe aus ``||math:Mathematik||`` weitere
```block
randint(-50, 50)
```
Blöcke in **vx** und **vy** des <br/>
``||variables:setze bee auf Projektil||``</br> Blocks.



```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
//@highlight
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
})
```

## {Schritt 13 – Die Biene zum Gegner machen}


Damit die Biene gefährlich wird, müssen wir ihre **Art** auf **Enemy** ändern.

---

- :paper plane:  Hol dir aus ``||sprites:Sprites||``
```block
    let bee: Sprite = null
     bee.setKind(SpriteKind.Enemy)
```
und ziehe es an **das Ende** des ``||game(noclick):wenn Spielupdate alle [5000] ms||``-Containers, der schon in deinem Arbeitsbereich ist.


```blockconfig.local


let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
//@highlight
    bee.setKind(SpriteKind.Enemy)
})
```

## {Schritt 14 – Überlappungsverhalten hinzufügen}

Jetzt kommt der Code, der einen Punkt gibt, wenn der Held ein Kleeblatt überlappt.

- :paper plane:  Hol dir aus ``||sprites:Sprites||``
```blocks
   sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {  })
```
und ziehe es in einen **freien** Bereich des Arbeitsbereichs.


~hint Was ist ein Sprite? 💡

In Arcade heißt jede Figur und jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Auch unser Maulwurf ist ein Sprite.

hint~


~hint Warum „sprite“ und „othersprite“? 💡

---

Vielleicht denkst du, die Überlappung sollte die Namen „hero“ und „clover“ benutzen – aber das würde später Probleme machen.

Jedes Kleeblatt heißt „clover“. Wenn du also beim Überlappen „clover“ löschst, wird immer das zuletzt erstellte Kleeblatt gelöscht – **nicht** das, das du gerade berührt hast!

Deshalb benutzt das Überlappungsereignis die Namen „sprite“ und „othersprite“. So hast du Spitznamen, mit denen du _genau_ die Sprites erreichst, die sich überlappt haben.


hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {  })
```



## {Schritt 15 – Kleeblatt zerstören}

Wenn das Kleeblatt gesammelt wurde, muss es verschwinden.


- :paper plane:  Hol dir aus ``||sprites:Sprites||`` den

```block
    let anderesSprite: Sprite = null
    anderesSprite.destroy()
```
Block und lege ihn in den leeren<br/>
``||sprites(noclick):wenn sprite überlappt||``<br/>
Container, der schon im Arbeitsbereich ist.


~hint Warum heißt das Kleeblatt „othersprite“? 💡

---

Vielleicht denkst du, die Überlappung sollte die Namen „hero“ und „clover“ benutzen – aber das würde später Probleme machen.

Jedes Kleeblatt heißt „clover“. Wenn du also beim Überlappen „clover“ löschst, wird immer das zuletzt erstellte Kleeblatt gelöscht – **nicht** das, das du gerade berührt hast!

Deshalb benutzt das Überlappungsereignis die Namen „sprite“ und „othersprite“. So hast du Spitznamen, mit denen du _genau_ die Sprites erreichst, die sich überlappt haben.



hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
//@highlight
    anderesSprite.destroy()
})
```



## {Schritt 16}

**Schau ins Spielfenster 🎮**

Du solltest deinen Helden mit dem Steuerkreuz oder den Pfeiltasten bewegen können.

Wenn dein Held ein Kleeblatt überlappt, sollte das Kleeblatt verschwinden.


## {Schritt 17 – Effekt hinzufügen @fullscreen}


- :binoculars: Suche den
```block
    let anderesSprite: Sprite = null
    anderesSprite.destroy()
```
Block, der schon im Arbeitsbereich ist.


- :mouse pointer: Klicke auf das Plus-Symbol **(+)**, um den Block zu erweitern. Klicke dann auf das Dropdown-Menü **Spray** und wähle einen Effekt, der dir gefällt.


- :mouse pointer: Klicke auf das Dropdown **500 ms** und wähle **100 ms**, damit der Effekt schön kurz bleibt.

![Einen Zerstören-Effekt wählen](/static/tutorials/collect-the-clovers/destroy-effect.png)


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

```validation.local
# BlocksExistValidator
    * Enabled: false
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
//@highlight
    anderesSprite.destroy(effects.confetti, 100)
})
```


## {Schritt 18 – Einen Sound abspielen}


**Füge Soundeffekte hinzu**


- :headphones: Hol dir aus der Kategorie ``||music:Musik||``
```block
    music.baDing.play()
```
und ziehe es an **das Ende** des <br/>
``||sprites(noclick):wenn sprite überlappt||`` <br/>
Containers, der schon in deinem Arbeitsbereich ist.


- :mouse pointer: Klicke auf das Dropdown **ba ding** und wähle den Sound, der dir am besten gefällt.


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.confetti, 100)
//@highlight
    music.baDing.play()
})
```

## {Schritt 19 – Punktzahl ändern}


**Gib Punkte, wenn ein Kleeblatt gesammelt wird**


- :id card: Hol dir aus der Kategorie ``||info:Info||``
```block
    info.changeScoreBy(1)
```
und ziehe es an **das Ende** des <br/>
``||sprites(noclick):wenn sprite überlappt||`` <br/>
Containers, der schon in deinem Arbeitsbereich ist.


```blockconfig.local
let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.confetti, 100)
    music.baDing.play()
//@highlight
    info.changeScoreBy(1)
})
```

## {Schritt 20 – Überlappungsverhalten für die Biene @fullscreen}

**Wir brauchen ein Überlappungsverhalten für die Biene**

- :mouse pointer: Klicke mit der rechten Maustaste auf den<br/>
``||sprites(noclick):wenn sprite überlappt||`` <br/>
Container, der schon in deinem Arbeitsbereich ist.
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```
und wähle **Duplizieren**.

_Keine Sorge, wenn er deaktiviert aussieht – das reparieren wir gleich._


- :mouse pointer: Klicke im kopierten <br/>
``||sprites(noclick):wenn sprite überlappt||`` <br/>
Block auf die Art ``||sprites:Projectile||`` und ändere sie zu ``||sprites:Enemy||``.

![Das Überlappungsereignis für den Gegner duplizieren](/static/tutorials/collect-the-clovers/overlaps-enemy.png)


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```

## {Schritt 21 – Effekte und Sounds ändern}


Wählen wir bessere Sounds und Effekte für die Biene aus.

- :binoculars: Suche den
```block
    let anderesSprite: Sprite = null
    anderesSprite.destroy(effects.disintegrate, 100)
```
Block im  <br/>
``||sprites(noclick):wenn sprite überlappt [Enemy]||`` <br/>
in deinem Arbeitsbereich und ändere den Effekt in etwas weniger Fröhliches.



- :binoculars: Suche den
```block
    music.baDing.play()
```
Block im  <br/>
``||sprites(noclick):wenn sprite überlappt [Enemy]||`` <br/> Container, der schon im Arbeitsbereich ist, und ändere den Sound in einen, der besser zu einem Bienenstich passt.



```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeScoreBy(1)
})
```

## {Schritt 22 – Ein Leben verlieren}

Statt Punkte zu bekommen, soll unser Spieler ein Leben verlieren, wenn er in eine Biene läuft.


- :binoculars: Suche den
```block
    info.changeScoreBy(1)
```
Block im  <br/>
``||sprites(noclick):wenn sprite überlappt [Enemy]||`` <br/> Container, der schon im Arbeitsbereich ist, und **lösche ihn**.



~hint Wie lösche ich einen Block? 💡

---

Du kannst einen Block auf drei Arten löschen:<br/>
1) Klicke auf den Block, um ihn auszuwählen, und drücke dann **Entf** auf deiner Tastatur<br/>
2) Klicke mit der rechten Maustaste auf den Block und wähle **Blöcke löschen**<br/>
3) Ziehe den Block zurück in den Werkzeugkasten<br/>

hint~

- :id card: Hol dir aus der Kategorie ``||info:Info||``
```block
    info.changeLifeBy(-1)
```
und lege es an **das Ende** des  <br/>
``||sprites(noclick):wenn sprite überlappt [Enemy]||`` <br/> Containers, der schon im Arbeitsbereich ist.


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
//@highlight
    info.changeLifeBy(-1)
})
```


## {Schritt 23 – Spiel dein Spiel!}

**Das war’s!**
🎉 🎉 🎉

Probier jetzt dein fertiges Spiel im Vollbild-Simulator aus.

Klicke auf **Fertig**, um dein Spiel mit Familie und Freunden zu teilen!


```validation.global
# BlocksExistValidator
```


```blockconfig.global
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) { })
let anderesSprite: Sprite = null
info.changeLifeBy(-1)
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
anderesSprite.destroy()
game.onUpdateInterval(200, function () {

})

let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
let bee: Sprite = null
randint(-50, 50)
bee.setKind(SpriteKind.Enemy)
```


```package
clover=github:kiki-lee/clover-images
```


```ghost
info.setScore(0)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image5\": {\n        \"data\": \"hwQQABMAAAARAQAAAAAAAAABAAAREQEAAAAAEBEBAAAQMxEAAAAQ0REBAAAAMRMREAHQ57ELAAAAEDMRERF75+4NAAAAABDRHRH97O4NAAAAAADRHxv95+4NAAAAAAARMRF95+4NAAAAAADRHxt95+4NAAAAADHRHRH97+4NAAAAEDMRERH77O4NAAAAMRMNEAHw5+4NAAAQEdEAAABw57ELAAAQEQEAAAAQ0REBAAAAEQEAAAAAEBEBAAAAAAAAAAAAAAABAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hero\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAsAuwuwsAAAC7t7B1uwAAsHu2sHe3CwBbd7awd2cLAHt3Z3tnuwAAu7t3e7YAAAAAsHt3u7sLAACwe3drZrsLsLt3e7YLdgtbd2d7Z7tgC7t3trB3tgsAsHu2sHdnCwAAe7ewdbsAAACwC7C7CwAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"collect\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAD/DwAAAAAA8P39AAAAAAD///8PAAAAAP///w8AABEA8P//ABABCQlAVUUACQmRkFVVVZWQAQmR9f//lQEJkZBfVVWfkAEBmVVVVZUJAZmQ9P//lJAJAZFfVVWfAQGZCUBVRQCZCQAAAP8PAAAAAAAA8AAAAAAAAADwAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"avoid\"\n    },\n    \"image1\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3Fxd3d3d3d3Nzd3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3c3N3c3N3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3Nzd3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlxcXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3V1d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d1dXd3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dXV3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3cXF3d3d3d3dzc3d3Nzd3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3Fxd3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmVlZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3c3N3dzc3d3dxcXd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3Nzd3c3N3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3V1d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d1dXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3dxd3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmTk5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3Fxd3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZl5d3dxcXd3d3d3d3d3d3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZEZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZEZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"background\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image5\":\n            case \"hero\":return img`\n11..............\n111.........11..\n1131.......1111.\n.1331.....13111.\n.1133....133111.\n..1131...331d...\n...11111111d....\n...11dd1dd1.....\n....1df1fd1.....\n...111131111....\n...111b1b111....\n....1111111.....\n....bdddddb.....\n..1d7ff77fff71..\n..177c777fc771..\n.1deeeeeeeeeed1.\n.111eeeeeeee111.\n.11beeeeeeeeb11.\n111bddddddddb111\n`;\n            case \"image2\":\n            case \"collect\":return img`\n. . . b b b . . . b b . . . . . \n. . b 5 7 b . . b 5 b b . . . . \n. b b 7 7 b . . b 7 7 b b . . . \nb b 7 7 7 b b b b 7 7 7 7 b . . \nb 7 6 6 7 7 b b 7 7 6 6 7 b . . \n. b b b 6 7 7 7 7 6 b b b . . . \n. . . . b b 7 7 b b . . . . . . \nb b b b 7 7 7 7 7 7 b b b b . . \nb 5 7 7 7 6 b b 6 7 7 7 5 b . . \nb 7 7 7 6 b b 6 b 6 7 7 7 b . . \nb b 7 7 b . b 6 b b 6 7 b b . . \n. b b 6 b . b 6 . b b 6 b . . . \n. . b b . . b b 6 . b b . . . . \n. . . . . . . b 7 6 . . . . . . \n. . . . . . . b b b . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"avoid\":return img`\n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \nf d f f f 5 5 f 5 5 f 5 5 f . . \nf f f f f 5 5 f 5 5 f 5 5 f f f \nf d f f f 5 5 f 5 5 f 5 5 f . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image1\":\n            case \"background\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999911119999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999911111111119999999111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999199991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999991111111199999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111119999111111111111199999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111119999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111119999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999399999999999999999999999999\n9999999999999999999999999999199999999999999999999999999999999999999999999999999999959599999999999999999999999999999999999999999999993939999999999999999999999999\n7777777777777777777777777771717777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777377777777777777777777777777\n7777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775757777777777777777717777777777777\n7777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777773777777777777777777777777777777777577777777777777777171777777777777\n7777777777777777777777777777777777777777777777777777777777777777717177777777777777777777777737377777777777777777777777777777777777777777777777777717777777777777\n7777777777777777377777777777777777777777777777777777777777777777771777777777777777777777777773773777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777757577777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777575777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777771717777777777777777757777777777777777777777777777777773777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777777777777777777777777777777777777737377777777777777777777777717177777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777773773777777777777777777777777771777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777777777777777373777777777777777\n7777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777757577777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777377377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777177777777777777\n7777777777773737777377777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777771717777777777777\n7777777777777377773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777377377777777777777777777777777777777777177777777777777\n7777777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777775757777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777717777777777777777777777777773737777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777171777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777737377777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"pcoKae73BU`bxMH8)EPW\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"s00fY26[O8lQ._PjJwO*\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"7a86~(il_yrY+NfHdD)7\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"}$#8kE~1GrFf$iYM8n6Z\">Enemy</variable><variable id=\"rq-L^pbk[}}i0*M8IU16\">projektil</variable><variable id=\"W2UpOS%v{TCp}r.:_:FF\">bee</variable><variable id=\")XVxwBJSsl^l_|zg}K3)\">hero</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"clovers-assets-only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

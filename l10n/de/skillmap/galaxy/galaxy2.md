# Kommunikation ist alles!

## Einführung @showdialog

Bist du bereit, dein Abenteuer zu erweitern?

In diesem Tutorial sorgst du dafür, dass es so aussieht, als würdest du
Informationen an Satelliten senden,
wenn der Knopf (A) gedrückt wird.

![Projektile abfeuern](/static/skillmap/galaxy/galaxy2.gif "Möchtest du meine Informationen?")


## {2. Ausprobieren}

**🚀 Im Arbeitsbereich ist schon der Code für ein fliegendes Schiff**

---

Spiele mit deinem Projekt im Spielfenster, um zu prüfen, ob alles so funktioniert, wie du es erwartest.



## {3. Ein Knopf-Ereignis hinzufügen}

**Jetzt geht's los!**

Lass uns Projektile abfeuern, wenn der Knopf (A) gedrückt wird!

~hint Was sind Projektile?💡

---

In MakeCode Arcade sind Projektile Sprites, die sich von selbst bewegen,
oft in großer Zahl.

Projektile haben zusätzliche Eigenschaften, die normale Sprites nicht haben.
Zum Beispiel zerstören sie sich selbst, sobald sie den Bildschirm verlassen, damit
der Computer nicht überlastet wird.

hint~

- :game: Ziehe aus ``||controller:Controller||`` den<br/>
``||controller:wenn [A] Knopf [gedrückt] ||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.


- :paint brush: Klicke auf das leere Feld und wechsle zur **Galerie**, um
das Bild **101** auszuwählen.


Wenn du jetzt den **Knopf (A)** (oder die Leertaste) drückst,
sendet dein Schiff Informationen geradeaus.



```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projektil = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})
```



## {Schritt 4}

**Probier es aus!**

- :binoculars: Klicke auf den Spielbildschirm.

Drücke den Knopf (A) oder die Leertaste so schnell du kannst, um Informationen durch die Galaxie fliegen zu lassen.



## {5. Satelliten hinzufügen}

**Füge die Satelliten hinzu**<br/>
🛰️ 🛰️ 🛰️

Lass uns Code hinzufügen, der alle paar Sekunden Satelliten erscheinen lässt.

---

- :circle: Ziehe aus ``||game: Spiel||`` den<br/>
``||game:wenn Spielupdate alle [2000] ms||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.


- :paint brush: Klicke auf das leere Feld und wechsle zur **Galerie**, um
das Bild **Satellite** auszuwählen.


Jetzt sollten alle 2000 ms (2 Sekunden) Satelliten vom Himmel fallen,
und zwar an einer zufälligen waagerechten Position.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})
```



## {6. Hochladen}

**Information empfangen**

Füge den Code hinzu, der dem Computer sagt, was passieren soll, wenn das Informations-Projektil den Satelliten berührt.

---

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den<br/>
``||sprites:wenn [sprite] der Art [Projectile] überlappt [othersprite] der Art [Satellite]||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.

Dieser Block erkennt, wenn ein Informations-**Projektil den Satelliten berührt**.
Dann zerstört er das Projektil (so als hätte der Satellit die Information hochgeladen)
und erhöht deine Punktzahl um **1**.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, anderesSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
```



## {7. Den Upload anzeigen}

**Hochladen und wegfliegen**

Wenn Informations-Projektile die Satelliten berühren,
sollen die Satelliten den Upload anzeigen und dann wegfliegen.

---

- :paper plane: Ziehe aus ``||sprites:Sprites||``<br/>
``||sprites:[anderesSprite] sagt ["Uploading..."]||``<br/>
**ans Ende** des<br/>
``||sprites(noclick):wenn [sprite] der Art [Projectile] überlappt [othersprite] der Art [Satellite]||``<br/>
Containers, der schon in deinem Arbeitsbereich liegt.


Dadurch sendet dein Satellit die Nachricht „Uploading...“, wenn er deine Informationen empfängt.

~hint Warum „anderesSprite“? 💡

---

Vielleicht ist dir aufgefallen, dass die Satelliten beim Erstellen den Namen „mySat“ bekommen,
wir sie im Überlappungs-Ereignis aber mit dem Namen „anderesSprite“ ansprechen.

Das liegt daran, dass der Name **mySat** von allen Satelliten gemeinsam benutzt wird.
Wenn du diesen Namen verwendest, weißt du nicht, welcher Satellit den Befehl bekommt.

In unserem Programm wollen wir Code genau für die beiden Sprites schreiben,
bei denen ein bestimmtes Projektil einen bestimmten Satelliten berührt.
Deshalb liefert das Überlappungs-Ereignis die Spitznamen **sprite** und **anderesSprite**.

So wie wir unseren Code geschrieben haben, ist **sprite** genau das Projektil, das wir brauchen, und
**anderesSprite**
genau der Satellit, den wir brauchen.

hint~


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, anderesSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    anderesSprite.sayText("Uploading...")
})
```



## {10. Wegfliegen}

Damit der Satellit nach dem Upload wegfliegt, musst du seine Geschwindigkeit ändern.

---

- :paper plane: Ziehe aus ``||sprites:Sprites||``<br/>
``||sprites:setze Geschwindigkeit von [anderesSprite] auf vx [-30] vy [-30]||``<br/>
**ans Ende** des<br/>
``||sprites(noclick):wenn [sprite] der Art [Projectile] überlappt [othersprite] der Art [Satellite]||``<br/>
Containers, der schon in deinem Arbeitsbereich liegt.


Dadurch fliegt dein Satellit nach oben links davon, wenn er
deine Informationen empfängt.



```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, anderesSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    anderesSprite.sayText("Uploading...")
    anderesSprite.setVelocity(-30, -30)
})
```



## {Schritt 11}

**Probier dein Spiel aus!**

- :binoculars: Klicke auf den Spielbildschirm.

Du solltest mit dem Knopf (A) Informationen an die Satelliten senden können. Wenn ein Satellit
Informationen empfängt, sollte er „Uploading...“ sagen und wegfliegen – und du bekommst einen Punkt.



## {Geschafft}

🎆 **Herzlichen Glückwunsch** 🎆

Jetzt kannst du Punkte sammeln, indem du Informationen an Satelliten sendest!

~hint Wie kann ich mein Projekt teilen?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf „Fertig“, um zur Skillmap zurückzukehren. Unten rechts findest du dann den Teilen-Knopf.

![Teile deine Karte](/static/skillmap/galaxy/share.gif )

hint~

Wenn du bereit bist, klicke auf **Fertig**, um zur Skillmap zurückzukehren. Dort
erfährst du als Nächstes, wie du Asteroiden zu deinem Projekt hinzufügst!


```blockconfig.global
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projektil = sprites.createProjectileFromSprite(img`
. 1 .
. 1 .
. 1 .
. . .
. 1 .
1 . 1
1 . 1
. 1 .
. . .
. 1 .
. 1 .
. 1 .
`, myShip, 0, -150)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(img`.`, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, anderesSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
let anderesSprite: Sprite = null
anderesSprite.sayText("Uploading...")
anderesSprite.setVelocity(-30, -30)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projektil = sprites.createProjectileFromSprite(assets.image`Dart1`, myShip, 0, -150)
    projektil.startEffect(effects.fire)
})

let projektil: Sprite = null
let statusleiste: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(assets.image`Rocket`, SpriteKind.Player)
controller.moveSprite(myShip, 100, 100)
myShip.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
})

myShip.y = 100

sprites.onOverlap(SpriteKind.Satellite, SpriteKind.Projectile, function (sprite, anderesSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    anderesSprite.sayText("Uploading...")
    anderesSprite.setVelocity(-30, -30)
})

```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
```


```customts
    namespace SpriteKind {
      //% isKind
        export const Satellite = SpriteKind.create()
    }
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF92BA",
        "#993648",
        "#FF8135",
        "#FFF76B",
        "#0BA6B1",
        "#FFB5AF",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#C0C0C0",
        "#180A42",
        "#001E57"
    ]
}
```
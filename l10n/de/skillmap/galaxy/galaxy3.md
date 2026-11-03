# Jetzt wird's gefährlich

## Einführung @showdialog

**Reisen durch die Galaxie können gefährlich sein!**

Lass uns ein paar Asteroiden hinzufügen, denen dein Schiff ausweichen muss.

![Navigieren](/static/skillmap/galaxy/galaxy3.gif "Aus dem Weg!")


## {2. Feindregen}

**Achtung, Asteroiden!**<br/>
☄️ ☄️ ☄️

Lass uns Code hinzufügen, der alle paar Sekunden Asteroiden auf das Schiff zufallen lässt.

---

- :circle: Ziehe aus ``||game: Spiel||`` den<br/>
``||game:wenn Spielupdate alle [3000] ms||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.


- :paint brush: Klicke auf das leere Feld und wechsle zur **Galerie**, um
das Bild **Asteroid** auszuwählen.


Siehst du, wie ähnlich das dem Code ist, der unsere Satelliten erschaffen hat?


```blocks

game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})
```


## {3. Zusammenstoß}

**Kollision steht bevor!**

Füge Code hinzu, der dem Computer sagt, was passieren soll, wenn der
Asteroid (**Enemy**) das Schiff (**Player**) berührt.

---

- :paper plane: Ziehe aus ``||sprites:Sprites||`` den<br/>
``||sprites:wenn [sprite] der Art [Enemy] überlappt [othersprite] der Art [Player]||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.

Dieser Block erkennt, wenn ein Asteroid das Schiff des Spielers berührt.
Dann zerstört er den Asteroiden und zieht ein Leben ab.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
```



## {4. Wackeln}

**Etwas Dramatik**

Das Spiel sieht besser aus, wenn du ein bisschen Pep hinzufügst.

---

- :tree: Ziehe aus ``||scene:Szene||``<br/>
``||scene:Kamera schütteln um [4] Pixel für [500] ms ||`` <br/>
**an den Anfang** des<br/>
``||sprites(noclick):wenn [sprite] der Art [Enemy] überlappt [othersprite] der Art [Player]||``<br/>
Blocks, der schon im Arbeitsbereich liegt.

Jetzt wackelt dein Schiff, wenn es von einem Asteroiden getroffen wird.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    //@highlight
    scene.cameraShake(4, 500)
    sprite.destroy()
    info.changeLifeBy(-1)
})
```


## {5. Funken}

**Füge Funken hinzu**

---

- :tree: Schau in den<br/>
``||sprites(noclick):wenn [sprite] der Art [Enemy] überlappt [othersprite] der Art [Player]||``<br/>
Block im Arbeitsbereich und klicke auf das Plus (+) rechts neben dem <br/>
``||sprites(noclick):zerstöre [sprites] + ||`` <br/>
Block.

- :mouse pointer: Wähle einen Effekt für deinen Asteroiden. Lass ihn zum Beispiel **zerfallen** oder im **Feuer** verschwinden.

- :mouse pointer: Ändere die Effektdauer auf **100**, damit er schön kurz bleibt.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    //@highlight
    sprite.destroy(effects.ashes, 100)
    info.changeLifeBy(-1)
})
```



## {6. Gewinnen}

**Deine Mission**

Die NASA braucht dich: Aktualisiere 20 Satelliten, um zu gewinnen!

---

- :id card: Ziehe aus ``||info:Info||`` den<br/>
``||info:bei Punktzahl [20]||``<br/>
Block in **einen freien Bereich** des Arbeitsbereichs.

Jetzt gewinnst du das Spiel, wenn deine Punktzahl 20 erreicht, bevor dir die Leben ausgehen!


```blocks
info.onScore(20, function () {
    game.gameOver(true)
})
```


## {7. Animieren}

**Animiere das Spiel**

Du kannst jedes deiner Sprites animieren,
indem du einen ``||animation:Animation||``-Block
ans Ende des Ereignisses ziehst, in dem es erstellt wird.

---

- :chevron up: Klicke auf **Fortgeschritten**, um das Menü ``||animation:Animation||`` anzuzeigen.

- :sync: Lege aus ``||animation:Animation||`` den<br/>
``||animation:animiere [myShip]||``<br/>
Block **ans Ende** des ``||loops(noclick):beim Start||`` Containers, der schon im Arbeitsbereich liegt.

- :mouse pointer: Klicke auf das leere Feld, um dein animiertes Schiff auszuwählen.


```blocks
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
    //@highlight
    animation.runImageAnimation(
        myShip,
        [img`
    .......99.......
    ......9119......
    .....911119.....
    .....116a11.....
    .....16cca1.....
    .....11cc11.....
    ....11111111....
    ....961111a9....
    ...96f1111fa9...
    ...9ff1111ff9...
    ..96ff1111ffa9..
    ..9fff1111fff9..
    .96fff1111fffa9.
    .96f.ffffff.fa9.
    .d....aaaa....9.
    ......4554......
    .....4.44.4.....
    ....4.5455.4....
    ........4.......
    ................
    ................
    ................
    `],
        100,
        true
    )
```





## {Schritt 8}

**Probier dein Spiel aus!**

- :binoculars: Klicke auf den Spielbildschirm.

Aus deinen Triebwerken sollte Feuer kommen, und dein Schiff sollte wackeln, wenn ein Asteroid es trifft.




## {9. Noch mehr Animation}

Findest du heraus, wie du deine Satelliten und Asteroiden animierst?

---

- :sync: Lege aus ``||animation:Animation||`` den<br/>
``||animation:animiere [myShip]||``<br/>
Block **ans Ende** des ``||game(noclick):wenn Spielupdate||`` Containers,
in dem dein Sprite erstellt wird.

- :mouse pointer: Ändere ``||variables(noclick):myShip||`` in den Namen des Sprites, das du
animieren möchtest, und klicke dann auf das leere Feld, um **deine Animation auszuwählen**.


```blocks
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
    //@highlight
    animation.runImageAnimation(
        myRock,
        [img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . c c c . . . . . .
    . . . . . . a b a a . . . . . .
    . . . . . c b a f c a c . . . .
    . . . . c b b b f f a c c . . .
    . . . . b b f a b b a a c . . .
    . . . . c b f f b a f c a . . .
    . . . . . c a a c b b a . . . .
    . . . . . . c c c c . . . . . .
    . . . . . . . c . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `],
        100,
        true
    )
```



## {Schritt 10}

**Du hast es geschafft!**

- :binoculars: Klicke auf den Spielbildschirm, um dein fertiges Spiel auszuprobieren.

Siehst du deine Animationen?

Versuche, alle 20 Satelliten zu aktualisieren, bevor dir die Leben ausgehen!





## {13. Geschafft}

**Herzlichen Glückwunsch**

---

Du hast den Code geschrieben, mit dem du **die Galaxie rettest**!

~hint Wie kann ich mein Projekt teilen?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf „Fertig“, um zur Skillmap zurückzukehren. Unten rechts findest du dann den Teilen-Knopf.

![Teile deine Karte](/static/skillmap/galaxy/share.gif )

hint~


Wenn du bereit bist, klicke auf **Fertig**, um zur Skillmap zurückzukehren.
Dort kannst du dein Spiel teilen oder es mit dem vollständigen Werkzeugkasten weiter verändern!



```blockconfig.global
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(img`
        . . . .
        . . . .
        . . . .
        . . . .
        `, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})

    scene.cameraShake(4, 500)

info.onScore(20, function () {
    game.gameOver(true)
})

animation.runImageAnimation(
myShip,
[img`.`],
100,
true
)

```



```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, myShip, 0, -150)
    projectile.startEffect(effects.fire)
})

let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip, 100, 100)
myShip.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
})

myShip.y = 100

sprites.onOverlap(SpriteKind.Satellite, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})

    scene.cameraShake(4, 500)

    animation.runImageAnimation(
mySprite,
assets.animation`BowieAnimated`,
100,
true
)
```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)


sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})

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
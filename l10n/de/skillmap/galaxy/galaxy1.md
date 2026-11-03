# Mach dein Schiff startklar
### @explicitHints true

## Einführung @showdialog

Einige Satelliten des Azure-Space-Programms sind auf mysteriöse Weise ausgefallen
und müssen aktualisiert werden. Um zu helfen, musst du in ihrer direkten Sichtlinie
sein, damit du ihnen Daten zur Reparatur senden kannst.

Doch vorher musst du das Programm schreiben, mit dem du DIE GALAXIE RETTEST!

![Flug durchs All](/static/skillmap/galaxy/galaxy1.gif "Mit Volldampf durchs All")

<!--
---

Age: 12+<br/>
Exp: 🔴🔴⭕⭕⭕<br/>

---
-->


## {2. Die Szene gestalten}
**Platz im Weltall**
🌏 🪐 🌕

Wähle einen Hintergrund, damit dein Projekt schön aussieht.

---

- :tree: Ziehe aus der Kategorie ``||scene:Szene||``
``||scene:setze Hintergrundbild auf [ ]||``<br/>
in den leeren <br/>
``||loops(noclick):beim Start||``<br/>
Container, der schon im Arbeitsbereich liegt.


- :paint brush: Klicke auf das leere Feld und wechsle zur **Galerie**
![Zur Galerie wechseln](/static/skillmap/assets/gallery.png "Zum Galerie-Fenster wechseln")
um den Hintergrund **galaxy** auszuwählen. Klicke dann auf **Fertig**.
![Wähle den Galaxie-Hintergrund](/static/skillmap/galaxy/galaxy-bg.png " ")



#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(galaxyimgs.Galaxy)
```




## {Schritt 3}

**Schau dir dein Projekt an**

- :binoculars: Wirf einen Blick auf das Spielfenster. <br/><br/>
Siehst du den Hintergrund, den du ausgewählt hast?


![Das Spielfenster findest du unten rechts](/static/skillmap/assets/game-window.png "Klicke auf das kleine Spielfenster, um das große Spielfenster zu öffnen.")





## {4. Lass es fliegen}
**🌟 Bewegung 🌟**

---

- :arrows alternate:  Nimm aus ``||scroller:Scroller||`` den Block <br/>
``||scroller:scroll background with vx [-50] vy [-50]||`` <br/>
und lege ihn **ans Ende** des
``||loops(noclick):beim Start||`` Containers.


- :mouse pointer: Damit der Hintergrund nicht seitwärts scrollt, ändere **vx** auf **0**.

- :mouse pointer: Für ein schönes, langsames Tempo nach unten ändere **vy** auf **10**.

~hint Was sind vx und vy?💡

---

![Darstellung von VX und VY als Richtungen in Arcade](/static/skillmap/galaxy/vxvy.png " ")

In MakeCode Arcade steht **vx** für die „Geschwindigkeit in x-Richtung“ – eine
komplizierte Art zu sagen: „wie schnell es sich nach links oder rechts bewegt“.

- Je größer dein **vx**-Wert ist, desto schneller bewegt sich etwas nach rechts.
- Je kleiner dein **vx**, desto schneller bewegt es sich nach links.
- Wenn **vx** 0 ist, bewegt es sich gar nicht seitwärts.


Genauso steht **vy** für die „Geschwindigkeit in y-Richtung“ – eine
komplizierte Art zu sagen: „wie schnell es sich nach oben oder unten bewegt“.

- Je größer dein **vy**-Wert ist, desto schneller bewegt sich etwas nach unten.
- Je kleiner dein **vy**, desto schneller bewegt es sich nach oben.
- Wenn **vy** 0 ist, bewegt es sich weder nach oben noch nach unten.


hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
// @highlight
scroller.scrollBackgroundWithSpeed(0, 10)
```


## {5. Wähle dein Schiff}
**Such dir dein Schiff aus!**

---

- :paper plane: Ziehe aus ``||sprites:Sprites||``<br/>
``||variables(sprites):setze [myShip] auf Sprite [ ] vom Typ [Player]||``<br/>
**ans Ende** des
``||loops:beim Start||`` Containers.


~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur oder jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst – zum Beispiel Größe, Position und Lebensdauer.

Auch unser Raumschiff wird ein Sprite.

hint~


- :paint brush: Klicke auf das leere Feld in der Mitte des <br/>
 ``||variables(sprites):setze [myShip] auf Sprite [ ] vom Typ [Player]||``<br/>
 Blocks, wechsle dann zur **Galerie** und wähle ein Raumschiff aus.
![Wähle ein Schiff](/static/skillmap/galaxy/bowie.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
// @highlight
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
```



## {6. Steuere dein Schiff}

 **🚀 Zeit zum Fliegen 🚀**

---

- :game: Ziehe aus ``||controller: Controller||``<br/>
``||controller:bewege [myShip] mit Knöpfen||``<br/>
**ans Ende** des
``||loops(noclick):beim Start||`` Containers.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
// @highlight
controller.moveSprite(myShip)
```



## {Schritt 7}

**Probier es aus!**

- :binoculars: Klicke auf den Spielbildschirm.

Versuche, dein Schiff mit dem Steuerkreuz,
den Pfeiltasten oder den Tasten **W** und **S** zu bewegen.

Was passiert, wenn du eine Pfeiltaste lange gedrückt hältst?



## {8. Bleib auf dem Bildschirm}

**Oh nein, wenn du aus dem Bildschirm fliegst, verschwindet dein Schiff!**

---

- :paper plane: Damit dein Schiff nicht über die Ränder hinausfliegt, gehe zu ``||sprites:Sprites||`` und ziehe<br/>
 ``||sprites:setze [myShip] bleibe auf dem Display <an>||`` <br/>
 **ans Ende** des ``||loops(noclick):beim Start||`` Containers.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
// @highlight
myShip.setStayInScreen(true)


```


## {9. Teste es}

**Super gemacht!**

---

- :binoculars: Teste dein Projekt noch einmal!

Dein Schiff sollte sich überall hin bewegen können, ohne den Bildschirm zu verlassen.

Ist bisher alles so, wie du es willst?
Du kannst jederzeit zurückgehen und deinen Code ändern, wenn er anders funktionieren soll.



## {10. Geschafft}

** ☄️ Erfolg! ☄️**

Du hast deine ersten Schritte geschafft!

~hint Wie kann ich mein Projekt teilen?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf „Fertig“, um zur Skillmap zurückzukehren. Unten rechts findest du dann den Teilen-Knopf.

![Teile deine Karte](/static/skillmap/galaxy/share.gif )

hint~

Klicke auf **Fertig**, um zur Skillmap zurückzukehren, und mach weiter, um
herauszufinden, wie du Informationen durchs All sendest!


```blockconfig.global
let myShip = sprites.create(img`.`, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```


```ghost
let myEnemy: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
myShip.y = 100

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


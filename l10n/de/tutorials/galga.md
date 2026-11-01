# Galga

### ~button /#tutorial:/tutorials/galga

Probier dieses Tutorial aus!

### ~

### @autoexpandOff true

## {Einführung @unplugged}

**In diesem Tutorial baust du ein Weltraumflugzeug,
das sich durch feindliche Raumschiffe kämpfen kann.**

Kannst du den ständigen Angriff überleben?

![Weltraumflugzeug und angreifende Raumschiffe](/static/tutorials/galga.gif)

## {Schritt 1}

✈️ Zuerst brauchen wir ein **Weltraumflugzeug** als [__*Sprite*__](#sprite "2D-Bild, das sich auf dem Bildschirm bewegt") ✈️

---

► Nimm aus der Kategorie ``||sprites:Sprites||`` einen Block
``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||`` und
füge ihn in den Block **beim Start** ein, der schon im Arbeitsbereich liegt.

► Klicke im neuen Block auf das Wort ``||variables(noclick):[mySprite]||``, um
die Variable in ``||variables(noclick):[spacePlane]||`` umzubenennen.

► Klicke jetzt in das graue Feld im neuen Block, um den Bildeditor zu öffnen.
Zeichne ein Flugzeug oder wähle etwas aus der Galerie.


```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Steuere dein Schiff}

**Tolles Flugzeug! Jetzt bringen wir es in Bewegung!**

---

► Suche den Block ``||controller:bewege [mySprite] mit Knöpfen ⊕||``
und zieh ihn ganz unten in den Container ``||loops:beim Start||``.

► Ändere **mySprite** in **spacePlane**.

► Klicke auf das ⊕ rechts am neuen Block, damit du die
Geschwindigkeit für **vx** und **vy** auf **200** ändern kannst.

---

Jetzt bewegt sich dein Schiff mit dem Joystick oder den Tasten **W A S D**.
Probier im Simulator aus, dein Schiff herumzufliegen!
<br/>

```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(spacePlane, 200, 200)
```

## {Bleib auf dem Bildschirm}

**Oh nein, wenn du aus dem Bildschirm fliegst, verschwindet dein Flugzeug!**

---

► Damit dein Schiff nicht über die Ränder hinaus fliegt, suche
 den Block ``||sprites:setze [mySprite] [bleibe auf dem Display] <AN>||`` und
füge ihn am Ende des Programms ein.

► Ändere **mySprite** in **spacePlane**.

```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
// @highlight
spacePlane.setStayInScreen(true)
```

## {Schritt 4}

Normalerweise hat dein Spieler zwei Leben.
Ändern wir das auf drei.

---

► Füge einen Block ``||info:setze Anzahl Leben auf [3]||`` in den
Container **beim Start** ein.


```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
// @highlight
info.setLife(3)
```

## {Schritt 5}

**Zum Schutz wollen wir per Knopfdruck
Geschosse auf heranfliegende Feinde abfeuern.**

---

► Zieh einen Container ``||controller:wenn [A] Knopf [gedrückt]||`` auf eine leere
Stelle im Arbeitsbereich.

► Füge einen Block
``||variables(sprites):setze [projectile] auf Projektil [ ] von [mySprite] mit vx [50] vy [50]||``
in den neuen Container ein und klicke in das graue Feld, um deinen Pfeil zu zeichnen.

► Ändere **mySprite** in **spacePlane**. Ändere **vx** auf **[200]** und **vy** auf **[0]**.


```blocks
let spacePlane: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . 5 5 a 2 2 2 2 4 4 4 . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spacePlane, 200, 0)
})
```

## {Schritt 6 }

**Ab und zu soll ein Feind auf uns zugeflogen kommen.**

Lass uns Code hinzufügen, der dafür sorgt.

---

► Füge einen Container ``||game:wenn Spielupdate alle [500] ms||`` auf
eine leere Stelle im Arbeitsbereich und ändere **500** in **1000**.

► Füge darin einen Block
``||variables(sprites):setze [mySprite] auf Sprite [ ] vom Typ [Player]||`` ein und
ändere den **Typ** von **Player** in **Enemy**.

► Klicke im neuen Block auf ``||variables(noclick):mySprite||``, um
die Variable in ``||variables(noclick):bogey||`` umzubenennen.

► Klicke auf das graue Feld, um dein feindliches Schiff zu zeichnen.

```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
})
```

## {Schritt 7}

**Der Feind soll von rechts nach links fliegen.**

---

► Nimm einen Block ``||sprites:setze Geschwindigkeit von [mySprite] auf vx [50] vy [50]||`` und füge
ihn am Ende deines Containers **wenn Spielupdate** ein.

► Ersetze **mySprite** durch **bogey**.

► Ändere die horizontale Geschwindigkeit (**vx**) auf **-100**,
damit er zum linken Bildschirmrand rast, und ändere die
vertikale Geschwindigkeit (**vy**) auf **0**, damit das Flugzeug nicht
nach oben oder unten abdriftet.

```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    // @highlight
    bogey.setVelocity(-100, 0)
})
```

## {Schritt 8}

**Wie sollst du gewinnen, wenn Feinde direkt auf dir** [__*erscheinen*__](#spawnd "plötzlich auftauchen") **?**

---

► Nimm einen Block ``||sprites:setze Position von [mySprite] auf x [0] y [0]||``
und füge ihn am Ende deines Blocks **wenn Spielupdate** ein. Ändere **mySprite**
in **bogey**.

► Ändere den **x**-Wert auf **160**, damit der Feind ganz am rechten
Bildschirmrand startet, und nimm einen Block ``||math:wähle eine zufällige Zahl von [0] bis [10]||``, um
den **y**-Wert zu ersetzen, damit die Feinde jedes Mal aus einer anderen Höhe kommen.

► Ändere deinen Zufallsblock auf **5** bis **115**, um möglichst viel der
Bildschirmhöhe zu nutzen, ohne den Spielbereich zu verlassen.



```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    // @highlight
  bogey.setPosition(160, randint(5, 115))
})
```

## {Schritt 9}

Damit alles ordentlich bleibt, müssen wir Feinde zerstören, die an uns
vorbeifliegen und den Bildschirm verlassen.

---

► Füge einen Block ``||sprites:setze mySprite [automatisch zerstören] <AUS>||`` am
Ende des Containers **wenn Spielupdate** ein und schalte **`<AUS>`** auf **`<AN>`** um.

► Ändere **mySprite** in **bogey**.

```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    // @highlight
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## {Schritt 10}

**Nichts passiert, wenn dein Pfeil einen Feind trifft ...**
Das ändern wir jetzt.

---

► Füge einen Container ``||sprites:wenn [sprite] der Art [Player] überlappt [otherSprite] der Art [Player]||``
auf eine leere Stelle im Arbeitsbereich.

► Ändere die erste Sprite-Art von **Player** in **Projectile** und die
Art von **otherSprite** von **Player** in **Enemy**.


```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## {Schritt 11}

Füge jetzt die Blöcke hinzu, die das andere Sprite zerstören.

---

► Füge einen Block ``||sprites:zerstöre [mySprite]||`` in den leeren
Container **wenn Sprite überlappt** ein.

► Zieh den Wert ``||variables(noclick):otherSprite||`` aus
dem Kopf des Containers **wenn Sprite überlappt** und setze ihn anstelle von
**mySprite** in den Block **zerstöre** ein.

► Klicke auf das **⊕** rechts am Block **zerstöre** und wähle den
Effekt **fire**, um etwas Pep hineinzubringen.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy(effects.fire, 500)
})
```


## {Schritt 12}

**TREFFER!**

Für jeden getroffenen Feind sollte der Spieler **1** Punkt bekommen.

---

► Füge einen Block ``||info:ändere Punktzahl um [1]||`` am Ende des
Containers **wenn Sprite überlappt** ein.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    // @highlight
    info.changeScoreBy(1)
})
```

## {Schritt 13}

**Was ist, wenn der Feind uns trifft?**

Wir brauchen Code, der dem Programm sagt, was passieren soll, wenn das Feind-Sprite
den Spieler überlappt.

---

► Füge einen neuen Container ``||sprites:wenn [sprite] der Art [Player] überlappt [otherSprite] der Art [Player]||``
auf eine leere Stelle im Arbeitsbereich.

► Ändere die Art von **otherSprite** von **Player** in **Enemy**.


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## {Schritt 14}

Wenn wir getroffen werden, soll die Kamera wackeln, der Feind explodieren
und unsere Anzeige ein Leben verlieren.

---

► Füge einen Block ``||sprites:zerstöre [mySprite]||`` in den leeren
Container **wenn Sprite Player überlappt Enemy** ein und ersetze **mySprite** durch **otherSprite**.

► Füge einen Block ``||scene:Kamera schütteln um [4] Pixel für [500] ms||`` am
Ende des Containers **wenn Sprite Player überlappt Enemy** ein.

► Füge einen Block ``||info:ändere Leben um [-1]||`` am
Ende des Containers **wenn Sprite Player überlappt Enemy** ein.


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
```

## {Geschafft @fullscreen}

🎆 **Glückwunsch** 🎆

Du hast dein Spiel fertig gebaut!

Jetzt kannst du mit den Richtungstasten dein Weltraumflugzeug steuern und
mit dem Knopf **Ⓐ** Pfeile abfeuern!

![Weltraumflugzeug und angreifende Raumschiffe](/static/tutorials/galga.gif)

# Weltraumforscher


## Einführung @showdialog

** Lass uns die Tiefen des Weltraums erkunden! **

In diesem Tutorial gestaltest du ein Raumschiff für deine Reise.

![Flug durch den Weltraum](/static/skillmap/space/space1.gif "Rasant durch ein Sternenfeld" )

## Die Szene gestalten
**Gib ihnen etwas zum Anschauen** 🔭

---


► Ziehe ``||scene:Startbildschirm [Konfetti] Effekt ⊕||`` aus der Kategorie ``||scene:Szene||`` 
in den Block ``||loops:beim Start||``, der schon im Arbeitsbereich ist.

► Wähle dann im Dropdown-Menü ``||scene:Sternenfeld||`` (statt ``||scene:Konfetti||``)
und schau zu, wie du ins All startest! 🚀


---


```blocks
// @highlight
effects.starField.startScreenEffect()
```


## Schau mal!


**Sieh dir das Spielfenster an**<br/>

Siehst du, wie der gewählte Hintergrund über den Bildschirm nach unten scrollt?



## Zeichne dein Raumschiff
**🧑🏿‍🚀 Zeit, unser Raumschiff auszuwählen! 👩🏾‍🚀**

---

► Ziehe aus der Kategorie ``||sprites:Sprites||`` den Block ``||variables(sprites):setze [meinSprite] auf Sprite [ ] vom Typ [Player]||``
und setze ihn ans Ende des Containers ``||loops:beim Start||``.

► Klicke auf das graue Feld in der Mitte deines Blocks
 ``||variables(noclick):setze [meinSprite] auf Sprite [ ] vom Typ [Player]||``,
um dein eigenes Raumschiff zu gestalten! Bist du ein rostiger Schrotthaufen oder eine schicke, futuristische Rakete?

---

**Tipp:** Keine Lust, dein Raumschiff zu zeichnen? Wechsle im Sprite-Editor
zur Galerie und wähle ein fertiges Bild aus.

```blocks
effects.starField.startScreenEffect()
// @highlight
let meinSprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
```

## Steuere dein Raumschiff

🌟 Bringen wir dein Raumschiff in Bewegung 🌟

---

► Suche den Block ``||controller:bewege [meinSprite] mit Knöpfen ⊕||``
und ziehe ihn ganz nach unten in den Container ``||loops:beim Start||``.

** Probiere jetzt, dein Raumschiff auf dem Spielbildschirm zu bewegen! **
Dein Raumschiff bewegt sich mit dem Joystick, den Pfeiltasten oder den Tasten **W A S D**.



```blocks
effects.starField.startScreenEffect()
let meinSprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
// @highlight
controller.moveSprite(meinSprite)
```

## Im Bildschirm bleiben

**Oh-oh, wenn du den Bildschirm verlässt, verschwindet dein Raumschiff!**

---

► Damit dein Raumschiff nicht über die Ränder hinausfliegt, suche
 den Block ``||sprites:setze [meinSprite] bleibe auf dem Display <an>||`` und
hänge ihn ans Ende des Programms an.



```blocks
effects.starField.startScreenEffect()
let meinSprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(meinSprite)
// @highlight
meinSprite.setStayInScreen(true)

```


## Abschluss @showdialog

**Super gemacht!**

---

**Probiere dein Projekt auf dem Spielbildschirm aus,
bevor du im Tutorial auf Fertig klickst.**

Ist alles so, wie du es willst? Du kannst jederzeit zurückgehen und Schritte bearbeiten, wenn sie anders funktionieren sollen.



## Tschüüüss

** 🚀 Das war's! 🚀**

Du bist bereit, das Universum zu bereisen!

Klicke auf **Fertig**, um zur Hauptseite zurückzukehren, wo du dein Spiel
mit Familie und Freunden teilen kannst!

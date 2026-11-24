# Effekt starten

Starte einen eingebauten Effekt an einem Sprite.

```sig
sprites.create(null).startEffect(effects.spray, 500)
```

Es gibt mehrere eingebaute Partikel-Bewegungseffekte, die du einem Sprite hinzufügen kannst. Im Blockeditor wählst du den Effekt aus der Liste auf dem Block aus. In JavaScript wählst du einen der Effekte aus, die im Namensraum ``effects`` enthalten sind. Der Effekt läuft dauerhaft, es sei denn, du gibst einen Wert für die Dauer (``duration``) an. Du kannst den Effekt mit der Funktion [clearParticles](/reference/sprites/sprite/clear-particles) stoppen.

## Parameter

* **effect**: der Effekt, der am Sprite gestartet werden soll.
* **duration**: eine optionale [Zahl](/types/number), die angibt, wie lange der Effekt in Millisekunden laufen soll. Wenn du keinen Wert für die Dauer angibst, läuft der Effekt weiter.

## Beispiel #example

Starte einen 5 Sekunden langen ``cool radial``-Sprüheffekt am Klecks-Sprite.

```blocks
let blobject: Sprite = null
blobject = sprites.create(img`
    . a a a a .
    . a a a a .
    a a a a a a
    a a a a a a
    . a a a a .
    . a a a a .
`, 0)
blobject.startEffect(effects.coolRadial, 5000)
```

## Siehe auch #seealso

[entferne Partikel](/reference/sprites/sprite/clear-particles)

# Partikel löschen

Stoppt den Partikeleffekt, der gerade an einem Sprite angezeigt wird.

```sig
effects.clearParticles(null)
```

Partikeleffekte werden beim Starten für ein Sprite festgelegt. Du kannst den Effekt vorzeitig stoppen, wenn eine Dauer festgelegt wurde, oder die dauerhafte Anzeige beenden, wenn keine Dauer festgelegt wurde.

## Parameter

* **anchor**: das Sprite, an dem der Effekt angezeigt wird.

## Beispiel #example

### Konfetti versprühen #ex1

Starte einen ``confetti``-Effekt am Blob-Sprite für 5 Sekunden, stoppe ihn aber schon nach 2 Sekunden.

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
blobject.startEffect(effects.confetti, 5000)
pause(2000)
effects.clearParticles(blobject)
```

### Lagerfeuer #ex2

Zeige einen ``fire``-Effekt, der aus einem Sprite-Bild von Brennholz kommt. Wenn Knopf **A** gedrückt wird, geht das Lagerfeuer aus, und der ``blizzard``- mit dem ``bubble``-Effekt simuliert das glimmende Feuer.

```blocks
let logs: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    logs.startEffect(effects.blizzard, 750)
    logs.startEffect(effects.bubbles, 2000)
})
logs = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . e . . .
    . . e e . . . . . . . e e . . .
    . . . e e e . . . e e d e . . .
    . . . e d e e e . e d e e . . .
    . . . e e d d e e d d e . . . .
    . . . . . e e d d e e . . . . .
    . . . e e d e e d d e . . . . .
    . . e e d d e e e d d e e . . .
    . . e d d e e . e e e d e e . .
    . . e e e . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
`, 0)
logs.startEffect(effects.fire)
```

### Alle Partikel sofort löschen

Der Block „Partikel löschen“ entfernt die Quellen. Wenn du aber sofort alle Partikel auf dem Bildschirm entfernen willst, musst du zusätzlich `particles.clearAll()` aufrufen, das zurzeit nur in der Textprogrammierung verfügbar ist.

```typescript
let logs: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    logs.startEffect(effects.blizzard, 750)
    logs.startEffect(effects.bubbles, 2000)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    particles.clearAll()
})
logs = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . e . . .
    . . e e . . . . . . . e e . . .
    . . . e e e . . . e e d e . . .
    . . . e d e e e . e d e e . . .
    . . . e e d d e e d d e . . . .
    . . . . . e e d d e e . . . . .
    . . . e e d e e d d e . . . . .
    . . e e d d e e e d d e e . . .
    . . e d d e e . e e e d e e . .
    . . e e e . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
`, 0)
logs.startEffect(effects.fire)
```

## Siehe auch #seealso

[starte Effekt](/reference/sprites/sprite/start-effect)

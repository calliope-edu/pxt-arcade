# Position

Liefert die aktuelle Position des Drehgebers.

```sig
encoders.createRotaryEncoder(pins.A2, pins.A1).position( )
```

## Rückgabewert

* eine [Zahl](/types/number), die die Position des Drehgebers angibt.

## Beispiel #example

Zeige die Position des Drehgebers in der Spielkonsole an, wenn sie sich ändert.

```typescript
const crank = encoders.createRotaryEncoder(pins.A2, pins.A1);
game.consoleOverlay.setVisible(true);
let sprite = sprites.create(sprites.castle.heroFrontAttack1)
crank.onChanged(function () {
    console.log(crank.position())
    sprite.x = screen.width / 2 + crank.position()
})
```

## Siehe auch #seealso

[wenn geändert](/reference/encoders/on-changed)

```package
encoders
```
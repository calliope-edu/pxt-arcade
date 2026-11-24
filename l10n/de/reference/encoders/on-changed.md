# wenn geändert

Führt Code aus, wenn der Drehgeber seine Position ändert.

```sig
encoders.createRotaryEncoder(pins.A2, pins.A1).onChanged(function () {})
```

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

[Position](/reference/encoders/position)

```package
encoders
```
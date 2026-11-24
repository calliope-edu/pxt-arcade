# lors d'un changement

Exécute du code quand l'encodeur rotatif change de position.

```sig
encoders.createRotaryEncoder(pins.A2, pins.A1).onChanged(function () {})
```

## Exemple #example

Affiche la position de l'encodeur dans la console du jeu quand elle change.

```typescript
const crank = encoders.createRotaryEncoder(pins.A2, pins.A1);
game.consoleOverlay.setVisible(true);
let sprite = sprites.create(sprites.castle.heroFrontAttack1)
crank.onChanged(function () {
    console.log(crank.position())
    sprite.x = screen.width / 2 + crank.position()
})
```

## Voir aussi #seealso

[position](/reference/encoders/position)

```package
encoders
```
# position

Obtiens la position actuelle de l'encodeur rotatif.

```sig
encoders.createRotaryEncoder(pins.A2, pins.A1).position( )
```

## Retourne

* un [nombre](/types/number) qui indique la position de l'encodeur.

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

[lors d'un changement](/reference/encoders/on-changed)

```package
encoders
```
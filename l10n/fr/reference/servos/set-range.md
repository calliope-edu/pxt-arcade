# définir la plage

Définit les angles de rotation minimum et maximum d'un servo.

```sig
servos.P0.setRange(0, 180)
```

Si tu veux limiter la plage de rotation d'un servo, tu peux définir son angle de rotation minimum et maximum. La limite d'angle minimum se définit en degrés de `0` à `90`. L'angle de rotation maximum se définit en degrés de `90` à `180`.

## Paramètres

* **minAngle** : un [nombre](types/number) de degrés à définir comme angle de rotation minimum, de `0` à `90` degrés,
* **maxAngle** : un [nombre](types/number) de degrés à définir comme angle de rotation maximum, de `90` à `180` degrés,

## Exemple

Connecte un servo à la broche `P0`. Essaie de faire tourner le servo au-delà de ses angles limites.

```blocks
servos.P0.setRange(30, 150)
for (let i = 0; i < 5; i++) {
    servos.P0.setAngle(180)
    basic.pause(500)
    servos.P0.setAngle(0)
    basic.pause(500)
}
```

## Voir aussi

[définir l'angle](/reference/servos/set-angle)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

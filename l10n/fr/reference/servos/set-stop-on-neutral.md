# arrêter au neutre

Configure un servo pour qu'il revienne à la position neutre quand il s'arrête.

```sig
servos.P0.setStopOnNeutral(false)
```

Quand tu demandes à un servo de s'arrêter, au lieu de simplement s'arrêter à l'angle de rotation actuel, tu peux faire revenir le servo à la position neutre (`90` degrés) lorsqu'il est arrêté.

## Paramètres

* **enabled** : un [booléen](types/boolean) qui, s'il vaut `true`, configure le servo pour revenir à la position neutre quand il est arrêté. Sinon, s'il vaut `false`, le servo reste à sa position actuelle quand il est arrêté.

## Exemple

Connecte un servo à la broche `P0`. Configure le servo pour qu'il aille au neutre quand il est arrêté. Fais tourner le servo dans le sens horaire à `75` pour cent de sa vitesse maximale. Attends `3` secondes puis arrête le servo.

```blocks
servos.P0.setStopOnNeutral(true)
servos.P0.run(75)
basic.pause(3000)
servos.P0.run(0)
```

## Voir aussi

[run](/reference/servos/run),
[stop](/reference/servos/stop)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

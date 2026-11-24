# arrêter

Arrête d'envoyer des commandes au servo pour que sa rotation s'arrête à la position actuelle.

```sig
servos.P0.stop()
```

Un servo est arrêté en ne lui envoyant plus de commandes pour piloter l'angle de rotation. Cela te permet d'arrêter un servo à sa position actuelle, ce qui est utile pour arrêter un servo à rotation continue. L'entraînement du servo est arrêté, mais son axe n'exerce aucune force pour bloquer la position actuelle.

## Exemple

Connecte un servo à la broche `P0`. Fais tourner le servo dans le sens horaire à `75` pour cent de sa vitesse maximale. Attends `3` secondes puis arrête le servo.

```blocks
servos.P0.run(75)
basic.pause(3000)
servos.P0.stop()
```

## Voir aussi

[run](/reference/servos/run),
[définir l'angle](/reference/servos/set-angle)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

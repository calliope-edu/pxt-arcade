# servo Write

Dis à un servo de tourner jusqu'à un certain angle ou de tourner à une certaine vitesse.

```sig
pins.A1.servoWrite(90)
```

Les servos font tourner un axe dans l'une de deux directions selon un angle en degrés. Avec un servo,
tu utilises seulement 180 degrés pour positionner un bras, un engrenage ou une roue connecté à l'axe. La position
à 90 degrés est la position de base, ou neutre. Pour tourner l'axe du servo vers la gauche (sens antihoraire),
tu lui écris un nombre de degrés entre 0 et 90. La position `0` degré est complètement à gauche et
tout autre nombre jusqu'à `90` se situe entre la gauche et la position neutre. C'est pareil
pour aller complètement à droite (sens horaire). Complètement à droite, c'est `180` degrés.

### Rotation continue

Il existe aussi un autre type de servo appelé servo à _rotation continue_ qui peut ressembler à un servo
normal. Il est différent parce que l'axe ne s'arrête pas à une position particulière en degrés. Dans ce cas,
le nombre que tu écris au servo n'est pas un angle mais une vitesse. L'axe continue de tourner si
tu écris au servo un nombre différent de `90`. Au lieu d'être un angle en degrés, le nombre est
une vitesse dans l'une des directions. Le nombre `0` est la vitesse maximale vers la gauche et
`180` la vitesse maximale vers la droite. Le nombre `90` signifie aucune rotation.

## Paramètres

* **value** : un [nombre](types/number) pour l'angle de l'axe ou la vitesse du servo, selon ton type de servo :
> * _servo normal_ : le nombre de degrés de rotation de l'axe.

>> * `90` est la position neutre, ou centrale.
>> * De `90` à `0`, l'axe tourne vers une position à gauche.
>> * `0` est complètement à gauche.
>> * De `90` à `180`, l'axe tourne vers une position à droite.
>> * `180` est complètement à droite.

> * _rotation continue_ : la vitesse de rotation de l'axe dans une direction ou l'autre.
>> * `0` vitesse maximale vers la _gauche_.
>> * De `90` à `0`, l'axe tourne de plus en plus vite vers la _gauche_ à mesure que le nombre s'approche de `0`.
>> * `90` aucune vitesse, l'axe ne tourne pas.
>> * De `90` à `180`, l'axe tourne de plus en plus vite vers la _droite_ à mesure que le nombre s'approche de `180`.
>> * `180` vitesse maximale vers la _droite_.

## Exemple #example

Connecte un servo à la broche `A1`. Fais remuer (tourner à droite et à gauche) le bras de l'axe du servo de 45 degrés dans chaque
direction, 5 fois.

```blocks
for (let i = 1; i <= 5; i++) {
    pins.A1.servoWrite(135)
    pause(500)
    pins.A1.servoWrite(45)
    pause(500)
}
```

## Voir aussi #seealso

[servo set pulse](/reference/pins/servo-set-pulse),
[analog set period](/reference/pins/analog-set-period)

[Qu'est-ce que la PWM ?](/reference/pins/what-is-pwm)

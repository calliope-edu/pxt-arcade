# servo Set Pulse

Envoie à un servo une impulsion avec ta propre durée d'impulsion.

```sig
pins.A1.servoSetPulse(2000)
```

Un servo fait tourner un axe selon un angle ou une vitesse qu'il lit à partir d'un signal d'impulsion. Un signal
d'impulsion numérique ne peut avoir que deux valeurs, haut et bas. Comment dire au servo de combien
tourner l'axe s'il n'y a que deux valeurs à utiliser ?

### Angle du servo

L'astuce consiste à utiliser la durée (le temps pendant lequel l'impulsion est active) pour indiquer au servo
de combien tourner l'axe. Les servos utilisent des durées différentes, mais très courtes, pour indiquer de combien
l'axe va tourner ou à quelle vitesse il tourne dans une direction. La plupart des servos de loisir utilisent une impulsion qui dure
entre 1 milliseconde et 2 millisecondes pour savoir de combien tourner. Tu vois que la moitié de cette
durée est 0,5 milliseconde. Une impulsion de 0,5 milliseconde est la durée qui indique au
servo de rester dans sa position neutre. Une impulsion de 1 milliseconde signifie que l'axe du servo est tourné
complètement vers la gauche, ce qu'on appelle généralement la position 0 degré. Une impulsion de 2 millisecondes indique au
servo de tourner complètement vers la droite, la position 180 degrés.

Pour que tu puisses déplacer l'axe du servo très précisément, tu utilises des microsecondes pour la durée de l'impulsion.
N'oublie pas de multiplier les millisecondes par 1000 quand tu envoies l'impulsion au servo. La position neutre,
par exemple, est 1500 microsecondes. Le servo tourne l'axe complètement vers la gauche avec une impulsion de
1000 microsecondes. Complètement vers la droite, c'est une impulsion de 2000 microsecondes.

### Rotation continue

Il existe un autre type de servo appelé servo à _rotation continue_ qui peut ressembler à un servo
normal. Il est différent parce que l'axe ne s'arrête pas à une position particulière. Dans ce cas,
l'impulsion que tu envoies au servo n'indique pas une position, mais une vitesse. L'axe continue de tourner si
tu envoies au servo une impulsion différente de `1500` millisecondes. Au lieu d'être un angle de rotation, la durée est une vitesse dans l'une des directions. `1000` microsecondes correspond à la vitesse maximale vers la gauche et
`2000` microsecondes à la vitesse maximale vers la droite. `1500` microsecondes signifie aucune rotation.

#### ~hint
La plupart des servos de loisir, mais pas tous, utilisent une durée d'impulsion de 1 à 2 millisecondes pour contrôler la rotation de l'axe. Certains
peuvent avoir une rotation plus petite ou utiliser d'autres durées d'impulsion pour les positions et la vitesse. Si tu as un
de ces servos, trouve quelles durées d'impulsion déplacent l'axe là où tu veux et utilise-les dans
``||pins:servo set pulse||``.
#### ~

### PWM

Le bloc ``||set servo pulse||`` est utile pour envoyer d'autres signaux [PWM](/reference/pins/what-is-pwm) tant
que tu utilises une période de signal de 20 millisecondes.

## Paramètres

* **duration** : un [nombre](types/number) qui est la durée de l'impulsion envoyée au servo, en microsecondes :
> * _servo normal_ : l'angle de rotation de l'axe.
>> * Le plus souvent, `1000` est la rotation complète vers la gauche, `2000` la rotation complète vers la droite et `1500` la position neutre.
> * _rotation continue_ : la vitesse de rotation de l'axe dans une direction ou l'autre.
>> * Le plus souvent, `1000` est la vitesse maximale vers la gauche, `2000` la vitesse maximale vers la droite et `1500` l'arrêt.

## Exemple #example

Tourne à 135 degrés un servo standard connecté à la broche `A1`. Attends 3 secondes et remets-le en position neutre.

```blocks
pins.A1.servoSetPulse(1750)
pause(3000)
pins.A1.servoWrite(1500)
```

## Voir aussi #seealso

[servo write](/reference/pins/servo-write)

[Qu'est-ce que la PWM ?](/reference/pins/what-is-pwm)

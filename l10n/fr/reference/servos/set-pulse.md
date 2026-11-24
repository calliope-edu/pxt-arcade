# définir l'impulsion

Envoie à un servo une impulsion avec ta propre durée d'impulsion.

```sig
servos.P0.setPulse(2000)
```

Un servo fait tourner un axe d'un certain angle ou à une certaine vitesse qu'il lit à partir d'un signal d'impulsion. Un signal
d'impulsion numérique ne peut avoir que deux valeurs, haut et bas. Comment indiquer au servo de combien
il doit tourner l'axe s'il n'y a que deux valeurs ?

### Angle du servo

L'astuce consiste à utiliser la durée (le temps pendant lequel l'impulsion est active) pour indiquer au servo
de combien tourner l'axe. Les servos utilisent des durées différentes, mais très courtes, pour indiquer de combien l'axe va tourner ou à quelle vitesse il tourne dans une direction. La plupart des servos de loisir utilisent une impulsion qui dure entre 1 milliseconde et 2 millisecondes pour indiquer de combien tourner. Tu vois que la moitié de cette durée est 0,5 milliseconde. Une impulsion de 0,5 milliseconde est la durée qui indique au servo de rester dans sa position neutre. Une impulsion de 1 milliseconde signifie que l'axe du servo est tourné complètement à gauche, ce qu'on appelle généralement la position 0 degré. Une impulsion de 2 millisecondes indique au servo de tourner complètement à droite, la position 180 degrés.

Pour que tu puisses déplacer l'axe du servo très précisément, tu utilises des microsecondes pour la durée de l'impulsion. N'oublie pas de multiplier les millisecondes par 1000 quand tu envoies l'impulsion au servo. La position neutre, par exemple, correspond à 1500 microsecondes. Le servo déplace l'axe complètement à gauche avec une impulsion de 1000 microsecondes. Complètement à droite correspond à une impulsion de 2000 microsecondes.

### Rotation continue

Il existe un autre type de servo appelé servo à _rotation continue_ qui peut ressembler à un servo normal. Il est différent car l'axe ne s'arrête pas à une position précise. Dans ce cas, l'impulsion que tu envoies au servo n'indique pas une position, mais une vitesse. L'axe continue de tourner si tu envoies une impulsion différente de `1500` microsecondes. Au lieu d'être un angle de rotation, la durée est une valeur de vitesse dans l'une des directions. `1000` microsecondes correspondent à la pleine vitesse vers la gauche et `2000` microsecondes à la pleine vitesse vers la droite. Une valeur de `1500` microsecondes signifie aucune rotation.

#### ~hint

La plupart des servos de loisir, mais pas tous, utilisent une durée d'impulsion de 1 à 2 millisecondes pour contrôler la rotation de l'axe. Certains peuvent avoir une rotation plus faible ou utiliser d'autres durées d'impulsion pour les positions et la vitesse. Si tu as un de ces servos, trouve quelles durées d'impulsion déplacent l'axe là où tu veux et utilise-les dans ``||servos:set servo pulse||``.

#### ~

## Paramètres

* **micros** : un [nombre](types/number) qui est la durée de l'impulsion envoyée au servo, en microsecondes. Selon le type de servo, la durée d'impulsion signifie :
> * _servo normal_ : l'amplitude de rotation de l'axe.
>>Le plus souvent, `1000` est la rotation complète vers la gauche, `2000` la rotation complète vers la droite, et `1500` le retour au neutre.
> * _rotation continue_ : la vitesse de rotation de l'axe dans une direction ou l'autre.
>>Le plus souvent, `1000` est la pleine vitesse vers la gauche, `2000` la pleine vitesse vers la droite, et `1500` l'arrêt.

## Exemple #example

Fais tourner un servo standard connecté à la broche `P0` de 135 degrés. Attends 3 secondes et remets-le au neutre.

```blocks
servos.P0.setPulse(1750)
basic.pause(3000)
servos.P0.setAngle(90)
```

## ~ hint

Comment les servos font-ils fonctionner leur moteur pour changer la position de leur bras ou de leur axe ? Découvre-le dans cette vidéo MakeCode sur le matériel :

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Voir aussi

[définir l'angle](/reference/servos/set-angle),
[run](/reference/servos/run)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

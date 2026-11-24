# définir l'angle

Indique à un servo de tourner jusqu'à un certain angle.

```sig
servos.P0.setAngle(90)
```

Les servos font tourner un axe dans l'une de deux directions d'un certain angle en degrés. Avec un servo, tu utilises seulement 180 degrés pour positionner un bras, un engrenage ou une roue reliés à l'axe. La position à 90 degrés est la position de base, ou neutre. Pour faire tourner l'axe du servo vers la gauche (sens antihoraire), tu lui envoies un nombre de degrés entre 0 et 90. La position `0` degré est complètement à gauche et tout autre nombre jusqu'à `90` se situe quelque part entre la gauche et la position neutre. Cela fonctionne de la même façon pour aller complètement à droite (sens horaire). Complètement à droite correspond à `180` degrés.

### Rotation continue

Il existe un autre type de servo appelé servo à _rotation continue_ qui peut ressembler à un servo normal. Il est différent car l'axe ne s'arrête pas à une position précise en degrés. Dans ce cas, le nombre que tu envoies au servo n'est pas un angle mais une vitesse. L'axe continue de tourner si tu envoies un nombre différent de `90`. Au lieu d'être un angle en degrés, le nombre est une valeur de vitesse dans l'une des directions. Le nombre `0` correspond à la pleine vitesse vers la gauche et `180` à la pleine vitesse vers la droite. Le nombre `90` signifie aucune rotation.

Une façon plus simple de faire fonctionner un servo à rotation continue est d'utiliser la fonction [run](/reference/servos/run) avec une valeur de vitesse en pourcentage.

## Paramètres

* **degrees** : un [nombre](types/number) pour l'angle de l'axe ou la vitesse du servo, selon ton type de servo :
> * _servo normal_ : le nombre de degrés d'angle dont l'axe doit tourner.

>> * `90` est la position neutre, ou centrale.
>> * de `90` à `0`, l'axe tourne vers une position à gauche.
>> * `0` est complètement tourné à gauche.
>> * de `90` à `180`, l'axe tourne vers une position à droite.
>> * `180` est complètement tourné à droite.

> * _rotation continue_ : la vitesse de rotation de l'axe dans une direction ou l'autre.
>> * `0` pleine vitesse vers la _gauche_.
>> * de `90` à `0`, l'axe tourne de plus en plus vite vers la _gauche_ à mesure que le nombre approche de `0`.
>> * `90` aucune vitesse, l'axe ne tourne pas.
>> * de `90` à `180`, l'axe tourne de plus en plus vite vers la _droite_ à mesure que le nombre approche de `180`.
>> * `180` pleine vitesse vers la _droite_.

## Exemple

Connecte un servo à la broche `P0`. Fais remuer (tourner à droite et à gauche) le bras sur l'axe du servo de 45 degrés dans chaque direction, 5 fois.

```blocks
for (let i = 0; i < 5; i++) {
    servos.P0.setAngle(135)
    basic.pause(500)
    servos.P0.setAngle(45)
    basic.pause(500)
}
```

## ~ hint

Comment les servos font-ils fonctionner leur moteur pour changer la position de leur bras ou de leur axe ? Découvre-le dans cette vidéo MakeCode sur le matériel :

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Voir aussi

[définir l'impulsion](/reference/servos/set-pulse),
[run](/reference/servos/run)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

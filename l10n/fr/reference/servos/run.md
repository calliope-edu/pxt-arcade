# tourner

Fais tourner un servo à rotation continue à une certaine vitesse.

```sig
servos.P0.run(50)
```

Un servo à rotation continue peut tourner dans le sens des aiguilles d'une montre et dans le sens inverse. Il tourne à une vitesse allant de l'arrêt à la vitesse de rotation maximale. Normalement, un servo à rotation continue interprète une valeur d'angle comme une valeur de vitesse. Mais avec ``||servos:run||``, tu peux utiliser un pourcentage de vitesse pour faire tourner le servo de l'arrêt à la pleine vitesse (`0` à `100` pour cent). Pour une rotation dans le sens des aiguilles d'une montre, la valeur de vitesse est positive, speed > 0. Si tu veux faire tourner le servo dans l'autre sens (sens inverse des aiguilles d'une montre), utilise un pourcentage négatif.

## Paramètres

* **speed** : un [nombre](types/number) qui est le pourcentage (`0` à `100`) de vitesse auquel faire tourner le servo. Utilise une valeur positive (speed > 0) pour tourner dans le sens des aiguilles d'une montre et une valeur négative pour tourner dans le sens inverse.

## Exemple

Connecte un servo à la broche `P0`. Fais tourner le servo dans le sens des aiguilles d'une montre à `75` pour cent de sa pleine vitesse. Attends `3` secondes puis arrête le servo.

```blocks
servos.P0.run(75)
basic.pause(3000)
servos.P0.run(0)
```

## ~ hint

Comment les servos font-ils tourner leur moteur pour changer la position de leur bras ou de leur axe ? Découvre-le dans cette vidéo MakeCode sur le matériel :

https://www.youtube.com/watch?v=okxooamdAP4

## ~

## Voir aussi

[régler l'impulsion](/reference/servos/set-pulse),
[régler l'angle](/reference/servos/set-angle)

[Petit guide des servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

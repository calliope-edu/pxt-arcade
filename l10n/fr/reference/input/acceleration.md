# acceleration

Obtiens la valeur d'accélération (en milli-g) dans l'une des trois dimensions, ou la force combinée dans toutes les directions (x, y et z).

Trouve l'accélération de la @boardname@ (à quelle vitesse elle accélère ou ralentit).

```sig
input.acceleration(Dimension.X);
```

## ~hint

Tu mesures l'accélération en **milli-g**, soit 1/1000 d'un **g**.
Un **g** correspond à l'accélération due à la gravité terrestre.

## ~

## Paramètres

* **dimension**: la direction dans laquelle tu vérifies l'accélération, ou l'intensité totale de la force.
>`x`: accélération vers la gauche et la droite.<br/>
`y`: accélération vers l'avant et l'arrière.<br/>
`z`: accélération vers le haut et le bas.<br/>
`strength`: l'intensité résultante de l'accélération dans les trois dimensions (directions).

### ~hint

**Forces dans l'espace**

Comme nous ne vivons pas dans un monde plat, les forces agissent dans un espace à trois dimensions. Si le mouvement d'un objet ne suit pas exactement la direction d'un axe, il faut un moyen de calculer son accélération à partir des valeurs mesurées sur tous les axes ensemble.

Si tu poses ta @boardname@ sur une table plane et que tu la pousses en diagonale, tu as une accélération dans deux dimensions. Tu peux trouver l'accélération dans cette direction comme tu calcules le grand côté d'un triangle à partir des deux petits côtés (**X** et **Y**) : 

```strength2D = Math.sqrt((accelX * accelX) + (accelY * accelY))```

If you decide to lift your @boardname@ off the table, then you've just added another dimension, so insert the acceleration value for the **Z** axis into the equation:

```strength3D = Math.sqrt((accelX * accelX) + (accelY * accelY) + (accelZ * accelZ))```

Ce calcul s'appelle la [norme euclidienne](https://en.wikipedia.org/wiki/Euclidean_norm) de l'accélération.

### ~

## Retourne

* un [nombre](/types/number) qui indique la quantité d'accélération. Lorsque la @boardname@ est posée à plat sur une surface, l'écran vers le haut, `x` vaut `0`, `y` vaut `0`, `z` vaut `-1023` et `strength` vaut `1023`.

## Exemple : diagramme en barres #example

Écris l'accélération de la @boardname@ dans la console.

```blocks
forever(() => {
    console.logValue("accel", input.acceleration(Dimension.X))
    pause(500)
})
```

## Voir aussi #seealso

[définir la plage de l'accéléromètre](/reference/input/set-accelerometer-range),
[niveau de lumière](/reference/input/light-level)

```package
accelerometer
```
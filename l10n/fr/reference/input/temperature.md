# Temperature

Trouve la température là où tu te trouves. La température est mesurée en Celsius (métrique) ou en Fahrenheit (impérial).
La @boardname@ peut trouver la température environnante en vérifiant à quel point ses puces électroniques sont chaudes.

```sig
input.temperature(TemperatureUnit.Celsius);
```
## Paramètres

* **unit** : l'unité de température, Celsius ou Fahrenheit.

## Retourne

* un [nombre](/types/number) qui représente la température en degrés Celsius ou Fahrenheit.

### Comment ça marche ?

La @boardname@ vérifie à quel point son processeur (la puce principale) est chaud.
Comme la @boardname@ ne chauffe généralement pas beaucoup, la température du processeur
est généralement proche de la température de l'endroit où tu te trouves.
La @boardname@ peut quand même chauffer un peu si tu la fais beaucoup travailler !

## Exemples #example

### Thermomètre @boardname@ #ex1

Utilise **température** et **tout définir** pour faire varier la luminosité des pixels selon la température de la pièce.

```blocks
let pixels = light.createStrip();

forever(() => {
    pixels.setBrightness(Math.map(
        input.temperature(TemperatureUnit.Celsius),
        0,
        50,
        0,
        255
    ));
    pixels.setAll(0xff0000);
});
```


### Thermomètre en Fahrenheit #ex2

Mesure la température en degrés Fahrenheit.

```blocks
let pixels = light.createStrip()

forever(() => {
    pixels.setBrightness(Math.map(
        input.temperature(TemperatureUnit.Fahrenheit),
        30,
        100,
        0,
        255
    ));
    pixels.setAll(0xff0000);
})
```

### ~hint
**Essaie ceci**

Compare la température affichée par ta @boardname@ avec celle d'un vrai thermomètre au même endroit.
Tu pourras peut-être trouver combien soustraire du nombre affiché par la @boardname@
pour obtenir la vraie température. Ensuite, tu peux modifier ton programme pour que la @boardname@ soit un
meilleur thermomètre.

### ~

## Voir aussi #seealso

[lors du changement de condition de température](/reference/input/on-temperature-condition-changed)



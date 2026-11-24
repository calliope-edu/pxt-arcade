# écrire valeur

Écris une paire **nom:valeur** sous forme de ligne de texte sur le port série.

```sig
serial.writeValue("x", 0);
```

Une paire **nom:valeur** est une chaîne qui contient à la fois un nom pour une valeur et la valeur
elle-même. Si tu veux envoyer une température de 32 degrés sous forme de paire _nom:valeur_,
elle serait envoyée au port série ainsi : "temperature:32". C'est une bonne façon
d'associer une valeur numérique à sa signification.

``||serial:write value||`` fait exactement cela : tu donnes le nom et la valeur en deux parties et il
les envoie sous forme de paire.

## Paramètres

* **name** : une [chaîne](/types/string) qui est la partie nom de la paire _nom:valeur_
* **value** : un [nombre](/types/number) qui est la partie valeur de la paire _nom:valeur_ 

## Exemple #example

Envoie des paires _nom:valeur_ pour les nombres pairs et impairs sur le port série.

```blocks
for (let i = 0; i < 10; i++) {
    if (i % 2 > 0) {
        serial.writeValue("odd", i)
    } else {
        serial.writeValue("even", i)
    }
}
```

## Voir aussi #seealso

[écrire ligne](/reference/serial/write-line),
[écrire nombre](/reference/serial/write-number)

```package
serial
```

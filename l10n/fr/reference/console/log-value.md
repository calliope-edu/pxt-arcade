# journaliser valeur

Écrit une paire **nom:valeur** comme ligne de texte dans la sortie de la console.

```sig
console.logValue("x", 0);
```

Une paire **nom:valeur** est une chaîne qui contient à la fois un nom pour une valeur et la valeur
elle-même. Si tu veux envoyer une température de 32 degrés sous forme de paire _nom:valeur_,
elle arriverait dans la sortie de la console ainsi : "temperature:32". C'est une bonne façon de
relier une valeur numérique à sa signification.

``||console:log value||`` fait exactement cela : tu donnes le nom et la valeur en deux parties et le bloc
les envoie sous forme de paire.

## Paramètres

* **name** : une [chaîne](/types/string) qui est la partie nom de la paire _nom:valeur_
* **value** : un [nombre](/types/number) qui est la partie valeur de la paire _nom:valeur_ 

## Exemple #example

Envoie des paires _nom:valeur_ pour les nombres impairs et pairs vers la sortie de la console.

```blocks
for (let i = 0; i < 10; i++) {
    if (i % 2 > 0) {
        console.logValue("odd", i)
    } else {
        console.logValue("even", i)
    }
}
```

## Voir aussi #seealso

[journaliser](/reference/console/log)
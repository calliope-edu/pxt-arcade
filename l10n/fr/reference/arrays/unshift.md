# unshift

Ajoutez un élément au début d'un tableau.

```sig
[""].unshift ("Bonjour")
```

Si vous avez un tableau avec trois nombres, comme 1, 2 et 3. Pour ajouter un autre nombre au début, vous le dé-*glissez* sur du tableau. Vous le faites comme ceci:

```block
let thoseNumbers = [1, 2, 3];
let head = 0;
head = thoseNumbers.unshift(0);
```

## Paramètres

* **Item**: élément à ajouter à l'avant du tableau.

## Exemple

Créer un tableau qui simule un train. Placez les parties du train dans le bon ordre.

```blocks
let count = 0
let part = ""
let train: string[] = []
let parts = ["flatcar", "boxcar", "tanker", "engine", "flatcar", "caboose", "boxcar"]
while (parts.length > 0) {
    part = parts.shift()
    if (parts.length > 1) {
        if (part == "engine") {
            parts.push(part)
        } else if (part == "caboose") {
            train.push(part)
        } else {
            count = train.unshift(part)
        }
    } else {
        count = train.unshift(part)
    }
}
```

## Voir aussi

[shift](/reference/arrays/shift), [push](/reference/arrays/push)
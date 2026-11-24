# convertir en texte

Change la valeur de n'importe quel [type](/types) en une [chaîne](/types/string) de texte.

```sig
convertToText(123)
```

## Paramètres

* **value** : une valeur d'un [type](/types) quelconque à convertir en [chaîne](/types/string).

## Valeur retournée

* une [chaîne](/types/string) qui est une représentation textuelle de **value**.

## Exemple #example

Convertis une valeur booléenne et une valeur numérique en chaînes et assemble-les dans une phrase.

```blocks
let myBoolean = false
let myNumber = 0

myBoolean = true
myNumber = 123

let myString = "It is " + convertToText(myBoolean) + " that " + convertToText(myNumber) + " is now a string!"
```

## Voir aussi #seealso

[parse int](/reference/text/parse-int), 
[parse float](/reference/text/parse-float)

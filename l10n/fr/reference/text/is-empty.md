# is Empty

Détermine si une chaîne de texte contient des caractères ou non.

```sig
"".isEmpty()
```

## Valeur retournée

* une valeur [booléenne](/types/boolean) qui est `true` si la chaîne ne contient aucun caractère ou `false` si elle contient un ou plusieurs caractères.

## Exemple

Vérifie si une chaîne appelée `myString` est vide.

```blocks
let myString = ""
let emptyStatus = false
if (myString.isEmpty()) {
    emptyStatus = true
}
```

## Voir aussi #seealso

[includes](/reference/text/includes)

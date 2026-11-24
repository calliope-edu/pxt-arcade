# length

Obtenez le nombre de caractères dans la chaîne de texte.

```block
let text = "";
text.length;
```

## Valeur retournée

* un [nombre](/types/number) qui est la longueur (nombre de caractères) de la chaîne de texte.

## Exemple

Ajoutez du texte à une chaîne jusqu'à ce qu'elle soit d'au moins 100 caractères.

```blocks
let tooShort = "";
while (tooShort.length < 100)
{
    tooShort = tooShort + "add some more...";
}
```
# charAt

Obtenez un caractère (lettre, numéro ou symbole) situé à un endroit donné dans une chaîne de caractères.

```sig
"".charAt(0);
```

Vous pouvez trouver quel caractère est à quel endroit dans une chaîne de caractères. Vous pourriez avoir du texte qui dit `"Hello there!"`. Le caractère à la position 6 est `'t'`. Le mot "Hello" plus l'espace ont les positions 0-5, donc,'t'est à la position 6. Pour obtenir le caractère à cette position, la lettre `'t'`, vous pouvez utiliser un des blocs comme ceci:

```block
let greeting = "Hello there!";
let tee = greeting.charAt(6);
```

## Paramètres

* **index**: un [nombre](/types/number) qui est l'emplacement (l'indice) dans la chaîne du caractère que l'on souhaite récupérer.

## Valeur retournée

* le [caractères](/types/string) situé à la position sélectionnée dans la chaîne de texte.

## Exemple

Faire une nouvelle phrase drôle à partir d'une phrase existante en choisissant toutes les lettres impaires.

```blocks
let sentence = "Cinnamon vanilla latte";
let funnySentence = "";
for (let i = 0; i < sentence.length; i++) {
    if (i % 2 > 0) {
        funnySentence = funnySentence + sentence.charAt(i);
    }
}
```

## Voir aussi

[char code at](/reference/text/char-code-at), [substr](/reference/text/substr)
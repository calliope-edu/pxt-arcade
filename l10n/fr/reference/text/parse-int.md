# parse int

Transforme un texte qui ne contient que des caractères numériques en une valeur de nombre entier.

```sig
parseInt("0");
```

Tu peux transformer une chaîne de texte contenant des caractères numériques en une véritable valeur entière. Le texte ne doit avoir que des caractères de nombre. Cela peut également inclure les symboles `'-'` et `'.'`. Mais, seule la partie *entière* (à gauche du point décimal) est convertie en nombre.

Si le texte comporte d'autres caractères, comme `"-2g5u7"`, seul `-2` est retourné car il s'agit de la meilleure tentative de conversion en nombre. Donc, essaie de ne pas mélanger les caractères numériques avec des lettres ou d'autres symboles.

## ~ indice

**Puissances de 10**

Si la chaîne de texte contient la lettre **'e'** après les caractères numériques, suivie d'autres caractères numériques comme **"2e4"**, alors les caractères numériques après le **'e'** sont un *exposant* de **10**. Cela signifie qu'une chaîne `"8e3"` devient la valeur `8000` lorsqu'elle est convertie en entier. En effet, le `3` après le `e` représente 3 puissances de dix, soit `10 * 10 * 10` ou `1000`. La valeur résultante est alors `8 * 1000`, ce qui donne `8000`.

## ~

## Valeur retournée

* une valeur de [nombre](/types/string) entier pour le nombre écrit dans la chaîne.

## Exemple #exsection

Prends le texte de la température dans la phrase et transforme-le en un nombre.

```blocks
let frozenWater = "The freezing temperature of water is 32 degrees Fahrenheit.";
let freezing = parseInt(frozenWater.substr(37, 2));
```

## Voir aussi #seealso

[parse float](/reference/text/parse-float)
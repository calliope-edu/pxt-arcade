# parse Float

Transforme un texte qui ne contient que des caractères numériques en une valeur de nombre à virgule flottante.

```sig
parseFloat("0.5");
```

Tu peux transformer une chaîne de texte contenant des caractères numériques en une véritable valeur à virgule flottante. Le texte ne doit avoir que des caractères de nombre. Cela peut également inclure les symboles `'-'` et `'.'`.

Si le texte comporte d'autres caractères, comme `"-5.8g5u7"`, seul `-5.8` est retourné car il s'agit de la meilleure tentative de conversion en nombre. Donc, essaie de ne pas mélanger les caractères numériques avec des lettres ou d'autres symboles.

## ~ indice

**Puissances de 10**

Si la chaîne de texte contient la lettre **'e'** après les caractères numériques, suivie d'autres caractères numériques comme **"2e4"**, alors les caractères numériques après le **'e'** sont un *exposant* de **10**. Cela signifie qu'une chaîne `"7.5e2"` devient la valeur `750` lorsqu'elle est convertie en nombre à virgule flottante. En effet, le `2` après le `e` représente 2 puissances de dix, soit `10 * 10` ou `100`. La valeur résultante est alors `7.5 * 100`, ce qui donne `750`.

## ~

## Valeur retournée

* une valeur de [nombre](/types/string) à virgule flottante pour le nombre écrit dans la chaîne.

## Exemple #exsection

Prends les premiers chiffres de PI dans la phrase et transforme-les en nombre.

```blocks
let text = "pi is 3.14...";
let pi = parseFloat(text.substr(6, 3));
```

## Voir aussi #seealso

[parse int](/reference/text/parse-int)

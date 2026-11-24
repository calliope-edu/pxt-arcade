# char Code At

Obtiens le code d'un caractère (lettre, chiffre ou symbole) à une position donnée dans une chaîne de texte.

```sig
"".charCodeAt(0)
```

Comme la position d'une lettre dans l'alphabet, ou l'ordre traditionnel des caractères dans une langue, les caractères reçoivent un code dans un jeu de caractères lorsqu'ils sont utilisés par les ordinateurs. Si un jeu de caractères n'utilisait que les 5 caractères de "ABCDE", alors 'A', le premier caractère, aurait le code `0` et 'D' aurait le code `3`.

Tu peux trouver le code d'un caractère dans une chaîne de texte en le sélectionnant par sa position dans la chaîne.

## Paramètres

- **index** : le [nombre](/types/number) indiquant la position dans la chaîne de texte dont on veut le code de caractère.

## Valeur retournée

- un [nombre](/types/string) qui est le code dans le jeu de caractères pour la position choisie dans la chaîne de texte.

## Exemple

Trouve le code du caractère à la position `6` dans une chaîne.

```blocks
let sentence = "Super space ship"
let myCharCode = sentence.charCodeAt(6)
```

## Voir aussi

[char at](/reference/text/char-at),
[substr](/reference/text/substr)
# fromCharCode

Créer une chaîne de caractères unique à partir d'un numéro de code de caractère.

```sig
String.fromCharCode(0);
```

Pour que les ordinateurs utilisent du texte, chaque lettre et symbole a besoin d'un numéro pour l'indentifier. En plus, les différentes langues ont leurs propres lettres et symboles. Le groupe de lettres et de symboles utilisés par un ordinateur pour une langue quelconque est appelé un *jeu de caractères*.

Disons que vous ayez votre propre langue qui n'utilise que les lettres: `A, B, C, D, E, F`. Votre langue a un jeu de caractères de 6 lettres. Si la lettre `A` est la première lettre de votre jeu de caractères, elle a un code de caractère de `0`. De même, le code de caractère de `F` est `5`.

L'un des premiers jeux de caractères et le plus utilisé dans les ordinateurs est [l'ASCII](https://wikipedia.org/wiki/ASCII). Il y a beaucoup de caractères en ASCII. Ainsi la lettre `a` a un code de `65`.

La plupart des jeux de caractères les plus récents gardent les lettres et les symboles de l'ASCII et en ajoutent beaucoup d'autres. Ainsi, il est courant que les codes pour les vieilles lettres ASCII fonctionnent dans les nouveaux ensembles. Chaque fois que vous interagissez avec un ordinateur, vous tapez des lettres et des symboles à partir d'un jeu de caractères et il affiche des lettres et des symboles à partir d'un jeu de caractères.

Ainsi, vous pouvez faire la lettre `B` à partir de:

```block
let letItBe = String.fromCharCode(66);
```

## Paramètres

* **code**: [numéro](/types/number) du code de la lettre, du symbole du numéro ou d'un autre symbole (comme les signes de ponctuation) dans le jeu de caractères.

## Valeur retournée

* une [chaîne](/types/string) de caractères unique qui est une lettre ou un symbole choisi dans le jeu de caractères.

## Exemple

Décodez un message secret à partir d'un tableau de nombres!

```blocks
let secret = [67, 111, 111, 107, 105, 101, 115, 33];
let decoded = "";
for (let code of secret) {
    decoded = decoded + String.fromCharCode(code);
}
```

## Voir aussi

[parse float](/reference/text/parse-float)
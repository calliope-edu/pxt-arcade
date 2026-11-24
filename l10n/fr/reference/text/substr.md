# substr

Prends une partie de la chaîne pour créer une chaîne plus petite (une sous chaîne).

```sig
"".substr(0, 0)
```

Tu peux copier une partie d'une autre chaîne en en extrayant une *sous-chaîne*. Une nouvelle sous-chaîne est créée en copiant un certain nombre de caractères de la première chaîne, à partir d'une position de départ.

Tu peux faire une nouvelle chaîne qui a juste le mot `"there"` d'une chaîne plus grande qui dit `"Hello there!!!"`. Pour cela, la sous-chaîne est copiée à partir de la position de caractère de `6` dans la première chaîne et `5` caractères sont copiés. C'est fait comme ceci:

```block
let there = "Hello there!!!".substr(6, 5)
```

Si tu veux que la sous-chaîne soit copiée jusqu'à la fin de la première chaîne, utilise simplement une position de départ et n'utilise pas le paramètre ***length*** ou mets-le à `0`. Cela copiera toute la première chaîne commençant à la position `6`. La sous-chaîne dira `"there!!!"` dans ce cas.

```block
let there = "Hello there!!!".substr(6)
// - or -
let there = "Hello there!!!".substr(6, 0)
```

## Paramètres

* **start** : un [nombre](/types/number) qui est la position à partir de laquelle copier dans la chaîne d'origine. 
* **length** : (facultatif) un [nombre](/types/number) qui est la quantité de caractères à copier depuis la chaîne d'origine. Si *length* n'est pas indiqué ou vaut `0`, le reste de la chaîne est copié à partir de *start*. Si *length* est inférieur à `0`, une chaîne sans contenu (chaîne vide) est retournée.

## Valeur retournée

* une nouvelle [chaîne](/types/string) qui est une partie de la chaîne d'origine.

## Exemple

Copie les noms de la phrase en deux chaines plus petites.

```blocks
let sentence = "The mountains have snow"
let mountains = sentence.substr(4, 9)
let snow = sentence.substr(19)
```

## Voir aussi

[charAt](/reference/text/char-at)
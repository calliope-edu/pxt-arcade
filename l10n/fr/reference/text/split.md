# split

Divise une chaîne en chaînes plus petites en utilisant une chaîne séparateur pour découper la chaîne plus grande.

```sig
"".split(",")
```

Une chaîne est divisée en une ou plusieurs chaînes plus courtes en cherchant une chaîne spéciale dans la grande chaîne et en la coupant exactement à cet endroit. Cette chaîne spéciale s'appelle un _séparateur_. Le séparateur est souvent un seul caractère, mais il peut aussi être plus long si tu le souhaites. Les chaînes plus petites obtenues après la division sont retournées dans un [tableau](/types/array) de chaînes.

Si une chaîne contient une liste d'animaux et que chaque nom d'animal se termine par une virgule, cette virgule peut servir de séparateur.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
```

Quand la chaîne `animals` est divisée avec la virgule, un tableau de noms d'animaux est créé.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",")
```

Si tu veux obtenir la chaîne `"hippo"`, il suffit de sélectionner la chaîne de `animalNames` à l'index `3`.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",")
let hippo = animalNames[3]
```

En plus du séparateur, l'opération de division peut utiliser un paramètre **limit**. Il limite le nombre de chaînes plus petites découpées dans la grande chaîne. Il y a `6` noms d'animaux dans la chaîne `animal` des exemples. Si tu veux seulement les `2` premiers animaux de cette chaîne, tu peux fixer la limite à `2`.

```typescript
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",",2)
```

Maintenant, le tableau résultant `animalNames` ne contiendra que `"giraffe"` et `"lion"`.

## Paramètres

* **separator** : une [chaîne](/types/string) qui indique à l'opération de division où couper la grande chaîne en chaînes plus petites.
* **limit** : un [nombre](/types/number) qui est le nombre maximal de chaînes plus petites à découper dans la grande chaîne. La limite peut être supérieure au nombre de chaînes possibles, mais seul le nombre possible de chaînes découpées est retourné.

## Valeur retournée

* un [tableau](/types/array) de chaînes qui contient les chaînes plus petites découpées au niveau du séparateur.

## Exemples #examples

### Obtenir les couleurs de l'arc-en-ciel #ex1

Divise une chaîne contenant les noms des couleurs de l'arc-en-ciel en une liste de couleurs.

```blocks
let rainbow = "red, orange, yellow, green, blue, indigo, violet"
let colors = rainbow.split(",")
```

### Message secret #ex2

Décode un message secret à partir d'une phrase « brouillée » par des caractères en trop. Ces caractères en trop s'appellent la `messageKey`. La chaîne est divisée à l'aide de cette clé.

```blocks
let message = ""
let messageKey = "j8it62we"
let secret = "j8it62weHelj8it62welo,j8it62we mj8it62wey namj8it62wee ij8it62wes Sanj8it62wedy"
let decoded = secret.split(messageKey)
for (let word of decoded) {
    message = "" + message + word
}
```

## Voir aussi #seealso

[substr](/reference/text/substr)
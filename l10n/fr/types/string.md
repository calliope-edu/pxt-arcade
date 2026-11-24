# Texte

Une *chaîne* est une séquence de caractères. 

## #intro

Une chaîne est un type plus complexe qu'un [nombre](/types/number) ou un [booléen](/types/boolean). En plus de ses caractères, une chaîne contient des informations sur sa longueur et te permet de modifier n'importe lequel de ses caractères à l'aide d'un index. Les chaînes peuvent être découpées en chaînes plus petites ou complétées pour former des chaînes plus grandes.

Les chaînes peuvent contenir des lettres, des chiffres, des signes de ponctuation et d'autres caractères spéciaux. Elles peuvent aussi contenir des caractères de différentes langues.

``"abcdefg1234*?!"``

Une [variable](/blocks/variables/var) de type chaîne se déclare en [affectant](/blocks/variables/assign) une valeur de chaîne à une variable :

```block
let myString = "My nice new string is here!"
```

Les chaînes disposent d'opérations qui te permettent de les modifier ou de travailler avec certaines de leurs parties.

```blocks
let myString = "My nice new string is here!"
// make a smaller string
let mySmallString = myString.substr(0, myString.indexOf("g") + 1)
```

## Créer une variable de type chaîne #create

```block
let greeting = "hello"
```

Pour créer une variable qui contient une chaîne :

1. Clique sur `Variables` (dans la boîte à outils).
2. Clique sur **Créer une variable...**.
3. Choisis un nom pour ta variable, comme "greeting", saisis-le et clique sur **Ok**.
4. Fais glisser le nouveau bloc de variable dans ton code.
5. Clique sur ``Texte`` (dans la boîte à outils) et trouve le bloc `" "`.
6. Clique sur le `" "` puis saisis une chaîne comme `hello`.

Ton code devrait ressembler à ceci :

```block
let greeting = "hello"
```

## #examples

## #custom

## Voir aussi #seealso
 
[Nombres](/types/number)

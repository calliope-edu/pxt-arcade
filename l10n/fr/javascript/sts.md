# Static TypeScript

### ~ hint

Ceci est une ébauche qui reflète la conception de Static TypeScript (STS) - pas exactement ce qui est implémenté, mais assez proche. Les commentaires sont les bienvenus.

### ~

[TypeScript](http://typescriptlang.org) est un sur-ensemble typé de JavaScript conçu pour permettre aux développeurs JavaScript de tirer parti du code IntelliSense, de la vérification statique et de la refactorisation rendues possibles par les types. TypeScript est graduellement typé, ce qui signifie que les types sont facultatifs. L'inférence de type permet d'assigner des types à un code non typé.

Dans ce document, nous définissons un sous-ensemble de TypeScript appelé Static TypeScript (STS, pour faire plus court), qui a été créé pour permettre d'utiliser un langage de script pour programmer des ordinateurs physiques basés sur des microcontrôleurs avec de petites quantités de mémoire. La première utilisation de Static TypeScript a été fait pour les carte [micro: bit](http://microbit.org), qui ont un microcontrôleurs avec seulement 16Kb de RAM.

La meilleure façon de penser à STS est comme C#/Java/C++ un sous-ensemble de TypeScript où tous les types sont connus au moment de la compilation. cela permet une liaison efficace à un Runtime C++ (dans le cas de la micro:bit, le [Lancaster University micro: bit dal](https://github.com/lancaster-university/microbit-dal)). STS essaie de maintenir autant que possible la sémantique JavaScript, compte tenu des contraintes imposées par un typage statique.

# Adieu à tout, Union, types d'intersection et les mauvaises parties

Dans TypeScript, le type *Any* est «le type qui peut représenter n'importe quelle valeur JavaScript sans contraintes». Dans TypeScript, chaque expression de programme, valeur et fonction doit avoir un certain type, même si elle n'est pas explicitement fournie par le programmeur. Par le manuel de référence de TypeScript:

    “aux endroits où aucun type n'est explicitement fourni et où TypeScript ne peut pas en déduire un, le type Any est supposé.”
    

STS n'autorise pas l'utilisation des types Any, Union et Intersection. Le résultat est que STS interdit les programmes où un élément de programme peut désigner de nombreux types de valeurs d'exécution (par exemple, une variable qui est une chaîne à un point dans l'exécution et un nombre à un autre point, comme spécifié par le type d'Union *String | Number*).

À la suite de ce choix, de nombreuses fonctionnalités dynamiques de JavaScript (et donc TypeScript) sont hors de STS: * la fonction *eval* ; * l'instruction *with* ; * accès à la propriété prototype (adieu à l'héritage basé sur un prototype); * propriétés calculées; * accès au pointeur "this" en dehors d'une classe; * l'expression typeof; * assertions de type

STS exclut également les fonctionnalités que nous considérons comme historiques, y compris l'instruction var et la boucle for-in (for-of est pris en charge). Si vous pensez que l'un des éléments ci-dessus devrait être introduit dans un cours d'introduction à un langage de programmation, parler maintenant ou taisez-vous à jamais.

# Bonjour, Static TypeScript!

STS contient beaucoup de bonnes parties de TypeScript, y compris * code de niveau supérieur dans un fichier; Le programme "hello world" fait juste une ligne- `console. log ("Hello World")` * déclarations de variables à portée lexicale via les classes `let` et `const` * Classes avec des champs statiques et d'instance, des méthodes et des constructeurs; Propriétés de genre méthode (accesseurs get/set); mot clé `New` ; * interfaces pour décrire la forme de données (basées sur des enregistrements) * définitions des fonctions imbriquées (avec la portée lexicale et la récursivité) et les fonctions fléchées * classes génériques, méthodes et fonctions pour la réutilisation du code (voir ci-dessous pour les limitations) * espaces de noms (une forme de modules ) * instructions de flux de contrôle standard * `if... else if ... instruction else` * boucles : `while`, `do ... while`, `for(;;)` et `for ... of` instructions * `break`/`continue` ; également avec des boucles étiquetées * `switch` , instruction * arithmétiques booléenne stadard * opérateur conditionnel `?` et opérateurs booléens paresseux * tous les opérateurs arithmétiques (y compris les opérateurs de bits); * littéraux * littéraux primitifs * littéraux tableaux `[1, 2, 3]` * objet littéraux `{foo: 1, bar: "Two"}` * String templates (`'x is ${x}'`)

Les éléments TypeScript non mentionnés comme inclus dans les STS dans les sections précédentes sont exclus de STS pour l'instant (voir la section suivante pour une liste de ces éléments). Si nous avons laissé quelque chose qui, évidemment, devrait être en STS, s'il vous plaît laissez-nous le savoir!

# Type checking avec STS

Le système de type de Typescript est très riche avec une notion complexe de compatibilité de type et de substituabilité. STS conserve plusieurs des règles de contrôle de type de TypeScript (sous-typage structurel, par exemple), mais modifie la notion de compatibilité/substituabilité de type pour réduire les erreurs d'exécution. Notre objectif est de capturer à la compilation autant d'erreurs que possible, tout en conservant un langage expressif avec des tableaux, des fonctions, des classes et des génériques. Cela signifie que nous rejetons les downcasts explicites ou implicites, par exemple, ainsi que l'utilisation de la bivariance dans le sous-typage des fonctions.

## Types primitifs

STS sépare les types primitifs (non boxed) de *number*, *enum*et *boolean* des types référence (boxed) tels que les chaînes et les objets. Cela signifie que le code tel que:

```typescript
let a: Object = 3
```

est illégale avec STS, car les types primitifs ne sont pas des objets (bien que les types primitifs prennent en charge les méthodes de base, telles que `toString`).

Il y a un changement majeur par rapport à JavaScript, STS traite les *number* comme des entiers 32 bits plutôt que des doubles (comme dans JavaScript). STS ne supporte pas encore les nombres flottants.

### ~ hint

TODO -ne pas autoriser les conversions implicites entre les types primitifs, ou entre les types primitifs et d'objets. -actuellement, nous le permettons

```typeScript
let x : number = null
basic.showNumber(x)
let y : number = undefined
basic.showNumber(y)
let s: string = null
basic.showString(s)
```

où null et undefined sont transformé de force en 0. C'est OK pour le nombre, mais plutôt étrange pour les string.

### ~

## Valeurs undefined, null et default

Static TypeScript fournit des valeurs par défaut pour XYZ. Undefined/null sont traités identiquement.

## Types Objets

En TypeScript, les références de type classe et interface, les types tableaux, les types tuples et les types fonctions sont tous classés en tant que *types objets*, qui sont liés par le sous-typage structurel.

Dans STS, les classes, les enregistrements (décrits par des interfaces), les tableaux, les tuples et les fonctions sont des *types distincts*, avec les relations de type suivantes, qui sont un sous-ensemble strict des relations de type dans TypeScript.

### Classes

Dans STS, les classes et les enregistrements sont liés par un sous-typage structurel, comme dans TypeScript, avec les restrictions supplémentaires suivantes: * les classes peuvent être traitées comme des enregistrements (via un cast de la classe à l'interface); * les enregistrements ne peuvent pas être traités comme des classes (les casts des interfaces aux classes ne sont pas autorisées); * les casts de classe à classe peuvent uniquement être de la sous-classe à la superclasse, comme défini par la (fermeture transitive) de la clause *extends* des classes; * les interfaces ne peuvent pas étendre les classes * une interface ne peut pas avoir le même nom qu'une classe

Le traitement STS des classes suit une discipline de typage nominale, où l'on s'attend à ce qu'un objet de type classe ait l'implémentation associée à cette classe. Dans une discipline de sous-typage structurelle pure, on peut définir un objet, puis le caster en type de classe, mais l'implémentation de cet objet peut être complètement non liée à l'implémentation de la classe.

### Fonctions

Dans STS, les fonctions et les méthodes sont liées par le sous-typage de fonction classique (pas de bivariance de paramètre, comme dans TypeScript). De plus : * la surcharge de fonctions/méthodes n'est pas autorisée ; * une fonction ne peut être castée qu'en une interface J qui possède une seule signature d'appel correspondant au type de la fonction ; l'interface J ne peut avoir aucune autre propriété

### Tableaux

Comme pour les fonctions, les tableaux ne peuvent être castés qu'en une interface J qui possède une seule signature d'index correspondant au type du tableau ; l'interface J ne peut avoir aucune autre propriété.

## Propriétés facultatives

Les interfaces prennent en charge les propriétés facultatives. Ce qui suit est légal en TypeScript

    interface Foo {
       a: number;
       b?: string;
    }
    
    let f: Foo = { a:42 }
    

En TypeScript/JavaScript, il n'existe aucune propriété nommée `b` dans l'objet référencé par f.

## Génériques

Avec l'exclusion du type Any, il est très important de prendre en charge les génériques afin que le code puisse être réutilisé à travers de nombreux types. STS prend en charge les fonctions et classes génériques avec les restrictions suivantes: * les fonctions génériques ne peuvent pas être utilisées comme valeurs; * les fonctions imbriquées ne peuvent pas être génériques;

### ~ hint

TODO * La vérification de type des génériques doit suivre Java (qui utilise l'effacement de type).

### ~

## Void et Never

TODO (pas grand chose)

# Compilation de STS

# TODO

[nécessité d'adresser des exceptions, regex, débogage, async!!!.]
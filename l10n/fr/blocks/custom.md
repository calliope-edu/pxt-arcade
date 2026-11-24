# Blocs personnalisés

Cette page fournit une brève introduction sur la manière de définir vos propres blocs dans MakeCode.

## Des blocs personnalisés? Je ne les vois pas dans l'éditeur !

C'est juste. Il est possible de définir vos propres fonctions en JavaScript et de les transformer en blocs avec l'ajout de quelques macros spéciales dans les commentaires.

Toute fonction JavaScript exportée peut être transformée en bloc en ajoutant simplement un commentaire `//% block` :

```typescript
namespace fun {
  /** 
  * Calcule la fameuse séquence de numéros de Fibonacci!
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
```

Il existe plusieurs options pour contrôler l'apparence de vos blocs. Nous en générons quelques-uns dans le modèle pour vous aider à démarrer. Pour le guide complet, lisez https://makecode.com/Defining-blocks.

## Stockage de blocs dans un projet

N'ajoutez pas de définitions de bloc directement dans `main.ts` car elles apparaîtront sous la forme de blocs gris. Au lieu de cela, suivez les étapes ci-dessous pour ajouter un nouveau fichier, `custom.ts`, et ajoutez tous vos blocs dans ce fichier.

Pour ajouter `custom.ts` à votre projet, vous devez suivre cette procédure:

* aller dans la partie JavaScript de l'éditeur
* cliquez sur la vue **Explorateur** et développez-la
* cliquez sur le bouton `+` qui vient d'apparaître
* acceptez la boîte de dialogue pour ajouter le fichier `custom.ts` dans votre projet

Si vous avez déjà ajouté ce fichier à votre projet, accédez-y simplement à l'aide de la vue **Explorateur** .

## Utilisation d'un projet partagé dans **Extensions**

Vous pouvez ajouter un projet partagé en tant qu'extension dépendante et ainsi réutiliser tous les blocs de ce projet. Il suffit de cliquer sur le bouton **Extensions** , collez l'URL du projet partagé, et lancer la recherche.

## Cycle de développement

Une fois le fichier `custom.ts` ajouté à votre projet, vous pouvez alterner entre ce fichier et la vue bloc. Les blocs se rechargent automatiquement à chaque itération.

Si rien ne s'affiche dans votre catégorie, vous pouvez avoir une erreur de syntaxe dans votre définition de fonction. Assurez-vous que votre code compile et que les commentaires semblent corrects.

## Partage de vos blocs

La façon la plus simple de partager vos blocs est de partager l'intégralité du projet à l'aide du [bouton partager](/share).

## Envoi dans GitHub

Si vous prévoyez de réutiliser ces blocs plus loin, vous pourriez envisager de les transformer en une [extension](/extensions).

## Default custom.ts

When `custom.ts` is created, it contains some default code for blocks as a placeholders for you to start with. Depending on your language the default `custom.ts` looks something like this:

```typescript
<br />/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
        //% block="one"
        One,
        //% block="two"
        Two
}

/**
* Custom blocks
*/
//% block="Custom" weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
    * TODO: describe your function here
    * @param n describe parameter here, eg: 5
    * @param s describe parameter here, eg: "Hello"
    * @param e describe parameter here
    */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
    * TODO: describe your function here
    * @param value describe value here, eg: 5
    */
    //% block
    export function fib(value: number): number {
    return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
```
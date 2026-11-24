# Types

Un *type* désigne une catégorie de données et les opérations autorisées sur cette catégorie de données. Les types intégrés suivants sont pris en charge :

## Types de base (primitifs) #primitives

* **[Number](/types/number)**: nombre entier (signé 32 bits)
* **[String](/types/string)**: chaîne de caractères
* **[Boolean](/types/boolean)**: une valeur booléenne pouvant être vraie (true) ou fausse (false)

## Types complexes #complex

* **[Array](/types/array)**: liste d'éléments d'un type primitif

## Fonctions

* **[Function](types/function)**: code que vous pouvez réutiliser n'importe où dans un programme 

## Images et Sprites #custom

* **[Image](/types/image)**: des lignes et des colonnes de pixels de couleur qui forment une image
* **[Sprite](/types/sprite)**: un objet qui permet de placer et de déplacer une image

## Types utilisateurs

TypeScript vous permet de créer des classes de données définies par l'utilisateur.

```typescript
class Foo {
    public bar: number;
    baz() {

    }
}
```

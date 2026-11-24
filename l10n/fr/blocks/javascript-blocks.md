# Bloc JavaScript

JavaScript est un langage très puissant; si puissant que certains concepts en JavaScript ne peuvent pas être affichés en utilisant des blocs. Lorsque PXT rencontre un morceau de code qui ne peut pas être converti en blocs, il crée plutôt un bloc JavaScript gris pour le conserver. Ces blocs sont convertis dans le code JavaScript lorsque vous revenez à l'éditeur de texte.

```block
for (let index = 0; index <= 5; index++) {
    let x = fibonacci(index);
}

function fibonacci(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Le code dans les blocs JavaScript ne peut pas être édité, mais les blocs eux-mêmes peuvent être déplacés, copiés, collés, et supprimés comme n'importe quel autre bloc.

## Comment puis-je obtenir mon code JavaScript sans blocs grisés ?

La façon la plus simple d'écrire du code qui va facilement pouvoir se convertir de Javascript en bloc (et inversement) est d'écrire le code uniquement à l'aide de l'éditeur blocs. Beaucoup de blocs ont une structure très spécifique dans leur équivalent JavaScript. Elle doit être suivie scrupuleusement afin de pouvoir les convertir correctement. Si vous avez un morceau de votre code qui ne se convertit pas, essayez de regarder le bloc que vous attendiez et le JavaScript qu'il produit.

Par exemple, une boucle for doit avoir cette structure à convertir en bloc:

```typescript
for (let x = 0; x <= 5; x++) {
}
```

Les exemples suivants ne peuvent pas être représentés par les blocs:

```typescript-ignore
// la condition doit être soit < ou <= avec une variable sur le côté gauche
for (let x = 0; x > -1; x++) {
}

// la variable dans la condition et la variable de l'opérateur d'incrémentation
// doit être identique à la variable déclarée
for (let x = 0; x <= 5; y++) {
}

// la variable déclarée doit être initialisée à 0 
for (let x = 2; x <= 5; x++) {
}

// les trois parties de la boucle for doivent être présentes
for (;;) {
}
```

Essayez de faire correspondre le JavaScript du bloc désiré aussi étroitement que possible.
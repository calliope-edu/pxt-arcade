# Variables

Un programme travaille toujours avec des informations. Les informations, ou données, qu'un programme a besoin sont conservées quelque part dans la mémoire de l'ordinateur. La mémoire d'un ordinateur est ordonnée de sorte que chacune des données stockées là peut être retrouvée en utilisant une adresse. Une adresse est un nombre qui indique où les données du programme se trouve dans la mémoire.

Pour un programme, l'utilisation d'un numéro d'adresse pour obtenir et stocker des données est très gênant. Les programmes utilisent plutôt des *variables*. Une variable représente l'endroit dans la mémoire où les données sont conservées. Elles sont appelées variable parce que les données qu'elles contiennent peuvent changer (varier) lorsque le programme y stocke quelque chose de nouveau. Lorsque vous créez une nouvelle variable dans votre programme, vous réservez une place en mémoire pour certaines données que votre programme peut vouloir créer, copier ou vérifier ultérieurement.

Les variables ont un nom, un [type](/types)et une valeur:

* *nom* - comment vous allez faire référence à la variable dans votre programme
* *type* -le type de données qu'une variable stockera
* *value* -ce qui est stocké (les données) dans la variable

### ~ hint

Vous pouvez utiliser les noms de variables par défaut donnés dans les blocs si vous le souhaitez. Toutefois, il est préférable d'utiliser des noms de variables descriptives. Pour modifier un nom de variable dans l'éditeur, sélectionnez la flèche vers le bas à côté de la variable, puis cliquez sur "Renommer la variable...".

### ~

## Instruction `let`

Utilisez l'instruction de variable de l'éditeur de blocs pour créer une variable et l' [opérateur d'assignation](/blocks/variables/assign) pour y stocker quelque chose. C'est ce qu'on appelle la *déclaration* de la variable.

Par exemple, ce code stocke le nombre `2` dans la variable nommée `x` :

```block
let x = 2;
```

Voici comment faire une variable dans l'éditeur de bloc:

1. Cliquez sur `variables`.

2. Modifiez le nom de la variable par défaut si vous le souhaitez.

3. Faites glisser un type de bloc sur le côté droit de l' [opérateur d'assignation](/blocks/variables/assign) et cliquez sur la flèche vers le bas pour modifier le nom de la variable.

Lorsque vous effectuez ou déclarez une variable dans le code, vous utilisez l'instruction ```let``` Il ressemble à ceci:

```typescript
let percent = 50;
```

### #letexample

### Lecture de la valeur d'une variable

Une fois que vous avez déclaré une variable, il suffit d'utiliser le nom de la variable chaque fois que vous avez besoin de ce qui est stocké dans la variable.

#### #readvariableexample

```block
let count = 10
let half = count / 2
```

### Mise à jour de la valeur d'une variable

Pour modifier le contenu d'une variable, utilisez l'opérateur d'assignation.

#### #updatevariableexample

```block
let count = 10
if (count < 20) {
    count = 20
}
```

### Pourquoi utiliser des variables?

Si vous voulez vous souvenir et modifier des données quelque part dans votre programme plus tard, vous aurez besoin d'une variable.

#### #whyusevariablesexample

### Variables locales

Les variables locales n'existent que dans la fonction ou le bloc de code où ils sont déclarés.

Ici, la variable `index` n'existe qu'à l'intérieur du bloc **for** . La variable `looping` existe à la fois à l'extérieur et à l'intérieur du bloc **for**.

#### #localvariableexample

```block
let looping = true;
for (let index = 0; index <= 10; index++) {
    if (index == 10) {
        looping = false;
    }
}
```

## Voir aussi

[Opérateur d'assignation](/blocks/variables/assign), [Opérateur de modification](/blocks/variables/change)
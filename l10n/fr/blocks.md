# Langage de bloc

### @description Concept de langage pour l'éditeur de blocs.

## #blocksbase

Les blocs s'emboîtent les uns dans les autres pour définir le programme qui sera exécuté. Les blocs peuvent soit être des événements (boutons, secouer,...) soit être imbriqués dans un événement afin de pouvoir s'exécuter. L'événement [on-start](/blocks/on-start) s'exécute en premier.

## Blocs

```namespaces
for (let i = 0;i<5;++i) {}
if (true){}
let x = 0;
```

## Objets intégrés #builtins

```namespaces
Math.randomRange(0,5);
"".compare("");
[0].push(0);
```

## Voir aussi

[logique](/blocks/logic), [boucles](/blocks/loops), [variables](/blocks/variables), [maths](/reference/math), [texte](/reference/text), [tableaux](/reference/arrays)

[on-start](/blocks/on-start), [blocs JavaScript](/blocks/javascript-blocks), [blocs personnalisés](/blocks/custom)
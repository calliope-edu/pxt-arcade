# Continue

Ignorer le reste du code dans une boucle et recommencer la boucle.

```block
while(true) {
    if (Math.randomRange(0, 10) > 5) {
        // skip the rest of the loop
        continue;
    }
    // do something
}
```

Lorsqu'un programme rencontre **continue** à l'intérieur d'une boucle, il saute l'exécution du reste du code dans la boucle à partir de l'emplacement du **continue** jusqu'à la fin de la boucle. La boucle n'est pas interrompue, mais continue son exécution. Si la boucle utilise une itération (un compteur ou une valeur d'index), comme par exemple une boucle [for](/blocks/loops/for), elle recommencera avec l'itération suivante.

## #examples

## Voir aussi #seealso

[pause](/blocks/loops/break)
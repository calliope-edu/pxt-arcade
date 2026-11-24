# Break

Sortir de la boucle actuelle et continuer l'exécution du programme.

```block
while(true) {
    if (Math.randomRange(0, 10) > 5) {
        break;
    }
}
```

Lorsqu'un programme rencontre un **break**, la boucle qui le contient arrêtera sont exécution à l'endroit du **break**. Le programme continue ensuite en exécutant le code situé juste après la fin de la boucle.

Si un boucle avec un **break** se trouve dans une autre boucle (boucles imbriquées), seule la boucle contenant le **break** sera stoppée. La boucle extérieure continuera à exécuter le code qu'elle contient.

## #examples

## Voir aussi #seealso

[continue](/blocks/loops/continue)
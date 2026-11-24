# pxt-color

## définir la palette de couleurs

Définit tout ou partie de la palette actuelle du jeu

@param palette Les couleurs à définir
@param start [optionnel] L'entrée à partir de laquelle les couleurs sont définies (par défaut : 0)
@param length [optionnel] Le nombre de couleurs à copier (par défaut : toutes)
@param pOffset [optionnel] La position dans la palette à partir de laquelle copier (par défaut : 0)

## fondu d'une palette à une autre

Crée un fondu d'une palette à une autre pendant la durée indiquée

@param start la palette de départ
@param end la palette d'arrivée
@param duration [optionnel] combien de temps cela doit durer (par défaut : 2 secondes)

## appliquer l'effet de fondu

Applique un effet qui modifie la palette de couleurs de l'écran.

@param duration combien de temps l'effet doit durer (par défaut : 2 secondes)

## attendre la fin du fondu

Attend que le fondu en cours soit terminé. C'est pratique quand un fondu ne doit commencer qu'après un autre.

## effacer l'effet de fondu

Efface le dernier effet de fondu en remettant la palette dans l'état d'avant l'effet.

Source : [jwunderl/pxt-color](https://github.com/jwunderl/pxt-color/tree/v0.2.3) (v0.2.3)

```package
color-fading
```

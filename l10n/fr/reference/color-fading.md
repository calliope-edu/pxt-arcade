# pxt-color

## définir la palette

Définit dynamiquement tout ou partie de la palette actuelle du jeu

@param palette Les couleurs à définir
@param start [optionnel] L'index à partir duquel définir les couleurs (par défaut, 0)
@param length [optionnel] Le nombre de couleurs à copier (par défaut, toutes)
@param pOffset [optionnel] Le décalage à partir duquel copier dans la palette (par défaut, 0)

## fondu d'une palette à une autre

Crée un fondu d'une palette à une autre sur la durée indiquée

@param start la palette de départ
@param end la palette d'arrivée
@param duration [optionnel] la durée du fondu (par défaut, 2 secondes)

## appliquer un effet de fondu

Applique un effet pour modifier la palette de couleurs de l'écran.

@param duration la durée de l'effet (par défaut, 2 secondes)

## mettre en pause jusqu'à la fin du fondu actuel

Met en pause jusqu'à ce que le fondu actuel soit terminé. Cela peut être utile quand tu veux qu'un fondu ait lieu après la fin d'un autre.

## effacer l'effet de fondu

Efface le dernier effet de fondu en rétablissant la palette telle qu'elle était avant cet effet.

Source : [jwunderl/pxt-color](https://github.com/jwunderl/pxt-color/tree/v0.2.3) (v0.2.3)

```package
color-fading
```

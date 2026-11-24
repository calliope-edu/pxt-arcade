# couleur d'arrière-plan

Obtiens la couleur d'arrière-plan de l'écran.

```sig
scene.backgroundColor()
```

La couleur d'arrière-plan est la couleur peinte derrière les autres images affichées à l'écran.

### ~ hint

#### Numéro de couleur

Tu peux choisir parmi 16 couleurs. Ces couleurs sont définies dans la _palette_ de couleurs actuelle.
La palette contient un ensemble de couleurs, chacune ayant un numéro d'index de `0` à `15`. L'index
est aussi appelé **numéro de couleur**. Sauf si la palette est modifiée, elle contient ces couleurs
par défaut :

* `0` : transparent
* `1` : blanc
* `2` : rouge
* `3` : rose
* `4` : orange
* `5` : jaune
* `6` : bleu-vert
* `7` : vert
* `8` : bleu
* `9` : bleu clair
* `10` : violet
* `11` : violet clair
* `12` : violet foncé
* `13` : beige
* `14` : marron
* `15` : noir

### ~

## Valeur renvoyée

* un [nombre](/types/number) qui est la couleur définie comme couleur d'arrière-plan de l'écran.

## Exemple #example

Affiche un carré violet à l'écran. Chaque seconde, alterne la couleur d'arrière-plan entre clair et foncé.

```blocks
let showSquare: Sprite = null
let purpleSquare: Image = null
let toggle = false
toggle = true
purpleSquare = image.create(32, 32)
purpleSquare.fill(11)
showSquare = sprites.create(purpleSquare)
game.onUpdateInterval(1000, function () {
    scene.setBackgroundColor((scene.backgroundColor() + 1) % 2) //toggle between 0 and 1

})
```

## Voir aussi #seealso

[définir la couleur d'arrière-plan](/reference/scene/set-background-color)
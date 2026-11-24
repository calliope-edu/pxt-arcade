# définir la couleur d'arrière-plan

Définit la couleur d'arrière-plan de l'écran.

```sig
scene.setBackgroundColor(0)
```

Tu peux définir la couleur d'arrière-plan de l'écran à tout moment. La couleur d'arrière-plan se trouve toujours derrière les autres images affichées à l'écran.

### ~ hint

#### Numéro de couleur

Tu peux choisir parmi 16 couleurs. Ces couleurs sont définies dans la _palette_ de couleurs actuelle.
La palette contient un ensemble de couleurs, chacune ayant un numéro d'index de `0` à `15`. L'index
est aussi appelé **numéro de couleur**. Si la palette n'est pas modifiée, elle contient ces couleurs
par défaut :

* `0` : transparent
* `1` : blanc
* `2` : rouge
* `3` : rose
* `4` : orange
* `5` : jaune
* `6` : bleu sarcelle
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

## Paramètres

* **color** : le [nombre](/types/number) de la couleur à définir comme couleur d'arrière-plan de l'écran.

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
    if (toggle) {
        scene.setBackgroundColor(1)
    } else {
        scene.setBackgroundColor(0)
    }
    toggle = !(toggle)
})
```

## Voir aussi #seealso

[définir l'image d'arrière-plan](/reference/scene/set-background-image)
# changer l'échelle

Change le facteur d'échelle d'un sprite d'une certaine quantité, en plus ou en moins.

```sig
sprites.create(null).changeScale(1, ScaleAnchor.Middle)
```

Tu peux augmenter ou diminuer la taille d'un sprite d'une certaine quantité à partir de sa taille actuelle. Si l'échelle d'un sprite est `2` et que tu la changes de `1`, le sprite est maintenant `3` fois plus grand que sa taille d'origine. La taille du sprite diminue si tu donnes une valeur négative. Si tu utilises `-2` comme **value**, la nouvelle taille du sprite sera la moitié de ce qu'elle était avant.

L'**anchor** (ancrage) détermine dans quelle direction le sprite s'agrandit ou rétrécit. Si tu augmentes l'échelle à partir de `middle`, le sprite grandit de façon égale à partir de son centre. Si tu choisis `bottom left`, le sprite grandit vers le haut à droite de l'écran.

## Paramètres

* **value** : un [nombre](/types/number) dont changer l'échelle du sprite.
* **anchor** : un point d'ancrage à partir duquel mettre le sprite à l'échelle :
>* `middle`
>* `top`
>* `left`
>* `right`
>* `bottom`
>* `top left`
>* `top right`
>* `bottom right`
>* `bottom left`

## Exemples #example

### Redimensionner le sprite

Crée un sprite avec une image carrée. Dans un événement de mise à jour du jeu, fais grandir et rétrécir le sprite en continu.

```blocks
let scaleFactor = 0
let monSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    if (monSprite.scale == 1) {
        scaleFactor = 1
    } else if (monSprite.scale == 7) {
        scaleFactor = -1
    }
    monSprite.changeScale(scaleFactor, ScaleAnchor.Middle)
})
```

## Voir aussi #seealso

[définir l'échelle](/reference/sprites/sprite/set-scale)

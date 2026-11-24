# lors du dessin

Dessine à l'écran avant les sprites.

```sig
game.onPaint(function () {
	
})
```

## Paramètres

* **a** : le code à exécuter pour dessiner l'écran avant que les sprites ne soient dessinés.

## Exemple #example

Change aléatoirement la couleur d'arrière-plan de l'écran toutes les `2` secondes.

```blocks
let bkColor = 0
bkColor = 0
game.onPaint(function () {
    scene.setBackgroundColor(bkColor)
})
game.onUpdateInterval(2000, function () {
    bkColor = Math.randomRange(0, 15)
})
```

## Voir aussi #seealso

[mise à jour](/reference/game/on-update)
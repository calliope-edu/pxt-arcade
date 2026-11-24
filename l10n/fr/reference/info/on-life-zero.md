# quand les vies atteignent zéro

Exécute du code lorsque le nombre de vies du joueur atteint zéro.

```sig
info.onLifeZero(function () {})
```

Si tu as défini un nombre de vies pour ton jeu, tu peux effectuer une action lorsque ce nombre atteint `0`. Selon les règles de ton jeu, tu voudras peut-être terminer le jeu ou supprimer un sprite joueur.

Si tu définis un nombre de vies (avec [setLife](/reference/info/set-life)) et qu'il descend à `0` sans qu'il y ait de fonction **onLifeZero** dans ton programme, le jeu se termine automatiquement.

## ~ hint

Chaque sprite a sa propre [durée de vie](/reference/sprites/sprite/lifespan). Il est détruit si sa durée de vie a été définie puis atteint `0`. C'est différent du nombre de [vies](/reference/info/life) du jeu. Les vies du jeu sont données et retirées selon tes propres règles de jeu.

## ~

## Paramètres

* **handler** : le code à exécuter lorsque le nombre de vies atteint `0`.

## Exemple #example

### Message de vies à zéro #ex1

Règle le nombre de vies sur `3`. Dans la fonction de mise à jour du jeu, diminue le nombre de vies de `1` chaque seconde. Affiche un message lorsque le nombre de vies atteint `0`.

#### Un joueur

```blocks
info.setLife(3)
game.onUpdateInterval(1000, function() {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.showLongText("Life is zero!", DialogLayout.Bottom)
})
```

#### Multijoueur

```blocks
info.player2.setLife(3)
game.onUpdateInterval(1000, function() {
    info.player2.changeLifeBy(-1)
})
info.player2.onLifeZero(function () {
    game.showLongText("Life is zero!", DialogLayout.Bottom)
})
```

### Plus de vies, fin du jeu #ex2

Règle le nombre de vies du jeu sur `9`. Épuise les vies pour terminer le jeu.

```blocks
info.setLife(9)
game.onUpdateInterval(300, function() {
    info.changeLifeBy(-1)
})
```

## Voir aussi #seealso

[vies](/reference/info/life),
[définir les vies](/reference/info/set-life),
[modifier les vies de](/reference/info/change-life-by)

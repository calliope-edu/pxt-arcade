# a des vies

```sig
info.player2.hasLife()
```

Retourne la valeur ``true`` si le nombre de vies du joueur est supérieur à zéro.

## Retourne

* un [booléen](/types/boolean) qui est ``true`` s'il reste des vies au joueur. Sinon, ``false`` est retourné.

## Exemple #Example

Retire une vie au joueur toutes les `100` millisecondes. Lorsque les vies du joueur atteignent 0, termine le jeu plus tôt.

```blocks
info.player2.setLife(20)
game.onUpdate(function () {
    if (info.player2.hasLife() == false) {
        game.gameOver(false)
    }
}) 

game.onUpdateInterval(100, function () {
    info.player2.changeLifeBy(-1)
})
```

## Voir aussi

[modifier les vies de](/reference/info/change-life-by),
[quand les vies atteignent zéro](/reference/info/on-life-zero)

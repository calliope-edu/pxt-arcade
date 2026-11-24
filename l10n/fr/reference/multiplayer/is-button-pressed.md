# bouton est pressé

Vérifie si un bouton de la manette d'un joueur est pressé ou non.

```sig
mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)
```

## Paramètres

* **player** : le joueur dont tu veux vérifier l'état du bouton de la manette.
* **button** : le bouton de la manette dont tu veux vérifier s'il est pressé.

## Retourne

* une valeur [booléenne](/types/boolean) pour l'état du **button** de **player**. Elle vaut `true` si le bouton est pressé et `false` s'il ne l'est pas.

## Exemple #example

Si `player 2` appuie trop longtemps sur la flèche vers le haut, alors `player 1` gagne.

```blocks
let pressCount = 0
game.onUpdateInterval(500, function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        pressCount += 1
        if (pressCount > 1) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
        }
    } else {
        pressCount = 0
    }
})
```

## Voir aussi #seealso

[lorsque le bouton est pressé](/reference/multiplayer/on-button-pressed),
[déplacer avec les boutons](/reference/multiplayer/move-with-buttons)


```package
multiplayer
```
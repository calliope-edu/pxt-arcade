# est connecté

Vérifie l'état de connexion d'un joueur dans le jeu.

```sig
mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))
```

## Paramètres

* **player** : le joueur dont tu veux vérifier l'état de connexion.

## Retourne

* une valeur [booléenne](/types/boolean) pour l'état de connexion du joueur : `true` pour connecté et `false` pour déconnecté.

## Exemple #example

Si `player 2` n'est plus connecté au jeu, laisse `player 1` gagner par forfait.

```blocks
let pressCount = 0
game.onUpdateInterval(10000, function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
})
```

## Voir aussi #seealso

[obtenir l'état du joueur](/reference/multiplayer/get-player-state)

```package
multiplayer
```
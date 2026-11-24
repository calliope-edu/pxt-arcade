# tous les joueurs

Obtiens tous les joueurs de la liste du jeu multijoueur.

```sig
mp.allPlayers()
```

Si tu veux accéder à la liste de tous les joueurs du jeu, tu peux obtenir la liste complète des joueurs dans un tableau.

## Retourne

* une liste de [Joueurs](/types/player) contenant tous les joueurs du jeu multijoueur.

## Exemple #example

Trouve tous les joueurs qui ont un score supérieur à `20` et donne-leur un bonus de `5` points.

```blocks
for (let player of mp.allPlayers()) {
    if (mp.getPlayerState(player, MultiplayerState.score) > 20) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 5)
    }
}
```

## Voir aussi #seealso

[sélecteur de joueur](/reference/multiplayer/player-selector),
[obtenir le joueur par numéro](/reference/multiplayer/get-player-by-number)

```package
multiplayer
```
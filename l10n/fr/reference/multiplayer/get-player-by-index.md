# obtenir le joueur par index

Obtiens un joueur de la liste du jeu multijoueur à l'aide d'une valeur d'index.

```sig
mp.getPlayerByIndex(0)
```

Tu peux obtenir un objet [Joueur](/types/player) du jeu multijoueur à l'aide d'une valeur d'index qui indique une position dans la liste. Les valeurs d'index commencent à `0` pour la première position et vont jusqu'au nombre maximal de joueurs moins `1` (actuellement `4` joueurs au maximum, donc l'index maximal est `4 - 1` = `3`).

## Paramètres

* **index** : un [nombre](/types/number) qui est l'index du joueur dans la liste multijoueur.

## Retourne

* le [Joueur](/types/player) à la position **index** de la liste multijoueur.

## Exemple #example

Trouve tous les joueurs qui ont un score supérieur à `20` et donne-leur un bonus de `5` points.

```blocks
let player: mp.Player = null
for (let index = 0; index <= 3; index++) {
    player = mp.getPlayerByIndex(index)
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
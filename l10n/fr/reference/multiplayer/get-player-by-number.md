# obtenir le joueur par numéro

Obtiens un joueur du jeu à l'aide d'un numéro de joueur.

```sig
mp.getPlayerByNumber(0)
```

Au lieu d'utiliser un [sélecteur de joueur](/reference/multiplayer/player-selector), un [Joueur](/types/player) est retourné pour un **numéro** de joueur. Les numéros de joueur commencent à `1` et vont jusqu'au nombre maximal de joueurs (actuellement `4`).

## Paramètres

* **number** : un [numéro](/types/number) de joueur.

## Retourne

* le [Joueur](/types/player) qui correspond à **number**.

## Exemple #example

Donne `5` points de vie supplémentaires à `player 4`.

```blocks
mp.changePlayerStateBy(mp.getPlayerByNumber(4), MultiplayerState.life, 5)
```

## Voir aussi #seealso

[sélecteur de joueur](/reference/multiplayer/player-selector),
[obtenir le joueur par index](/reference/multiplayer/get-player-by-index)

```package
multiplayer
```
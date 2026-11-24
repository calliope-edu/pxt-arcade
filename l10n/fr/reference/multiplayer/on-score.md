# lors du score

Exécute du code quand le score d'un joueur atteint une valeur donnée.

```sig
mp.onScore(100, function (player) {})
```

## Paramètres

* **score** : un [nombre](/types/number) qui est la valeur de score déclenchant l'événement.
* **handler** : le code à exécuter quand le score d'un joueur atteint la valeur de **score**.

## Exemple #example

Récompense chaque joueur qui atteint un score de `100` avec `1` point de vie supplémentaire.

```blocks
mp.onScore(100, function (player) {
    mp.changePlayerStateBy(player, MultiplayerState.score, 1)
})
```

## Voir aussi #seealso

[lorsque la vie atteint zéro](/reference/multiplayer/on-life-zero)

```package
multiplayer
```

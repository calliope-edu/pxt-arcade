# lorsque la vie atteint zéro

Exécute du code quand les points de vie d'un joueur atteignent zéro.

```sig
mp.onLifeZero(function (player) {})
```

## Paramètres

* **handler** : le code à exécuter quand les points de vie d'un joueur atteignent la valeur `0`.

## Exemple #example

Fais afficher un message d'urgence au sprite du joueur quand ses points de vie arrivent à zéro.

```blocks
mp.onLifeZero(function (player) {
    mp.getPlayerSprite(player).sayText("Medic, help!!!")
})
```
## Voir aussi #seealso

[lors du score](/reference/multiplayer/on-score)

```package
multiplayer
```

# démarrer le compte à rebours

Démarre le compte à rebours pour la durée de jeu. La partie en cours dure ce temps-là.

```sig
info.startCountdown(0)
```

Le temps de jeu est défini en secondes. Lorsque le temps de jeu est écoulé, une notification de fin de jeu apparaît et la partie en cours se termine.

## Paramètres

* **duration** : le [nombre](/types/number) de secondes de jeu.

## Exemple #example

Règle le temps de jeu sur `30` secondes.

```blocks
info.startCountdown(30)
```

## Voir aussi #seealso

[définir le score](/reference/info/set-score),
[arrêter le compte à rebours](/reference/info/stop-countdown),
[à la fin du compte à rebours](/reference/info/on-countdown-end)

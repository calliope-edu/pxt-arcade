# démarrer l'effet d'écran

Commence à afficher un effet intégré à l'écran.

```sig
effects.confetti.startScreenEffect()
```

Il existe plusieurs effets intégrés que tu peux afficher à l'écran. Ceci démarre l'effet que tu choisis. Dans l'éditeur de blocs, tu peux sélectionner un effet dans une liste du bloc.

## Exemple #example

Démarre l'effet ``blizzard`` à l'écran. Attends 5 secondes, puis arrête l'effet.

```blocks
effects.blizzard.startScreenEffect()
pause(5000)
effects.blizzard.endScreenEffect()
```

## Voir aussi #seealso

[arrêter l'effet d'écran](/reference/scene/end-screen-effect)
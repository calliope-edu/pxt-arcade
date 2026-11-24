# arrêter l'effet d'écran

Arrête l'affichage d'un effet intégré à l'écran.

```sig
effects.confetti.startScreenEffect()
```

Il existe plusieurs effets intégrés que tu peux afficher à l'écran. Ceci arrête l'effet que tu choisis s'il est en cours d'affichage. Dans l'éditeur de blocs, tu peux sélectionner un effet dans une liste du bloc. 

## Exemple #example

Démarre les effets ``blizzard`` et ``confetti`` à l'écran. Attends 5 secondes, puis arrête seulement l'effet ``confetti``.

```blocks
effects.blizzard.startScreenEffect()
effects.confetti.startScreenEffect()
pause(5000)
effects.confetti.endScreenEffect()
```

## Voir aussi #seealso

[démarrer l'effet d'écran](/reference/scene/start-screen-effect)
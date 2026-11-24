# démarrer l'effet

Démarre un effet intégré sur un sprite.

```sig
sprites.create(null).startEffect(effects.spray, 500)
```

Il existe plusieurs effets de mouvement de particules intégrés que tu peux appliquer à un sprite. Dans l'éditeur de blocs, l'effet est choisi dans la liste affichée sur le bloc. En JavaScript, choisis l'un des effets contenus dans l'espace de noms ``effects``. L'effet s'exécute en continu, sauf si tu donnes une valeur pour ``duration``. Tu peux arrêter l'effet avec la fonction [clearParticles](/reference/sprites/sprite/clear-particles).

## Paramètres

* **effect** : l'effet à démarrer sur le sprite.
* **duration** : un [nombre](/types/number) facultatif qui indique la durée d'exécution de l'effet, en millisecondes. Si tu ne donnes pas de valeur pour la durée, l'effet continue de s'exécuter.

## Exemple #example

Démarre un effet de pulvérisation ``cool radial`` de 5 secondes sur le sprite blob.

```blocks
let blobject: Sprite = null
blobject = sprites.create(img`
    . a a a a .
    . a a a a .
    a a a a a a
    a a a a a a
    . a a a a .
    . a a a a .
`, 0)
blobject.startEffect(effects.coolRadial, 5000)
```

## Voir aussi #seealso

[effacer les particules](/reference/sprites/sprite/clear-particles)

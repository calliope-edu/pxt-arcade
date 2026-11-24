# définir la tile map

Dispose des tuiles d'image selon un motif dans la scène.

```sig
scene.setTilemap(null)
```

La scène de ton jeu contient une [tile map](/reference/scene/tile-map). Une tile map est une disposition (un motif) de tuiles d'image qui remplissent une partie de la scène. Au départ, la scène a une tile map vide et aucun motif de tuiles n'est affiché. Pour construire ta scène, tu dois utiliser l'éditeur de tile map pour créer des tuiles et les placer dans la scène.

La tile map utilise une image pour disposer les tuiles de la scène. Les nombres de l'image sont des identifiants (un index) des tuiles d'image ajoutées à la scène. Les index de tuiles sont placés à différents endroits de la carte pour créer ce qui est affiché dans la scène.

## Paramètres

* **tilemap** : une [image](/types/image) dont les pixels contiennent les index des images de tuiles à afficher dans la scène.

## Exemple #example
// TODO example

## Voir aussi #seealso

[tile map](/reference/scene/tile-map)

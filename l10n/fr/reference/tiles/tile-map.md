# Tile Map

La scène de ton jeu contient une tile map. Une tile map est une disposition (un motif) de tuiles d'image qui remplissent tout ou partie de la scène, ainsi qu'une image de murs qui indique où se trouvent les murs de ton jeu. Au départ, la scène a une tile map vide et aucun motif de tuiles n'est affiché. Pour construire ta scène, tu dois utiliser l'éditeur de tile map pour créer des tuiles et les placer dans la scène.

## Tuiles

Une tuile est une image destinée à faire partie d'une tile map. Grâce aux tuiles, la scène peut afficher la même image plusieurs fois à différents endroits. Avec l'éditeur de tilemap, tu peux dessiner des tuiles comme dans l'éditeur de sprites.

### Tailles des tuiles

Les tuiles peuvent avoir n'importe quelle taille, mais toutes les tuiles du jeu doivent avoir la même taille.

### Murs

La scène contient aussi des murs, qu'un sprite ne peut pas traverser. Tu peux dessiner les murs sur ta scène en sélectionnant l'icône de mur dans l'éditeur de tilemap et en dessinant sur le canevas. Le calque des murs peut être affiché ou masqué dans l'éditeur avec l'interrupteur en haut à droite.

## Tile map de la scène

La tile map est un plan qui indique où placer certaines tuiles. La carte a des lignes et des colonnes qui contiennent une image de tuile à chaque emplacement. Tu peux voir la tile map comme une image où, au lieu de pixels, les nombres aux emplacements des pixels sont en fait des index de tuiles.

## Exemple
// TODO fill in example

## Voir aussi #seealso

[définir la tile map](/reference/scene/set-tile-map)
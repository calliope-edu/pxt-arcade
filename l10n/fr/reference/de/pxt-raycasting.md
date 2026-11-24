# pxt-raycasting

(Discussion sur le forum MakeCode Arcade :
[Raycasting 3D render with directional animation sprites](https://forum.makecode.com/t/raycasting-3d-render-blocks-edition/12921/) )

## En bref :
Une extension pour MakeCode Arcade qui affiche une tilemap dans une vue 2,5D. C'est une perspective 3D peu gourmande en calcul, avec des animations directionnelles pour les sprites,
basée sur la [carte 3D](https://forum.makecode.com/t/3d-raycasting-in-arcade/474) de mmoskal

## Démarrage rapide
* En gros, cette extension dessine un jeu de tilemap tout à fait normal dans une « vue 3D »
* setTilemap(), puis déplace-toi avec les touches fléchées
* Programme ton jeu comme d'habitude
    * Sprites : utilise de préférence sprite.setScale(0.5) pour chacun et définis les animations directionnelles avec le bloc d'animation fourni.
    * fonctionne avec la plupart des blocs et extensions Arcade : sprite, projectile, chevauchement, ...
    * sauf avec les blocs qui dessinent directement à l'écran, les effets de sprite, ...
* Tu contrôles la position de vue et la taille de collision avec le sprite « moi » fourni, et la direction de vue avec le bloc « setViewAngle »
* Avec le bloc « setViewMode to tilemap(2D)/raycasting(3D) », tu changes de vue
* Tu peux zoomer et dézoomer en modifiant fov

## Fonctionnalités :
* Avec le bloc « set mode » fourni, tu passes de la vue tilemap (2D normale) à la vue raycasting (3D, par défaut)
    * Dans la vue tilemap, tout est dessiné avec les fonctions Arcade normales, donc tout devrait fonctionner comme d'habitude
* Fonctionne avec la plupart des blocs Arcade existants :
    * Tilemap : éditeur de tilemap, tous les blocs : placer un sprite sur une tuile donnée/aléatoire, ...
    * Sprite : contrôle les sprites comme dans d'autres projets de tilemap, avec presque tous les blocs :
        * définir l'image, la position, la vitesse, l'accélération, l'échelle, le type, suivre, détruire, ...
        * Remarque : un sprite de la taille d'une tuile et un mur ne vont pas bien ensemble dans la vue 3D. Réduis donc les sprites avec setScale() à 0.5 ou moins, ou utilise de petites images.
        * sauf z (différent dans le monde 3D)
        * sauf les fonctions qui dessinent directement à l'écran (effets, dire)
    * Projectile : tout, sauf la création depuis le bord (le bord est différent en 3D et en 2D)
    * Physique Arcade : mur, rebond, événements de chevauchement, ... (voir les problèmes connus)
* Sprite « moi » prédéfini pour les événements physiques dans ton code, type = Player, la caméra le suit par défaut. Tu l'utilises comme un sprite normal, mais tu ne le vois pas dans la vue 3D.
* Un bloc pour définir des animations directionnelles de sprites avec l'éditeur d'animation Arcade normal. Pour l'instant 4 directions au maximum, mais il pourrait y en avoir autant que tu veux. Fais-le savoir si tu en as besoin de plus.
* Un bloc d'événement qui exécute du code quand la direction entre « moi » et un sprite change. Fonctionne avec les blocs d'animation normaux et l'extension Character Animations de richard.
* FOV (champ de vision) : zoome et dézoome en modifiant la valeur de « fov »
* Minicarte : supprimée, car il y a déjà une tilemap en taille réelle et en temps réel. Fais-le savoir si tu en as besoin.
* Le offsetZ des sprites (effet de flottement) n'agit que sur le dessin dans la vue 3D. Des collisions peuvent donc se produire même si les sprites sont éloignés sur l'axe Z dans la vue 3D.
* Sauter/se déplacer avec hauteur et durée pour les sprites ; la vitesse et l'accélération sont calculées automatiquement.
* Le Sprite.sayText() normal est pris en charge et mis à l'échelle avec les sprites
* Autres limites : splash/showLongText fonctionnent, mais la partie transparente est vide là où la vue 3D devrait apparaître.

## Problèmes connus :
* Vitesse : beaucoup de code a été ajouté pour que les blocs existants fonctionnent. C'est donc nettement plus lent ; cela devra être amélioré plus tard.
* La physique Arcade fonctionne bien quand l'image du sprite est carrée. Sinon, par exemple pour un grand arbre, la collision sur l'axe y se produit avant que le mur soit touché.
    * Raison : la physique fonctionne en 2D et prend l'image du sprite comme taille (directions x et y). Mais le rendu 3D prend la largeur de l'image comme taille pour x et y, et la hauteur comme taille sur l'axe Z. On pourrait corriger cela plus tard si besoin en remplaçant la physique.

Source : [aqeeaqee/pxt-raycasting](https://github.com/aqeeaqee/pxt-raycasting/tree/v0.3.18) (v0.3.18)

```package
pxt-raycasting
```

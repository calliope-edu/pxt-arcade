# pxt-raycasting

(Discussion sur le forum MakeCode Arcade : 
[Rendu 3D par raycasting avec des sprites à animations directionnelles](https://forum.makecode.com/t/raycasting-3d-render-blocks-edition/12921/) )

## En bref :
Une extension pour MakeCode Arcade qui affiche une tilemap en vue 2,5D, une sorte de vue en perspective 3D moins gourmande en calculs, avec des animations directionnelles des sprites, 
basée sur la [carte 3D](https://forum.makecode.com/t/3d-raycasting-in-arcade/474) de mmoskal

## Démarrage rapide
* En gros, ce rendu dessine simplement un jeu à tilemap classique en « vue 3D »
* setTilemap(), déplace-toi avec les touches fléchées
* Crée ton jeu comme d'habitude
    * sprites : il est conseillé d'utiliser sprite.setScale(0.5) pour chacun, et de définir les animations directionnelles avec le bloc d'animation fourni.
    * fonctionne avec la plupart des blocs et extensions Arcade : sprite, projectile, chevauchement,...
    * sauf ceux qui dessinent directement à l'écran, les effets de sprite ...
* Contrôle la position de la vue et la taille de collision avec le « sprite myself » fourni, et la direction de la vue avec le bloc « setViewAngle »
* Change de mode de vue avec le bloc « setViewMode to tilemap(2D)/raycasting(3D) »
* Zoome/dézoome en réglant fov

## Fonctionnalités :
* Bascule entre le mode de vue Tilemap (2D d'origine) et Raycasting (3D par défaut) avec le bloc « set mode » fourni
    * Le mode Tilemap affiche essentiellement tout via les fonctions d'origine d'Arcade, donc tout devrait fonctionner comme d'habitude
* Fonctionne avec la plupart des blocs Arcade existants :
    * Tilemap : l'éditeur de tilemap, tous les blocs : placer un sprite sur une tuile précise/aléatoire, ...
    * Sprite : manipule les sprites comme dans les autres projets à tilemap, avec presque tous les blocs :
        * définir l'image, la position, la vitesse, l'accélération, l'échelle, le type, suivre, détruire, ... 
        * remarque : un sprite de la taille d'une tuile et un mur sont disproportionnés en vue 3D, il est donc conseillé de le réduire à 0.5 ou moins avec setScale(), ou d'utiliser de petites images pour les sprites.
        * sauf z (différent du monde 3D)
        * sauf les fonctions qui dessinent directement à l'écran (effets, say)
    * Projectile : tout, sauf la création depuis le côté (le côté en 3D est différent de la 2D)
    * Moteur physique d'Arcade : murs, rebonds, événements de chevauchement, ... (voir les problèmes connus)
* Sprite « myself » prédéfini, pour les événements physiques dans ton code, type=player, suivi par la caméra par défaut. Utilise-le comme un sprite ordinaire, sauf que tu ne peux pas le voir en vue 3D.
* Fournit un bloc pour définir les animations directionnelles d'un sprite, avec l'éditeur d'animation intégré d'Arcade. 4 directions maximum pour l'instant, mais le nombre peut être quelconque, fais-moi savoir si tu en as besoin de plus.
* Fournit un bloc gestionnaire d'événement qui exécute du code lorsque la direction entre myself et un sprite change ; il peut fonctionner avec les blocs Animation intégrés et l'extension Character Animation de richard.
* FOV (champ de vision), zoom avant/arrière, en modifiant la valeur de la propriété « fov »
* Minicarte supprimée, car nous avons déjà une tilemap en taille réelle et en temps réel. Fais-moi savoir si tu en as besoin.
* Le offsetZ des sprites, pour un effet de flottement, ne fonctionne que dans le rendu en vue 3D ; des collisions peuvent donc se produire même si les sprites sont éloignés sur l'axe Z en vue 3D
* Fournit des fonctions de saut/déplacement avec des paramètres de hauteur et de durée pour les sprites, qui calculent automatiquement les valeurs de vitesse et d'accélération.
* Prend en charge la fonction d'origine Sprite.sayText(), mise à l'échelle avec les sprites
* Autres incompatibilités : splash/showLongText fonctionnent, mais la partie transparente est vide, alors qu'elle devrait afficher la vue 3D.

## Problèmes connus :
* Performances : pour rester compatible avec les blocs existants, beaucoup de code a été ajouté, et les performances baissent nettement ; une optimisation sera nécessaire plus tard.
* Le moteur physique d'Arcade fonctionne bien si l'image du sprite est carrée. Sinon, par exemple pour un grand arbre, la collision se produit avant de toucher le mur sur l'axe y. 
    * Raison : le moteur physique fonctionne en mode 2D et considère l'image du sprite comme sa taille (directions x et y). Mais le rendu 3D considère la largeur de l'image comme taille sur les axes x et y, et la hauteur comme taille du sprite sur l'axe Z. Cela pourrait être corrigé à l'avenir en remplaçant le moteur physique, si nécessaire.

Source : [aqeeaqee/pxt-raycasting](https://github.com/aqeeaqee/pxt-raycasting/tree/v0.3.18) (v0.3.18)

```package
pxt-raycasting
```


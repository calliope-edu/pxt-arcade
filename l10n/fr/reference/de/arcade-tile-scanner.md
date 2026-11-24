# arcade-tile-scanner

Avec cette extension, tu peux chercher automatiquement dans une tilemap les tuiles qui respectent certaines règles. Tu peux définir les règles toi-même. Par exemple, tu peux trouver toutes les tuiles d'herbe à côté d'une tuile de mur, ou découvrir combien de tuiles il y a entre une position et le mur le plus proche, ou

Tous les blocs de cette extension ont des pages d'aide que tu peux lire dans l'éditeur MakeCode. Fais simplement un clic droit sur le bloc et choisis « Aide » pour trouver la référence !

## Méthodes de recherche

Cette extension propose plusieurs méthodes de recherche.

### Rechercher à partir d'une position dans une direction

Ce bloc commence à la position indiquée et avance tuile par tuile dans la direction indiquée, jusqu'à atteindre le bord de la carte ou jusqu'à ce que la règle indiquée ne soit plus respectée.

C'est idéal pour des choses comme des pièges à détecteur de mouvement qui doivent se déclencher quand le joueur passe devant.

Par exemple, ce projet utilise le bloc pour des stalactites qui tombent quand le joueur passe en dessous :

https://makecode.com/_YqjAyPLpH2LW

Ce projet utilise le bloc pour des pièges à flèches avec détecteur de mouvement :

https://makecode.com/_39XKoUaFxDWu

### Parcours en largeur à partir d'une position

Ce bloc effectue un [parcours en largeur](https://en.wikipedia.org/wiki/Breadth-first_search) à partir de la position indiquée et trouve toutes les tuiles qui ont la même image que la tuile de départ ou qui correspondent à une règle indiquée. Il sélectionne donc toutes les tuiles d'une zone connexe qui correspondent à la règle.

Tu peux ainsi sélectionner des zones de ta tilemap. Dans ce projet, par exemple, le parcours en largeur sélectionne toutes les tuiles d'un lac de lave pour qu'elles puissent être refroidies avec un projectile de glace :

https://makecode.com/_fMdXmoiHbbMA

### toutes les positions qui correspondent à une règle

Ce bloc trouve toutes les positions d'une tilemap qui correspondent à la règle indiquée.

Dans ce projet, nous l'utilisons pour trouver toutes les tuiles d'eau voisines d'une tuile de glace, et faire ainsi grandir la glace de tuile en tuile :

https://makecode.com/_LVhHi9Uzf0hw

### Rechercher des lignes qui correspondent à une règle

Ce bloc recherche des lignes horizontales ou verticales qui correspondent à la règle indiquée. Contrairement aux blocs de recherche ci-dessus, ce bloc renvoie un tableau double de positions au lieu d'un tableau simple. Chaque tableau intérieur est une ligne trouvée, et les lignes sont triées de la plus longue à la plus courte.

Ce bloc est particulièrement adapté aux jeux de puzzle avec des blocs qui tombent ! Regarde la fonction « clear matches » dans ce projet comme exemple :

https://makecode.com/_eYgUxDd5bgpk

### Rechercher des groupes qui correspondent à une règle

Ce bloc trouve tous les groupes connexes de positions qui correspondent à la règle indiquée. Imagine qu'il fait un parcours en largeur pour chaque tuile de la tilemap et renvoie tous les groupes trouvés en une seule fois. Comme le bloc « rechercher des lignes », il renvoie un tableau double, trié du plus grand au plus petit groupe.

Ce bloc est lui aussi pratique pour les jeux de puzzle avec des blocs qui tombent ! Utilise-le pour supprimer tous les groupes ayant un certain nombre de tuiles :

https://makecode.com/_hF66Yz365b4m

Source : [riknoll/arcade-tile-scanner](https://github.com/riknoll/arcade-tile-scanner/tree/v0.0.1) (v0.0.1)

```package
arcade-tile-scanner
```

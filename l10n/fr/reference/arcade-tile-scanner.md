# arcade-tile-scanner

Le but de cette extension est de rechercher et trouver automatiquement les tuiles d'une tilemap qui correspondent à un ensemble de règles que tu peux personnaliser. Par exemple, tu pourrais l'utiliser pour trouver toutes les tuiles d'herbe de la carte qui sont à côté d'une tuile de mur, ou combien de tuiles séparent un emplacement donné du mur le plus proche, ou

Tous les blocs de cette extension ont des pages d'aide que tu peux lire dans l'éditeur MakeCode. Fais simplement un clic droit sur le bloc et choisis « Aide » pour trouver la documentation de référence !

## Méthodes de recherche

Cette extension prend en charge plusieurs méthodes de recherche différentes.

### Scan from location in direction (recherche depuis un emplacement dans une direction)

Ce bloc part de l'emplacement donné et avance d'une tuile à la fois dans la direction indiquée jusqu'à atteindre le bord de la carte ou jusqu'à ce que la règle donnée ne soit plus vraie.

C'est très utile pour des choses comme des pièges activés par le mouvement, quand tu veux créer un déclencheur pour le moment où le joueur passe devant.

Par exemple, ce projet utilise ce bloc pour créer des stalactites qui tombent quand le joueur passe en dessous :

https://makecode.com/_YqjAyPLpH2LW

Ce projet utilise le bloc pour créer des pièges à flèches activés par le mouvement :

https://makecode.com/_39XKoUaFxDWu

### BFS from location (parcours en largeur depuis un emplacement)

Ce bloc effectue un [parcours en largeur](https://en.wikipedia.org/wiki/Breadth-first_search) depuis l'emplacement donné et trouve toutes les tuiles qui ont la même image que la tuile de départ ou qui correspondent à une règle donnée. Autrement dit, il sélectionne toutes les tuiles d'une région contiguë qui correspondent à la règle donnée.

Cela peut être utile pour sélectionner des régions de ta tilemap. Par exemple, dans ce projet, le parcours en largeur sert à sélectionner toutes les tuiles d'une mare de lave pour pouvoir les refroidir avec un projectile de glace :

https://makecode.com/_fMdXmoiHbbMA

### get all locations that match rule (obtenir tous les emplacements qui correspondent à la règle)

Ce bloc récupère tous les emplacements d'une TileMap qui correspondent à la règle indiquée.

Dans ce projet, nous utilisons ce bloc pour trouver toutes les tuiles d'eau qui bordent une tuile de glace, et nous nous en servons pour faire s'étendre la glace de tuile en tuile :

https://makecode.com/_LVhHi9Uzf0hw

### scan for lines that match rule (rechercher les lignes qui correspondent à la règle)

Ce bloc recherche des lignes horizontales ou verticales qui correspondent à la règle donnée. Contrairement aux méthodes précédentes, ce bloc renvoie un tableau double d'emplacements au lieu d'un tableau simple. Chaque tableau intérieur représente une ligne trouvée, et les lignes sont triées de la plus longue à la plus courte.

Ce bloc est particulièrement adapté aux jeux de puzzle à blocs qui tombent ! Regarde la fonction clear matches de ce projet pour voir un exemple d'utilisation :

https://makecode.com/_eYgUxDd5bgpk

### scan for groups that match rule (rechercher les groupes qui correspondent à la règle)

Ce bloc trouve tous les groupes contigus d'emplacements qui correspondent à la règle donnée. Tu peux voir cela comme un parcours en largeur (BFS) séparé effectué sur chaque tuile de la TileMap, qui renvoie tous les groupes trouvés en une seule fois. Comme le bloc "scan for lines", ce bloc renvoie un tableau double trié du plus grand groupe au plus petit.

Voici un autre bloc utile pour les jeux de puzzle à blocs qui tombent ! Utilise-le pour effacer tous les groupes d'un certain nombre de tuiles :

https://makecode.com/_hF66Yz365b4m

Source: [riknoll/arcade-tile-scanner](https://github.com/riknoll/arcade-tile-scanner/tree/v0.0.1) (v0.0.1)

```package
arcade-tile-scanner
```

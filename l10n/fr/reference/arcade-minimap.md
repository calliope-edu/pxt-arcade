# Mini-cartes

### Utilisation de base
Voici la façon la plus simple d'utiliser la mini-carte :
![arcade-screenshot (3)](/static/libs/arcade-minimap/image1.png)
![](/static/libs/arcade-minimap/image2.png)

### Inclure des sprites
Pour inclure des sprites sur la mini-carte, utilise le bloc "draw (monSprite) on (myMinimap)" :
![arcade-screenshot (4)](/static/libs/arcade-minimap/image3.png)
![](/static/libs/arcade-minimap/image4.png)

### Mettre à jour la mini-carte
Pour mettre à jour la mini-carte en continu selon les mouvements des sprites et les changements de la tilemap, utilise « à la mise à jour du jeu » :
![arcade-screenshot (5)](/static/libs/arcade-minimap/image5.png)
![download](/static/libs/arcade-minimap/image6.gif)

### Exemples de projets
Consulte les forums : https://forum.makecode.com/t/minimap-extension-beta/1709

### Remarques sur les performances
Si tu mets à jour la mini-carte avec un bloc « à la mise à jour du jeu » ou « toujours », sache que cela peut beaucoup ralentir ton jeu si :
 - beaucoup de sprites sont dessinés sur la mini-carte
 - la tilemap est très grande
 - les mises à jour ont lieu plus souvent que toutes les 500 ms

Si tu remarques que ton jeu ralentit, essaie de mettre à jour la mini-carte moins souvent.

Source: [microsoft/arcade-minimap](https://github.com/microsoft/arcade-minimap/tree/v0.6.1) (v0.6.1)

```package
arcade-minimap
```

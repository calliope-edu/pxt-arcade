# Mini-cartes

### Bases
Voici comment utiliser la mini-carte très simplement :
![Capture d'écran Arcade (3)](/static/libs/arcade-minimap/image1.png)
![](/static/libs/arcade-minimap/image2.png)

### Afficher des sprites
Pour afficher des sprites sur la mini-carte, utilise le bloc « dessiner (monSprite) sur (myMinimap) » :
![Capture d'écran Arcade (4)](/static/libs/arcade-minimap/image3.png)
![](/static/libs/arcade-minimap/image4.png)

### Mettre à jour la mini-carte
Pour que la mini-carte s'adapte en permanence aux mouvements des sprites et aux changements de la tilemap, utilise « à la mise à jour du jeu » :
![Capture d'écran Arcade (5)](/static/libs/arcade-minimap/image5.png)
![Téléchargement](/static/libs/arcade-minimap/image6.gif)

### Projets d'exemple
Regarde sur le forum : https://forum.makecode.com/t/minimap-extension-beta/1709

### Remarques sur la vitesse
Si tu mets à jour la mini-carte avec « à la mise à jour du jeu » ou « toujours », ton jeu peut devenir beaucoup plus lent si :
 - beaucoup de sprites sont dessinés sur la mini-carte
 - la tilemap est très grande
 - la mise à jour a lieu plus souvent que toutes les 500 ms

Si ton jeu est lent, mets à jour la mini-carte moins souvent.

Source : [microsoft/arcade-minimap](https://github.com/microsoft/arcade-minimap/tree/v0.6.1) (v0.6.1)

```package
arcade-minimap
```

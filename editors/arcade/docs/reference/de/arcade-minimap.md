# Minikarten

### Grundlagen
So verwendest du die Minikarte ganz einfach:
![Arcade-Screenshot (3)](/static/libs/arcade-minimap/image1.png)
![](/static/libs/arcade-minimap/image2.png)

### Sprites anzeigen
Um Sprites auf der Minikarte anzuzeigen, verwende den Block „zeichne (mySprite) auf (myMinimap)“:
![Arcade-Screenshot (4)](/static/libs/arcade-minimap/image3.png)
![](/static/libs/arcade-minimap/image4.png)

### Minikarte aktualisieren
Damit sich die Minikarte ständig an Sprite-Bewegungen und Änderungen der Tilemap anpasst, verwende „bei Spielaktualisierung“:
![Arcade-Screenshot (5)](/static/libs/arcade-minimap/image5.png)
![Download](/static/libs/arcade-minimap/image6.gif)

### Beispielprojekte
Schau im Forum nach: https://forum.makecode.com/t/minimap-extension-beta/1709

### Hinweise zur Geschwindigkeit
Wenn du die Minikarte mit „bei Spielaktualisierung“ oder „dauerhaft“ aktualisierst, kann dein Spiel stark langsamer werden, wenn:
 - viele Sprites auf die Minikarte gezeichnet werden
 - die Tilemap sehr groß ist
 - öfter als alle 500 ms aktualisiert wird

Wenn dein Spiel langsam läuft, aktualisiere die Minikarte seltener.

Quelle: [microsoft/arcade-minimap](https://github.com/microsoft/arcade-minimap/tree/v0.6.1) (v0.6.1)

```package
arcade-minimap
```

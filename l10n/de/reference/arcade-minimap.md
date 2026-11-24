# Minikarten

### Grundlegende Verwendung
So verwendest du die Minikarte ganz einfach:
![arcade-screenshot (3)](/static/libs/arcade-minimap/image1.png)
![](/static/libs/arcade-minimap/image2.png)

### Sprites einbeziehen
Um Sprites auf der Minikarte anzuzeigen, verwende den Block "draw (meinSprite) on (myMinimap)":
![arcade-screenshot (4)](/static/libs/arcade-minimap/image3.png)
![](/static/libs/arcade-minimap/image4.png)

### Die Minikarte aktualisieren
Um die Minikarte ständig anhand von Sprite-Bewegungen und Änderungen an der Kachelkarte zu aktualisieren, verwende "bei Aktualisierung des Spiels":
![arcade-screenshot (5)](/static/libs/arcade-minimap/image5.png)
![download](/static/libs/arcade-minimap/image6.gif)

### Beispielprojekte
Sieh im Forum nach: https://forum.makecode.com/t/minimap-extension-beta/1709

### Hinweise zur Leistung
Wenn du die Minikarte mit einem Block "bei Aktualisierung des Spiels" oder "dauerhaft" aktualisierst, kann das dein Spiel stark verlangsamen, wenn:
 - viele Sprites auf die Minikarte gezeichnet werden
 - die Kachelkarte sehr groß ist
 - die Aktualisierungen häufiger als alle 500 ms stattfinden

Wenn dein Spiel langsam läuft, aktualisiere die Minikarte seltener.

Quelle: [microsoft/arcade-minimap](https://github.com/microsoft/arcade-minimap/tree/v0.6.1) (v0.6.1)

```package
arcade-minimap
```

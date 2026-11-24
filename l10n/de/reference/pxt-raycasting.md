# pxt-raycasting

(Diskussion im MakeCode-Arcade-Forum unter: 
[Raycasting 3D render with directional animation sprites](https://forum.makecode.com/t/raycasting-3d-render-blocks-edition/12921/) )

## Kurzbeschreibung:
Eine Erweiterung für MakeCode Arcade, die eine Kachelkarte (Tilemap) in einer 2,5D-Ansicht darstellt – eine 3D-Perspektive, die weniger Rechenaufwand braucht – mit richtungsabhängigen Animationen von Sprites, 
basierend auf mmoskals [3D-Karte](https://forum.makecode.com/t/3d-raycasting-in-arcade/474)

## Schnellstart
* Im Grunde zeichnet dieser Renderer einfach ein klassisches Tilemap-Spiel in einer „3D-Ansicht“
* setTilemap() aufrufen und mit den Pfeiltasten herumlaufen
* Programmiere dein Spiel wie gewohnt
    * Sprites: Für jeden wird sprite.setScale(0.5) empfohlen; richtungsabhängige Animationen setzt du mit dem mitgelieferten Animationsblock.
    * Funktioniert mit den meisten Arcade-Blöcken und -Erweiterungen zusammen: Sprite, Projektil, Überlappung, ...
    * außer solchen, die direkt auf den Bildschirm zeichnen, Sprite-Effekte ...
* Steuere Blickposition und Kollisionsgröße über den mitgelieferten „myself“-Sprite und die Blickrichtung mit dem Block „setViewAngle“
* Wechsle den Ansichtsmodus mit dem Block „setViewMode to tilemap(2D)/raycasting(3D)“
* Hinein-/Herauszoomen durch Setzen von fov

## Funktionen:
* Wechsel zwischen Tilemap- (originales 2D) und Raycasting-Ansicht (standardmäßig 3D) mit dem mitgelieferten Block „set mode“
    * Im Tilemap-Modus wird im Grunde alles über die originalen Arcade-Funktionen gezeichnet, daher sollte alles wie gewohnt funktionieren
* Funktioniert mit den meisten vorhandenen Arcade-Blöcken zusammen:
    * Tilemap: Tilemap-Designer, alle Blöcke: Sprite auf eine bestimmte/zufällige Kachel setzen, ...
    * Sprite: Bearbeite Sprites genauso wie in anderen Tilemap-Projekten, mit fast allen Blöcken:
        * Bild, Position, Geschwindigkeit, Beschleunigung, Skalierung, Art, Folgen, Zerstören setzen, ... 
        * Hinweis: Ein Sprite in Kachelgröße und eine Wand stehen in der 3D-Ansicht in keinem guten Verhältnis, daher wird empfohlen, ihn mit setScale() auf 0,5 oder kleiner zu verkleinern oder kleine Bilder für Sprites zu verwenden.
        * außer z (anders als in der 3D-Welt)
        * außer Funktionen, die direkt auf den Bildschirm zeichnen (Effekte, sagen)
    * Projektil: alles, außer Erzeugen von der Seite (die Seite ist in 3D anders als in 2D)
    * Arcade-Physik-Engine: Wand, Abprallen, Überlappungsereignisse, ... (siehe bekannte Probleme)
* Vordefinierter „myself“-Sprite für physikalische Ereignisse in deinem Code, Art=Player, standardmäßig folgt ihm die Kamera. Bediene ihn wie einen gewöhnlichen Sprite, nur dass du ihn in der 3D-Ansicht nicht sehen kannst.
* Stellt einen Block bereit, um richtungsabhängige Animationen eines Sprites mit dem eingebauten Arcade-Animationseditor festzulegen. Derzeit maximal 4 Richtungen, es könnten aber beliebig viele sein – sag Bescheid, wenn du mehr brauchst.
* Stellt einen Ereignis-Block bereit, der Code ausführt, wenn sich die Richtung zwischen „myself“ und einem Sprite ändert; funktioniert mit den eingebauten Animationsblöcken und Richards Erweiterung „Character Animation“ zusammen.
* FOV (Sichtfeld): Hinein-/Herauszoomen durch Ändern der Eigenschaft „fov“
* Minikarte entfernt, weil es schon eine Tilemap in Originalgröße und Echtzeit gibt. Sag Bescheid, wenn du sie brauchst.
* offsetZ für Sprites erzeugt einen Schwebeeffekt, wirkt aber nur beim Zeichnen in der 3D-Ansicht; Kollisionen können also auch passieren, wenn Sprites in der 3D-Ansicht auf der Z-Achse weit voneinander entfernt sind
* Stellt Springen/Bewegen mit Höhe- und Dauer-Parametern für Sprites bereit; Geschwindigkeit und Beschleunigung werden automatisch berechnet.
* Unterstützt das originale Sprite.sayText(), zusammen mit den Sprites skaliert
* Weitere Inkompatibilitäten: splash/showLongText funktionieren, aber der transparente Teil ist leer, obwohl dort die 3D-Ansicht gezeichnet werden sollte.

## Bekannte Probleme:
* Leistung: Um mit vorhandenen Blöcken kompatibel zu sein, wurde viel Code hinzugefügt; die Leistung sinkt deutlich und muss später noch optimiert werden.
* Die Arcade-Physik-Engine funktioniert gut, wenn das Sprite-Bild quadratisch ist. Ist es das nicht, z. B. bei einem hohen Baum, tritt die Kollision auf der y-Achse auf, bevor die Wand erreicht wird. 
    * Grund: Die Physik-Engine arbeitet im 2D-Modus und betrachtet das Sprite-Bild als seine Größe (in x- und y-Richtung). Der 3D-Renderer verwendet dagegen die Bildbreite als Größe für die x- und y-Achse und die Höhe als Größe des Sprites auf der Z-Achse. Das könnte bei Bedarf künftig durch Überschreiben der Physik-Engine behoben werden.

Quelle: [aqeeaqee/pxt-raycasting](https://github.com/aqeeaqee/pxt-raycasting/tree/v0.3.18) (v0.3.18)

```package
pxt-raycasting
```

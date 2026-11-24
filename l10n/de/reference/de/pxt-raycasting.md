# pxt-raycasting

(Diskussion im MakeCode-Arcade-Forum:
[Raycasting 3D render with directional animation sprites](https://forum.makecode.com/t/raycasting-3d-render-blocks-edition/12921/) )

## Kurz gesagt:
Eine Erweiterung für MakeCode Arcade, die eine Tilemap in einer 2,5D-Ansicht darstellt. Das ist eine 3D-Perspektive, die wenig Rechenleistung braucht, mit Richtungs-Animationen für Sprites,
aufbauend auf der [3D-Karte](https://forum.makecode.com/t/3d-raycasting-in-arcade/474) von mmoskal

## Schnellstart
* Im Grunde zeichnet diese Erweiterung ein ganz normales Tilemap-Spiel in einer „3D-Ansicht“
* setTilemap(), dann mit den Pfeiltasten herumlaufen
* Programmiere dein Spiel wie gewohnt
    * Sprites: am besten für jedes sprite.setScale(0.5) verwenden und Richtungs-Animationen mit dem mitgelieferten Animationsblock setzen.
    * funktioniert mit den meisten Arcade-Blöcken und -Erweiterungen: Sprite, Projektil, Überschneidung, ...
    * außer mit Blöcken, die direkt auf den Bildschirm zeichnen, Sprite-Effekten, ...
* Blickposition und Kollisionsgröße steuerst du mit dem mitgelieferten „Ich-Sprite“, die Blickrichtung mit dem Block „setViewAngle“
* Mit dem Block „setViewMode to tilemap(2D)/raycasting(3D)“ wechselst du die Ansicht
* Hinein- und herauszoomen kannst du, indem du fov änderst

## Funktionen:
* Mit dem mitgelieferten Block „set mode“ wechselst du zwischen Tilemap-Ansicht (normales 2D) und Raycasting-Ansicht (3D, Standard)
    * In der Tilemap-Ansicht wird alles mit den normalen Arcade-Funktionen gezeichnet, also sollte alles wie gewohnt funktionieren
* Funktioniert mit den meisten vorhandenen Arcade-Blöcken:
    * Tilemap: Tilemap-Editor, alle Blöcke: Sprite auf eine bestimmte/zufällige Kachel setzen, ...
    * Sprite: Sprites wie in anderen Tilemap-Projekten steuern, mit fast allen Blöcken:
        * Bild, Position, Geschwindigkeit, Beschleunigung, Skalierung, Art, folgen, zerstören setzen, ...
        * Hinweis: Ein Sprite in Kachelgröße und eine Wand passen in der 3D-Ansicht nicht gut zusammen. Verkleinere Sprites deshalb mit setScale() auf 0.5 oder weniger, oder verwende kleine Bilder.
        * außer z (anders als in der 3D-Welt)
        * außer Funktionen, die direkt auf den Bildschirm zeichnen (Effekte, sagen)
    * Projektil: alles, außer Erstellen vom Rand aus (der Rand ist in 3D anders als in 2D)
    * Arcade-Physik: Wand, Abprallen, Überschneidungs-Ereignisse, ... (siehe bekannte Probleme)
* Vordefiniertes „Ich“-Sprite für Physik-Ereignisse in deinem Code, Art = Player, standardmäßig folgt ihm die Kamera. Du verwendest es wie ein normales Sprite, nur siehst du es in der 3D-Ansicht nicht.
* Ein Block, mit dem du Richtungs-Animationen für Sprites mit dem normalen Arcade-Animationseditor setzt. Zurzeit höchstens 4 Richtungen, es könnten aber beliebig viele sein. Sag Bescheid, wenn du mehr brauchst.
* Ein Ereignisblock, der Code ausführt, wenn sich die Richtung zwischen „Ich“ und einem Sprite ändert. Funktioniert mit den normalen Animationsblöcken und der Erweiterung Character Animations von richard.
* FOV (Sichtfeld): hinein- und herauszoomen, indem du den Wert von „fov“ änderst
* Minikarte: entfernt, weil es schon eine Tilemap in echter Größe und Echtzeit gibt. Sag Bescheid, wenn du sie brauchst.
* Der offsetZ für Sprites (Schwebe-Effekt) wirkt nur beim Zeichnen in der 3D-Ansicht. Kollisionen können also auch passieren, wenn Sprites in der 3D-Ansicht auf der Z-Achse weit auseinander sind.
* Springen/Bewegen mit Höhe und Dauer für Sprites; Geschwindigkeit und Beschleunigung werden automatisch berechnet.
* Das normale Sprite.sayText() wird unterstützt und zusammen mit den Sprites skaliert
* Sonst nicht passend: splash/showLongText funktionieren, aber der durchsichtige Teil ist leer, wo eigentlich die 3D-Ansicht sein sollte.

## Bekannte Probleme:
* Geschwindigkeit: Damit die vorhandenen Blöcke funktionieren, wurde viel Code hinzugefügt. Dadurch ist es deutlich langsamer geworden; das muss später noch verbessert werden.
* Die Arcade-Physik funktioniert gut, wenn das Sprite-Bild quadratisch ist. Wenn nicht, zum Beispiel bei einem hohen Baum, passiert die Kollision auf der y-Achse, bevor die Wand berührt wird.
    * Grund: Die Physik arbeitet in 2D und nimmt das Sprite-Bild als Größe (x- und y-Richtung). Die 3D-Darstellung nimmt aber die Bildbreite als Größe für x und y und die Höhe als Größe auf der Z-Achse. Das könnte man später bei Bedarf beheben, indem man die Physik ersetzt.

Quelle: [aqeeaqee/pxt-raycasting](https://github.com/aqeeaqee/pxt-raycasting/tree/v0.3.18) (v0.3.18)

```package
pxt-raycasting
```

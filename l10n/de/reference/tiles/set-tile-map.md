# setze Tile Map

Ordnet Bildkacheln als Muster in der Szene an.

```sig
scene.setTilemap(null)
```

Deine Spielszene enthält eine [Tile Map](/reference/scene/tile-map). Eine Tile Map ist eine Anordnung (ein Muster) von Bildkacheln, die einen Teil der Szene ausfüllen. Zu Beginn hat die Szene eine leere Tile Map, und es wird kein Kachelmuster angezeigt. Um deine Szene aufzubauen, erstellst du im Tile-Map-Editor einige Kacheln und platzierst sie in der Szene.

Die Tile Map verwendet ein Bild-Layout, um die Kacheln der Szene zuzuordnen. Die Zahlen im Bild sind Kennungen (ein Index) für Bildkacheln, die der Szene hinzugefügt wurden. Kachelindizes werden an verschiedenen Stellen der Map platziert, um das zu erzeugen, was in der Szene angezeigt wird.

## Parameter

* **tilemap**: ein [Bild](/types/image), dessen Pixel die Indizes der Kachelbilder enthalten, die in der Szene angezeigt werden.

## Beispiel #example
// TODO Beispiel

## Siehe auch #seealso

[Tile Map](/reference/scene/tile-map)

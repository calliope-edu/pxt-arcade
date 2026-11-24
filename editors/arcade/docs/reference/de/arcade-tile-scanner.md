# arcade-tile-scanner

Mit dieser Erweiterung kannst du in einer Tilemap automatisch nach Kacheln suchen, die bestimmte Regeln erfüllen. Die Regeln kannst du selbst festlegen. Du kannst damit zum Beispiel alle Graskacheln finden, die neben einer Wandkachel liegen, oder herausfinden, wie viele Kacheln es von einer Position bis zur nächsten Wand sind, oder

Alle Blöcke dieser Erweiterung haben Hilfeseiten, die du im MakeCode-Editor lesen kannst. Klicke einfach mit der rechten Maustaste auf den Block und wähle „Hilfe“, um die Referenz zu finden!

## Suchmethoden

Diese Erweiterung kennt verschiedene Suchmethoden.

### Suche ab Position in Richtung

Dieser Block beginnt an der angegebenen Position und geht Kachel für Kachel in die angegebene Richtung, bis er den Rand der Karte erreicht oder die angegebene Regel nicht mehr stimmt.

Das ist super für Dinge wie Fallen mit Bewegungsmelder, die auslösen sollen, wenn der Spieler davor vorbeigeht.

Dieses Projekt verwendet den Block zum Beispiel für Tropfsteine, die herunterfallen, wenn der Spieler darunter durchläuft:

https://makecode.com/_YqjAyPLpH2LW

Dieses Projekt verwendet den Block für Pfeilfallen mit Bewegungsmelder:

https://makecode.com/_39XKoUaFxDWu

### Breitensuche ab Position

Dieser Block macht eine [Breitensuche](https://en.wikipedia.org/wiki/Breadth-first_search) ab der angegebenen Position und findet alle Kacheln, die dasselbe Bild wie die Startkachel haben oder auf eine angegebene Regel passen. Er wählt also alle Kacheln eines zusammenhängenden Bereichs aus, die auf die Regel passen.

Damit kannst du Bereiche deiner Tilemap auswählen. In diesem Projekt wählt die Breitensuche zum Beispiel alle Kacheln eines Lavasees aus, damit sie mit einem Eis-Geschoss abgekühlt werden können:

https://makecode.com/_fMdXmoiHbbMA

### alle Positionen, die auf eine Regel passen

Dieser Block findet alle Positionen in einer Tilemap, die auf die angegebene Regel passen.

In diesem Projekt finden wir damit alle Wasserkacheln, die an eine Eiskachel grenzen, und lassen so das Eis von Kachel zu Kachel wachsen:

https://makecode.com/_LVhHi9Uzf0hw

### Linien suchen, die auf eine Regel passen

Dieser Block sucht waagerechte oder senkrechte Linien, die auf die angegebene Regel passen. Anders als die Suchblöcke oben gibt dieser Block ein doppeltes Array von Positionen zurück statt eines einfachen Arrays. Jedes innere Array ist eine gefundene Linie, und die Linien sind von der längsten zur kürzesten sortiert.

Dieser Block eignet sich besonders für Puzzlespiele mit fallenden Blöcken! Schau dir die Funktion „clear matches“ in diesem Projekt als Beispiel an:

https://makecode.com/_eYgUxDd5bgpk

### Gruppen suchen, die auf eine Regel passen

Dieser Block findet alle zusammenhängenden Gruppen von Positionen, die auf die angegebene Regel passen. Stell dir vor, er macht für jede Kachel der Tilemap eine eigene Breitensuche und gibt alle gefundenen Gruppen auf einmal zurück. Wie der Block „Linien suchen“ gibt er ein doppeltes Array zurück, sortiert von der größten zur kleinsten Gruppe.

Auch dieser Block ist praktisch für Puzzlespiele mit fallenden Blöcken! Verwende ihn, um alle Gruppen mit einer bestimmten Anzahl Kacheln zu entfernen:

https://makecode.com/_hF66Yz365b4m

Quelle: [riknoll/arcade-tile-scanner](https://github.com/riknoll/arcade-tile-scanner/tree/v0.0.1) (v0.0.1)

```package
arcade-tile-scanner
```

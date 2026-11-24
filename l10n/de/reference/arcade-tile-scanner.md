# arcade-tile-scanner

Diese Erweiterung sucht automatisch nach Kacheln in einer Kachelkarte, die bestimmten Regeln entsprechen, die du selbst festlegen kannst. Du könntest damit zum Beispiel alle Graskacheln finden, die neben einer Wandkachel liegen, oder herausfinden, wie viele Kacheln eine Position von der nächsten Wand entfernt ist, oder

Alle Blöcke dieser Erweiterung haben Hilfeseiten, die du im MakeCode-Editor lesen kannst. Klicke einfach mit der rechten Maustaste auf den Block und wähle "Hilfe", um die Referenzdokumentation zu finden!

## Suchmethoden

Diese Erweiterung unterstützt verschiedene Suchmethoden.

### Von einer Position in eine Richtung suchen

Dieser Block beginnt an der angegebenen Position und bewegt sich Kachel für Kachel in die angegebene Richtung, bis er den Rand der Karte erreicht oder die Regel nicht mehr zutrifft.

Das ist super praktisch für bewegungsgesteuerte Fallen, die ausgelöst werden sollen, wenn die Spielfigur davor vorbeiläuft.

Dieses Projekt verwendet den Block zum Beispiel für Stalaktiten, die herunterfallen, wenn die Spielfigur darunter hindurchgeht:

https://makecode.com/_YqjAyPLpH2LW

Dieses Projekt verwendet den Block für bewegungsgesteuerte Pfeilfallen:

https://makecode.com/_39XKoUaFxDWu

### Breitensuche ab einer Position

Dieser Block führt eine [Breitensuche](https://en.wikipedia.org/wiki/Breadth-first_search) ab der angegebenen Position durch und findet alle Kacheln, die entweder dasselbe Bild wie die Startkachel haben oder einer Regel entsprechen. Anders gesagt: Er wählt alle Kacheln eines zusammenhängenden Bereichs aus, die der Regel entsprechen.

Das ist nützlich, um Bereiche deiner Kachelkarte auszuwählen. In diesem Projekt wird die Breitensuche zum Beispiel verwendet, um alle Kacheln eines Lavasees auszuwählen, damit sie mit einem Eisgeschoss abgekühlt werden können:

https://makecode.com/_fMdXmoiHbbMA

### Alle Positionen finden, die einer Regel entsprechen

Dieser Block liefert alle Positionen in einer Kachelkarte, die der angegebenen Regel entsprechen.

In diesem Projekt finden wir damit alle Wasserkacheln, die an eine Eiskachel grenzen, und lassen das Eis so von Kachel zu Kachel wachsen:

https://makecode.com/_LVhHi9Uzf0hw

### Nach Linien suchen, die einer Regel entsprechen

Dieser Block sucht nach waagerechten oder senkrechten Linien, die der Regel entsprechen. Anders als die obigen Suchmethoden gibt dieser Block ein zweidimensionales Array von Positionen statt eines einfachen Arrays zurück. Jedes innere Array steht für eine gefundene Linie, und die Linien sind von der längsten zur kürzesten sortiert.

Dieser Block eignet sich besonders für Puzzlespiele mit fallenden Blöcken! Ein Beispiel für die Verwendung findest du in der Funktion clear matches dieses Projekts:

https://makecode.com/_eYgUxDd5bgpk

### Nach Gruppen suchen, die einer Regel entsprechen

Dieser Block findet alle zusammenhängenden Gruppen von Positionen, die der Regel entsprechen. Stell dir vor, dass für jede Kachel der Kachelkarte eine eigene Breitensuche (BFS) ausgeführt wird und alle gefundenen Gruppen auf einmal zurückgegeben werden. Wie der Block "scan for lines" gibt dieser Block ein zweidimensionales Array zurück, das von der größten zur kleinsten Gruppe sortiert ist.

Auch dieser Block ist nützlich für Puzzlespiele mit fallenden Blöcken! Verwende ihn, um alle Treffer mit einer bestimmten Anzahl von Kacheln zu entfernen:

https://makecode.com/_hF66Yz365b4m

Quelle: [riknoll/arcade-tile-scanner](https://github.com/riknoll/arcade-tile-scanner/tree/v0.0.1) (v0.0.1)

```package
arcade-tile-scanner
```

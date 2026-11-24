# pxt-color

## setze Palette

Setze die aktuelle Palette des Spiels ganz oder teilweise zur Laufzeit

@param palette die Farben, die gesetzt werden
@param start [optional] der Index, ab dem Farben gesetzt werden (Standard: 0)
@param length [optional] die Anzahl der zu kopierenden Farben (Standard: alle)
@param pOffset [optional] die Position in der Palette, ab der kopiert wird (Standard: 0)

## überblende von Palette zu Palette

Erstelle eine Überblendung von einer Palette zu einer anderen, die über die angegebene Dauer abläuft

@param start die Startpalette
@param end die Zielpalette
@param duration [optional] wie lange es dauern soll (Standard: 2 Sekunden)

## wende Überblendeffekt an

Wende einen Effekt an, der die Farbpalette des Bildschirms verändert.

@param duration wie lange der Effekt dauern soll (Standard: 2 Sekunden)

## pausiere bis aktuelle Überblendung fertig

Pausiere, bis die aktuelle Überblendung abgeschlossen ist. Das ist nützlich, wenn eine Überblendung erst nach einer anderen ablaufen soll.

## entferne Überblendeffekt

Entferne den letzten Überblendeffekt, indem die Palette auf den Stand vor diesem Effekt zurückgesetzt wird.

Quelle: [jwunderl/pxt-color](https://github.com/jwunderl/pxt-color/tree/v0.2.3) (v0.2.3)

```package
color-fading
```

# pxt-color

## Farbpalette setzen

Setzt die ganze aktuelle Palette des Spiels oder einen Teil davon

@param palette Die Farben, die gesetzt werden
@param start [optional] Der Eintrag, ab dem die Farben gesetzt werden (Standard: 0)
@param length [optional] Die Anzahl der Farben, die kopiert werden (Standard: alle)
@param pOffset [optional] Die Stelle in der Palette, ab der kopiert wird (Standard: 0)

## von Palette zu Palette überblenden

Erstellt eine Überblendung von einer Palette zu einer anderen über die angegebene Dauer

@param start die Startpalette
@param end die Endpalette
@param duration [optional] wie lange es dauern soll (Standard: 2 Sekunden)

## Überblendeffekt anwenden

Wendet einen Effekt an, der die Farbpalette des Bildschirms verändert.

@param duration wie lange der Effekt dauern soll (Standard: 2 Sekunden)

## warten bis Überblendung fertig

Wartet, bis die aktuelle Überblendung fertig ist. Das ist praktisch, wenn eine Überblendung erst nach einer anderen beginnen soll.

## Überblendeffekt löschen

Löscht den letzten Überblendeffekt, indem die Palette auf den Stand vor dem Effekt zurückgesetzt wird.

Quelle: [jwunderl/pxt-color](https://github.com/jwunderl/pxt-color/tree/v0.2.3) (v0.2.3)

```package
color-fading
```

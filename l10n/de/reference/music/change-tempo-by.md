# Ändere Tempo um

Macht das [Tempo](/reference/music/tempo) (die Geschwindigkeit eines Musikstücks)
um den angegebenen Wert schneller oder langsamer.

```sig
music.changeTempoBy(20)
```

## Simulator

Diese Funktion funktioniert nur auf dem @boardname@ und in manchen Browsern.

## Parameter

* ``bpm`` ist eine [Zahl](/types/number), die angibt, um wie viel
  sich die bpm (Schläge pro Minute, also die Anzahl der Schläge pro Minute
  in der Musik, die der @boardname@ spielt) ändern.

## Beispiel #example

Dieses Programm macht die Musik um 12 bpm schneller.

```blocks
music.changeTempoBy(12)
```

Dieses Programm macht die Musik um 12 bpm _langsamer_.

```blocks
music.changeTempoBy(-12)
```

## Siehe auch #seealso

[spiele Ton](/reference/music/play-tone), [Ton ausgeben](/reference/music/ring-tone) 

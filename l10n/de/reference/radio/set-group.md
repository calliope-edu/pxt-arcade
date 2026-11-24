# setze Gruppe

Gib einem Programm die Gruppen-ID, die du festlegst, zum Senden und Empfangen
per Funk.

```sig
radio.setGroup(0);
```

Eine Gruppe ist wie ein Fernsehkanal (ein @boardname@ kann
immer nur in einer Gruppe gleichzeitig senden oder empfangen). Eine Gruppen-ID ist wie die
Kanalnummer.

Wenn du deinem Programm mit dieser Funktion keine Gruppen-ID
vorgibst, ermittelt es selbst eine eigene Gruppen-ID. Wenn du
genau dasselbe Programm auf zwei verschiedene @boardname@s lädst, können sie
miteinander kommunizieren, weil sie dieselbe Gruppen-ID haben.

## Parameter

* **id**: eine [Zahl](/types/number) von ``0`` bis ``255``.

## Simulator

Diese Funktion funktioniert nur auf dem @boardname@, nicht im Browser.

## Beispiel

Dieses Programm setzt die Gruppen-ID auf 128.

```blocks
radio.setGroup(128)
```

## Siehe auch

[Bit Radio](/reference/radio)
[wenn Zahl empfangen](/reference/radio/on-received-number),
[wenn Zeichenkette empfangen](/reference/radio/on-received-string),
[wenn Wert empfangen](/reference/radio/on-received-value),
[sende Zahl](/reference/radio/send-number),
[sende Wert](/reference/radio/send-value),
[sende Zeichenkette](/reference/radio/send-string)

```package
radio
```

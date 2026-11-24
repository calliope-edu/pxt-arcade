# create Sound Effect

Erstelle eine Klangausdruck-Zeichenkette für einen Soundeffekt.

```sig
music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
```

Ein Klangausdruck ist eine Reihe von Parametern, die einen **[Soundeffekt](/types/sound-effect)** beschreiben, der eine bestimmte Zeit lang dauert. Diese Parameter legen eine Grundwellenform, einen Frequenzbereich, die Lautstärke und Effekte fest. Die Klangdaten werden als [Soundeffekt](/types/sound-effect)-Objekt erstellt und können dann über den Lautsprecher, Kopfhörer oder an einem Ausgangspin [abgespielt](/reference/music/play) werden.

## Parameter

* **waveShape**: die grundlegende Form der Wellenform:
>* `sine`: Sinuswelle
>* `sawtooth`: Sägezahnwelle
>* `triangle`: Dreieckswelle
>* `square`: Rechteckwelle
>* `noise`: Welle aus zufälligem Rauschen
* **startFrequency**: eine [Zahl](/types/number), die die Frequenz der Wellenform zu Beginn des Klangausdrucks angibt.
* **endFrequency**: eine [Zahl](/types/number), die die Frequenz der Wellenform am Ende des Klangausdrucks angibt.
* **startVolume**: eine [Zahl](/types/number) für die Anfangslautstärke des Klangausdrucks.
* **endVolume**: eine [Zahl](/types/number) für die Endlautstärke des Klangausdrucks.
* **duration**: eine [Zahl](/types/number) für die Dauer des Klangausdrucks in Millisekunden.
* **effect**: ein Effekt, der der Wellenform hinzugefügt wird. Diese sind:
>* `tremolo`: fügt leichte Lautstärkeschwankungen zum Klangausdruck hinzu.
>* `vibrato`: fügt leichte Frequenzschwankungen zum Klangausdruck hinzu.
>* `warble`: ähnlich wie `vibrato`, aber mit schnelleren Frequenzschwankungen.
* **interpolation**: steuert, wie schnell sich die Frequenz im Klangausdruck ändert.
>* `linear`: die Frequenz ändert sich während der gesamten Dauer gleichmäßig.
>* `curve`: die Frequenz ändert sich am Anfang schneller und gegen Ende langsamer.
>* `logarithmic`: die Frequenz ändert sich ganz am Anfang des Klangs sehr schnell.

## Rückgabewert

* ein [soundEffect](/types/sound-effect)-Objekt mit den gewünschten Soundeffekt-Parametern.

## Beispiele

### Sinuswellen-Klang

Erstelle eine Klangausdruck-Zeichenkette und weise sie einer Variablen zu. Spiele den Klang des Klangausdrucks ab.

```blocks
let mySound = music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.playSoundEffect(mySound, SoundExpressionPlayMode.UntilDone)
```

### Komplexer Wellenform-Klang

Erstelle einen Klangausdruck mit `triangle`-Welle, `vibrato` und `curve`-Interpolation. Spiele den Klang ab, bis er fertig ist.

```typescript
let mySound = music.createSoundEffect(
    WaveShape.Triangle,
    1000,
    2700,
    255,
    255,
    500,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    )
music.playSoundEffect(mySound, SoundExpressionPlayMode.UntilDone)
```

## Siehe auch

[play](/reference/music/play)

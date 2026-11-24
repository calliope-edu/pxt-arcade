# Soundeffekt

Ein **Soundeffekt** ist ein Datenobjekt, das aus einem Klangausdruck erstellt wird. Ein Klangausdruck ist eine Gruppe von Parametern, die einen Klang festlegen, z. B. Wellenform, Lautstärke, Frequenz und Dauer.

Ein Klang wird aus einem Ausdruck auf Grundlage einer grundlegenden Wellenform erzeugt. Um eine Schallwelle zu erzeugen, müssen die Klangdaten über einen Zeitraum von einem hohen Wellenberg zu einem tiefen Wellental wechseln und sich wiederholen. Die Berge und Täler sind die positiven und negativen Amplituden der Welle über und unter der Nulllinie. Die Lautstärke steuert die Amplitude der Welle.

Wenn der Klang über einen Lautsprecher oder Kopfhörer abgespielt wird, erzeugen die Schwingungen Druckwellen, die unsere Ohren als Klang wahrnehmen.

### ~ hint

#### Klänge und Klangausdrücke

Im Code ist ein **Soundeffekt** ein komplexes Datenobjekt, das Daten für alle Elemente enthält, die einen Klang darstellen. Dazu gehören Informationen über die Frequenzen und Lautstärken zu verschiedenen Zeitpunkten während der Dauer des Klangs. Ein **SoundExpression** ist ein weiterer Datentyp, der hilft, einen **Soundeffekt** zu erstellen. Er enthält die Angaben, wie der Klang erzeugt wird. Viele davon legst du fest, wenn du einen Klang bearbeitest.

Code zum Erstellen und Abspielen eines Klangs aus einem Klangausdruck könnte so aussehen:

```typescript-ignore
let mySound = music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.playSoundEffect(mySound, SoundExpressionPlayMode.UntilDone)
```

### ~

## Klänge bearbeiten

Wenn du auf die Wellenform im Block ``||music:play sound||`` klickst, wird der Klang-Editor angezeigt. Der Klang-Editor legt den Klangausdruck-Parameter fest, mit Auswahlmöglichkeiten für **Wellenform**, **Dauer**, **Frequenz**bereich, **Lautstärke**bereich, **Effekt** und **Interpolation**.

![Klang-Editor](/static/types/sound/sound-editor.png)

Sowohl die Frequenz als auch die Lautstärke können über die Dauer des Klangs mit unterschiedlichen Werten beginnen und enden.

## Wellenform

Die Wellenform wird gewählt, um einen natürlichen oder einen synthetischen Klang zu erzeugen. Manche Wellenformen können auch Signale erzeugen, wenn sie an einem Pin statt über Lautsprecher oder Kopfhörer ausgegeben werden.

### Sinuswelle

Die Wellenform, die natürlichem Klang entspricht, ist die Sinuswelle. Dieser Wellentyp kommt in Musik und Sprache vor.

![Sinuswelle](/static/types/sound/sine-wave.png)

### Sägezahnwelle

Eine Sägezahnwelle hat eine senkrecht ansteigende Flanke und eine linear abfallende Flanke. Ihre Form sieht aus wie die Zähne einer Säge.

![Sägezahnwelle](/static/types/sound/sawtooth-wave.png)

### Dreieckswelle

Die Dreieckswelle hat eine symmetrisch ansteigende und abfallende Flanke. Sie bildet Dreiecke in der Wellenform.

![Dreieckswelle](/static/types/sound/triangle-wave.png)

### Rechteckwelle

Eine Rechteckwelle hat senkrecht ansteigende und abfallende Flanken mit einem flachen Abschnitt oben und unten. Die flachen Abschnitte entsprechen der für den Klang eingestellten Lautstärke. Rechteckwellen werden manchmal zur Darstellung digitaler Daten verwendet und erzeugen einen "elektronischen" Klang.

![Rechteckwelle](/static/types/sound/square-wave.png)

### Rauschen

Die Rauschwelle wird aus zufälligen Frequenzen und Lautstärken erzeugt. Mit den Frequenzparametern des Klangausdrucks legst du einen "Stimmbereich" für den Rauscheffekt fest.

![Rauschen](/static/types/sound/noise-wave.png)

## Dauer

Der Klang wird für eine bestimmte Zeit abgespielt. Diese wird als Anzahl von Millisekunden (**ms**) festgelegt.

## Lautstärke

Die Lautstärke steuert, wie laut (Amplitude) der Klang ist. Der Klang kann mit einer Lautstärke beginnen und mit einer anderen enden. Er kann laut beginnen und leise enden oder umgekehrt. Die Lautstärkeregelung hat Start- und Endpunkte, die höher und niedriger eingestellt werden können. Greife sie und schiebe sie nach oben oder unten.

### Von hoch nach tief

![Lautstärke von hoch nach tief](/static/types/sound/volume-hilo.png)

### Von tief nach hoch

![Lautstärke von tief nach hoch](/static/types/sound/volume-lohi.png)

### Konstante Lautstärke

![Konstante Lautstärke](/static/types/sound/volume-constant.png)

## Frequenz

Die Frequenz gibt an, wie schnell sich eine Welle wiederholt: von der Nulllinie zum Wellenberg, hinunter zum Wellental und zurück zur Nulllinie. Passiert das 1000-mal pro Sekunde, hat die Frequenz 1000 Schwingungen pro Sekunde und wird in der Einheit Hertz gemessen (1000 Hz). Die Frequenz des Klangs zu einem bestimmten Zeitpunkt ist seine aktuelle _Tonhöhe_. Musiknoten und Teile von Sprache sind verschiedene Frequenzen, die in einem Klang für kurze Zeit andauern.

Ein Klangausdruck hat eine Start- und eine Endfrequenz. Die Frequenz kann tief beginnen und hoch enden, hoch beginnen und tief enden oder über die Dauer des Klangs gleich bleiben.

### Von hoch nach tief

![Frequenz von hoch nach tief](/static/types/sound/freq-hilo.png)

### Von tief nach hoch

![Frequenz von tief nach hoch](/static/types/sound/freq-lohi.png)

### Effekt

Effekte fügen der Wellenform kleine Änderungen hinzu, können aber stark verändern, wie sie für Zuhörende klingt. Es gibt einige Effekte, die du auf einen Klang anwenden kannst.

* **Tremolo**: fügt dem Klangausdruck leichte Lautstärkeänderungen hinzu.

>![Einstellung Tremolo-Effekt](/static/types/sound/effect-tremolo.png)

* **Vibrato**: fügt dem Klangausdruck leichte Frequenzänderungen hinzu.

>![Einstellung Vibrato-Effekt](/static/types/sound/effect-vibrato.png)

* **Warble**: ähnlich wie Vibrato, aber mit schnelleren Schwankungen der Frequenzänderungen.

>![Einstellung Warble-Effekt](/static/types/sound/effect-warble.png)

### Interpolation

Die Interpolation bestimmt, wie der Klangausdruck die Änderungen von Frequenz oder Lautstärke des Klangs vornimmt. Diese Änderungen können gleichmäßig über die Dauer des Klangs oder eher plötzlich am Anfang erfolgen.

* **Linear**: Die Frequenz ändert sich über die Dauer des Klangs gleichmäßig.

>![Frequenz von tief nach hoch](/static/types/sound/interp-linear.png)

* **Kurve**: Die Frequenz ändert sich am Anfang des Klangs schneller und wird gegen Ende langsamer.

>![Frequenz von tief nach hoch](/static/types/sound/interp-curve.png)

* **Logarithmisch**: Die Frequenz ändert sich ganz am Anfang des Klangs sehr schnell.


>![Frequenz von tief nach hoch](/static/types/sound/interp-log.png)

## Siehe auch

[Soundeffekt abspielen](/reference/music/play-sound-effect),
[Soundeffekt erstellen](/reference/music/create-sound-effect)

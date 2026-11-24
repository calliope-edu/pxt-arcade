# play Sound Effect

Spiele einen Klang ab, der aus einem Klangausdruck erzeugt wird.

```sig
music.playSoundEffect("", SoundExpressionPlayMode.UntilDone)
```

Damit wird ein **[Sound](/types/sound)**-Objekt abgespielt, das aus einem Klangausdruck erstellt wurde. Der Klang wird so lange gespielt, wie es im Klangausdruck festgelegt ist. Er kann über den Lautsprecher oder an einem Pin ausgegeben werden, der für die Tonausgabe eingestellt ist.

Du kannst auch [eingebaute Soundeffekte](/reference/music/builtin-sound-effect) wie `giggle`, `happy` oder `twinkle` abspielen.

Dein Programm kann warten, bis der Klang fertig ist, bevor es den nächsten Schritt ausführt. Stelle dazu den Abspielmodus auf `until done`. Andernfalls verwende `background`, damit das Programm sofort nach dem Start des Klangs weiterläuft.

### ~ reminder

#### Funktioniert mit micro:bit V2

![Bild: funktioniert nur mit micro:bit V2](https://makecode.com/not-found/HEAD/static/v2/v2-only.png)

Dieser Block benötigt die Hardware [micro:bit V2](/device/v2). Wenn du diesen Block mit einem micro:bit v1 verwendest, siehst du den Fehlercode **927** auf dem Bildschirm.

### ~

## Parameter

* **sound**: eine [Zeichenkette](/types/string) mit dem Klangausdruck für den Klang, den du abspielen möchtest.
* **mode**: der Abspielmodus für den Klang, entweder `until done` oder `background`.

## Beispiele

### Einfacher Wellenform-Klang

Spiele den Soundeffekt eines Sinuswellen-Klangausdrucks `1` Sekunde lang ab.

```blocks
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
```

### Komplexer Wellenform-Klang

Spiele einen Soundeffekt mit `triangle`-Welle, `vibrato` und `curve`-Interpolation ab.

```typescript
music.playSoundEffect(music.createSoundEffect(
    WaveShape.Triangle,
    1000,
    2700,
    255,
    255,
    500,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
```

## Siehe auch

[create sound effect](/reference/music/create-sound-effect)

# zufälliger Sound

Erstelle einen neuen Sound, der dem ursprünglichen ähnelt, aber einige Abweichungen hat.

```sig
music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear))
```

Beim entstehenden Soundeffekt werden einige Parameter des ursprünglichen Soundeffekts zufällig verändert, sodass er sich vom ursprünglichen Sound unterscheidet.

## Parameter

* **sound**: der ursprüngliche [Soundeffekt](/types/sound-effect).

## Rückgabe

* ein neuer [Soundeffekt](/types/sound-effect) mit einigen Unterschieden zum ursprünglichen **sound**.

## Beispiel

Verändere einen Sinuswellen-Soundeffekt zufällig und spiele ihn ab.

```blocks
music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.UntilDone)
```

## Siehe auch

[spiele](/reference/music/play),
[Soundeffekt erstellen](/reference/music/create-sound-effect)

# Musik

Mach Musik! Spiele Songs, Melodien, Sounds und Töne.

## Musik abspielen

Verwende den Block `||music:play||`, um einen selbst komponierten Song, eine kurze Melodie oder einen eingebauten Sound abzuspielen.

```cards
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

### Einen Song abspielen

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

### Eine Melodie abspielen

```block
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
```

### Einen eingebauten Sound abspielen

```block
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
```

### Einen Soundeffekt abspielen

```blocks
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
```

## Soundeffekte

```cards
music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear))
```

## Sound

```cards
music.ringTone(0)
music.rest(0)
music.noteFrequency(Note.C)
music.beat(BeatFraction.Whole)
music.tempo()
music.changeTempoBy(20)
music.setTempo(120)
music.setVolume(0)
music.stopAllSounds()
```

## Siehe auch

[spielen](/reference/music/play), [Song erstellen](/reference/music/create-song), [Melodie aus Text](/reference/music/string-playable), [Ton abspielbar](/reference/music/tone-playable), [Soundeffekt erstellen](/reference/music/create-sound-effect), [Sound zufällig verändern](/reference/music/randomize-sound), [Ton ausgeben](/reference/music/ring-tone), [Pause](/reference/music/rest), [Schlag](/reference/music/beat), [Tempo](/reference/music/tempo), [ändere Tempo um](/reference/music/change-tempo-by), [setze Tempo](/reference/music/set-tempo), [setze Lautstärke](/reference/music/set-volume), [alle Sounds stoppen](reference/music/stop-all-sounds)
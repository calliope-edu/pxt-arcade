# Musique

Fais de la musique ! Joue des chansons, des mélodies, des sons et des tonalités.

## Jouer de la musique

Utilise le bloc `||music:play||` pour jouer une chanson que tu composes, une courte mélodie ou un son intégré.

```cards
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

### Jouer une chanson

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

### Jouer une mélodie

```block
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
```

### Jouer un son intégré

```block
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
```

### Jouer un effet sonore

```blocks
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
```

## Effets sonores

```cards
music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear))
```

## Son

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

## Voir Aussi

[jouer](/reference/music/play), [créer une chanson](/reference/music/create-song), [chaîne jouable](/reference/music/string-playable), [tonalité jouable](/reference/music/tone-playable), [créer un effet sonore](/reference/music/create-sound-effect), [rendre le son aléatoire](/reference/music/randomize-sound), [sonner](/reference/music/ring-tone), [silence](/reference/music/rest), [temps](/reference/music/beat), [tempo](/reference/music/tempo), [changer le tempo de](/reference/music/change-tempo-by), [régler le tempo](/reference/music/set-tempo), [régler le volume](/reference/music/set-volume), [arrêter tous les sons](reference/music/stop-all-sounds)
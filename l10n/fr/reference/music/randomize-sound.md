# rendre le son aléatoire

Crée un nouveau son semblable à l'original, mais avec quelques variations.

```sig
music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear))
```

L'effet sonore obtenu rend aléatoires certains paramètres de l'effet sonore original pour créer des différences par rapport au son original.

## Paramètres

* **sound** : l'[effet sonore](/types/sound-effect) original.

## Renvoie

* un nouvel [effet sonore](/types/sound-effect) avec quelques différences par rapport au **sound** original.

## Exemple

Rends aléatoire et joue un effet sonore à onde sinusoïdale.

```blocks
music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.UntilDone)
```

## Voir aussi

[jouer](/reference/music/play),
[créer un effet sonore](/reference/music/create-sound-effect)

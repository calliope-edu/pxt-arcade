# jouer un effet sonore

Joue un son généré à partir d'une expression sonore.

```sig
music.playSoundEffect("", SoundExpressionPlayMode.UntilDone)
```

Cela joue un objet **[Son](/types/sound)** créé à partir d'une expression sonore. Le son est joué pendant la durée définie dans l'expression sonore. Le son peut être joué sur le haut-parleur ou sur une broche configurée pour la sortie sonore.

Tu peux aussi jouer des [effets sonores intégrés](/reference/music/builtin-sound-effect) comme `giggle`, `happy` ou `twinkle`.

Ton programme peut attendre la fin du son avant d'exécuter l'étape suivante. Pour cela, règle le mode de lecture sur `until done`. Sinon, utilise `background` pour que le programme continue immédiatement après le début du son.

### ~ reminder

#### Fonctionne avec le micro:bit V2

![image fonctionne uniquement avec le micro:bit V2](https://makecode.com/not-found/HEAD/static/v2/v2-only.png)

Ce bloc nécessite le matériel [micro:bit V2](/device/v2). Si tu utilises ce bloc avec une carte micro:bit v1, tu verras le code d'erreur **927** à l'écran.

### ~

## Paramètres

* **sound** : une [chaîne](/types/string) qui est l'expression sonore du son que tu veux jouer.
* **mode** : le mode de lecture du son, soit `until done`, soit `background`.

## Exemples

### Son à forme d'onde simple

Joue l'effet sonore d'une expression sonore à onde sinusoïdale pendant `1` seconde.

```blocks
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
```

### Son à forme d'onde complexe

Joue un effet sonore à onde `triangle` avec `vibrato` et une interpolation `curve`.

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

## Voir aussi

[créer un effet sonore](/reference/music/create-sound-effect)

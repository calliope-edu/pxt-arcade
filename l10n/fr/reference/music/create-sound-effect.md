# créer un effet sonore

Crée une chaîne d'expression sonore pour un effet sonore.

```sig
music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
```

Une expression sonore est un ensemble de paramètres qui décrivent un **[effet sonore](/types/sound-effect)** qui dure un certain temps. Ces paramètres indiquent une forme d'onde de base, une plage de fréquences, un volume sonore et des effets. Les données sonores sont créées sous forme d'objet [effet sonore](/types/sound-effect) et peuvent ensuite être [jouées](/reference/music/play) sur le haut-parleur, le casque ou une broche de sortie.

## Paramètres

* **waveShape** : la forme principale de l'onde :
>* `sine` : onde sinusoïdale
>* `sawtooth` : onde en dents de scie
>* `triangle` : onde triangulaire
>* `square` : onde carrée
>* `noise` : onde générée par un bruit aléatoire
* **startFrequency** : un [nombre](/types/number) qui est la fréquence de l'onde au début de l'expression sonore.
* **endFrequency** : un [nombre](/types/number) qui est la fréquence de l'onde à la fin de l'expression sonore.
* **startVolume** : un [nombre](/types/number), le volume initial de l'expression sonore.
* **endVolume** : un [nombre](/types/number), le volume final de l'expression sonore.
* **duration** : un [nombre](/types/number), la durée en millisecondes de l'expression sonore.
* **effect** : un effet à ajouter à l'onde. Ce sont :
>* `tremolo` : ajoute de légères variations de volume à l'expression sonore.
>* `vibrato` : ajoute de légères variations de fréquence à l'expression sonore.
>* `warble` : semblable à `vibrato`, mais avec des variations de fréquence plus rapides.
* **interpolation** : contrôle la vitesse de changement de fréquence dans l'expression sonore.
>* `linear` : le changement de fréquence est constant pendant toute la durée du son.
>* `curve` : le changement de fréquence est plus rapide au début du son et ralentit vers la fin.
>* `logarithmic` : le changement de fréquence est rapide tout au début du son.

## Retourne

* un objet [soundEffect](/types/sound-effect) avec les paramètres d'effet sonore souhaités.

## Exemples

### Son à onde sinusoïdale

Crée une chaîne d'expression sonore et affecte-la à une variable. Joue le son de l'expression sonore.

```blocks
let mySound = music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.playSoundEffect(mySound, SoundExpressionPlayMode.UntilDone)
```

### Son à onde complexe

Crée une expression sonore à onde `triangle` avec `vibrato` et une interpolation `curve`. Joue le son jusqu'à la fin.

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

## Voir aussi

[jouer](/reference/music/play)
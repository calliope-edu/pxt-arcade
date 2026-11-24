# tone Playable

Crée une tonalité musicale qui sera jouée pendant une certaine durée.

```sig
music.tonePlayable(262, music.beat(BeatFraction.Whole))
```

## Paramètres

* **note** : la fréquence de la note sous forme de [nombre](/types/number) de [Hertz](https://wikipedia.org/wiki/Hertz) (à quel point la tonalité est aiguë ou grave, aussi appelé _hauteur_). Si **note** est inférieure ou égale à zéro, aucun son n'est joué.
* **duration** : le [nombre](/types/number) de millisecondes (millièmes de seconde) que dure la tonalité. Si **duration** est négative ou nulle, le son est joué en continu.

## Retourne

* un objet [jouable](/types/playable) qui contient la tonalité.

## Exemple #example

Stocke la note de musique 'C' dans la variable `note` et joue cette note pendant 1000 millisecondes (une seconde).

```blocks
let note = music.noteFrequency(Note.C);
music.play(music.tonePlayable(note, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

## Voir aussi #seealso

[melody playable](/reference/music/melody-playable),
[string playable](/reference/music/string-playable)

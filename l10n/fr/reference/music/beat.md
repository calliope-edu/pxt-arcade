# temps

Obtiens la durée d'un temps musical.

```sig
music.beat(BeatFraction.Whole)
```

## Paramètres

* ``fraction`` signifie la fraction d'un temps (BeatFraction.Whole, BeatFraction.Sixteenth, etc.) 

## Retourne

* un [nombre](/types/number) qui est la durée en millisecondes (millièmes de seconde) de la fraction de temps.

## Exemple #example

```blocks
music.playTone(Note.C, music.beat(BeatFraction.Quarter))
```

## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone), [sonner](/reference/music/ring-tone),
[silence](/reference/music/rest), [régler le tempo](/reference/music/set-tempo),
[changer le tempo de](/reference/music/change-tempo-by)

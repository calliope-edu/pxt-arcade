# fréquence de la note

Obtiens la fréquence d'une note de musique.

```sig
music.noteFrequency(Note.C)
```

## Paramètres

* ``name`` est le nom de la **Note** dont tu veux la fréquence.

## Retourne

* un [nombre](/types/number) qui est la fréquence (en [Hertz](https://wikipedia.org/wiki/Hertz))
de la note que tu as choisie.

## Exemple #example

Joue une note 'C' (do) pendant une seconde, fais une pause d'une seconde, puis joue une note 'A' (la) pendant une seconde.

```blocks
music.playTone(music.noteFrequency(Note.C), 1000)
music.rest(1000)
music.playTone(music.noteFrequency(Note.A), 1000)
```
## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone), [sonner](/reference/music/ring-tone),
[silence](/reference/music/rest), [tempo](/reference/music/tempo),
[changer le tempo de](/reference/music/change-tempo-by)

# arrêter tous les sons

Arrête tous les sons en cours de lecture et tous ceux qui attendent d'être joués.

```sig
music.stopAllSounds()
```

Si tu joues des sons ou des effets sonores plusieurs fois, les sons demandés plus tard doivent attendre que les sons joués plus tôt soient terminés. Tu peux arrêter le son en cours et tous les sons en attente avec ``||music:arrêter tous les sons||``.

## #simnote
### ~hint

#### Simulateur

``||music:arrêter tous les sons||`` fonctionne sur la @boardname@. Cela peut ne pas fonctionner dans le simulateur sur tous les navigateurs.

### ~

## Exemple #example

Joue une tonalité mais arrête-la tout de suite.

```blocks
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
music.stopAllSounds()
```

## Voir aussi #seealso

[jouer une mélodie](/reference/music/play-melody), [jouer](/reference/music/melody/play),
[jouer une tonalité](/reference/music/play-tone)


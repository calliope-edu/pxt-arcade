# régler le volume

Règle le volume du synthétiseur sonore.

Le volume du synthétiseur contrôle le
niveau du son joué sur la sortie sonore actuelle de la carte (haut-parleur ou broche).

```sig
music.setVolume(128)
```

## #simnote
### ~hint

#### Simulateur

``||music:set volume||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.

### ~

## Paramètres

* ``volume`` : le volume des sons joués sur la sortie sonore. Le [nombre](/types/number) du volume peut être compris entre `0` pour le silence et `255` pour le son le plus fort.

## Exemple #example

Règle le volume du synthétiseur sur quelque chose de plus doux.

```blocks
music.setVolume(50)
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
```

## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone)

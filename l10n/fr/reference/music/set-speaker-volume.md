# régler le volume du haut-parleur

Règle le volume du haut-parleur de la carte.

```sig
music.setSpeakerVolume(128)
```

## #simnote
#### ~hint
**Simulateur** : ``||music:set speaker volume||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.
#### ~

## Paramètres

* ``volume`` : le volume des sons joués sur le haut-parleur. Le [nombre](/reference/types) du volume peut être
compris entre `0` pour le silence et `255` pour le son le plus fort.

## Exemple #example

Règle le volume du haut-parleur sur quelque chose de plus doux.

```blocks
music.setSpeakerVolume(50)
music.playSound(music.sounds(Sounds.BaDing))
```

## Voir aussi #seealso

[jouer un son](/reference/music/play-sound), [sons](/reference/music/sounds)


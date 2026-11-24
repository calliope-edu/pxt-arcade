# définir la sortie

Définit la sortie sonore sur le haut-parleur ou sur une broche.

```sig
music.setOutput(SoundOutputDestination.Speaker)
```
Si ta carte a un haut-parleur ou des broches de sortie analogique, tu peux y jouer des sons. Utilise ``||music:set output||``
pour choisir où tu veux jouer tes sons.

## #simnote
### ~hint
**Simulateur** : ``||music:set output||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.
### ~

## Paramètres

* ``out`` : c'est là où ira la sortie sonore. Tu peux choisir ``speaker`` ou ``pin``.

## Exemple #example

Change la sortie du son pour qu'elle aille vers une broche du @boardname@.

```blocks
music.setOutput(SoundOutputDestination.Pin)
music.playTone(
    music.noteFrequency(Note.Bb),
    music.beat(BeatFraction.Half)
)
```

## Voir aussi #seealso

[définir la broche de son](/reference/music/set-pitch-pin)

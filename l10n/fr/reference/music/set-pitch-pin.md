# définir la broche de son

Choisis sur quelle broche jouer lorsque le son doit aller vers une broche.

```sig
music.setPitchPin(pins.A3)
```
## #pins

Certaines broches du @boardname@ peuvent jouer des sons. Ce sont probablement les broches de sortie analogique de la carte.
Toutes les broches de ta carte ne sont pas des broches de sortie ou ne peuvent pas jouer de son.

## #simnote
### ~hint
**Simulateur** : ``||music:set pitch pin||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.
### ~

## Paramètres

* ``pin`` : la broche sur laquelle jouer le son lorsque le son va vers une broche.

## Exemple #example

Définis la broche de son sur ``A1``. Passe la sortie sonore sur ``pin`` et joue une tonalité.

```blocks
music.setOutput(SoundOutputDestination.Pin)
music.setPitchPin(pins.A1)

music.playTone(
    music.noteFrequency(Note.Bb),
    music.beat(BeatFraction.Half)
)
```

## Voir aussi #seealso

[définir la sortie](/reference/music/set-output)

```package
music
```

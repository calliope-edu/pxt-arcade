# jouer une tonalité

Joue une tonalité musicale sur le haut-parleur pendant un certain temps.

```sig
music.playTone(Note.C, 10)
```

## #simnote
### ~hint

#### Simulateur

``||music:play tone||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.

### ~

## Paramètres

* ``frequency`` est le [nombre](/types/number) de [Hertz](https://wikipedia.org/wiki/Hertz) (à quel point la tonalité est aiguë ou grave, aussi appelé _hauteur_).
* ``ms`` est le [nombre](/types/number) de millisecondes (millièmes de seconde) pendant lequel la tonalité dure.

## Traitement particulier des valeurs

* Si ``frequency`` est inférieure ou égale à zéro, le son est arrêté.
* Si ``ms`` est négatif ou nul, le son n'est pas arrêté et continue de biper.

## Exemple #example

Stocke la note de musique « Do » (C) dans la variable `freq` et joue cette note pendant 1000 millisecondes (une seconde).

```blocks
let freq = music.noteFrequency(Note.C);
music.playTone(freq, 1000)
```

## Voir aussi #seealso

[pause](/reference/music/rest), [sonner une tonalité](/reference/music/ring-tone) , [tempo](/reference/music/tempo),
[régler le tempo](/reference/music/set-tempo), [changer le tempo de](/reference/music/change-tempo-by)

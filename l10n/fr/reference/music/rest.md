# pause

Laisse le haut-parleur sans jouer de son pendant un certain temps.

```sig
music.rest(400);
```

## #simnote
### ~hint

#### Simulateur

``||music:rest||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.

### ~

## Paramètres

* ``ms`` est un [nombre](/types/number) indiquant combien de
  millisecondes le @boardname@ doit faire une pause. Une seconde vaut 1000
  millisecondes.

## Exemple #example

Joue une note « Do » (C) pendant une seconde, puis fais une pause d'une seconde. Recommence, encore et encore...

```blocks
let frequency = music.noteFrequency(Note.C)
while (true) {
    music.playTone(frequency, 1000)
    music.rest(1000)
}
```

## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone), [sonner une tonalité](/reference/music/ring-tone),
[tempo](/reference/music/tempo), [régler le tempo](/reference/music/set-tempo),
[changer le tempo de](/reference/music/change-tempo-by)

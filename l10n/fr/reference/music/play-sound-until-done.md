# jouer un son jusqu'à la fin

Joue quelques notes de musique que tu as placées dans une chaîne et attends que le son ait fini de jouer.

```sig
music.playSoundUntilDone('')
```

Ton programme joue le son et attend que le son soit terminé.

Les notes de ton son vont dans une [chaîne](/types/string). La page [**composer**](/reference/music/composing-sounds)
des sons t'explique comment créer une chaîne de son.

Il existe aussi des sons intégrés que tu peux utiliser. Ils font partie du type **Sounds**. Tu utilises les sons intégrés
à la place de ta propre chaîne de son avec [``||music:sounds||``](/reference/music/sounds) comme ceci :

```blocks
music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
```

## #simnote
#### ~hint
**Simulateur**

``||music:play sound until done||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.
#### ~

## Paramètres

* ``sound`` : une chaîne contenant les notes du son que tu veux jouer. Consulte
[composer des sons](/reference/music/composing-sounds) pour savoir comment créer la chaîne de son.


## Exemples #example

### Ma chaîne de son #ex1

Crée une chaîne de son qui contient 5 notes. Joue le son et attends qu'il ait fini de jouer.

```blocks
let mySound = "g5:1 f e d c";
music.playSoundUntilDone(mySound);
```

### Je joue BaDing #ex2

Joue le son intégré appelé `BaDing`.

```blocks
music.playSoundUntilDone(music.sounds(Sounds.BaDing))
```

## Voir aussi #seealso

[jouer un son](/reference/music/play-sound), [sons](/reference/music/sounds),
[tempo](/reference/music/tempo), [régler le tempo](/reference/music/set-tempo),
[changer le tempo de](/reference/music/change-tempo-by)

[Composer des sons](/reference/music/composing-sounds)

```package
music
```

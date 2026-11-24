# sons

Obtiens une chaîne de son pour un son intégré.

```sig
music.sounds(Sounds.BaDing)
```
Il existe des sons intégrés que tu peux jouer pour ne pas avoir à tout composer. Tu
peux utiliser ces sons pour rendre les actions avec la @boardname@ plus intéressantes.

## Paramètres

* ``name`` : le nom du son intégré que tu veux.

## Retourne

* une [chaîne](/types/string) qui est le son composé d'un son intégré.

## Exemple #example

Définis une variable pour le ``son de baguette magique``. Joue le son stocké dans la variable.

```blocks
let wandSound = music.sounds(Sounds.MagicWand); 
music.playSoundUntilDone(wandSound)
```

## Voir aussi #seealso

[jouer un son](/reference/music/play-sound)

[Composer des sons](/reference/music/composing-sounds)

```package
music
```

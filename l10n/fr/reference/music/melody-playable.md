# mélodie jouable

Crée une mélodie jouable à partir d'une mélodie intégrée.

```sig
music.melodyPlayable(music.baDing)
```

Les mélodies sont des suites de notes jouées l'une après l'autre. Il existe plusieurs mélodies intégrées que tu peux jouer dans tes jeux. Un moyen simple d'ajouter de la musique à ton jeu est de choisir l'une des mélodies intégrées.

## Paramètres

* **melody** : une mélodie intégrée pour laquelle créer un objet jouable, comme `ba ding`, `magic wand` ou `siren`.

## Retourne

* un objet [jouable](/types/playable) qui contient la **melody** intégrée.

## Exemple #example

Joue la mélodie `magic wand` jusqu'à la fin.

```blocks
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
```

## Voir aussi #seealso

[tonalité jouable](/reference/music/tone-playable),
[chaîne jouable](/reference/music/string-playable)
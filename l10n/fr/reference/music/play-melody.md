# jouer une mélodie

Joue une courte mélodie de notes composée dans une chaîne.

```sig
music.playMelody("", 120);
```

La mélodie est une courte suite de notes composée dans une chaîne. Elle est jouée à la vitesse définie par la valeur **tempo** que tu donnes. La chaîne de mélodie contient une suite de notes au format suivant :

``"E B C5 A B G A F "``

La mélodie s'affiche dans le bloc ``||music:play melody||`` sous forme de symboles de notes qui apparaissent aussi dans l'éditeur de mélodie.

```block
music.playMelody("E B C5 A B G A F ", 120);
```

Les mélodies sont le plus souvent créées dans l'éditeur de mélodie depuis le bloc, pour que des notes valides soient choisies et que la bonne longueur de mélodie soit définie.

## Paramètres

* **melody** : une [chaîne](/types/string) qui contient les notes de la mélodie.
* **tempo** : un [nombre](/types/number) qui est la vitesse de lecture de la mélodie en battements par minute.

## Exemple #example

Joue la mélodie ``Mystery`` en continu.

```blocks
forever(function () {
    music.playMelody("E F G F E G B C5 ", 120)
})
```

## Voir aussi #seealso

[régler le tempo](/reference/music/set-tempo), [jouer](/reference/music/melody/play), [jouer jusqu'à la fin](/reference/music/melody/play-until-done)

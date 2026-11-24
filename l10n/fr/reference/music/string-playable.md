# string Playable

Crée une courte mélodie de notes composée dans une chaîne.

```sig
music.stringPlayable("D F E A E A C B ", 120)
```

La **mélodie** est une courte série de notes composée dans une chaîne. La mélodie est jouée à une vitesse définie par la valeur de **tempo** que tu donnes. La chaîne de mélodie contient une séquence de notes formatée ainsi :

``"E B C5 A B G A F "``

La mélodie est affichée dans le bloc ``||music:mélodie||`` sous forme de symboles de notes qui apparaissent aussi dans l'éditeur de mélodie.

```block
music.stringPlayable("E F G F E G B C5 ", 120)
```

Les mélodies sont le plus souvent créées dans l'éditeur de mélodie à partir du bloc, afin que des notes valides soient choisies et que la bonne longueur de mélodie soit définie.

## Paramètres

* **melody** : une [chaîne](/types/string) qui contient les notes de la mélodie.
* **tempo** : un [nombre](/types/number) qui est la vitesse de lecture de la mélodie en battements par minute.

## Retourne

* un objet [jouable](/types/playable) qui contient la **mélodie** et le **tempo**.

## Exemple #example

Joue la mélodie ``Mystery`` en continu.

```blocks
music.play(music.stringPlayable("E F G F E G B C5 ", 120), music.PlaybackMode.LoopingInBackground)
```

## Voir aussi #seealso

[tone playable](/reference/music/tone-playable),
[melody playable](/reference/music/melody-playable)

# créer une chanson

Crée une chanson à partir des notes d'un ou plusieurs instruments de musique.

```sig
music.createSong(hex`00780004080200`)
```

Une chanson est composée de notes de différents instruments dans l'éditeur de chansons. L'[éditeur de chansons](/reference/music/song-editor) s'affiche quand tu cliques sur la fenêtre de la portée dans le bloc ``||music:song||``.

```block
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
```

L'éditeur de chansons contient une clé de `Treble` (sol) et une clé de `Bass` (fa) pour que tu composes ta musique avec les notes des instruments choisis. Tu peux régler le `tempo` et ajouter des mesures à la portée affichée dans la fenêtre de l'éditeur. Quand tu as fini, la chanson est enregistrée sous forme de données dans le paramètre **buffer**.

## Paramètres

* **buffer** : les données contenant les notes jouées par chaque instrument de la chanson.

## Retourne

* un objet [jouable](/types/playable) pour les notes contenues dans **buffer**.

## Exemple #example

Joue une chanson composée dans l'éditeur de chansons.

```blocks
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Voir aussi #seealso

[tonalité jouable](/reference/music/tone-playable),
[chaîne jouable](/reference/music/string-playable),
[mélodie jouable](/reference/music/melody-playable),
[éditeur de chansons](/reference/music/song-editor)
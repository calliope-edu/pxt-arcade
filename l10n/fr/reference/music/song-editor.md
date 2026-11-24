# Éditeur de chansons

Une chanson est contenue dans le bloc ``||music:chanson||``. La chanson est créée et modifiée avec l'éditeur de chansons, qui s'ouvre quand tu cliques sur la fenêtre du paramètre de chanson du bloc.

```block
music.createSong(hex`00780004080200`)
```

Le plus souvent, tu verras cependant le bloc ``||music:chanson||`` dans le bloc ``||music:jouer||``.

```block
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

Cliquer sur la fenêtre du paramètre de chanson ouvre l'éditeur de chansons. Si le bloc ``||music:chanson||`` ne contient aucune information de chanson, l'éditeur de chansons s'affiche avec une chanson vide.

![Fenêtre de l'éditeur de chansons](/static/reference/music/song-editor.png)

## JavaScript et Python

Quand tu modifies ton code dans les espaces de travail JavaScript ou Python, le symbole de notes de musique (♫) apparaît dans la marge de la ligne contenant la fonction équivalente à ``||music:chanson||``, [createSong()](/reference/music/create-song). Cliquer sur ce symbole ouvre aussi l'éditeur de chansons.

```
   1   let monSprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
♫  2   music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
   3   monSprite.startEffect(effects.confetti)
   4
```

## Portée musicale

Les notes d'une chanson sont placées sur la **portée** musicale, qui est un ensemble de lignes horizontales disposées du grave à l'aigu. Les notes sont placées sur des positions de **grille** de gauche à droite. La grille divise une **mesure** pour déterminer combien de notes la mesure contient. Une grille de **1/8** a **8** positions de notes par mesure. Si une position ne contient aucune note, c'est un silence (pas de son). Placer les notes plus haut ou plus bas sur la portée définit bien sûr la hauteur de la note.

![Fenêtre de l'éditeur de chansons](/static/reference/music/staff-and-notes.png)

### Mesures

Tu peux changer la longueur de la chanson en ajoutant ou en supprimant des mesures. Le contrôle **Mesures** te permet de choisir combien de temps ta chanson sera jouée. Dans cet exemple, les mesures sont réglées sur **4** pour ajouter 2 mesures de plus à la chanson.

![Fenêtre de l'éditeur de chansons](/static/reference/music/more-measures.png)

### Clé de fa

Tu peux aussi placer des notes sur la **clé de fa**. Coche simplement l'option **Afficher la clé de fa**. La clé de fa est affichée dans l'éditeur de chansons en correspondance avec la clé de sol par défaut.

![Fenêtre de l'éditeur de chansons](/static/reference/music/bass-clef.png)

Les notes sont ajoutées à la clé de fa de la même façon qu'à la clé de sol.

### Grille

Le nombre de positions de notes (divisions) dans chaque mesure est défini par le contrôle **Grille**. Le réglage de la grille définit le nombre de divisions de notes dans les mesures à l'aide d'une fraction de mesure. Cet exemple utilise une grille de 1/16, donc 16 notes sont affichées dans la mesure.

![Grille réglée sur 1/16](/static/reference/music/sixteenth-grid.png)

### Exemple

Cet exemple contient une chanson avec des notes sur les deux clés et des mesures divisées en 1/8.

```blocks
let monSprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    .........2..........
    ....................
    `, SpriteKind.Player)
music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a30000000400012a04000800012708000c0001200c001000012410001400012a14001800012018001c00011d1c002000012020002400012724002800012a28002c0001252c003000012030003400012434003800012738003c00012a3c004000012740004400012044004800012548004c00012a4c005000012050005400012454005800021e2758005c00012a5c00600001206000640001276400680001246c007000012004001c00100500640000041e000004000000000000000000000000000a040004600000000400010804000800011208000c00010c0c001000011210001400010814001800011218001c00010c1c002000011220002400010824002800011228002c00010c2c003000011230003400010834003800011238003c00010c3c0040000112`), music.PlaybackMode.InBackground)
monSprite.startEffect(effects.confetti, 5000)
```

## Instruments

Tu peux jouer des notes pour plusieurs **instruments** différents. Tu choisis un instrument dans la barre d'instruments en haut de la fenêtre de l'éditeur.

![Fenêtre de l'éditeur de chansons](/static/reference/music/instrument-bar.png)

Les instruments sont représentés par différents personnages et produisent des sons différents pour les mêmes notes. Ce sont des instruments MakeCode qui n'ont pas exactement le même son que des instruments classiques comme un violon, un violoncelle, une batterie ou une guitare.

![Fenêtre de l'éditeur de chansons](/static/reference/music/several-instruments.png)

Si tu veux te concentrer sur les notes d'un instrument particulier, tu peux utiliser l'option **Afficher uniquement l'instrument sélectionné** pour retirer temporairement les autres instruments de la portée. Cela facilite la composition pour un seul instrument, car seules les notes de l'instrument sélectionné sont affichées.

## Jouer la chanson

Pendant que tu modifies une chanson, tu peux jouer, arrêter ou jouer en boucle la musique que tu as composée. Tu peux aussi changer le tempo (battements par minute) de la chanson avec le réglage **Tempo**.

![Fenêtre de l'éditeur de chansons](/static/reference/music/play-controls.png)

## Voir aussi

[jouer](/reference/music/play),
[créer une chanson](/reference/music/create-song)

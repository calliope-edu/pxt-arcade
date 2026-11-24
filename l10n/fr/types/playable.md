# playable

L'objet de données **playable** fournit un format commun pour jouer des tons, des mélodies et des chansons. Chacune de ces sources musicales est créée de manière différente, mais elles sont toutes transformées en objets jouables afin qu'une seule méthode de lecture permette de les [jouer](/refernece/music/play).

## Sources musicales pour les objets jouables

Les blocs utilisés pour créer des sources musicales jouables sont les suivants :

### Ton

Un ton est une note de musique, ou une fréquence sonore, avec une durée. La durée est souvent définie comme la longueur d'un temps (`beat`).

```block
music.tonePlayable(262, music.beat(BeatFraction.Whole))
```

### Mélodie

Les mélodies sont une suite de notes et un tempo auquel les jouer.

```block
music.stringPlayable("D F E A E A C B ", 120)
```

### Son intégré

Un son intégré est une mélodie simple déjà composée pour toi. Tu peux choisir parmi plusieurs sons.

```block
music.melodyPlayable(music.baDing)
```

### Chanson

Les chansons sont des sources musicales complexes qui contiennent de nombreuses notes de différents instruments. Les chansons se créent dans l'éditeur de chansons.

```block
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
```

## Jouer la musique

Dans tes programmes, tu peux simplement utiliser les blocs ``||music:play||`` pour chaque objet jouable. Comme celui-ci pour un ton :

```block
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

Ou celui-ci pour une chanson :

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Exemple #example

Place 4 sources musicales jouables différentes dans un tableau. Joue-les l'une après l'autre.

```blocks
let playables = [
music.tonePlayable(262, music.beat(BeatFraction.Whole)),
music.stringPlayable("D F E A E A C B ", 120),
music.melodyPlayable(music.baDing),
music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`)
]
for (let someMusic of playables) {
    music.play(someMusic, music.PlaybackMode.UntilDone)
    pause(500)
}
```

## Voir aussi #seealso

[jouer](/reference/music/play), [ton jouable](/reference/music/tone-playable),
[chaîne jouable](/reference/music/string-playable), [mélodie jouable](/reference/music/melody-playable),
[créer une chanson](/reference/music/create-song)
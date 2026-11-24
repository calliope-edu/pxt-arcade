# jouer

Joue une chanson, une mélodie, une tonalité ou un effet sonore à partir d'une source musicale jouable.

```sig
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

La musique peut être une simple tonalité, une mélodie ou une chanson. Chacune de ces sources musicales est appelée un objet [jouable](/types/playable). Le bloc ``||music:play||`` peut prendre n'importe lequel de ces objets jouables et les jouer comme sortie sonore pour ton jeu.

La source musicale la plus simple est une **tonalité**, une note jouée pendant une certaine durée :

```block
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
```

Ensuite, il y a la **mélodie**, une série de notes jouées à une certaine vitesse, ou `tempo`. Tu peux créer ta propre mélodie ou en choisir une intégrée à jouer :

```block
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
```

L'objet jouable le plus complexe est une **chanson**. Les chansons sont composées dans l'[éditeur de chansons](/reference/music/song-editor) avec de nombreuses notes de différents instruments.

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## Paramètres

* **toPlay** : l'objet [jouable](/types/playable), ou la source musicale, à jouer.
* **playbackMode** : le mode de lecture pour la suite du programme :
>* `play until done` : joue la source musicale de **toPlay** mais attends que la musique soit terminée avant d'exécuter la partie suivante du programme.
>* `in background` : joue la source musicale de **toPlay** mais continue avec le reste du programme avant que la musique soit terminée.
>* `in background looping` : joue la source musicale de **toPlay** mais continue avec le reste du programme avant que la musique soit terminée. La musique continue de jouer et revient à la première note une fois sa durée écoulée.

### ~ hint

#### Arrête la musique !

Tu peux arrêter toute musique en cours avec le bloc ``||music:stop all sounds||``. C'est utile si **playbackMode** est réglé sur `in background looping` et que tu veux arrêter la musique pour un changement de scène ou réagir à un événement avec un autre son.

### ~

## Exemples #example

### Jouer une mélodie

Joue une courte mélodie créée dans l'éditeur de mélodies.

```blocks
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
```

### Différentes sources musicales, un seul bloc pour toutes les jouer

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

### Musique en boucle

Joue une chanson simple en arrière-plan pendant qu'un singe se déplace sur l'écran. Quand le singe touche la bulle au milieu de l'écran, arrête la chanson et joue un son d'éclatement.

```blocks
let bubble = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
monkey.setBounceOnWall(true)
monkey.x = scene.screenWidth()
monkey.setVelocity(50, 40)
music.play(music.stringPlayable("C5 A B G A F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, autreSprite) {
    music.stopAllSounds()
    sprites.destroy(sprite, effects.blizzard, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
```
### Jouer un effet sonore

Joue un effet sonore à onde sinusoïdale pendant `5` secondes.

```blocks
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
```

## Voir aussi #seealso

[tonalité jouable](/reference/music/tone-playable),
[chaîne jouable](/reference/music/string-playable),
[mélodie jouable](/reference/music/melody-playable),
[créer une chanson](/reference/music/create-song),
[arrêter tous les sons](/reference/music/stop-all-sounds),
[éditeur de chansons](/reference/music/song-editor),
[créer un effet sonore](/reference/music/create-sound-effect)
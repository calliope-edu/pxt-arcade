# La plus courte des histoires
### @explicitHints true


## {Introduction @showdialog}

Utilisons ce que nous avons appris pour créer une petite histoire à partager avec ta famille et tes amis.

![Voici l'histoire](/static/skillmap/story/story4.gif "Exemple d'une page de notre histoire." )


## {Étape 2}

Avant de commencer cette leçon, tu as besoin d'une histoire à raconter.

Tu peux écrire ta propre histoire ou utiliser celle-ci :

[**_Clique ici pour copier des lignes de notre histoire._**](#doc:/skillmap/story/story-example "Copie ici des lignes de notre histoire.")





## {Étape 3}


Tu as ton histoire ?

**Crée ta première page !**  <br/>
📚 📖 📚

---

- :tree:  Dans ``||scene:Scène||``, place
```block
scene.setBackgroundImage(img`.`)
```
dans le conteneur **vide**<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


- :paint brush:  **Clique sur la case d'image vide** pour dessiner la première image de ton histoire.

💡 _Tu n'as pas d'idée d'histoire ? Tu peux utiliser un de nos arrière-plans._


#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(img`
9 9 9 9
9 9 9 9
7 7 7 7
`)
```




## {Étape 4}

**Regarde l'écran de jeu.**

- :binoculars: À quoi ressemble ton arrière-plan ? Où veux-tu placer le texte ? En haut ? Au milieu ? En bas ?




## {Étape 5}

**✨ Super ✨**

Laisse au lecteur le temps d'admirer ton dessin avant de le recouvrir de texte.

- :redo:  Dans ``||loops: Boucles||``, fais glisser
```block
pause(1000)
```
**à la fin** du conteneur <br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer:  Ce bloc de pause arrête le programme pendant 1 seconde (1000 ms) avant de passer à la ligne suivante. Si tu veux plus de temps, tu peux mettre un nombre plus grand.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
// @highlight
pause(1000)

```

## {Étape 6}

Ajoute ta première page de texte.

---


- :circle:  Dans ``||game:Jeu||``, fais glisser
```block
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```
**à la fin** du conteneur <br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Remplace le texte par la première ligne de ton histoire. Tu peux aussi changer la position de ton texte de ``||game(noclick):bas||`` vers une autre zone de l'écran.


💡 _Tu as trouvé dans un autre niveau une autre façon d'ajouter du texte que tu préfères ? N'hésite pas à l'utiliser !_




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
//@highlight
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```


## {Étape 7}

**Fais une autre page !**

Ajoute un autre groupe de blocs avec une nouvelle image et une nouvelle ligne de ton histoire.

---

- :mouse pointer:  Continue d'ajouter des groupes de blocs jusqu'à la fin.
```block
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Next door...", DialogLayout.Bottom)
```

💡 _Tu n'es pas obligé d'ajouter les blocs toujours dans le même ordre. Tu veux montrer des images sans texte ? Changer le texte sans changer l'image ? Amuse-toi et vois ce qui te plaît !_


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Once upon a time, there was a lizard who lived beneath a toadstool.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Next door, there lived a butterfly on a daisy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Every day, the butterfly would sweep past and taunt the lizard from the sky.", DialogLayout.Bottom)
    game.showLongText("\"Ha ha!\" He would say. \"Your house doesn't smell as good as mine.\"", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    game.showLongText("She tried and tried, but she just couldn't get comfortable.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("No matter what she did, the fragrant flower didn't make her happy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("The next day, the lizard moved back to her toadstool and lived happily ever after.", DialogLayout.Bottom)
    })
```


## {Étape 8}

**Regarde ce que tu as fait.**

- :binoculars: N'oublie pas de parcourir ton histoire pendant que tu la construis, pour vérifier que le rythme est bon.




## {Étape 9}

**Besoin de plus d'action ?**<br/>
🎥 🎥 🎥

Tu peux utiliser ce que tu as appris au niveau précédent pour ajouter des sprites à ton histoire.

---

- :paper plane:  Dans ``||sprites:Sprites||``, prends
```block
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```
et place-le dans le conteneur <br/>
``||loops(noclick):au démarrage||``<br/>
là où il convient le mieux à ton histoire.


- :mouse pointer: Choisis ton sprite, puis explore la catégorie ``||sprites:Sprites||`` pour trouver d'autres blocs qui
te permettent de placer ton sprite exactement où tu veux ou de le faire bouger.




#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    //@highlight
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
    //@highlight
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)

```




## {Étape 10}

**👏 Ils vécurent heureux 👏**

Tu veux terminer ton histoire de façon spéciale ?

---

- :tree:  Dans ``||scene:Scène||``, prends
```block
effects.confetti.startScreenEffect()
```
et place-le **à la fin** du conteneur <br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer:  Remplace **confetti** par ce qui convient le mieux à ton histoire !


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    //@highlight
    effects.bubbles.startScreenEffect()

```


## {Étape 10}

**🎹 Effets sonores 🎹**

Ton histoire a-t-elle besoin d'une bande-son ?

---

- :mouse pointer:  Dans ``||music:Musique||``, prends n'importe quel bloc <br/>
``||music: jouer [ ]||`` <br/>
et ajoute-le à ton projet.


- :mouse pointer:  Essaie différents sons et différents emplacements pour obtenir le plus grand effet.

#### ~ tutorialhint

```blocks
    //@highlight
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    effects.bubbles.startScreenEffect()
})
```


## {Terminé}

**🤣 Bravo 🤣**

Tu as écrit une histoire dont tu peux être fier !


~hint Comment partager mon histoire ?💡

---

**Tu veux partager ton projet ?**

Clique sur "Terminé" pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ta carte](/static/skillmap/assets/share.gif )

hint~


Quand tu as fini de lire ton histoire, clique sur **Terminé** pour revenir à la page principale, où tu pourras la partager avec tout le monde !

```blockconfig.global
pause(1000)
let mySprite: Sprite = null
carnival.addLabelTo(" ", carnival.Areas.Top)
game.showLongText("Once upon a time...", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
mySprite.setFlag(SpriteFlag.StayInScreen, true)

```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
arcade-storytelling=github:microsoft/arcade-storytelling/
arcade-animations=github:microsoft/arcade-character-animations
short-story-assets-2=github:kiki-lee/short-story-assets-2#v0.0.5
short-story-assets-1=github:kiki-lee/short-story-assets-1#v0.0.6
```

```ghost
music.stopAllSounds()
scene.setBackgroundColor(1)
pauseUntil(() => controller.anyButton.isPressed())
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Once upon a time", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSong(hexhex`00780004080200`), music.PlaybackMode.InBackground)
let mySprite = sprites.create(img`.`, SpriteKind.Player)
story.printText(":)", 0, 0)
story.startCutscene(function () {
    story.spriteSayText(mySprite, ":)")
})
story.setPagePauseLength(1000, 1000)
story.printCharacterText("")
story.setSoundEnabled(false)
mySprite.sayText(" ")
game.splash("")
game.showLongText("", DialogLayout.Bottom)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Top)
mySprite.setPosition(0, 0)
story.cancelCurrentCutscene()
story.cancelSpriteMovement(mySprite)
story.spriteMoveToLocation(mySprite, 0, 0, 100)
music.setVolume(20)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
    animation.runImageAnimation(
mySprite,
[img`.`],
100,
true
)

characterAnimations.loopFrames(
mySprite,
[img`.`],
500,
characterAnimations.rule(Predicate.NotMoving)
)

mySprite.startEffect(effects.spray)
mySprite.setImage(img`.`)
scene.cameraShake(4, 500)
mySprite.setVelocity(-20, 0)
mySprite.x = 0
mySprite.setFlag(SpriteFlag.StayInScreen, false)
```

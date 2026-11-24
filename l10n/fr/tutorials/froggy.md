# Le temps file
### @explicitHints true

## {Introduction @showdialog}

Es-tu prêt à programmer un petit jeu amusant avec un chrono ?

C'est parti !

![Image animée d'une grenouille qui essaie d'attraper une mouche](/static/tutorials/froggy/frog.gif "Peux-tu aider la grenouille à attraper la mouche ?" )


## {2. Ajouter un arrière-plan}

**Avant d'ajouter une grenouille, il lui faut un endroit où s'asseoir 🐸**

---

- :tree: Dans la catégorie ``||scene:Scène||``, prends<br/>
``||scene: définir image d'arrière-plan à [ ]||``<br/>
et emboîte-le dans le conteneur<br/>
``||loops(noclick):au démarrage||`` qui se trouve déjà dans l'espace de travail.

~hint Tu veux autre chose ?💡

---

Si tu ne veux pas utiliser l'arrière-plan proposé, clique sur l'image
pour dessiner quelque chose de nouveau. Ou passe à l'onglet **Galerie** en haut
et choisis un arrière-plan déjà prêt.

hint~

- :mouse pointer: Clique sur **Suivant** quand tu es prêt pour la consigne suivante.

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(flies_imgs.background)
```

## {3. Ajouter un sprite}

**C'est l'heure d'un héros !**

---

- :paper plane: Dans ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||variables(sprites):définir [frog] à sprite [ ] de type [Player]||``<br/>
à **la fin** du conteneur<br/>
``||loops(noclick):au démarrage||``.

~hint Tu ne veux pas de cette grenouille ?💡

---

Si tu ne veux pas utiliser notre grenouille, clique sur l'image de la grenouille dans l'espace de travail
pour dessiner quelque chose de nouveau. Ou passe à l'onglet **Galerie** et
choisis autre chose.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(flies_imgs.background)
//@highlight
let frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
```

## {4. Essaie-le}

**Regarde ta fenêtre de jeu en bas à droite.**

---

Ta grenouille est-elle là où tu veux ? Sinon, tu pourras changer ça à l'étape suivante.


## {5. Définir la position}

- :paper plane: Si l'endroit où ton sprite est apparu ne te plaît pas, emboîte un bloc<br/>
``||sprites:définir la position de [frog] à x [80] y [60]||``<br/>
à la **fin** du conteneur<br/>
``||loops(noclick):au démarrage||``.


- :mouse pointer: Essaie différentes valeurs pour **x** (horizontal) et/ou **y** (vertical) jusqu'à ce que ton sprite apparaisse là où tu veux.


```validation.local
# BlocksExistValidator
* Enabled: false
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
//@highlight
frog.setPosition(85, 80)
```

## {6. Ajouter une mouche}

**😋 C'est l'heure du goûter** <br/>
La grenouille a besoin de manger.

---

- :paper plane: Emboîte un bloc <br/>
``||variables(sprites):définir [fly] à sprite [ ] de type [Food]||``<br/>
à la **fin** du conteneur<br/>
``||loops(noclick):au démarrage||``.


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
//@highlight
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {7. Mets-la en mouvement}

**😴 Ce n'est pas un défi si la mouche reste juste posée là**

---

- :paper plane: Pour que la mouche bouge, emboîte un bloc <br/>
``||sprites:définir la vitesse de [fly] à vx [200] vy [100]||`` <br/>
à la **fin** du conteneur <br/>
``||loops(noclick):au démarrage||``.

_💡 Tu peux régler la vitesse et la direction de ta mouche avec ces nombres.
Tout ce qui est entre 100 et 200 est amusant._


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
//@highlight
fly.setVelocity(200, 100)
```



## {8. Essaie-le}

**👀 Essaie encore ton jeu**

---

Est-ce qu'il fait ce que tu attendais ? La mouche a-t-elle quitté l'écran trop vite pour que tu la voies ?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {9. Rebondir}

**🕐 Ça n'a pas duré longtemps**

Pour que la grenouille ait une vraie chance, la mouche doit rester à l'écran.

---

- :paper plane: Dans ``||sprites:Sprites||``, prends un bloc <br/>
``||sprites:définir [fly] rebondir sur mur <activé>||`` <br/>
et emboîte-le à la **fin** du conteneur <br/>
``||loops(noclick):au démarrage||``. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
//@highlight
fly.setBounceOnWall(true)
```


## {10. Appuie sur le bouton}

**Nous voulons appuyer sur le bouton pour attraper la mouche !**

---

- :game: Dans ``||controller:Contrôleur||``, fais glisser le bloc <br/>
``||controller:quand bouton [A] est [appuyé]||`` <br/>
vers **un endroit libre** de l'espace de travail. <br/>

- :random: Dans le nouveau conteneur<br/>
``||controller(noclick):quand bouton [A] est [appuyé]||``,<br/>
 place un bloc<br/>
``||logic:si <vrai> alors / sinon||``<br/>
(de la catégorie ``||logic:Logique||``).


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    if (true) {
    } else {
    }
})
```

## {11. Attrapée ?}

- :paper plane: Dans ``||sprites:Sprites||``, prends le bloc <br/>
``||sprites:<[frog] chevauche avec [fly]>||`` <br/>
et mets-le à la place de **`<true>`** dans le bloc <br/>
``||logic(noclick):si <vrai> alors / sinon||``. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
if (frog.overlapsWith(fly)) {
    } else {
    }
})
```


## {12. Chercher les mouches}

Quand on appuie sur le bouton Ⓐ, deux choses peuvent se passer :
1. La mouche chevauche la grenouille et on gagne la partie avec un goûter
2. La mouche ne chevauche pas la grenouille et notre joueur perd une vie

---

- :circle: Pour le premier cas, fais glisser<br/>
``||game:jeu terminé <GAGNER>||``<br/>
dans la partie du haut du bloc<br/>
``||logic:si <frog chevauche avec fly> alors / sinon||``.

- :id card: Pour le second cas, fais glisser<br/>
``||info:modifier la vie de -1||``<br/>
dans la partie du bas (**sinon**) du bloc<br/>
``||logic:si <frog chevauche avec fly> alors / sinon||``.

~hint Je ne vois pas de partie (sinon) 🤷🏽‍♀️

---

Il existe deux sortes de conteneurs <br/>
``||logic(noclick):si <vrai>||``<br/>
parmi lesquels tu peux choisir :
```block
if (true) {
    } 
```
ou
```block
if (true) {
    } else {
    }
```

Si tu vois le premier, clique sur le signe plus blanc **(+)** en bas,
et il se transforme en second.


hint~


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        //@highlight
        game.gameOver(true)
    } else {
        //@highlight
        info.changeLifeBy(-1)
    }
})
```


## {Étape 13}

**👀 Essaie ton jeu dans le simulateur**

---

Qu'en penses-tu ? Perds-tu une vie si la mouche n'est pas sur la grenouille quand tu appuies sur (A) ? Gagnes-tu la partie si elle y est ?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {Étape 14}

**⌚ Ne sois pas en retard**

Rends le jeu plus palpitant en ajoutant un compte à rebours.

---

- :id card:  Dans ``||info:Info||``, prends le bloc<br/>
``||info:démarrer compte à rebours [10] (s)||``<br/>
et fais-le glisser à la fin du conteneur<br/>
``||loops:au démarrage||``.<br/>

Maintenant, tu as exactement 10 secondes pour attraper la mouche avant la fin du jeu !


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)
//@highlight
info.startCountdown(10)

```



## {Étape 15}

**🎉 Félicitations**

---

Tu as créé un jeu qui teste ton sens du timing !

Quand tu as fini de programmer, clique sur **Terminé** pour le partager avec ta famille et tes amis, ou
regarde les défis ci-dessous pour modifier ton jeu.

---

- :question:  Ajoute un bloc qui change le nombre de vies avec lesquelles tu commences.

- :question:  Au lieu d'une mouche, commence avec trois et fais-en disparaître une chaque fois que tu perds une vie.

- :question:  Change le thème : au lieu d'une grenouille qui attrape des mouches, invente quelque chose de complètement différent !


```validation.global
# BlocksExistValidator
```

```blockconfig.global
let fly: Sprite = null
let frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(80, 60)
info.startCountdown(10)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)
scene.setBackgroundImage(flies_imgs.background)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
frog.overlapsWith(fly)
if (false) { } else { }
game.gameOver(true)

let list = sprites.allOfKind(SpriteKind.Food)
list.pop().destroy()
for (let index = 0; index <= 4; index++) {

}
for (let index = 0; index < 4; index++) {

}
```


```package
flies_imgs=github:kiki-lee/flies_imgs#v0.0.3
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        game.gameOver(true)
    } else {
        info.changeLifeBy(-1)
    }
})
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
info.startCountdown(10)
info.setLife(3)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)

list = sprites.allOfKind(SpriteKind.Food)
    list.pop().destroy()
    for (let index = 0; index <= 4; index++) {

    }
    for (let index = 0; index < 4; index++) {

    }
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041e0000000400012a04000800012708000c00012410001400012218001c000120`), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)

```

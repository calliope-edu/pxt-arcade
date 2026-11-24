# Découvrir MakeCode Arcade
### @explicitHints true
### @hideDone true

## {Introduction @unplugged}

![Singe surexcité](/static/skillmap/interface/monkey.png "Le singe surexcité est prêt !" )

**Es-tu prêt à programmer tes propres jeux ?**

Termine ce tutoriel pour découvrir comment :
- suivre les consignes d'un tutoriel
- trouver des blocs dans la boîte à outils
- construire du code dans l'espace de travail
- lancer ton projet sur l'écran de jeu intégré

En un rien de temps, tu auras ton propre jeu d'arcade !


## {Étape 1}

**⭐Bienvenue⭐**

Tu viens de découvrir la partie la plus importante d'un tutoriel : **lire les consignes** !

- :info: Parfois, tu devras faire défiler pour lire toutes les consignes.

- :arrow right: Quand tu es prêt à passer à l'étape suivante, clique sur **Suivant** pour continuer.



## {Étape 2}

Nous aimons cacher des infos supplémentaires dans des « boîtes à indices » pour raccourcir les consignes.

- :mouse pointer: Clique sur la boîte à indices ci-dessous pour voir ce qu'elle contient.

~hint Clique ici pour voir un indice 🕵🏽

---

**Félicitations !**

Tu as trouvé un indice !

hint~


Parfois, nous te montrons les blocs conseillés pour une étape.

- :mouse pointer: Clique sur le bouton rond en forme d'ampoule ci-dessous pour voir un exemple.




#### ~ tutorialhint
```blocks
game.splash("You found me!")
```



## {Utiliser l'espace de travail}

Ton [__*espace de travail*__](#workIt "La zone où tu construis ton code")
est la zone où tu assembles les blocs de code pour créer ton programme.

---

- :mouse pointer:  Clique dans le bloc ``||game(noclick):splash " "||`` qui est déjà dans l'espace de travail
et **change la phrase** pour quelque chose de plus excitant.

~hint C'est quoi, l'espace de travail ? 🕵🏽

---

![L'espace de travail](/static/tutorials/interface/workspace.png " " )

L'**espace de travail** est la zone à droite de la boîte à outils où tu construis ton programme.

Seuls les blocs assemblés dans l'espace de travail sont exécutés par l'ordinateur.

hint~


#### ~ tutorialhint
```blocks
game.splash("I like bananas!")
```


## Découvre les blocs  @showdialog

Tu peux faire glisser les blocs depuis la  [__*boîte à outils*__](#tools "La bande à gauche de ton espace de travail qui contient les catégories de blocs."), <br/>
les assembler, les dupliquer et les supprimer.

Continue pour en apprendre plus sur les blocs.

![Animation des blocs](/static/skillmap/interface/use_blocks.gif "Les blocs apparaissent, sont dupliqués et supprimés." )



## {Ta boîte à outils}

**Les blocs ne sont pas toujours déjà dans l'espace de travail.**

Quand tu dois ajouter un bloc, nous te le proposons soit avec une image comme celle-ci :
```block
game.splash(" ")
```
soit avec un texte en surbrillance, comme ceci :<br/>
 ``||game:splash " "||``<br/>



~hint Tu veux voir un truc génial ? 🕵🏽

---

Quand tu dois trouver un bloc dans la boîte à outils et que la consigne utilise un texte en surbrillance, tu peux cliquer sur la partie colorée du texte : la bonne catégorie de la boîte à outils s'ouvre automatiquement.

Essaie tout de suite en cliquant sur le bloc ci-dessous !<br/>

``||game:splash " "||``<br/>

hint~



## {Ta boîte à outils 2}

**Voyons comment ça marche**

- :tree:  Trouve le bloc<br/>
``||scene:définir couleur d'arrière-plan à [ ]||``<br/>
et place-le **tout en haut** du
conteneur<br/>
``||loops(noclick):au démarrage||``<br/>
qui est déjà dans l'espace de travail.

- :paint brush:  Clique sur le carré vide pour choisir ta couleur préférée comme arrière-plan.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {L'exception}

Si tu ne trouves pas le bloc dont tu as besoin, clique sur le texte en surbrillance et la bonne catégorie s'ouvrira pour toi.

- :paper plane:  Place
<br/>``||variables(sprites):définir [my sprite] à sprite [ ] de type [Player]||``<br/>
**à la fin** du conteneur <br/>
``||loops(noclick):au démarrage||``.


- :paint brush:  Clique sur la case vide pour dessiner un [__*sprite*__](#sprote "Une image en 2D qui se déplace à l'écran")
 ou passe à la **Galerie** pour choisir l'un des nôtres.


 ~hint C'est quoi, un sprite ? 🕵🏽

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier : la taille, la position et la durée de vie sont toutes des propriétés des sprites.

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(5)
game.splash("My monkey is better than yours")
let monSprite = sprites.create(img`
. . . . . f f f f f . . . . . .
. . . . f e e e e e f . . . . .
. . . f d d d d d d e f . . . .
. . f d f f d d f f d f f . . .
. c d d d e e d d d d e d f . .
. c d c d d d d c d d e f f . .
. c d d c c c c d d d e f f f f
. . c d d d d d d d e f f b d f
. . . c d d d d e e f f f d d f
. . . . f f f e e f e e e f f f
. . . . f e e e e e e e f f f .
. . . f e e e e e e f f f e f .
. . f f e e e e f f f f f e f .
. f b d f e e f b b f f f e f .
. f d d f f f f d d b f f f f .
. f f f f f f f f f f f f f . .
`, SpriteKind.Player)


```




## {Fenêtre de jeu}

Pense à regarder régulièrement ta [__*fenêtre de jeu*__](#gamez "simulateur de jeu qui montre le résultat du code que tu as écrit") au fur et à mesure.

- :binoculars: Jette un œil à la fenêtre de jeu. <br/>
Vois-tu un message qu'il faut fermer ? Et ensuite, vois-tu le sprite que tu as choisi ?


![Cherche la fenêtre de jeu en bas à droite](/static/skillmap/assets/game-window.png "Clique sur la mini fenêtre de jeu pour ouvrir la grande fenêtre de jeu.")






## Blocs conteneurs  @showdialog

Voici un [__*bloc conteneur*__](#blockIt "Bloc qui contient d'autres blocs").


Les blocs conteneurs ont un bord plat en haut et en bas, avec un espace ouvert
au milieu où d'autres blocs viennent se placer. Les blocs conteneurs décident quand le code à l'intérieur s'exécute.

Voici un exemple :

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
```

_(Ce bloc exécute du code quand on appuie sur le bouton A.)_





## {Utiliser un bloc conteneur}

- :game:   Trouve le conteneur<br/>
``||controller:quand bouton [A] est appuyé ||`` <br/>
et fais-le glisser dans **une zone vide de** l'espace de travail.



#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let monSprite: Sprite = null
})
```



## Blocs standard  @showdialog

Ensuite, il y a les [__*blocs standard*__](#sBlockIt "Blocs d'une seule ligne qui forment la plus grande partie de la plupart des programmes").

Les blocs standard sont des blocs d'une seule ligne avec des encoches en haut et en bas qui
leur permettent de s'accrocher à d'autres pièces. Ces blocs s'exécutent dans l'ordre, de haut
en bas, dans le conteneur où ils sont placés.

Voici un exemple de bloc standard :

```block
let monSprite: Sprite = null;
monSprite.startEffect(effects.spray)
```

_(Ce bloc fait jaillir de l'eau depuis le centre de ton sprite.)_




## {Blocs standard 2}

- :paper plane:   Trouve un bloc <br/>
``||sprites:[monSprite] commencer effet [spray] ⊕||``<br/>
et place-le dans le conteneur  <br/>
``||controller(noclick):quand bouton [A] est appuyé||``<br/>
qui est déjà dans ton espace de travail… puis choisis un nouvel effet !

- :mouse pointer:   Clique sur le **+** à droite du nouveau bloc pour faire apparaître une
option supplémentaire.



#### ~ tutorialhint
```blocks
let monSprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    monSprite.startEffect(effects.confetti, 500)
})
```



## Blocs de valeur  @showdialog

Enfin, il y a les [__*blocs de valeur*__](#aBlockIt "pièces spéciales qui fournissent des valeurs aux autres blocs").
Les blocs de valeur sont des pièces spéciales qui ajoutent des informations à d'autres
blocs. Parfois ils sont pointus, parfois arrondis,
mais ils ont toujours besoin d'un autre bloc dans lequel se placer. Les blocs de valeur ressemblent à ça :

![Blocs de valeur](/static/skillmap/interface/parameter-blocks.png "Voici à quoi ressemble la forme d'un bloc de valeur" )

_💡 Les blocs de valeur ont des formes différentes
selon le type d'information qu'ils ajoutent. Chaque valeur ne rentre
que dans certains types d'emplacements._




## {Blocs de valeur 2}


- :calculator:   Dans la catégorie ``||math:Maths||``, prends un bloc de valeur <br/>
``||math: choisir aléatoirement entre [0] et [10]||``<br/>
et place-le à la place de **500**.

- :mouse pointer:   Change la plage aléatoire pour choisir entre **100** et **600**.



#### ~ tutorialhint
```blocks
let monSprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
  monSprite.startEffect(effects.confetti, randint(100,600))
}
```






## {À toi de jouer}

**🕹️ C'est l'heure de jouer 🕹️**

- :binoculars: Jette un œil à la fenêtre de jeu. <br/>

Clique sur le bouton **Ⓐ** (ou la barre d'espace) pour fermer ton message d'accueil.

Clique encore et encore sur **Ⓐ** pour voir tes effets !





## {Tout assembler}

**🎨 Maintenant, sois créatif 🎨**

Jette un œil à tous les autres blocs de la boîte à outils.

Ce n'est pas grave si tu ne sais pas à quoi ils servent tous.
Amuse-toi avec eux pour voir ce qui se passe !

---

_💡 Teste ton jeu toutes les deux ou trois étapes pour vérifier
qu'il se comporte comme tu le veux !_




## {Terminé @unplugged}

**🎈 Félicitations 🎈**

Tu as terminé le tutoriel **« Découvrir MakeCode Arcade »** !<br/>
Tu es maintenant prêt à créer des choses incroyables dans Microsoft MakeCode Arcade.

---

Que veux-tu faire ensuite ? 

|      |      |      |       |      |
|:----:|--|:----:|--|:----:|
| [![Skillmap](/static/tutorials/interface/skillmap.png)](--skillmap#docs:/skillmap/dino) | &emsp;&emsp; | [![Tutorial1](/static/tutorials/interface/tutorial.png)](#tutorial:/tutorials/turkey-jr) | &emsp;&emsp; | [![Retour à l'accueil](/static/tutorials/interface/home.png)](/) |
| [**Essaie une skillmap**](--skillmap#docs:/skillmap/dino) | | [**Nouveau tutoriel**](#tutorial:/tutorials/chase-the-pizza) | | [**Retour à l'accueil**](/) | |



```ghost
let monSprite: Sprite = null;
monSprite.startEffect(effects.spray)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("The little unicorn walked into the meadow.", DialogLayout.Top)
    scene.cameraShake(4, 500)
})
scene.setBackgroundColor(9)
scene.setBackgroundImage()
monSprite.x += 0
effects.confetti.startScreenEffect()
effects.confetti.endScreenEffect()
monSprite.setPosition(70, randint(100, 600))
for (let index = 0; index < 4; index++) {
    controller.moveSprite(monSprite)
    music.setVolume(20)
    music.playMelody("- - - - - - - - ", 120)
}
game.onUpdateInterval(5000, function () {
    if (game.askForString("Continue?") == "Y" || game.askForString("Continue?") == "y") {
        monSprite.say(":)")
    }
    game.splash("")
})
music.setVolume(20)

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`into_forever_album_cover`)
    thisSong = music.createSong(assets.song`into_the_forever`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(thisSong, music.PlaybackMode.LoopingInBackground)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`perfect_society_album_cover`)
    thisSong = music.createSong(assets.song`perfectSociety`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`once_more_album_art`)
    thisSong = music.createSong(assets.song`once_more`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`i_am_groot_album_cover`)
    thisSong = music.createSong(assets.song`i_am_groot`)
})
let thisSong: music.Playable = null
scene.setBackgroundImage(assets.image`Zune`)

    if (thisSong) {
        music.play(thisSong, music.PlaybackMode.LoopingInBackground)
    }
```


```template
game.splash("These blocks are in your workspace!")

```
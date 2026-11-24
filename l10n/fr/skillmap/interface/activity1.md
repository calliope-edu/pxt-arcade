# Découvre MakeCode Arcade


## {Introduction @unplugged}
### @explicitHints true

![Singe enthousiaste](/static/skillmap/interface/monkey.png "Le singe enthousiaste est prêt !" )

**Es-tu prêt à programmer tes propres jeux ?**

Dans ce tutoriel, tu vas apprendre à :
- suivre les consignes du tutoriel
- trouver des blocs dans la boîte à outils
- assembler du code dans l'espace de travail
- lancer ton projet sur l'écran de jeu intégré

Avant même de t'en rendre compte, tu auras ton propre jeu d'arcade !

## {Étape 1}

**⭐Bienvenue⭐**

Tu viens de découvrir la partie la plus importante d'un tutoriel : lire les consignes !

Parfois, les consignes sont longues et tu dois faire défiler pour tout lire.

_💡 Quand tu es prêt à passer à l'étape suivante, clique sur **[Suivant]** pour continuer._



## {Étape 2}

C'est dans cette zone que tu trouveras les informations de chaque étape.

Si tu ne trouves pas toutes les infos dont tu as besoin,
clique sur le bouton avec l'ampoule pour obtenir un indice supplémentaire.


#### ~ tutorialhint
```
You found the hints!
```


## {Utiliser l'espace de travail}

Ton [__*espace de travail*__](#workIt "La zone où tu construis ton code")
est la zone où tu assembles les blocs de code pour créer ton programme.

---

- :mouse pointer:  Clique dans le bloc ``||game:splash " "||`` qui se trouve déjà dans l'espace de travail
et remplace la phrase prévue par quelque chose de plus excitant.

_💡 As-tu remarqué que les mots __espace de travail__ dans la première phrase
avaient un aspect spécial ? Passe ta souris dessus pour voir une définition._

#### ~ tutorialhint
```blocks
game.splash("I like bananas!")
```


## {Découvre les blocs  @unplugged}

Les blocs peuvent être tirés de la [__*boîte à outils*__](#tools "La bande à gauche de ton espace de travail qui liste les catégories de blocs."),

assemblés, dupliqués et supprimés.

Continue pour en apprendre plus sur les blocs.

![Animation de blocs](/static/skillmap/interface/use_blocks.gif "Des blocs apparaissent, sont dupliqués et supprimés." )



## {Ta boîte à outils}

**Les blocs dont tu as besoin ne seront pas toujours déjà dans l'espace de travail.**

Dans les consignes, la description du bloc dont tu as besoin
est souvent surlignée de la même couleur que la catégorie
de la boîte à outils où il se trouve.

**Par exemple :** nous écrirons ``||game:splash " "||`` quand
nous voulons que tu trouves ceci :

```block
game.splash(" ")
```

Ce bloc ajoute un [__*écran d'accueil*__](#splasht "Un message plein écran qui s'affiche pendant le chargement d'un programme ou d'un niveau") à ton projet.


## {Ta boîte à outils 2}

**Voyons comment ça marche**

- :tree:  Trouve le bloc
``||scene:définir couleur d'arrière-plan à [ ]||`` et emboîte-le tout en haut
du conteneur **au démarrage** qui est déjà dans l'espace de travail.

- :paint brush:  Clique sur la case grise du nouveau bloc pour choisir ta couleur d'arrière-plan préférée.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {L'exception}

Toute règle a son exception : regardons donc un bloc
qui n'a pas la couleur de sa catégorie.

Le bloc ``||variables(sprites):définir [monSprite] à sprite [ ] de type [Player]||``
est rouge, mais il se trouve dans la catégorie ``||sprites:Sprites||``.

Dans ce cas, tu peux regarder les bulles à gauche des consignes pour voir l'icône de la catégorie où trouver le bloc.

- :paper plane:  Emboîte ``||variables(sprites):définir [my sprite] à sprite [ ] de type [Player]||`` à la
fin du conteneur **au démarrage**.

- :paint brush:  Clique sur la case grise du nouveau bloc et dessine un [__*sprite*__](#sprote "Une image 2D qui se déplace à l'écran") pour ton personnage principal
 ou passe à la **Galerie** pour en choisir un des nôtres.


#### ~ tutorialhint

![Ouvrir l'éditeur d'images](/static/skillmap/misc/open-image-editor-small.gif "Comment ouvrir l'éditeur d'images." )

---



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


## {Blocs conteneurs}

**Regardons maintenant les différents types de blocs et comment les utiliser.**

Voici un [__*bloc conteneur*__](#blockIt "Un bloc qui contient d'autres blocs").
Les blocs conteneurs ont un bord plat en haut et en bas, avec un espace ouvert
au milieu où d'autres blocs peuvent s'emboîter. Les blocs conteneurs décident
*quand* le code qu'ils contiennent s'exécute. Voici un exemple :

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```
---

- :game:   Trouve un bloc conteneur ``||controller:quand bouton [A] est appuyé ||``
et fais-le glisser dans l'espace de travail. Tu le compléteras à l'étape suivante.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let monSprite: Sprite = null
})
```

## {Blocs standard}

Ensuite, il y a les [__*blocs standard*__](#sBlockIt "Des blocs d'une seule ligne qui forment la plus grande partie de la plupart des programmes").
Les blocs standard sont des blocs d'une seule ligne avec des encoches en haut et en bas qui
leur permettent de s'emboîter entre d'autres pièces. Ces blocs s'exécutent dans l'ordre, de haut
en bas, à l'intérieur du conteneur où ils sont placés.

Voici un exemple de bloc standard :

```block
let monSprite: Sprite = null;
monSprite.startEffect(effects.spray)
```

---

- :paper plane:   Trouve un bloc ``||sprites:[monSprite] commencer effet [spray] ⊕||``
et emboîte-le dans le conteneur ``||controller:quand bouton [A] est appuyé||``
… puis choisis ton propre effet !

- :mouse pointer:   Clique sur le **⊕** à droite du nouveau bloc pour faire apparaître un
[__*argument*__](#iArgue "Une information supplémentaire utilisée par le bloc") de plus.

#### ~ tutorialhint
```blocks
let monSprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    monSprite.startEffect(effects.confetti, 500)
})
```



## {Blocs de valeur}

Enfin, il y a les [__*blocs de valeur*__](#aBlockIt "Des pièces spéciales qui fournissent des valeurs à d'autres blocs").
Les blocs de valeur sont des pièces spéciales qui ajoutent des informations à d'autres
blocs. Parfois pointus, parfois arrondis,
ils ont toujours besoin d'un autre bloc dans lequel s'emboîter. Les blocs de valeur ressemblent à ceci :

![Blocs de valeur](/static/skillmap/interface/parameter-blocks.png "Voici la forme d'un bloc de valeur" )

---

- :calculator:   Dans la catégorie ``||math:Maths||``, prends un bloc de valeur ``||math: choisir aléatoirement entre [0] et [10]||``
et emboîte-le dans le champ numérique du bloc d'effet.

- :mouse pointer:   Modifie l'intervalle aléatoire pour choisir entre **100** et **600**.

---

_💡 Les blocs de valeur ont des formes différentes
selon le type d'information qu'ils ajoutent. Chaque valeur ne
rentre que dans certains types d'emplacements._

#### ~ tutorialhint
```blocks
let monSprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    monSprite.startEffect(effects.confetti, randint(100,600))
}
```



## {À toi de jouer}

**🕹️ C'est l'heure de jouer 🕹️**

Regarde la fenêtre de jeu.


Clique sur le bouton **Ⓐ** pour fermer le message de l'écran d'accueil.
Clique encore pour lancer tes effets !





## {Tout assembler}

**🎨 Maintenant, sois créatif 🎨**

N'hésite pas à regarder les blocs supplémentaires que nous avons ajoutés dans la boîte à outils.

Ce n'est pas grave si tu ne sais pas à quoi ils servent tous.
Essaie-les et regarde comment ils changent ton jeu !

---

**Astuce :** teste ton jeu toutes les deux ou trois étapes pour vérifier
qu'il se comporte comme tu le veux !



## {Terminé}

**🎈 Félicitations 🎈**

Tu as appris tout ce qu'il faut savoir pour passer à un nouveau tutoriel.

Tu peux maintenant cliquer sur **Terminé** pour continuer et créer des jeux avec MakeCode Arcade !




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

```


```template
game.splash("These blocks are in your workspace!")

```
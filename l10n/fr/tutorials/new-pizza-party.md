# Fête de la pizza
### @explicitHints true


## Introduction à la fête de la pizza @showdialog

Es-tu prêt à programmer une fête de la pizza ?

Suis ce tutoriel et crée ta propre expérience multijoueur, à laquelle tu pourras jouer en ligne avec ta famille et tes amis !



![Jouer à la fête de la pizza](https://makecode.com/api/_h9zXUDJP47oF/thumb "Tu peux jouer jusqu'à 4 personnes !")





## {2. Ton premier bloc}

**Fais connaissance avec les personnages !**

Nous avons déjà chargé les images de tous les personnages dans un tableau.

Comme ça, le programme sait quelle image
il doit donner à chaque joueur.


~hint C'est quoi, un tableau ?🕵🏽

---

En informatique, un **TABLEAU** (array) est une liste ordonnée d'éléments.

Nous donnons un nom à cette liste pour pouvoir y retrouver des éléments plus tard.

Dans notre programme, par exemple, nous avons appelé la liste **characters**.
Si nous voulions retourner horizontalement la première image de cette liste, nous pourrions ajouter un bloc
comme celui-ci à notre programme :


```block
let characters: Image[] = []
characters[0].flipX()
```

hint~


#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
```




## {3. Place à la scène}

**Choisissons où se déroule le jeu.**

- :tree: Ouvre la catégorie ``||scene:Scène||`` et fais glisser <br/>
``||scene:définir image d'arrière-plan à [ ]||``<br/>
**à la fin** du conteneur<br/>
``||loops(noclick): au démarrage||`` <br/>
déjà présent dans l'espace de travail.

💡 _Si tu veux un autre arrière-plan, clique sur l'image dans le bloc et choisis-en une nouvelle dans la **Galerie**._




#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]

//@highlight
scene.setBackgroundImage(newpizzaassets.city)
```




## {4. Définir les joueurs}

**Ajoute le joueur 1**

- :suitcase: Ouvre la catégorie ``||pizza:Pizza||`` et fais glisser <br/>
``||pizza:définir le jeu pour [1] joueur(s) avec [characters]||``<br/>
**à la fin** du conteneur<br/>
``||loops(noclick): au démarrage||`` <br/>
déjà présent dans l'espace de travail.


~hint Une catégorie Pizza ? 🍕

---

Dans certains tutoriels, tu vois des catégories spéciales qui n'existent pas dans l'interface normale. Ces catégories sont des **extensions**.

Tout le monde peut créer des blocs spéciaux que d'autres peuvent ajouter à leur boîte à outils comme extension. Comme on ne peut pas accéder à la galerie des **Extensions** depuis un tutoriel, les catégories dont tu as besoin sont déjà dans la boîte à outils.

Si un jour tu veux utiliser la catégorie ``||pizza:Pizza||`` dans un autre tutoriel, récupère le lien de partage de ce projet terminé. Tu pourras alors importer les blocs de ce tutoriel dans un autre projet !

hint~





#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
scene.setBackgroundImage(newpizzaassets.city)
//@highlight
pizza.setPlayersWith (characters, 1)
```



## {5. Teste ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir ce que fait ton code.

Tu devrais voir dans la fenêtre de jeu un seul sprite qui ressemble à la première image de ton tableau.

**Clique sur la fenêtre de jeu et essaie de déplacer ton _sprite_ avec les flèches ou le joystick.**


~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier – par exemple la taille, la position et la durée de vie.

Nos joueurs seront aussi des sprites.

hint~




## {6. Plus de joueurs}

**Ajoute d'autres joueurs.**

- :game: Depuis la catégorie ``||mp:Multijoueur||``, fais glisser le <br/>
``||mp:lorsque [thisPlayer] est [connecté]||`` <br/>
Bundle dans une zone **vide** de l'espace de travail. <br/>

Maintenant, quand d'autres joueurs rejoignent la partie, d'autres sprites apparaissent dans la fenêtre de jeu.

**Essaie en cliquant sur les icônes des joueurs à gauche de la fenêtre de jeu.**

![Tester avec les boutons des joueurs à gauche de la fenêtre de jeu](/static/tutorials/pizza-party/players1.png "Une image qui met en évidence les icônes des joueurs")



#### ~ tutorialhint

```blocks
//@highlight
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
```



## {7. Ajouter la pizza}

**Fais voler la pizza !**

- :circle: Ouvre la catégorie ``||game:Jeu||`` et fais glisser le<br/>
``||game: quand mise à jour du jeu chaque [500] ms||``<br/>
Bundle dans une zone **vide** de l'espace de travail.


- :mouse pointer: Clique sur le carré d'image dans le Bundle si tu veux choisir une autre part de pizza dans la **Galerie**.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})
```




## {8. Regarde un peu}


- :binoculars: Regarde encore une fois ton projet.

Il devrait y avoir de la pizza qui vole partout !

~hint Pourquoi ça se passe ? 🤷🏽‍♂️

---

Voyons les blocs que tu viens d'ajouter.

---

<br/>
Ce bloc d'**événement** déclenche une action toutes les 500 millisecondes. (Autrement dit, le code de ce conteneur s'exécute toutes les demi-secondes.)


```block
game.onUpdateInterval(500, function () { })
```

---

<br/>
Ce bloc lance le **projectile** de ton choix depuis le bord de l'écran – avec une **vitesse** choisie au hasard à chaque exécution.


```block
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))

```


hint~


~hint Parle-moi des événements ! 🕵🏿‍♂️

---

Les **ÉVÉNEMENTS** sont des choses qui peuvent se produire (ou pas) pendant que le code s'exécute.
Un joueur appuie peut-être sur un bouton, un minuteur arrive à zéro ou un sprite en chevauche un autre.

Dans Arcade, tu peux associer une action spéciale à chacun de ces événements.

hint~


~hint C'est quoi, des projectiles ? 🕵️

---

Dans MakeCode Arcade, les **PROJECTILES** sont des sprites qui se déplacent tout seuls,
souvent en grand nombre.

Les projectiles ont des propriétés en plus que les sprites normaux n'ont pas.
Par exemple, ils se détruisent eux-mêmes dès qu'ils quittent l'écran, pour que
l'ordinateur ne soit pas surchargé.

hint~


~hint C'est quoi, la vitesse ? 🕵🏻‍♀️

---

La **VITESSE** (en anglais velocity) indique à quelle vitesse quelque chose se déplace dans une direction donnée.

Dans MakeCode, la vitesse existe dans deux directions : **vx** et **vy**.

Le champ **vx** représente la vitesse vers la gauche et la droite.<br/>

_Vitesse selon x (horizontale)_

- Un **vx** supérieur à 0 déplace quelque chose vers la droite.
- Un **vx** inférieur à 0 déplace quelque chose vers la gauche.
- Un **vx** de 0 ne change pas la position.


Le champ **vy** représente la vitesse vers le haut et le bas.<br/>

_Vitesse selon y (verticale)_

- Un **vy** supérieur à 0 déplace quelque chose vers le bas.
- Un **vy** inférieur à 0 déplace quelque chose vers le haut.
- Un **vy** de 0 ne change pas la position.

hint~



## {9. Ajouter des points}

**Donne des points quand un joueur chevauche un projectile.**

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le<br/>
``||sprites:quand [sprite] de type [Player] chevauche...||``
<br/>Bundle dans une zone **vide** de l'espace de travail.


~hint Que fait ce Bundle ? 🤷🏽‍♂️

---

Voyons les blocs que tu viens d'ajouter.

---

<br/>
Ce bloc d'**événement** déclenche une action chaque fois qu'un de tes sprites joueurs chevauche un sprite projectile. (C'est-à-dire chaque fois qu'un personnage touche la pizza.)

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) { })
```

---

<br/>
Ce bloc détruit le sprite de pizza touché (autreSprite). En plus,
l'image reçoit au passage un effet spécial de désintégration.

```block
    sprites.destroy(autreSprite, effects.disintegrate, 100)
```


---

<br/>
Ce bloc donne un point au joueur qui a touché la pizza.

```block
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    sprites.destroy(autreSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```




## {10. Teste !}


- :binoculars: Teste ton projet !

Utilise les icônes multijoueur pour tester ton jeu avec chaque joueur.

Chaque personnage devrait gagner un point quand il touche une pizza.





## {11. Le premier à 20 gagne !}

**Le premier qui atteint 20 points gagne !**

- :users: Ouvre la catégorie ``||mp:Multijoueur||`` et fais glisser le<br/>
``||mp:lorsque le score atteint [20] pour [thisPlayer]||``
<br/>Bundle dans une zone **vide** de l'espace de travail.


~hint Que fait ce Bundle ? 🤷🏽‍♂️

---

Voyons les blocs que tu viens d'ajouter.

---

<br/>
Ce bloc d'**événement** déclenche une action dès que le score d'un joueur atteint 20. 

```block
mp.onScore(20, function (thisPlayer) { })
```

---

<br/>
Ce bloc termine immédiatement le jeu par une victoire.

```block
    game.gameOver(true)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
```





## {12. Mets de l'ambiance !}

**Mettons un peu d'ambiance !**

Rendons le jeu un peu plus palpitant : les sprites ont le droit de se bousculer.

- :group: Ouvre la catégorie ``||mp:Multijoueur||`` et fais glisser le<br/>
``||mp:lorsque le bouton [A] est [appuyé] pour [joueur]||``
<br/>Bundle dans une zone **vide** de l'espace de travail.


~hint Que fait ce Bundle ? 🤷🏽‍♂️

---

Voyons les blocs que tu viens d'ajouter.

---

<br/>
Ce bloc d'**événement** déclenche une action quand un joueur appuie sur le bouton A.

```block
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {})
```

---

<br/>
Ce bloc change le type du joueur qui a appuyé sur le bouton A en **Enemy**. Cela veut aussi dire que ce joueur ne peut plus gagner de points avec la pizza.

```block
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
```

---


hint~


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
})
```





## {13. La bousculade}

Ici, nous ajoutons le code qui retire un point à un autre joueur quand le nouvel Enemy le percute. 


- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le<br/>
``||sprites:quand [sprite] de type [Enemy] chevauche [autreSprite] de type [Player]||``
<br/>Bundle dans une zone **vide** de l'espace de travail.


~hint Que fait ce Bundle ? 🤷🏽‍♂️

---

Voyons les blocs que tu viens d'ajouter.

---

<br/>
Ce bloc d'**événement** déclenche une action quand le nouvel Enemy chevauche un Player.

```block
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {  })
```

---

<br/>
Ce code donne l'impression que la caméra tremble de 4 pixels pendant une demi-seconde.

```block
        scene.cameraShake(4, 500)
```

---

<br/>
Ce bloc retire un point au sprite du joueur.

```block
        mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
```

<br/>
Ce bloc retransforme l'Enemy en Player pour que le jeu puisse continuer.

```block
    let sprite: Sprite = null
       sprite.setKind(SpriteKind.Player)
```

---


hint~

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```

```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```





## {14. Teste !}


- :binoculars: Teste ton projet avec deux joueurs ou plus.

Clique sur le joueur vert à côté de la fenêtre de jeu, puis appuie sur le bouton (A) (ou la barre d'espace) avant de foncer dans un autre joueur. Que se passe-t-il ?


📝 _Remarque : si les deux joueurs qui se percutent appuient sur la barre d'espace (ou le bouton A), ils s'annulent et personne ne perd de points. Si tu veux de nouveau ramasser des points, tu dois foncer dans des joueurs jusqu'à ce que la caméra tremble !_


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```


## {15. À vos marques, prêts, partez}

Assure-toi que tout le monde est prêt avant que le jeu commence : ajoute au début du jeu un écran d'attente 
avec des effets sonores.

- :circle: Depuis la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game:splash ["Press (A) when everyone is"]...||`` à la fin du conteneur<br/>
``||loops(noclick): au démarrage||`` <br/>
déjà présent dans l'espace de travail.


- :headphones: Depuis la catégorie ``||music:Musique||``, fais glisser<br/>
``||music:play [song ] [until done]||`` à la fin du conteneur<br/>
``||loops(noclick): au démarrage||`` <br/>
déjà présent dans l'espace de travail.

- :mouse pointer: Clique sur le rectangle vide dans le bloc<br/>
``||music(noclick):play song...||`` et passe à **Mes ressources** pour choisir **countdown**.



```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```

#### ~ tutorialhint

```blocks
let characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
scene.setBackgroundImage(newpizzaassets.city)
pizza.setPlayersWith (characters, 1)
//@highlight
game.splash("Press (A) when everyone is", "ready to start the game")
//@highlight
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)


```





## {18. Teste}


- :binoculars: Teste ton jeu terminé.

Tu devrais pouvoir gagner des points en attrapant des pizzas. Dès que tu appuies sur le bouton (A), la pizza devrait simplement passer à côté de toi.

**Pour encore plus de fun : connecte-toi, et tu pourras jouer en ligne avec tes amis !**


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```



## {Terminé}

**🍕 Trop fort ! 🍕**

Ton expérience multijoueur est terminée !

Quand tu es prêt, connecte-toi puis clique sur **Terminé** pour lancer une partie multijoueur en ligne avec jusqu'à trois amis.

**Qui atteindra 20 points en premier ?**


```blockconfig.local
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
```


```blockconfig.global
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})

let characters: Image[] = []
pizza.setPlayersWith(characters, 1)
scene.setBackgroundImage(newpizzaassets.city)

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setKind(SpriteKind.Enemy)
})

mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    sprites.destroy(autreSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})

mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)

mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})

game.splash("Press (A) when everyone is", "ready to start the game")

```




```template
let characters: Image[] = []

characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]


```



```ghost

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setKind(SpriteKind.Enemy)
})
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    sprites.destroy(autreSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(autreSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
let projectile: Sprite = null
let characters: Image[] = []
game.splash("Press (A) when everyone is", "ready to start the game")
characters = [
assets.image`red`,
assets.image`blue`,
assets.image`orange`,
assets.image`green`
]
scene.setBackgroundImage(newpizzaassets.city)
pizza.setPlayersWith(characters, 1)
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`pep`, randint(-100, 100), randint(-100, 100))
})

```



```package
multiplayer
newpizzaassets=github:kiki-lee/new-pizza-assets#v0.0.3
```


```customts

//% color=#fe6e5f icon="\uf1ce"
namespace pizza {

    // Make sure not to remove later player when earlier player tested
    export let playersConnected=0;

    //% blockId=set_players
    //% block="définir le jeu pour $num joueur(s) avec $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters

    export function setPlayersWith(list: Image[], num: number) {
        if(num >= pizza.playersConnected){
            pizza.playersConnected = num;
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            let xloc = [
            40,
            120,
            40,
            120
            ]
            let yloc = [
            30,
            30,
            90,
            90
            ]
            for (let index = 0; index < num; index++) {
                if (index + 1 <= list.length){
                    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                    mp.moveWithButtons(mp.getPlayerByIndex(index))
                }
            }
        }
    }

    //% blockId=bump_sprite
    //% block="$thisSprite bouscule $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=autreSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }

}

namespace logic{
    /**
    * this just holds code
    */
    //% block="vérifier si le bouton A est appuyé"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}


```

```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FDD3E6",
        "#FB9556",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#726977",
        "#A4839F",
        "#5C406c",
        "#E5CDC4",
        "#AD7B76",
        "#000000"
    ]
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"FYZr@.A$rvN+8LAu/_$h\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":x9Q1i5{znaav46Y1~,x\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"8?=r?1s$%!|AR+tf7xhO\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"k;xtmP}{Hv8/XJ4JfmDy\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"puO5l3FbJBWQ5r:v.SFZ\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"rqrZnC|Ly643G5Xj;3Kh\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"1:,xBs$=yz,5EBRM;^{.\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"-wYv[`!q~SM,o+^P@sIF\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"!uwdEu29lQNP1EOAR;vi\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"la/jdCwimN=V^:,%UZ0a\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"fL~@5nmZB#3Y()i{17,`\">Moon</variable><variable type=\"KIND_MultiplayerState\" id=\"4aX]Tag}almSu1Yh#8Y=\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"nq=+2BtO@:,/Mrxd`(.|\">life</variable><variable id=\"T^uPUb:rM1`*KXuDUK3c\">locations</variable><variable id=\"JS!BfWA8,N#*@#}3vHAw\">projectile</variable><variable id=\"sqUr3drqXd6o;h|zkI_$\">characters</variable><variable id=\"FVI~Q$-s??nIKC-CPr/|\">index</variable><variable id=\"vx~4_DS4tc2BE;Y^dEC.\">monSprite</variable><variable id=\"2$bvHnUD|Gf%IKIk|w(b\">myBall</variable><variable id=\"mKX7Jy~^SYAp6|Fxv{vl\">x-loc</variable><variable id=\"_dgCA+xg+vE.z_lmer$%\">y-loc</variable><variable id=\"C;y/-#PAqdSa80Uk-a}F\">list</variable><variable id=\"A-8gX8[k4p~V1+h$f@Ih\">number</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT_Music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

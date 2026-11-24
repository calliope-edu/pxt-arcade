# Un tas de bâtons
### @explicitHints true


## préhistorique (adjectif) @showdialog


_pré-is-to-rik_

: d'une époque où les humains n'écrivaient encore rien

---

Avec ce tutoriel, tu crées ton propre jeu. Il se déroule près du mont Carmel préhistorique, en Israël, et ton but est d'allumer un feu avant que le vent n'emporte tes étincelles.

![Étincelles de feu de camp](/static/skillmap/sparks/sparks1.gif "Créons des étincelles")




## {2. Ton premier bloc}

**Prêt à programmer ?**

Commençons par planter le décor : une grotte près des montagnes.


- :tree: Va dans la catégorie ``||scene: Scène||`` **de la boîte à outils** et prends <br/>
``||scene:définir image d'arrière-plan à [ ]||``<br/>
puis place-le dans le bloc vide <br/>
``||loops(noclick): au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.



~hint Qu'est-ce que ça veut dire ? 🤷🏽

---

Dans les instructions, nous mettons certains textes en évidence pour que tu saches mieux ce que tu dois chercher.

Par exemple, quand nous te proposons le bloc <br/>
``||scene:définir image d'arrière-plan à [ ]||``<br/>
nous parlons de celui-ci : <br/>

```block
scene.setBackgroundImage(img`.`)
```

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`.`)
```


## {3. Choisis la grotte}

**Choisis un arrière-plan de grotte.**

- :paint brush: Clique sur la case vide et passe à la **Galerie**
![Passer à la Galerie](/static/skillmap/assets/gallery.png "passer à la fenêtre Galerie")
<br/>Choisis l'un des arrière-plans de grotte.<br/>
![Choisis l'arrière-plan qui ressemble à un fond plein de trous.](/static/skillmap/sparks/cave.png "Sélectionne une grotte dans Mes ressources.")
<br/>Clique ensuite sur **Terminé**.





#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
```



## {4. Vérifie ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir ce qui a changé !

Tu devrais voir un arrière-plan de grotte avec un foyer vide au milieu.


![La fenêtre de jeu se trouve en bas à droite](/static/skillmap/sparks/game.png "Clique sur la petite fenêtre de jeu pour ouvrir la grande fenêtre de jeu.")








## {5. Ajoute le sprite}


Ajoutons à notre jeu un **SPRITE** qui ressemble à du petit bois.

~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier — par exemple la taille, la position et la durée de vie.

Notre bois de feu sera lui aussi un sprite.

hint~

<br/>

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` **de la boîte à outils**, prends <br/>
``||variables(sprites):définir [kindling] à sprite [ ] de type [Player]||``<br/>
et place-le **tout en bas** du bloc ``||loops(noclick): au démarrage||`` qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(img`.`, SpriteKind.Player)
```



## {6. Choisis le petit bois}


- :mouse pointer: Clique sur le carré vide dans le nouveau bloc et passe à la
**Galerie**.

![Passer à la Galerie](/static/skillmap/assets/gallery.png "passer à la fenêtre Galerie")

- :mouse pointer: Sélectionne **pile1** (le plus gros tas de bâtons de la galerie) et clique sur **Terminé**.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
```




## {7. Vérifie ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu !

Tu devrais voir un tas de petit bois qui flotte au-dessus du sol.




## {8. Place le petit bois}

Alignons le **petit bois** avec le foyer en pierre.

- :paper plane: Dans la catégorie ``||sprites:Sprites||``, prends <br/>
``||sprites:définir la position de [kindling] à x [70] y [80]||`` <br/>
et place-le **tout en bas** du bloc ``||loops(noclick): au démarrage||`` qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
//@highlight
kindling.setPosition(70, 80)
```




## {9. Faire des étincelles}

🔥 **Fais des étincelles** 🔥

- :game: Dans la catégorie ``||controller: Contrôleur||`` **de la boîte à outils**, prends <br/>
``||controller: quand bouton [A] est [appuyé]||`` <br/>
et dépose-le sur une zone vide de l'espace de travail.


C'est un bloc d'**ÉVÉNEMENT** : l'**ACTION** qu'il contient se produit chaque fois que le bouton (A) est appuyé.

~hint Parle-moi des événements ! 💡

---

Les événements sont des choses qui peuvent arriver (ou pas) pendant que le code s'exécute. Un joueur peut appuyer sur un bouton, un minuteur peut arriver à zéro, ou un sprite peut en chevaucher un autre.

Dans Arcade, tu peux associer une action spéciale à chacun de ces événements.

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```



## {10. Ajoute des points}

Maintenant, nous pouvons ajouter un point chaque fois que le bouton (A) est appuyé.

Ce sera l'**ACTION** qui va avec notre **ÉVÉNEMENT**.


- :id card: Dans la catégorie ``||info: Info||`` de la boîte à outils, prends <br/>
``||info: modifier le score de [1]||`` <br/>
et place-le dans le bloc vide <br/>
``||controller(noclick): quand bouton [A] est [appuyé]||`` <br/>
qui se trouve déjà dans l'espace de travail.



#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    info.changeScoreBy(1)
})
```




## {11. Ajoute le feu}

Pour finir, ajoutons un effet d'étincelles à chaque clic.


- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends <br/>
``||sprites: [kindling] commencer effet [feu]||`` <br/>
et place-le n'importe où dans le bloc <br/>
``||controller(noclick): quand bouton [A] est [appuyé]||`` <br/>
qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
    kindling.startEffect(effects.fire)
})
```




## {12. Vérifie ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu !

Chaque fois que tu appuies sur le bouton (A), des étincelles devraient enflammer ton petit bois. Tu devrais aussi gagner un point à chaque clic.




## {13. Un peu plus doucement}

Pour l'instant, les étincelles s'accumulent trop vite. Corrigeons ça.

- :mouse pointer: Clique sur le signe plus blanc à droite du <br/>
``||sprites: [kindling] commencer effet [feu]||`` <br/>
bloc.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
        kindling.startEffect(effects.fire, 500)
})
```




## {14. Joue !}

- :binoculars: Regarde ce que tu as créé !

Combien de points arrives-tu à marquer en vingt secondes ?




## {15. Terminé}

**🪵 Bravo 🪵**

Tu as créé un jeu de clics.


~hint Comment partager mon jeu ?💡

---

**Tu veux partager ton jeu ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage dans le coin inférieur droit.

![Partage ta carte](/static/skillmap/sparks/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour revenir à la skillmap et ajouter un moyen de gagner ou de perdre !


```blockconfig.global
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)

```

```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        info.changeScoreBy(1)
        kindling.startEffect(effects.fire, 500)
})
info.onScore(30, function () {
    game.gameOver(true)
})
let kindling: Sprite = null
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```



```customts
namespace game {
    /**
     * This is a reporter block that returns
     * the number of seconds since the game started
     */
    //% block="time since start (tenths) "
    export function timeSinceStartSec(): number {
        return game.runtime()/100;
    }
}
```
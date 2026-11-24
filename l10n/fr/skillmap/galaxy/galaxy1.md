# Prépare ton vaisseau
### @explicitHints true

## Introduction @showdialog

Certains satellites du programme Azure Space se sont mystérieusement déconnectés
et doivent être mis à jour. Pour aider, tu dois te trouver dans leur ligne de mire directe
afin de pouvoir leur transmettre des données pour les réparer.

Mais avant tout, tu dois programmer le jeu qui te permettra de SAUVER LA GALAXIE !

![Voler dans l'espace](/static/skillmap/galaxy/galaxy1.gif "À toute vitesse dans l'espace")

<!--
---

Age: 12+<br/>
Exp: 🔴🔴⭕⭕⭕<br/>

---
-->


## {2. Planter le décor}
**De l'espace**
🌏 🪐 🌕

Choisis un arrière-plan pour rendre ton projet magnifique.

---

- :tree: Dans la catégorie ``||scene:Scène||``, fais glisser
``||scene:définir image d'arrière-plan à [ ]||``<br/>
dans le bloc vide <br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :paint brush: Clique sur la case vide et passe à **Galerie**
![Passer à la Galerie](/static/skillmap/assets/gallery.png "passer à la fenêtre Galerie")
pour choisir l'arrière-plan **galaxy**, puis clique sur **Terminé**.
![Choisis l'arrière-plan galaxy](/static/skillmap/galaxy/galaxy-bg.png " ")



#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(galaxyimgs.Galaxy)
```




## {Étape 3}

**Regarde ton projet**

- :binoculars: Jette un œil à la fenêtre de jeu. <br/><br/>
Vois-tu l'arrière-plan que tu as choisi ?


![Cherche la fenêtre de jeu en bas à droite](/static/skillmap/assets/game-window.png "Clique sur la mini-fenêtre de jeu pour ouvrir la grande fenêtre de jeu.")





## {4. Fais-le défiler}
**🌟 En mouvement 🌟**

---

- :arrows alternate:  Dans ``||scroller:Scroller||``, prends <br/>
``||scroller:scroll background with vx [-50] vy [-50]||`` <br/>
et dépose-le **à la fin** du bloc
``||loops(noclick):au démarrage||``.


- :mouse pointer: Pour que l'arrière-plan ne défile pas sur le côté, change **vx** en **0**.

- :mouse pointer: Pour un rythme vertical agréable et lent, change **vy** en **10**.

~hint Que sont vx et vy ?💡

---

![Illustration de VX, VY comme directions dans Arcade](/static/skillmap/galaxy/vxvy.png " ")

Dans MakeCode Arcade, **vx** signifie « vitesse dans la direction x » — une façon
compliquée de dire « la vitesse de gauche à droite ».

- Plus ta valeur **vx** est grande, plus l'objet se déplace vite vers la droite.
- Plus ta valeur **vx** est petite, plus il se déplace vite vers la gauche.
- Si ta valeur **vx** vaut 0, l'objet ne se déplace pas du tout sur le côté.


De la même façon, **vy** signifie « vitesse dans la direction y » — une façon
compliquée de dire « la vitesse de haut en bas ».

- Plus ta valeur **vy** est grande, plus l'objet se déplace vite vers le bas.
- Plus ta valeur **vy** est petite, plus il se déplace vite vers le haut.
- Si ta valeur **vy** vaut 0, l'objet ne monte ni ne descend.


hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
// @highlight
scroller.scrollBackgroundWithSpeed(0, 10)
```


## {5. Choisis ton vaisseau}
**Choisis ton vaisseau !**

---

- :paper plane: Dans ``||sprites:Sprites||``, fais glisser<br/>
``||variables(sprites):définir [myShip] à sprite [ ] de type [Player]||``<br/>
**à la fin** du bloc
``||loops:au démarrage||``.


~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier — la taille, la position et la durée de vie sont toutes des propriétés des sprites.

Notre vaisseau spatial sera lui aussi un sprite.

hint~


- :paint brush: Clique sur la case vide au milieu du bloc <br/>
 ``||variables(sprites):définir [myShip] à sprite [ ] de type [Player]||``<br/>
 puis passe à **Galerie** et choisis un vaisseau spatial.
![Choisis un vaisseau](/static/skillmap/galaxy/bowie.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
// @highlight
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
```



## {6. Pilote ton vaisseau}

 **🚀 C'est parti 🚀**

---

- :game: Dans ``||controller: Contrôleur||``, fais glisser<br/>
``||controller:déplacer [myShip] avec les boutons||``<br/>
**à la fin** du bloc
``||loops(noclick):au démarrage||``.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
// @highlight
controller.moveSprite(myShip)
```



## {Étape 7}

**Essaie-le !**

- :binoculars: Clique sur l'écran de jeu.

Essaie de déplacer ton vaisseau avec le joypad,
les touches fléchées ou les touches **W** et **S**.

Que se passe-t-il quand tu maintiens une flèche enfoncée longtemps ?



## {8. Reste à l'écran}

**Oh oh, si tu sors de l'écran, ton vaisseau disparaît !**

---

- :paper plane: Pour que ton vaisseau ne s'aventure pas au-delà des bords, va dans ``||sprites:Sprites||`` et fais glisser<br/>
 ``||sprites:définir [myShip] rester à l'écran <on>||`` <br/>
 **à la fin** du bloc ``||loops(noclick):au démarrage||``.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
// @highlight
myShip.setStayInScreen(true)


```


## {9. Teste-le}

**Bravo !**

---

- :binoculars: Teste à nouveau ton projet !

Ton vaisseau devrait pouvoir se déplacer partout sans quitter l'écran.

Tout est-il comme tu le souhaites jusqu'ici ?
Tu peux toujours revenir modifier ton code si tu veux qu'il fonctionne autrement.



## {10. Finale}

** ☄️ Réussi ! ☄️**

Tu as terminé tes premiers pas !

~hint Comment partager mon projet ?💡

---

**Tu veux partager ton projet ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ta carte](/static/skillmap/galaxy/share.gif )

hint~

Clique sur **Terminé** pour revenir à la skillmap principale et continue pour
découvrir comment envoyer des informations à travers l'espace !


```blockconfig.global
let myShip = sprites.create(img`.`, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```


```ghost
let monEnnemi: Sprite = null
let projectile: Sprite = null
let barreEtat: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
myShip.y = 100

```

```customts
    namespace SpriteKind {
      //% isKind
        export const Satellite = SpriteKind.create()
    }
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF92BA",
        "#993648",
        "#FF8135",
        "#FFF76B",
        "#0BA6B1",
        "#FFB5AF",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#C0C0C0",
        "#180A42",
        "#001E57"
    ]
}
```


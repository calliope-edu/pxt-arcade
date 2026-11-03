# Explorateur de l'espace


## Introduction @showdialog

** Partons explorer les profondeurs de l'espace ! **

Dans ce tutoriel, tu vas concevoir un vaisseau spatial pour ton voyage.

![Voler à travers l'espace](/static/skillmap/space/space1.gif "À toute vitesse à travers un champ d'étoiles" )

## Planter le décor
**Donnons-leur quelque chose à regarder** 🔭

---


► Fais glisser le bloc ``||scene:démarrer effet [confetti] sur l'écran ⊕||`` depuis la catégorie ``||scene:Scène||`` et
place-le dans le bloc ``||loops:au démarrage||`` qui se trouve déjà dans l'espace de travail.

► Ensuite, choisis ``||scene:champ étoilé||`` (au lieu de ``||scene:confetti||``) dans le menu déroulant
et regarde-toi filer dans l'espace ! 🚀


---


```blocks
// @highlight
effects.starField.startScreenEffect()
```


## Jette un œil !


**Regarde la fenêtre de jeu**<br/>

Vois-tu l'arrière-plan que tu as choisi défiler vers le bas de l'écran ?



## Dessine ton vaisseau
**🧑🏿‍🚀 C'est le moment de choisir notre vaisseau ! 👩🏾‍🚀**

---

► Depuis la catégorie ``||sprites:Sprites||``, fais glisser le bloc ``||variables(sprites):définir [mySprite] à sprite [ ] de type [Player]||``
et place-le à la fin du conteneur ``||loops:au démarrage||``.

► Clique sur la case grise au milieu de ton bloc
 ``||variables(noclick):définir [mySprite] à sprite [ ] de type [Player]||``
pour dessiner ton propre vaisseau ! Es-tu un tas de ferraille rouillée ou une fusée élégante et futuriste ?

---

**Astuce :** Tu n'as pas envie de dessiner ton vaisseau ? Une fois dans l'éditeur de sprites,
passe à la galerie et choisis une image toute prête.

```blocks
effects.starField.startScreenEffect()
// @highlight
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
```

## Pilote ton vaisseau

🌟 Faisons bouger ton vaisseau 🌟

---

► Trouve le bloc ``||controller:déplacer [mySprite] avec les boutons ⊕||``
et fais-le glisser en bas du conteneur ``||loops:au démarrage||``.

** Maintenant, essaie de déplacer ton vaisseau sur l'écran de jeu ! **
Ton vaisseau se déplace avec le joystick, les touches fléchées ou les touches **W A S D**.



```blocks
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Rester à l'écran

**Oh oh, si tu sors de l'écran, ton vaisseau disparaît !**

---

► Pour empêcher ton vaisseau d'aller au-delà des bords, trouve
 le bloc ``||sprites:définir [mySprite] rester à l'écran <activé>||`` et
emboîte-le à la fin du programme.



```blocks
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
mySprite.setStayInScreen(true)

```


## Finale @showdialog

**Bravo !**

---

**Essaie ton projet sur l'écran de jeu
avant de cliquer sur Terminé dans le tutoriel.**

Tout est comme tu le veux ? Tu peux toujours revenir en arrière et modifier des étapes si tu veux qu'elles fonctionnent autrement.



## Au revoiiir

** 🚀 C'est tout ! 🚀**

Tu es prêt à parcourir l'univers !

Clique sur **Terminé** pour revenir à la page principale, où tu pourras partager ton jeu
avec ta famille et tes amis !

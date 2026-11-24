# Galga

### ~button /#tutorial:/tutorials/galga

Essaie ce tutoriel !

### ~

### @autoexpandOff true

## {Introduction @unplugged}

**Dans ce tutoriel, tu vas créer un avion spatial
capable de voler à travers des vaisseaux ennemis.**

Arriveras-tu à survivre à l'attaque continue ?

![Avion spatial et vaisseaux qui attaquent](/static/tutorials/galga.gif)

## {Étape 1}

✈️ D'abord, nous avons besoin d'un [__*sprite*__](#sprite "image 2D qui se déplace à l'écran") **avion spatial** ✈️

---

► Dans la catégorie ``||sprites:Sprites||``, prends un bloc
``||variables(sprites):définir [monSprite] à sprite [ ] de type [Player]||`` et
place-le dans le bloc **au démarrage** qui se trouve déjà dans l'espace de travail.

► Clique sur le mot ``||variables(noclick):[monSprite]||`` dans le nouveau bloc pour
renommer la variable en ``||variables(noclick):[spacePlane]||``.

► Clique maintenant dans la case grise du nouveau bloc pour ouvrir l'éditeur d'images.
Dessine un avion ou choisis quelque chose dans la Galerie.

```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Pilote ton vaisseau}

**Super avion ! Maintenant, faisons-le bouger !**

---

► Trouve le bloc ``||controller:déplacer [monSprite] avec les boutons ⊕||``
et fais-le glisser tout en bas du conteneur ``||loops:au démarrage||``.

► Remplace **monSprite** par **spacePlane**.

► Clique sur le ⊕ à droite du nouveau bloc pour pouvoir changer la
vitesse de déplacement à **200** pour **vx** et pour **vy**.

---

Maintenant, ton vaisseau se déplace avec le joystick ou les touches **W A S D**.
Essaie de piloter ton vaisseau dans le simulateur !
<br/>

```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(spacePlane, 200, 200)
```

## {Reste à l'écran}

**Oh non, si tu sors de l'écran, ton avion disparaît !**

---

► Pour empêcher ton vaisseau d'aller au-delà des bords, trouve
 le bloc ``||sprites:définir [monSprite] [rester à l’écran] <ON>||`` et
place-le à la fin du programme.

► Remplace **monSprite** par **spacePlane**.
```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
// @highlight
spacePlane.setStayInScreen(true)
```

## {Étape 4}

Par défaut, ton joueur a deux vies.
Passons à trois.

---

► Place un bloc ``||info:définir vie à [3]||`` dans le
conteneur **au démarrage**.

```blocks
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
// @highlight
info.setLife(3)
```

## {Étape 5}

**Pour nous protéger, nous voulons appuyer sur un bouton pour
lancer des projectiles sur les ennemis qui arrivent.**

---

► Fais glisser un conteneur ``||controller:quand bouton [A] est [appuyé]||`` dans une zone
vide de l'espace de travail.

► Place un bloc
``||variables(sprites):définir [projectile] à projectile [ ] depuis [monSprite] avec vx [50] vy [50]||``
dans le nouveau conteneur et clique dans la case grise pour dessiner ta fléchette.

► Remplace **monSprite** par **spacePlane**. Change **vx** à **[200]** et **vy** à **[0]**.

```blocks
let spacePlane: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . 5 5 a 2 2 2 2 4 4 4 . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spacePlane, 200, 0)
})
```

## {Étape 6 }

**De temps en temps, un ennemi doit foncer sur nous.**

Ajoutons du code pour que cela arrive.

---

► Ajoute un conteneur ``||game:quand mise à jour du jeu chaque [500] ms||`` dans
une zone vide de l'espace de travail et change **500** en **1000**.

► À l'intérieur, place un bloc
``||variables(sprites):définir [monSprite] à sprite [ ] de type [Player]||`` et
change le **type** de **Player** à **Enemy**.

► Clique sur ``||variables(noclick):monSprite||`` dans le nouveau bloc pour
renommer la variable en ``||variables(noclick):bogey||``.

► Clique sur la case grise pour dessiner ton vaisseau ennemi.
```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
})
```

## {Étape 7}

**L'ennemi doit voler de droite à gauche.**

---

► Prends un bloc ``||sprites:définir la vitesse de [monSprite] à vx [50] vy [50]||`` et place-le
à la fin de ton conteneur **quand mise à jour du jeu**.

► Remplace **monSprite** par **bogey**.

► Change la vitesse horizontale (**vx**) à **-100**
pour qu'il fonce vers le bord gauche de l'écran, et change la
vitesse verticale (**vy**) à **0** pour que l'avion ne
dérive pas vers le haut ou vers le bas.
```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    // @highlight
    bogey.setVelocity(-100, 0)
})
```

## {Étape 8}

**Comment gagner si les ennemis** [__*apparaissent*__](#spawnd "surgissent tout à coup") **juste sur toi ?**

---

► Prends un bloc ``||sprites:définir la position de [monSprite] à x [0] y [0]||``
et place-le à la fin de ton bloc **quand mise à jour du jeu**. Remplace **monSprite**
par **bogey**.

► Change la valeur **x** à **160** pour que l'ennemi parte tout à droite
de l'écran, et prends un bloc ``||math:choisir aléatoirement entre [0] et [10]||`` pour
remplacer la valeur **y**, afin que les ennemis arrivent à une hauteur différente à chaque fois.

► Modifie ton bloc aléatoire pour aller de **5** à **115**, afin d'utiliser le plus possible
la hauteur de l'écran sans sortir de la zone de jeu.



```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    // @highlight
  bogey.setPosition(160, randint(5, 115))
})
```

## {Étape 9}

Pour garder tout bien rangé, nous devons détruire les ennemis qui nous dépassent
et sortent de l'écran.

---

► Place un bloc ``||sprites:définir monSprite [destruction automatique] <OFF>||`` à
la fin du conteneur **quand mise à jour du jeu** et bascule **`<OFF>`** sur **`<ON>`**.

► Remplace **monSprite** par **bogey**.
```blocks
game.onUpdateInterval(1000, function () {
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    // @highlight
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## {Étape 10}

**Il ne se passe rien quand ta fléchette touche un ennemi...**
Changeons cela.

---

► Ajoute un conteneur ``||sprites:quand [sprite] de type [Player] chevauche [autreSprite] de type [Player]||``
dans une zone vide de l'espace de travail.

► Change le premier type de sprite de **Player** à **Projectile** et le
type de **autreSprite** de **Player** à **Enemy**.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
})
```

## {Étape 11}

Ajoute maintenant les blocs qui détruisent l'autre sprite.

---

► Place un bloc ``||sprites:détruire [monSprite]||`` dans le conteneur vide
**quand sprite chevauche**.

► Fais glisser la valeur ``||variables(noclick):autreSprite||`` depuis
l'en-tête du conteneur **quand sprite chevauche** et place-la à la place de
**monSprite** dans le bloc **détruire**.

► Clique sur le **⊕** à droite du bloc **détruire** et choisis l'effet
**fire** pour ajouter un peu de panache.
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    // @highlight
    autreSprite.destroy(effects.fire, 500)
})
```


## {Étape 12}

**TOUCHÉ !**

Le joueur doit gagner **1** point pour chaque ennemi touché.

---

► Place un bloc ``||info:modifier le score de [1]||`` à la fin du
conteneur **quand sprite chevauche**.
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    autreSprite.destroy(effects.fire, 500)
    // @highlight
    info.changeScoreBy(1)
})
```

## {Étape 13}

**Et si l'ennemi nous touche ?**

Il nous faut du code qui dit au programme quoi faire si le sprite ennemi
chevauche le joueur.

---

► Ajoute un nouveau conteneur ``||sprites:quand [sprite] de type [Player] chevauche [autreSprite] de type [Player]||``
dans une zone vide de l'espace de travail.

► Change le type de **autreSprite** de **Player** à **Enemy**.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, autreSprite) {
})
```

## {Étape 14}

Si nous sommes touchés, la caméra doit trembler, l'ennemi doit exploser
et notre indicateur doit perdre une vie.

---

► Place un bloc ``||sprites:détruire [monSprite]||`` dans le conteneur vide
**quand sprite Player chevauche Enemy** et remplace **monSprite** par **autreSprite**.

► Place un bloc ``||scene:secouer la caméra de [4] pixels durant [500] ms||`` à la
fin du conteneur **quand sprite Player chevauche Enemy**.

► Place un bloc ``||info:modifier la vie de [-1]||`` à la
fin du conteneur **quand sprite Player chevauche Enemy**.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, autreSprite) {
    autreSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
```

## {Terminé @fullscreen}

🎆 **Félicitations** 🎆

Tu as terminé ton jeu !

Tu peux maintenant utiliser les touches de direction pour piloter ton avion spatial et
le bouton **Ⓐ** pour lancer des fléchettes !

![Avion spatial et vaisseaux qui attaquent](/static/tutorials/galga.gif)

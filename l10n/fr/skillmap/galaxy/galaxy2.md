# La communication, c'est essentiel !

## Introduction @showdialog

Es-tu prêt à enrichir ton aventure ?

Dans ce tutoriel, tu vas faire en sorte que ton vaisseau ait l'air d'envoyer
des informations aux satellites
quand tu appuies sur le bouton (A).

![Envoi de projectiles](/static/skillmap/galaxy/galaxy2.gif "Tu veux mes informations ?")


## {2. Essaie-le}

**🚀 L'espace de travail contient déjà le code d'un vaisseau qui vole**

---

Joue avec ton projet dans l'écran de jeu pour vérifier qu'il fonctionne comme prévu.



## {3. Ajouter un événement de bouton}

**Passons à l'action !**

Lançons des projectiles quand on appuie sur le bouton (A) !

~hint C'est quoi, des projectiles ?💡

---

Dans MakeCode Arcade, les projectiles sont des sprites qui se déplacent tout seuls,
souvent en grand nombre.

Les projectiles ont des propriétés supplémentaires que les sprites normaux n'ont pas.
Par exemple, ils se détruisent eux-mêmes dès qu'ils quittent l'écran, pour que
l'ordinateur ne soit pas surchargé.

hint~

- :game: Depuis ``||controller:Contrôleur||``, fais glisser le bloc<br/>
``||controller:quand bouton [A] est [appuyé] ||``<br/>
dans **une zone vide** de l'espace de travail.


- :paint brush: Clique sur la case vide et passe à la **Galerie** pour choisir
l'image **101**.


Maintenant, quand tu appuies sur le **bouton (A)** (ou la barre d'espace),
ton vaisseau envoie des informations droit devant lui.



```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})
```



## {Étape 4}

**Essaie-le !**

- :binoculars: Clique sur l'écran de jeu.

Appuie sur le bouton (A) ou la barre d'espace aussi vite que possible pour envoyer des informations à travers la galaxie.



## {5. Ajouter des satellites}

**Ajoute les satellites**<br/>
🛰️ 🛰️ 🛰️

Ajoutons du code qui lance des satellites toutes les deux secondes.

---

- :circle: Depuis ``||game: Jeu||``, fais glisser le bloc<br/>
``||game:quand mise à jour du jeu chaque [2000] ms||``<br/>
dans **une zone vide** de l'espace de travail.


- :paint brush: Clique sur la case vide et passe à la **Galerie** pour choisir
l'image **Satellite**.


Des satellites devraient tomber du ciel toutes les 2000 ms (2 secondes)
depuis une position horizontale aléatoire.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})
```



## {6. Transfert}

**Informations reçues**

Ajoute le code qui dit à l'ordinateur quoi faire quand le projectile d'information chevauche le satellite.

---

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||sprites:quand [sprite] de type [Projectile] chevauche [othersprite] de type [Satellite]||``<br/>
dans **une zone vide** de l'espace de travail.

Ce bloc détecte quand un **projectile d'information chevauche le satellite**,
puis il détruit ce projectile (comme si le satellite avait reçu l'information)
et ajoute **1** à ton score.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
```



## {7. Enregistrer le transfert}

**Transférer et s'envoler**

Quand les projectiles d'information chevauchent les satellites,
nous voulons que les satellites confirment le transfert, puis s'envolent.

---

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser<br/>
``||sprites:[otherSprite] dire ["Uploading..."]||``<br/>
à **la fin** du bloc<br/>
``||sprites(noclick):quand [sprite] de type [Projectile] chevauche [othersprite] de type [Satellite]||``<br/>
qui se trouve déjà dans ton espace de travail.


Ainsi, ton satellite affichera le message « Uploading... » quand il recevra tes informations.

~hint Pourquoi « otherSprite » ? 💡

---

Tu as peut-être remarqué que les satellites reçoivent le nom « mySat » quand ils sont créés,
mais dans notre événement de chevauchement, nous les désignons avec le nom « otherSprite ».

C'est parce que le nom **mySat** passe d'un satellite à l'autre.
Si tu utilises ce nom, tu ne sauras pas lequel reçoit la commande.

Dans notre programme, quand un projectile précis chevauche un satellite précis,
nous voulons écrire du code pour exactement ces sprites-là.
C'est pour ça que l'événement de chevauchement fournit les surnoms **sprite** et **otherSprite**.

Avec la façon dont nous avons écrit notre code, **sprite** est le projectile précis dont nous avons besoin et
**otherSprite**
est le satellite précis dont nous avons besoin.

hint~


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
})
```



## {10. S'envoler}

Pour que le satellite s'envole après le transfert, tu dois changer sa vitesse.

---

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser<br/>
``||sprites:définir la vitesse de [otherSprite] à vx [-30] vy [-30]||``<br/>
à **la fin** du bloc<br/>
``||sprites(noclick):quand [sprite] de type [Projectile] chevauche [othersprite] de type [Satellite]||``<br/>
qui se trouve déjà dans ton espace de travail.


Ainsi, ton satellite s'envolera vers le haut et vers la gauche quand il
recevra tes informations.



```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})
```



## {Étape 11}

**Essaie ton activité !**

- :binoculars: Clique sur l'écran de jeu.

Tu devrais pouvoir envoyer des informations aux satellites avec le bouton (A). Quand un satellite
reçoit des informations, il devrait dire « Uploading... » et s'envoler, et tu gagnes un point.



## {Terminé}

🎆 **Félicitations** 🎆

Tu peux maintenant gagner des points en envoyant des informations aux satellites !

~hint Comment partager mon projet ?💡

---

**Tu veux partager ton projet ?**

Clique sur « Terminé » pour revenir à la carte de compétences, puis cherche le bouton de partage dans le coin inférieur droit.

![Partage ta carte](/static/skillmap/galaxy/share.gif )

hint~

Quand tu es prêt, clique sur **Terminé** pour revenir à la carte de compétences principale, où
tu pourras continuer et découvrir comment ajouter des astéroïdes à ton projet !


```blockconfig.global
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. 1 .
. 1 .
. 1 .
. . .
. 1 .
1 . 1
1 . 1
. 1 .
. . .
. 1 .
. 1 .
. 1 .
`, myShip, 0, -150)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(img`.`, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
let otherSprite: Sprite = null
otherSprite.sayText("Uploading...")
otherSprite.setVelocity(-30, -30)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, myShip, 0, -150)
    projectile.startEffect(effects.fire)
})

let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(assets.image`Rocket`, SpriteKind.Player)
controller.moveSprite(myShip, 100, 100)
myShip.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
})

myShip.y = 100

sprites.onOverlap(SpriteKind.Satellite, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})

```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
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
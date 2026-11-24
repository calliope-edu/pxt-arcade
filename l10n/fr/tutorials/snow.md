# Boule à neige animée
### @explicitHints true


## Envoie une carte de vœux @showdialog

Dans ce tutoriel, nous allons te montrer comment créer ta propre carte de vœux en forme de boule à neige.

![Construis une boule à neige](/static/tutorials/snow/globe.gif "Construis la tienne")




## {2. Ton premier bloc}

**Prêt à coder ?**

Commençons par choisir la couleur de l'arrière-plan.

---

- :tree: Dans la **boîte à outils**, va dans la catégorie ``||scene: Scène||`` et prends
```block
scene.setBackgroundColor(7)
```
puis emboîte-le dans le conteneur vide<br/>
``||loops(noclick): au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


💡 _Tu pourras changer cette couleur plus tard si elle ne va pas avec ta boule._


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundColor(7)
```



## {3. Choisis ta boule}

**Choisis ta boule**

---

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le
```block
sprites.wrap1(function () {
    let globe = sprites.create(img`.`, SpriteKind.Player)
    globe.z = 1000
})
```
bloc **à la fin** du conteneur<br/>
``||loops(noclick): au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.



~hint Que s'est-il passé ? 🤷🏽‍♀️

---

Tu viens de faire glisser un paquet de code dans ton espace de travail et d'emboîter ses blocs dans le conteneur ``||loops(noclick):au démarrage||``.

Voici ce que fait ce code :

```block
    let globe = sprites.create(img`.`, SpriteKind.Player)
```
Ce bloc crée l'objet que tu utiliseras comme image de « boule » et lui donne un nom.
(Ignore le « type ». Tu n'en as pas besoin dans ce projet.)

<br/>

```block
    let globe: Sprite = null
    globe.z = 1000

```
Ce bloc règle la profondeur (aussi appelée z-index) de la boule pour qu'elle soit beaucoup plus près de la caméra que tous les objets suivants. C'est important pour que tout le reste se passe derrière ce cadre.

❗️ **Tu ne verras le résultat qu'après avoir choisi une image à l'étape suivante.**

hint~



#### ~ tutorialhint

```block
scene.setBackgroundColor(7)
//@highlight
sprites.wrap1(function () {
    let globe = sprites.create(img`.`, SpriteKind.Player)
    globe.z = 1000
})
```



## {4. Définis la boule}

- :mouse pointer: Clique sur le carré gris vide dans le bloc<br/>
``||variables(noclick):définir [globe] à||``<br/>
et passe à la **Galerie**.<br/>
![Passer à la galerie](/static/skillmap/assets/gallery.png " ")
Choisis une des images de boule.
![Choisis une boule](/static/tutorials/snow/globe1.png " ")


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(7)
sprites.wrap1(function () {
    //@highlight
    let globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
    globe.z = 1000
})
```



## {5. Teste ton jeu !}

- :binoculars: Regarde ton projet dans la fenêtre de jeu.

Tu devrais voir ta boule, remplie avec la couleur que tu as choisie à la première étape.



## {6. Crée un décor}

**C'est l'heure de créer un décor !**

---


- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le
```block
sprites.wrap2(function () {
    let scenery = sprites.create(img`.`, SpriteKind.Player)
    scenery.top = 5
})
```
bloc **à la fin** du conteneur<br/>
``||loops(noclick): au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


~hint Que s'est-il passé ? 🤷🏽‍♀️

---


```block
    let scenery = sprites.create(img`.`, SpriteKind.Player)
```
Ce bloc crée l'objet qui affichera ton image de « paysage »
et lui donne un nom. (Ignore le « type ». Tu n'en as pas besoin dans ce projet.)

<br/>

```block
    let scenery: Sprite = null
    scenery.top = 5
```
Ce bloc place le haut de l'image **scenery** 5 pixels sous le haut de l'écran.


❗️ **Tu ne verras le résultat qu'après avoir choisi une image à l'étape suivante.**

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(7)
sprites.wrap1(function () {
    let globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
    globe.z = 1000
})

//@highlight

sprites.wrap2(function () {
    let scenery = sprites.create(img`.`, SpriteKind.Player)
    scenery.top = 5
})

```



## {7. Crée un décor, suite}

- :mouse pointer: Clique sur le carré gris vide dans le bloc<br/>
``||variables(noclick):définir [scenery] à||``<br/>
et dessine le décor que tu veux voir dans ta boule.<br/><br/>
(Ou choisis un décor dans notre galerie.)



#### ~ tutorialhint

```blocks
scene.setBackgroundColor(7)
sprites.wrap1(function () {
    let globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
    globe.z = 1000
})

//@highlight

sprites.wrap2(function () {
    let scenery = sprites.create(snow_imgs.tree, SpriteKind.Player)
    scenery.top = 5
})

```



## {8. Regarde encore}


- :binoculars: Regarde encore une fois ton projet dans la fenêtre de jeu.

Tu devrais voir ton nouveau décor dans la boule que tu as choisie.




## {9. Anime-le}

**Ajoute un peu d'animation !**

---

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le
```block
sprites.wrap3(function () {
    let anim = sprites.create(img`.`, SpriteKind.Player)
    anim.bottom = 65
    animation.runImageAnimation(
    anim,
    [img`.`],
    200,
    true
    )
})
```
bloc **à la fin** du conteneur<br/>
``||loops(noclick): au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.



~hint Que s'est-il passé ? 🤷🏽‍♀️

---


```block
    let anim = sprites.create(img`.`, SpriteKind.Player)
```
Ce bloc crée l'animation qui se jouera dans ta boule et lui donne un nom.
(Ignore le « type ». Tu n'en as pas besoin dans ce projet.)

<br/>

```block
    let anim: Sprite = null
    anim.bottom = 65

```
Ce bloc aligne le bas de l'animation à 65 pixels sous le haut de
l'écran.

<br/>

```block
    let anim: Sprite = null
    animation.runImageAnimation(
    anim,
    [img`.`],
    200,
    true
    )

```
Ce bloc remplace l'image fixe de ton sprite « anim » par une suite d'images animées.


❗️ **Tu ne verras le résultat qu'après avoir choisi une image à l'étape suivante.**

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(7)
sprites.wrap1(function () {
    let globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
    globe.z = 1000
})

sprites.wrap2(function () {
    let scenery = sprites.create(img`.`, SpriteKind.Player)
    scenery.top = 5
})

//@highlight
sprites.wrap3(function () {
    let anim = sprites.create(img`.`, SpriteKind.Player)
    anim.bottom = 65
    animation.runImageAnimation(
    anim,
    [img`.`],
    200,
    true
    )
})
```



## {10. Anime-le, suite}




- :mouse pointer: Clique sur le carré gris vide dans le bloc<br/>
``||variables(noclick):définir [anim] à||``<br/>
et choisis une des images provisoires dans la **Galerie**.<br/><br/>
![Choisis une image provisoire](/static/tutorials/snow/place.png "La patineuse, la guirlande lumineuse ou l'écureuil.")


- :mouse pointer: Clique sur le carré gris vide dans le bloc<br/>
``||animation(noclick):animer [anim]||``<br/>
et choisis l'animation qui ressemble le plus à ton image provisoire.<br/><br/>
![Choisis une animation](/static/tutorials/snow/anim.png "La patineuse, la guirlande lumineuse ou l'écureuil.")



#### ~ tutorialhint

```blocks
scene.setBackgroundColor(7)
sprites.wrap1(function () {
    let globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
    globe.z = 1000
})

sprites.wrap2(function () {
    let scenery = sprites.create(snow_imgs.tree, SpriteKind.Player)
    scenery.top = 5
})

sprites.wrap3(function () {
    //@highlight
    let anim = sprites.create(snow_imgs.lights, SpriteKind.Player)
    anim.bottom = 65
    //@highlight
    animation.runImageAnimation(
    anim,
    [img`
...............................................................
...............................................................
...............................................................
................................dd.............................
...............................dd2.............................
..............................dd.22............................
..............................d..22............................
..............................dd...............................
...............................6dd.............................
..............................96.d.............................
..............................99..d............................
..................................d222.........................
..................................d.22.........................
..............................ddddd............................
.........................dddddd66..............................
.....................dddd2......69.............................
....................dd...22.....99.............................
..................ddd....22....................................
..................d6...........................................
..................96...........................................
..................99...........................................
..................d............................................
..................dd...........................................
....................dddddddddddd...............................
......................2.....6...dddd...........................
.....................22.....69.....ddd.........................
.....................22.....99......2dddddd....................
....................................22....ddd..................
....................................22......6d.................
...........................................96d.................
...........................................99d.................
............................................d..................
..........................dddd6dddddddddddddd..................
.....................dddddd...69.......2.......................
...................ddd2.......99......22.......................
................dddd..22..............22.......................
.............dddd.....22.......................................
...........ddd..6..............................................
.........dd....96..............................................
........dd.....99..............................................
........d......................................................
........2......................................................
.......22d.....................................................
.......22dd....................................................
..........dd...................................................
...........ddd.................................................
.............d6dddddddd2dddddddddddddddd.......................
.............96........22.......6.......d2ddddddd..............
.............99........22.......69......22.....6dddddd.........
................................99......22.....69....dd........
...............................................99.....d........
......................................................d........
......................................................2........
.....................................................22........
...................................................dd22........
............................................ddd6dddd...........
.................................dddddddddddd.96...............
.......dddd........ddddddd2ddddddd.....2......99...............
........2.dddddd6ddd.....22.......6....22......................
........22......69.......22......96....22......................
........22......99...............99............................
...............................................................
`],
    200,
    true
    )
})

```



## {11. Regarde-le}


- :binoculars: Regarde ce que tu as construit jusqu'ici.

Tu devrais voir ton animation se jouer devant ton décor.


~hint Mon animation n'est pas bien placée 🤔

---

Ton animation s'aligne sur l'image que tu choisis pour le sprite **anim**.

Si tu as du mal à bien aligner ton animation, voici ce que tu peux faire :

- **Vérifie que ton animation a exactement la même taille en pixels** que l'image que tu as choisie en créant ton sprite `anim`.
- **Change l'endroit où se trouve le bas (`bottom`) du sprite.** Au lieu de `65`, il te faudra peut-être `30` ou `100`.
- Si tu veux décaler un peu ton animation sur le côté, **utilise plutôt le bloc ci-dessous** pour pouvoir régler la position sur les côtés et en haut et en bas.

```block
let anim: Sprite = null
anim.setPosition(80, 60)
```

hint~



## {12. Secoue-la}

**Secouons tout ça !**

---

- :paper plane: Ouvre la catégorie ``||controller:Contrôleur||`` et fais glisser le
```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(12, 500)
    snow.bigShortBlizzard(scenery)
    music.play(music.createSong(), music.PlaybackMode.InBackground)
})
```
bloc dans **un espace libre** de l'espace de travail.



~hint Que s'est-il passé ? 🤷🏽‍♀️

---

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```
Ce conteneur dit à l'ordinateur d'exécuter le code qu'il contient quand on appuie sur le bouton (A) (ou la barre d'espace).

<br/>

```block
    scene.cameraShake(12, 500)
```
Ce bloc donne l'impression que la caméra tremble de 12 pixels pendant 500 millisecondes (une demi-seconde).

<br/>

```block
    snow.bigShortBlizzard(scenery)
```
Ce bloc ajoute un effet de tempête de neige à l'intérieur de la boule à neige.

<br/>

```block
    music.play(music.createSong(), music.PlaybackMode.InBackground)
```
Ce bloc te permet d'ajouter une chanson à ta boule à neige.


hint~


#### ~ tutorialhint

```blocks

//@highlight

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(12, 500)
    snow.bigShortBlizzard(scenery)
    music.play(music.createSong(), music.PlaybackMode.InBackground)
})
```



## {13. Secoue-la (suite)}

- :mouse pointer: Clique sur le rectangle gris vide dans le bloc<br/>
``||music:jouer la chanson||``<br/>
et compose une chanson pour ta boule à neige.<br/><br/>
(Tu peux passer à l'onglet **Mes ressources** en haut de l'éditeur pour utiliser une de nos chansons.)



#### ~ tutorialhint

```blocks

//@highlight

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(12, 500)
    snow.bigShortBlizzard(scenery)
    music.play(music.createSong(assets.song`winter_wonderland`), music.PlaybackMode.InBackground)
})
```



## {14. Secoue-la pour voir}


- :binoculars: Regarde !

Quand tu appuies sur le bouton (A) (ou la barre d'espace), la boule devrait avoir l'air d'être secouée,
puis de la neige devrait tomber pendant que la musique joue.

~hint Tu n'entends rien ? 🔇

---

Il y a plusieurs raisons pour lesquelles tu n'entends peut-être pas ta musique,
même si ton code est correct.

- Vérifie que le lecteur de musique n'est pas en sourdine (🔊)
- Monte le volume de ton ordinateur
- Ajoute un bloc ``||music:régler le volume à [100]||`` dans ton conteneur ``||loops(noclick):au démarrage||``.

Si tu n'entends toujours pas ta chanson,
reviens en arrière et relis les étapes précédentes pour vérifier que ton code correspond aux instructions.


hint~


~hint C'est trop fort ? 🔊

---

Cherche ce bloc dans la catégorie ``||music:Musique||``
```block
music.setVolume(30)
```
et ajoute-le dans le conteneur ``||loops(noclick):au démarrage||``.


hint~



## {15. Personnalise-la}

**Ajoutons un message.**

---

- :paper plane: Ouvre la catégorie ``||controller:Contrôleur||`` et fais glisser le
```block
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
})
```
bloc dans **un espace libre** de l'espace de travail.


💡 _N'hésite pas à remplacer le message par quelque chose qui te tient à cœur !_


~hint Que s'est-il passé ? 🤷🏽‍♀️

---

```block
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {})
```
Ce conteneur dit à l'ordinateur d'exécuter le code qu'il contient quand on appuie sur le bouton (B) (ou la touche Entrée).

<br/>

```block
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
```
Ce bloc affiche le texte de ton choix en bas de l'écran jusqu'à ce qu'on appuie sur le bouton (A).


hint~


#### ~ tutorialhint

```blocks

//@highlight
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
})
```

```blockconfig.local
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
})
```




## {16. Admire ton œuvre}


- :binoculars: Regarde ton œuvre terminée !

Appuie sur le bouton (A) pour secouer ta boule, puis sur (B) pour voir ton message.

**❄️ Magique ! ❄️**



```blockconfig.local
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
})
```




## {11. Terminé}

**☃️ Bravo ☃️**

Tu as terminé ta carte de vœux très spéciale !

Quand tu es prêt, clique sur **Terminé** pour la partager avec ta famille et tes amis !




```blockconfig.global
let globe: Sprite = null
let scenery: Sprite = null
let anim: Sprite = null

scene.setBackgroundColor(7)

sprites.wrap1(function () {
    globe = sprites.create(img`.`, SpriteKind.Player)
    globe.z = 1000
})

sprites.wrap2(function () {
    scenery = sprites.create(img`.`, SpriteKind.Player)
    scenery.top = 5
})

sprites.wrap3(function () {
    anim = sprites.create(img`.`, SpriteKind.Player)
    anim.bottom = 65
    animation.runImageAnimation(
    anim,
    [img`.`],
    200,
    true
    )
})

music.setVolume(30)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(12, 500)
    snow.bigShortBlizzard(scenery)
    music.play(music.createSong(assets.song`winter_wonderland`), music.PlaybackMode.InBackground)
})

anim.setPosition(80, 60)
globe.z = 1000
globe = sprites.create(img`.`, SpriteKind.Player)
```


```package
arcade-text=github:microsoft/arcade-text
snow_imgs=github:kiki-lee/snow_imgs#v0.0.4
```


```ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Holidays!", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(12, 500)
    music.stopAllSounds()
    snow.bigShortBlizzard(scenery)
    music.play(music.createSong(assets.song`winter_wonderland`), music.PlaybackMode.InBackground)
})
let scenery: Sprite = null
let globe: Sprite = null
let anim: Sprite = null
scene.setBackgroundColor(7)
globe = sprites.create(snow_imgs.globe1, SpriteKind.Player)
globe.z = 1000
scenery = sprites.create(snow_imgs.snow_being, SpriteKind.Player)
scenery.top = 5
snow.bigShortBlizzard(scenery)
anim = sprites.create(snow_imgs.squirrel, SpriteKind.Player)
anim.bottom = 65
animation.runImageAnimation(
anim,
snow_imgs.running_squirrel,
200,
true
)
thisSprite.startEffect(effects.blizzard, 2000)
music.setVolume(30)

game.setDialogTextColor(1)
game.setDialogFrame(snow_imgs.snowBox)
anim.setPosition(80, 60)

```





```customts

game.setDialogTextColor(1)
game.setDialogFrame(snow_imgs.snow_box)


/**
* An extension for snowglobe making
*/
//% color=#c292d2 icon="\uf2dc"
namespace snow {


    //% blockId=short_blizz
    //% block="add blizzard to $thisSprite"
    //% thisSprite.defl="scenery"
    //% thisSprite.shadow="variables_get"
    //% help=github:docs/short_blizz
    export function bigShortBlizzard(thisSprite: Sprite) {
        music.stopAllSounds()

        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
    }

}


namespace sprites{
    /**
    * Bundle together code blocks
    */
    //% block="add globe"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * Bundle together code blocks
    */
    //% block="add scenery"  weight=200
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }


    /**
    * Bundle together code blocks
    */
    //% block="add animation"  weight=100
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }
}


```


```simtheme
{
    "palette": [
       "#000000",
        "#FFFFFF",
        "#A3006E",
        "#FF93C4",
        "#2278A1",
        "#99D8FD",
        "#249CA3",
        "#00AAD0",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```


```assetjson
{
  "README.md": "",
  "assets.json": "",
  "images.g.jres": "{\n    \"image9\": {\n        \"data\": \"hwQwADAAAABxEXERERERERERERERERERERERERERmZkRcRF3d3d3d3d3d3d3d3d3d3d3d3d3d5cXF3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5dxcRd3d3d3d3d3d3d3d3d3d3d3d3d3d5dxd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cXcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5cXcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5dxERd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRF3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxcRF3d3d3d3d3d3d3d3d3d3d3d3d3d5cXd3F3d3d3d3d3d3d3d3d3d3d3d3d3d5cXcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5cRcXd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxdxd3d3d3d3d3d3d3d3d3d3d3d3d3d5cXcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5dxFxd3d3d3d3d3d3d3d3d3d3d3d3d3d5dxcXd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRF3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxd3F3d3d3d3d3d3d3d3d3d3d3d3d3d5cXFxd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRcXd3d3d3d3d3d3d3d3d3d3d3d3d3d5d3cXd3d3d3d3d3d3d3d3d3d3d3d3d3d5cXdxd3d3d3d3d3d3d3d3d3d3d3d3d3d5dxdxF3d3d3d3d3d3d3d3d3d3d3d3d3d5cRF3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxcXd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRF3dxd3d3d3d3d3d3d3d3d3d3d3d3d5dxcRF3d3d3d3d3d3d3d3d3d3d3d3d3d5cXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRd3d3d3d3d3d3d3d3d3d3d3d3d3d3d5dxcRd3d3d3d3d3d3d3d3d3d3d3d3d3d5cRcXF3d3d3d3d3d3d3d3d3d3d3d3d3d5cXF3d3d3d3d3d3d3d3d3d3d3d3d3d3d5cRcRF3d3d3d3d3d3d3d3d3d3d3d3d3d5dxEXERERERERERERERERERERERERGZmZk=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"snow_box\",\n        \"tags\": [\n            \"snow\"\n        ]\n    },\n    \"anim3\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim3\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MmMwMTNmMDAzZTAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMmQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMjAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOTAwNjBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDk5MDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMjIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZDZkMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGQwMjAwMDA2MDA5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDIwMDIwMDAwOTkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZDAwMDAyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDZkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOTAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDk5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGRkZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwNjAwZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIyMDAwMDYwMDkwMDAwZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMjAwMDA5OTAwMDAwMGQyZGRkZDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMjAwZDBkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIyMDAwMDAwZDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2OTBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwZDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGQ2ZGRkZGRkZGRkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGRkZDAwNjAwOTAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwMjAwMDAwMDk5MDAwMDAwMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwZDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwZDAwMDAyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwZDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDAwOTAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDBkMDAwMDk5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwZDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMmRkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZDZkZGRkZGQyZGRkZGRkZGRkZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2OTAwMDAwMDAwMjIwMDAwMDA2MDAwMDAwMGQwZDJkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDkwMDAwMDAyMDAyMDAwMDAwOTYwMDAwMDAyMjAwMDA2MGRkZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA5MDAwMDIwMDIwMDAwOTYwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA5MDAwMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAyZDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGRkZDZkZDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZGRkZGRkMGQ2OTAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkZGRkMDAwMDAwMDBkZGRkZGQyZGRkZGRkZDBkMDAwMDAyMDAwMDkwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDJkZGRkZGRkNmRkMDAwMDIwMDIwMDAwMDAwNjAwMjAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAyMDAwMDYwMDkwMDAwMDAyMjAwMDAwMDY5MDAwMDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIwMDAwMDA5OTAwMDAwMDAwMDAwMDAwOTAwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMmQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDMyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMzAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY2MDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMjIwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDMzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZDZkMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGQwMjAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDIwMDMwMDAwNjYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZDAwMDAzMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDZkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGRkZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwNjAwZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIzMDAwMDYwMDYwMDAwZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMzAwMDA2NjAwMDAwMGQyZGRkZDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMzAwZDBkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMzMDAwMDAwZDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2NjBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwZDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGQ2ZGRkZGRkZGRkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGRkZDAwNjAwNjAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwMjAwMDAwMDY2MDAwMDAwMjMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwZDIwMDMwMDAwMDAwMDAwMDAzMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGQwZDAwMDAzMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwZDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwZDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMDBkMDAwMDY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwZDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzM2RkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZDZkZGRkZGQyZGRkZGRkZGRkZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2NjAwMDAwMDAwMzIwMDAwMDA2MDAwMDAwMGQwZDJkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAzMDAzMDAwMDAwNjYwMDAwMDAyMzAwMDA2MGRkZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDMwMDMwMDAwNjYwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDAzZDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGRkZDZkZDBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZGRkZGRkMGQ2NjAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkZGRkMDAwMDAwMDBkZGRkZGQyZGRkZGRkZDBkMDAwMDAyMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDJkZGRkZGRkNmRkMDAwMDMwMDIwMDAwMDAwNjAwMjAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAzMDAwMDYwMDYwMDAwMDAzMzAwMDAwMDY2MDAwMDMzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzMwMDAwMDA2NjAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"blinking_lights\",\n        \"tags\": [\n            \"snow\"\n        ]\n    },\n    \"song1\": {\n        \"data\": \"0078000408040301001c000f05001202c102c201000405002800000064002800030500060000049c0000000200012904000600012908000e00012910001200012914001600012918001a00012920002200012924002600012c28002a0001252e003000012730003200012940004200012a44004600012a48004a00012a4e005000012a50005200012a54005600012958005a0001295c005e0001295e006000012962006400012964006600012768006a0001276c006e00012970007200012778007a00012c03001c0001dc00690000045e01000400000000000000000000050500010000039c0000000200012904000600012908000e00012910001200012914001600012918001e00012920002200012924002600012c28002c0001252e003000012730003e00012940004200012a44004600012a48004c00012a4e005000012a50005200012a54005600012958005a0001295c005e0001295e006000012962006400012964006600012768006a0001276c006e00012970007600012778007e00012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006000000001000106080009000106100011000106180019000106200021000106280029000106300031000106380039000106400041000106480049000106500051000106580059000106600061000106680069000106700071000106780079000106\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"jingle_bells\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song2\": {\n        \"data\": \"005a000408080300001c00010a006400f4016400000400000000000000000000000000050000046c0008000a0001120c000e00011910001200010d14001600011918001a0001121c001e00011920002400010d28002a0001192c002e00011430003200011934003600010d38003a0001193c003e0001144000440001194a005400011458006000011466007200011176007e00011105001c000f0a006400f4010a0000040000000000000000000000000000000002e1000000040002252904000600022529080010000225291200160002252916001800012918001c000222251c0020000225292400280002252928002a000225292c00340002252936003a000225293a003c000225293c004000022427400044000225294a004e000225294e00500002292c5200540002292c5600580002292c5a00620002272a66006a0002272a6c006e000225297000720002252974007600022529780080000225278400880002222588008a000222258c0090000222259000920002222594009800012098009a0001209c00a0000120a000a2000120a400b000011d07001c00020a006400f401640000040000000000000000000000000000000003c60000000200012c04000600012c08001000012c12001400012c16001800012c18001a0001291c002000012c24002600012c28002a00012c2c003400012c36003800012c3a003c00012c3c003e00012940004400012c4a004c0001294e00500001255200540001255600580001255a00620001246600680001246c006e00012270007200012274007600012278008000012084008600012988008a0001298c008e00012990009200012994009600012798009a0001279c009e000127a000a2000127a400b0000125\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"winter_wonderland\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image9\":\n            case \"snow_box\":return img`\n117111111771111771111117111171111771111171111711\n711177711117117111117771771711111717171711171117\n117117777111771711777771717777771177717177711711\n171777777771717777777777171717777777171777777171\n117177777117771117777771777177777771777177771711\n717717777771771777777717177717777711777177717717\n177777777777777777777777777777777777771777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777771\n177777777777777777777777777777777777777777777779\n177777777777777777777777777777777777777777777779\n977777777777777777777777777777777777777777777779\n977777777777777777777777777777777777777777777779\n977777777777777777777777777777777777777777777779\n999999999999999999999999999999999999999999999999\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"blinking_lights\":\n            case \"anim3\":return [img`\n...............................................................\n...............................................................\n...............................................................\n................................dd.............................\n...............................dd2.............................\n..............................dd.22............................\n..............................d..22............................\n..............................dd...............................\n...............................6dd.............................\n..............................96.d.............................\n..............................99..d............................\n..................................d222.........................\n..................................d.22.........................\n..............................ddddd............................\n.........................dddddd66..............................\n.....................dddd2......69.............................\n....................dd...22.....99.............................\n..................ddd....22....................................\n..................d6...........................................\n..................96...........................................\n..................99...........................................\n..................d............................................\n..................dd...........................................\n....................dddddddddddd...............................\n......................2.....6...dddd...........................\n.....................22.....69.....ddd.........................\n.....................22.....99......2dddddd....................\n....................................22....ddd..................\n....................................22......6d.................\n...........................................96d.................\n...........................................99d.................\n............................................d..................\n..........................dddd6dddddddddddddd..................\n.....................dddddd...69.......2.......................\n...................ddd2.......99......22.......................\n................dddd..22..............22.......................\n.............dddd.....22.......................................\n...........ddd..6..............................................\n.........dd....96..............................................\n........dd.....99..............................................\n........d......................................................\n........2......................................................\n.......22d.....................................................\n.......22dd....................................................\n..........dd...................................................\n...........ddd.................................................\n.............d6dddddddd2dddddddddddddddd.......................\n.............96........22.......6.......d2ddddddd..............\n.............99........22.......69......22.....6dddddd.........\n................................99......22.....69....dd........\n...............................................99.....d........\n......................................................d........\n......................................................2........\n.....................................................22........\n...................................................dd22........\n............................................ddd6dddd...........\n.................................dddddddddddd.96...............\n.......dddd........ddddddd2ddddddd.....2......99...............\n........2.dddddd6ddd.....22.......6....22......................\n........22......69.......22......96....22......................\n........22......99...............99............................\n...............................................................\n`, img`\n...............................................................\n...............................................................\n...............................................................\n................................dd.............................\n...............................dd2.............................\n..............................dd.23............................\n..............................d..33............................\n..............................dd...............................\n...............................6dd.............................\n..............................66.d.............................\n..............................66..d............................\n..................................d223.........................\n..................................d.33.........................\n..............................ddddd............................\n.........................dddddd66..............................\n.....................dddd2......66.............................\n....................dd...23.....66.............................\n..................ddd....33....................................\n..................d6...........................................\n..................66...........................................\n..................66...........................................\n..................d............................................\n..................dd...........................................\n....................dddddddddddd...............................\n......................2.....6...dddd...........................\n.....................32.....66.....ddd.........................\n.....................33.....66......2dddddd....................\n....................................23....ddd..................\n....................................33......6d.................\n...........................................66d.................\n...........................................66d.................\n............................................d..................\n..........................dddd6dddddddddddddd..................\n.....................dddddd...66.......2.......................\n...................ddd2.......66......32.......................\n................dddd..23..............33.......................\n.............dddd.....33.......................................\n...........ddd..6..............................................\n.........dd....66..............................................\n........dd.....66..............................................\n........d......................................................\n........2......................................................\n.......32d.....................................................\n.......33dd....................................................\n..........dd...................................................\n...........ddd.................................................\n.............d6dddddddd2dddddddddddddddd.......................\n.............66........23.......6.......d2ddddddd..............\n.............66........33.......66......32.....6dddddd.........\n................................66......33.....66....dd........\n...............................................66.....d........\n......................................................d........\n......................................................2........\n.....................................................32........\n...................................................dd33........\n............................................ddd6dddd...........\n.................................dddddddddddd.66...............\n.......dddd........ddddddd2ddddddd.....2......66...............\n........2.dddddd6ddd.....32.......6....23......................\n........23......66.......33......66....33......................\n........33......66...............66............................\n...............................................................\n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"song1\":\n            case \"jingle_bells\":return hex`0078000408040301001c000f05001202c102c201000405002800000064002800030500060000049c0000000200012904000600012908000e00012910001200012914001600012918001a00012920002200012924002600012c28002a0001252e003000012730003200012940004200012a44004600012a48004a00012a4e005000012a50005200012a54005600012958005a0001295c005e0001295e006000012962006400012964006600012768006a0001276c006e00012970007200012778007a00012c03001c0001dc00690000045e01000400000000000000000000050500010000039c0000000200012904000600012908000e00012910001200012914001600012918001e00012920002200012924002600012c28002c0001252e003000012730003e00012940004200012a44004600012a48004c00012a4e005000012a50005200012a54005600012958005a0001295c005e0001295e006000012962006400012964006600012768006a0001276c006e00012970007600012778007e00012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006000000001000106080009000106100011000106180019000106200021000106280029000106300031000106380039000106400041000106480049000106500051000106580059000106600061000106680069000106700071000106780079000106`;\n            case \"song2\":\n            case \"winter_wonderland\":return hex`005a000408080300001c00010a006400f4016400000400000000000000000000000000050000046c0008000a0001120c000e00011910001200010d14001600011918001a0001121c001e00011920002400010d28002a0001192c002e00011430003200011934003600010d38003a0001193c003e0001144000440001194a005400011458006000011466007200011176007e00011105001c000f0a006400f4010a0000040000000000000000000000000000000002e1000000040002252904000600022529080010000225291200160002252916001800012918001c000222251c0020000225292400280002252928002a000225292c00340002252936003a000225293a003c000225293c004000022427400044000225294a004e000225294e00500002292c5200540002292c5600580002292c5a00620002272a66006a0002272a6c006e000225297000720002252974007600022529780080000225278400880002222588008a000222258c0090000222259000920002222594009800012098009a0001209c00a0000120a000a2000120a400b000011d07001c00020a006400f401640000040000000000000000000000000000000003c60000000200012c04000600012c08001000012c12001400012c16001800012c18001a0001291c002000012c24002600012c28002a00012c2c003400012c36003800012c3a003c00012c3c003e00012940004400012c4a004c0001294e00500001255200540001255600580001255a00620001246600680001246c006e00012270007200012274007600012278008000012084008600012988008a0001298c008e00012990009200012994009600012798009a0001279c009e000127a000a2000127a400b0000125`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"snow_imgs_json\",\n    \"version\": \"0.0.2\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.46\",\n        \"tag\": \"v1.12.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/e66fb08db35df2249cd64300195259c64d497106\",\n        \"target\": \"1.12.46\",\n        \"pxt\": \"8.5.57\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#A3006E\",\n        \"#FF93C4\",\n        \"#2278A1\",\n        \"#99D8FD\",\n        \"#249CA3\",\n        \"#00AAD0\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#8E2EC4\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ],\n    \"assetPack\": true\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"transparency17\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency17 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency17\":return transparency17;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

# Empile les Schtroumpfs
### @explicitHints true

## Introduction @showdialog

Il se passe quelque chose de schtroumpfement bizarre par ici ! 

![Code un jeu avec les Schtroumpfs](/static/tutorials/stackem-smurfs/stackem-smurfs.gif "Une image animée de Schtroumpfs qui tombent du ciel dans un exemple de jeu.")

Ce tutoriel va te montrer comment coder ton propre jeu d'arcade de style rétro, avec les Schtroumpfs !




## {2. Ton premier bloc}

**Prêt à coder ?**

Ajoutons d'abord un Schtroumpf au sol pour commencer. 


---


- :sun: Ouvre la catégorie ``||smurfy: Smurfy||`` **dans la boîte à outils** et prends <br/>
``||smurfy:set first Smurf||``.<br/>
Emboîte-le dans le bloc vide <br/>
``||loops(noclick): au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


💡 _Tu peux cliquer sur l'image du Schtroumpf si tu veux en choisir un autre !_

---


~hint Qu'est-ce que ça veut dire ? 🤷🏽

---

Dans les instructions, nous colorons certains textes pour te montrer plus facilement ce que tu cherches.

Par exemple, quand nous te proposons le bloc <br/>
``||smurfy:set first Smurf||``<br/>
nous te dirigeons vers <br/>

```block
smurfy.set_first_smurf(assets.image`jump`)
```

hint~



#### ~ tutorialhint

```blocks
//@highlight
smurfy.set_first_smurf(assets.image`jump`)
```




## {3. Regarde ton écran !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir ce que ton code a fait.

Tu devrais voir un Schtroumpf assis par terre.

---

![La fenêtre de jeu se trouve en bas à gauche](/static/tutorials/stackem-smurfs/game.jpg "Ton jeu se charge automatiquement dans cette fenêtre après chaque étape.")


## {4. Ajoute de la couleur}

C'est un peu sombre. Ajoutons de la couleur !

---

- :tree: Depuis la catégorie `||scene:Scène||`, fais glisser<br/>
`||scene:définir couleur d'arrière-plan à||`<br/>
dans le bloc `||loops(noclick):au démarrage||`.

💡 _Tu peux cliquer sur la case de couleur dans le bloc pour choisir une nouvelle couleur d'arrière-plan,
si tu veux._



#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
//@highlight
scene.setBackgroundColor(13)
```


## {5. Plus on est de fous, plus on rit}

Maintenant, il nous faut un Schtroumpf à empiler !

---

-  :sun: Depuis la catégorie `||smurfy:Smurfy||`, fais glisser<br/>
`||smurfy:new floating Smurf||`<br/>
et emboîte-le **à la fin** du conteneur `||loops(noclick):au démarrage||`.



~hint Pourquoi à la fin ? 🤷🏽‍♂️

---

Le code que nous écrivons s'exécute de haut en bas dans le conteneur où nous le plaçons. 
Comme le Schtroumpf qui tombe a besoin d'un autre Schtroumpf sur lequel atterrir, nous devons nous assurer que ce bloc
vient **après** le bloc qui place le premier Schtroumpf. 

hint~


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
//@highlight
smurfy.add_floating_smurf()
```



## {6. Prêt à lâcher ?}

Nous avons un Schtroumpf qui flotte, maintenant il faut dire à l'ordinateur quand le lâcher !

---

- :game: Depuis la catégorie `||controller:Contrôleur||`, prends<br/>
`||controller:quand bouton A est appuyé||`<br/>
et dépose-le dans **une zone vide** de l'espace de travail. 

- :sun: Ensuite, va dans `||smurfy:Smurfy||` et fais glisser<br/>
`||smurfy:drop Smurf||`<br/>
dans le conteneur vide<br/>
`||controller(noclick):quand bouton A est appuyé||`<br/>
qui se trouve maintenant dans l'espace de travail. 

---

Essaie ton jeu ! Tu devrais pouvoir lâcher ton Schtroumpf en appuyant sur le bouton (A)
dans la fenêtre de jeu, ou sur la **barre d'espace** de ton clavier. 


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    smurfy.drop_smurf()
})
```



## {7. Un peu de suspense}

Faisons de l'effet avec des bruitages !

---

- :headphones: Depuis la catégorie `||music:Musique||`, trouve un bloc qui te plaît et
dépose-le n'importe où dans le conteneur<br/>
`||controller(noclick):quand bouton A est appuyé||`<br/>
qui se trouve déjà dans ton espace de travail. 


- :mouse pointer: Si ton bloc a une option<br/>
`||music(noclick):jusqu'à la fin||`<br/>
clique dessus pour ouvrir un menu déroulant, puis choisis<br/>
`||music(noclick):en arrière-plan||`

---

~hint Qu'est-ce que je choisis ? 🤷🏽‍♂️

---

Tu peux décider si tu veux un bruitage à chaque appui sur le bouton (A), 
ou si tu veux jouer de la musique. Notre exemple utilise le bruitage **goutte d'eau** de la 
**Galerie** des effets sonores. 

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
```

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
})
```


---

## {8. Rends-le plus difficile}

Tu as maintenant un jeu complet ! Tu te rends compte ?

Mais le jeu est assez facile à gagner. Rendons-le plus difficile.

---

- :id card: Depuis la catégorie `||info:Info||`, fais glisser<br/>
`||info:démarrer compte à rebours (10) (s)||`<br/>
**à la fin** de ton conteneur <br/>
`||loops(noclick):au démarrage||`.


- :id card: Fais aussi glisser un autre bloc <br/>
`||info:démarrer compte à rebours (10) (s)||`<br/>
**à la fin** de ton conteneur <br/>
`||controller(noclick):quand bouton A est appuyé||`.


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
//@highlight
info.startCountdown(10)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
    //@highlight
    info.startCountdown(10)
})
```



## {9. Quand le temps est écoulé}

C'est super, mais quand le temps est écoulé, le jeu s'arrête tout simplement. Donnons au joueur 
plus de chances de construire une haute tour.

---

- :id card: Depuis la catégorie `||info:Info||`, fais glisser le conteneur<br/>
`||info:quand compte à rebours terminé||`<br/> 
dans **une zone vide** de l'espace de travail. 


- :id card: Retourne dans la catégorie `||info:Info||` et fais glisser<br/>
`||info:modifier la vie de [-1]||`<br/> 
dans le conteneur **vide** <br/>
`||info(noclick):quand compte à rebours terminé||`<br/> 
qui se trouve maintenant dans ton espace de travail. 


- :id card: Termine cette partie en faisant glisser un nouveau bloc<br/>
`||info:démarrer compte à rebours (10) (s)||`<br/>
**à la fin** du conteneur <br/>
`||info(noclick):quand compte à rebours terminé||`<br/> 
dans ton espace de travail. 

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(10)
})
```


## {10. Plus de vies}

Si tu veux donner à ton joueur plus de chances de gagner, tu peux augmenter le nombre 
de vies au départ.

---

- :id card: Depuis la catégorie `||info:Info||`, fais glisser<br/>
`||info:définir vie à (5)||`<br/>
dans le conteneur `||loops(onclick):au démarrage||`.

---

C'est tout ! Maintenant, joue à ton jeu et essaie d'atteindre le sommet !

#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.startCountdown(10)
//@highlight
info.setLife(5)
```




## {Terminé}

**🥳 Bravo 🥳**

Tu as terminé le tutoriel !

Quand tu es prêt, clique sur **Terminé** pour partager ton jeu avec ta famille et tes amis !


```blockconfig.global
scene.setBackgroundColor(13)
info.setLife(5)
music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```




```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    info.startCountdown(10)
    smurfy.drop_smurf()
})
info.onCountdownEnd(function () {
    info.startCountdown(10)
    info.changeLifeBy(-1)
})
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.setLife(3)
info.startCountdown(10)
music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004120000000400011d04000800012008000c000124`), music.PlaybackMode.InBackground)
music.baDing.play()
```



```package
arcade-sprite-data=github:microsoft/arcade-sprite-data#v0.0.5
```



```customts
namespace SpriteKind {
    export const Mountain = SpriteKind.create()
    export const Smurf = SpriteKind.create()
}


//% weight=100 color=#3ea8b8 icon="\uf185"
namespace smurfy {

    let smurf_weight = 0
    let smurf: Sprite = null
    let moving_smurf: Sprite = null
    let current_smurf: Sprite = null
    let bottom_smurf: Sprite = null
    let center_of_gravity = 0
    let mountain_smurfs: Sprite[] = []
    let top_smurf: Sprite = null
    let smurf_fell_off = false
    let village: Image[] = []
    export let speed = 60

    village = [assets.image`sit`, assets.image`squat`, assets.image`float`, assets.image`smurfette`, 
    assets.image`jump`, assets.image`ken`, assets.image`profile`]

    scene.onOverlapTile(SpriteKind.Smurf, assets.image`winCloud`, function (sprite, location) {
        game.gameOver(true)
    })

    sprites.onOverlap(SpriteKind.Smurf, SpriteKind.Mountain, function (sprite, otherSprite) {
        sprite.vy = 0
        sprite.ay = 0
        sprite.setKind(SpriteKind.Mountain)
        smurf_fell_off = will_the_smurf_fall_off(sprite, otherSprite)
        if (smurf_fell_off) {
            sprite.startEffect(effects.fire)
        } else if (will_the_stack_fall_down()) {
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            explode_smurfs()
            pause(1000)
            game.gameOver(false)
        } else {
            top_smurf = sprite
            scene.cameraFollowSprite(sprite)
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            info.changeScoreBy(1)
        }
        add_floating_smurf()
    })




    // calculate new center of gravity
    function will_the_stack_fall_down() {
        mountain_smurfs = sprites.allOfKind(SpriteKind.Mountain)
        center_of_gravity = 0
        for (let value of mountain_smurfs) {
            center_of_gravity += value.x
        }
        if (center_of_gravity / mountain_smurfs.length < bottom_smurf.left || center_of_gravity / mountain_smurfs.length > bottom_smurf.right) {
            return true
        }
        return false
    }

    function explode_smurfs() {
        current_smurf = bottom_smurf
        while (current_smurf) {
            current_smurf.setFlag(SpriteFlag.Ghost, true)
            current_smurf.setVelocity(randint(-200, 200), randint(-200, 200))
            current_smurf = sprites.readDataSprite(current_smurf, "smurf on top of me")
            scene.cameraFollowSprite(null)
        }
    }

    /**
    * Sets Smurf falling
    */
    //% blockId=drop_smurf 
    //% help=tutorial-only
    //% block="drop Smurf"
    export function drop_smurf() {
        moving_smurf.ay = 300
        moving_smurf.vx = 0
        moving_smurf.setFlag(SpriteFlag.BounceOnWall, false)
    }


    /**
    * Places first Smurf on ground
    */
    //% blockId=first_smurf 
    //% help=tutorial-only
    //% block="set first Smurf $myImage"
    //% myImage.shadow=screen_image_picker
    //% myImage.defl=assets.image`jump`
    //% weight=200
    export function set_first_smurf(myImage: Image) {
        tiles.setTilemap(assets.tilemap`level1`)
        smurf = sprites.create(myImage, SpriteKind.Mountain)
        smurf.ay = 300
        smurf.setPosition(80, 1225)
        scene.cameraFollowSprite(smurf)
        top_smurf = smurf
        smurf_weight = 22
        bottom_smurf = smurf
    }

    /**
    * Loads next Smurf into the air
    */
    //% blockId=add_smurf 
    //% help=tutorial-only
    //% block="new floating Smurf"
    export function add_floating_smurf() {
        speed = 60 + (info.score() * 3)
        moving_smurf = sprites.create(village[randint(0, village.length - 1)], SpriteKind.Smurf)
        if (moving_smurf.image.equals(top_smurf.image)) {
            sprites.destroy(moving_smurf)
            add_floating_smurf()
        } else {
            moving_smurf.bottom = top_smurf.top - 8
            moving_smurf.x = 80
            moving_smurf.setFlag(SpriteFlag.BounceOnWall, true)
            moving_smurf.vx = speed
        }
    }
    function will_the_smurf_fall_off(falling_smurf: Sprite, smurf_stack: Sprite) {
        if (falling_smurf.x > smurf_stack.right) {
            falling_smurf.setVelocity(50, -50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else if (falling_smurf.x < smurf_stack.left) {
            falling_smurf.setVelocity(-50, 50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else {
            return false
        }
    }
    scene.onHitWall(SpriteKind.Smurf, function (sprite, location) {
        if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            game.gameOver(false)
        }
    })
}
```

```assetjson
{
    "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAQAQAAAAAAABEBAAAAAAAAEQEAAAAAABARAQAAAAAAEREBAAAAAAAREQEAAAAAEBERAQAAAAAQEREBAAAAABAREQEAAAAAABERAQAAAAAAEBEBAAAAAAAQEQEAAAAAABARAQAAAAAAEBEBAAAAAAAAEQEAAAAAAAAQAQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cloud1\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAAAAQAQAAAAAAABEBAAAAAAAQEQEAAAAAABARAQAAAAAAEBEBAAAAAAAQEQEAAAAAABERAQAAAAAQEREBAAAAABAREQEAAAAAEBERAQAAAAAAEREBAAAAAAAREQEAAAAAABARAQAAAAAAABEBAAAAAAAAEQEAAAAAAAAQAQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cloud2\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAAAAQCQAAAAAAABEJAAAAAAAQEQkAAAAAABARCQAAAAAAEBEJAAAAAAAQEQkAAAAAABERCQAAAAAQEREJAAAAABAREQkAAAAAEBERCQAAAAAAEREJAAAAAAAREQkAAAAAABARCQAAAAAAABEJAAAAAAAAEQkAAAAAAAAQCQAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"winCloud\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwNTAwMDAzMDMwMzAzMDMwMzAzMDMwMzAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tilePath2\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
    "images.g.jres": "{\n    \"image13\": {\n        \"data\": \"hwQYACAAAAAAAAAAAAAAAAAAAPD/DwAAAAAAAAAAAAAAAADf3f0PAAAAAAAAAAAAAADw0d3d/QAAAAAAAAAAAAAA8NHd3d0PAAAAAAAAAAAA8P/R3d3dDwAAAAAA/wAAAJ/5HxHd3Q8AAAAA8JkPAPCZmf//EfEAAADwD///+QDwmZ//Ef8PAAD/n/mZmf8A8Jn5H/EPAADw/Z+Zn5/5AJ/5/xH//wAAH9H/mZ/5mQ+Z//nx3d3/AB8RH5+ZmZ//+ZmZH93d3Q8fER/xmZmfn5mZmR/d3d39HxEfn5mZn5+ZmZkf3d3d/R8RHx+Z+ZmZmZn58RHR3f0fER+f+Z+Z/5mZ+RH/HxEP8BHR8ZmZmQ/5mR/xEfH/APAdERH/mfkAmf8fEfEPAAAA3xER8ZkPAJ/5+d0PAAAAAPDdEZ+Z+QDwmfn/AAAAAAAA/92fn/kA8JmZ+QAAAAAAAAD/n//5APCZmfkAAAAAAAAAAPCZDwAAn5n/AAAAAAAAAAAA/wAAAPD/DwAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"sit\"\n    },\n    \"image12\": {\n        \"data\": \"hwQYABoAAAAAAADwDwAAAAD/DwAAAAAAAAAAn/kAAADwmfkAAAAAAAAAAJ+ZDwAA/5n5AAAAAAAA/wDwmf8AAJ+Z+QAAAAAA8N0P8J+ZDwDwmfnwDwAAAPDRDx/xn/kA8JkP3/0AAAAf0f8fEZ/5AJ/58P3/AAAAH9Hf//+ZmQ+f//Df/QAAAB/RH5+ZmZ//md//HfEAAAAfER/xmZmZ//n//RHxAAAAHxHREZ+ZmZ/5Ef8R8QAAAB8RERGfmZmfHxHxH/EAAAAfERER8Zn5mR8RER/xAAAA8BEREZ+Z+ZkfERHx8QAAAPAdEfGZn/+Z/xEf8fEAAAAA3xHx+ZmfmfkR/RHxAAAAAPDd8fmf/5mZH/ER8QAAAAAA/92f+fCZmR/RH/EAAAAAAAD//w8An5kf0R/xAAAAAAAAAAAAAPCZH9Hf/QAAAAAAAAAAAAAA/9398A8AAAAAAAAAAAAAAJ//DwAAAAAAAAAAAAAAAACf+QAAAAAAAAAAAAAAAAAA8A8AAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"squat\"\n    },\n    \"image2\": {\n        \"data\": \"hwQSACAAAAAAAAAA8A8AAAAA8A8AAAAAAAD/BJ/5AADwAJ8JAAAAAADwRACf+Q8Anw+f/wAAAAAAT/Xw8fn58JkP/90PAAAAAE9FH5mZmf+Z/9/RDwAA/wBPVZ/xmZ8Pn/8R8f8P8PkA8FQfEZmf//GZH/GZ+Z/5APBUH5H5mR8Rn/kRn5mf+fD/T/WZmZn//5n5Ef+fmfHf/fH/mZn/VEWfH/GZ+RkP3/Ed8Z//VVVU9RHxmZn/8R8R3xHxX0RERVXfEf+Z/w/fEfEdEfH1X1RU9B3/mZ/53xERERHR//BFRUX/9Z+Z+fAdERER3Q8AX1RVVfSRmfEAHxER3f0AAE9FVEX/HxEPAPAf0f0PAADwVFX/8PH/AAAA8P8PAAAAAP//AAAPAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"smurfette\"\n    },\n    \"image14\": {\n        \"data\": \"hwQhACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAAAAAAAAAAAAAn5+fDwAAAAAAAAAAAAAAAAAAAACf//8PAAAAAAAAAAAAAAAAAAAAAP+Znw8AAP//AAAAAAAAAAAAAAAA8PmZDwDw3d3/AAAAAAAAAAAAAPAPn/kAAB/d3d0PAAAAAAAAAAAAn/nw+QAAH93d3f0AAAAAAAAA8P/5n//5AAAf3d3d/QAAAAAAAPDf/fmZ//kA/x/R3d3dDwAAAAAA3x3xmZn/+fCZ/x/R3d0PAAAAAPAdEdGf+fD58P8f8R/d3Q8AAAAA3xER8Z+Zn/n/ERER/xHxAAAAAAAfERGfmZmfmZkfEfEA/w8AAAAA8BHx8Zn/n5mZmR8RDwAAAAAAAADwEfHxmfnx+ZmZ+REPAAAAAAAAAPAR/fGZ+fH5mZn5EQ8AAAAAAAAA8BH9EZ/5//mZmfkRDwAAAAAAAADwEf3xmfmf+ZmZ+REPAAAAAAAAAPAR/Z/5+Z//n5n5EQ8AAAAAAAAAAN//mfn5mf/5/x/x/fD/AAAAAAAA8P+Zn5n5//kA8B8RHxEPAAAAAAAAAP/w/5//+QAA8P/R3f0AAAAAAAAAAACf+fD5AAD/Ed3d/QAAAAAAAAAAAPAPn/kA8BHd3d39AAAAAAAAAAAAAPD5mQ/w0d3d3Q8AAAAAAAAAAAAA/5mfD/DR3d3dDwAAAAAAAAAAAACf//8P8NHd3f0AAAAAAAAAAAAAAJ+fnw8A3939DwAAAAAAAAAAAAAA8P//AADw/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"jump\"\n    },\n    \"image11\": {\n        \"data\": \"hwQTACAAAAAAAADwDwAAAAAAAAAAAAAAAAAAn/kAAAAAAAAAAADwDwD/AJ+Z/w8AAAAAAAAAL/LwIg/wmU//DwAAAAAA8PL/8CIP//9E9PQAAAAAAPAv8i8i/x//RPT0APD/AADwIvIvIi8f8U/09PD/Iv//8CLyLyIv/5//T/T/mS8vIv8i8i8iL5/5RET/mZkv8v//IvIvIiL/T0REn/n///8v8i/yLyIiIk9ERJ+ZmZmZ+SIv8i8iIiLyRESfmZmZmZkvIvIvIiIin0/0/////5mfLyLy8CIi8pn//wDwLyKf//Ai8vAiIvL5mQ8AAPAi/w8AL/IALyLy+Z8PAADw/w8AAC/yAPAiIp/5DwAAn/kAAADwDwAA/yLy/wAAAJ/5AAAAAAAAAAD//w8AAADwDwAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ken\"\n    },\n    \"image10\": {\n        \"data\": \"hwQTACAAAAAAAAD//w8AAADwDwAAAAAAAAD/3f3/AAAAn/kAAAAAAADw3RGf+Q8AAJ/5AAAA8A8A3xHx+Z8PAADw/w8AAN/98B0R8fmZ/wAA8N3/DwAf/fAREfGZn/kA8B8Rn//wEfEfERERn5n5/////5mfHxHxHxEREfGZmZmZmZmZmR8R8R8RERGfmZmfmZmZmfkRH/EfEdERn5mZn/n///8f8R/xHxEf8Zn5mf+ZmR/x//8R8R8RH/+f+Z8P/5kfHxH/EfEfEd8f8Zn5D/D/Ef//8BHxHxH/H/+Z+QAA8P8AAPAd/fDRD/+fmQ8AAAAAAADw3/3w3Q/wmf8AAAAAAAAA8P3/AP8An5kPAAAAAAAAAADf/QAAAJ/5AAAAAAAAAAAA8A8AAADwDwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"profile\"\n    },\n    \"image15\": {\n        \"data\": \"hwQYACAAAAAAAAAAAAAAAAD///D//w8AAAAAAAAAAADwmfnf3d39DwAAAAAAAAAAn5mZHxER0f0AAAAAAAAAAJ+ZmR8RERHxAAAAAP8PAACfmf/w8RER8QAAAP+f+QDwmZ////EfEfEAAP/9+Z8P8Jn/3R/x/REPAPDd8fmZD5/53xER8RH//wDfEfGZnw+fnx8RER8REfHwHRERn5n5mZn5Ef//HxHx8B0REfGZ+ZmZ+RHfDx8R8d8RERGfmfmZmfkRHw/wEQ8fERERn5mZn5n5EfEPAP8AHxEf8Zn/n/+f+RH/AAAAAB8RH5+Z+Z8P////+QAAAAAfEd//n/mfDwCf+fkAAAAAHxH/EfH5mQ8A8Jn5AAAAAB/R/xH/+fkAAAD/DwAAAAAf0Q//n5n5AAAAAAAAAAAA8P0PH5+fDwAAAAAAAAAAAAD/APCZ/wAAAAAAAAAAAAAAAACfmQ8AAAAAAAAAAAAAAAAAn/kAAAAAAAAAAAAAAAAAAPAPAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"float\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}"
}
```
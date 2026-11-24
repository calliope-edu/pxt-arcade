# Fête dansante

Appuie sur les touches fléchées qui correspondent à celles qui apparaissent dans les blocs à l'écran. Quand ton joueur entre en collision avec un bloc flèche, tu gagnes des points. Essaie de battre ton meilleur score et danse !

![Vue du jeu dans le simulateur](https://cdn.makecode.com/blob/d0485ac5564de94ba426044cf47f8a1d53c0d3b4/static/lessons/dance-party/working-game.gif)

## Objectifs d'apprentissage

Apprends les bases d'un jeu basé sur les collisions !

* Le concept de sprite
* Comment configurer une carte de tuiles et une scène
* Faire apparaître et détruire des projectiles
* Placer et déplacer un personnage
* Définir l'augmentation du score
* Créer des effets de particules
* Génération aléatoire

## Sections de la leçon

* [Partie 1 : Préparer la scène](#part-one-setting-the-scene)
* [Partie 2 : Créer le sprite](#part-two-creating-the-sprite)
* [Partie 3 : Déplacer le joueur](#part-three-move-the-player)
* [Partie 4 : Définir les variables de vitesse](#part-four-setting-speed-variables)
* [Partie 5 : Faire apparaître des projectiles](#part-five-spawning-projectiles)
* [Partie 6 : Définir le score et créer les collisions](#part-six-setting-score-and-creating-collisions)

## Partie 1 : Préparer la scène

Va dans l'éditeur [MakeCode Arcade](@homeurl@) et sélectionne **Nouveau projet** pour créer un nouveau jeu.

Une fois l'éditeur chargé, tu verras un bloc vert `||loops:on start||` déjà présent dans l'espace de travail de l'éditeur.

Pour créer un monde dans lequel le jeu existe, nous allons utiliser une carte de tuiles. Pour cela, va dans `||scene:scene||`, prends un bloc `||scene:set tilemap to||` et fais-le glisser dans `||loops:on start||`. Ouvre l'éditeur de carte de tuiles en cliquant sur la case grise de ce bloc.

Dans l'éditeur de carte de tuiles, nous pouvons créer un niveau pour le jeu. D'abord, règle la taille du monde sur 10x8 dans le coin inférieur gauche ; la carte aura ainsi à peu près la taille de l'écran. Ensuite, trace une ligne tout en bas avec une tuile qui servira de mur inférieur. Remplis le reste de l'écran avec un arrière-plan de ton choix. Enfin, clique sur le bouton `Draw Walls` et trace une autre ligne en bas de l'écran ; ces tuiles prendront une teinte rouge, indiquant qu'elles seront des **murs** qui empêchent les sprites de passer.

Pour rendre l'arrière-plan moins simple, tu peux ajouter des effets de scène. Prends pour cela un bloc `||scene:start screen effect||` dans `||scene:Scene||`. Ouvre la liste déroulante du bloc et sélectionne le champ d'étoiles pour créer un thème spatial.

![Animation montrant la réalisation de la carte de tuiles de cette étape](https://cdn.makecode.com/blob/b499de43673f2937daf49b4061e6d1a6154c4aa4/static/lessons/dance-party/drawing-tilemap.gif)

```blocks
tiles.setTilemap(tilemap`level`)
effects.starField.startScreenEffect()
```

Félicitations ! Tu as maintenant préparé la scène de ton jeu.

## Partie 2 : Créer le sprite

Pour créer le sprite, prends un bloc `||sprites:set monSprite to sprite of kind player||` dans `||sprites:Sprites||` et fais-le glisser dans `||loops:on start||`. Fais maintenant un clic droit sur `monSprite` et sélectionne « Renommer la variable » dans le menu. Renomme ton sprite comme tu veux appeler ton joueur. Dans le bloc `||sprites:sprite of kind player||`, sélectionne le carré gris et dessine une image de ton joueur.

Nous voulons maintenant définir la position de départ de notre sprite. Pour cela, va dans Sprites, prends `||sprites:set monSprite position to x y||` et fais-le glisser sous `||sprites:sprite of kind player||`. Règle la position `x` sur **80** et la position `y` sur **100**.

```blocks
let steve: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
```

## Partie 3 : Déplacer le joueur

Notre prochaine étape consiste à créer un joueur qui ne peut se déplacer qu'entre quatre emplacements. Pour cela, va dans `||controller:Controller||`, prends `||controller:on button pressed||` et fais-le glisser dans ton espace de travail. Puis, dans la première liste déroulante, sélectionne **right**. Prends maintenant un `||sprites:set monSprite position to x y||` et sélectionne ton sprite dans la liste déroulante. Pour la valeur `x`, saisis **130** puis pour la valeur `y`, saisis **100**.

Sélectionne le `||controller:on button pressed||` qui contient le `||sprites:set monSprite position to x y||` et duplique-le **3** fois. Pour les nouvelles copies, règle l'une sur `up`, une autre sur `down` et la troisième sur `left`. Comme nous voulons que la variable `y` reste la même, modifie uniquement les positions `x`.

* Haut : x = 60
* Bas : x = 100
* Droite : x = 130
* Gauche : x = 30

Tu devrais maintenant avoir quatre blocs `||controller:Controller||` qui ressemblent à ceci.

```blocks
let steve: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
```

![Joueur se déplaçant à l'écran](https://cdn.makecode.com/blob/9926c4b899c331fd90cf34cf0b3bae7c838832cf/static/lessons/dance-party/moving-player.gif)

## Partie 4 : Définir les variables de vitesse

Pour commencer avec nos variables de vitesse, prends un `||variables:set var to||` et fais-le glisser dans `||loops:on start||`. Renomme la variable en speed et règle-la sur `40`.

```blocks
let speed = 40
```

### ~indice

#### Modifier la vitesse

Nous pouvons augmenter la vitesse à laquelle les projectiles tombent. Pour cela, va dans `||game: on game update every ms||` et fais-le glisser dans l'espace de travail. Change ensuite le nombre en `2000 ms`. Va dans `||variables:Variables||`, sélectionne `||variables:change by||` et fais-le glisser dans `||game:on game update||`. Ouvre la liste déroulante et choisis la variable speed. Désormais, toutes les deux secondes, la vitesse des projectiles augmentera de 1.

```blocks
let speed = 40
game.onUpdateInterval(2000, function () {
    speed += 1
})
```

### ~

## Partie 5 : Faire apparaître des projectiles

Nous voulons que les projectiles apparaissent toutes les demi-secondes. Va donc dans `||game:Game||`, prends `||game:on game update every ms||` et place-le dans ton espace de travail. Règle l'intervalle sur `500 ms`. Ensuite, nous voulons choisir dans quel « couloir » faire apparaître notre projectile. Il nous faut une variable lane pour cela. Pour créer cette variable, va dans `||variables:Variables||` et clique sur **Créer une variable**. Nomme la nouvelle variable `lane`. Fais glisser le bloc `||set lane to||` dans `||game:on game update every ms||`. Prends un `||math:pick random||` dans `||math:Math||` et place-le après le **à** de notre `||variables:set lane to||`. Règle le premier nombre sur `1` et le second sur `4` dans `||math:pick random||`.

Nous voulons maintenant créer les projectiles pour chaque couloir. Prends un bloc `||logic: if then else if||` dans `||logic:Logic||` et place-le sous la variable `lane`. Puis, dans `||logic:Logic||`, prends un bloc `||Logic:_ = _||` et place-le dans la première instruction `||logic:if then||`. Fais maintenant glisser un bloc `||variables:lane||` dans la première case et saisis `1` dans la seconde. Duplique cette comparaison 3 fois et règle la seconde case sur `2`, `3` et `4` respectivement. Clique deux fois sur le symbole **(+)** du bloc `||logic:if else||` et fais glisser ces comparaisons dans les instructions `||logic:else||`.

Prends maintenant 4 `||sprites:set monSprite to sprite of kind||` et fais-en glisser un dans chacune des 4 positions de l'instruction `||logic:if||`. Définis la variable pour chaque instruction `||logic:if||` comme ceci :

* Pour 1, le nom de la variable est Left
* Pour 2, le nom de la variable est Up
* Pour 3, le nom de la variable est Down
* Pour 4, le nom de la variable est Right

Selon le nom de la variable, sélectionne la case grise et dessine une flèche pointant dans la direction indiquée par ce nom. Règle chaque type sur projectile.

Nous avons créé plus tôt une variable speed. Elle va maintenant déterminer la vitesse des projectiles qui apparaissent. Prends un `||sprites:set monSprite velocity to||` et fais-le glisser dans chacune des 4 positions de l'instruction if. Fais correspondre `monSprite` à la variable de l'instruction if, puis règle `vx` sur `0` et fais glisser la variable speed depuis `||variables:Variables||` à la position vy. Répète pour toutes les sections.

Dans `||sprites:Sprites||`, prends un bloc `||sprites:set position to||` pour chacune des 4 sections des instructions `||logic:if||`. Place-les à la fin de chaque section. Remplace la variable `monSprite` par la variable de direction correspondant à l'instruction `||logic:if||` et règle `y` sur `8`. Règle maintenant les positions `x` sur ces valeurs :

* Gauche : 30
* Haut : 60
* Bas : 100
* Droite : 130

Bravo, nous pouvons maintenant faire apparaître des projectiles !

![Apparition des projectiles](https://cdn.makecode.com/blob/57714e4043a5fdc65cfa99551fce40647c2ac5e2/static/lessons/dance-party/spawning-projectiles.gif)

```blocks
let speed = 40
game.onUpdateInterval(500, function () {
    let lane = randint(1, 4)
    if (lane == 1) {
        let left: Sprite = null
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        let up: Sprite = null
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        let down: Sprite = null
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        let right: Sprite = null
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
```

## Partie 6 : Définir le score et créer les collisions

### Définir le score et les vies

Dans notre jeu, nous voulons que le joueur ait un score correspondant au nombre de projectiles détruits, et qu'il ait plusieurs vies au cas où il manquerait des blocs. Pour cela, va dans `||info:info||` et fais glisser `||info:set score to||` dans le bloc `||loops: on start||`. Prends ensuite un `||info:set life to||` et fais-le glisser sous `||info:set score to||`. Change maintenant le nombre dans `||info:set life to||` en **5** pour que le joueur puisse manquer cinq projectiles avant la fin de la partie.

```blocks
info.setScore(0)
info.setLife(5)
```

Quand le joueur n'a plus de vies, la partie doit se terminer et son score doit s'afficher. Pour cela, va dans `||info:Info||`, prends `||info:on life zero||` et fais-le glisser dans ton espace de travail. Va ensuite dans `||game:game||` et prends `||game:use effect||`. Fais-le glisser dans `||info:on life zero||`. Clique sur le symbole **(+)**. Quand tu cliques sur **(+)**, tu devrais pouvoir sélectionner un effet. Sélectionne l'effet `confetti`. Prends maintenant un `||game:game over win||` et place-le à la fin de `||info:on life zero||`.

```blocks
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
```

Tu as maintenant mis en place la base du système de score !

### Gérer les collisions

Quand un projectile touche le mur du bas, nous voulons que cela compte comme une collision et que le joueur perde une vie. Pour ajouter cette fonction, va dans `||scene:Scene||`, sélectionne `||scene:on sprite of kind hits wall||` et fais-le glisser dans ton espace de travail. Règle maintenant le type sur `projectile`.

Va maintenant dans `||sprites:Sprite||`, sélectionne `||sprites:destroy monSprite||` et fais-le glisser dans `||scene:on sprite of kind hits wall||`. Fais glisser la variable `||variables:sprite||` depuis le bloc d'événement et remplace `||variables:monSprite||` par celle-ci. Clique ensuite sur le symbole **(+)**, sélectionne l'effet `fire` et règle la durée sur `100 ms`. Prends un `||info:change life by||` et place-le sous `||sprites:destroy sprite with effect||`. Règle le nombre sur `-1`. Désormais, chaque fois qu'un projectile touche le bas, il sera détruit et le nombre de vies restantes du joueur diminuera.

![Collision manquée à l'écran](https://cdn.makecode.com/blob/a9e37714ea14ae47dac884db9a84d7c7d3544d6d/static/lessons/dance-party/missed-collision.gif)

```blocks
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
```

Quand le joueur entre en collision avec un projectile, son score doit augmenter et le projectile doit être détruit. Va dans `||sprites:Sprites||`, prends `||sprites:on sprite of kind player overlaps autreSprite of kind||` et fais-le glisser dans ton espace de travail. Change le champ après `autreSprite` de `player` en `projectile`. Retourne maintenant dans `||sprites:Sprites||` et fais-y glisser `||sprites:destroy monSprite||`. Fais glisser la variable `||variables:autreSprite||` du bloc d'événement sur la variable `||variables:monSprite||` pour la remplacer. Clique sur le symbole **(+)**, règle l'effet sur `disintegrate` et saisis `100 ms`. Va maintenant dans `||info:Info|` et prends `||info:change score by||`, puis fais-le glisser sous `||sprites:destroy autreSprite with effect||`.

![Collision du joueur avec des projectiles](https://cdn.makecode.com/blob/e2d8769aa5f30ad1e03f5077c71eb5a1c9bfec0d/static/lessons/dance-party/collision-projectiles.gif)

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    autreSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
```

Et maintenant, nous avons un jeu entièrement fonctionnel !

## Jeu final

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    autreSprite.destroy(effects.disintegrate, 100)
    music.setVolume(10)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)

effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level`)

steve = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed = 40
game.onUpdateInterval(500, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
game.onUpdateInterval(2000, function () {
    speed += 1
})
```

![Jeu fonctionnel](https://cdn.makecode.com/blob/d0485ac5564de94ba426044cf47f8a1d53c0d3b4/static/lessons/dance-party/working-game.gif)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7uw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```
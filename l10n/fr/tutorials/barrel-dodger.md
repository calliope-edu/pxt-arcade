# Esquive les tonneaux

## {Introduction @unplugged}

Crée un jeu d'action où le joueur doit réagir vite pour éviter des tonneaux qui foncent sur lui. S'il est touché, c'est **GAME OVER !**

![Le jeu Esquive les tonneaux en action](/static/lessons/barrel-dodger/barrel-dodger.gif)

## {Étape 1}

Créons une plateforme comme sol en bas de l'écran.

Prends ``||scene:définir plan des tuiles à||`` et place-le dans ``||loops:au démarrage||``.
Clique sur la case grise pour ouvrir le ``tilemap editor``.
En bas à gauche, règle la taille du plan des tuiles sur ``10x8``
et dessine une plateforme dans les deux rangées du bas du plan des tuiles.
Enfin, clique sur le bouton `Wall` et remplis ces deux rangées avec des tuiles de mur.

![Exemple : dessiner un plan des tuiles](/static/lessons/barrel-dodger/draw-tilemap.gif)

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
```

## {Étape 2}

Trouve ``||variables(sprites):définir monSprite à||`` dans ``||sprites:Sprites||``. Fais-le glisser dans ``||loops:au démarrage||`` et dessine le sprite de ton joueur.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
// @highlight
let monSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
```

## {Étape 3}

Ouvre l'éditeur de plan des tuiles et trouve la position de la tuile où tu veux placer ton sprite (indice : c'est 1, 5 !). Tu peux voir la position en bas à gauche de l'éditeur.

Utilise le bloc ``||scene:placer monSprite sur plan des tuiles col ligne||`` pour placer ton joueur sur cette tuile.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
let monSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
// @highlight
tiles.placeOnTile(monSprite, tiles.getTileLocation(1, 5))
```

## {Étape 4}

Donnons au sprite la capacité de sauter quand on appuie sur un bouton. Pour cela, on déplace
le joueur vers le haut dans un événement ``||controller:quand bouton A est appuyé||``. Dans cet événement, fais monter le sprite avec ``||sprites:vy (vitesse selon y)||``. Utilise `-200` comme valeur de `vy`.

```blocks
let monSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    monSprite.vy = -200
})
```

## {Étape 5}

Fais glisser ``||sprites:définir monSprite x||`` dans ``||loops:au démarrage||``, clique sur le menu déroulant et choisis ``||sprites:ay (accélération selon y)||``. Règle la valeur sur `500` pour que le personnage soit attiré vers le bas par la « gravité ».

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
let monSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
tiles.placeOnTile(monSprite, tiles.getTileLocation(1, 5))
// @highlight
monSprite.ay = 500
```

## {Étape 6}

Il faut vérifier que le sprite est au sol avant de sauter : fais donc glisser une condition ``||logic:si alors||`` dans ``||controller:quand bouton A est appuyé||``. Remplace `true` par ``||scene:monSprite touche-t'il le mur||`` et change le côté ``left`` en ``bottom``. Fais maintenant glisser le bloc ``||sprites:vy (vitesse selon y)||`` ajouté plus tôt dans la condition ``||logic:si alors||``.

```blocks
let monSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.isHittingTile(CollisionDirection.Bottom)) {
        monSprite.vy = -200
    }
})
```

## {Étape 7}

Ajoutons des tonneaux qui se déplacent à des vitesses aléatoires. Ils partent du côté droit de l'écran et volent vers le sprite du joueur. Place un ``||game:quand mise à jour du jeu chaque||`` dans l'éditeur et règle l'intervalle sur `2000` millisecondes. Fais glisser un ``||sprites:projectile depuis bord||`` dedans et dessine le tonneau.

![Dessiner un tonneau dans l'éditeur d'images](/static/lessons/barrel-dodger/draw-barrel.gif)

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, 100, 50)
})
```

## {Étape 8}

Fais glisser un bloc ``||math:choisir aléatoirement entre||`` à la place de ``vx`` et règle l'intervalle de ``-100`` à ``-80``. Règle aussi la vitesse ``vy`` du projectile sur ``0``.

```blocks
game.onUpdateInterval(2000, function () {
    // @highlight
    let projectile = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, randint(-100, -80), 0)
})
```

## {Étape 9}

Trouve ``||scene:placer monSprite sur plan des tuiles col ligne||`` et fais-le glisser dans ``||game:quand mise à jour du jeu chaque||`` après ``||variables(sprites):définir projectile à||``.
Règle ``||scene:col||`` sur 9 et ``||scene:ligne||`` sur 5 : c'est la tuile du côté droit de l'écran, juste au-dessus du mur.
Change ``||variables(noclick):monSprite||`` en ``||variables(noclick):projectile||``, pour qu'il désigne le sprite qui vient d'être créé.

```blocks
game.onUpdateInterval(2000, function () {
    let  projectile = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    // @highlight
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```

## {Étape 10}

Chaque fois qu'un tonneau commence à bouger, on veut augmenter le score. Prends ``||info:modifier le score de||`` et place-le dans ``||game:quand mise à jour du jeu chaque||``.

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    // @highlight
    info.changeScoreBy(1)
})
```

## {Étape 11}

Dernière étape : terminer la partie si un tonneau touche le sprite du joueur. Fais glisser un ``||sprites:quand sprite chevauche||`` dans l'éditeur. Règle le type de sprite de ``autreSprite`` sur ``Projectile``. Termine la partie avec un bloc ``||game:jeu terminé||`` à l'intérieur.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    game.gameOver(false)
})
```

## {Terminé}

Génial ! Félicitations, tu as créé le jeu Esquive les tonneaux !

# Barrel Dodger

Crée un jeu d'action où le joueur doit réagir vite pour éviter des tonneaux rapides. Si tu es touché, c'est **GAME OVER !**

![Partie de Barrel Dodger en cours](https://cdn.makecode.com/blob/4f5ea194a5cfd19789eabefb674c346da2f8bb8b/static/lessons/barrel-dodger/barrel-dodger.gif)

## Marche à suivre (1ᵉ étape)

OK, commençons par créer notre sprite `Player`. Place un bloc `||variables(sprites):set monSprite to||` dans un bloc `||loops:on start||` pour créer ton sprite.

```blocks
let monSprite: Sprite = sprites.create(img``, SpriteKind.Player)
```

## Marche à suivre (2ᵉ étape)

Dessine l'image de ton sprite joueur avec l'éditeur d'images.

![Éditeur d'images de sprite](https://cdn.makecode.com/blob/bd2c87a67ed4a5c830bc81b45c818ebb14890fd7/static/lessons/barrel-dodger/draw-player.gif)

## Marche à suivre (3ᵉ étape)

Nous voulons placer notre personnage plus près du bord gauche de l'écran : fais glisser un `||sprites:set monSprite position||` dans `||loops:on start||` et règle `x` sur `20` et `y` sur `70`.

```blocks
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
monSprite.setPosition(20, 70)
```

## Marche à suivre (4ᵉ étape)

Fais glisser un `||variables(sprites):set monSprite x||` dans `||loops:on start||`, clique sur la liste déroulante et choisis `ay (acceleration y)`. Règle la valeur sur `500` pour que le personnage soit attiré vers le bas par la « gravité ».

```blocks
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
monSprite.setPosition(20, 70)
monSprite.ay = 500
```

## Marche à suivre (5ᵉ étape)

Créons maintenant une plateforme en bas de l'écran. Prends un `||scene:set tilemap to||` et place-le dans `||loops:on start||`. Clique sur la case grise pour ouvrir l'`tilemap editor`. Dans le coin inférieur gauche, règle la taille de la tilemap sur `10x8` et dessine une plateforme dans les deux rangées du bas. Enfin, clique sur le bouton `Wall` et remplis ces deux rangées de murs.

![Exemple de dessin de tilemap](https://cdn.makecode.com/blob/c2c94a4d83f7aed434e26b158a45ab98abc2bb8b/static/lessons/barrel-dodger/draw-tilemap.gif)

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

## Marche à suivre (6ᵉ étape)

Ensuite, faisons bouger des tonneaux à des vitesses aléatoires. Fais-les partir du bord droit de l'écran et voler vers le sprite joueur. Place un `||game:on game update every||` dans l'éditeur et règle l'intervalle sur `1500` millisecondes. Fais glisser un `||sprites:projectile from side||` à l'intérieur. Clique sur la case d'image vide du bloc projectile et change les dimensions en 8x8. Dessine le tonneau.

![Dessiner un tonneau dans l'éditeur d'images](https://cdn.makecode.com/blob/d8219770bd82d7eef31bef97cfa6cf3e51102218/static/lessons/barrel-dodger/draw-barrel.gif)

Ensuite, fais glisser un bloc `||math:pick random||` à la place de `vx` et règle la plage de `-100` à `-80`.

```blocks
game.onUpdateInterval(1500, function () {
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

## Marche à suivre (7ᵉ étape)

Trouve `||scene:place monSprite on top of tilemap col row||` et fais-le glisser dans `||game:on game update interval||` après `||variables:set projectile to||`. Règle `||scene:col||` sur 9 et `||scene:row||` sur 5 : c'est la tuile du bord droit de l'écran juste au-dessus du mur. Remplace `||variables(noclick):monSprite||` par `||variables(noclick):projectile||` pour qu'il désigne le sprite qui vient d'être créé.

```blocks
game.onUpdateInterval(1500, function () {
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
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```

## Marche à suivre (8ᵉ étape)

Donnons au sprite la capacité de sauter quand on appuie sur un bouton. On utilise pour cela `||controller:on any button pressed||`. Trouve ce bloc et fais-le glisser dans l'éditeur. Change le bouton de `any` à `A`.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

## Marche à suivre (9ᵉ étape)

Il faut vérifier que le sprite est au sol avant de sauter : fais glisser une condition `||logic:if then||` dans `||controller:on A button pressed||`. Remplace `true` par `||scene:is monSprite hitting wall||` et change le côté `left` en `bottom`. Enfin, ajoute un `||sprites:set monSprite x||` et choisis `||sprites:vy (velocity y)||` dans la liste déroulante. Règle la valeur sur `-250`.

```blocks
let monSprite = sprites.create(img`
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.isHittingTile(CollisionDirection.Bottom)) {
        monSprite.vy = -250
    }
})
```

## Étape 10

Chaque fois qu'un tonneau commence à bouger, nous voulons augmenter le score. Prends un `||info:change score by||` et place-le dans `||game:on game update every||`. Laisse la valeur à `1`.

```blocks
game.onUpdateInterval(1500, function () {
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
    info.changeScoreBy(1)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```

## Étape 11

La dernière étape consiste à terminer la partie si un tonneau touche le sprite joueur. Fais glisser un `||sprites:on sprite overlaps||` dans l'éditeur. Règle le type de sprite de `autreSprite` sur `Projectile`. Termine la partie avec un bloc `||game:game over||` à l'intérieur.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    game.gameOver(false)
})
```

## Terminé

Génial ! Bravo, tu as créé le jeu Barrel Dodger ! Tu es sur la bonne voie pour créer des jeux incroyables avec @boardname@.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.isHittingTile(CollisionDirection.Bottom)) {
        monSprite.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {
    game.gameOver(false)
})
let monSprite = sprites.create(img`
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
monSprite.setPosition(20, 70)
monSprite.ay = 500

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
game.onUpdateInterval(1500, function () {
    let projectile = sprites.createProjectileFromSide(img`
        1 e e e e e e 1
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        1 e e e e e e 1
    `, randint(-100, -80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```
# Champ d'étoiles

## {Introduction @unplugged}

Des étoiles qui défilent en arrière-plan, c'est un excellent moyen de montrer le mouvement dans un jeu qui se passe dans l'espace. Si l'écran se remplit d'étoiles en forme de projectiles, on a l'impression que le sprite du joueur fonce à travers l'espace, même s'il reste au même endroit à l'écran.

![Arrière-plan de champ d'étoiles en action](/static/concepts/star-field/star-field-background.gif)

## {Étape 1}

Dans le tiroir ``||game:Jeu||`` de la boîte à outils, prends un bloc ``||game:quand mise à jour du jeu||`` et fais-le glisser dans l'espace de travail.

```blocks
game.onUpdate(function () {

})
```

## {Étape 2}

Dans ``||sprites:Sprites||``, trouve le bloc ``||variables(sprites):définir projectile à||`` qui contient un ``||sprites:projectile depuis bord||``. Fais-le glisser dans ``||game:quand mise à jour du jeu||``. Change `vx` en `0` et `vy` en `100`.

```blocks
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
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
`, 0, 100)
})
```

## {Étape 3 @fullscreen}

Clique sur la case grise dans ``||sprites:projectile depuis bord||`` et dessine un seul pixel blanc pour l'étoile.

![Dessiner l'image de l'étoile](/static/concepts/star-field/creating-star-image.gif)

```blocks
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, 100)
})
```

## {Étape 4 @fullscreen}

Prends un ``||Math:choisir aléatoirement entre 0 et 10||`` dans ``||Math:Maths||``. Place-le dans l'emplacement ``||sprites:vy||`` de ``||sprites:projectile||``, à la place du ``100``. Dans ``||Math:choisir aléatoirement entre 0 et 10||``, change le ``0`` en ``20`` et le ``10`` en ``30``.

```blocks
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
})
```

## {Étape 5}

Retourne dans ``||sprites:Sprites||`` et trouve ``||sprites:définir la position de mySprite à||``. Place-le après ``||variables(sprites):définir projectile à||`` et remplace ``||variables:mySprite||`` par ``||variables:projectile||``.

```blocks
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
    projectile.setPosition(0, 0)
})
```

## {Étape 6}

Prends un autre ``||Math:choisir aléatoirement entre 0 et 10||`` et mets-le comme valeur ``||sprites:x||`` dans ``||sprites:définir la position de projectile à||``. Trouve ``||scene:largeur de l'écran||`` dans ``||scene:Scène||`` et remplace avec lui le ``10`` de ``||Math:choisir aléatoirement entre 0 et 10||``.

```blocks
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
    projectile.setPosition(randint(0, scene.screenWidth()), 0)
})
```

## {Étape 7 @fullscreen}

Pour l'instant, trop d'étoiles sont créées. Pour corriger ça, entoure les blocs dans ``||game:quand mise à jour du jeu||`` avec un bloc ``||logic:si alors||``.

![Entourer avec si alors](/static/concepts/star-field/surround-if-then.gif)

```blocks
game.onUpdate(function () {
    if (true) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Étape 8}

Prends un bloc ``||Math:0 % chance||`` dans ``||math:Maths||`` et remplace avec lui la condition ``true`` du bloc ``||logic:si alors||``. Change le pourcentage de ``0`` à ``25``.

```blocks
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Terminé}

Bravo, ton champ d'étoiles est terminé ! Construis le jeu de ton choix par-dessus, ou passe à l'étape suivante pour un défi qui t'aidera à optimiser le code.

## {Défi supplémentaire @fullscreen}

En réalité, les étoiles de l'espace sont à des millions d'années-lumière de tout le reste. Elles ne devraient donc pas interagir ni entrer en collision avec d'autres objets.

Trouve ``||sprites:définir mySprite destruction automatique||`` dans ``||sprites:Sprites||``. Place-le après ``||variables(sprites):définir projectile à||`` et remplace ``||variables:mySprite||`` par ``||variables:projectile||``. Change ``||sprites:destruction automatique||`` en ``||sprites:fantôme||`` et clique sur ``OFF`` pour le passer à ``ON``.

Cela améliore aussi beaucoup la fluidité du jeu, car il n'a plus besoin de traiter les chevauchements entre les étoiles et les autres sprites.

```blocks
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
})
```

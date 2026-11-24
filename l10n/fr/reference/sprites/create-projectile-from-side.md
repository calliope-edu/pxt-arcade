# créer un projectile depuis le côté

Crée un nouveau sprite en mouvement qui part du côté de l'écran.

```sig
sprites.createProjectileFromSide(img`.`, 50, 50)
```

Un projectile est un sprite en mouvement qui se déplace à partir de l'endroit où il est créé. Il se déplace avec des vitesses (`vx` et `vy`) que tu définis dans les directions horizontale et verticale.

Le côté de l'écran d'où part le projectile dépend de la direction des vitesses qui lui sont données. Les vitesses `vx` et `vy` ont des valeurs positives ou négatives qui déterminent la direction. Le projectile part d'un côté de l'écran selon la direction de la vitesse, comme le montre le tableau suivant.

|Côté|vx|vy|
|-|-|-|
|en haut à gauche|positive|positive|
|en bas à gauche|positive|négative|
|en haut à droite|négative|positive|
|en bas à droite|négative|négative|
<br/>

Le projectile possède beaucoup des mêmes propriétés qu'un sprite immobile. Il peut chevaucher d'autres sprites, heurter des tuiles et les chevaucher.

Les projectiles sont détruits lorsqu'ils sortent de l'écran.

## Paramètres

* **img** : une [image](/types/image) pour le sprite projectile.
* **vx** : la vitesse à laquelle le sprite se déplace dans la direction horizontale.
* **vy** : la vitesse à laquelle le sprite se déplace dans la direction verticale.

## Retour

* un nouveau [sprite](/types/sprite) projectile qui se déplace avec les vitesses définies.

## Exemples #example

### Créer un projectile en bas à gauche #ex1

Lance un sprite projectile depuis le coin inférieur gauche de l'écran. Fais-le rebondir sur les bords de l'écran.

```blocks
let projectile = sprites.createProjectileFromSide(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    `, 40, -30)
projectile.setFlag(SpriteFlag.BounceOnWall, true)
```

### Créer des projectiles de tous les côtés #ex2

Crée des projectiles qui partent au hasard de tous les côtés de l'écran. Montre la direction du projectile en affichant ses propriétés physiques.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        `, randint(-50, 50), randint(-50, 50))
    projectile.setFlag(SpriteFlag.ShowPhysics, true)
})
```

## Voir aussi #seealso

[créer](/reference/sprites/create), [créer un projectile depuis un sprite](/reference/sprites/create-projectile-from-sprite)
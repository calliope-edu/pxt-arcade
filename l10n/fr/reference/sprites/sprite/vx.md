# vx (propriété)

Obtiens ou définis la vitesse de déplacement horizontale d'un sprite en pixels par seconde.

## Obtenir

Obtiens la vitesse horizontale du sprite.

```block
let monSprite: Sprite = null

let horzSpeed = monSprite.vx
```
```typescript-ignorelet
horzSpeed = monSprite.vx
```

### Valeur retournée

* un [nombre](/types/number) qui est la vitesse horizontale actuelle du sprite en pixels par seconde.

## Définir

Définis la vitesse horizontale du sprite.

```block
let monSprite: Sprite = null

monSprite.vx = 0
```

```typescript-ignore
monSprite.vx = 0
```

### Paramètre

* **value** : la nouvelle vitesse horizontale du sprite en pixels par seconde.

## Mouvement des sprites

Un sprite qui n'est pas un projectile est immobile quand il est créé. Tu fais bouger le sprite en définissant sa vitesse, ou _vélocité_, dans la direction **x**, la direction **y**, ou les deux. Pour la direction **x**, une vitesse positive fait aller le sprite vers la droite. Pour le faire aller vers la gauche, tu utilises une vitesse négative.

Si tu ne suis pas le sprite avec la _caméra_ ou si tu ne vérifies pas quand le sprite atteint le bord de l'écran, le sprite sortira de l'écran.

### ~ hint

**Qu'est-ce que la vitesse, au juste ?**

La vitesse, c'est la distance parcourue par un objet pendant une certaine durée. Une voiture peut parcourir 50 kilomètres en une heure, elle roule donc à 50 kilomètres par heure (50 km/h). Un avion à réaction peut voler jusqu'à 913 km/h et traverser certains continents en 3 ou 4 heures.

Dans ton jeu, la distance se mesure en pixels, donc la vitesse d'un sprite est en _pixels par seconde_. Si l'écran fait 160 pixels de large, un sprite avec une vitesse de 40 pixels par seconde traversera l'écran en 4 secondes.

### ~

## Exemples #example

### Aller de chaque côté

Envoie un sprite vers la droite à `40` pixels par seconde. Quand il atteint le bord droit de l'écran, renvoie-le vers le côté gauche.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let monSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
monSprite.left = 0
monSprite.vx = 40
game.onUpdateInterval(500, function () {
	if (monSprite.x < 0 || monSprite.x > scene.screenWidth()) {
        monSprite.vx = monSprite.vx * -1
    }
})
```

### Combien de pixels parcourus ?

Mets un sprite en mouvement. Vérifie après environ `1` seconde la distance parcourue par le sprite.

```blocks
namespace SpriteKind {
    export const Example = SpriteKind.create()
}
let interval = 0
let monSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Example)
monSprite.left = 0
monSprite.vx = 60
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        monSprite.vx = 0
        monSprite.say("I went " + monSprite.left + " pixels")
    }
    interval += 1
})
```

## Voir aussi #seealso

[vy](/reference/sprites/sprite/vy),
[caméra suivre sprite](/reference/scene/camera-follow-sprite)
# vy (propriété)

Obtiens ou définis la vitesse de déplacement verticale d'un sprite en pixels par seconde.

## Obtenir

Obtiens la vitesse verticale du sprite.

```block
let monSprite: Sprite = null

let vertSpeed = monSprite.vy
```
```typescript-ignorelet
vertSpeed = monSprite.vy
```

### Valeur retournée

* un [nombre](/types/number) qui est la vitesse verticale actuelle du sprite en pixels par seconde.

## Définir

```block
let monSprite: Sprite = null

monSprite.vy = 0
```

```typescript-ignore
monSprite.vy = 0
```

### Paramètre

* **value** : la nouvelle vitesse verticale du sprite en pixels par seconde.

## Mouvement des sprites

Un sprite qui n'est pas un projectile est immobile quand il est créé. Tu fais bouger le sprite en définissant sa vitesse, ou _vélocité_, dans la direction **x**, la direction **y**, ou les deux. Pour la direction **y**, une vitesse positive fait aller le sprite vers le bas. Pour le faire aller vers le haut, tu utilises une vitesse négative.

Si tu ne suis pas le sprite avec la _caméra_ ou si tu ne vérifies pas quand le sprite atteint le bord de l'écran, le sprite sortira de l'écran.

### ~ hint

**Qu'est-ce que la vitesse, au juste ?**

La vitesse, c'est la distance parcourue par un objet pendant une certaine durée. Une voiture peut parcourir 50 kilomètres en une heure, elle roule donc à 50 kilomètres par heure (50 km/h). Un avion à réaction peut voler jusqu'à 913 km/h et traverser certains continents en 3 ou 4 heures.

Dans ton jeu, la distance se mesure en pixels, donc la vitesse d'un sprite est en _pixels par seconde_. Si l'écran fait 120 pixels de haut, un sprite avec une vitesse de 40 pixels par seconde traversera l'écran en 3 secondes.

### ~

## Exemples #example

### Aller de chaque côté

Envoie un sprite vers le bas à `40` pixels par seconde. Quand il atteint le bas de l'écran, renvoie-le vers le haut.

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
monSprite.top = 0
monSprite.vy = 40
game.onUpdateInterval(500, function () {
	if (monSprite.y < 0 || monSprite.y > scene.screenWidth()) {
        monSprite.vy = monSprite.vy * -1
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
monSprite.top = 0
monSprite.vy = 60
game.onUpdateInterval(1000, function () {
    if (interval == 1) {
        monSprite.vy = 0
        monSprite.say("I went " + monSprite.top + " pixels")
    }
    interval += 1
})
```

## Voir aussi #seealso

[vx](/reference/sprites/sprite/vx),
[caméra suivre sprite](/reference/scene/camera-follow-sprite)
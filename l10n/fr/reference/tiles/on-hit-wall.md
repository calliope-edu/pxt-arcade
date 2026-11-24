# on Hit Wall

Exécute du code quand un sprite touche un mur.

```sig
scene.onHitWall(0, 0, function (sprite) {
	
})
```

On peut détecter quand un sprite en mouvement touche un mur dans la scène. Tu peux alors exécuter du code si ton sprite touche un emplacement défini comme mur. Tu choisis le type de sprite pour lequel vérifier les collisions avec les murs.

Quand une collision avec un mur est détectée, le sprite du type demandé t'est fourni dans le paramètre **sprite** de **handler**.

Un sprite qui heurte un mur est détecté quand les bords extérieurs de leurs images entrent en contact. Si l'indicateur ``ghost`` d'un sprite est activé, tout contact avec le mur est ignoré.

## Paramètres

* **kind** : le type de sprite pour lequel vérifier la collision avec un mur.
* **handler** : le code à exécuter quand le sprite entre en contact.
>* **sprite** : le sprite qui a heurté la tuile mur.

## Exemple #example

Construis un mur de briques avec des tuiles dans la scène. Utilise **A** pour envoyer un sprite ``Ghost`` vers le mur et regarde-le s'arrêter.  Quand le bouton **B** est pressé, change la valeur de l'indicateur ``ghost`` et regarde si le sprite fantôme heurte le mur ou le traverse.

```blocks
enum SpriteKind {
    Ghost,
    Ball
}
let ghost: Sprite = null
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 f 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 f 2 2 2 f 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 f 2 2 2 2 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 f 2 2 2 2 f 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
`, true)
// TODO tiles.setTilemap(tiles.createTilemap(null, 0, 8 ** 8, 9)); 
ghost = sprites.create(img`
. . . . . . d d d d d . . . . . 
. . . d d d d 1 1 1 d d d . . . 
. . d d 1 1 1 1 1 1 1 1 d d . . 
. . d 1 1 1 1 1 1 1 1 1 1 d . . 
. . d 1 1 1 1 1 1 1 1 1 1 d d . 
. d d 1 1 1 f 1 1 1 f 1 1 1 d . 
. d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
. d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
. d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
d 1 d d d 1 1 d d d d 1 d 1 1 d 
d d d . d d d d . . d d d d d d 
d d . . . d d . . . . d . . d d 
`, SpriteKind.Ghost)
ghost.right = scene.screenWidth() - 1
scene.onHitTile(SpriteKind.Ghost, 2, function (sprite) {
    sprite.say("Ouch!", 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, false)
    ghost.right = scene.screenWidth() - 1
    ghost.vx = - 100
}) 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    ghost.setFlag(SpriteFlag.Ghost, true)
    ghost.right = scene.screenWidth() - 1
    ghost.vx = - 100
})
```

## Voir aussi #seealso

[touche un mur](/reference/sprites/sprite/is-hitting-wall),
[tuile touchée du type](/reference/sprites/sprite/tile-hit-of-kind),
[chevauche](/reference/sprites/sprite/overlaps-with),
[définir l'indicateur](/reference/sprites/sprite/set-flag)

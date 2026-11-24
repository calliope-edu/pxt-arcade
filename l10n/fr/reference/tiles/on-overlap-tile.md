# on Overlap Tile

Exécute du code quand un sprite chevauche un type de tuile

```sig
scene.onOverlapTile(0, 0, function (sprite) {
	
})
```

Tu peux détecter quand un sprite en mouvement touche une tuile dans la scène. Si ton sprite touche une tuile avec l'image indiquée, tu peux exécuter du code. Tu choisis à la fois le type de sprite à vérifier et le type de tuile qu'il va toucher.

Quand le chevauchement de la tuile est détecté, le sprite du type demandé t'est fourni dans le paramètre **sprite** de **handler**. L'emplacement de la [tuile](/types/tile) est fourni dans le paramètre **tile**.

Un sprite qui chevauche une tuile est détecté quand les bords extérieurs de leurs images entrent en contact. Si l'indicateur ``ghost`` d'un sprite est activé, tout contact avec la tuile est ignoré.

## Paramètres

* **kind** : le type de sprite pour lequel vérifier le chevauchement.
* **image** : l'image de la tuile avec laquelle vérifier le chevauchement.
* **handler** : le code à exécuter quand le sprite entre en contact.
>* **sprite** : le sprite qui a chevauché la tuile.
>* **tile** : l'emplacement de la tuile qui a été chevauchée.

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

[touche une tuile](/reference/sprites/sprite/is-hitting-tile),
[type de tuile à](/reference/sprites/sprite/tile-kind-at),
[chevauche](/reference/sprites/sprite/overlaps-with),
[définir l'indicateur](/reference/sprites/sprite/set-flag)

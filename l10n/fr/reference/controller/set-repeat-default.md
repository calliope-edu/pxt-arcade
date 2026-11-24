# set Repeat Default

Définit le temps de répétition des événements de bouton pour tous les boutons de la manette.

```sig
controller.setRepeatDefault(0, 0)
```

Lorsque tu utilises un événement de bouton répété, tu voudras peut-être décider quand et à quelle fréquence ton jeu est informé d'un appui lorsqu'un bouton de la manette est maintenu longtemps. Tu peux définir le temps entre le premier appui sur un bouton et le moment où ton programme est informé que le bouton est appuyé. Cela te permet de décider qu'un appui d'une certaine durée est valide pour ton jeu. De plus, si le joueur garde le bouton appuyé, ton jeu ne veut probablement en être informé que de temps en temps pour faire des mises à jour. Tu peux donc définir le temps entre les événements qui indiquent à ton programme qu'un bouton est toujours appuyé.

## Paramètres

* **delay** : le [nombre](/types/number) de millisecondes à attendre entre l'appui sur un bouton et la réception de l'événement de bouton par le programme.
* **interval** : le [nombre](/types/number) de millisecondes entre plusieurs événements de bouton lorsqu'un bouton reste appuyé.

## Exemple #example

Crée un sprite avec une image circulaire. Règle le temps de répétition des événements de bouton à `200` millisecondes lorsqu'un bouton de la manette est maintenu. Déplace le sprite vers le bas et vers la droite lorsque le bouton **A** est appuyé. Lorsque le bouton **B** est appuyé, envoie le sprite dans l'autre direction, mais plus vite.

```blocks
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    monSprite.top += 1
    monSprite.left += 1
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    monSprite.top += -4
    monSprite.left += -4
})
let monSprite: Sprite = null
monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
monSprite.top = 0
monSprite.left = 0
controller.setRepeatDefault(500, 200)
```

## Voir aussi #seealso

[on event](/reference/controller/on-event)

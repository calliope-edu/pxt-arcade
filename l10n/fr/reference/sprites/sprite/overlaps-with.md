# overlaps With

Vérifie si ce sprite chevauche un autre sprite.

```sig
sprites.create(null).overlapsWith(null)
```

Un chevauchement de deux sprites est détecté lorsque le premier pixel non transparent de l'image du premier sprite chevauche le premier pixel non transparent du second sprite. Si l'indicateur ``ghost`` d'un sprite est activé, aucun chevauchement avec un autre sprite ne sera détecté. De plus, un chevauchement se produit même si les valeurs **Z** des sprites sont différentes.

## Paramètres

* **other** : l'autre sprite dont on vérifie le chevauchement avec ce sprite.

## Retourne

* une valeur [booléenne](/types/boolean) qui est ``true`` si l'autre sprite chevauche ce sprite.

## Exemple #example

Envoie un carré bleu vers un carré rouge. Tant que le carré rouge chevauche le carré bleu, change au hasard la couleur du carré « rouge ».

```blocks
let redBox: Image = null
let blueBox: Image = null
let blueBoxStay: Sprite = null
let redBoxStay: Sprite = null
blueBox = image.create(32, 32)
blueBox.fill(4)
redBox = image.create(32, 32)
redBox.fill(10)
blueBoxStay = sprites.create(blueBox)
redBoxStay = sprites.create(redBox)
blueBoxStay.x = 0
blueBoxStay.vx = 10
game.onUpdateInterval(100, function () {
    if (redBoxStay.overlapsWith(blueBoxStay)) {
        redBox.fill(Math.randomRange(1, 15))
    }
})
```

## Voir aussi #seealso

[lorsque chevauche](/reference/sprites/on-overlap)

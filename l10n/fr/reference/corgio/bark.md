# aboyer

Fais dire au corgi une phrase de sa liste de phrases connues.

```sig
corgio.create().bark()
```

On « apprend » de nouvelles phrases au corgi en les ajoutant avec le bloc [apprendre](/reference/corgio/add-to-script). La phrase à dire est choisie au hasard.

## Exemple #example

Apprends au corgi de nouvelles phrases à dire. Toutes les `2` secondes, fais dire une phrase au corgi.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
myCorg.addToScript("bark")
myCorg.addToScript("ruff, ruff")
myCorg.addToScript("ooow, ooow")
myCorg.addToScript("yip, yip")
game.onUpdateInterval(2000, function () {
    myCorg.bark()
})
```

## Voir aussi #seealso

[ajouter au script](/reference/corgio/add-to-script)

```package
corgio
```
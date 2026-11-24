# add To Script

Ajoute une phrase à la liste des phrases que le corgi sait dire.

```sig
corgio.create().addToScript("")
```

On « apprend » une nouvelle phrase au corgi en ajoutant un script de phrase à sa liste de phrases connues.

## Paramètres

* **input** : une [chaîne](/types/string) qui est un nouveau script de phrase à ajouter à la liste des phrases connues.

## Exemple #example

Apprends au corgi quelques nouvelles phrases. Toutes les `2` secondes, fais dire une phrase au corgi.

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

[aboyer](/reference/corgio/bark)

```package
corgio
```
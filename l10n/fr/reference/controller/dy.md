# dy

Obtient la quantité de mouvement vertical à utiliser si une touche haut ou bas est appuyée.

```sig
controller.dy(0)
```

Si tu contrôles la position d'un sprite avec des appuis sur des touches, tu peux décider de combien sa position change lorsqu'une touche est appuyée. Cela se fait avec des _pas_. Tant qu'une touche de direction est appuyée, la valeur de mouvement retournée dépend de si et combien de temps la touche est appuyée, ainsi que de la taille du pas que tu lui as donnée. Si tu veux un mouvement rapide, utilise un pas plus grand.

Si la touche ``up`` est appuyée, la valeur de mouvement est négative. Si la touche ``down`` est appuyée, la valeur de mouvement est positive. Tu peux utiliser ces valeurs pour mettre à jour la position d'un sprite. La valeur du pas est généralement un nombre positif. Si tu veux inverser les directions des touches, tu peux utiliser un pas négatif.

## Paramètres

* **step** : la quantité de mouvement vertical attribuée à une direction de touche chaque fois qu'une touche est détectée comme appuyée.

## Retourne

* un [nombre](/types/number) qui est la quantité de mouvement vers le haut ou le bas pour une touche appuyée.

## Exemple #example

Déplace l'objet ``cosmo`` sur l'écran avec la manette de direction.

### Un joueur

```blocks
const cosmo = sprites.create(img`
....aaaaa
...aaaaaaa
aaaaaaaaaaaaa
...aaaaaaa
....aaaaa
.....a.a
....a...a
`)
game.onUpdate(function () {
    cosmo.x += controller.dx(100)
    cosmo.y += controller.dy(80)
})
```

### Multijoueur

```blocks
const cosmo = sprites.create(img`
....aaaaa
...aaaaaaa
aaaaaaaaaaaaa
...aaaaaaa
....aaaaa
.....a.a
....a...a
`)
game.onUpdate(function () {
    cosmo.x += controller.player2.dx(100)
    cosmo.y += controller.player2.dy(80)
})
```

## Voir aussi #seealso

[dx](/reference/controller/dx),
[contrôler le sprite](/reference/controller/control-sprite)

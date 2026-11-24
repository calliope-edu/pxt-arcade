# retourner horizontalement

Retourne les pixels horizontalement, d'un côté à l'autre.

```sig
image.create(0, 0).flipX()
```

Les pixels de chaque moitié de l'image sont déplacés vers l'autre moitié. Cela se fait dans la direction horizontale. Ils sont « retournés » autour d'une ligne imaginaire qui descend au milieu de l'image. Ainsi, dans une image de 10 x 10, un pixel à la position (3, 4) se déplace en (6, 4) et le pixel qui était à l'origine en (6, 4) se déplace en (3, 4).

Si une image a un nombre impair de colonnes, la « ligne centrale » passe par une colonne de pixels. Quand ces pixels sont « retournés », ils gardent leur position et ne bougent pas.

## Exemple #example

Retourne une image de flèche `3` fois horizontalement.

```blocks
let showArrow: Sprite = null
let leftArrow: Image = null
leftArrow = img`
. . . a . . . . . . . . . . 
. . a a . . . . . . . . . . 
. a a a a a a a a a a a a a 
a a . . . . . . . . . . . a 
. a a a a a a a a a a a a a 
. . a a . . . . . . . . . . 
. . . a . . . . . . . . . . 
`
showArrow = sprites.create(leftArrow)
for (let i = 0; i < 3; i++) {
    pause(500)
    leftArrow.flipX()
}
```

## Voir aussi #seealso

[retourner verticalement](/reference/images/image/flip-y),
[faire défiler](/reference/images/image/scroll)
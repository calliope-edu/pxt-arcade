# retourner verticalement

Retourne les pixels verticalement, d'un côté à l'autre.

```sig
image.create(0, 0).flipY()
```

Les pixels de chaque moitié de l'image sont déplacés vers l'autre moitié. Cela se fait dans la direction verticale. Ils sont « retournés » autour d'une ligne imaginaire qui traverse le milieu de l'image. Ainsi, dans une image de 10 x 10, un pixel à la position (3, 2) se déplace en (3, 8) et le pixel qui était à l'origine en (3, 8) se déplace en (3, 2).

Si une image a un nombre impair de lignes, la « ligne centrale » passe par une ligne de pixels. Quand ces pixels sont « retournés », ils gardent leur position et ne bougent pas.

## Exemple #example

Retourne une image de flèche `3` fois verticalement.

```blocks
let showArrow: Sprite = null
let upArrow: Image = null
upArrow = img`
. . . a . . .
. . a a a . .
. a a . a a .
a a a . a a a
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a . a . .
. . a a a . .
`
showArrow = sprites.create(upArrow)
for (let i = 0; i < 3; i++) {
    pause(500)
    upArrow.flipY()
}
```

## Voir aussi #seealso

[retourner horizontalement](/reference/images/image/flip-x),
[faire défiler](/reference/images/image/scroll)
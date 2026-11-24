# Image

Une image est composée d'un certain nombre de lignes et de colonnes de pixels de couleur qui forment une image rectangulaire. Un _pixel_ est un point de couleur unique dans l'image.

Les images sont en deux dimensions, elles ont donc une hauteur et une largeur connues. Quand une image est déclarée ou créée, sa hauteur et sa largeur sont définies soit par la _disposition_ de l'image, soit par les paramètres de sa méthode [create](/reference/images/create).

## Disposition de l'image

Tu _déclares_ une image en créant une disposition. En JavaScript, cela se fait avec la déclaration de chaîne ``img'...'``. Les pixels sont des caractères uniques à l'intérieur de la chaîne.

### Image de taille zéro

Une image de taille zéro n'a ni hauteur ni largeur et ne contient aucun pixel, donc la chaîne **img** est simplement ``img''``.

```typescript
let emptyImage = img``
```

Tu peux aussi utiliser [create](/reference/images/create) pour créer une autre image de taille zéro sans pixels.

```blocks
let emptyImage1 = img``
let emptyImage2 = image.create(0, 0)
```

Une image de taille zéro n'est pas vraiment utile, alors MakeCode lui donne en fait une certaine taille si tu la déclares sans taille.

### Images avec une taille

Pour créer une image avec une taille, il suffit de placer les caractères des pixels dans les lignes de la chaîne **img**. Une image de 1 pixel de haut sur 1 pixel de large (1 x 1) est :

```typescript
let oneByOne = img`.`
```

Une image de 2 x 2 se déclare ainsi :

```typescript
let twoBytwo = img`
. .
. .
`
```

Les voici en blocs :

```blocks
let oneByOne = img`.`
let twoBytwo = img`
. .
. .
`
```

Tu remarqueras qu'elles se ressemblent. C'est parce que les couleurs des pixels ne sont pas définies, donc les images sont vides.

Les images ne doivent pas forcément être carrées. La hauteur et la largeur peuvent être différentes. Voici une image de 6 x 2 :

```typescript
let sixByTwo = img`
. . . . . .
. . . . . .
`
```

## Définir les pixels

### Pixels transparents

Une valeur de pixel `.` signifie un pixel vide. Ce pixel n'a pas de couleur et cet _emplacement_ de pixel dans l'image est _transparent_. Être transparent signifie que si cette image se trouve au-dessus d'une autre image (chevauchement) qui a des pixels de couleur, la couleur du pixel de l'image du dessous apparaît à travers l'image du dessus.

### Couleurs des pixels

En plus du pixel vide ou transparent `.`, tu peux utiliser 16 pixels de couleur. Ils correspondent aux couleurs d'une _palette_. Une palette est un groupe de couleurs parmi lesquelles tu peux choisir. Les couleurs sont sélectionnées à l'aide d'un seul chiffre ou d'une seule lettre. La palette par défaut, par exemple, utilise ces couleurs :

* `.` : vide ou transparent
* `0` : transparent
* `1` : blanc
* `2` : bleu clair
* `3` : bleu moyen
* `4` : bleu foncé
* `5` : violet
* `6` : vert citron
* `7` : olive
* `8` : marron
* `9` : cyan
* `a` : rouge
* `b` : pourpre
* `c` : rose
* `d` : orange
* `e` : jaune
* `f` : noir

Une image de 1 x 1 avec un pixel rouge se déclare ainsi :

```typescript
let oneRed = img`a`
```

En bloc, elle ressemble à ceci :

```block
let oneRed = img`a`
```

On peut créer une image de 4 x 4 qui utilise toutes les couleurs :

```typescript
let allColors = img`
0 1 2 3
4 5 6 7
8 9 a b
c d e f
`
```

Voici la même image en bloc :

```block
let allColors = img`
0 1 2 3
4 5 6 7
8 9 a b
c d e f
`
```

## Transparence et chevauchement

Voyons comment fonctionne la transparence avec les images. Un `.` signifie qu'un pixel est transparent. Seuls les pixels de couleur s'affichent dans une image, et les pixels de couleur d'une image située en dessous apparaissent à travers. Pour le montrer, créons deux images de même taille et plaçons celle qui a des pixels transparents au-dessus de celle qui n'en a pas.

Notre première image est un cercle vert dans un rectangle de 8 x 8. Tous les pixels autour du cercle sont transparents.

```typescript
let greenBall = img`
. . . . . . . .
. . . 6 6 . . .
. . 6 6 6 6 . .
. 6 6 6 6 6 6 .
. 6 6 6 6 6 6 .
. . 6 6 6 6 . .
. . . 6 6 . . .
. . . . . . . .
`
```

L'autre image a la même taille, mais tous ses pixels sont jaunes.

```blocks
let greenBall = img`
. . . . . . . .
. . . 6 6 . . .
. . 6 6 6 6 . .
. 6 6 6 6 6 6 .
. 6 6 6 6 6 6 .
. . 6 6 6 6 . .
. . . 6 6 . . .
. . . . . . . .
`

let yellowSquare = img`
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
e e e e e e e e
`
```

En plaçant l'image du cercle vert exactement sur le carré jaune, tu vois que le jaune de l'image du dessous n'est pas masqué par les pixels transparents de l'image du dessus.

```sim
let greenBall = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let yellowSquare = image.create(16, 16)
yellowSquare.fill(14)

let yellowSprite = sprites.create(yellowSquare)
let greenSprite = sprites.create(greenBall)
```

## Définir des pixels à des emplacements

Tu peux aussi créer tes images pendant l'exécution de ton programme (dynamiquement). Pour créer une image de cette façon, tu définis la couleur d'un pixel à son emplacement avec du code. Les pixels sont désignés par leur ligne (valeur ``x``) et leur colonne (valeur ``y``) dans l'image. Tu peux créer une image vide et en dessiner une partie ou la totalité en définissant les couleurs des pixels dans ton code. Créons une boîte de 32 x 32 en créant une image vide, puis dessinons une bordure orange autour.

```blocks
let orangeBox = image.create(32, 32)
for (let i = 0; i < 32; i++) {
    orangeBox.setPixel(0, i, 13)
    orangeBox.setPixel(i, 0, 13)
    orangeBox.setPixel(i, 31, 13)
    orangeBox.setPixel(31, i, 13)
}
let boxSprite = sprites.create(orangeBox)
```

Les fonctions [image](/reference/images) te permettent d'effectuer des opérations plus complexes sur les pixels, comme remplir et dessiner des formes.

## Voir aussi

[image](/reference/images)
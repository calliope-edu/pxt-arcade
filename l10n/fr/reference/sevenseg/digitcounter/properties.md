# Propriétés

Propriétés d'un compteur à chiffres à sept segments.

## x (propriété)

Obtient ou définit la position horizontale du centre d'un compteur à l'écran.

### Obtenir

Obtiens la position horizontale du centre du compteur.

```block
let myCounter: DigitCounter = null

let horz = myCounter.x
```

#### Retourne

* un [nombre](/types/number) qui est la position horizontale actuelle du centre du compteur à l'écran.

### Définir

Définis la position horizontale du centre du compteur.

```block
let myCounter: DigitCounter = null

myCounter.x = 0
```

## y (propriété)

Obtient ou définit la position verticale du centre d'un compteur à l'écran.

### Obtenir

Obtiens la position verticale du centre du compteur.

```block
let myCounter: DigitCounter = null

let vert = myCounter.y
```

#### Retourne

* un [nombre](/types/number) qui est la position verticale actuelle du centre du compteur à l'écran.

### Définir

Définis la position verticale du centre du compteur.

```block
let myCounter: DigitCounter = null

myCounter.y = 0
```

## width (propriété)

Obtient la largeur de l'afficheur compteur en pixels.

### Obtenir

Obtiens la largeur en pixels du compteur.

```block
let myCounter: DigitCounter = null

let xPixels = myCounter.width
```

```typescript-ignore
let xPixels = myCounter.width
```

#### Retourne

* un [nombre](/types/number) qui est la largeur actuelle du compteur en pixels.

## height (propriété)

Obtient la hauteur de l'afficheur compteur en pixels.

### Obtenir

Obtiens la hauteur en pixels du compteur.

```block
let myCounter: DigitCounter = null

let xPixels = myCounter.height
```

```typescript-ignore
let xPixels = myCounter.height
```

#### Retourne

* un [nombre](/types/number) qui est la hauteur actuelle du compteur en pixels.

## count (propriété)

Obtient ou définit la valeur de comptage de l'afficheur compteur.

### Obtenir

Obtiens la valeur de comptage du compteur.

```block
let myCounter: DigitCounter = null

let value = myCounter.count
```

```typescript-ignore
let value = myCounter.count
```

#### Retourne

* un [nombre](/types/number) qui est la valeur de comptage actuelle du compteur.

### Définir

Définis la valeur de comptage du compteur.

```block
let myCounter: DigitCounter = null

myCounter.count = 0
```

```package
sevenseg
```

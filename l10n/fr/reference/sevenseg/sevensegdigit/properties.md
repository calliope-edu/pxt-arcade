# Propriétés

Propriétés d'un afficheur de chiffre à sept segments.

## x (propriété)

Obtient ou définit la position horizontale du centre d'un chiffre à l'écran.

### Obtenir

Obtiens la position horizontale du centre du chiffre.

```block
let myDigit: SevenSegDigit = null

let horz = myDigit.x
```

#### Retourne

* un [nombre](/types/number) qui est la position horizontale actuelle du centre du chiffre à l'écran.

### Définir

Définis la position horizontale du centre du chiffre.

```block
let myDigit: SevenSegDigit = null

myDigit.x = 0
```

## y (propriété)

Obtient ou définit la position verticale du centre d'un chiffre à l'écran.

### Obtenir

Obtiens la position verticale du centre du chiffre.

```block
let myDigit: SevenSegDigit = null

let vert = myDigit.y
```

#### Retourne

* un [nombre](/types/number) qui est la position verticale actuelle du centre d'un chiffre à l'écran.

### Définir

Définis la position verticale du centre du chiffre.

```block
let myDigit: SevenSegDigit = null

myDigit.y = 0
```

## width (propriété)

Obtient la largeur de l'afficheur de chiffre en pixels.

### Obtenir

Obtiens la largeur en pixels du chiffre.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.width
```

```typescript-ignore
let xPixels = myDigit.width
```

#### Retourne

* un [nombre](/types/number) qui est la largeur actuelle du chiffre en pixels.

## height (propriété)

Obtient la hauteur de l'afficheur de chiffre en pixels.

### Obtenir

Obtiens la hauteur en pixels du chiffre.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.height
```

```typescript-ignore
let xPixels = myDigit.height
```

#### Retourne

* un [nombre](/types/number) qui est la hauteur actuelle du chiffre en pixels.

## value (propriété)

Obtient ou définit la valeur de l'afficheur de chiffre.

### Obtenir

Obtiens la valeur du chiffre.

```block
let myDigit: SevenSegDigit = null

let value = myDigit.value
```

```typescript-ignore
let value = myDigit.value
```

#### Retourne

* un [nombre](/types/number) qui est la valeur actuelle du chiffre.

### Définir

Définis la valeur du chiffre.

```block
let myDigit: SevenSegDigit = null

myDigit.value = 0
```

```package
sevenseg
```

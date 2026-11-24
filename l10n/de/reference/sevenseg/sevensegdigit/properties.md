# Eigenschaften

Eigenschaften einer Sieben-Segment-Ziffernanzeige.

## x (Eigenschaft)

Ruft die horizontale Mittelposition einer Ziffer auf dem Bildschirm ab oder setzt sie.

### Abrufen

Ruft die horizontale Mittelposition der Ziffer ab.

```block
let myDigit: SevenSegDigit = null

let horz = myDigit.x
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle horizontale Mittelposition der Ziffer auf dem Bildschirm angibt.

### Setzen

Setzt die horizontale Mittelposition der Ziffer.

```block
let myDigit: SevenSegDigit = null

myDigit.x = 0
```

## y (Eigenschaft)

Ruft die vertikale Mittelposition einer Ziffer auf dem Bildschirm ab oder setzt sie.

### Abrufen

Ruft die vertikale Mittelposition der Ziffer ab.

```block
let myDigit: SevenSegDigit = null

let vert = myDigit.y
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle vertikale Mittelposition der Ziffer auf dem Bildschirm angibt.

### Setzen

Setzt die vertikale Mittelposition der Ziffer.

```block
let myDigit: SevenSegDigit = null

myDigit.y = 0
```

## width (Eigenschaft)

Ruft die Breite der Ziffernanzeige in Pixeln ab.

### Abrufen

Ruft die Pixelbreite der Ziffer ab.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.width
```

```typescript-ignore
let xPixels = myDigit.width
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Breite der Ziffer in Pixeln angibt.

## height (Eigenschaft)

Ruft die Höhe der Ziffernanzeige in Pixeln ab.

### Abrufen

Ruft die Pixelhöhe der Ziffer ab.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.height
```

```typescript-ignore
let xPixels = myDigit.height
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Höhe der Ziffer in Pixeln angibt.

## value (Eigenschaft)

Ruft den Wert der Ziffernanzeige ab oder setzt ihn.

### Abrufen

Ruft den Wert der Ziffer ab.

```block
let myDigit: SevenSegDigit = null

let value = myDigit.value
```

```typescript-ignore
let value = myDigit.value
```

#### Rückgabe

* eine [Zahl](/types/number), die den aktuellen Wert der Ziffer angibt.

### Setzen

Setzt den Wert der Ziffer.

```block
let myDigit: SevenSegDigit = null

myDigit.value = 0
```

```package
sevenseg
```

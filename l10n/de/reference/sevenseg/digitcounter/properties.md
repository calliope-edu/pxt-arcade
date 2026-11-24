# Eigenschaften

Eigenschaften eines Sieben-Segment-Zählers.

## x (Eigenschaft)

Ruft die horizontale Mittelposition eines Zählers auf dem Bildschirm ab oder setzt sie.

### Abrufen

Ruft die horizontale Mittelposition des Zählers ab.

```block
let myCounter: DigitCounter = null

let horz = myCounter.x
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle horizontale Mittelposition des Zählers auf dem Bildschirm angibt.

### Setzen

Setzt die horizontale Mittelposition des Zählers.

```block
let myCounter: DigitCounter = null

myCounter.x = 0
```

## y (Eigenschaft)

Ruft die vertikale Mittelposition eines Zählers auf dem Bildschirm ab oder setzt sie.

### Abrufen

Ruft die vertikale Mittelposition des Zählers ab.

```block
let myCounter: DigitCounter = null

let vert = myCounter.y
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle vertikale Mittelposition des Zählers auf dem Bildschirm angibt.

### Setzen

Setzt die vertikale Mittelposition des Zählers.

```block
let myCounter: DigitCounter = null

myCounter.y = 0
```

## width (Eigenschaft)

Ruft die Breite der Zähleranzeige in Pixeln ab.

### Abrufen

Ruft die Pixelbreite des Zählers ab.

```block
let myCounter: DigitCounter = null

let xPixels = myCounter.width
```

```typescript-ignore
let xPixels = myCounter.width
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Breite des Zählers in Pixeln angibt.

## height (Eigenschaft)

Ruft die Höhe der Zähleranzeige in Pixeln ab.

### Abrufen

Ruft die Pixelhöhe des Zählers ab.

```block
let myCounter: DigitCounter = null

let xPixels = myCounter.height
```

```typescript-ignore
let xPixels = myCounter.height
```

#### Rückgabe

* eine [Zahl](/types/number), die die aktuelle Höhe des Zählers in Pixeln angibt.

## count (Eigenschaft)

Ruft den Zählwert der Zähleranzeige ab oder setzt ihn.

### Abrufen

Ruft den Zählwert des Zählers ab.

```block
let myCounter: DigitCounter = null

let value = myCounter.count
```

```typescript-ignore
let value = myCounter.count
```

#### Rückgabe

* eine [Zahl](/types/number), die den aktuellen Zählwert des Zählers angibt.

### Setzen

Setzt den Zählwert des Zählers.

```block
let myCounter: DigitCounter = null

myCounter.count = 0
```

```package
sevenseg
```

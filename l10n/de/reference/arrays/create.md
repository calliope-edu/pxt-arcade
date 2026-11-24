# Erstellen

Erstelle ein neues Array um ein oder mehrere Elemente zu speichern.

## Ein Array erstellen

### Leeres Array

Du kannst leere Arrays erstellen. Wenn du das tust, musst du den [Typ](/types) des Arrays definieren. Dies ist ein leeres Array:

```typescript
let leer: string[] = []
```

```blocks
let leer: string[] = []
```

### Array mit einem Element

Du kannst ein Array mit einem Element erstellen und *initialisieren*. Arrays, die mit mindestens einem Element erstellt worden sind, nehmen automatisch den [Typ](/types) dieses Wertes an. Dies nennt man *Typinferenz*.

```block
let einWert = ["Wert"]
```

### Array mit mehreren Elementen

Erstelle Arrays mit mehreren Elementen, wenn du das möchtest.

```block
let zweiElemente = [1, 2]
```

## Beispiele

Erstelle ein leeres Zahlenarray. Füge dann zwei Zahlen dem Array hinzu.

```blocks
let spielergebnisse: number[] = []; 
spielergebnisse.push(98); 
spielergebnisse.push(75); 
let letztesSpielergebnis = spielergebnisse.pop();
```

Erstelle ein Array mit zwei Wörtern, dann vertausche diese im Array.

```blocks
let words = ["Hallo", "da"]
let swap = words[0];
words[0] = words[1];
words[1] = swap;
```
# JavaScript-Block

JavaScript ist eine sehr mächtige Sprache; so mächtig, dass einige Konzepte in JavaScript nicht mit Blöcken gezeigt werden können. Wenn PXT einen Codeabschnitt findet, der nicht zu Blöcken konvertiert werden kann, erstellt er stattdessen einen grauen JavaScript-Block, um ihn zu behalten. Diese Blöcke werden sofort wieder in das ursprüngliche JavaScript konvertiert, wenn du zurück zum Texteditor wechselst.

```block
for (let index = 0; index <= 5; index++) {
    let x = fibonacci(index);
}

function fibonacci(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Der Code in JavaScript-Blöcken kann nicht bearbeitet werden, aber die Blöcke selbst können wie jeder andere Block verschoben, kopiert, eingefügt und gelöscht werden.

## Wie erhalte ich JavaScript-Code, der ohne graue Blöcke konvertiert?

Der einfachste Weg, Code zu schreiben, der sauber wieder in Blöcke konvertiert wird, besteht darin, den Code mit Blöcken zu schreiben und ihn in JavaScript umzuwandeln. Viele Blöcke haben eine sehr spezifische Struktur in ihrem JavaScriptcode, welche befolgt werden muss, um sie richtig umwandeln zu lassen. Wenn du einen Teil deines Codes hast, der nicht konvertiert wird, versuche, den Block zu betrachten, den du erwartet hast, und das JavaScript, das dieser erzeugt.

Zum Beispiel muss eine for-Schleife diese Struktur haben, um in einen Block zu konvertieren:

```typescript
for (let x = 0; x <= 5; x++) {
}
```

Die folgenden Beispiele können nicht durch die Blöcke dargestellt werden:

```typescript-ignore
// Die Bedingung muss entweder < oder <= mit einer Variablen auf der linken Seite sein
for (let x = 0; x > -1; x++) {
}

// Die Variable in der Bedingung und dem Aufwärtszähler muss dieselbe wie die deklarierte Variable sein
for (let x = 0; x <= 5; y++) {
}

// Die deklarierte Variable muss auf 0 initialisiert sein
for (let x = 2; x <= 5; x++) {
}

// Alle drei Teile der Schleife müssen vorhanden sein
for (;;) {
}
```

Versuche, das JavaScript so genau wie möglich dem gewünschten Block anzupassen.
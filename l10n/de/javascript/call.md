# Funktion aufrufen

Die einfachste Möglichkeit, mit deinem @boardname@ in JavaScript zu starten ist, eine der integrierten JavaScript-Funktionen vom @boardname@ aufzurufen. Genau wie Blöcke in Kategorien/Schubladen organisiert sind, sind die @boardname@-Funktionen nach Namensräumen (Namespaces) organisiert.

```typescript-ignore
Math.abs(-1)
```

### ~ hint

#### Funktionen in einem Namensraum

Wenn du alle Funktionen im Namensraum `Math` sehen willst, tippe einfach `Math` gefolgt von `.` ein, und eine Liste aller Funktionen erscheint.

### ~

## Linke und rechte Klammer, bitte!

Wann immer du eine Funktion aufrufen möchtest, gib den Namen der Funktion gefolgt von `(` und endend mit `)`an. Zwischen der linken und der rechten Klammer stehen die Funktionsargumente:

```typescript-ignore
Math.min(1, 2)
```

Eine linke Klammer ohne die "schließende" rechte Klammer ist ein Syntaxfehler:

```typescript-ignore
Math.min(
```

Wenn eine Funktion keine Argumente hat, benötigst du trotzdem noch die Klammern, um die Funktion aufzurufen.

## Irgendwelche Ergebnisse für mich?

Viele Funktionen geben ein Ergebnis zurück, das du später in deinem Programm verwenden kannst. Dies kann eine Zahl, eine Zeichenfolge oder eine anderer Datentyp sein.

```typescript-ignore
let greater = Math.max(5, 10)
``` 
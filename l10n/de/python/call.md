# Funktion aufrufen

The simplest way to get started in Python is to call one of the built-in Python functions. Just like how Blocks are organized into categories/drawers, functions are organized by namespaces too, with names corresponding to the drawer names.

```python-ignore
Math.abs(-1)
```

### ~ hint

#### Funktionen in einem Namensraum

Wenn du alle im `Math` -Namensraum verfügbaren Funktionen anzeigen möchtest, gib einfach `Math` gefolgt von `.` ein und eine Liste aller Funktionen wird angezeigt.

### ~

## Linke und rechte Klammern, bitte!

Wann immer du eine Funktion aufrufen möchtest, gib den Namen der Funktion an, gefolgt von `(` und endend mit `)`. Zwischen linker und rechter Klammer kommen die Funktionsargumente:

```python-ignore
Math.min(1, 2)
```

Es ist ein Syntaxfehler, eine linke Klammer ohne die "schließende" rechte Klammer zu verwenden:

```python-ignore
Math.min(
```

Wenn eine Funktion keine Argumente hat, benötigst du trotzdem noch die Klammern, um die Funktion aufzurufen.

## Irgendwelche Ergebnisse für mich?

Viele Funktionen liefern ein Ergebnis, das du später in deinem Programm verwenden kannst. Dies kann eine Zahl, eine Zeichenkette oder eine andere Art von Daten sein.

```python-ignore
greater = Math.max(5, 10)
``` 
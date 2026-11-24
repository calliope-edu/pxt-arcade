# Sequencing

Durch den sequentiellen Aufruf einer Funktion nach der anderen kannst du das Programm verschiedene Dinge hintereinander tun lassen.

```typescript-ignore
machEtwas();
machAndereDinge();
```

## Das Semikolon

In JavaScript, the semicolon (;) is used to terminate (or end) a statement. However, in most cases, the semicolon is optional and can be omitted. So both code sequences below are legal:

```typescript-ignore
machEtwas()
machAndereDinge()
```

```typescript-ignore
machEtwas();
machAndereDinge();
```

## Die leere Anweisung

In JavaScript, there is the concept of an *empty statement*, which is whitespace followed by a semicolon in the context where a statement is expected. Der folgende Code ist also eine Endlosschleife, gefolgt von einem Aufruf von `machEtwas`, der nie ausgeführt wird:

```typescript-ignore
while(true) ;
machEtwas(); // DIESE ZEILE WIRD NIE AUSGEFÜHRT!
```

### ~hint

#### Keine 'leeren' Anweisungen

Um dieses Problem zu vermeiden, können wir nicht zulassen, dass ein Programm eine oben gezeigte leere Anweisung enthält. If you really want an empty statement, you need to use curly braces to delimit an empty statement block:

```typescript-ignore
while(true) { }
machEtwas(); // DIESE ZEILE WIRD NIE AUSGEFÜHRT!
```

### ~

[Lies mehr über Semikolons in JavaScript](http://inimino.org/~inimino/blog/javascript_semicolons).
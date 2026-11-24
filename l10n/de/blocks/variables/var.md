# Variablen

Ein Programm arbeitet immer mit Informationen. Die Informationen oder Daten, die ein Programm benötigt, werden irgendwo im Arbeitsspeicher eines Computers gespeichert. Der Speicher auf einem Computer wird so angeordnet, dass die dort gespeicherten Daten unter einer Adresse gefunden werden können. Eine Adresse ist eine Zahl, die angibt, wo sich die Daten, die das Programm verwenden möchte, im Speicher befinden.

Für ein Programm ist die Verwendung einer Adressennummer zum Abrufen und Speichern von Daten sehr unbequem. Programme verwenden stattdessen *Variablen*. Eine Variable stellt den Speicherort für die dort gespeicherten Daten dar. Die Variable wird als Variable bezeichnet, da sich die Daten, die sie repräsentiert, ändern (variieren), wenn das Programm dort etwas Neues speichert. Wenn du eine neue Variable in deinem Programm erstellst, reservierst du einen Platz im Speicher für einige Daten, die dein Programm später erstellen, kopieren oder überprüfen möchte.

Variablen haben einen Namen, einen [Typ](/types) und einen Wert:

* *name* - wie du die Variable nennen willst
* *type* - die Art der Daten, die eine Variable speichern kann
* *value* - was in der Variable gespeichert wird (die Daten)

### ~ hint

Du kannst die Standardvariablennamen in den Blöcken verwenden, wenn du möchtest. Es ist jedoch am besten, beschreibende Variablennamen zu verwenden. Um einen Variablennamen im Editor zu ändern, wähle den Pfeil nach unten neben der Variable und klicke dann auf "neue Variable...".

### ~

## `let`-Anweisung

Verwende die Variablenanweisung des Blockeditors, um eine Variable zu erstellen und den Operator [Zuweisung](/blocks/variables/assign), um etwas in der Variable zu speichern. Das wird als *deklarieren* einer Variable bezeichnet.

In diesem Code wird z. B. die Zahl `2` in der Variable `x` gespeichert:

```block
let x = 2;
```

So definierst du eine Variable im Blockeditor:

1. Klicke auf `Variablen`.

2. Ändere den Standardnamen der Variablen, wenn du möchtest.

3. Ziehe einen Blocktyp auf die rechte Seite des [Zuweisungsoperators](/blocks/variables/assign) und klicke auf den Abwärtspfeil, um den Variablennamen zu ändern.

Wenn du eine Codevariable erstellst oder deklarierst, benutze die ```let``` -Anweisung. Das sieht dann so aus:

```typescript
let percent = 50;
```

### #letexample

### Lesen von Variablenwerten

Nachdem eine Variable definiert ist, verwende einfach den Variablennamen, wann immer du benötigst, was in der Variable gespeichert ist.

#### #readvariableexample

```block
let count = 10
let half = count / 2
```

### Aktualisieren von Variablenwerten

Um den Inhalt einer Variablen zu ändern, verwende den Zuweisungsoperator.

#### #updatevariableexample

```block
let count = 10
if (count < 20) {
    count = 20
}
```

### Warum Variablen verwenden?

Wenn du Daten später irgendwo in deinem Programm speichern und ändern möchtest, benötigst du eine Variable.

#### #whyusevariablesexample

### Lokale Variablen

Lokale Variablen sind nur innerhalb der Funktion oder des Codeblocks verwendbar, in der sie definiert worden sind.

Hier existiert die Variable `index` nur innerhalb des Bausteines **für**. Die `Schleifen` Variable existiert sowohl außerhalb als auch innerhalb des Bausteines **für**.

#### #localvariableexample

```block
let looping = true;
for (let index = 0; index <= 10; index++) {
    if (index == 10) {
        looping = false;
    }
}
```

## Siehe auch

[Zuweisungsoperator](/blocks/variables/assign), [Änderungsoperator](/blocks/variables/change)
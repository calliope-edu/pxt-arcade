# Variablendeklarationen

Um eine Variable zu deklarieren, weist du einem Variablennamen einfach einen Wert zu:

```python-ignore
a = 10
```

## Block-Gültigkeitsbereich

Wenn eine Variable durch eine Zuweisung deklariert wird, gilt das, was man *lexikalischen Gültigkeitsbereich* oder *Block-Gültigkeitsbereich* nennt.
Variablen mit Block-Gültigkeitsbereich sind außerhalb des nächsten umschließenden Blocks oder der `for`-Schleife nicht sichtbar.

```python-ignore
def f(inp):
    a = 100

    if inp:
        # Still okay to reference 'a'
        b = a + 1
        return b

    # Error: 'b' doesn't exist here
    return b
```

Hier haben wir zwei lokale Variablen `a` und `b`.
Der Gültigkeitsbereich von `a` ist auf den Körper von `f` beschränkt, der von `b` auf den Block der umschließenden `if`-Anweisung.

Eine weitere Eigenschaft von Variablen mit Block-Gültigkeitsbereich ist, dass sie nicht gelesen oder beschrieben werden können, bevor sie tatsächlich deklariert sind.
Diese Variablen sind zwar in ihrem gesamten Gültigkeitsbereich „vorhanden“, aber alle Stellen vor ihrer Deklaration gehören zu ihrer *temporal dead zone* (zeitlichen toten Zone).
Das ist nur eine umständliche Art zu sagen, dass du nicht auf sie zugreifen kannst, bevor ihnen zum ersten Mal ein Wert zugewiesen wurde.

```python-ignore
a++ # illegal to use 'a' before it's declared
a = 0
```

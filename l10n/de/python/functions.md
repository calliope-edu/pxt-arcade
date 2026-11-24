# Funktionen

Funktionen sind die grundlegenden Bausteine von Programmen. So erstellst du ganz einfach eine Funktion, die zwei Zahlen addiert:

```python-ignore
# Named function
def add(x, y):
    return x + y

sum = add(1, 2)
```

Funktionen können auf Variablen außerhalb des Funktionskörpers zugreifen. Man sagt dann, dass sie diese Variablen „einfangen“ (`capture`).

```python-ignore
z = 100

def addToZ(x, y):
    return x + y + z

sum = addToZ(1, 2)
```

Python kann den Rückgabetyp anhand der return-Anweisungen ermitteln, daher kannst du ihn in vielen Fällen weglassen.

## Optionale und Standardparameter

Die Anzahl der Argumente, die einer Funktion übergeben werden, muss mit der Anzahl der Parameter übereinstimmen, die die Funktion erwartet.

```python-ignore
def buildName(firstName, lastName):
    return firstName + " " + lastName;

result1 = buildName("Bob")                  # error, too few parameters
result2 = buildName("Bob", "Adams", "Sr.")  # error, too many parameters
result3 = buildName("Bob", "Adams")         # ah, just right
```

In Python kann ein Parameter optional sein, sodass man ihn nach Belieben weglassen kann. Dann ist sein Wert `None`. Diese Funktionalität erhalten wir in Python, indem wir den Parametern, die optional sein sollen, `None` zuweisen. Nehmen wir beispielsweise an, dass der Nachname-Parameter von oben optional sein soll:

```python-ignore
def buildName(firstName, lastName = None):
    if lastName:
        return firstName + " " + lastName
    else:
        return firstName

result1 = buildName("Bob")                  # works correctly now
result2 = buildName("Bob", None)            # this works too
result3 = buildName("Bob", "Adams", "Sr.")  # error, too many parameters
result4 = buildName("Bob", "Adams")         # ah, just right
```

Alle optionalen Parameter müssen hinter den erforderlichen Parametern stehen. Wenn wir den Vornamen anstelle des Nachnamens freiwillig machen wollten, müssten wir die Reihenfolge der Parameter in der Funktion ändern und den Vornamen zuletzt in die Liste einfügen.

In Python können wir auch einen Wert festlegen, den ein Parameter erhält, wenn beim Aufruf keiner angegeben oder stattdessen `None` übergeben wird. Das nennt man default-initialized Parameter. Nehmen wir das vorhergehende Beispiel und setzen den Nachnamen standardmäßg auf `"Smith"`.

```python-ignore
def buildName(firstName, lastName = "Smith"):
    return firstName + " " + lastName

result1 = buildName("Bob")                  # works correctly now, returns "Bob Smith"
result2 = buildName("Bob", None)            # Nope, that's a type error this time
result3 = buildName("Bob", "Adams", "Sr.")  # error, too many parameters
result4 = buildName("Bob", "Adams")         # ah, just right
```

Default-initialized Parameter, die nach allen erforderlichen Parametern kommen, werden als optional behandelt, und können genau wie optionale Parameter beim Aufruf weggelassen werden. Dies bedeutet, dass optionale Parameter und nachfolgende Standardparameter den gleichen Typ haben, sodass die beiden Funktionen

```python-ignore
def buildName(firstName, lastName = None):
    # ...
```

und

```python-ignore
def buildName(firstName, lastName = "Smith"):
    # ...
```

denselben Typ `(firstName: str, lastName: str = None) => string` haben. Der Standardwert von `LastName` verschwindet im Typ, wobei nur die Tatsache zurück bleibt, dass der Parameter optional ist.

## Handler-Funktionen

Handler-Funktionen sind Funktionen, die etwas ausführen, wenn ein Ereignis oder eine Zustandsänderung eintritt. Normalerweise speichert (registriert) anderer Code die Handler-Funktion in einer Variablen, um sie später aufzurufen. Wenn ein Ereignis eintritt, etwa ein neuer Eingabewert oder ein abgelaufener Timer, wird der Handler aufgerufen, um eine Reaktion auszuführen.

Als Beispiel prüft die Klasse `Thermal` Temperaturänderungen und führt einen registrierten Handler aus, wenn die Temperatur auf einen festgelegten Schwellenwert fällt:

```python-ignore
# the handler function when it's cold...
def whenCold():
    print("It's cold!")

# 'Thermal' class to monitor temperature
class Thermal:
    action = None
    cold = 10
    temp = 5
    def __init__(self, cold = 10):
        self.cold = cold
    def whenCold(self, handler):
        self.action = handler
    def checkCold(self):
        if self.temp <= self.cold:
            self.action()

thermal = Thermal()
# register the 'whenCold()' function as a parameter
thermal.whenCold(whenCold)
thermal.checkCold()
```

## Lambda-Funktionen

Lambda-Funktionen sind eine Art Abkürzung, um das Ergebnis eines Ausdrucks zurückzugeben. Ein Lambda wird oft in einer Variablen gespeichert und dann wie eine Funktion verwendet, um das Ergebnis des Ausdrucks zurückzugeben:

```python-ignore
def square(x):
    return x * x

area = lambda x, y: x * y

def cube(area, height):
    return area * height

volume1 = cube(square(5), 5)
volume2 = cube(area(4, 3), 10)
```

Ein Lambda kann auch anonym verwendet werden, um direkt ein Ergebnis zurückzugeben.

```python-ignore
print("area = " + str((lambda x, y: x * y)(3, 4)))
```

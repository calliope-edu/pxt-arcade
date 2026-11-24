# Klassen

Klassen in Python folgen einem Definitionsformat ähnlich anderen objektorientierten Sprachen. Die Klassen können Mitglieder haben, die entweder _public_ oder _private_ sind. Das Vererbungsmodell ermöglicht es dem Programmierer, Methoden der Elternklasse zu unterklassifizieren und überschreiben zu können.

Werfen wir einen Blick auf ein einfaches klassenbasiertes Beispiel:

```python-ignore
class Greeter:
    greeting = ""
    def __init__(self, message):
        self.greeting = message
    def greet(self):
        return "Hello, " + self.greeting

greeter = Greeter("world")
```

Wir deklarieren eine neue Klasse `Greeter`. Diese Klasse hat drei Mitglieder: eine Eigenschaft namens `greeting`, einen Konstruktor und eine Methode `greet`.

Dir fällt sicher auf, dass wir in der Klasse `self` voranstellen, wenn wir auf eines der Mitglieder der Klasse verweisen. Das kennzeichnet einen Mitgliedszugriff.

In der letzten Zeile erstellen wir eine Instanz von `Greeter`, indem wir einer Variablen eine Klassenkonstruktion zuweisen. Dadurch wird der zuvor definierte Konstruktor aufgerufen, der ein neues Objekt mit der Form `Greeter` erstellt und den Konstruktor ausführt, um es zu initialisieren.

## Vererbung

In Python können wir gängige objektorientierte Muster verwenden. Eines der grundlegendsten Muster der klassenbasierten Programmierung ist natürlich die Möglichkeit, bestehende Klassen durch Vererbung zu erweitern, um neue zu erstellen.

Let's take a look at an example:

```python-ignore
class Animal:
    name = ""
    def __init__(self, theName):
        self.name = theName
    def move(self, distanceInMeters = 0):
        print(self.name + " moved " + str(distanceInMeters) + "m.")

class Snake(Animal):
    def __init__(self, name):
        Animal.__init__(self, name)
    def move(self, distanceInMeters = 5):
        print("Slithering...")
        Animal.move(self, distanceInMeters)

class Horse(Animal):
    def __init__(self, name):
        Animal.__init__(self, name)
    def move(self, distanceInMeters = 45):
        print("Galloping...")
        Animal.move(self, distanceInMeters)

sam = Snake("Sammy the Python")
tom = Horse("Tommy the Palomino")

sam.move()
tom.move(34)
```

Dieses Beispiel zeigt einige der Vererbungsfunktionen in Python, die auch in anderen Sprachen üblich sind. Hier siehst du, dass die Klassendefinition den Parameter `Animal` verwendet, um eine Unterklasse zu erstellen. Das erkennst du daran, dass `Horse` und `Snake` Unterklassen der Basisklasse `Animal` sind und Zugriff auf deren Funktionen erhalten.

Abgeleitete Klassen, die Konstruktorfunktionen enthalten, müssen `Animal.__init__()` aufrufen, wodurch die Konstruktorfunktion der Basisklasse ausgeführt wird.

Das Beispiel zeigt auch, wie man Methoden der Basisklasse mit Methoden überschreibt, die auf die Unterklasse spezialisiert sind. Hier erstellen sowohl `Snake` als auch `Horse` eine Methode `move`, die das `move` von `Animal` überschreibt und ihr für jede Klasse eigene Funktionalität gibt. Beachte: Obwohl `tom` als `Animal` deklariert ist, ruft `tom.move(34)` die überschreibende Methode in `Horse` auf, da sein Wert ein `Horse` ist:

```Text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Öffentliche, private und geschützte Modifikatoren

### Öffentlich (public) als Standard

In unseren Beispielen konnten wir frei auf die Mitglieder zugreifen, die wir in unseren Programmen deklariert haben. Wenn du Klassen aus anderen Sprachen kennst, ist dir vielleicht aufgefallen, dass wir in den obigen Beispielen dafür nicht das Wort `public` verwenden mussten; C# zum Beispiel verlangt, dass jedes Mitglied ausdrücklich mit `public` gekennzeichnet wird, damit es sichtbar ist. In Python ist jedes Mitglied standardmäßig `public`.

Du kannst ein Mitglied trotzdem ausdrücklich als `public` kennzeichnen. Wir hätten die Klasse `Animal` aus dem vorherigen Abschnitt auch so schreiben können:

```python-ignore
class Animal:
    name = ""
    def __init__(self, theName):
        self.name = theName
    def move(self, distanceInMeters):
        print(str.format("{0} moved {1}m.", self.name, distanceInMeters))
```

### `private` verstehen

Wenn einem Mitglied ein doppelter Unterstrich `__` vorangestellt ist, ist es **privat** und kann von außerhalb seiner Klasse nicht aufgerufen werden. Zum Beispiel:

```python-ignore
class Animal:
    __name = ""
    def __init__(self, theName):
        self.name = theName
    def move(self, distanceInMeters):
        print(str.format("{0} moved {1}m.", self.name, distanceInMeters))

Animal("Cat").name # Error: 'name' is private
```

Python hat ein strukturelles Typsystem. Wenn wir zwei verschiedene Typen vergleichen, sagen wir, unabhängig davon, woher sie stammen, dass die Typen selbst kompatibel sind, wenn die Typen aller Mitglieder kompatibel sind.

Wenn wir jedoch Typen mit **privaten** und **geschützten** Mitgliedern vergleichen, behandeln wir diese Typen anders. Damit zwei Typen als kompatibel gelten, muss, wenn einer von ihnen ein **privates** Mitglied hat, auch der andere ein **privates** Mitglied haben, das aus derselben Deklaration stammt. Dasselbe gilt für **geschützte** Mitglieder.

Schauen wir uns ein Beispiel an, um besser zu sehen, wie das in der Praxis funktioniert:

```python-ignore
class Animal:
    __name = ""
    def __init__(self, theName):
        self.__name = theName
class Rhino(Animal):
    def __init__(self):
        Animal.__init__(self, "Rhino")
class Employee:
    __name = ""
    def __init__(self, theName):
        self.__name = theName

animal = Animal("Goat")
rhino = Rhino()
employee = Employee("Bob")

animal = rhino
animal = employee # Error: 'Animal' and 'Employee' are not compatible
```

In diesem Beispiel haben wir ein `Animal` und ein `Rhino`, wobei `Rhino` eine Unterklasse von `Animal` ist. Außerdem haben wir eine neue Klasse `Employee`, die von der Form her genauso aussieht wie `Animal`. Wir erstellen einige Instanzen dieser Klassen und versuchen dann, sie einander zuzuweisen, um zu sehen, was passiert. Da `Animal` und `Rhino` den privaten Teil ihrer Form aus derselben Deklaration von `__ name = ""` in `Animal` teilen, sind sie kompatibel. Für `Employee` gilt das jedoch nicht. Wenn wir versuchen, ein `Employee` einem `Animal` zuzuweisen, erhalten wir einen Fehler, dass diese Typen nicht kompatibel sind. Obwohl `Employee` ebenfalls ein privates Mitglied namens `name` hat, ist es nicht das, das wir in `Animal` deklariert haben.

### `protected` verstehen

Der Modifikator **geschützt** `_` verhält sich ähnlich wie der Modifikator **privat**, mit der Ausnahme, dass als geschützt deklarierte Mitglieder auch von Instanzen abgeleiteter Klassen aufgerufen werden können. Zum Beispiel:

```python-ignore
class Person:
    _name = ""
    def __init__(self, name):
        self.name = name

class Employee(Person):
    __department = ""

    def __init__(self, name, department):
        Person.__init__(self, name)
        self.department = department

    def getElevatorPitch(self):
        return "Hello, my name is " + self.name + " and I work in " + self.department + "."

howard = Employee("Howard", "Sales")
print(howard.getElevatorPitch())
print(howard.name) # error
```

Beachte: Obwohl wir `name` nicht von außerhalb von `Person` verwenden können, können wir es dennoch innerhalb einer Instanzmethode von `Employee` verwenden, da `Employee` von `Person` abgeleitet ist.
# Classes

En Python, les classes suivent un format de définition semblable à celui des autres langages orientés objet. Les classes peuvent avoir des membres _publics_ ou _privés_. Le modèle d'héritage permet au programmeur de créer des sous-classes et de redéfinir les méthodes de la classe mère.

Jetons un coup d'oeil à un exemple simple de classe:

```python-ignore
class Greeter:
    greeting = ""
    def __init__(self, message):
        self.greeting = message
    def greet(self):
        return "Hello, " + self.greeting

greeter = Greeter("world")
```

Nous déclarons une nouvelle classe `Greeter`. Cette classe a trois membres : une propriété appelée `greeting`, un constructeur et une méthode `greet`.

Tu remarqueras que dans la classe, lorsque nous faisons référence à l'un des membres de la classe, nous ajoutons `self` devant. Cela indique qu'il s'agit d'un accès à un membre.

Dans la dernière ligne, nous créons une instance de `Greeter` en affectant à une variable une construction de la classe. Cela appelle le constructeur que nous avons défini précédemment, en créant un nouvel objet du type `Greeter`, et en exécutant le constructeur pour l'initialiser.

## Héritage

En Python, nous pouvons utiliser les modèles orientés objet courants. Bien sûr, l'un des modèles les plus fondamentaux dans la programmation basée sur les classes est d'être en mesure d'étendre les classes existantes pour en créer de nouvelles en utilisant l'héritage.

Jetons un coup d'oeil à un exemple:

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

Cet exemple couvre bon nombre des fonctionnalités d'héritage de Python qui sont communes à d'autres langages. Ici, nous voyons que la définition de classe utilise le paramètre `Animal` pour créer une sous-classe. Vous pouvez le voir avec `Horse` et `Snake` sous-classe de la classe de base `Animal`. Cette extension permet aux sous-classes d'accéder aux caractéristiques comportementales de la classe mère.

Les classes dérivées qui contiennent des constructeurs doivent appeler `Animal.__init__()`, qui exécute le constructeur de la classe de base.

L'exemple montre également comment substituer des méthodes dans la classe de base avec des méthodes spécialisées pour la sous-classe. Ici, `Snake` et `Horse` créent une méthode de déplacement `move` qui remplace le `move` de `Animal`, lui donnant une fonctionnalité spécifique à chaque classe. Notez que même si `tom` est déclaré comme un `Animal`, puisque sa valeur est un `Horse`, lorsque `tom.move (34)` appelle la méthode provenant de la classe `Horse`:

```Text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Modificateurs publics, privés et protégés

### Public par défaut

Dans nos exemples, nous avons pu accéder librement aux membres que nous avons déclarés tout au long de nos programmes. Si vous êtes familier avec les classes dans d'autres langages, vous avez peut-être remarqué dans les exemples ci-dessus, nous n'avons pas eu à utiliser le mot clef `public` pour y parvenir; par exemple, C# requiert que chaque membre soit explicitement étiqueté `public` pour être visible. En Python, chaque membre est `public` par défaut.

Tu peux quand même marquer un membre comme `public` explicitement. Nous aurions pu écrire la classe `Animal` de la section précédente de la manière suivante :

```python-ignore
class Animal:
    name = ""
    def __init__(self, theName):
        self.name = theName
    def move(self, distanceInMeters):
        print(str.format("{0} moved {1}m.", self.name, distanceInMeters))
```

### Comprendre `private`

Lorsqu'un membre est préfixé par un double tiret bas `__`, il est **privé** et ne peut pas être accédé depuis l'extérieur de la classe qui le contient. Par example:

```python-ignore
class Animal:
    __name = ""
    def __init__(self, theName):
        self.name = theName
    def move(self, distanceInMeters):
        print(str.format("{0} moved {1}m.", self.name, distanceInMeters))

Animal("Cat").name # Error: 'name' is private
```

Python a un système de types structurel. Lorsque nous comparons deux types différents, indépendamment de l'endroit d'où ils viennent, si les types de tous les membres sont compatibles, alors nous disons que les types eux-mêmes sont compatibles.

Cependant, lorsque nous comparons des types qui ont des membres **privés** et **protégés**, nous traitons ces types différemment. Pour que deux types soient considérés comme compatibles, si l'un d'eux a un membre **privé**, alors l'autre doit avoir un membre **privé** provenant de la même déclaration. Il en va de même pour les membres **protégés**.

Examinons un exemple pour mieux voir comment cela se joue dans la pratique:

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

Dans cet exemple, nous avons un `Animal` et un `Rhino`, avec `Rhino` une sous-classe de la classe `Animal`. Nous avons aussi une nouvelle classe `Employee` qui semble identique à `Animal` en termes de forme. Nous créons quelques exemples de ces classes et essayons ensuite de les assigner les uns aux autres pour voir ce qui va se passer. Comme `Animal` et `Rhino` partagent la partie privée de leur forme issue de la même déclaration `__ name = ""` dans `Animal`, ils sont compatibles. Toutefois, ce n'est pas le cas pour `Employee`. Lorsque nous essayons d'affecter d'un `Employee` à `Animal` , nous obtenons une erreur qui stipule que ces types ne sont pas compatibles entre eux. Même si `Employee` a aussi un membre privé appelé `name`, ce n'est pas celui que nous avons déclaré dans `Animal`.

### Comprendre `protected`

Le modificateur **protégé** `_` agit comme le modificateur **privé**, à l'exception que les membres déclarés protégés peuvent aussi être accédés par les instances des classes dérivées. Par exemple,

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

Notez que même si nous ne pouvons pas utiliser `name` à partir de l'extérieur de `Person`, nous pouvons toujours l'utiliser à partir d'une méthode d'instance de `Employee` parce que `Employee` dérive de `Person`.
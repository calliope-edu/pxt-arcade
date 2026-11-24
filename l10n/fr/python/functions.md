# Fonctions

Les fonctions sont les éléments de base des programmes. Voici la façon la plus simple de créer une fonction qui additionne deux nombres :

```python-ignore
# Named function
def add(x, y):
    return x + y

sum = add(1, 2)
```

Les fonctions peuvent faire référence à des variables en dehors du corps de la fonction. Dans ce cas, on dit qu'elles `capturent` ces variables.

```python-ignore
z = 100

def addToZ(x, y):
    return x + y + z

sum = addToZ(1, 2)
```

Python peut déterminer le type de retour en examinant les instructions return, tu peux donc l'omettre dans de nombreux cas.

## Paramètres optionnels et par défaut

Le nombre d'arguments donnés à une fonction doit correspondre au nombre de paramètres attendus par la fonction.

```python-ignore
def buildName(firstName, lastName):
    return firstName + " " + lastName;

result1 = buildName("Bob")                  # error, too few parameters
result2 = buildName("Bob", "Adams", "Sr.")  # error, too many parameters
result3 = buildName("Bob", "Adams")         # ah, just right
```

En Python, un paramètre peut être optionnel, et les utilisateurs peuvent l'omettre s'ils le souhaitent. Dans ce cas, sa valeur est `None`. Nous obtenons cette fonctionnalité en Python en affectant `None` aux paramètres que nous voulons rendre optionnels. Par exemple, si nous voulons que le paramètre de nom de famille ci-dessus soit optionnel:

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

Tous les paramètres optionnels doivent suivre les paramètres requis. Si nous avions voulu faire le prénom facultatif plutôt que le nom de famille, nous aurions besoin de changer l'ordre des paramètres dans la fonction, en plaçant le prénom dernier dans la liste.

En Python, nous pouvons aussi définir une valeur qui sera affectée à un paramètre si l'utilisateur n'en fournit pas, ou s'il passe `None` à sa place. Ils sont appelés paramètres initialisés par défaut. Prenons l'exemple précédent et par défaut le nom de famille à `"Smith"`.

```python-ignore
def buildName(firstName, lastName = "Smith"):
    return firstName + " " + lastName

result1 = buildName("Bob")                  # works correctly now, returns "Bob Smith"
result2 = buildName("Bob", None)            # Nope, that's a type error this time
result3 = buildName("Bob", "Adams", "Sr.")  # error, too many parameters
result4 = buildName("Bob", "Adams")         # ah, just right
```

Les paramètres initialisés par défaut viennent sont traités, comme facultatifs, après tous les paramètres requis. Comme les paramètres optionnels, ils peuvent être omis lors de l'appel de fonction. Cela signifie que les paramètres optionnels et les paramètres par défaut partageront ces points communs dans leurs types,

```python-ignore
def buildName(firstName, lastName = None):
    # ...
```

et

```python-ignore
def buildName(firstName, lastName = "Smith"):
    # ...
```

partagent le même type `(firstName: str, lastName: str = None) => string`. La valeur par défaut de `LastName` disparaît dans le type, laissant uniquement derrière lui le fait que le paramètre est facultatif.

## Fonctions de gestion d'événements

Les fonctions de gestion (handlers) sont des fonctions qui effectuent une action lorsqu'un événement ou un changement d'état se produit. En général, un autre code enregistre la fonction de gestion dans une variable afin de l'appeler plus tard. Lorsqu'un événement se produit, comme une nouvelle valeur d'entrée ou un minuteur écoulé, la fonction est appelée pour exécuter une action en réponse.

Par exemple, la classe `Thermal` vérifie les changements de température et exécute une fonction de gestion enregistrée lorsque la température descend jusqu'à un seuil défini :

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

## Fonctions lambda

Les fonctions lambda servent de raccourci pour renvoyer le résultat d'une expression. Une lambda est souvent enregistrée dans une variable puis utilisée comme une fonction pour renvoyer le résultat de l'expression :

```python-ignore
def square(x):
    return x * x

area = lambda x, y: x * y

def cube(area, height):
    return area * height

volume1 = cube(square(5), 5)
volume2 = cube(area(4, 3), 10)
```

Une lambda peut aussi être utilisée de façon anonyme pour renvoyer directement un résultat.

```python-ignore
print("area = " + str((lambda x, y: x * y)(3, 4)))
```

# Déclarations de variables

Pour déclarer une variable, il suffit d'affecter une valeur à un identificateur de variable :

```python-ignore
a = 10
```

## Portée de bloc

Lorsqu'une variable est déclarée par une affectation, elle utilise ce que l'on appelle la *portée lexicale* ou *portée de bloc*. Les variables à portée de bloc ne sont pas visibles en dehors du bloc ou de la boucle `for` qui les contient.

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

Ici, nous avons deux variables locales `a` et `b`. la portée de `a`est limitée au corps de `f` tandis que la portée de `b`est limitée au bloc d'instruction `if`.

Une autre propriété des variables à portée de bloc est qu'elles ne peuvent pas être lus ou écrits avant qu'elles ne soient réellement déclarées. Bien que ces variables soient « présentes » dans toute leur portée, tous les points précédant leur déclaration font partie de leur *zone morte temporelle*. C'est juste une façon sophistiquée de dire que tu ne peux pas y accéder avant leur première affectation.

```python-ignore
a++ # illegal to use 'a' before it's declared
a = 0
```

# Appeler une fonction

La façon la plus simple de commencer en Python est d'appeler l'une des fonctions Python intégrées. Tout comme les blocs sont organisés en catégories/tiroirs, les fonctions sont aussi organisées en espaces de noms, dont les noms correspondent à ceux des tiroirs.

```python-ignore
Math.abs(-1)
```

### ~ indice

#### Fonctions dans un espace de noms

Si tu veux afficher toutes les fonctions disponibles dans l'espace de noms `Math`, tape simplement `Math` suivi de `.` et une liste de toutes les fonctions s'affiche.

### ~

## Parenthèses gauche et droite, s'il vous plaît!

Chaque fois que tu veux appeler une fonction, tu donnes le nom de la fonction suivi de `(` et terminé par `)`. Entre les parenthèses gauche et droite se trouvent les arguments de la fonction :

```python-ignore
Math.min(1, 2)
```

C'est une erreur de syntaxe d'avoir une parenthèse gauche sans la parenthèse droite de «fermeture»:

```python-ignore
Math.min(
```

Les parenthèses doivent être présentes même sans arguments.

## Des résultats pour moi?

De nombreuses fonctions renvoient un résultat que tu peux utiliser plus tard dans ton programme. Cela peut être un nombre, une chaîne de caractères ou un autre type de données.

```python-ignore
greater = Math.max(5, 10)
``` 
# Appeler une fonction

La façon la plus simple de débuter en JavaScript est d'appeler l'une des fonctions JavaScript intégrées. Tout comme les blocs sont organisés en catégories/tiroirs, les fonctions sont organisées en espaces de noms, dont les noms correspondent à ceux des tiroirs.

```typescript-ignore
Math.abs(-1)
```

### ~ hint

#### Fonctions dans un espace de noms

Si vous souhaitez afficher toutes les fonctions disponibles dans l'espace de noms `Math` , tapez simplement `Math` suivi de `.` et une liste de toutes les fonctions s'affiche.

### ~

## Parenthèses gauche et droite, s'il vous plaît!

Chaque fois que vous souhaitez appeler une fonction, vous donnez le nom de la fonction suivie de `(` et se terminant par `)`. Entre les parenthèses gauche et droite vont les arguments de la fonction:

```typescript-ignore
Math.min(1, 2)
```

C'est une erreur de syntaxe d'avoir une parenthèse gauche sans la parenthèse droite de «fermeture»:

```typescript-ignore
Math.min(
```

Si une fonction n'a pas d'arguments, vous avez quand-même besoin des parenthèses afin d'appeler la fonction.

## Des résultats pour moi?

De nombreuses fonctions retournent un résultat que vous pouvez utiliser plus tard dans votre programme. Il peut s'agir d'un nombre, d'une chaîne ou d'un autre type de données.

```typescript-ignore
let greater = Math.max(5, 10)
``` 
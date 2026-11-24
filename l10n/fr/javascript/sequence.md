# Séquences

En appelant une fonction après l'autre, dans l'ordre, vous pouvez avoir le programme faire des séquences de choses différentes.

```typescript-ignore
doSomething();
doAnotherThing();
```

## Le point-virgule

En JavaScript, le point-virgule (;) est utilisé pour terminer une instruction. Toutefois, dans la plupart des cas, le point-virgule est facultatif et peut être omis. Donc les deux séquences de code ci-dessous sont légales:

```typescript-ignore
doSomething()
doAnotherThing()
```

```typescript-ignore
doSomething();
doAnotherThing();
```

## L'instruction vide

En JavaScript, il y a le concept d'une *instruction vide*, qui est un espace suivi d'un point-virgule dans le contexte où une instruction est attendue. Ainsi, le code suivant est une boucle infinie suivie d'un appel à faire `quelque chose` qui ne s'exécutera jamais:

```typescript-ignore
while(true) ;
doSomething(); // THIS LINE WILL NEVER EXECUTE!
```

### ~hint

#### Pas d'instructions « vides »

Pour éviter ce problème, nous ne permettons pas à un programme de contenir une instruction vide, telle qu'illustrée ci-dessus. Si vous voulez vraiment une instruction vide, vous devez utiliser des accolades pour délimiter un bloc d'instruction vide:

```typescript-ignore
while(true) { } 
doSomething(); // THIS LINE WILL NEVER EXECUTE!
```

### ~

[En savoir plus sur les points-virgules en JavaScript](http://inimino.org/~inimino/blog/javascript_semicolons).
# lire jusqu'à

Lis un texte depuis le port série jusqu'à ce qu'un délimiteur soit trouvé.

```sig
serial.readUntil(",");
```

## Renvoie

* une [chaîne](/types/string) contenant les données reçues du port série, par exemple une réponse tapée par un utilisateur

## Exemple #example

L'exemple suivant lit des chaînes séparées par des virgules (``,``).

```blocks
basic.forever(() => {
    let answer = serial.readUntil(",");
    serial.writeLine(answer);
});
```

## Voir aussi #seealso

[série](/device/serial),
[série écrire ligne](/reference/serial/write-line),
[série écrire valeur](/reference/serial/write-value)

# lire ligne

Lis les données série reçues sous forme de ligne de texte.

```sig
serial.readLine();
```

Les données sont lues depuis le tampon de réception série sous forme de chaîne, ou ligne de texte, jusqu'à ce qu'un délimiteur de nouvelle ligne soit trouvé. La chaîne renvoyée inclut le caractère de nouvelle ligne.

## Renvoie

* une [chaîne](/types/string) contenant une ligne de texte reçue du port série. La chaîne est vide si aucune donnée n'est disponible.

## Voir aussi #seealso

[lire chaîne](/reference/serial/read-string)
[écrire ligne](/reference/serial/write-line),

```package
serial
```

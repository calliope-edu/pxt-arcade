# écrire chaîne

Écris une chaîne sur le port série sans commencer de nouvelle ligne.

```sig
serial.writeString("");
```
Seul le texte de la chaîne est écrit sur le port série. La prochaine fois que du texte est écrit,
il sera sur la même ligne que ce texte. Le texte est écrit sans créer
de nouvelle ligne.

## Paramètres

* **text** : la [chaîne](/types/string) à écrire sur le port série

## Exemple #example

Écrit le mot `JUMBO` sur le port série plusieurs fois, sans nouvelle ligne.

```blocks
forever(() => {
    serial.writeString("JUMBO");
    pause(1000);
});
```

## Voir aussi #seealso

[écrire ligne](/reference/serial/write-line),
[écrire nombre](/reference/serial/write-number),
[écrire valeur](/reference/serial/write-value)

```package
serial
```

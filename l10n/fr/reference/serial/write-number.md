# écrire nombre

Écris un nombre sur le port série.

```sig
serial.writeNumber(0);
```
Le nombre que tu envoies est converti en chaîne avant d'être envoyé. Ainsi, une valeur comme ``1023``
devient la chaîne de quatre caractères ``"1023"`` lorsqu'elle est envoyée sur la connexion
série. Le nombre est écrit dans la ligne en cours et aucune nouvelle ligne n'est
commencée ensuite.

## Paramètres

* **value** : le [nombre](/types/number) à écrire sur le port série

## Exemple #example

Écris un nombre à 10 chiffres sur le port série encore et encore.

```blocks
forever(() => {
    serial.writeNumber(1234567890);
    pause(5000);
});
```

## Voir aussi #seealso

[écrire ligne](/reference/serial/write-line),
[écrire valeur](/reference/serial/write-value)

```package
serial
```

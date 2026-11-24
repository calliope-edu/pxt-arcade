# écrire tampon

Écris un tampon sur le port de communication série.

```sig
serial.writeBuffer(pins.createBuffer(0));
```
Les informations d'un tampon sont envoyées sur le port série avec ``||serial:write buffer||``. On l'utilise
quand on veut envoyer des informations plus complexes que du simple texte ou un nombre.

## Paramètres

* **buffer** : le tampon à écrire sur le port série

## Exemple #example

Place quelques valeurs de données spéciales dans un tampon et envoie le tampon sur la connexion série.

```blocks
let sdv = pins.createBuffer(4)
sdv.setNumber(NumberFormat.Int8LE, 0, 53)
sdv.setNumber(NumberFormat.Int8LE, 1, 141)
sdv.setNumber(NumberFormat.Int8LE, 2, 9)
sdv.setNumber(NumberFormat.Int8LE, 3, 87)
serial.writeBuffer(sdv);
```

## Voir aussi #seealso

[écrire ligne](/reference/serial/write-line),
[écrire nombre](/reference/serial/write-number)

```package
serial
```

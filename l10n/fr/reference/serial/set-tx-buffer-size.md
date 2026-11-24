# définir taille tampon Tx

Règle la taille du tampon d'émission des données série.

```sig
serial.setTxBufferSize(0)
```

Tu peux régler la taille du tampon d'émission de la connexion série. Si ton programme écrit des données plus vite que la connexion série ne peut les transmettre, elles s'accumulent temporairement dans le tampon jusqu'à leur envoi. Si le tampon se remplit parce que les données n'ont pas été transmises assez vite, les données les plus anciennes sont supprimées pour faire de la place aux nouvelles.

Si tu écris souvent de petites quantités de données, tu peux choisir un petit tampon pour économiser la mémoire de ta carte.

## Paramètres

* **size** : un [nombre](/types/number) d'octets (8 bits de données) pour le tampon d'émission.

## Exemple #example

Règle la taille du tampon d'émission sur `40`. Écris une chaîne qui tient dans le tampon d'émission.

```blocks
serial.setTxBufferSize(40)
serial.writeString("Send me out. I'm not too big for the buffer.")
```

## Voir aussi #seealso

[définir taille tampon rx](/reference/serial/set-rx-buffer-size)

```package
serial
```

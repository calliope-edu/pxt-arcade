# définir taille tampon Rx

Règle la taille du tampon de réception des données série.

```sig
serial.setRxBufferSize(0)
```

Tu peux régler la taille du tampon de réception de la connexion série. Si les données sont reçues plus vite que ton programme ne les lit, elles s'accumulent temporairement dans le tampon jusqu'à ce qu'elles soient lues. Si le tampon se remplit parce que ton programme ne le lit pas, ou pas assez vite, les données les plus anciennes sont supprimées pour faire de la place aux nouvelles.

Tu peux choisir la taille de tampon qui convient le mieux à la façon dont ton programme lit les données. Régler la taille est aussi utile si tu veux lire une certaine quantité de données entrantes avec un événement [lorsque tampon rx plein](/reference/serial/on-event). Si tu lis souvent de petites quantités de données, tu peux choisir un petit tampon pour économiser la mémoire de ta carte.

## Paramètres

* **size** : un [nombre](/types/number) d'octets (8 bits de données) pour le tampon de réception.

## Exemple #example

Règle la taille du tampon de réception sur `80`. Lis toutes les données du tampon de réception lorsqu'il est plein.

```blocks
let myChars = ""
serial.setRxBufferSize(80)
serial.onEvent(SerialEvent.RxBufferFull, function () {
    myChars = serial.readString()
})
```

## Voir aussi #seealso

[définir taille tampon tx](/reference/serial/set-tx-buffer-size),
[lorsque événement](/reference/serial/on-event)

```package
serial
```

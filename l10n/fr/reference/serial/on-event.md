# lorsque événement

Exécute du code lorsque des données sont reçues ou lorsque le tampon de réception est plein.

```sig
serial.onEvent(SerialEvent.DataReceived, function () {})
```

Si tu veux que ton programme lise les nouvelles données dès qu'elles sont reçues, tu peux utiliser l'événement ``data received``. Ainsi, tu reçois les nouvelles données sans devoir d'abord essayer l'une des fonctions de lecture. Tu peux aussi utiliser un événement pour lire les données lorsque le tampon de réception est plein. Ton programme peut ainsi attendre qu'une certaine quantité de données soit reçue avant de la lire.

## Paramètres

* **event** : l'événement de réception à surveiller. Tu peux exécuter du code dès que des données sont reçues ou attendre d'abord que le tampon de réception soit plein. Les événements de réception sont : ``data received`` et ``rx buffer full``.
* **handler** : le code à exécuter lorsque l'événement de réception se produit.

## Exemple #example

### Événement données reçues #ex1

Construis une chaîne de caractères au fur et à mesure qu'ils sont reçus par la connexion série.

```blocks
let myChars = ""
serial.onEvent(SerialEvent.DataReceived, function () {
    myChars += serial.readString()
})
```

### Événement tampon de réception plein

Règle la taille du tampon de réception sur `80`. Lis toutes les données du tampon de réception lorsqu'il est plein.

```blocks
let myChars = ""
serial.setRxBufferSize(80)
serial.onEvent(SerialEvent.RxBufferFull, function () {
    myChars = serial.readString()
})
```

## Voir aussi #seealso

[lorsque délimiteur reçu](/reference/serial/on-delimiter-received)

```package
serial
```

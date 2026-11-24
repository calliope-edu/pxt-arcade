# créer une liaison série

Crée un nouveau canal de communication série sur les broches.

```sig
serial.createSerial(pins.TX, pins.RX)
```

Si ta carte n'a pas de connexion USB qui fournit un port série, tu peux créer un canal de communication série sur ses broches. Tu peux aussi vouloir un autre canal série réservé à ton programme, pour lequel tu définis ton propre identifiant de bus.

Tu choisis une broche numérique pour l'émission et une autre broche numérique pour la réception.

Cela crée une instance de l'objet de port ``Serial``. Cette nouvelle instance n'est pas définie comme instance de périphérique de la carte : tu dois donc utiliser les fonctions [série](/reference/serial) comme méthodes de l'objet renvoyé.

## Paramètres

* **tx** : la broche numérique d'émission du nouveau canal série.
* **rx** : la broche numérique de réception du nouveau canal série.
* **id** : l'identifiant du bus d'événements (facultatif).

## Retour

* une instance ``Serial`` qui te permet d'interagir directement avec le bus.

## Exemple #example

Crée ton propre périphérique de communication série sur les broches **A0** et **A1**.

```typescript-ignore
let mySerial = serial.createSerial(pins.A0, pins.A1)
mySerial.serialDevice.setBaudRate(BaudRate.BaudRate9600)
mySerial.writeLine("My own serial connection")
```

## Voir aussi #seealso

[rediriger](/reference/serial/redirect)

```package
serial
```
# rediriger

Redirige les données série pour qu'elles passent par les broches au lieu de la connexion USB.

```sig
serial.redirect(pins.A0, pins.A0, BaudRate.BaudRate115200)
```

Par défaut, les données série sont envoyées et reçues via une connexion USB vers ta carte. Si tu veux plutôt émettre et recevoir par les broches, tu peux y rediriger la connexion. Tu choisis les deux broches à utiliser pour les lignes d'émission et de réception. Tu règles aussi le débit de données (débit en bauds) de la connexion redirigée.

## ~ hint

Le débit de la connexion série correspond au nombre de signaux de données que la connexion transmet chaque seconde. En général, il s'agit du nombre de _bits_ de données envoyés par seconde. Pour des données simples de 8 bits, comme des caractères de texte, cela signifie qu'avec un débit de `9600`, 1200 caractères peuvent être envoyés ou reçus chaque seconde. Parfois, un ou deux signaux supplémentaires sont nécessaires pour transmettre les 8 bits d'un caractère, donc moins de caractères sont envoyés par seconde. Le débit réel ne change pas, mais le nombre de bits par seconde (bps) de données que ton programme voit est un peu réduit. Historiquement, le débit des données série est appelé le _débit en bauds_ de la connexion.

## ~

## Paramètres

* **tx** : la broche utilisée pour émettre les données série. C'est l'une des broches numériques de la carte.
* **rx** : la broche utilisée pour recevoir les données série. C'est l'une des broches numériques de la carte.
* **rate** : le débit de données (débit en bauds) pour envoyer et recevoir. Cette valeur se choisit dans la liste du bloc et fait partie de l'énumération ``BaudRate``.

## Exemple #example

Règle la taille des tampons d'émission et de réception. Redirige la connexion série vers les broches **A0** et **A1**.

```blocks
serial.setTxBufferSize(64)
serial.setRxBufferSize(64)
serial.redirect(pins.A0, pins.A1, BaudRate.BaudRate115200)
```

## Voir aussi #seealso

[attacher à la console](/reference/serial/attach-to-console),
[définir débit en bauds](/reference/serial/set-baud-rate)

```package
serial
```

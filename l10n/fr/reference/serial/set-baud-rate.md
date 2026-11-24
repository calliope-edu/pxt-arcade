# définir débit en bauds

Règle le débit en bauds pour l'émission et la réception des données série.

```sig
serial.setBaudRate(BaudRate.BaudRate115200)
```

Le _débit en bauds_, ou débit des données série, est réglé sur le même débit que l'appareil auquel ta carte est connectée. Ainsi, chaque côté de la connexion sait quand lire chaque bit de données envoyé et quand un groupe complet de bits (généralement 8 bits) a été reçu.

## ~ hint

Le débit de la connexion série correspond au nombre de signaux de données que la connexion transmet chaque seconde. En général, il s'agit du nombre de _bits_ de données envoyés par seconde. Pour des données simples de 8 bits, comme des caractères de texte, cela signifie qu'avec un débit de `9600`, 1200 caractères peuvent être envoyés ou reçus chaque seconde. Parfois, un ou deux signaux supplémentaires sont nécessaires pour transmettre les 8 bits d'un caractère, donc moins de caractères sont envoyés par seconde. Le débit réel ne change pas, mais le nombre de bits par seconde (bps) de données que ton programme voit est un peu réduit. Historiquement, le débit des données série est appelé le _débit en bauds_ de la connexion.

## ~

## Paramètres

* **rate** : le débit de données (débit en bauds) pour envoyer et recevoir. Cette valeur se choisit dans la liste du bloc et fait partie de l'énumération ``BaudRate``.

## Exemple #example

Règle le débit en bauds des données série sur `19200`.

```blocks
serial.setBaudRate(BaudRate.BaudRate19200)
```

## Voir aussi #seealso

[rediriger](/reference/serial/redirect)

```package
serial
```

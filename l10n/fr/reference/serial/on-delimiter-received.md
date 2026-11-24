# lorsque délimiteur reçu

Exécute du code lorsqu'un caractère délimiteur est reçu.

```sig
serial.onDelimiterReceived(Delimiters.NewLine, function () {})
```

La fin d'une ligne de texte, d'une séquence de caractères de commande et d'autres messages est souvent signalée par un caractère spécial. Ce caractère s'appelle un _délimiteur_. Les délimiteurs courants sont les espaces, les tabulations, les virgules et les retours à la ligne. Tu peux surveiller un délimiteur, puis faire traiter par ton programme les données déjà reçues lorsque le délimiteur arrive sur la connexion série.

## Paramètres

* **delimiter** : le caractère délimiteur à surveiller. Choisis un caractère dans la liste du bloc. En JavaScript, la valeur du caractère se trouve dans l'énumération ``Delimiters``.
* **handler** : le code à exécuter lorsque le délimiteur est reçu.

### Exemple #example

Lis une chaîne de caractères lorsque le délimiteur de nouvelle ligne est reçu.

```blocks
let myLine = ""
serial.onDelimiterReceived(Delimiters.NewLine, function () {
    myLine = serial.readString()
})
```

## Voir aussi #seealso

[lorsque événement](/reference/serial/on-event),
[lire chaîne](/reference/serial/read-string)

```package
serial
```

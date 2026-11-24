# attacher à la console

Envoie aussi les données écrites dans la console via la connexion série.

```sig
serial.attachToConsole()
```

Lorsque tu attaches la console à la connexion d'émission série, toutes les informations que tu enregistres dans la console sont aussi transmises via la connexion série.

## Exemple #example

Envoie quelques messages du journal de la console via la connexion série.

```blocks
serial.attachToConsole()
console.log("Send this message to the serial connection")
console.logValue("SerialValue", 999)
```

## Voir aussi #seealso

[rediriger](/reference/serial/redirect)

```package
serial
```

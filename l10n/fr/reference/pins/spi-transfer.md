# spi Transfer

Envoie une commande via une connexion SPI et reçois une réponse.

```sig
pins.spiTransfer(null, null)
```

Les données de commande dans le **Buffer** sont envoyées à un appareil esclave SPI. Le format des données dans le tampon de commande dépend de la façon dont l'appareil connecté s'attend à les lire.

## Paramètres

* **command** : un **Buffer** qui contient les données de commande à envoyer à l'appareil esclave.
* **response** : un **Buffer** qui recevra les données de la réponse à **command**.

## Exemple
Envoie du texte à afficher sur un écran LCD alphanumérique. L'écran est connecté en SPI et la commande d'affichage est `2`. Le tampon de commande formaté pour l'écran contient à la fois la commande et la chaîne de texte ``Hello!``.


```typescript
let resBuff = pins.createBuffer(2)
let cmdBuff = pins.createBuffer(16)
let message = "Hello!"
cmdBuff.setUint8(0, 2)
for (let i = 0; i <= message.length - 1; i++) {
    cmdBuff.setUint8(i+1, message.charCodeAt(i))
}
pins.spiTransfer(cmdBuff, resBuff)
```

## Voir aussi

[spi write](/reference/pins/spi-write)

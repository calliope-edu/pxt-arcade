# version DAL de l'appareil

Obtiens les informations de version du logiciel système de la @boardname@.

```sig
control.deviceDalVersion()
```

## Renvoie

* une [chaîne](/types/string) qui représente la version du logiciel système (DAL) de la carte.

Renvoie `"sim"` dans le simulateur et `"linux"` sur un Raspberry Pi.

## Exemple #example

Écris la version du logiciel système sur le port série.

```blocks
serial.writeLine("DAL version = " + control.deviceDalVersion());
```

## Voir aussi #seealso

[numéro de série de l'appareil](/reference/control/device-serial-number)

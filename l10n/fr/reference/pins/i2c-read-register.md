# i2c Read Register

Lis une valeur numérique dans un registre d'un appareil situé à une adresse sur le bus I2C.

```sig
pins.i2cReadRegister(0, 0)
```

Les appareils connectés à un bus I2C ont souvent des registres dans lesquels des valeurs sont placées comme état ou comme demandes d'action. Même si l'appareil est accessible à une seule adresse, il peut avoir plusieurs registres. Chaque registre a un index, ainsi une opération de lecture de registre peut obtenir la valeur au bon endroit. Les registres sont comme des boîtes aux lettres dans un bureau de poste qui contiennent chacune une seule valeur numérique.

## Paramètres

* **address** : un [nombre](types/number) entre `8` et `123` qui est l'adresse d'une puce sur le bus I2C.
* **register** : un [nombre](types/number) qui est l'index du registre de l'appareil à lire.
* **valueFormat** : un spécificateur de format optionnel pour le nombre à lire dans le registre, comme : `UInt16LE`. La valeur par défaut est ``UInt8LE``. 

## Retourne

* un [nombre](types/number) lu dans le **register** à l'**address** sur le bus I2C. Sa taille (nombre d'octets) dépend de ce que tu indiques dans **valueFormat**.

## Exemple

Lis une valeur d'un capteur de température connecté au bus I2C. Le capteur est connecté à l'adresse `41` et le registre de la température est à l'index `3`.

```blocks
let sensor = 41
let register = 3
let temperature = 0
temperature = pins.i2cReadRegister(sensor, register)
```

## Voir aussi

[i2c write register](/reference/pins/i2c-write-register),
[i2c read number](/reference/pins/i2c-read-number)

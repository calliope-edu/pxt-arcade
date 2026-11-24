# i2c Write Register

Écris une valeur numérique dans un registre d'un appareil situé à une adresse sur le bus I2C.

```sig
pins.i2cWriteRegister(0, 0, 0)
```

Les appareils connectés à un bus I2C ont souvent des registres dans lesquels des valeurs sont placées comme état ou comme demandes d'action. Même si l'appareil est accessible à une seule adresse, il peut avoir plusieurs registres. Chaque registre a un index, ainsi une opération d'écriture de registre peut placer la valeur au bon endroit. Les registres sont comme des boîtes aux lettres dans un bureau de poste qui contiennent chacune une seule valeur numérique.

## Paramètres

* **address** : un [nombre](types/number) entre `8` et `123` qui est l'adresse d'une puce sur le bus I2C.
* **register** : un [nombre](types/number) qui est l'index du registre de l'appareil dans lequel écrire.
* **value** : un [nombre](types/number) à écrire sur le bus I2C. Sa taille (nombre d'octets) dépend
de ce que tu indiques dans **valueFormat**.
* **valueFormat** : un spécificateur de format optionnel pour le nombre que tu vas écrire dans le registre, comme : `UInt16LE`. La valeur par défaut est ``UInt8LE``. 

## Exemple

Écris une valeur de sortie dans le registre de conversion d'un convertisseur numérique-analogique (CNA). Le CNA est connecté au bus I2C à l'adresse `23` et le registre de conversion est à l'index `1`.

```blocks
let DAC = 23
let register = 1 
let dacData = 178
pins.i2cWriteRegister(DAC, register, dacData)
```

## Voir aussi

[i2c read register](/reference/pins/i2c-read-register)
[i2c write number](/reference/pins/i2c-write-number)

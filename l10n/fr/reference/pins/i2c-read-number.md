# i2c Read Number

Lis un nombre depuis une adresse sur le bus I2C.

```sig
pins.i2cReadNumber(0, NumberFormat.Int8LE, false)
```

Si ta carte a des broches marquées **SDA** et **SCL**, tu peux lire des nombres depuis
d'autres puces qui ne sont pas sur ta carte. Les broches **SDA** et **SCL** se connectent à d'autres puces
([circuits intégrés](https://wikipedia.org/wiki/Integrated_circuit)) qui ont aussi ces mêmes broches. Cette connexion
s'appelle [**I2C**](https://wikipedia.org/wiki/I2C). Elle n'a besoin que de deux fils pour lire ou écrire
un nombre. Comme tu peux le deviner, un fil est pour **SDA** et l'autre pour **SCL**.

Les fils, et les signaux qui les traversent, forment ensemble ce qu'on appelle un _bus_. Une connexion I2C est
un _bus I2C_.

Tu sais peut-être que stocker un nombre en électronique nécessite plusieurs bits d'information numérique qui existent
tous en même temps (une combinaison de nombreuses tensions hautes et basses dans une puce). Comme le bus I2C
n'a que deux fils, un nombre circule sur l'un des fils un seul bit à la fois. Les
bits du nombre sont de courtes impulsions de tension haute et basse sur le fil **SDA**. Le fil **SCL**
permet à une puce d'indiquer à une autre puce quand le bit suivant du nombre est sur le fil **SDA**.

### Adresses

Pour garder les choses simples, le bus I2C permet à de nombreuses puces de se connecter aux mêmes fils. Pratique, car
ce serait vite le désordre si chaque puce ne pouvait pas partager les mêmes fils. C'est comme si les
puces étaient des maisons dans une rue. La rue est le bus connecté aux puces, les maisons. On sait
qu'une maison dans une rue a généralement une adresse. C'est pareil pour les puces sur un bus. Sans adresse,
un nombre circulerait sur le bus mais les puces qui attendent une entrée ne sauraient pas laquelle
doit le recevoir.

Les puces sur ton bus peuvent avoir des numéros d'adresse entre `8` et `123`. Assure-toi
que toutes les puces utilisent un numéro différent pour qu'elles répondent à leur propre adresse.

## Paramètres

* **address** : un [nombre](types/number) entre `8` et `123` qui est l'adresse d'une puce sur le bus I2C.
* **format** : le type de nombre que tu vas lire depuis le bus, par exemple : `Int8LE`.
* **repeated** : une valeur [booléenne](/types/boolean), `true` ou `false`, pour indiquer si tu veux lire
à nouveau tout de suite.
>C'est généralement `false` si tu attends un moment avant de lire ou d'écrire à nouveau sur le bus.


## Retourne

* un [nombre](types/number) lu depuis le bus I2C. Il fait un ou plusieurs
octets selon le type que tu as demandé dans **format**.

## Exemple #example

Connecte un capteur de température sur une platine d'essai aux broches **SDA** et **SCL** de ta carte. Règle ton capteur
pour qu'il réponde à l'adresse `24`. Toutes les 30 secondes, lis la température du capteur et écris-la en Fahrenheit
sur le port série.

```blocks
forever(() => {
    let celcius = pins.i2cReadNumber(24, NumberFormat.Int8LE, false)
    let fahr = Math.map(celcius, 0, 100, 32, 212)
    serial.writeValue("Degrees F", fahr)
    pause(30000)
})
```

## Voir aussi #seealso

[i2c write number](/reference/pins/i2c-write-number),
[create i2c](/reference/pins/create-i2c)

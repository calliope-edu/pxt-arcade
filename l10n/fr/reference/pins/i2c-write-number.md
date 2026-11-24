# i2c Write Number

Écris un nombre à une adresse sur le bus I2C.

```sig
pins.i2cWriteNumber(0, NumberFormat.Int8LE, false)
```

Si ta carte a des broches marquées **SDA** et **SCL**, tu peux écrire des nombres vers
d'autres puces qui ne sont pas sur ta carte. Les broches **SDA** et **SCL** se connectent à d'autres puces
([circuits intégrés](https://wikipedia.org/wiki/Integrated_circuit)) qui ont aussi ces mêmes broches. Cette connexion
s'appelle [**I2C**](https://wikipedia.org/wiki/I2C). Elle n'a besoin que de deux fils pour lire ou écrire
un nombre. Comme tu peux le deviner, un fil est pour **SDA** et l'autre pour **SCL**.

Les fils, et les signaux qui y passent, s'appellent ensemble un _bus_. Une connexion I2C est
un _bus I2C_.

Tu sais peut-être que stocker un nombre en électronique demande plusieurs bits d'information numérique qui existent
tous en même temps (une combinaison de nombreuses tensions hautes et basses dans une puce). Comme le bus I2C
n'a que deux fils, un nombre passe dans l'un des fils un seul bit à la fois. Les
bits du nombre sont de courtes impulsions de tension haute et basse sur le fil **SDA**. Le fil **SCL**
permet à une puce d'indiquer à une autre puce quand le bit suivant du nombre est sur le fil **SDA**.

### Adresses

Pour garder les choses simples, le bus I2C permet à de nombreuses puces de se connecter aux mêmes fils. Pratique, car
ce serait vite le désordre si les puces ne pouvaient pas partager les mêmes fils. C'est comme si les
puces étaient des maisons dans une rue. La rue est le bus connecté aux puces, les maisons. On sait
qu'une maison dans une rue a généralement une adresse. C'est pareil pour les puces sur un bus. Sans adresse,
un nombre circulerait sur le bus mais les puces qui attendent une entrée ne sauraient pas qui
doit le recevoir.

Les puces sur ton bus peuvent avoir des adresses entre `8` et `123`. Assure-toi
que toutes les puces utilisent un numéro différent pour qu'elles répondent à leur propre adresse.

## Paramètres

* **address** : un [nombre](types/number) entre `8` et `123` qui est l'adresse d'une puce sur le bus I2C.
* **value** : un [nombre](types/number) à écrire sur le bus I2C. Sa taille (nombre d'octets) dépend
de ce que tu indiques dans **format**.
* **format** : le type de nombre que tu vas écrire sur le bus, comme : `Int8LE`.
* **repeated** : une valeur [booléenne](/types/boolean), `true` ou `false`, pour dire si tu veux lire
à nouveau tout de suite.
>C'est généralement `false` si tu attends un moment avant de lire ou d'écrire à nouveau sur le bus.


## Exemple #example

Connecte un convertisseur numérique-analogique (CNA) 12 bits sur une plaque d'essai aux broches **SDA** et **SCL** de ta
carte. Règle ton CNA pour qu'il réponde à l'adresse `99`. Écris des nombres vers le CNA pour qu'il produise une onde en dents de scie
environ chaque seconde.

```blocks
let i = 0
forever(() => {
    i = 0
    while (i <= 4095) {
        pins.i2cWriteNumber(98, i, NumberFormat.UInt16LE, false)
        pause(6)
        if (i > 0) {
            i += 256
        } else {
            i += 255
        }
    }
})
```

## Voir aussi #seealso

[i2c read number](/reference/pins/i2c-read-number)

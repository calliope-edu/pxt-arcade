# abs

Valeur absolue d'un nombre.

```sig
Math.abs(-5);
```

Lorsque vous voulez savoir la valeur d'un nombre sans son *signe* (+/-). La valeur absolue de-5 est 5 et la valeur absolue de 5 est également 5. La valeur absolue est parfois appelée *magnitude*.

## Paramètres

* **x**: le [nombre](/types/number) pour lequel la valeur absolue est renvoyée. Il peut s'agir d'un nombre négatif (`-1`), d'un nombre positif (`6`) ou de `0`.

## Valeur retournée

* un [nombre](/types/number) qui est la valeur absolue de `x`.

## Exemple #example

Recherchez la valeur absolue de `-34`. Faites quelques vérifications pour vous assurer que la valeur absolue est vraiment `34`. Définissez la valeur à `0` si les contrôles échouent.

```blocks
let pos = Math.abs(-34);
if (pos > 0) {
    if (pos != 34) {
        pos = 0;
    }
} else {
    pos = 0;
}
```
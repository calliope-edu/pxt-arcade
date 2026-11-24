# analog Read

Lis une valeur d'entrée analogique sur une broche.

```sig
pins.A0.analogRead()
```

Ta carte peut lire une valeur numérique pour un _signal_ sur une broche analogique. Un signal est une certaine tension
mesurée par un circuit de ta carte. La valeur de ce signal ne correspond pas vraiment à sa
tension, mais c'est un nombre qui indique la quantité de signal présente. Le nombre que tu lis pour le signal
est compris entre `0` et `1023`. `0` signifie aucun signal et `1023` un signal complet.

## Retourne

* un [nombre](types/number) entre `0` et `1023` qui est la quantité de signal sur la broche.

## Exemple #example

Lis la broche `A2` et écris la valeur dans la console.

```blocks
forever(function() {
    let signal = pins.A2.analogRead()
    console.log("signal", signal)
    pause(1000)
})
```

## Voir aussi #seealso

[analog write](/reference/pins/analog-write)

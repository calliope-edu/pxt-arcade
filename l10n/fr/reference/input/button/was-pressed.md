# was Pressed

Vérifie si un bouton a été pressé auparavant.

```sig
input.buttonA.wasPressed()
```

Le fait qu'un bouton a été pressé auparavant est mémorisé. Une fois que **a été pressé** est utilisé, ce fait est oublié et
le résultat est `false` la prochaine fois que tu vérifies avec **a été pressé** (l'_état_ du bouton est réinitialisé). Mais si tu appuies de nouveau sur le bouton avant de
vérifier avec **a été pressé**, il te dira `true`. 

## ~hint
**Toucher**

Si ta carte a des broches ou des pastilles qui fonctionnent comme entrées tactiles, ton code peut les utiliser comme des boutons.
Au lieu d'indiquer `button A` ou `button B` comme source d'entrée, utilise un nom de broche comme `pin A1`.

```block
if (input.pinA1.wasPressed()) {
    console.log("Hey, I was pressed.");
}
```

Lis la page sur les [**capteurs tactiles**](/reference/input/button/touch-sensors) et l'utilisation des broches comme boutons tactiles.
## ~

## Retourne

* un [booléen](types/boolean) : `true` si le bouton a été pressé auparavant, `false` si le bouton n'a pas été pressé auparavant

## Exemple #example

Affiche dans la console un message indiquant si le bouton `A` ou `B` a été pressé.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function() {
    if (input.buttonA.wasPressed()) {
        console.log("Button A Pressed")
    } else {
        console.log("Button B Pressed")
    }
})
```

## Voir aussi #seealso

[est pressé](/reference/input/button/is-pressed),
[lors de l'événement](/reference/input/button/on-event)

[Capteurs tactiles](/reference/input/button/touch-sensors)

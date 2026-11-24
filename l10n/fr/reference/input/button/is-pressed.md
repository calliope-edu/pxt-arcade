# est pressé

Vérifie si un bouton est pressé ou non.

```sig
input.buttonA.isPressed()
```

## ~hint
**Toucher**

Si ta carte a des broches ou des pastilles qui fonctionnent comme entrées tactiles, ton code peut les utiliser comme des boutons.
Au lieu d'indiquer `button A` ou `button B` comme source d'entrée, utilise un nom de broche comme `pin A1`.

```block
if (input.pinA1.isPressed()) {
    console.log("Hey, I feel pressed.");
}
```
Lis la page sur les [**capteurs tactiles**](/reference/input/button/touch-sensors) et l'utilisation des broches comme boutons tactiles.
## ~

## Retourne

* un [booléen](types/boolean) : `true` si le bouton est pressé, `false` s'il n'est pas pressé

## Exemple #example

Affiche un message dans le journal lorsque le bouton `A` est pressé.

```blocks
forever(function() {
    if (input.buttonA.isPressed()) {
        console.log("Button A is pressed")
    }
    pause(300)
})
```

## Voir aussi #seealso

[a été pressé](/reference/input/button/was-pressed),
[lors d'un événement](/reference/input/button/on-event)

[Capteurs tactiles](/reference/input/button/touch-sensors)
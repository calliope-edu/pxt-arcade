# lors d'un événement

Exécute du code lorsqu'un bouton (``A``, ``B`` ou à la fois ``A`` + ``B``) est cliqué, double-cliqué ou subit une autre action.

```sig
input.buttonA.onEvent(ButtonEvent.Click, () => {

})
```

## ~hint

**Toucher**

Si ta carte a des broches ou des pastilles qui fonctionnent comme entrées tactiles, ton code peut les utiliser comme des boutons.
Au lieu d'indiquer `button A` ou `button B` comme source d'entrée, utilise un nom de broche comme `pin A1`.

```block
input.pinA1.onEvent(ButtonEvent.Down, function() {
    console.log("Press down")
})
```

Lis la page sur les [**capteurs tactiles**](/reference/input/button/touch-sensors) et l'utilisation des broches comme boutons tactiles.

## ~

## Paramètres

* ``ev`` l'action du bouton pour laquelle exécuter du code. Les actions (événements) du bouton sont :
> * ``click``: le bouton a été cliqué (pressé puis relâché)
> * ``double click``: le bouton est cliqué deux fois très vite (pressé et relâché deux fois, rapidement)
> * ``long click``: le bouton est relâché après avoir été maintenu longtemps, par exemple une seconde ou plus
> * ``up``: le bouton vient d'être relâché après avoir été pressé
> * ``down``: le bouton vient d'être enfoncé
> * ``held``: le bouton a été pressé et l'est toujours
* ``body`` le code que tu veux exécuter lorsqu'il se passe quelque chose avec un bouton

## Exemples #example

### Bouton relâché #ex1

Lorsque le bouton ``B`` est relâché, affiche un message dans le journal.

```blocks
input.buttonB.onEvent(ButtonEvent.Up, function() {
    console.log("Release button")
})
```

### Toucher #ex2

Affiche un message dans le journal lorsque tu touches ou relâches la broche capacitive `pin A1` de la carte.

```blocks
input.pinA1.onEvent(ButtonEvent.Down, function() {
    console.log("Touch pin")
})
input.pinA1.onEvent(ButtonEvent.Up, function() {
    console.log("Release pin")
})
```

## Voir aussi #seealso

[est pressé](/reference/input/button/is-pressed),
[a été pressé](/reference/input/button/was-pressed),
[aléatoire](/blocks/math#random-value)

[Capteurs tactiles](/reference/input/button/touch-sensors)

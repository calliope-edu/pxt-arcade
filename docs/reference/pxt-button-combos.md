# pxt-button-combos

## Reference

### On Button Combination

Add a new combo to the game.

Combos are represented by a string of characters that correspond to button presses,
where u=up, d=down, l=left, r=right, a=A, and b=B. `+` can be used between characters to
require them to be pressed at the same time.

| controller button | value |
|---| ---|
| up | U |
| down | D |
| left | L |
| right | R |
| A | A |
| B | B |

The sequence "press a, followed by b, followed by down and right at the same time" would
be represented by the string "abd+r".

Each combo must be distinct; adding a new handler for a previously used combo
will overwrite the old handler.

@param combo the combo move sequence: see full combo for examples.
@param handler function to run when combo has been inputted.

### Button Ids

A piece of a button sequence. Can be text ``join``ed with buttons
to create a full sequence for ``generateComboString``

@param id the button to generate a string for

### Remove Combo

Remove a previously attached combo..

@param combo combo to remove; see attachCombo for format.

### Set Combo Timeout

Set the amount of time between button presses before a combo is ended.

@param t maximum amount of time between button presses that should trigger combo.

### Combo Trigger

Set the condition for when moves will trigger (attempt to run).

By default, this is set to TriggerType.Continuous, which will attempt to run
a combo each time a button is pressed.

### On Special Combination

Add a new event that runs when a special code is entered.

The special code for this event is:
>up, up, down, down, left, right, left, right, B, A

@param handler event to run when the code is entered.

Source: [jwunderl/pxt-button-combos](https://github.com/jwunderl/pxt-button-combos/tree/v0.0.24) (v0.0.24)

```package
pxt-button-combos
```

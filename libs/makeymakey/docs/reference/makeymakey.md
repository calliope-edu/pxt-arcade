# makeymakey

An extension that allows you to use the Makey Makey board to play MakeCode Arcade games by allowing you to remap the keybindings for the MakeCode Arcade simulator buttons.

## Usage

This extension allows you to change the keys you use to control the MakeCode Arcade simulator so that you can use the [Makey Makey](https://makeymakey.com/) to build controllers to play MakeCode Arcade games.

### Blocks
#### `Use Default Makey Makey Keys`

The `Use Default Makey Makey Keys` block tells the simulator to use the inputs on the front of the Makey Makey as the keys to control the MakeCode Arcade game.  These keys are:
##### Player 1 ###
* UP -> UP ARROW
* DOWN -> DOWN ARROW
* LEFT -> LEFT ARROW
* RIGHT -> RIGHT ARROW
* A BUTTON -> CLICK
* B BUTTON -> SPACE
##### Player 2 ###
* UP -> W
* DOWN -> S
* LEFT -> A
* RIGHT -> D
* A BUTTON -> G
* B BUTTON -> F

#### `Set Simulator Keymap for Player`
The `Set Simulator Keymap for Player` block allows you to create a custom control scheme by choosing which keys correspond to which MakeCode Arcade simulator buttons.

Source: [joylabz/makeymakey-makecode-arcade-extension](https://github.com/joylabz/makeymakey-makecode-arcade-extension/tree/1.0.3) (1.0.3)

```package
makeymakey
```

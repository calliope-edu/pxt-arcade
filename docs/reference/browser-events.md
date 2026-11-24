# Browser Events

Events from the keyboard and the mouse of the computer the game runs on.

Use them for games that are played **in the browser** (simulator, shared links): react to any key with **on key pressed**, check **is key pressed**, react to mouse clicks and mouse movement, or hide the mouse pointer.

## ~ hint

**Only in the browser.** The Calliope mini has no keyboard and no mouse; on the device these blocks do nothing. For the buttons of the Calliope mini GameKit use the **Controller** blocks.

## ~

```blocks
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    game.splash("Space!")
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    game.splash("Click at " + x + ", " + y)
})
```

```package
browser-events
```

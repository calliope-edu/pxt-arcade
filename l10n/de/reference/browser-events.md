# Browser-Ereignisse

Ereignisse von Tastatur und Maus des Computers, auf dem das Spiel läuft.

Verwende sie für Spiele, die **im Browser** gespielt werden (Simulator, geteilte Links): Reagiere mit **on key pressed** auf beliebige Tasten, prüfe mit **is key pressed**, ob eine Taste gedrückt ist, reagiere auf Mausklicks und Mausbewegungen oder blende den Mauszeiger aus.

## ~ hint

**Nur im Browser.** Der Calliope mini hat weder Tastatur noch Maus; auf dem Gerät bewirken diese Blöcke nichts. Für die Tasten des Calliope mini GameKit verwendest du die Blöcke unter **Controller**.

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

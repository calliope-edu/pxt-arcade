# Browser-Ereignisse

Ereignisse von Tastatur und Maus des Computers, auf dem das Spiel läuft.

Verwende sie für Spiele, die **im Browser** gespielt werden (Simulator, geteilte Links): Reagiere mit **wenn Taste gedrückt** auf jede Taste, prüfe mit **ist Taste gedrückt**, reagiere auf Mausklicks und Mausbewegungen oder blende den Mauszeiger aus.

## ~ hint

**Nur im Browser.** Der Calliope mini hat keine Tastatur und keine Maus; auf dem Gerät machen diese Blöcke nichts. Für die Tasten des Calliope mini GameKit verwendest du die Blöcke aus **Controller**.

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

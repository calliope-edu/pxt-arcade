# pxt-tick-event

## Blöcke

Diese Erweiterung fügt zwei Blöcke hinzu: `key { key } value { value}` und `post tick event`

Der erste Block erstellt einen Schlüssel in den Tick-Event-Daten; der Wert kann eine Zahl oder eine Zeichenkette sein.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
```

Der zweite Block sendet ein Tick-Event, das aus einer Liste von `key value`-Paaren besteht. Es wird an den übergeordneten Frame geschickt und auf der Teilen-Seite als Tick-Event gesendet, wenn das geteilte Projekt als „approved“ gelistet ist.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
tickevent.post([tickevent.createKV("data", 5), myTick]);
```

Quelle: [microsoft/pxt-tick-event](https://github.com/microsoft/pxt-tick-event/tree/v0.2.0) (v0.2.0)

```package
pxt-tick-event
```

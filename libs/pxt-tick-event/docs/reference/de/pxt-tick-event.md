# pxt-tick-event

## Blöcke

Diese Erweiterung fügt zwei Blöcke hinzu: `key { key } value { value}` (Schlüssel/Wert) und `post tick event` (sende Tick-Ereignis)

Der erste Block erstellt einen Schlüssel in den Daten des Tick-Ereignisses; der Wert kann eine Zahl oder eine Zeichenfolge sein.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
```

Der zweite Block sendet ein Tick-Ereignis, das aus einer Liste von `key value`-Paaren besteht. Es wird an das übergeordnete Fenster geschickt und auf der Teilen-Seite als Tick-Ereignis gesendet, wenn das geteilte Projekt als „approved“ (freigegeben) gelistet ist.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
tickevent.post([tickevent.createKV("data", 5), myTick]);
```

Quelle: [microsoft/pxt-tick-event](https://github.com/microsoft/pxt-tick-event/tree/v0.2.0) (v0.2.0)

```package
pxt-tick-event
```

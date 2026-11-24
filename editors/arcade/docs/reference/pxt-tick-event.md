# pxt-tick-event

## Blocks

This extension adds two blocks: `key { key } value { value}` and `post tick event`

The first block creates a key in the tick events data; the value can be either a number or a string.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
```

The second block sends a tick event made up of a list of `key value` pairs. This will sent to the parent frame and be sent as a tick event on the share page if shared project is listed as 'approved'.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
tickevent.post([tickevent.createKV("data", 5), myTick]);
```

Source: [microsoft/pxt-tick-event](https://github.com/microsoft/pxt-tick-event/tree/v0.2.0) (v0.2.0)

```package
pxt-tick-event
```

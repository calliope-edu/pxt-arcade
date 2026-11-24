# pxt-tick-event

## Blocs

Cette extension ajoute deux blocs : `key { key } value { value}` et `post tick event`

Le premier bloc crée une clé dans les données de l'événement tick ; la valeur peut être un nombre ou une chaîne.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
```

Le second bloc envoie un événement tick composé d'une liste de paires `key value`. Il sera envoyé au cadre parent, puis envoyé comme événement tick sur la page de partage si le projet partagé est marqué comme « approuvé ».

```blocks
let myTick = tickevent.createKV("tick", "hi!");
tickevent.post([tickevent.createKV("data", 5), myTick]);
```

Source : [microsoft/pxt-tick-event](https://github.com/microsoft/pxt-tick-event/tree/v0.2.0) (v0.2.0)

```package
pxt-tick-event
```


# pxt-tick-event

## Blocs

Cette extension ajoute deux blocs : `key { key } value { value}` (clé/valeur) et `post tick event` (envoyer un événement tick)

Le premier bloc crée une clé dans les données de l'événement tick ; la valeur peut être un nombre ou une chaîne de caractères.

```blocks
let myTick = tickevent.createKV("tick", "hi!");
```

Le second bloc envoie un événement tick composé d'une liste de paires `key value`. Il est transmis à la fenêtre parente et envoyé comme événement tick sur la page de partage si le projet partagé est listé comme « approved » (approuvé).

```blocks
let myTick = tickevent.createKV("tick", "hi!");
tickevent.post([tickevent.createKV("data", 5), myTick]);
```

Source : [microsoft/pxt-tick-event](https://github.com/microsoft/pxt-tick-event/tree/v0.2.0) (v0.2.0)

```package
pxt-tick-event
```

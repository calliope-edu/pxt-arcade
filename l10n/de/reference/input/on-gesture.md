# wenn Geste

Führe Code aus, wenn du eine **Geste** ausführst, zum Beispiel den @boardname@ schüttelst.

```sig
input.onGesture(Gesture.Shake,() => {
})
```

## Parameter

* ``gesture``: die Geste, die erkannt werden soll. Eine Geste ist die Art, wie du den @boardname@ hältst oder bewegst. Gesten sind:
> * `shake`: das Board schütteln
> * `logo up`: das Logo zeigt nach oben
> * `logo down`: das Logo zeigt nach unten
> * `screen up`: die Bildschirmseite zeigt nach oben
> * `screen down`: die Bildschirmseite zeigt nach unten
> * `tilt left`: das Board ist nach links geneigt
> * `tilt right`: das Board ist nach rechts geneigt
> * `free fall`: das Board fällt eine Strecke herunter
> * `2g`: Beschleunigungskraft von 2 g (gut geeignet zum Erkennen von Schritten)
> * `3g`: Beschleunigungskraft von 3 g
> * `6g`: Beschleunigungskraft von 6 g
* ``body``: Code, der ausgeführt wird, wenn die Geste erkannt wird

## Beispiel: Zufallszahl #example

Gib eine Nachricht aus, wenn du den @boardname@ schüttelst.

```blocks
input.onGesture(Gesture.Shake, function() {}
    console.log("I'm shaking!")
})
```

## #seealso

```package
accelerometer
```

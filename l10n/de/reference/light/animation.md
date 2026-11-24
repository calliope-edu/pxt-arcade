# Animation

Gibt eine Instanz der ausgewählten eingebauten Animation zurück.

```sig
light.animation(LightAnimation.Sparkle)
```

## Parameter

* **kind**: die Art der auszuwählenden Animation, eine der folgenden:

>* `running lights`
>* `comet`
>* `color wipe`
>* `theater chase`
>* `rainbow`

## Beispiel

Zeige die Animation `rainbow` fortlaufend in Abständen von `500` Millisekunden.

```blocks
forever(function() {
    light.showAnimation(LightAnimation.Rainbow, 500)
})
```

## Siehe auch

```package
light
```

# wenn lautes Geräusch

Führe Code aus, wenn das Mikrofon ein lautes Geräusch hört.

```sig
input.onLoudSound(function(){});
```

## Parameter

* **handler**: der Code, der ausgeführt wird, wenn ein lautes Geräusch gehört wird.

## Beispiel #example

Lass die Pixel aufblitzen, wenn ein lautes Geräusch erkannt wird.

```blocks
let pixels = light.createStrip()

input.onLoudSound(function() {
	pixels.setAll(0xff0000)
	pause(100)
	pixels.setAll(0x000000)
})
```

# Siehe auch #seealso

[Lautstärke](/reference/input/sound-level)

```package
microphone
light
```

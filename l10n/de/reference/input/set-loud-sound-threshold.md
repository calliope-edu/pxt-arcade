# set Loud Sound Threshold

Lege fest, wie laut es sein muss, damit dein Board ein lautes Geräusch erkennt.

```sig
input.setLoudSoundThreshold(0)
```

Wenn das Mikrofon ein Geräusch hört, liefert es dir eine Zahl dafür, wie laut das Geräusch in diesem Moment war.
Diese Zahl ist der Lautstärkepegel und hat einen Wert von `0` (kein Geräusch) bis `255` (sehr laut). Du kannst
einen Lautstärkepegel als _Schwellenwert_ (genau die richtige Lautstärke) verwenden, um das Ereignis
[wenn lautes Geräusch](/reference/input/on-loud-sound) auszulösen.

## Parameter

* **value**: eine Lautstärke-[Zahl](/types/number), die ein Lautstärkeereignis auslöst.

## Beispiel #example

Lass die Pixel auf dem Pixelstreifen `pink` aufblitzen, wenn du klatschst oder in der Nähe ein anderes lautes Geräusch machst.

```blocks
let pixels = light.createStrip()
input.setLoudSoundThreshold(768)

input.onLoudSound(function() {
	pixels.setAll(0xff007f)
    pause(200)
    pixels.clear()
})
```

## Siehe auch #seealso

[wenn lautes Geräusch](/reference/input/on-loud-sound)

```package
microphone
```
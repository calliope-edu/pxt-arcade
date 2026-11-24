# Tastatur

Emuliere das Tippen auf einer Tastatur über eine USB-Verbindung.

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um eine Tastatur zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

```cards
keyboard.type("")
keyboard.key("", KeyboardKeyEvent.Press)
keyboard.mediaKey(KeyboardMediaKey.Mute, KeyboardKeyEvent.Press)
keyboard.functionKey(KeyboardFunctionKey.F1Key, KeyboardKeyEvent.Press)
```

## Siehe auch

[tippen](/reference/keyboard/type), [Taste](/reference/keyboard/key), [Medientaste](/reference/keyboard/media-key), [Funktionstaste](/reference/keyboard/function-key)

```package
keyboard
```
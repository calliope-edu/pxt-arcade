# tippen

Emuliere das Tippen von Textzeichen auf einer Tastatur.

```sig
keyboard.type("")
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Tastaturaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

## Parameter

* **text**: ein [String](/types/string) aus Textzeichen, die als simulierte Tastenanschläge gesendet werden.

## Beispiel #example

Emuliere das Eintippen eines Befehls, um diese Seite im Webbrowser zu öffnen.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebHome, KeyboardKeyEvent.Press)
keyboard.type("@homeurl@reference/keyboard/type")
```

## Siehe auch #seealso

[Taste](/reference/keyboard/key), [Medientaste](/reference/keyboard/media-key), [Funktionstaste](/reference/keyboard/function-key)

```package
keyboard
```
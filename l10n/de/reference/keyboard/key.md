# Taste

Emuliere das Drücken einer einzelnen Texttaste auf einer Tastatur.

```sig
keyboard.key("", KeyboardKeyEvent.Press)
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Tastaturaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

Das Zeichen der Texttaste steht in einem String. Enthält der String mehr als ein Zeichen, wird nur das erste Zeichen als Tastendruck verwendet.

## Parameter

* **key**: ein [String](/types/string) mit einem Textzeichen für den zu simulierenden Tastendruck.
* **event**: das zu simulierende Tastendruck-Ereignis. Diese sind:
>* `press`: simuliere das Herunterdrücken und anschließende Loslassen einer Texttaste
>* `down`: simuliere das Herunterdrücken einer Texttaste
>* `up`: simuliere das Loslassen einer Texttaste

## Beispiel #example

Emuliere, dass die Taste „A“ `2` Sekunden lang gedrückt und dann losgelassen wird.

```blocks
keyboard.key("A", KeyboardKeyEvent.Down)
pause(2000)
keyboard.key("A", KeyboardKeyEvent.Up)
```

## Siehe auch #seealso

[tippen](/reference/keyboard/type), [Medientaste](/reference/keyboard/media-key), [Funktionstaste](/reference/keyboard/function-key)

```package
keyboard
```
# Medientaste

Emuliere das Drücken einer Medientaste auf einer Tastatur.

```sig
keyboard.mediaKey(KeyboardMediaKey.Mute, KeyboardKeyEvent.Press)
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Tastaturaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

Medientasten sind Sondertasten, die es auf vielen Tastaturen gibt, um besondere Aktionen in Anwendungen auszuführen. Beispiele sind das Erhöhen der Lautstärke oder das Öffnen eines Websuche-Fensters.

## Parameter

* **key**: eine Medientaste der Tastatur. Die möglichen Tasten findest du in der Tastenliste des Blocks oder in der Aufzählung ``KeyboardMediaKey``.
* **event**: das zu simulierende Tastendruck-Ereignis. Diese sind:
>* `press`: simuliere das Herunterdrücken und anschließende Loslassen einer Medientaste
>* `down`: simuliere das Herunterdrücken einer Medientaste
>* `up`: simuliere das Loslassen einer Medientaste

## Beispiel #example

Emuliere das Eintippen eines Befehls, um diese Seite im Webbrowser zu öffnen.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebHome, KeyboardKeyEvent.Press)
keyboard.type("@homeurl@reference/keyboard/media-key")
```

## Siehe auch #seealso

[tippen](/reference/keyboard/type), [Taste](/reference/keyboard/key), [Funktionstaste](/reference/keyboard/function-key)

```package
keyboard
```
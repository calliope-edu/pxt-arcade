# Funktionstaste

Emuliere das Drücken einer Funktionstaste auf einer Tastatur.

```sig
keyboard.functionKey(KeyboardFunctionKey.F1Key, KeyboardKeyEvent.Press)
```

## ~ hint

Der @boardname@ muss über ein USB-Kabel mit einem Computer oder einem anderen Host-Gerät verbunden sein, um Tastaturaktionen zu emulieren. Diese Funktion funktioniert nicht im Simulator.

## ~

Funktionstasten sind Tasten für Benutzereingaben an eine Anwendung, die kein Text sind. Diese Tasten sagen einer Anwendung zum Beispiel, dass sie scrollen oder das Fenster schließen soll.

## Parameter

* **key**: eine Funktionstaste der Tastatur. Die möglichen Tasten findest du in der Tastenliste des Blocks oder in der Aufzählung ``KeyboardFunctionKey``.
* **event**: das zu simulierende Tastendruck-Ereignis. Diese sind:
>* `press`: simuliere das Herunterdrücken und anschließende Loslassen einer Funktionstaste
>* `down`: simuliere das Herunterdrücken einer Funktionstaste
>* `up`: simuliere das Loslassen einer Funktionstaste

## Beispiel #example

Emuliere 4-mal das Drücken der Taste `page down`, um durch eine Liste von Nachrichtenartikeln zu scrollen.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebSearch, KeyboardKeyEvent.Press)
keyboard.type("news")
pause(2000)
for (let i = 0; i < 4; i++) {
    pause(4000)
    keyboard.functionKey(KeyboardFunctionKey.PageDown, KeyboardKeyEvent.Press)
}
```

## Siehe auch #seealso

[tippen](/reference/keyboard/type), [Taste](/reference/keyboard/key), [Medientaste](/reference/keyboard/media-key)

```package
keyboard
```
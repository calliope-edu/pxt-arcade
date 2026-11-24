# wenn Countdown endet

Führe Code aus, wenn der Countdown-Timer des Spiels null erreicht.

```sig
info.onCountdownEnd(function () {})
```

Wenn du etwas tun möchtest, sobald die Countdown-Zeit des Spiels `0` erreicht, kannst du Code in die Funktion **onCountdownEnd** einfügen. Vielleicht soll das Spiel nicht enden, wenn der Countdown `0` erreicht, sondern die Zeit wird zurückgesetzt oder mit einer anderen Zeit neu gestartet. Das hängt von den Regeln ab, die du für dein Spiel festlegen möchtest.

Wenn du den Countdown des Spiels gestartet hast (mit [startCountdown](/reference/info/start-countdown)) und er auf `0` sinkt, du aber keine **onCountdownEnd**-Funktion in deinem Programm hast, endet das Spiel automatisch.

## Parameter

* **handler**: der Code, der ausgeführt wird, wenn der Spieltimer `0` erreicht.

## Beispiel #example

### Nachricht bei Spielzeit null #ex1

Starte den Countdown mit `3` Sekunden. Zeige eine Nachricht an, wenn der Countdown `0` erreicht.

```blocks
info.startCountdown(3)
info.onCountdownEnd(function () {
    game.showLongText("Timer count is zero!", DialogLayout.Bottom)
})
```

### Keine Zeit mehr, Spiel vorbei #ex2

Setze die Spielzeit auf `5` Sekunden. Lass die Zeit ablaufen und beende das Spiel.

```blocks
info.startCountdown(5)
```

## Siehe auch #seealso

[Countdown starten](/reference/info/start-countdown),
[Countdown stoppen](/reference/info/stop-countdown)

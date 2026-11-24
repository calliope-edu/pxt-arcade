# set Deep Sleep Timeout

Lege die Dauer der Inaktivität **in Sekunden** fest, nach der das Gerät in den Tiefschlaf geht.

```sig
power.setDeepSleepTimeout(10)
```

Du kannst ein Timeout festlegen, nach dem das Gerät in den „Tiefschlaf“ geht, wenn gerade keine Aktivität stattfindet. Die Zeit wird als Anzahl von Sekunden angegeben.

## Parameter

* **seconds**: eine [Zahl](types/number) von Sekunden, die auf Systemaktivität gewartet wird, bevor das Gerät in den Tiefschlaf geht.

## Beispiel #example

Setze das Inaktivitäts-Timeout auf `30` Sekunden.

```blocks
power.setDeepSleepTimeout(30)
```

## Siehe auch

[check deep sleep](/reference/power/check-deep-sleep),
[poke](/reference/power/poke)

```package
power
```

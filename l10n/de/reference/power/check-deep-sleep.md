# check Deep Sleep

Prüfe, ob das Timeout für den „Tiefschlaf“ abgelaufen ist und das Gerät schlafen gelegt werden soll.

```sig
power.checkDeepSleep()
```

## Rückgabewert

* ein [Wahrheitswert](/types/boolean), der `true` ist, wenn das Schlaf-Timeout `0` ist, oder `false`, wenn noch Zeit übrig ist.

## Beispiel #example

Lege das Gerät schlafen, wenn das Schlaf-Timeout abgelaufen ist.

```blocks{
power.checkDeepSleep()
```

## Siehe auch

[set deep sleep timeout](/reference/power/set-deep-sleep-timeout),
[deep sleep](/reference/power/deep-sleep)

```package
power
```

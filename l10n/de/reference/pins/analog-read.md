# analog Read

Liest einen analogen Eingangswert von einem Pin.

```sig
pins.A0.analogRead()
```

Dein Board kann einen Zahlenwert für ein _Signal_ an einem analogen Pin lesen. Ein Signal ist eine bestimmte Spannung,
die von einer Schaltung auf deinem Board gemessen wird. Der Wert für dieses Signal entspricht nicht genau der
Spannung, sondern ist eine Zahl, die angibt, wie viel Signal vorhanden ist. Die Zahl, die du für das Signal liest,
liegt zwischen `0` und `1023`. `0` bedeutet kein Signal und `1023` volles Signal.

## Rückgabewert

* eine [Zahl](types/number) zwischen `0` und `1023`, die die Signalstärke am Pin angibt.

## Beispiel #example

Lies den Wert von Pin `A2` und schreibe ihn in die Konsole.

```blocks
forever(function() {
    let signal = pins.A2.analogRead()
    console.log("signal", signal)
    pause(1000)
})
```

## Siehe auch #seealso

[analog write](/reference/pins/analog-write)

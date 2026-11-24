# panic

Zeige eine Fehlernummer an und stoppe das Programm.

```sig
control.panic(0)
```

Wenn dein Board eine Möglichkeit hat, Fehlerinformationen anzuzeigen, nutzt ``||panic||``
sie, um Fehlernummern anzuzeigen.

Dein Programm stoppt, wenn du ``||panic||`` verwendest. Verwende das, wenn du denkst, dass etwas so Schlimmes
passiert ist, dass dein Programm nicht mehr richtig laufen kann.

## Parameter

* **code**: eine Fehler-[Zahl](/types/number), die du einer Fehlersituation in deinem Programm zuordnest.

## Beispiel #example

Sende einen selbst erstellten Fehler „Code Rot“ an die Fehleranzeige, wenn der Eingang an Pin `A0`
kleiner als `10` ist.

```blocks
let codeRed = 1
let codeBlue = 2

if (pins.A0.analogRead() < 10) {
    control.panic(codeRed)
}
```

## Siehe auch #seealso

[assert](/reference/control/assert)

[Fehlercodes](/device/error-codes)

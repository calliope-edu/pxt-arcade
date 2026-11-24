# redirect

Leite serielle Daten über die Pins statt über die USB-Verbindung um.

```sig
serial.redirect(pins.A0, pins.A0, BaudRate.BaudRate115200)
```

Standardmäßig werden serielle Daten über eine USB-Verbindung zu deinem Board gesendet und empfangen. Wenn du stattdessen über die Pins senden und empfangen möchtest, kannst du die Verbindung auf sie umleiten. Du wählst, welche zwei Pins für die Sende- und Empfangsleitung verwendet werden. Außerdem legst du die Datenrate (Baudrate) für die umgeleitete Verbindung fest.

## ~ hint

Die Datenrate der seriellen Verbindung wird als Anzahl der Datensignale angegeben, die die Verbindung pro Sekunde überträgt. Meist ist das die Anzahl der pro Sekunde gesendeten Daten-_Bits_. Bei einfachen 8-Bit-Daten wie Textzeichen bedeutet eine Datenrate von `9600`, dass pro Sekunde 1200 Zeichen gesendet oder empfangen werden können. Manchmal werden ein oder zwei zusätzliche Datensignale benötigt, um die 8 Bits eines Zeichens zu übertragen, sodass weniger Zeichen pro Sekunde gesendet werden. Die eigentliche Datenrate ändert sich dadurch nicht, aber die Bits pro Sekunde (bps), die dein Programm sieht, verringern sich etwas. Historisch wird die serielle Datenrate als _Baudrate_ der Verbindung bezeichnet.

## ~

## Parameter

* **tx**: der Pin zum Senden serieller Daten. Das ist einer der digitalen Pins auf dem Board.
* **rx**: der Pin zum Empfangen serieller Daten. Das ist einer der digitalen Pins auf dem Board.
* **rate**: die Datenrate (Baudrate), mit der Daten gesendet und empfangen werden. Dieser Wert wird aus der Liste im Block gewählt und ist einer der Werte der Aufzählung ``BaudRate``.

## Beispiel #example

Lege die Größen des Sende- und Empfangspuffers fest. Leite die serielle Verbindung auf die Pins **A0** und **A1** um.

```blocks
serial.setTxBufferSize(64)
serial.setRxBufferSize(64)
serial.redirect(pins.A0, pins.A1, BaudRate.BaudRate115200)
```

## Siehe auch #seealso

[mit Konsole verbinden](/reference/serial/attach-to-console),
[setze Baudrate](/reference/serial/set-baud-rate)

```package
serial
```

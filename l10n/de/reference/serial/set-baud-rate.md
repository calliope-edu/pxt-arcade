# set Baud Rate

Lege die Baudrate für das Senden und Empfangen serieller Daten fest.

```sig
serial.setBaudRate(BaudRate.BaudRate115200)
```

Die _Baudrate_, also die serielle Datenrate, wird auf dieselbe Rate eingestellt wie beim Gerät, mit dem dein Board verbunden ist. So weiß jede Seite der Verbindung, wann sie jedes gesendete Datenbit lesen muss und wann eine vollständige Gruppe von Bits (meist 8 Bits) empfangen wurde.

## ~ hint

Die Datenrate der seriellen Verbindung wird als Anzahl der Datensignale angegeben, die die Verbindung pro Sekunde überträgt. Meist ist das die Anzahl der pro Sekunde gesendeten Daten-_Bits_. Bei einfachen 8-Bit-Daten wie Textzeichen bedeutet eine Datenrate von `9600`, dass pro Sekunde 1200 Zeichen gesendet oder empfangen werden können. Manchmal werden ein oder zwei zusätzliche Datensignale benötigt, um die 8 Bits eines Zeichens zu übertragen, sodass weniger Zeichen pro Sekunde gesendet werden. Die eigentliche Datenrate ändert sich dadurch nicht, aber die Bits pro Sekunde (bps), die dein Programm sieht, verringern sich etwas. Historisch wird die serielle Datenrate als _Baudrate_ der Verbindung bezeichnet.

## ~

## Parameter

* **rate**: die Datenrate (Baudrate), mit der Daten gesendet und empfangen werden. Dieser Wert wird aus der Liste im Block gewählt und ist einer der Werte der Aufzählung ``BaudRate``.

## Beispiel #example

Setze die serielle Baudrate auf `19200`.

```blocks
serial.setBaudRate(BaudRate.BaudRate19200)
```

## Siehe auch #seealso

[umleiten](/reference/serial/redirect)

```package
serial
```

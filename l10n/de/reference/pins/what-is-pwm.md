# Was ist PWM?

Um Befehle für Servos zu erzeugen, analoge Ausgangsspannungen zu erzeugen und andere Steuersignale zu senden, verwendet
dein Board ein Verfahren namens _Pulsweitenmodulation (PWM)_. Das ist eine schicke Bezeichnung dafür,
Pulssignale zu erzeugen, die unterschiedlich lange dauern. Die Zeit, die der Puls
eingeschaltet ist, nennt man seine _Breite_. Das Wort _Modulation_ bedeutet einfach, dass wir
Informationen senden, indem wir etwas an unserem Signal verändern. In diesem Fall ist die Information die Breite
(die Zeitdauer) unseres Pulses.

### Periode

Bei _PWM_ wird regelmäßig ein Pulssignal gesendet, viele Male pro Sekunde. Wie oft pro Sekunde ein Puls gesendet wird,
bestimmt seine _Periode_. Wenn ein _PWM_-Signal 50-mal pro Sekunde gesendet wird, dann ist seine Periode
1/50 Sekunde, also 20 Millisekunden.

### Modulation

Um Informationen aus unserem _PWM_-Signal zu bekommen, können wir aus einem Puls eine Zahl machen. Die Zahl ergibt sich
daraus, wie lange der Puls gedauert hat (seine _Breite_), im Verhältnis
zur Länge der Periode. Das ist ein bestimmter Prozentsatz der Periode. Wenn deine Periode
20 Millisekunden beträgt und die Pulsbreite 2 Millisekunden, dann bedeutet das Pulssignal 10 Prozent.

### Servos

Damit Servos funktionieren, musst du ihnen immer wieder ein Signal senden. Wie oft ein
Servo dieses Signal bekommt, nennt man seine Periode. Übliche Servos haben eine Signalperiode von
20 Millisekunden. Das heißt, sie bekommen alle 20 Millisekunden einen neuen Befehl, also 50-mal
pro Sekunde. Du denkst vielleicht, dass sie ganz schön beschäftigt sind, aber sie schaffen das. Wahrscheinlich musst du
``||pins:analog set period||`` nicht verwenden, bevor du an deine Servos schreibst. Servos nutzen nicht die ganze
Periode, um zu bestimmen, wie weit sich die Achse drehen soll. Diese Information bekommen sie meist aus einem Puls,
der zwischen 5 und 10 Prozent der Signalperiode lang ist.

### Analoges Schreiben

Du weißt, dass du beim Schreiben eines Werts an einen analogen Pin eine Zahl zwischen 0 und 1023 verwendest. Dadurch
entsteht am Pin eine unterschiedliche Spannung. Manche Boards haben einen geheimen Trick, um
es so aussehen zu lassen, als ob sich die Spannung ändert, wenn du mit ``||pins:analog write||`` einen anderen Wert schreibst.
Der analoge Pin kann eigentlich nur zwei Spannungen erzeugen: niedrig (0 Volt) und hoch (3,3 Volt oder 5 Volt).
Um viele Spannungen zu erzeugen, wird ein Puls gesendet, der nur einen Teil der
Signalperiode dauert. Wenn dein Board 3,3 Volt am Pin ausgeben kann, kann es so tun, als würde es die halbe
Spannung (1,65 Volt) erzeugen, wenn du mit ``||pins:analog write||`` den Wert `511` schreibst. Wie? Dafür
sendet es einen Puls, der nur die Hälfte der Periode dauert. Wenn die Periode kurz genug ist,
also viele Male pro Sekunde, erkennen andere Schaltungen, dass der Pin 1,65 Volt liefert. Raffiniert, oder?

## Siehe auch

[servo set pulse](/reference/pins/servo-set-pulse),
[servo write](/reference/pins/servo-write)
[analog set period](/reference/pins/analog-set-period)

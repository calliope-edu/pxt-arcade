# Berührungssensoren

Manche Boards haben Pins oder Flächen, die wie Knöpfe funktionieren, wenn du sie berührst. Wenn du einen
dieser Pins berührst, veränderst du in diesem Moment, was elektrisch am Pin passiert. Der Mikroprozessor,
der mit dem Pin verbunden ist, kann diese Änderung erkennen und sie als Knopfaktion melden.

Genau wie bei echten Knöpfen werden alle Aktionen erkannt: Herunterdrücken, Finger wegnehmen, den Finger
lange gedrückt halten und mehrmals schnell hintereinander drücken.

## Resistive Berührung

Eine Möglichkeit, Berührung zu erkennen, ist die Änderung des elektrischen Widerstands eines Materials, wenn es
berührt wird. Dafür wird ein spezielles Material verwendet, das mehr oder weniger Strom durchlässt, wenn sich der Druck
(zum Beispiel dein Finger, der darauf drückt) auf seiner Oberfläche ändert. Der Mikroprozessor ist mit diesem resistiven
Material verbunden und merkt, wenn mehr oder weniger Strom hindurchfließt. So weiß er, dass du es berührt
oder deinen Finger weggenommen hast. Resistives Berührungsmaterial funktioniert auch mit anderen Dingen, nicht nur mit deinem Finger: einem Stift,
einem Bleistift oder etwas mit einer Spitze. Wenn es eine große Fläche aus resistivem Material gibt, wie bei einem
Computerbildschirm mit Touch-Oberfläche, kann das Material sehr genau erkennen, wo du es
auf seiner Oberfläche berührt hast.

## Kapazitive Berührung

Eine sehr verbreitete Methode, Berührung zu erkennen, sind kapazitive Berührungssensoren. Kapazitiv bedeutet, dass _Kapazität_ genutzt wird, also das Speichern einer wirklich, wirklich kleinen Anzahl von Elektronen auf der Oberfläche eines Materials. Wenn du den
Sensor berührst, wird dein Körper Teil der Speicherfläche für die Elektronen auf dem Sensor. Bei einem geerdeten
Sensor wird die Anzahl der Elektronen, seine _Ladung_, kleiner, wenn du ihn berührst. Bei einem nicht geerdeten
Sensor steigt die Ladung, wenn du ihn berührst. In beiden Fällen kann eine Messschaltung eine Berührung an der Änderung
dieser Ladung erkennen.

Tatsächlich kann ein Sensor einfach ein Pin oder eine kleine Metallfläche auf einer Platine sein. Wahrscheinlich genau wie die Pins auf deinem Board. Der Mikroprozessor hat eine spezielle Schaltung, die eine Änderung der Ladung an einem Pin erkennt, und weiß so, wann
du ihn berührt hast. Das Schöne an den kapazitiven Berührungspins auf deinem Board ist, dass du sie einfach
wie Knöpfe verwenden kannst.

## ~hint
### Berührungspins und Masse (GND)

Die kapazitiven Berührungspins auf deinem Board funktionieren von selbst als Berührungssensoren, **OHNE** Verbindung zu **GND**.
Du kannst sogar Drähte daran anschließen, um mit anderem leitfähigen Material einen größeren Sensor zu bauen.
## ~

## Siehe auch #seealso

[wenn Ereignis](/reference/input/button/on-event)
[ist gedrückt](/reference/input/button/is-pressed),
[wenn Ereignis](/reference/input/button/on-event)

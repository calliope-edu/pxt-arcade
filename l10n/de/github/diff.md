# Diffs

Beim Vergleich von zwei Dokumenten ist ein **diff** eine visuelle Darstellung der Änderungen. Wenn der Dokumentinhalt Text ist, wird in der Regel ein Diff angezeigt, indem zwei Zeilen Text nebeneinander angezeigt werden, mit einem Hinweis darauf, wie sich die Wörter und Symbole in ihnen von einer Zeile zur anderen verändert haben.

## Blöcke

Beim Ändern von Blockcode wird MakeCode die Blöcke in 3 Kategorien einteilen:

* **hinzugefügt, geändert oder verschoben**: Blöcke, die sich in irgendeiner Weise geändert haben. Es kann sein, dass sich ein Feldwert geändert hat oder der Block verschoben oder hinzugefügt wurde. Sie werden als reguläre Blöcke angezeigt.
* **gelöscht**: sind Blöcke, die aus dem Code-Canvas entfernt wurden.
* **nicht geändert**: die Blöcke, die genau die gleichen wie zuvor sind. Diese sind grau dargestellt. Wenn ein Ereignis auf oberster Ebene überhaupt nicht geändert wurde, wird MakeCode es nicht rendern um die Anzahl der Blöcke im Diff zu "komprimieren".

## Text

MakeCode verwendet eine traditionelle **Inline-Diff** Ansicht, wo gelöschte oder geänderte Zeilen mit einem '**-**'-Symbol und rot angezeigt werden. Geänderte oder hinzugefügte Zeilen werden mit einem '**+**' Symbol und grün angezeigt.
# return

Gib einen Ergebniswert aus einer Funktion an das Programm zurück.

```sig
function doSomething(){
    return 0
}
doSomething()
```

Wenn du in deinem Programm eine Funktion erstellt hast, kann sie in anderen Teilen deines Programms als Block verwendet werden. Wenn deine Funktion ein Ergebnis erzeugen soll, das dein
Programm verwenden kann, kannst du einen Wert aus der Funktion _zurückgeben_. Das geschieht mit einer **return**-Anweisung in der Funktion.

Du kannst eine Variable auf den Rückgabewert einer Funktion setzen oder ihn in einem
Ausdruck verwenden, zum Beispiel:

```blocks
let result = 0
function oneToTen() {
    return Math.randomRange(0, 10)
}

if (oneToTen() > 5) {
    result = oneToTen()
}
```

Die return-Anweisung steht normalerweise am Ende der Funktion. Du kannst eine
return-Anweisung aber überall in der Funktion platzieren. Die Ausführung des Codes in der
Funktion endet, sobald sie eine return-Anweisung erreicht. Es gilt als guter
Programmierstil, wenn du die return-Anweisung so anordnen kannst, dass sie am
Ende der Funktion steht.

## Beispiel #example

Eine Funktion berechnet das Volumen eines Würfels. Der Ergebniswert wird an das
Programm zurückgegeben.

```blocks
let side = 0;
let volume = 0;
function cubeit() {
    return side * side * side;
}

side = 15;
volume = cubeit();
side = 21;
volume = cubeit();
```

Im Beispiel wird die Funktion **cubeit** zweimal aufgerufen, um das Volumen von Würfeln mit unterschiedlichen Größen zu berechnen. Der Code der Funktion bleibt an einer Stelle. Er muss nicht an jede Stelle im Programm kopiert werden, an der du ein Würfelvolumen berechnen willst. Das ist wirklich praktisch! Dein Code ist wiederverwendbar.

## Siehe auch #seealso
 
[Aufruf](/types/function/call),
[Definition](/types/function/define)


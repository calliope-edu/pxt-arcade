# Funktionsaufruf

Verwende eine Funktion irgendwo in einem Programm über ihren Namen.

```sig
function doSomething(){}
doSomething();
```

Wenn du in deinem Programm eine Funktion erstellt hast, kann sie in anderen Teilen deines Programms als Block verwendet werden. Um
deine Funktion zu verwenden, machst du einen _Funktionsaufruf_. Das ist so, als würdest du einen Freund um Hilfe rufen. Die Funktion enthält
Code, der etwas tut, um deinem anderen Code zu helfen. Du _rufst_ also deine Funktion um Hilfe, damit
jetzt etwas erledigt wird. So zum Beispiel:

```blocks
let side = 0;
let volume = 0;
function cubeit() {
    volume = side * side * side;
}

side = 15;
cubeit();
side = 21;
cubeit();
```

Im Beispiel wird die Funktion **cubeit** zweimal aufgerufen, um das Volumen von Würfeln mit unterschiedlichen Größen zu berechnen. Der Code der Funktion bleibt an einer Stelle. Er muss nicht an jede Stelle im Programm kopiert werden, an der du ein Würfelvolumen berechnen willst. Das ist wirklich praktisch! Dein Code ist wiederverwendbar.

## Siehe auch #seealso
 
[Definition](/types/function/define),
[return](/types/function/return)


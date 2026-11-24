# Block Sprache

### @description Sprachkonstrukte für den Blockeditor.

## #blocksbase

Blöcke rasten ineinander ein, um das Programm zu definieren, das dein @boardname@ ausführen wird. Blöcke können Ereignisse sein (Tasten drücken, Schütteln, ...) oder müssen in ein Ereignis eingebettet werden, um ausgeführt zu werden. Das [beim Start](/blocks/on-start) Ereignis wird zuerst ausgeführt.

## Blöcke

```namespaces
for (let i = 0;i<5;++i) {}
if (true){}
let x = 0;
```

## Integrierte Objekte #builtins

```namespaces
Math.randomRange(0,5);
"".compare("");
[0].push(0);
```

## Siehe auch

[Logik](/blocks/logic), [Schleifen](/blocks/loops), [Variablen](/blocks/variables), [Mathematik](/reference/math), [Text](/reference/text), [Arrays](/reference/arrays)

[beim Start](/blocks/on-start), [JavasScript Blöcke](/blocks/javascript-blocks), [Benutzerdefinierte Blöcke](/blocks/custom)
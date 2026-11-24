# write Buffer

Schreibe einen Puffer an die serielle Schnittstelle.

```sig
serial.writeBuffer(pins.createBuffer(0));
```
Mit ``||serial:write buffer||`` werden die Informationen in einem Puffer über die serielle Schnittstelle gesendet. Das verwendest du,
wenn du Informationen senden willst, die komplexer sind als einfacher Text oder eine Zahl.

## Parameter

* **buffer**: der Puffer, der an die serielle Schnittstelle geschrieben wird

## Beispiel #example

Setze einige besondere Datenwerte in einem Puffer und sende den Puffer über die serielle Verbindung.

```blocks
let sdv = pins.createBuffer(4)
sdv.setNumber(NumberFormat.Int8LE, 0, 53)
sdv.setNumber(NumberFormat.Int8LE, 1, 141)
sdv.setNumber(NumberFormat.Int8LE, 2, 9)
sdv.setNumber(NumberFormat.Int8LE, 3, 87)
serial.writeBuffer(sdv);
```

## Siehe auch #seealso

[schreibe Zeile](/reference/serial/write-line),
[schreibe Zahl](/reference/serial/write-number)

```package
serial
```

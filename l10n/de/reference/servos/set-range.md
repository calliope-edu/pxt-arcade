# Bereich setzen

Lege den minimalen und maximalen Drehwinkel für ein Servo fest.

```sig
servos.P0.setRange(0, 180)
```

Wenn du den Drehbereich eines Servos begrenzen willst, kannst du seinen minimalen und maximalen Drehwinkel festlegen. Der minimale Winkel wird in Grad von `0` bis `90` angegeben. Der maximale Drehwinkel wird in Grad von `90` bis `180` angegeben.

## Parameter

* **minAngle**: eine [Zahl](types/number) von Grad, die als minimaler Drehwinkel gesetzt wird, `0` - `90` Grad,
* **maxAngle**: eine [Zahl](types/number) von Grad, die als maximaler Drehwinkel gesetzt wird, `90` - `180` Grad,

## Beispiel

Schließe ein Servo an Pin `P0` an. Versuche, das Servo über seinen Winkelbereich hinaus zu drehen.

```blocks
servos.P0.setRange(30, 150)
for (let i = 0; i < 5; i++) {
    servos.P0.setAngle(180)
    basic.pause(500)
    servos.P0.setAngle(0)
    basic.pause(500)
}
```

## Siehe auch

[Winkel setzen](/reference/servos/set-angle)

[Kurzanleitung zu Servos](https://www.kitronik.co.uk/pdf/a-brief-guide-to-servos.pdf)

```package
servo
```

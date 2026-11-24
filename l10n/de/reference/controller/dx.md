# dx

Gibt an, wie stark die horizontale Bewegung ist, wenn die Taste links oder rechts gedrückt wird.

```sig
controller.dx(0)
```

Wenn du die Position eines Sprites mit Tastendrücken steuerst, kannst du festlegen, wie stark sich die Position ändert, wenn eine Taste gedrückt wird. Das geschieht mit _Schritten_. Solange eine Richtungstaste gedrückt ist, hängt der zurückgegebene Bewegungswert davon ab, ob und wie lange die Taste gedrückt ist, sowie von der angegebenen Schrittgröße. Für eine schnelle Bewegung verwendest du eine größere Schrittgröße.

Wenn die Taste ``links`` gedrückt wird, ist der Bewegungswert negativ. Wenn die Taste ``rechts`` gedrückt wird, ist der Bewegungswert positiv. Du kannst diese Werte verwenden, um die Position eines Sprites zu aktualisieren. Der Schrittwert ist normalerweise eine positive Zahl. Wenn du die Richtungen der Tasten umkehren willst, kannst du einen negativen Schrittwert verwenden.

## Parameter

* **step**: die horizontale Bewegung, die einer Tastenrichtung jedes Mal zugewiesen wird, wenn ein Tastendruck erkannt wird.

## Rückgabewert

* eine [Zahl](/types/number), die die Bewegung nach links oder rechts für eine gedrückte Taste angibt.

## Beispiel #example

### Ein Spieler

Bewege das Objekt ``cosmo`` mit dem Richtungs-Controller über den Bildschirm.

```blocks
const cosmo = sprites.create(img`
....aaaaa
...aaaaaaa
aaaaaaaaaaaaa
...aaaaaaa
....aaaaa
.....a.a
....a...a
`)
game.onUpdate(function () {
    cosmo.x += controller.dx(100)
    cosmo.y += controller.dy(80)
})
```

### Mehrspieler

Bewege das Objekt ``cosmo`` mit dem Richtungs-Controller über den Bildschirm.

```blocks
const cosmo = sprites.create(img`
....aaaaa
...aaaaaaa
aaaaaaaaaaaaa
...aaaaaaa
....aaaaa
.....a.a
....a...a
`)
game.onUpdate(function () {
    cosmo.x += controller.player2.dx(100)
    cosmo.y += controller.player2.dy(80)
})
```

## Siehe auch #seealso

[dy](/reference/controller/dy),
[Sprite steuern](/reference/controller/control-sprite)
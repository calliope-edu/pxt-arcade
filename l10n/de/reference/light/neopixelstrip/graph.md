# graph

Stellt eine Zahl mit den Pixeln des Pixelstreifens als Diagramm dar.

```sig
light.createStrip().graph(0, 0);
```
Der Block ``||graph||`` verwandelt deine Pixel in ein leuchtendes Diagramm, das Zahlenwerte anzeigt. Die Gesamtzahl der Pixel im
Streifen bildet den Bereich des Diagramms. Wenn dein Streifen 20 Pixel hat und du einen
Wert zwischen `0` und `100` anzeigen möchtest, entspricht jedes leuchtende Pixel `5`. Mit diesem Bereich wird der Wert
`45` also als 10 Pixel auf dem Streifen angezeigt.

Für jeden Wert legst du mit **high** das obere Ende des Bereichs fest, und die Pixel leuchten bis zu dem Punkt, der angibt, wie
groß der Anteil von **value** an **high** ist.

Wenn du `0` für **high** verwendest, wird das Diagramm _automatisch skaliert_. Das heißt, die größte Zahl, die du
in **value** verwendest, legt das obere Ende des Bereichs fest. So kannst du das Diagramm oft verwenden, zum Beispiel in einer Schleife, um
viele Zahlen anzuzeigen, bei denen du nicht weißt, welche die größte sein wird. Die automatische Skalierung setzt sich jedoch auf den
aktuellen Wert zurück, wenn du ``||graph||`` in den letzten 10 Sekunden nicht verwendet hast.

## Parameter

* **value**: eine [Zahl](/types/number), die der Wert ist, der im Diagramm angezeigt wird.
* **high**: eine [Zahl](/types/number), die die oberste Zahl der Diagrammskala ist. Ein Wert von
`0` lässt das Diagramm automatisch skalieren.

#### ~hint
Der Block ``||graph||`` schreibt die Zahl aus **value** außerdem an die serielle Schnittstelle, damit du
Werte aufzeichnen kannst.
#### ~

## Beispiele #exsection

### Diagramm mit zehn Werten #ex1

Stelle 10 Werte zwischen 0 und 100 auf den Pixeln dar.

```blocks
let strip = light.createStrip()
for (let i = 0; i <= 10; i++) {
    strip.graph(i * 10, 100)
    pause(500)
}
```
### Diagramm mit automatischem Bereich #ex2

Stelle den Wert `1000` dar. Stelle weitere Werte dar, lass sie aber bei der Anzeige automatisch skalieren.

```blocks
let strip = light.createStrip()
strip.graph(1000, 0)
forever(() => {
    strip.graph(Math.randomRange(0, 1000), 0)
    pause(500)
})
```
## Siehe auch

[``||range||``](/reference/light/neopixelstrip/range)

```package
light
```



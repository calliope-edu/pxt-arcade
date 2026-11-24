# Pi Monte Carlo

Approximate the value of **Pi** by comparing the area of a circle and square.

## Here's the idea...

Ok, lasst uns so tun, als ob ein Kreis in ein Quadrat passt, an dem der Rand des Kreises die Seiten des Quadrats berührt. Wenn wir sagen, dass der Radius, genannt `r`, des Kreises `1` ist, dann ist die Länge jeder Seite des Quadrats `2`, oder `2 * r`. Die Fläche des Kreises ist `pi * (r ** 2)` und der Bereich des Quadrats ist dann `(r * 2) ** 2`. Da wir wissen nicht, wie groß `pi` ist, stellen wir eine Beziehung zwischen der Fläche des Kreises und der Fläche des Quadrats her um den Wert von `pi` zu berechnen.

### Kreis und Quadrat

Eine interessante Beziehung zwischen dem Kreis und dem Quadrat ist, dass die Fläche des Kreises durch die Fläche des Quadrats geteilt ist:

`Flächenverhältnis = (pi * (r * * 2))/(r * 2) * * 2) = pi/4`

Nun, wir können sehen, dass wir, wenn wir die Fläche des Kreises und des Platzes kennen würden, herausfinden könnten, was der Wert von `pi` ist! Das ist einfach:

`pi = (Kreisfläche) / (Quadratfläche) * 4`

also...

    Flächenverhältnis = (Kreisfläche) / (Quadratfläche)
    pi = (Flächenverhältnis) * 4
    

Ein Problem gibt es jedoch. Wir kennen die Fläche des Platzes, sie ist `4`, aber wie groß ist der Bereich des Kreises?

Das ist das Dilemma! We need to know the area of the circle to find out what `pi` is and we need the value of `pi` to find the area of the circle!

### Punkte, viele Punkte

What if we had a lot of really small dots that we could fill into both the circle and the square. Wir werden versuchen, den Bereich beider Formen mit so vielen Punkten wie möglich abzudecken.

Wenn wir die Anzahl der Punkte zählen, die sowohl im Kreis als auch im Quadrat platziert sind, könnten wir das `Flächenverhältnis ` zwischen den beiden Formen finden. Und in der oben gezeigten Gleichung können wir `pi` entdecken, wenn wir dieses Verhältnis haben. Das `Flächenverhältnis` ist:

`Flächenverhältnis = (Punkte im Kreis) / ((Punkte im Kreis) + (Punkte nur im Quadrat))`

Of course, with infinitely small dots we can't completely fill the area of both shapes but we could get enough of them in there to give a useful ratio between the circle and the square.

### Erstellen und Zählen von Punkten

To make the "dots" we can randomly make a coordinate value and see if it would fit as a point within the shape we're trying to fill. Wenn er passt, erhöhe die Anzahl der Punkte und versuche für einige Zeit mehr Punkte zu machen. Je mehr Punkte erstellt wurden, desto besser ist die Genauigkeit unseres Wertes für das `Flächenverhältnis`.

### Monte Carlo simulation

This method of filling coordinate points, counting them, and using the difference or ratio of the counts is called the *Monte Carlo* simulation, or approximation.

## Monte Carlo approximation of Pi

To have our approximation of Pi seem like more like a game, we'll make it visual by drawing a circle inside a square and then filling in the shapes with dots.

A circle image is drawn, or *inscribed*, inside a square image using the circle equation. Two sprites for the shapes are created and the Monte Carlo simulation is started. Shortly after starting, the sprites slide apart so you can watch each shape fill with dots.

A sample run of `1000000` dots for each shape is made. The simulation radius for the circle is set at `5000`. Since this so much bigger than the what the screen can show, we have to use it as a virtual radius for the actual shapes on the screen. The screen shape uses a scaled size for the circle radius.

The amount of dots that fit in the circle is shown as the game score. Anytime, before the simulation ends, you can press the **B** button to see what the current Pi approximation value is.

You're notified that the simulation is complete in the [onLifeZero](/reference/info/on-life-zero) event. The last dot score is shown and the final approximation value is shown in a text dialog.

```blocks
namespace SpriteKind {
    export const Square = SpriteKind.create();
    export const Circle = SpriteKind.create();
}
let sqImage: Image = null
let cirImage: Image = null
let mCircle: Sprite = null
let mSquare: Sprite = null

let circleDots = 0
let squareDots = 0
let yy = 0
let xx = 0
let j = 0
let delay = 0
let simulate = false

// set the radius and side length for the shapes
const r = scene.screenHeight() / 4
const l = r * 2 + 1

// total dots (sample count)
const dots = 1000000
// virtual radius length
const r2 = 5000

// scale the actual radius from the virtual radius
const scale = (r + 1) / r2

sqImage = image.create(l, l)
sqImage.fill(0)
sqImage.drawRect(0, 0, l, l, 1)
cirImage = image.create(l, l)
cirImage.fill(0)

game.splash("Approximate Pi", "Monte Carlo Method")

mSquare = sprites.create(sqImage, SpriteKind.Square)
mSquare.setFlag(SpriteFlag.AutoDestroy, true)
drawCircle()
mCircle = sprites.create(cirImage, SpriteKind.Circle)

info.onLifeZero(function () {
    info.setScore(circleDots)
    game.showLongText("Pi: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
    mCircle.say("Bye..")
    mCircle.vx = 1000
    mSquare.say("..we have Pi")
    mSquare.ax = 50
})

sprites.onDestroyed(SpriteKind.Square, function (sprite: Sprite) {
    game.reset()
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Pi: " + 4 * circleDots / squareDots + " using " + circleDots + " dots", DialogLayout.Bottom)
})

function drawCircle() {
    // draw a circle outline using random dots!
    for (let i = 0; i < dots; i++) {
        xx = randint(0, 2 * r) - r
        yy = randint(0, 2 * r) - r
        // test if the point will draw the circle
        if ((xx * xx + yy * yy >= r ** 2) && (xx * xx + yy * yy < (r + 1) ** 2)) {
            cirImage.setPixel(xx + r, yy + r, 1)
        }
    }
}

game.onUpdateInterval(100, function () {
    if (delay > 10) { // start simulation
        simulate = true
    }
    if (delay > 20) { // slide shape apart
        if (mCircle.x < scene.screenWidth() - 3 * r / 2) {
            mSquare.x += -1
            mCircle.x += 1
        }
    }
    delay += 1
})

forever(function () {
    // A simple Monte Carlo simulation to approximate Pi
    //
    while (j < dots && simulate) {
        // generate a point within the square
        xx = randint(0, 2 * r2) - r2
        yy = randint(0, 2 * r2) - r2
        sqImage.setPixel(xx * scale + r, yy * scale + r, 7)
        squareDots += 1

        // test if the point is within the circle
        // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
        if (xx * xx + yy * yy <= r2 ** 2) {
            circleDots += 1
            // scale to screen coordinates
            xx = xx * scale;
            yy = yy * scale;
            // shift over the x or y == 0 position
            if (xx < 0) xx += 1
            if (yy < 0) yy += 1
            cirImage.setPixel(xx + r, yy + r, 2)
        }
        // after a little while just quickly finish the simulation
        if (squareDots < dots / 50 && squareDots % 100 == 0) {
            info.setScore(circleDots)
            pause(100)
        }
        j += 1
        if (j >= dots) {
            info.setScore(circleDots)
            info.setLife(0)
        }
    }
})
```
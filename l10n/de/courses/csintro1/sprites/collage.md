# Aktivität: Collage

[![Link zum Video](https://cdn.makecode.com/blob/a18f6464500ce85b271e777f55396adaf70c8ac7/static/thumbnail_play_video.png)](https://youtu.be/kKeuxhqnZ4U)

**Visual Design** ist ein wichtiger Bestandteil der Spieleentwicklung. Diese Aktivität baut Fähigkeiten auf, die erforderlich sind, um mehrere Sprites zu erstellen, die auf einem Spielbildschirm platziert werden, indem eine "Persönliche-Interessen-Collage" erstellt wird. Der Schüler erstellt Sprites mit benutzerdefinierten Variablennamen und ordnet die Sprites auf einem Spielbildschirm mithilfe von Sprite-Eigenschaften an, um die Koordinaten festzulegen.

In dieser Aktivität werden die Schüler eingeführt in:

* Entwerfen ihrer eigenen Bilder
* Verwenden von Variablen zum Erstellen mehrerer Sprites
* Verwenden von Koordinaten auf dem Bildschirm, um die Sprites in einer Szene zu arrangieren
* Hintergrundfarbe anpassen

## Beispiel #1: Sprite & Hintergrund

Dieses Spritebeispiel ist größer als der Standardwert 16x16 und verwendet einen benutzerdefinierten Variablennamen `||variables:hotSauce||`. Das Bild wird jedoch nicht ordnungsgemäß auf dem Bildschirm mit dem Standardhintergrund angezeigt, daher müssen wir die Hintergrundfarbe ändern, damit das Bild korrekt angezeigt wird.

[![Link zum Video](https://cdn.makecode.com/blob/a18f6464500ce85b271e777f55396adaf70c8ac7/static/thumbnail_play_video.png)](https://youtu.be/_0q2tEsrdbM)

```blocks
let hotSauce: Sprite = null
scene.setBackgroundColor(1)
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

## Beispiel #1: Sprite-Platzierung

[![Link zum Video](https://cdn.makecode.com/blob/a18f6464500ce85b271e777f55396adaf70c8ac7/static/thumbnail_play_video.png)](https://youtu.be/PsIZ_08eEYk)

In diesem Beispiel werden Sprite-Eigenschaften verwendet, um die `x` und `y` Koordinaten auf dem Spielbildschirm festzulegen.

### ~hint

If the sprites are not moving to where you expect them to when you set their coordinates, review the [Coordinate Walker Activity](/courses/csintro1/sprites/coordinate-walker) to see where the different `X` and `Y` values are located.

### ~

```blocks
let hotSauce: Sprite = null
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hotSauce.x = 20
hotSauce.y = 40
```

## Schüleraufgabe #1: Erstellen einer "Persönliche-Interessens-Collage"

[![Link zum Video](https://cdn.makecode.com/blob/a18f6464500ce85b271e777f55396adaf70c8ac7/static/thumbnail_play_video.png)](https://youtu.be/AV8YIkXE1N8)

Make a collage with different images scattered around the screen. It can be about a hobby, a favorite musician, sports, clothes - anything that helps tell a story that is about you.

1. Initialize 6 or more Sprites with custom variable names the correspond to the images 
2. Design sprites in the image editor to tell a story using custom images of varying sizes and styles
3. Use sprite properties to place images across all areas of the game screen
4. Publish your collage as a shared link or save as a PNG file
5. **Challenge:** create a large image by using multiple sprites and 'combining' them by carefully placing them next to each other (for example, sprites for head, body and legs that combine to represent a person)

## Was haben wir gelernt?

1. How could the use of multiple sprites in a single game enhance your ability to convey a story in your games?
2. What other blocks are available in the `||sprites:Sprites||` menu? List several blocks not used in collage and make a hypothesis of what one (or more) of these blocks does.
3. **Challenge:** switch to the JavaScript version of your collage, and take a look at the images you drew in the task above. What do periods (**.**) represent in the images?

### [Lehrermaterial](/courses/csintro1/about/teachers)
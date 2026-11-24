# set Buffered

Active ou désactive la mise en mémoire tampon des changements des pixels.

```sig
light.createStrip().setBuffered(false)
```
Quand tu actives la mise en mémoire tampon, les changements des pixels sont enregistrés et ne s'affichent pas tant qu'un **[show](/reference/light/neopixelstrip/show)** n'est pas utilisé dans le programme.

La mise en mémoire tampon reste active jusqu'à ce que tu la désactives avec **[setBuffered]()** et `false` pour le paramètre **on**.

## Paramètres

* **on** : une valeur [booléenne](/types/boolean) qui indique si la mise en mémoire tampon est activée (`true`) ou désactivée (`false`).
>`true` : la mise en mémoire tampon est activée. Les changements n'apparaissent pas tant que [show](reference/light/neopixelstrip/show) n'est pas utilisé.<br/>
`false` : la mise en mémoire tampon est désactivée. Les changements s'affichent automatiquement dès qu'ils se produisent.

## Exemple

Active la mise en mémoire tampon pour que les nouvelles couleurs s'affichent toutes en même temps.

```blocks
let strip = light.createStrip()
strip.setBuffered(true)
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(2, 0xff0000)
strip.setPixelColor(4, 0xffff00)
strip.show()
```
## Voir aussi

[show](/reference/light/neopixelstrip/show)

```package
light
```



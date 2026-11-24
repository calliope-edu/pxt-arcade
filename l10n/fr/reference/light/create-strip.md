# créer une bande

Crée un contrôleur pour une bande de LED programmable.

```sig
light.createStrip();
```
Quand tu branches une bande de pixels sur ton @boardname@, tu dois donner à ton programme un moyen
de l'utiliser. Tu indiques à ton programme qu'il y a une bande de pixels que tu veux utiliser avec
``||create strip||``.

Pour utiliser ``||create strip||``, tu dois savoir à quelle broche la bande est reliée et
combien de pixels (LED) se trouvent sur la bande. De plus, certaines bandes de pixels ont différents types de LED.
Si tu connais le type exact, tu peux le régler dans le mode des pixels.

## Paramètres

* **pin** : [DigitalInOutPin](/reference/pins), la broche à laquelle la bande neopixel est reliée.
* **numleds** : le [nombre](/types/number) de LED de la bande, par exemple : 10, 30, 60 ou 64.

## Retourne

* un nouveau contrôleur **NeoPixelStrip** pour les neopixels d'une bande reliée à la carte.

## Exemple

Branche une bande de pixels sur la broche `A1`. Allume tous les pixels en `vert`.

```typescript
const strip = light.createStrip(pins.A1, 10);
strip.setAll(0x00ff00)
```

## Voir aussi

[``||range||``](/reference/light/neopixelstrip/range), [``||set mode||``](/reference/light/neopixelstrip/set-mode)

```package
light
```

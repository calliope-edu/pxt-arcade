# créer une bande APA102

Crée un contrôleur pour une bande de LED adressables APA102.

```sig
light.createAPA102Strip();
```

Quand tu branches une bande de pixels APA102 sur ton @boardname@, tu dois donner à ton programme un moyen
de l'utiliser. Tu indiques à ton programme qu'il y a une bande de pixels que tu veux utiliser avec
``||create apa102 strip||``.

Pour utiliser ``||create apa102 strip||``, tu dois savoir à quelles broches la bande est reliée pour les signaux de données et d'horloge, et
combien de pixels (LED) se trouvent sur la bande. De plus, certaines bandes de pixels ont différents types de LED.
Si tu connais le type exact, tu peux le régler dans le mode des pixels.

## Paramètres

* **dataPin** : [DigitalInOutPin](/reference/pins), la broche à laquelle la bande neopixel est reliée pour les données.
* **clkPin** : [DigitalInOutPin](/reference/pins), la broche à laquelle la bande neopixel est reliée pour le signal d'horloge.
* **numleds** : le [nombre](/types/number) de LED de la bande, par exemple : 10, 30, 60 ou 64.

## Retourne

* un nouveau contrôleur **NeoPixelStrip** pour les neopixels d'une bande APA102 reliée à la carte.

## Exemple

Branche une bande de pixels APA102 sur les broches `A1` et `A2`. Allume tous les pixels en `vert`.

```typescript
const strip = light.createStrip(pins.A1, pins.A2, 40);
strip.setAll(0x00ff00)
```

## Voir aussi

[plage](/reference/light/neopixelstrip/range), [définir le mode](/reference/light/neopixelstrip/set-mode)

```package
light
```

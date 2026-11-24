# bande intégrée

Obtiens un contrôleur pour la bande de LED programmables intégrée.

```sig
light.onboardStrip();
```

La bande de LED intégrée est une bande qui existe sur la carte. Elle est aussi généralement définie comme [bande par défaut](/reference/light/neopixelstrip/default-strip).

## Retourne

* un nouveau contrôleur **NeoPixelStrip** pour la bande NeoPixel intégrée.

## Exemple

Obtiens la bande de pixels intégrée de la carte. Allume tous les pixels en `vert`.

```typescript
const strip = light.onboardStrip( );
strip.setAll(0x00ff00)
```

## Voir aussi

[bande par défaut](/reference/light/neopixelstrip/default-strip),
[plage](/reference/light/neopixelstrip/range),
[définir le mode](/reference/light/neopixelstrip/set-mode)

```package
light
```

# bande par défaut

Obtiens un contrôleur pour la bande de LED programmable par défaut.

```sig
light.defaultStrip();
```

La bande de LED par défaut est soit une bande intégrée à la carte, soit une bande reliée à la carte et définie comme bande par défaut.

## Retourne

* un nouveau contrôleur **NeoPixelStrip** pour la bande neopixel par défaut reliée à la carte ou présente sur celle-ci.

## Exemple

Obtiens la bande de pixels par défaut de la carte. Allume tous les pixels en `vert`.

```typescript
const strip = light.defaultStrip( );
strip.setAll(0x00ff00)
```

## Voir aussi

[bande intégrée](/reference/light/neopixelstrip/onboard-strip),
[plage](/reference/light/neopixelstrip/range),
[définir le mode](/reference/light/neopixelstrip/set-mode)

```package
light
```

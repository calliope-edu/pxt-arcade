# move

Fait sembler que les pixels se déplacent le long de la bande.

```sig
light.createStrip().move(LightMove.Rotate, 1)
```

Un pixel de la bande semble se déplacer quand le pixel suivant prend
la même couleur et la même luminosité. Si cela se produit pour chaque pixel de la bande,
on dirait que tous les pixels de la bande se déplacent.

Tu peux faire avancer les pixels jusqu'à ce qu'ils sortent au bout de la bande, c'est un
`shift` (décalage). Ou tu peux faire tourner les pixels autour de la bande avec `rotate`. Les
pixels se déplacent du nombre de positions que tu veux.

## Paramètres

* **kind** : comment les pixels doivent se déplacer, soit `shift`, soit `rotate`
* **offset** : le [nombre](/types/number) de positions dont les pixels se déplacent

## Exemple

Fais tourner deux pixels bleus autour de la bande, une position à la fois.

```blocks
let strip = light.createStrip()
strip.setPixelColor(0, 0x0000ff)
strip.setPixelColor(1, 0x0000ff)
forever(() => {
    strip.move(LightMove.Rotate, 1)
    pause(500)
})
```

```package
light
```



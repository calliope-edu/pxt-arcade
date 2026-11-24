# set Accelerometer Range

Définis comment la @boardname@ va mesurer la force g ou
l'[accélération](/reference/input/acceleration) (à quel point la @boardname@
accélère ou ralentit). Ce bloc sert à définir la force g
la plus grande que tu veux mesurer.

```sig
input.setAccelerometerRange(AcceleratorRange.OneG);
```

## Paramètres

* ``range`` la plus grande force g (accélération) que tu vas mesurer : `1g`, `2g`, `4g` ou `8g`.
Toutes les valeurs plus grandes mesurées par ta @boardname@ sont ignorées. Ton programme ne recevra donc
ni événements ni mesures quand une force g plus grande se produit.

## Exemple #example

Définis la force g la plus grande que ta @boardname@
mesurera à 4 g. Ensuite, écris sur le **port série** l'accélération mesurée quand tu bouges la carte d'un côté à l'autre.

```blocks
input.setAccelerometerRange(AcceleratorRange.FourG)
forever(() => {
    serial.writeNumber(input.acceleration(Dimension.X))
})
```

### ~hint
**Simulateur**

Ce programme ne fonctionne que sur la @boardname@. Tu dois d'abord le télécharger avant de l'essayer.
### ~

## Voir aussi #seealso

[accélération](/reference/input/acceleration)

```package
accelerometer
```

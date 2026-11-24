# Calliope mini

Broches du Calliope mini 3 (nRF52833) dans MakeCode Arcade, dans les blocs sous « Broches ».

| Broche | nRF52833 | Fonction |
|---|---|---|
| P0, P1, P2 (`pins.PAD0` … `pins.PAD2`) | P0.02, P0.03, P0.04 | analogique, PWM, tactile |
| P3 (`pins.PAD3`) | P1.03 | numérique, PWM, tactile |
| C4 | P0.28 | analogique, PWM (matrice LED colonne 1) |
| C5 | P0.14 | bouton A |
| C6 | P1.05 | numérique, PWM (matrice LED colonne 4) |
| C7 | P0.11 | numérique, PWM (matrice LED colonne 2) |
| C10 | P0.30 | analogique, PWM (matrice LED colonne 5) |
| C11 | P0.23 | bouton B |
| C16 | P0.29 | analogique, PWM (Grove A1 RX) |
| C18 | P0.31 | analogique, PWM (matrice LED colonne 3) |

C8, C9, C12 à C15, C17, C19 et C20 sont utilisées par le GameKit pour l'écran, les boutons et Jacdac ; elles ne sont donc pas disponibles.

En JavaScript, P0 à P3 s'appellent `pins.PAD0` à `pins.PAD3` (comme dans le brochage du Calliope), dans les blocs « P0 » à « P3 ». Si tu écris `pins.P0`, l'extension micro:bit « edge-connector » est ajoutée automatiquement.

```blocks
forever(function () {
    pins.PAD0.digitalWrite(!pins.C5.digitalRead())
})
```

## Voir aussi

[Mode multijoueur Jacdac](/reference/jacdac-multiplayer)

```package
calliope-mini
```

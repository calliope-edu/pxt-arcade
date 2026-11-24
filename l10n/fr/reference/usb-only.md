# Sans Bluetooth (USB uniquement)

Normalement, chaque jeu pour le Calliope mini contient aussi ce qu'il faut pour transférer le programme suivant par **Bluetooth** avec l'application Calliope mini (appuie 3 fois sur reset : la matrice LED affiche le motif d'appairage). Cela occupe environ 140 Ko de la mémoire du Calliope mini.

![Câble USB au lieu du Bluetooth](/static/libs/usb-only.png)

Avec cette extension, le jeu est créé **sans transfert Bluetooth**. Le jeu dispose d'environ **140 Ko de place en plus**, mais à partir de maintenant il ne peut être transféré qu'avec le **câble USB** (téléchargement sur le lecteur MINI ou avec « Connecter le Calliope mini »).

## ~ hint

**Ajoutée automatiquement :** Si un jeu est trop gros pour le Bluetooth, l'éditeur ajoute cette extension tout seul et affiche un message. Le téléchargement fonctionne alors par USB comme d'habitude.

## ~

## Revenir au Bluetooth

Tant qu'un tel jeu se trouve sur le Calliope mini, appuyer 3 fois sur reset ne lance plus le mode d'appairage. Pour transférer à nouveau par Bluetooth :

1. Rends le jeu plus petit, s'il était trop gros.
2. Supprime cette extension : passe en **JavaScript**, ouvre l'**Explorateur** sous le simulateur et clique sur la corbeille à côté de **usb-only**.
3. Transfère le jeu **une fois par USB**. Ensuite, le Bluetooth fonctionne à nouveau (appuie 3 fois sur reset).

```package
usb-only
```

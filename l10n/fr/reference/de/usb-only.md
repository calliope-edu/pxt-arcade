# Sans Bluetooth (USB uniquement)

Normalement, chaque jeu pour le Calliope mini contient aussi tout ce qu'il faut pour transférer le programme suivant par **Bluetooth** avec l'application Calliope mini (appuie 3× sur Reset : la matrice de LED affiche le motif d'appairage). Cela occupe environ 140 Ko dans la mémoire du Calliope mini.

![Câble USB au lieu du Bluetooth](/static/libs/usb-only.png)

Avec cette extension, le jeu est créé **sans transfert Bluetooth**. Le jeu dispose alors d'environ **140 Ko de place en plus**, mais ne peut désormais être transféré que par **câble USB** (téléchargement sur le lecteur MINI ou avec « Connecter le Calliope mini »).

## ~ hint

**Ajoutée automatiquement :** si un jeu est trop gros pour le Bluetooth, l'éditeur ajoute lui-même cette extension et affiche un message. Le téléchargement par USB fonctionne alors comme d'habitude.

## ~

## Revenir au Bluetooth

Tant qu'un tel jeu est sur le Calliope mini, appuyer 3× sur Reset ne lance pas le mode d'appairage. Pour revenir au Bluetooth :

1. Réduis la taille du jeu s'il était trop gros.
2. Supprime cette extension : passe en **JavaScript**, ouvre l'**Explorateur** sous le simulateur et clique sur la corbeille à côté de **usb-only**.
3. Transfère le jeu **une fois par USB**. Ensuite, le Bluetooth fonctionne à nouveau (appuie 3× sur Reset).

```package
usb-only
```

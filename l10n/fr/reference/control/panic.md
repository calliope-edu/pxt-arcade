# panic

Affiche un numéro d'erreur et arrête le programme.

```sig
control.panic(0)
```

Si ta carte dispose d'un moyen d'afficher des informations d'erreur, ``||panic||`` l'utilisera
pour montrer les numéros d'erreur.

Ton programme s'arrête quand tu utilises ``||panic||``. Utilise-le quand tu penses que quelque chose d'assez grave
s'est produit et que ton programme ne peut plus fonctionner correctement.

## Paramètres

* **code** : un [nombre](/types/number) d'erreur que tu associes à une situation d'erreur dans ton programme.

## Exemple #example

Envoie une erreur « code rouge » que tu as créée vers l'affichage d'erreurs si l'entrée de la broche `A0` est
inférieure à `10`.

```blocks
let codeRed = 1
let codeBlue = 2

if (pins.A0.analogRead() < 10) {
    control.panic(codeRed)
}
```

## Voir aussi #seealso

[assert](/reference/control/assert)

[Codes d'erreur](/device/error-codes)
# light Level

Trouve le niveau de lumière (à quel point il fait clair ou sombre) là où tu te trouves.
Le niveau de lumière ``0`` signifie l'obscurité et ``255`` une lumière vive.

```sig
input.lightLevel();
```

La première fois que tu l'utilises, cette fonction renvoie ``0``.
Ensuite, elle renvoie le vrai niveau de lumière.
C'est parce que le _capteur de lumière_ (la partie de la carte qui détecte la lumière)
doit d'abord être allumé.

## Retourne

* un [nombre](/types/number) qui est un niveau de lumière de ``0`` (sombre) à ``255`` (lumineux).

## Exemples #example

### Afficher le niveau de lumière #ex1

Quand tu appuies sur le bouton `A` de la @boardname@, ce
programme modifie la luminosité des pixels en conséquence.

```blocks
let pixels = light.createStrip();

input.buttonA.onEvent(ButtonEvent.Click, function() {
    let level = input.lightLevel();
    pixels.setBrightness(level);
    pixels.setAll(0xff0000);
});
```

### Graphique du niveau de lumière #ex2

Ce programme affiche le niveau de lumière sous forme de [graphique](/reference/light/graph) avec les LED de la @boardname@.
Si tu emportes la @boardname@ dans différents endroits avec différents niveaux de lumière, le graphique change.

```blocks
let pixels = light.createStrip();

forever(function() {
    pixels.graph(
        input.lightLevel(),
        0
    );
});
```

## Voir aussi #seealso

[accélération](/reference/input/acceleration)


# éditeur de mélodie

Affiche l'éditeur de mélodie et retourne la chaîne de la mélodie composée.

```sig
music.melodyEditor("");
```

Dans les blocs, l'éditeur de mélodie s'affiche et tu peux créer une mélodie avec son interface. La mélodie composée est retournée sous forme de chaîne de mélodie à utiliser avec **playMelody**.

Si tu n'utilises pas les blocs, le paramètre de chaîne **melody** est retourné.

## Paramètres

* **melody** : une [chaîne](/types/string) qui contient les notes de la mélodie actuelle.

## Retourne

* une [chaîne](/types/number) qui contient la nouvelle mélodie créée dans l'éditeur de mélodie, ou la chaîne de **melody** quand l'éditeur de mélodie n'est pas affiché.

## Exemple #example

Modifie la mélodie dans **playMelody** avec l'éditeur de mélodie.

```blocks
forever(function () {
    music.playMelody(music.melodyEditor("E F G F E G B C5 "), 120)
})
```

## Voir aussi #seealso

[jouer une mélodie](/reference/music/play-melody)

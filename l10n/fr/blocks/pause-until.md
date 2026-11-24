# pause Until

Met en pause la partie actuelle du programme jusqu'à ce qu'une condition devienne vraie.

```sig
pauseUntil(() => true)
```

Parfois, tu dois attendre dans une partie du programme que quelque chose se produise ailleurs dans le programme. Pour cela, tu fais une pause jusqu'à ce qu'une condition devienne ``true``. Cette condition peut être une valeur que tu définis dans un bloc d'événement ou une fonction qui renvoie un [booléen](/types/boolean) .

## Paramètres

* **condition** : une condition [booléenne](/types/boolean) qui relance le programme lorsqu'elle devient ``true``.
* **timeOut** : un paramètre facultatif, un [nombre](/types/number) de millisecondes à attendre que la **condition** devienne ``true``. La pause se termine une fois ce délai écoulé, même si **condition** est toujours ``false``.

## ~hint

Le code dans les **événements** ou dans les blocs **runInParallel** continue de s'exécuter pendant que la partie actuelle de ton programme est en pause.

## ~

## Exemples #example

### Minuteur dans un bloc parallèle #ex1

Crée un minuteur de `5` secondes en comptant le temps dans une section de code parallèle.

```blocks
let msecs = 0
control.runInParallel(function () {
    while (true) {
        control.waitMicros(1000)
        msecs += 1
    }
})
pauseUntil(() => msecs > 5000)
```

### Minuteur dans une fonction booléenne #ex2

Attends une fonction de minuterie de cinq secondes.

```typescript
function waitFiveSeconds() : boolean {
    for (let i = 0; i < 5000; i++) {
        control.waitMicros(1000)
    }
    return true
}
pauseUntil(() => waitFiveSeconds())
```

## #seealso
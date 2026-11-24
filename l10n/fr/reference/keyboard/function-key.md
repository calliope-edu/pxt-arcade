# touche de fonction

Émule l'appui sur une touche de fonction d'un clavier.

```sig
keyboard.functionKey(KeyboardFunctionKey.F1Key, KeyboardKeyEvent.Press)
```

## ~ hint

Le @boardname@ doit être relié à un ordinateur ou à un autre appareil hôte avec un câble USB pour émuler des actions du clavier. Cette fonction ne marche pas dans le simulateur.

## ~

Les touches de fonction servent à envoyer à une application des entrées qui ne sont pas du texte. Elles indiquent à l'application de faire des choses comme faire défiler ou fermer la fenêtre.

## Paramètres

* **key** : une touche de fonction du clavier. Les choix de touches se trouvent dans la liste des touches du bloc ou dans l'énumération ``KeyboardFunctionKey``.
* **event** : l'événement de touche à simuler. Ce sont :
>* `press` : simule l'appui sur une touche de fonction puis son relâchement
>* `down` : simule l'appui sur une touche de fonction
>* `up` : simule le relâchement d'une touche de fonction

## Exemple #example

Émule 4 appuis sur la touche `page down` pour faire défiler une liste d'articles d'actualité.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebSearch, KeyboardKeyEvent.Press)
keyboard.type("news")
pause(2000)
for (let i = 0; i < 4; i++) {
    pause(4000)
    keyboard.functionKey(KeyboardFunctionKey.PageDown, KeyboardKeyEvent.Press)
}
```

## Voir aussi #seealso

[taper](/reference/keyboard/type), [touche](/reference/keyboard/key), [touche multimédia](/reference/keyboard/media-key)

```package
keyboard
```

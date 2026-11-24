# touche multimédia

Émule l'appui sur une touche multimédia d'un clavier.

```sig
keyboard.mediaKey(KeyboardMediaKey.Mute, KeyboardKeyEvent.Press)
```

## ~ hint

Le @boardname@ doit être relié à un ordinateur ou à un autre appareil hôte avec un câble USB pour émuler des actions du clavier. Cette fonction ne marche pas dans le simulateur.

## ~

Les touches multimédia sont des touches spéciales présentes sur beaucoup de claviers pour effectuer des actions particulières dans les applications. Par exemple, augmenter le volume ou ouvrir une fenêtre de recherche web.

## Paramètres

* **key** : une touche multimédia du clavier. Les choix de touches se trouvent dans la liste des touches du bloc ou dans l'énumération ``KeyboardMediaKey``.
* **event** : l'événement de touche à simuler. Ce sont :
>* `press` : simule l'appui sur une touche multimédia puis son relâchement
>* `down` : simule l'appui sur une touche multimédia
>* `up` : simule le relâchement d'une touche multimédia

## Exemple #example

Émule la saisie d'une commande pour ouvrir cette page dans le navigateur web.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebHome, KeyboardKeyEvent.Press)
keyboard.type("@homeurl@reference/keyboard/media-key")
```

## Voir aussi #seealso

[taper](/reference/keyboard/type), [touche](/reference/keyboard/key), [touche de fonction](/reference/keyboard/function-key)

```package
keyboard
```

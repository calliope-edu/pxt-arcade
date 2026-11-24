# taper

Émule la saisie de caractères de texte sur un clavier.

```sig
keyboard.type("")
```

## ~ hint

Le @boardname@ doit être relié à un ordinateur ou à un autre appareil hôte avec un câble USB pour émuler des actions du clavier. Cette fonction ne marche pas dans le simulateur.

## ~

## Paramètres

* **text** : une [chaîne](/types/string) de caractères de texte à envoyer comme frappes simulées.

## Exemple #example

Émule la saisie d'une commande pour ouvrir cette page dans le navigateur web.

```blocks
keyboard.mediaKey(KeyboardMediaKey.WebHome, KeyboardKeyEvent.Press)
keyboard.type("@homeurl@reference/keyboard/type")
```

## Voir aussi #seealso

[touche](/reference/keyboard/key), [touche multimédia](/reference/keyboard/media-key), [touche de fonction](/reference/keyboard/function-key)

```package
keyboard
```

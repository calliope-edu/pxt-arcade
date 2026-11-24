# touche

Émule l'appui sur une seule touche de texte d'un clavier.

```sig
keyboard.key("", KeyboardKeyEvent.Press)
```

## ~ hint

Le @boardname@ doit être relié à un ordinateur ou à un autre appareil hôte avec un câble USB pour émuler des actions du clavier. Cette fonction ne marche pas dans le simulateur.

## ~

Le caractère de la touche est placé dans une chaîne. Si la chaîne contient plus d'un caractère, seul le premier caractère est utilisé comme frappe.

## Paramètres

* **key** : une [chaîne](/types/string) contenant un caractère de texte, la touche à simuler.
* **event** : l'événement de touche à simuler. Ce sont :
>* `press` : simule l'appui sur une touche de texte puis son relâchement
>* `down` : simule l'appui sur une touche de texte
>* `up` : simule le relâchement d'une touche de texte

## Exemple #example

Émule l'appui sur la touche « A » pendant `2` secondes, puis son relâchement.

```blocks
keyboard.key("A", KeyboardKeyEvent.Down)
pause(2000)
keyboard.key("A", KeyboardKeyEvent.Up)
```

## Voir aussi #seealso

[taper](/reference/keyboard/type), [touche multimédia](/reference/keyboard/media-key), [touche de fonction](/reference/keyboard/function-key)

```package
keyboard
```

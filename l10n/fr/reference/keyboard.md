# Clavier

Émule la saisie au clavier via une connexion USB.

## ~ hint

Le @boardname@ doit être relié à un ordinateur ou à un autre appareil hôte avec un câble USB pour émuler un clavier. Cette fonction ne marche pas dans le simulateur.

## ~

```cards
keyboard.type("")
keyboard.key("", KeyboardKeyEvent.Press)
keyboard.mediaKey(KeyboardMediaKey.Mute, KeyboardKeyEvent.Press)
keyboard.functionKey(KeyboardFunctionKey.F1Key, KeyboardKeyEvent.Press)
```

## Voir aussi

[taper](/reference/keyboard/type), [touche](/reference/keyboard/key), [touche multimédia](/reference/keyboard/media-key), [touche de fonction](/reference/keyboard/function-key)

```package
keyboard
```

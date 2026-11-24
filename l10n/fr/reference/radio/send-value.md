# envoyer valeur

Envoie une [chaîne]() et un [nombre]() ensemble par ``radio`` aux autres @boardname@s.
La longueur maximale de la [chaîne]() est de 8 caractères.

```sig
radio.sendValue("name", 0);
```

## Paramètres

* **name** : une [chaîne](/types/string) qui est le nom de la valeur à envoyer.
* **value** : un [nombre](/types/number) qui est la valeur à envoyer.

## ~ hint

Regarde cette vidéo pour voir comment fonctionne le matériel radio de la @boardname@ :

https://www.youtube.com/watch?v=Re3H2ISfQE8

## ~

## #example

## Voir aussi

[Radio](/reference/radio)
[quand une valeur est reçue](/reference/radio/on-received-value)

```package
radio
```
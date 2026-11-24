# écrire ligne

Écris une ligne de texte sur le port série.

```sig
serial.writeLine("");
```

Une ligne de texte est une chaîne à laquelle deux caractères spéciaux sont ajoutés à la fin : le _retour chariot_
et le _saut de ligne_. Ces caractères sont en fait simplement des codes qui signifient « commencer une nouvelle ligne ».
On les voit parfois dans le code sous la forme ``"\r\n"``.

Après un ``||serial:write line||``, tout nouveau texte écrit sur le port série commencera sur une nouvelle ligne.

Avec ``||serial:write line||``, les caractères de nouvelle ligne sont ajoutés automatiquement. Tu n'as qu'à
donner le texte que tu veux écrire.

## Paramètres

* **text** : la [chaîne](/types/string) à écrire sur le port série

## Exemple #example

Écris deux messages de salutation sur le port série.

```blocks
serial.writeLine("How are you today?");
pause(5000);
serial.writeLine("Well that's great! I'm doing well too.");
```

## Voir aussi #seealso

[écrire nombre](/reference/serial/write-number),
[écrire chaîne](/reference/serial/write-string),
[écrire valeur](/reference/serial/write-value)

```package
serial
```

# journaliser

Écrit une ligne de texte dans la sortie de la console.

```sig
console.log("");
```

Une ligne de texte est une chaîne à laquelle deux caractères spéciaux sont ajoutés à la fin : le _retour chariot_
et le _saut de ligne_. Ces caractères sont en fait juste des codes qui signifient « commencer une nouvelle ligne ».
On les voit parfois dans le code sous la forme ``"\r\n"``.

Après avoir utilisé ``||console:log||``, tout nouveau texte écrit dans la sortie de la console commencera sur une nouvelle ligne.

Avec ``||console:log||``, les caractères de nouvelle ligne sont ajoutés automatiquement pour toi. Tu dois seulement donner le texte que tu veux écrire.

## Paramètres

* **text** : la [chaîne](/types/string) à écrire dans la sortie de la console.

## Exemple #example

Écris deux messages de salutation dans la sortie de la console.

```blocks
console.log("How are you today?");
pause(5000);
console.log("Well that's great! I'm doing well too.");
```

## Voir aussi #seealso

[journaliser valeur](/reference/console/log-value)
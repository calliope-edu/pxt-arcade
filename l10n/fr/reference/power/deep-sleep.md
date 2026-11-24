# deep Sleep

Mets l'appareil dans un mode à faible consommation d'énergie, ou « sommeil profond ».

```sig
power.deepSleep()
```

Pour économiser de l'énergie lorsqu'il n'y a aucune entrée utilisateur à traiter, aucun événement à gérer ni aucune indication à afficher, un appareil peut passer dans un état de « sommeil profond ». Dans cet état, l'appareil arrête le traitement normal des programmes utilisateur et des événements d'entrée. Pendant le sommeil profond, l'appareil ne peut répondre qu'à certaines interruptions et aux événements de minuterie nécessaires.

Pour sortir l'appareil du sommeil profond, un événement matériel, comme un appui sur le bouton de réinitialisation, peut être nécessaire.

```blocks
console.log("Feeling tired now. I'm going to sleep.");
power.deepSleep()
```

```package
power
```

## Voir aussi

[définir le délai de sommeil profond](/reference/power/set-deep-sleep-timeout)

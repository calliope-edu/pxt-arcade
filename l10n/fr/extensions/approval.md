# Approbation d'Extension

Seules les extensions approuvées sont disponibles dans les résultats de recherche de la boîte de dialogue `Extensions` . Les organisations GitHub ou les dépôts GitHub peuvent être approuvées.

Les extensions exclues ne sont pas autorisées à être chargées.

## Checklist

Lorsque vous soumettez une extension pour approbation, veuillez vérifier que vous avez effectué les tâches suivantes :

- [ ] A release has been created in GitHub. Vous pouvez créer une version de l'extension lors de la synchronisation dans l'éditeur MakeCode ou à l'aide de la commande **pxt bump**. The format **must** be `vMAJOR.MINOR.PATCH`.
- [ ] An icon image **icon.png** is available in the root folder. La taille devrait être de 300x200 pixels et **inférieure à 100kb**.
- [ ] A GitHub repo description added that's descriptive enough to help with extension search.
- [ ] A test file, called `test.ts`, is present and compiles when running **pxt deploy**.
- [ ] The `README.md` file contains API documentation for the extension blocks.
- [ ] Your public functions and types follow the [MakeCode naming conventions](https://makecode.com/extensions/naming-conventions).

### #custom-checklist

## #approval
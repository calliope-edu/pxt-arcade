# Trucs et astuces pour développeurs

Si vous voulez personnaliser et étendre l'expérience de jeu Arcade, ou simplement coder vos jeux pour de meilleures performances, cette page vous dirige vers différentes ressources d'assistance, ainsi que des conseils.

## Trouver des exemples et de la documentation

Il y a un certain nombre d'exemples que vous pouvez essayer, sur la page d'accueil [MakeCode Arcade](@homeurl@). Nous avons également plusieurs cours de développement, [ici](/courses). Les documents de référence d'API sont situés [ici](/reference).

## "JavaScript" == "TypeScript"

Malgré le nom indiqué dans l'éditeur MakeCode, notre langage est en fait un sous-ensemble plus strict de TypeScript. Vous trouverez plus d'informations sur ce qui est supporté dans les [documentations de langage](https://makecode.com/language).

## Contrôle de code source

L'éditeur MakeCode stocke tous vos projets dans le stockage local du navigateur. Le moyen le plus simple de sauvegarder un projet de blocs est simplement de le "télécharger". Pour les projets basés sur du texte, MakeCode est intégré avec GitHub. Apprenez-en plus [ici](https://makecode.com/extensions/github-authoring).

MakeCode supporte également des "extensions" (bibliothèques ou paquets) dans les projets, il est donc possible de diviser votre projet en plusieurs dépôts ou bibliothèques. Plus d'informations [ici](https://makecode.com/extensions).

## Boucle de jeu, physique et rendu

La documentation sur la boucle de jeu principale, le système de gestion de la physique et le rendu se trouve [ici](/developer/game-loop).

## Musique et Art

La documentation sur l'import et l'utilisation d'images dans Arcade peut être trouvée [ici](/developer/images).

La documentation sur la façon de créer des effets musicaux et sonores est [ici](/developer/sound).

### ~tip

#### Asset packs

You can set a project to only expose the assets it contains. Whether as an extension or shared project, this type of project is called an *asset pack*. When a project is set as an asset pack, only the assets are loaded and any code in the project is ignored.

You can set a project as an asset pack for sharing by going to the **Settings** (⚙️) menu and selecting 'Project Settings'. Enable the 'Import as asset pack' setting. To provide assets in an extension, read the [Asset Packs](https://makecode.com/extensions/asset-packs) page to learn more about creating an asset pack extension.

### ~

## Boutons du contrôleur

Utilisez le [testeur de bouton](/developer/button-tester) pour vérifier la bonne assignation des boutons sur votre contrôleur.

## Obtenir de l'aide

Pour obtenir de l'aide, vous pouvez vous adresser à la [communauté MakeCode](https://aka.ms/makecodecommunity) sur notre canal discord public dédié à arcade.

## Bugs et fonctionnalités

Veuillez signaler tous les bugs et demandes de fonctionnalités sur [pxt-arcade](https://github.com/microsoft/pxt-arcade/issues). Si vous souhaitez également soumettre un correctif, n'hésitez pas à ouvrir une pull request !

L'éditeur d'arcade est situé dans [pxt-arcade](https://github.com/microsoft/pxt-arcade). Le moteur de jeu et le code du runtime sont dans [pxt-common-packages](https://github.com/microsoft/pxt-common-packages).

La majeure partie du code lié à Arcade se trouve dans le répertoire [libs/game](https://github.com/microsoft/pxt-common-packages/tree/master/libs/game) de ce dépôt.
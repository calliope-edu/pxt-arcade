# Using MakeCode offline

MakeCode is typically accessed at @homeurl@ where create, modify, and run your projects while you're online. You can can use MakeCode when you're offline too. Here are some ways you can work with MakeCode offline:

## Offline app #target-app

The MakeCode @boardname@ editor is available as an app which you can install on a Windows or Mac OS Computer. Once installed, the **[MakeCode Offline App](/offline-app)** lets you create, run, and download your projects to your device. It works the same as the Web application does in your browser, but it's a stand-alone application that will work when a connection to the internet is restricted or not available.

### ~button /offline-app

Download the offline app!

### ~

## Application Web

**[MakeCode](@homeurl@)** est une **application Web HTML5** qui est automatiquement mise en cache localement (enregistrée sur votre ordinateur ou périphérique) lors du la premier affichage dans votre navigateur. Une fois que l'application Web est chargée, vous aurez tout ce dont vous avez besoin pour continuer à travailler sans connexion Internet. If you decide to add an [extension](/extensions), it's possible that you'll again need to connect to the internet to allow the code in the new extension to compile.

### Comment ça fonctionne?

L'éditeur MakeCode, comme d'autres applications Web, est créé à l'aide de HTML, JavaScript et certaines informations de style. Ces parties de l'éditeur sont toutes téléchargées en tant que divers fichiers dans votre navigateur. L'éditeur est conçu pour faire autant de travail que possible dans le navigateur lui-même sans avoir besoin de constamment avoir un contact avec le serveur Web. Pour ce faire, il demande au navigateur de télécharger et de conserver un certain nombre de fichiers de service qui donnent à l'éditeur les mêmes caractéristiques fournies par le site Web **[MakeCode](@homeurl@)** . Cela permet à l'éditeur de fonctionner pleinement même lorsqu'il est déconnecté de l'Internet, n'ayant plus de contact avec le site Web.

Lorsque l'éditeur se charge dans votre navigateur, il lui dit de conserver les fichiers de service MakeCode dans le *cache d'application* du navigateur. Le cache est une zone de stockage de données gérée par le navigateur où une application Web peut conserver les fichiers supplémentaires dont elle a besoin.

### Cloud compilation

Lors de l'exécution sur le matériel réel, le code que vous écrivez en JavaScript est compilé en instructions qui sont comprises par le processeur sur la carte. Certains des fichiers enregistrés dans le cache de l'application sont compilés en code pour les fonctionnalités de la carte. Pour utiliser les fonctionnalités matérielles de votre carte, l'éditeur fournit des blocs adaptés que vous incluez dans vos programmes. These blocks are available to your program when they're included as part of an added extension. The code in an extension is in TypeScript and sometimes also in C++. Il est nécessaire de compiler ce code au moins une fois sur le serveur, puis les fichiers compilés sont retournés au navigateur pour être mis en cache. Once cached, the editor can use them together with your code, even when offline. Ce processus ponctuel de compilation est appelé Compilation Cloud.

## Extensions #extensions

Extensions are, by default, downloaded from internet so typically you need to be connected to use them. If you want to use a particular extension while **offline**, you will need to follow these steps:

### Download the extension

* **While connected to internet**, create a new project in the editor and then add the extension you need to use. You don't need to add any program code to the project.
* Click `|Save|` (the project save icon), or `|Download|`, and store the downloaded file. Save it to a folder location that you will remember and have access to when offline.

This file contains the full source code of the extension, allowing you to use the extension while offline.

### Import the offline extension

* **While offline**, go to the `|Extensions|` dialog and click on **Import file**.
* Import the file you downloaded and saved earlier when you were online.

### ~ indice

#### Limitations

Not all MakeCode editors support importing extensions as a source file. If importing is enabled, you will see an **Import File** button in the extensions dialog.

Extensions that use C++ are not supported yet in a full offline scenario as they require cloud compilation.

### ~

## Héberger MakeCode localement #local-serve

Les éditions open source de MakeCode peuvent être exécutées localement sur votre propre ordinateur. More experienced users can download the entire [PXT Toolchain](https://github.com/microsoft/pxt) and use the [command line interface](/cli) (CLI) to compile and deploy scripts locally. PXT fournit une excellente expérience "out-of-the-box" à l'aide de [Visual Studio Code](/code), un éditeur de code multi-plateforme léger. Consultez la page du projet @githubUrl@ pour des instructions sur la configuration d'un serveur local MakeCode.

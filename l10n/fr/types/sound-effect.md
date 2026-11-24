# Effet sonore

Un **effet sonore** est un objet de données créé à partir d'une expression sonore. Une expression sonore est un groupe de paramètres qui définissent un son, comme la forme d'onde, le volume, la fréquence et la durée.

Un son est généré à partir d'une expression basée sur une forme d'onde fondamentale. Pour produire une onde sonore, les données du son doivent passer d'un pic haut à un creux bas sur une certaine période, puis se répéter. Les pics et les creux sont les amplitudes positives et négatives de l'onde de part et d'autre de la ligne zéro. Le volume contrôle l'amplitude de l'onde.

Quand le son est joué sur un haut-parleur ou un casque, les vibrations créent les variations de pression que nos oreilles perçoivent comme du son.

### ~ hint

#### Sons et expressions sonores

Dans le code, le type **effet sonore** est un objet de données complexe qui contient les données de tous les éléments représentant un son. Cela comprend des informations sur les fréquences et les volumes à différents moments pendant la durée du son. Une **SoundExpression** est un autre type de données qui aide à créer un **effet sonore**. Elle contient les éléments qui décrivent comment produire le son. Tu en définis beaucoup quand tu modifies un son.

Le code pour créer et jouer un son à partir d'une expression sonore pourrait ressembler à ceci :

```typescript-ignore
let mySound = music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.playSoundEffect(mySound, SoundExpressionPlayMode.UntilDone)
```

### ~

## Modification du son

Quand tu cliques sur la forme d'onde dans le bloc ``||music:play sound||``, l'éditeur de sons s'affiche. L'éditeur de sons définit le paramètre d'expression sonore avec des choix pour la **forme d'onde**, la **durée** du son, la plage de **fréquence**, la plage de **volume**, l'**effet** et l'**interpolation**.

![Éditeur de sons](/static/types/sound/sound-editor.png)

La fréquence et le volume peuvent tous deux commencer et finir avec des valeurs différentes pendant la durée du son.

## Forme d'onde

La forme d'onde est choisie pour créer un son naturel ou un son synthétique. Certaines formes d'onde peuvent aussi servir à générer des signaux lorsqu'elles sont jouées sur une broche au lieu d'un haut-parleur ou d'un casque.

### Onde sinusoïdale

La forme d'onde qui correspond au son naturel est l'onde sinusoïdale. C'est le type d'onde présent dans la musique et la voix.

![Onde sinusoïdale](/static/types/sound/sine-wave.png)

### Onde en dents de scie

Une onde en dents de scie a un front montant vertical et un front descendant linéaire. Sa forme ressemble aux dents d'une scie.

![Onde en dents de scie](/static/types/sound/sawtooth-wave.png)

### Onde triangulaire

L'onde triangulaire a un front montant et un front descendant symétriques. Elle forme des triangles dans la forme d'onde.

![Onde triangulaire](/static/types/sound/triangle-wave.png)

### Onde carrée

Une onde carrée a des fronts montants et descendants verticaux, avec une partie plate en haut et en bas. Les parties plates correspondent au volume défini pour le son. Les ondes carrées sont parfois utilisées pour représenter des données numériques et produisent un son « électronique ».

![Onde carrée](/static/types/sound/square-wave.png)

### Onde de bruit

L'onde de bruit est créée à partir de fréquences et de volumes aléatoires. Les paramètres de fréquence de l'expression sonore définissent une plage d'« accord » pour l'effet sonore de bruit.

![Onde de bruit](/static/types/sound/noise-wave.png)

## Durée

Le son est joué pendant une certaine durée. Elle est définie en millisecondes (**ms**).

## Volume

Le volume contrôle l'intensité (l'amplitude) du son. Le son peut commencer avec un réglage de volume et finir avec un autre. Il peut commencer fort et finir doucement, ou l'inverse. Le contrôle du volume a des points de début et de fin que tu peux régler plus haut ou plus bas. Attrape-les et déplace-les vers le haut ou vers le bas.

### Du haut vers le bas

![Volume du haut vers le bas](/static/types/sound/volume-hilo.png)

### Du bas vers le haut

![Volume du bas vers le haut](/static/types/sound/volume-lohi.png)

### Volume constant

![Volume constant](/static/types/sound/volume-constant.png)

## Fréquence

La fréquence indique à quelle vitesse une onde se répète, de la ligne zéro jusqu'à son pic, puis jusqu'à son creux et de retour à la ligne zéro. Si elle le fait 1000 fois par seconde, la fréquence est de 1000 cycles par seconde et se mesure en hertz (1000 Hz). La fréquence du son à un instant donné est sa _hauteur_ actuelle. Les notes de musique et les éléments de la parole sont des fréquences différentes qui durent de courtes périodes dans un son.

Une expression sonore a une fréquence de début et une fréquence de fin. La fréquence peut commencer basse et finir haute, commencer haute et finir basse, ou rester la même pendant toute la durée du son.

### Du haut vers le bas

![Fréquence du haut vers le bas](/static/types/sound/freq-hilo.png)

### Du bas vers le haut

![Fréquence du bas vers le haut](/static/types/sound/freq-lohi.png)

### Effet

Les effets apportent de petites modifications à la forme d'onde, mais peuvent beaucoup changer la façon dont on entend le son. Quelques effets sont disponibles pour un son.

* **Trémolo** : ajoute de légères variations de volume à l'expression sonore.

>![Réglage de l'effet trémolo](/static/types/sound/effect-tremolo.png)

* **Vibrato** : ajoute de légères variations de fréquence à l'expression sonore.

>![Réglage de l'effet vibrato](/static/types/sound/effect-vibrato.png)

* **Gazouillis** : semblable au vibrato, mais avec des variations de fréquence plus rapides.

>![Réglage de l'effet gazouillis](/static/types/sound/effect-warble.png)

### Interpolation

L'interpolation est la manière dont l'expression sonore modifie la fréquence ou le volume du son. Ces changements peuvent se faire à un rythme constant pendant toute la durée du son, ou plus brusquement au début.

* **Linéaire** : la variation de fréquence est constante pendant toute la durée du son.

>![Fréquence du bas vers le haut](/static/types/sound/interp-linear.png)

* **Courbe** : la variation de fréquence est plus rapide au début du son et ralentit vers la fin.

>![Fréquence du bas vers le haut](/static/types/sound/interp-curve.png)

* **Logarithmique** : la variation de fréquence est rapide pendant la toute première partie du son.


>![Fréquence du bas vers le haut](/static/types/sound/interp-log.png)

## Voir aussi

[jouer un effet sonore](/reference/music/play-sound-effect),
[créer un effet sonore](/reference/music/create-sound-effect)
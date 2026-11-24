# Qu'est-ce que la PWM ?

Pour créer des commandes pour les servos, produire des tensions de sortie analogiques et d'autres signaux de commande, ta
carte utilise une méthode appelée _modulation de largeur d'impulsion (pwm)_. C'est une façon compliquée de parler de
signaux d'impulsion qui durent plus ou moins longtemps. Le temps pendant lequel l'impulsion
est active s'appelle sa _largeur_. Le mot _modulation_ signifie simplement que nous envoyons une
information en changeant quelque chose dans notre signal. Ici, l'information est la largeur
(la durée) de notre impulsion.

### Période

Avec la _pwm_, un signal d'impulsion est envoyé régulièrement, plusieurs fois par seconde. Le nombre d'impulsions envoyées
chaque seconde détermine sa _période_. Si un signal _pwm_ est envoyé 50 fois par seconde, sa période
est de 1/20e de seconde, soit 20 millisecondes.

### Modulation

Pour obtenir une information à partir de notre signal _pwm_, nous pouvons créer un nombre à partir d'une impulsion. Le nombre vient
du temps qu'a duré l'impulsion (sa _largeur_) et de la différence entre cette durée et
la longueur de la période. Cette différence est un certain pourcentage de la période. Si ta période est de
20 millisecondes et que la largeur d'impulsion est de 2 millisecondes, alors le signal d'impulsion signifie 10 pour cent.

### Servos

Pour faire fonctionner les servos, tu dois leur envoyer un signal encore et encore. La fréquence à laquelle un
servo reçoit ce signal s'appelle sa période. Les servos courants ont une période de signal de
20 millisecondes. Cela signifie qu'ils reçoivent une nouvelle commande toutes les 20 millisecondes, soit 50 fois
par seconde. Tu pourrais penser qu'ils sont très occupés, mais ils s'en sortent. Tu n'as probablement pas
besoin d'utiliser ``||pins:analog set period||`` avant d'écrire vers tes servos. Les servos n'utilisent pas toute la
période pour savoir de combien tourner l'axe. Ils reçoivent généralement cette information d'une impulsion qui
représente entre 5 et 10 pour cent de la période du signal.

### Écriture analogique

Tu sais que lorsque tu écris une valeur sur une broche analogique, tu utilises un nombre entre 0 et 1023. Cela
crée une tension différente détectée sur la broche. Certaines cartes ont une astuce secrète pour
faire croire que la tension change quand tu écris une valeur différente avec ``||pins:analog write||``.
La broche analogique ne peut en fait produire que deux tensions : basse (0 volt) et haute (3,3 volts ou 5 volts).
Pour produire de nombreuses tensions, une impulsion est envoyée pendant une durée qui ne représente qu'une partie de la
période du signal. Si ta carte peut produire 3,3 volts sur la broche de sortie, elle peut faire semblant de produire la moitié
de cette tension (1,65 volt) quand tu écris `511` avec ``||pins:analog write||``. Comment ? Eh bien,
elle envoie une impulsion qui ne dure que la moitié de la période. Si la période est assez courte,
plusieurs fois par seconde, les autres circuits détectent que la broche fournit 1,65 volt. Astucieux, non !

## Voir aussi

[servo set pulse](/reference/pins/servo-set-pulse),
[servo write](/reference/pins/servo-write)
[analog set period](/reference/pins/analog-set-period)

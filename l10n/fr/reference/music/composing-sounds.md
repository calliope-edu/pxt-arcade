# Composer des sons

Pour composer un son, ou peut-être de la musique, on assemble des tonalités, l'une après l'autre.

## Notes de musique

Une _note_ est une tonalité reconnue comme faisant partie de la musique. Une note a un nom comme '**C**' (do). Une note est
jouée pendant une certaine durée appelée sa _durée_. 

Sur ton @boardname@, une note est jouée sur le haut-parleur en lui envoyant un signal avec une certaine _fréquence_, mesurée en [Hertz](http://wikipedia.org/Hertz). La fréquence indique à quelle vitesse quelque chose vibre pendant une seconde. Si tu fais sonner une cloche qui a été
fabriquée pour jouer la note '**A**' (la), la cloche vibrera à 440 Hertz (440 fois par seconde). Les notes ne sont donc que certaines fréquences
qui portent des noms spéciaux.

Dans l'histoire, la musique est née de tonalités agréables à entendre. Ces tonalités étaient jouées sur du bois, des cordes, du métal et des peaux.
On leur a donné des noms et elles sont devenues ce que nous connaissons aujourd'hui comme les notes de musique. Les notes ont été nommées pour pouvoir les écrire
et se souvenir plus tard de la façon de les rejouer.

## Comment les notes sont-elles nommées ?

Les notes de base ont des noms qui utilisent l'une des premières lettres de l'alphabet. Ce sont :

``|A|``, ``|B|``, ``|C|``, ``|D|``, ``|E|``, ``|F|``, ``|G|``

Il existe d'autres notes nommées comme les notes de base, mais avec une partie en plus dans le nom, appelée _dièse_ ou _bémol_. Ces autres
notes sont juste un peu différentes des notes de base et ont des fréquences un peu plus hautes ou plus basses que la
note de base. Cela rend la musique un peu plus compliquée, mais beaucoup plus intéressante !

Certaines de ces autres notes ressemblent à ceci :

``|C#|``, ``|Eb|``

Quand un petit morceau de musique ou même une chanson est écrit, on appelle cela une [partition](https://wikipedia.org/wiki/Sheet_music).

## Sons et musique dans le code

Bien sûr, on ne peut pas utiliser de la musique écrite dans notre code. On peut faire de la musique d'une autre façon. Pour cela, on
assemble les noms des notes dans une [chaîne](/types/string). On crée nos notes avec des lettres, des symboles et
des nombres. Des notes assemblées dans notre code ressemblent à ceci :
```block
"E3:3 R:1 D#:3 R:1 D:4 R:1 C#:8"
```

Ce que tu vois n'est pas une langue extraterrestre, mais un ensemble de notes avec leur durée. La forme d'une seule
note est **note : durée** ou ``C:2``. Cela signifie : jouer la note '**C**' pendant **2** temps.
Les notes sont placées l'une après l'autre avec un _espace_ entre elles, comme ``"B:2 C#:6"``. Si tu veux
qu'une note dure **4** temps, tu n'as pas besoin d'indiquer de durée (une note de 4 temps s'appelle une _ronde_).
Écris simplement quelque chose comme ``"E"`` sans deux-points (laisse de côté le ``':'``) et sans durée.

Tu remarqueras peut-être que la chaîne de son contient un ``R:1``. Le '**R**' signifie _silence_ (rest) et indique de faire une pause d'un temps.
Un silence est une pause, ou un moment sans bruit, dans le son.


### ~hint

#### Durée

La durée pendant laquelle une note est jouée se mesure en _temps_. Le nombre standard de
_battements par minute_ (bpm) en musique est 120 bpm, soit une demi-seconde par temps. Une _ronde_ dure
4 temps et une _noire_ ne dure qu'un temps.

### ~

## Exemple

Compose les premières notes de la 5e symphonie de Beethoven.

```blocks
let beet5 = "G:1 G:1 G:1 Eb F:1 F:1 F:1 D"
```

## Voir aussi

[Tempo](https://wikipedia.org/wiki/Tempo)

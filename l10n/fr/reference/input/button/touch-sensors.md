# Capteurs tactiles

Certaines cartes ont des broches ou des pastilles qui peuvent fonctionner comme des boutons quand tu les touches. Si tu touches l'une
de ces broches, tu changes ce qui se passe électriquement sur la broche à ce moment-là. Le microprocesseur
relié à la broche peut détecter ce changement et dire qu'il s'agit d'une action de bouton.

Comme avec de vrais boutons, toutes les mêmes actions sont remarquées : appuyer, retirer ton doigt, garder
ton doigt appuyé longtemps, et appuyer plusieurs fois rapidement.

## Toucher résistif

Une façon de détecter le toucher est de modifier la résistance électrique d'un matériau quand il est
touché. Cela signifie qu'on utilise un matériau spécial qui laisse passer plus ou moins d'électricité quand la pression
(comme ton doigt qui appuie dessus) sur sa surface change. Le microprocesseur est relié à ce matériau
résistif et sait quand plus ou moins de courant électrique le traverse. C'est ainsi qu'il sait que tu l'as touché
ou que tu as retiré ton doigt. Le matériau tactile résistif fonctionne aussi avec d'autres objets, pas seulement ton doigt : un stylo,
un crayon ou quelque chose avec une pointe. S'il y a une grande surface de matériau tactile résistif, comme un
écran d'ordinateur tactile, le matériau peut détecter très précisément l'endroit où tu l'as touché
n'importe où sur sa surface.

## Toucher capacitif

Une façon très répandue de détecter le toucher utilise des capteurs tactiles capacitifs. Capacitif signifie qu'on utilise la _capacité_, c'est-à-dire le stockage d'un tout petit nombre d'électrons à la surface d'un matériau. Quand tu touches le
capteur, ton corps devient une partie de la surface de stockage des électrons du capteur. Si tu as un capteur
relié à la masse, le nombre d'électrons, sa _charge_, diminue quand tu le touches. Si tu utilises un capteur non relié
à la masse, la charge augmente quand tu le touches. Dans les deux cas, un circuit de détection peut repérer un toucher grâce au changement de
cette charge.

En fait, un capteur peut être simplement une broche ou une petite zone métallique sur un circuit imprimé. Probablement comme les broches de ta carte. Le microprocesseur a un circuit spécial pour détecter un changement de charge sur une broche et peut savoir quand
tu l'as touchée. Ce qui est pratique avec les broches tactiles capacitives de ta carte, c'est que tu peux simplement les utiliser
comme des boutons.

## ~hint
### Broches tactiles et masse (GND)

Les broches tactiles capacitives de ta carte fonctionnent comme capteurs tactiles toutes seules, **SANS** connexion à **GND**.
Tu peux même y fixer des fils pour faire un capteur plus grand avec un autre matériau conducteur.
## ~

## Voir aussi #seealso

[lors de l'événement](/reference/input/button/on-event)
[est pressé](/reference/input/button/is-pressed),
[lors de l'événement](/reference/input/button/on-event)
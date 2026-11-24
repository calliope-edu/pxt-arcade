# spiele Ton dauerhaft

Spiele einen musikalischen Ton auf dem Lautsprecher. Der Ton hat eine Tonhöhe (Frequenz), so hoch oder tief, wie du willst.
Der Ton spielt so lange weiter, bis du ihn stoppst.

```sig
music.ringTone(0);
```

## #simnote
### ~hint

#### Simulator

``||music:spiele Ton dauerhaft||`` funktioniert auf dem @boardname@. Im Simulator funktioniert es eventuell nicht in jedem Browser.

### ~

Der Ton spielt so lange weiter, bis du ihn mit [``||music:stoppe alle Sounds||``](/reference/music/stop-all-sounds) stoppst.

## Parameter

* ``frequency`` ist eine [Zahl](/types/number), die angibt,
wie hoch oder tief der Ton ist. Diese
Zahl wird in **Hz** (**Hertz**) angegeben, einer Maßeinheit für die Frequenz (_Tonhöhe_).

## Beispiel #example

Spiele einen Ton mit der Grundfrequenz ``440``, verändere ihn aber in Schritten von ``20`` Hertz nach oben und unten.

```blocks
let offset = 0
offset = -100
while (true) {
    while (offset < 100) {
        offset += 20
        music.ringTone(440 + offset)
        pause(300)
    }
    while (offset > -100) {
        offset += -20
        music.ringTone(440 + offset)
        pause(300)
    }
}
```

## Siehe auch #seealso

[pausiere](/reference/music/rest), [spiele Ton](/reference/music/play-tone),
[Tempo](/reference/music/tempo), [setze Tempo](/reference/music/set-tempo),
[ändere Tempo um](/reference/music/change-tempo-by)

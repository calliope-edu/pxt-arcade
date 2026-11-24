# melody Playable

Erstelle eine abspielbare Melodie aus einer eingebauten Melodie.

```sig
music.melodyPlayable(music.baDing)
```

Melodien sind eine Folge von Noten, die nacheinander gespielt werden. Es gibt mehrere eingebaute Melodien, die du in deinen Spielen abspielen kannst. Eine einfache Möglichkeit, deinem Spiel Musik hinzuzufügen, ist, eine der eingebauten Melodien auszuwählen.

## Parameter

* **melody**: eine eingebaute Melodie, für die ein abspielbares Objekt erstellt wird, zum Beispiel `ba ding`, `magic wand` oder `siren`.

## Rückgabewert

* ein [abspielbares](/types/playable) Objekt, das die eingebaute **melody** enthält.

## Beispiel #example

Spiele die Melodie `magic wand`, bis sie fertig ist.

```blocks
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
```

## Siehe auch #seealso

[tone playable](/reference/music/tone-playable),
[string playable](/reference/music/string-playable)

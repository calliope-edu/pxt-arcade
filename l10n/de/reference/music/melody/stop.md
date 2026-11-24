# stop

Halte eine eingebaute Melodie an.

```sig
music.baDing.stop()
```

Wenn die eingebaute Melodie gerade spielt, wird sie angehalten. Wenn du die Melodie erneut abspielst, beginnt sie wieder von vorn. Sie macht nicht an der Stelle weiter, an der du sie angehalten hast.

Es gibt mehrere eingebaute Melodien, die du in deinem Spiel abspielen kannst. In Blöcken wählst du eine Melodie aus einer Dropdown-Liste. In JavaScript verweist du in deinem Code auf eine Instanz einer der eingebauten Melodien. Du rufst die Funktion **stop** über diese Instanz der Melodie auf, und zwar so:

```typescript
music.baDing.stop()
```

## ~ hint

Wie Melodien für Arcade erstellt werden, erfährst du auf der Entwicklerseite [Sound](/developer/sound).

## ~

## Beispiel #example

Spiele die Melodie ``power up`` in Dauerschleife. Warte 5 Sekunden und halte sie dann an.

```blocks
music.powerUp.loop()
pause(5000)
music.powerUp.stop()
```

## Siehe auch #seealso

[play](/reference/music/melody/play),
[play until done](/reference/music/melody/play-until-done),
[loop](/reference/music/melody/loop)

```package
mixer
```

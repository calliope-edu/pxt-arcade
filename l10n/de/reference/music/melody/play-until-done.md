# play Until Done

Spiele eine eingebaute Melodie, bis sie fertig ist.

```sig
music.baDing.playUntilDone()
```

Es gibt mehrere eingebaute Melodien, die du in deinem Spiel abspielen kannst. In Blöcken wählst du eine Melodie aus einer Dropdown-Liste. In JavaScript verweist du in deinem Code auf eine Instanz einer der eingebauten Melodien. Du rufst die Funktion **playUntilDone** über diese Instanz der Melodie auf, und zwar so:

```typescript
music.baDing.playUntilDone()
```

Der Teil deines Programms, der **playUntilDone** aufruft, wartet, bis die Melodie zu Ende gespielt ist. Danach läuft dein Code weiter. Wenn der Code nach der Funktion **playUntilDone** sofort weiterlaufen soll, kannst du stattdessen [play](/reference/mixer/melody/play-until-done) verwenden.

## ~ hint

Wie Melodien für Arcade erstellt werden, erfährst du auf der Entwicklerseite [Sound](/developer/sound).

## ~

## Parameter

* **volume**: eine optionale Lautstärke für die Melodie. Der Bereich reicht von `0` bis `255`. Der Standardwert ist `128`.

## Beispiele #example

### 'BaDing' abspielen #ex1

Spiele den eingebauten Klang `BaDing`.

```blocks
music.baDing.playUntilDone()
```

### 'Power Up' leise abspielen #ex2

Spiele den Klang ``power up`` mit einer Lautstärke von `75`.

```blocks
music.powerUp.playUntilDone(75)
```

## Siehe auch #seealso

[play](/reference/music/melody/play),
[loop](/reference/music/melody/loop),
[stop](/reference/music/melody/stop)

```package
mixer
```

# loop

Spiele eine eingebaute Melodie in Dauerschleife.

```sig
music.baDing.loop()
```

Eine Melodie wird gespielt und immer wieder wiederholt, bis sie mit der Funktion [stop](/reference/music/melody/stop) angehalten wird.

Es gibt mehrere eingebaute Melodien, die du in deinem Spiel abspielen kannst. In Blöcken wählst du eine Melodie aus einer Dropdown-Liste. In JavaScript verweist du in deinem Code auf eine Instanz einer der eingebauten Melodien. Du rufst die Funktion **loop** über diese Instanz der Melodie auf, und zwar so:

```typescript
music.baDing.loop()
```

Dein Programm läuft sofort weiter, nachdem die Melodie in der Schleife zu spielen beginnt.

## ~ hint

Wie Melodien für Arcade erstellt werden, erfährst du auf der Entwicklerseite [Sound](/developer/sound).

## ~

## Parameter

* **volume**: eine optionale Lautstärke für die Melodie in der Schleife. Der Bereich reicht von `0` bis `255`. Der Standardwert ist `128`.

## Beispiele #example

### 'BaDing' in Schleife #ex1

Spiele den eingebauten Klang `BaDing` in Dauerschleife.

```blocks
music.baDing.loop()
```

### 'Power Up' in voller Lautstärke in Schleife #ex2

Spiele den Klang ``power up`` mit einer Lautstärke von `255`.

```blocks
music.powerUp.loop(255)
```

## Siehe auch #seealso

[play](/reference/music/melody/play),
[play until done](/reference/music/melody/play-until-done),
[stop](/reference/music/melody/stop)

```package
mixer
```

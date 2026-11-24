# play

Spiele eine eingebaute Melodie.

```sig
music.baDing.play()
```

Es gibt mehrere eingebaute Melodien, die du in deinem Spiel abspielen kannst. In Blöcken wählst du eine Melodie aus einer Dropdown-Liste. In JavaScript verweist du in deinem Code auf eine Instanz einer der eingebauten Melodien. Du rufst die Funktion **play** über diese Instanz der Melodie auf, und zwar so:

```typescript
music.baDing.play()
```

Dein Programm läuft sofort weiter, nachdem die Melodie zu spielen beginnt. Wenn der Code nach der Funktion **play** warten soll, kannst du stattdessen [playUntilDone](/reference/mixer/melody/play-until-done) verwenden.

## ~ hint

Wie Melodien für Arcade erstellt werden, erfährst du auf der Entwicklerseite [Sound](/developer/sound).

## ~

## Parameter

* **volume**: eine optionale Lautstärke für die Melodie. Der Bereich reicht von `0` bis `255`. Der Standardwert ist `128`.

## Beispiele #example

### 'BaDing' abspielen #ex1

Spiele den eingebauten Klang `BaDing`.

```blocks
music.baDing.play()
```

### 'Power Up' in voller Lautstärke abspielen #ex2

Spiele den Klang ``power up`` mit einer Lautstärke von `255`.

```blocks
music.powerUp.play(255)
```

## Siehe auch #seealso

[play until done](/reference/music/melody/play-until-done),
[loop](/reference/music/melody/loop),
[stop](/reference/music/melody/stop)

```package
mixer
```

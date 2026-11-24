# Funk-Broadcast

Die Erweiterung „Funk-Broadcast“ enthält Blöcke, mit denen du Nachrichten an alle @boardname@-Boards in der Nähe senden und von ihnen empfangen kannst. Es werden nur zwei Blöcke verwendet: einer, um eine Broadcast-Nachricht zu senden, und einer, um Code auszuführen, wenn eine Broadcast-Nachricht empfangen wird.

Eine Nachricht, die eine [Zahl](/types/number) ist, wird an alle @boardname@-Boards in der Nähe gesendet bzw. von ihnen empfangen, die zur selben Funk-[Gruppe](/reference/radio/set-group) gehören.

## Blöcke in dieser Erweiterung

```cards
radio.sendMessage(0)
radio.onReceivedMessage(0, function() {})
```

## Siehe auch

[sende Nachricht](/reference/radio/send-message),
[wenn Nachricht empfangen](/reference/radio/on-received-message)

```package
radio-broadcast
```

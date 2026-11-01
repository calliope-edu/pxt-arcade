# Seitlich scrollendes Rennen: Auto steuern

## {Einführung @unplugged}

Benutze einen Controller-Knopf, damit dein Auto über die Hindernisse auf der Rennstrecke springt.

![Das Auto mit dem Controller-Knopf springen lassen](/static/recipes/side-scroller/03-control-car.gif)

## {Schritt 1 - Sprung bei Knopfdruck hinzufügen}

Wenn der Spieler Knopf **A** drückt, soll unser Auto über die Hindernisse springen können.

Ziehe aus der Werkzeugkasten-Schublade ``||controller:Controller||`` einen ``||controller:wenn A Knopf||`` gedrückt-Block in den Arbeitsbereich.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

## {Schritt 2 - Prüfen, ob das Auto auf der Straße ist}

Springen soll nur gehen, wenn unser Auto auf der Straße ist – keine fliegenden Autos! Deshalb brauchen wir eine Prüfung.

Ziehe aus der Werkzeugkasten-Schublade ``||logic:Logik||`` einen ``||logic:wenn dann||``-Block in den ``||controller:wenn A Knopf||`` gedrückt-Block.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {

    }
})
```

## {Schritt 3 - Auf Wände prüfen}

Ziehe aus der Werkzeugkasten-Schublade ``||scene:Szene||`` einen ``||scene:wenn mySprite Wand trifft||``-Block und lege ihn in den ``||logic:wenn dann||``-Block, anstelle von wahr. Klicke auf das Dropdown-Menü und wähle ``||scene:unten||`` als Richtung der Wand.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {

    }
})
```

## {Schritt 4 - Das Auto springen lassen}

Ziehe aus der Werkzeugkasten-Schublade ``||sprites:Sprites||`` einen ``||sprites:setze mySprite x auf 0||``-Block in den ``||logic:wenn dann||``-Block.

Klicke auf das Dropdown-Menü der Eigenschaft ``||sprites:x||`` und wähle ``||sprites:vy (Geschwindigkeit y)||`` für die senkrechte Y-Achse. Setze den Wert auf ``-200``. So bewegt sich unser Auto mit dieser Geschwindigkeit nach oben und springt.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
```

## {Schritt 5 - Verhalten beim Überlappen hinzufügen}

Wenn unser Auto gegen ein Hindernis fährt, sollen wir das Spiel verlieren. Und wenn es die Ziellinie erreicht, sollen wir gewinnen. Dafür brauchen wir ``||scene:Sprite überlappt Kachel||``-Blöcke.

Ziehe aus der Werkzeugkasten-Schublade ``||scene:Szene||`` zwei ``||scene:wenn Sprite vom Typ überlappt||``-Blöcke in den Arbeitsbereich.

![Sprite überlappt Kachel](/static/recipes/side-scroller/sprite-overlaps-tile.png)

## {Schritt 6 - Hindernis- und Zielkacheln festlegen}

Klicke im ersten ``||scene:wenn Sprite vom Typ überlappt||``-Block auf das Dropdown-Menü mit dem karierten Quadrat und wähle deine Hinderniskachel aus.

Klicke im zweiten ``||scene:wenn Sprite vom Typ überlappt||``-Block auf das Dropdown-Menü mit dem karierten Quadrat und wähle deine Ziellinien-Kachel aus.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {

})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {

})
```

## {Schritt 7 - Spielende}

Ziehe aus der Werkzeugkasten-Schublade ``||game:Spiel||`` **zwei** ``||game:Spielende||``-Blöcke in den Arbeitsbereich – lege je einen in jeden der ``||scene:wenn Sprite vom Typ überlappt||``-Blöcke.

Stelle im zweiten ``||scene:wenn Sprite vom Typ überlappt||``-Block (Ziellinie) die Einstellung von ``||game:Spielende||`` auf **GEWONNEN** um.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    game.gameOver(true)
})
```

## {Geschafft - Spiel dein Spiel! @unplugged}

Das war's! Spiel dein Spiel im Vollbild-Simulator – spring über die Hindernisse und erreiche die Ziellinie! Als Nächstes kannst du verschiedene Arten von Hindernissen hinzufügen oder Plattformen, auf die dein Auto springen kann.

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAA/8z//wAAAMzP/P//wP////////8AAAD//8zM/AAAAADw////AAAAAP////8AAMz8/////8D////PzP//AAD///////8AAADw///P/wAAAADM////AAAAAPD///8AAPD//8zM/8D//8z8////AMD8//z//P8AAAAAAP/PzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAzMjAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDIyMjIyMjIyMDAyMDIyMjIyMjAwMjAyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.vehicle.roadHorizontal",
            "myTiles.tile1",
            "sprites.dungeon.greenOuterEast0"
        ]
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```
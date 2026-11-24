# Minimaps

### Basic usage
Here's the most basic way to use the minimap:
![arcade-screenshot (3)](/static/libs/arcade-minimap/image1.png)
![](/static/libs/arcade-minimap/image2.png)

### Including sprites
To include sprites on the minimap, use the "draw (mySprite) on (myMinimap)" block:
![arcade-screenshot (4)](/static/libs/arcade-minimap/image3.png)
![](/static/libs/arcade-minimap/image4.png)

### Updating the minimap
To constantly update the minimap based on sprite movement and tilemap changes, use "on game update":
![arcade-screenshot (5)](/static/libs/arcade-minimap/image5.png)
![download](/static/libs/arcade-minimap/image6.gif)

### Example projects
See the forums: https://forum.makecode.com/t/minimap-extension-beta/1709

### Performance considerations
If you're updating the minimap with an "on game update" or "forever" block, be aware that this can slow your game down a lot if:
 - many sprites are being draw to the minimap
 - the tilemap is very large
 - the updates are happening faster than every 500ms

If you notice your game running slow, try reducing the speed at which you update the minimap.

Source: [microsoft/arcade-minimap](https://github.com/microsoft/arcade-minimap/tree/v0.6.1) (v0.6.1)

```package
arcade-minimap
```

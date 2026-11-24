# arcade-character-animations

A MakeCode Arcade extension for creating rules that control when animations run on a sprite.

## Basic Rules

To attach animations to a sprite, you first need to create a "Rule" that dictates when the animation will run. Rules are made up of several parts that each describe a sprite's behavior. For example, if we were making a platformer here are some of the rules we might use to control the walking animations:

* Running Right: "Moving" + "Facing Right" + "Is Hitting Wall Down"
* Running Left: "Moving" + "Facing Left" + "Is Hitting Wall Down"

In this example, "Is Hitting Wall Down" is used to check if the sprite is on the ground or not.

If we wanted to add jumping to our sprite, we could create two more rules that look like this:

* Jumping Right: "Moving" + "Facing Right"
* Jumping Left: "Moving" + "Facing Left"

You might notice that one of the jumping rules will be true whenever the running rules are true. In this extension, the most specific rule will always override all of the others. So, if we have a sprite that is moving, facing right, and hitting a wall downwards, the running rule will run since it is more specific (it has three parts instead of two).

### Example: walking in four directions

This example shows how to make a simple top-down style game where you can walk in all four directions.

https://makecode.com/_XV2EmJas4i8o

![A picture of blocks in the top-down example](/static/libs/arcade-character-animations/image1.png)

One way you could extend this example is to add animations when the character is pushing up against a wall!

### Example: sidescrolling platformer

This example creates common animations that you might use in a platformer: running, jumping, and idling.

https://makecode.com/_AD7hpC9pzW47

![A picture of blocks in the platformer example](/static/libs/arcade-character-animations/image2.png)

You could extend this example by adding different animations for when the player is jumping vs falling!

Source: [microsoft/arcade-character-animations](https://github.com/microsoft/arcade-character-animations/tree/v0.1.0) (v0.1.0)

```package
arcade-character-animations
```

---
title: "Visualizing a problem in Chess"
date: 2019-12-03T19:48:28+05:30
draft: false
cover:
    image: /blag/images/chess-problems.png
    style: wide
    caption: Rendered using Blender
tags:
    - tech
    - blender
    - chess
---

So I was interested in this chess puzzle:

![](https://i.imgur.com/PyhIvWY.png)

In this very peculiar position we have to place the black king to a square such that *it is not in check* and with white being next to move *black gets mated in the maximum number of moves*. That is white takes most moves to mate black.

To solve such a problem, we can take help of our friend [Stockfish](https://stockfishchess.org/). Using the online chess website [Lichess's](https://lichess.org/) [analysis](https://lichess.org/analysis/8/8/8/4k3/8/8/PPPK4/RNBQ4_w_-_-_0_1) and [editor](https://lichess.org/editor/8/8/8/4k3/8/8/PPPK4/RNBQ4_w_-_-_0_1) features, we can determine the number of moves to mate for all the available squares.  

Doing such an analysis and collecting the data we get the following chart:

![](https://i.imgur.com/IfyWR5U.jpg)

Which seems quite interesting and promising as we can then deduce that the *safest* place for the black king is in the *upper right center* of the board. Moreover, we see that the squares near the pieces and the edge of the board have lower values as they are places where the black king gets checkmated quickly.

We can then create a 3D representation of this data by giving the squares the height of the numbers in them. Using some [blender](https://www.blender.org/) magic we get the following in 3D:

![](https://i.imgur.com/TSqTVhE.png) 

Which is quite nice to look at. The 4 squares with value of 8 can be seen to dominate and they are surrounded by squares of gradually decreasing height. The transparency gives the feel of volume, and a look on squares hidden from view.

A bit more playing at blender's materials and shading we can beautify the image further:

![](https://i.imgur.com/JYfzd9w.png)

I went ahead and created the white pieces for reference to the problem and we get:

![](https://i.imgur.com/MJ1PcsS.png)

We have this final detailed infographic about the entire thing in one image:

![](https://i.imgur.com/NMcctiw.png)

# Extras

A few changes in the cameras location and focus gives us these few spectacular shots:

![](https://i.imgur.com/rKq7G8o.png)

![](https://i.imgur.com/NchTPnB.png)

And now since I have all the pieces created for chess, I setup an entire board with the starting position in blender:

![](https://i.imgur.com/fdgn0HT.png)

Taking careful look at both the king and the queen, both of them looked out of proportion and awkward. Hence they were modified and we got a new nice setup:

![](https://i.imgur.com/iuN0LLY.png)

And there is one more angle for the last render:

![](https://i.imgur.com/art6dIt.png)

Here is the imgur album for all the images: https://imgur.com/a/kvxUJW6
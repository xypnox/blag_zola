[![Blag screenshot](https://github.com/xypnox/blag/blob/master/static/images/cover.png?raw=true)](https://www.xypnox.com/blag/)

# The Blag

_Used to be the Blog of xypnox, a collection of Literature, Computing and Philosophy_

> This was a earlier variant of blog, built via zola, the current version doesn't use this, instead it is kept with the same repo as xypnox.com's source.

![Deployment](https://github.com/xypnox/blag/workflows/Deployment/badge.svg)

This repository contains the source for my "blag" hosted at [xypnox.com/blag](https://www.xypnox.com/blag/).

The blog is built using [Zola](https://www.getzola.org/), A static site generator written in Rust. It uses a custom theme made specifically for this blog named `xyblag`, which can be found in the [themes/xyblag](https://github.com/xypnox/blag/tree/master/themes/xyblag) directory.

## Usage

`zola serve` to start a local server for live development, the deployment is done automatically through Github Actions.

The specific instructions for the theme are present in the [xyBlag theme's Readme](https://github.com/xypnox/blag/blob/master/themes/xyblag/README.md).

## Theme

![Blag screenshot](https://github.com/xypnox/blag/blob/master/themes/xyblag/screenshot.png?raw=true)

The theme is custom made for specificaly this blog and can be found in the [`themes/xyblag`](https://github.com/xypnox/blag/tree/master/themes/xyblag) directory.

## Credits

The theme used the [Even theme](https://github.com/getzola/even) as a base and was modified into it's current form.

---
title: "My Ubuntu Setup"
date: 2018-05-03T21:09:12+05:30
draft: true
cover:  
    image: /blag/images/Screenshot-Ubuntu-18.04.png
    caption: My desktop setup
    style: wide
tags:
    - linux
    - programming
---

I recently installed the latest release of Ubuntu 18.04. While it was quite nice to begin with I have customized the default Gnome desktop environment to be more minimal and functional. In this post I will share the detailed method on how to make your own installation of Ubuntu similar to mine. You should note that you can pick up and implement only few parts and leave the rest.

# Setting up the Gnome extensions

You need to do some installations to enable a few tweaks to Gnome.

First run update and upgrade to make sure you have the latest packages.

```bash
$ sudo apt get update && sudo apt get upgrade
```

Now we need to install a few packages :

```bash
$ sudo apt install gnome-shell-extensions chrome-gnome-shell
```

Now, install the firefox [extension](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration) to install extensions directly from the Gnome extensions [website]().

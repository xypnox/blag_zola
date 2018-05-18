---
title: "Fontstaller"
date: 2018-05-18T12:02:55+05:30
draft: true
---

I have had troubles installing fonts in linux. Although in Linux Its far more easier than windows where the only way to install a bunch of fonts is to open the fie and click install fonts. In Linux however, you can copy your fonts to `~/.fonts` or `/usr/share/fonts` and they will be recognised by all the applications. But can this process be improved or streamlined?

The main problem that I was facing was that while many sites offered fonts for free they were usually zipped/archived. WHich meant that they would have to be manually unarchived one by one to install the fonts, which considering the amount of fonts (36!) I wanted to install at the time was way too much. So clearly I needed a script to unzip and copy the font files in `~/.fonts`. The problem was that Ubuntu although the `unzip` command is fairly straight forward and could be used I didn't have much control over it.

So I searched some more and stumbled upon the fact that python comes pre loaded  with a zip archive reading library named `zipfile`. And I could spin up a small python script to make the extraction process "smart". By smart I mean that the program could differentiate between a directory containg fonts and archives containg fonts. It can also work with nested directory structure and even detect wether a font has been preinstalled or not.

You can find the code in the github repo [xypnox/fontstaller](https://github.com/xypnox/fontstaller/).

At the default settings the Fontstaller script installs the fonts located in the folder `fonts` in the current directory. It installs all the zips that have a font file. Or any (sub - sub ...) subdirectory (ies) that have a font file (generally ttf, otf).

The fonts are by default copied to the folder `~/.fonts`. An interesting point to note is that the directory structure of your initial `fonts` folder is _not_ preserved. This is to simplify distinguishing already installed fonts. This way the script can easily check only folder names in `~/.fonts` and doesn't have to deal with subdirectory structure.

There are a few command line options to tweak the behaviour of the script, they are mentioned as follows:


|  argument     | default     | description                                |
|  --------     | -------     | -----------                                |
|  -h, --help   |             | show help message and exit                 |
|  --fdir       | 'fonts'     | directory containing fonts                 |
|  --idir       | '~/.fonts'  | directory in which fonts will be installed |
|  --ignorezip  |             | Ignore zipped files                        |


I know there are few bugs that still exist. Such as the fact that the script doesn't deal well with subdirectory structure in the archived files. However it is still quite useful.


If you are interested in he fonts I was installing, check this archived zip:
---

I learnt a few new tricks about python scripting that I would share here.

### Splitting and slicing simultaneously

You split and slice simultaneously by just splicing the output of Splitting command. For example the line in my code that uses it is :

```python
idir = args.idir + '/' + zfile.split('/')[-1][:-4]
```

Here I needed only the name of the archive without the `.zip` extension. So I first split the string using `/` then slice the last element till the fifth last character. Pretty neat.

### Parsing commandline parameters in python

I know its quite dumb to say it's a trick but it took me several readings of Manual and a few different command line parsing methods to flat this one out. I finally ended up using the `argparse` package which is a little hard to begin with but offers a great amount of flexibility and nice user experience such as auto generated `help` command!

It is too much to begin with so I will simply link to its Manual page in Python : [Argparse](https://docs.python.org/3.6/library/argparse.html).

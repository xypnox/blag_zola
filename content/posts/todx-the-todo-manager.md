+++
title = "TodX : The Todo Manager"
date = 2018-11-09


[taxonomies]
categories = ["tech"]
tags = ["tech", "project", "linux", "todo", "python"]
+++

cover:
image: http://www.optipess.com/comics/2018-09-28-927_To-Do_SQ.png
caption: Credit - optipess.com
style: normal
tags: - project - todx - python

So, I have been working this past few weeks on a todo application using commandline interface in Python. You can skip the boring backstory and jump right into installation if you want to.

> The project's source code is available at [GitHub](https://github.com/xypnox/todxpy/)

## Backstory

I recently switched to i3 windows manager just to try it out. And I loved it. I have now become used to living in the terminal. Most of the work except web browsing can be done through the terminal in an efficient way. But i3 is a topic for another post.

I was using TickTick for managing my todos till this point. Since TickTick doesn't have a native linux interface, it was a pain to use on the desktop. Sure it had extensions for both chrome and firefox and had great sync capabilities but if you wanted to use it you had to open a whole browser and use the mouse to open the TickTick extension. It took a lot of time just to add a todo, which _should_ be a very easy task in and of itself.

Hence I started looking for a commandline todo app that could sync to Android. It should be simple and fast, thats it, and guess what I couldn't find one single app that could do it. Most apps didn't even have a native linux app let alone cli. Those fast cli apps were mostly single bash or python scripts and could not sync at all. The GUI todo apps for linux were essentially like text editors huge and clunky.

Hence I set forth to make one of my own which centered on speed, ease of use, sync capability and customizability. And it should obviously be crossplatform.

> Sync doesn't work yet

## Installation

> Command enetered in terminal have a `$` before them. The output of the terminal doesn't have the `$`.

You can install todx using pip:

If you are using Ubuntu or a Ubuntu based distro:

```bash
$ pip3 install todx
```

otherwise:

```bash
$ pip install todx
```

> By default Ubuntu's pip is for python2 and hence we need pip3 to install the todx for python3

To check if it installed correctly run the command:

```bash
$ todx --version
```

It should return something like `TodX v0.1.2`. If it shows any error message file an Issue in the [github repo](https://github.com/xypnox/todxpy/issues).

## Usage

You can view your todos using the simple command:

```bash
$ todx
```

If you have just installed todx, you wont get any output.

To add a new todo run:

```bash
$ todx add Make a great website
Added todo:  ☐  Make a great website
```

This will add a new todo "Make a great website". You can run `todx` again to see that the new todo has been added. The empty box `☐` is not a missing unicode charecter, it is a checkbox and it indicates that the todo has not been marked yet.

To mark a todo run:

```bash
$ todx mark
0 ☐  Make a great website

Which todo you want to mark: 0
What is your new status: v
```

This command lists the todos with indexes and asks which todo to mark. Here we choose the `0` and then the command asks what the status you want to be.

Here we have chosen `v` since it closely resembles the tick. When todx displays the todos it changes the `v` to a `☑`. Neat. But what if you prefer `☒`? Just use `x` instead of `v`. To unmark a todo just use a space in the status.

Now if you run `todx` you will see that once you marked your todo you can't see it. This is because by default `todx` only shows unmarked, in other words, not done todos. If you want to view all the todos, marked and unmarked you can run:

```bash
$ todx view
☑  Make a great website
```

Now lets create another todo:

```bash
$ todx add oops i did it again
```

Oh no. I didn't wish to create this todo.

You can delete it using:

```bash
$ todx del
0 ☑  Make a great website
1 ☐  oops i did it again

Which todo you want to delete: 1
Are you sure buddy? [Y/n] Y
```

You select your todo just like in the `todx mark` command. And then it confirms wether you really want to delete your todo. (ProTip: If you just press Enter at the confirmation, it assumes yes)

Just run `todx` or `todx view` to check that you have successfully deleted a todo. There is no trash feature yet so the deleted todo **cannot** be recovered.

This much is everything you need for a simple basic commandline todo app.

TodX is simple yes, but not basic.

## Advanced commands

You mave have noted the absence of quotes while using the `todx add` command. You can definetly do `todx add "Some todo"` but it takes time to add those quotes and it doesn't feel elegant. Hence todx is designed in a way to eliminate the need for the quotes. You can always use quotes if you want to be more pragmatic.

You can use `-a` instead of `add` and `-m` instead of `mark`.

### Tags

Let us say you want to organize your todos. Say that you want to sepearate your homework todos from your personal projects. It would be nice to have two different todo lists for both. But maybe you might have two lists of _holiday_ and _thing to buy_, now if you want to add a todo _Buy a swimsuit_ You may want to add it to both of your lists, but this will introduce redundancy.

To simplify this problem, todx uses **tags**. Each tag starts with a `+` followed by a word, if there are several words use dashes to join them. You can add a tag to a todo while creating it by simply writing `+tagname` anywhere after the add command. (Although it is recommended to add them at the last since it is how they are displayed)

So lets add a todo with a tag:

```bash
$ todx add Complete math homework +school
```

When you view the todos:

```bash
$ todx
☐  Complete math homework  +school
```

Let us add another todo:

```bash
$ todx add Make science project +school +projects
```

Now to view todos of only `project` tag, use the command:

```bash
$ todx +project
+ project
☐  Make science project
```

Wow, It only displays undone todos of tag project. What if you want to view all todos? Just run:

```bash
$ todx view +project
+ project
☐  Make science project
```

### Sync

All the data of todx is stored in a single `data.json` file (in linux located at `~/.local/share/todx/data.json`). Since this file is a json, it can be easily synced with a remote server and can be used in any other app that might support the json format. Android and Web apps can de made that use this extendability.

### Customizability

Currently things like done markers that define which status elements are marked as done and unicode charecter replacements (`☐`, `☑` etc) are stored in `settings.py` in the main code. I intend to make a `settings.json` file similar to `data.json` to add user customizability.

## The Bash setup

Since `todx` is commandline tool we can easily mix and match it with other commandline tools to create beautiful things. I created a simple script to run everytime I start my terminal telling me the current weather, a smal quote and my todos. Here is a screenshot:

![](/blag/images/todx-setup-bash.png)

## What I learnt

It was and is an exhilarating project. I leant a lot of new stuff and revised old python skills in the process. Firstly I got to finally and successfully save and load data from json files into userdefined python objects.

Next I got to know about [appdirs](https://github.com/ActiveState/appdirs) package which let me use default os directories to save datafiles.

I also learnt how to process command line parameters and install the package as a binary rather than just a library.

And finally I got to learn about the python packaging tools. I learnt how to make a package and how to publish it to pypi. Fun fact : TodX is listed in the [pypi](https://pypi.org/project/todx/). Making a python package takes some getting used to and can be daunting for many beginners. I almost quit my plan putting the package on pypi in the process. Perhaps I would make a blogpost describing the process.

## The Future?

Indeed this is just the beginning of TodX. I have several plans about todx which I would like to implement as soon as I get time to work on it. Some of them include:

- Making a server and syncing `data.json`
- Adding tests
- Adding tty colors to make the program more beautiful
- Adding created time and due date with support for notifications
- Hopefully creating a simple android app to sync with (currently TodX runs nicely in [Termux](https://termux.com/))

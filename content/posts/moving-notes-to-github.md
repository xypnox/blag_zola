+++
title = "Moving Notes to Github"
date = 2019-01-25

[taxonomies]
categories = ["tech"]
tags = ["tech", "notes", "project", "git", "github"]
+++

{% cover(src="/blag/images/notes.jpg") %}
Photo by Brannon Naito on Unsplash
{% end %}

I never had a unified place to store notes earlier. I usually just remembered important things and wrote down the other things anywhere I liked. But after a year in college I could not keep on remembering everything. I should make it clear early on that I do not take extensive notes. I only jot down things that I find important like thoughts, quotes, project ideas, some literature etc. I had always looked for a simple note taking solution. My ideal note taking solution required the following:

- Easy and quick to store notes (The longer it takes to note something down the less motivated I am to note it down)

- Should be backed up (Its important! you don't want to loose that groundbreaking idea in a device failure)

- Service Independent/Personal (I don't trust them, I will be limited by what the service has to offer)

- Flexibility (I should be able to store everything and anything and organize it to my liking)

- Supports multiple devices (Using a single device for note taking is just plain stupid)

## Backstory

> This is a backstory covering ll the apps I used before turning to Github. Feel free to skip this section.

So, I have tried to find an ideal service with the above features for a long long time. I used to use [Evernote](https://evernote.com/) a long time ago. In fact It might have been my first note taking app. But that was before I switched to Linux. In linux the scenario becomes a lot tougher. The services available always seem to lack something or another. Either they do not sync, are limited only to linux, or are proprietary. A service that I really liked was [Simple Note](https://simplenote.com/). It was a very minimal note taking app from the creators of wordpress and had seamless sync between devices. I actually used it to store notes for some time rather than just testing it and hating and moving on.

But like every thing in this world, it was imperfect. It was very limited in the type of notes it could store, the management of notes was very primitive. And, simple note didn't use great encryption. At that time, I didn't need a note taking service desperately and hence I slowly stopped using Simple Note. Simple note's desktop client was based on electron.

Later on, with the improvements in electron, several note taking apps emerged in the wild. I really loved the ideas behind them, Markdown support, minimal design, live rendering to get a WYSIWYG like feel. But the catch was that there was no organization or sync. You just edited a markdown file and saved it to your device. I then started using my text editor (Atom at that time) as my note editor just because one electron was already too much for an old PC. I saved them in the documents folder. No sync no search nothing. (I did not know linux search from command-line because I was used GUI most of the time)

A few note apps designed specifically for programmers like [Larvena](https://laverna.cc/), Never got it running, [arbicotine](http://abricotine.brrd.fr/), Really liked this one, plus it was open source but developers responded slowly to issues, [Boostnote](https://boostnote.io/), A very full featured note taking application which was simply overwhelming to my tiny brain, [Tag Sapces](https://www.tagspaces.org/), What the hell was this? tags for all your files, like seriously? All these applications felt like using a chainsaw to open a can of coke. They aimed to be too ambitious but lacked the basics.

On the Android landscape, things weren't any better. The thing with cross-platform applications is that most often you end up with an awesome application on one platform and a barely usable one on others. Very few applications are actually good on all the platforms that they support. Back then, I used to download and install gazillions of applications and I can say that I have tried my fair share of note applications for android. I didn't use Evernote on android because I started using android a long time after I left Evernote for desktop.

I did encounter a few great applications for android though. The first one was [Monospace](https://play.google.com/store/apps/details?id=com.underwood.monospace). It was a minimal markdown note editor. It did a things beautifully, It was unobtrusive and used tags for organization. However It did not have any sync and since I used mobile as a secondary device, it was a deal breaker. I also used apps similar to Monospace, such as [JotterPad](https://play.google.com/store/apps/details?id=com.jotterpad.x), [Writer+](https://play.google.com/store/apps/details?id=co.easy4u.writer) etc But they were worse than Monospace and I left them in few hours of usage.

If a note editing app stood as a great example of design, It would be [Material Notes](https://play.google.com/store/apps/details?id=com.dinosaur.cwfei.materialnotes). It was such a beauty to use. The notes were colored and the usage of monospace font was just icing on the cake. But this app didn't do anything else. I used it only to store word meanings while I read the works of Robin Hobb. It was a beautiful app but not a great option for general note taking.

An app that was almost perfect was [Notebook](https://play.google.com/store/apps/details?id=com.zoho.notebook) by Zoho. It was a great experience to use. Notes were arranged into notebooks, several media attachments could be made, and the editing, though not markdown, was quite good. It offered sync to servers of Zoho and also had a desktop web version. However, It just felt a little off. The app seemed that it was a bet project which lacked polish and the web version was just OK, the web-clipper was terrible.

I also used [iAWriter](https://play.google.com/store/apps/details?id=net.ia.iawriter). The greatest plus was the ability to sync to Google drive. But since Google drive does not have a sync app for Linux and the web version of Drive displays markdown as a bunch of unprocessed text just irritates the hell out of me. I do like the swipe navigation, minimal look, night mode with absolute blacks and export options of iAWriter. But a weird bug related to switching to different application makes you loose the note that you just typed for last half hour just made me feel helpless. The same happened when you switched different device orientations. With such a critical flaw, I simply decided to move on.

I moved on again. And I finally have setup a workflow for storing notes that I can see myself use in the near future. Although, like always, I will switch to the next hot thing :wink:.

## The setup

I use [Typora](https://typora.io/) to write notes on Laptop. It is a brilliant markdown editor and one of the primary reasons I prefer the current setup. Typora is built on electron but since I do not use an ancient PC anymore, I do not need to worry about electron apps taking too much RAM on my laptop. Typora is currently in beta and is available for free. Similar text editors exist and you can use those as well. But having tried a few, I find typora very polished and reliable. I use it even to write my blog posts. In fact, this very blog post was written on Typora.

It has all the basics right. A minimal interface, themeable, relatively fast, different edit modes, syntax highlighting for code bocks, emojis, math support with latex syntax, shortcuts for markdown syntaxs, and inline display of image urls. What more can you ask for from a text editor? Git integration maybe :thinking:. And I even made a [theme for Typora](https://theme.typora.io/theme/Xydark/) to match my system.

On the Android side, I have gone completely sadistic. I use Keep to store the quick thoughts that I come across and since keep is very usable and quick, I do not need a completely overpowered app for android.

## Sync

> "But they are two completely different applications, How do you sync them?"

Simple answer, Manually. I do not need to write down everything I usually just put small hints and important points on Keep and then copy them over to my desktop editor by using Keep's fairly decent web interface. Then I finally edit and store the _good version_ if the note. It is a hard thing, and I do not have my notes as editable on mobile but it is an acceptable compromise to make, At least for me.

Now comes the real magic. Sync from desktop to Github. Unless you have been living under a rock you may know that Github recently announced free unlimited repos with at most three collaborators. This means that although you can't move your exponentially increasing startup to GitHub for free, you can move personal stuff If you weren't a student developer already. With the announcement of free private repos, you can reliably store your data on github just like all your code and GitHub is good enough to provide a decent web experience while reading markdown files.

But the hard part is to sync the local repo. If you have ever used git, you would know that to actually save your work, You have to _Save the file_ -> _Add it to staging_ -> _Write a decent Commit message_ -> _Push it to github_ -> _Provide password if using HTTP_. This whole chore is enough to drive anyone crazy. But there are ways to avoid this. And here I present my solution:

I use a bash script to automatically check for any changes to files, then add them to staging, commit them using a somewhat descriptive message, then pull any changes on github, finally push to github. I have also configured cache credential store for git that saves the github login passwords so that I do not have to enter it manually. Then finally, I have added a cronjob for every 15 minutes to run the sync script so It updates my notes to github automagically.

Here is the bash script:

```bash
#!/bin/bash

gstatus=`git status --porcelain`

if [ ${#gstatus} -ne 0 ]
then

    git add --all
    git commit -m "$gstatus"

	git pull
    git push

fi
```

The beauty of this script is the `git status --porcelain` command. It outputs a concise message about all the files that were modified. It can be used for both checking that if there was any change in the folder and also as a commit message.

With the sync setup, I had to copy all the notes from previous services cause why not. It was just a matter of copy and paste. I am now left to my imagination to fill the repo with future notes.

_Happy Note taking_

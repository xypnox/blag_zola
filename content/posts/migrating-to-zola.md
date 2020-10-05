+++
title = 'Migrating to Zola'
date = 2020-10-05
draft = true

[taxonomies]
categories = ["tech"]
tags = ["tech", "blog", "zola", "theme"]

+++

# Migrating to Zola

I recently migrated my _blag_ from Hugo to Zola. I made my own theme for this blog and it was a blast! I will discuss the why and the how in this post.

# The Why?

## What's wrong with Hugo?

In terms of features and ecosystem, Hugo defeats Zola every day. I started using Hugo for the blog about 3 years ago. I used the [Minimo](https://minimo.netlify.com/), It was a minimalist, a sleek and modern theme. The theme was one of the primary reasons why I started using Hugo in the first place, I already got a nice looking blog and with minimal customization of typography and colors, I could give it a unique look.

And it worked, the blog looked nice and loaded fast, looked beautiful and worked nicely. But as time moved on, the author of the theme continued adding features which were useful and nice to have, albeit useless for me. For example, search, widgets, translations, sidebar etc. I had to disable several of these in the config file. And with every update, there were a few changes and additions that required me to edit the config file even though I wasn't going to use them.

With the continuous updates of useless features, I decided to fork the theme into a [custom one (which I named blag-theme)](https://github.com/xypnox/blag-theme). Adding my mods directly into the theme did simplify a few "hacks" I used to customize the blog. But slowly It dawned on me that I was using very few of the features that were offered by this theme. And editing it was just painful as it was a large and complicated one, partly because of additional features and partly because of the theming and templating system of Hugo itself.

Till now, I was still satisfied with the theme. Even though it looked a mess behind the scenes, and even though I had given up on either simplifying or creating a new theme (in Hugo), the blog still looked fine and was very readable for the end-user.

But, these are the modern times that we live in. While I was working on the [LTTKGP](https://lttkgp.com/) project, my fav thing I did was the inclusion of dark theme in the frontend. It looked sick. And I wondered if it would be possible for me to have a dark theme for my blog as well. However, the monolith like templates got the better of me and I held off. There I was, wishing I could have a dark theme and there was Hugo, scaring me nuts with its complexity.

And it wouldn't be an overstatement to say that Hugo's current ecosystem makes it very hard for someone to create a new theme for scratch, or even significantly modify a theme, without going through tons of pages of documentation; Almost like learning almost an entire "framework". It is often the case that those starting with hugo just stick to one of the pre-existing themes and don't put any effort in customizing it, simply because it is too hard to customize.

## Enter Zola

Fast forward a few weeks ago, I was browsing the "Explore" page on github and was looking at popular repositories, and there I found Zola, as static site generator written in Rust. As it happens, Zola had existed from a long time, but due to it being written in rust and having a more lightweight approach, it wasn't as popular. And frankly, had I not fallen in love with rust earlier I would have also given it a pass.

With recent exposure to the Rust ecosystem, I have developed a view that _the developers that are using rust try to "think" and "reason" about their applications a lot more than other languages_. And I understand that this may very well be wrong. With this viewpoint, when I discovered Zola, I started reading it's docs and comparing how it approached the "Static Site Generator" tool.

Zola's take on SSG is quite different from other systems such as Jekyll and Hugo.

It doesn't have a plugin system. Everything that matters, or what the author considers matters, is built in the single binary. It includes: Sass compilation, syntax highlighting, ToC etc. And if you want to add others, just include the javascript libraries in the templates!

It's rust, therefore it's fast. Speed isn't that much of an issue for small blogs such as this one, but still faster compilation means faster hot reload in dev mode when you edit your themes.

It is intuitive. And even though it may not make much of a difference for those who have the time to sift through the documentation of other SSGs, it was for me. I don't want to spend months reading documentation and configuring the website, especially a blog that won't ever generate me any revenue. Zola makes things obvious. You can look at the directory structure of this blog below and have a fairly good idea what each folder is for:

```
blag
├── content
│   ├── pages
│   └── posts
├── static
│   ├── css
│   ├── icon
│   └── images
└── themes
    └── xyblag
        ├── sass
        ├── static
        └── templates
            ├── categories
            ├── shortcodes
            └── tags
```

That is the entire directory structure, including that of the theme. Posts can have individual directories to store images related to them, but that doesn't concern us.

For comparison, Here is the directory structure of Hugo that I used earlier with the theme for fairness:

```
blag
├── archetypes
├── content
│   ├── page
│   └── posts
├── static
│   ├── css
│   ├── icon
│   └── images
└── themes
    └── blag-theme
        ├── archetypes
        ├── data
        │   └── config
        │       └── default
        ├── exampleSite
        │   ├── content
        │   │   ├── authors
        │   │   ├── docs
        │   │   │   └── res
        │   │   ├── page
        │   │   └── tags
        │   │       ├── config
        │   │       └── og
        │   ├── data
        │   │   ├── authors
        │   │   ├── comments
        │   │   │   └── 33deba780bf80cacf2627abf7a22fec7
        │   │   └── config
        │   └── static
        │       ├── css
        │       ├── images
        │       └── js
        ├── i18n
        ├── images
        ├── layouts
        │   ├── _default
        │   ├── page
        │   ├── partials
        │   │   ├── comments
        │   │   │   └── staticman
        │   │   ├── data
        │   │   │   └── author
        │   │   ├── entry
        │   │   │   └── meta
        │   │   ├── extras
        │   │   ├── footer
        │   │   ├── head
        │   │   │   └── opengraph
        │   │   ├── header
        │   │   ├── list
        │   │   ├── nav
        │   │   │   └── menus
        │   │   ├── sidebar
        │   │   ├── svg
        │   │   └── widgets
        │   ├── shortcodes
        │   └── taxonomy
        ├── scripts
        ├── src
        │   ├── scripts
        │   │   └── search
        │   └── stylesheets
        │       ├── elements
        │       ├── extras
        │       │   ├── mixins
        │       │   └── variables
        │       ├── forms
        │       ├── hugo
        │       │   └── shortcodes
        │       ├── layouts
        │       │   ├── entry
        │       │   ├── others
        │       │   ├── sidebar
        │       │   └── widgets
        │       ├── navigation
        │       │   └── menus
        │       └── typography
        └── static
            ├── assets
            │   ├── css
            │   └── js
            └── images

```

Good luck understanding that! (I couldn't)

You can see with the above example the simplicity and sensibility of Zola.

When I used Hugo, I was so scared of it that I never dealt with the auto-deployment side of things. I manually generated the blog on my machine and pushed it to GitHub like a 19th century peasant.

With Zola, setting up auto-deployment was as easy as creating a [github action](https://www.getzola.org/documentation/deployment/github-pages/#github-actions).

# The How?

Now that I have raved so much about Zola how was the actual migrating experience? To sum it up, smooth with a few hiccups.

Migrating a blog is pretty much like moving into a new home. You have all of your furniture and appliances (your posts) which you arrange in the new home, with fancy wallpapers/wall paint, curtains etc. (themes) and hope that the layout (permalinks) remain same so that the old visitors can easily find their way in the new home.

## The links must be the same

The point of making the permalinks the same is very very important. If you break the links that initially pointed to the previous posts you would be contributing to [Link rot](https://en.wikipedia.org/wiki/Link_rot). So your content's links should be the same when you switch to the new blog.

The link of my blog posts have the structure of `xypnox.com/blag/posts/<slug>`.To achieve the same structure I had to put the markdown files in `content/posts/` with a `_index.md` in the posts directory with:

```markdown
+++
transparent = true
redirect_to = "/"
+++
```

The transparent config says that the posts in this directory are meant to be pushed one directory up, so that they appear in the index list. And if someone visits the `/posts/` URL, they will be redirected to the homepage `/`.

The specific about pages such as [About](/about), [Quotes](/quotes), [Why xypnox](/why-xypnox) had configuration like:

```markdown
+++
title = "About"
path = "about"
template = "about.html"
+++

Markdown content of the page
```

So that when someone visits `/about/` path, they see the about page!

## Configuration is easy

The configuration ideology of Zola is quite simple: You opt-in for the things you need. And the only necessary variable required in the `config.toml` is `base_url`! This approach makes it easier to understand and maintain your blog as you are only dealing with what you are using explicitly. This includes code highlighting, search index, sass compilation, feed generation, taxonomies etc.

When you start using a theme, some of the themes will require you to setup these variables such as taxonomies because the themes have this feature.

## Templating is solid

Zola uses the [Tera](https://tera.netlify.app/) templating engine. It is inspired by Jinja and Django's templating engine and therefore if you have prior experience with these, it will feel like home. And even if you are new, it is quite simple to understand and use.

Most of the code for the theme will be written as templates that will be used to render your blog. You can always use pre-existing themes as a starting point. I used the [Even theme](https://zola-even.netlify.app/) as it was quite basic and it's layout was similar to my previous Hugo based blog. Needless to say, the current theme is a huge change from the Even theme.

If you need to include any javascript files or other links, you can add them in the template. A tweak that I did to improve the loading performance was to put the [slideout.js](https://slideout.js.org/) script with the static files so that when the page loads it doesn't do a request to another server just for a small javascript file.

## Sass: Make it pop

The styling is handled via SASS, and I love it. I have used SASS in a lot of my previous projects and I love the variables, mixins and nested styles. It just ends up making your stylesheets a lot more readable and maintainable.

Even theme had a great Underline from center animation that is applied to the menu links and in the Index and Taxonomy lists. I modified the animation to add a little glow and thicker line with rounded corners.

Moreover, even though I like the summaries in the original theme, I found it not so useful in my theme. Firstly because to use the summaries I would have to add a `<!-- more -->` comment to specify where to break and usually the summaries would not be of definite length. Hence, the index page just has the post title and the category with date. I hope that is enough to make someone load the page, and you can always go back. One unintended but happy consequence of removing the summaries is that people will open the article to view the full contents more often!

## You want it darker?

If you haven't seen the dark mode yet, do so right now! (The switcher is at the top menu bar, and in mobile it is in the sidemenu). You can also do it by the switch below!

<div class="theme-switcher">
<div class="theme-button" onClick="toggleTheme()">
    <label for="cb1">
        <svg
            id="dayIcon"
            style="enable-background:new 0 0 35 35;"
            version="1.1"
            viewBox="0 0 35 35"
            x="0px"
            xml:space="preserve"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            y="0px">
            <g id="Sun">
                <g>
                    <path
                        d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5 S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z
                            M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5
                            C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6
                            C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9
                            c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44
                            l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5
                            c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06 L6.439,8.561z
                            M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z
                            M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2
                            C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29
                            c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7
                            C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5
                            c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z"
                        style="fill-rule:evenodd;clip-rule:evenodd;"/>
                </g>
            </g>
        </svg>
    </label>
    <input class="toggle" id="cb1" onClick="toggleTheme()" type="checkbox"/>
    <label class="toggle-button" for="cb1"></label>
    <label for="cb1">
        <svg
            enable-background="new 0 0 100 100"
            id="nightIcon"
            version="1.1"
            viewBox="0 0 100 100"
            x="0px"
            xml:space="preserve"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            y="0px">
            <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571
            C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23
            c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369
            c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65 c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z"/>
        </svg>
    </label>
</div></div>



And there it is the dark mode in all it's glory. To add the dark mode to the theme, I had to restructure the colors to use CSS variables and then I could change them whenever the theme switched at the base itself. This also meant that since I was always using the CSS variables, later update would force me to take care of the dark mode as I will not forget to add and change the variable in the dark mode as well!

There are a few things to take into consideration while adding dark mode to your site:

- Does your site have elements that need more than color variables to switch the theme? For example, Wikipedia's equations are rendered SVGs so it is harder to change it's color.
- The theme preference should be stored locally so that subsequent revisits have the same preference.
- The theme should respect [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) setting of the user if it can't find the preference in the `localStorage`.
- When the site loads, it shouldn't load the light theme or dark theme by default and then switch on detecting the user's preference. This will make a flash of light before switching to the dark mode and vice versa.

These can be solved by including a little bit of Javascript just before the main content of the body. The trick here is that this bit of code is executed and only after it's evaluation is the rest of the code executed. Here is the JS code that looks and sets the theme on page load of this blog:

```javascript
(function initTheme() {
    let body = document.getElementsByTagName("body")[0];

    if (window.localStorage.getItem("theme") !== null) {
        if (window.localStorage.getItem("theme") === "dark") {
            body.setAttribute("data-theme", "dark");
        } else {
            body.setAttribute("data-theme", "light");
        }
    } else {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.setAttribute("data-theme", "dark");
        }
    }
})();
```

 

And that switcher that comes in between this post? That is plain HTML copied from the theme code. Also, it triggers the same function that changes the theme.

 
+++
title = 'Migrating to Zola'
description = "The How and the Why of the switch from Hugo to Zola."
date = 2020-10-05

[taxonomies]
categories = ["tech"]
tags = ["tech", "blog", "zola", "theme"]

[extra]
metadata_image = "/posts/migrating-to-zola/cover.png"

+++

{% cover(src="cover.png") %}
The two sides of the Yin and Yang combine to provide ultimate harmony!
{% end %}

I recently migrated my _blag_ from Hugo to [Zola](https://www.getzola.org/). I made my theme for this blog and it was a blast!

I will discuss the why and the how in this post.

# The Why?

In terms of features and ecosystem, Hugo trumps Zola any day. Then why did I switch?

## What's wrong with Hugo?

I started using Hugo for the blog about 3 years ago. I used [Minimo](https://minimo.netlify.com/), a minimalist, sleek and modern theme. It was one of the primary reasons why I started using Hugo in the first place. I could give it a unique look with minimal customization of typography and colors. And it worked, the blog loaded fast, looked beautiful, and worked nicely.

But as time moved on, the author of the theme started adding features which were generally useful and nice to have, but useless for me. A few of those were search, widgets, translations, sidebar, etc. I had to disable several of these in the configuration. And with every update, there were always a few changes that required me to edit the config file even though I wasn't going to use them anyway.

After several such continuous updates of useless features, I decided to fork the theme into a [custom one (which I named blag-theme)](https://github.com/xypnox/blag-theme). Adding my mods directly to the theme simplified the "hacks" I had used earlier to customize the blog. But slowly it dawned on me that I wasn't using even half of the features that were offered. And editing it to simplify the theme was painful, partly because of too many features and partly due to the theming and templating complexity of Hugo itself.

Yet, I was satisfied. Even though it looked a mess behind the curtains, and even though I had given up on either simplifying or creating a new theme (in Hugo), the blog still looked fine and was readable/usable for the end-user.

But, these are modern times we live in. While working on the [LTTKGP](https://lttkgp.com/) project, my fav thing was the dark theme. It looked sick. And I wondered if I could have a dark theme for my blog as well. However, the monolith like templates got the better of me and I held off. There I was, wishing I could have a dark theme and there was Hugo, scaring me nuts with its complexity.

And it wouldn't be an overstatement to say that Hugo's current ecosystem makes it very hard for someone to create a new theme for scratch, or even significantly modify a theme without going through pages and pages of documentation; Almost like learning an entire "framework". It is often the case that those starting with Hugo just stick to one of the pre-existing themes and don't put any effort into customizing it, simply because it is too hard to customize.

At the time when I created the blog in Hugo, it was all the rage. Almost everyone I knew personally used Hugo for their blogs. Then as time passed more "modern" SSGs were invented such as [Gatsby](https://www.gatsbyjs.org/) and [Next.js](https://nextjs.org/). I disliked Gatsby because it felt too processed and complex for something so simple as a blog. I have given Next.js a try in my [Poem Collection](https://poems.xypnox.com/) but I didn't find it exciting enough to switch over.

## Enter Zola

Fast forward a few weeks ago, I was browsing the ["Trending" page on GitHub](https://github.com/trending/rust?since=daily) and was looking at popular repositories, and there I found [Zola](https://www.getzola.org/), a static site generator written in [Rust](https://www.rust-lang.org/). As it happens with several projects, Zola was created long ago but I got to know about it now. Due to it being written in Rust and having a minimal approach to SSGs, it wasn't as popular. And frankly, had I not fallen in love with rust earlier I would have also given it a pass.

With my recent exposure to the Rust ecosystem, I have formed a view that _the developers that are using rust "think" and "reason" about their applications a lot more than other languages_. And I understand that this view may very well be wrong. This was my viewpoint when I discovered Zola, and I immediately dove in, skimming it's docs and comparing how it approached a "Static Site Generator".

Zola's take on SSG is quite different from other tools such as Jekyll and Hugo.

1. _It doesn't have a plugin system._ (At least as of now) Everything that matters, or what the author considers matters, is built in the single binary. It includes: Sass compilation, syntax highlighting, ToC, etc. And if you want to add others, just include the javascript libraries in the templates!

2. _It's rust, therefore it's fast._ Speed isn't that much of an issue for small blogs such as this one, but still faster compilation means faster hot reloading in dev mode when you edit your themes.

3. _It is intuitive._ And even though it may not make much of a difference for those who have the time to sift through the documentation of other SSGs, it was a big deal for me. I don't want to spend months reading documentation and configuring the website, especially a blog that probably won't ever generate any revenue.

You can look at the directory structure of this blog below and have a fairly good idea of what each folder is for:

```
blag
├── content
│   ├── pages
│   └── posts
├── static
│   ├── css
│   ├── icon
│   └── images
├── sass
└── themes
    └── xyblag
        ├── sass
        ├── static
        └── templates
            ├── categories
            ├── shortcodes
            └── tags
```

That above, is the entire directory structure, including the theme. Posts can have individual directories to store assets, but that doesn't concern us.

For comparison, Here is the directory structure of Hugo that I used earlier with the theme for fairness (_feel free to skip through this code block_) :

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

You can see with the above example the simplicity and sensibility of Zola. And it carries through to other aspects of its usage as well.

When I used Hugo, I was so tired that I never dealt with the auto-deployment side of things. I manually generated the blog on my machine and pushed it to GitHub like a 19t- century peasant.

With Zola, setting up auto-deployment was as easy as creating a [Github Action](https://www.getzola.org/documentation/deployment/github-pages/#github-actions).

All of the benefits of Zola, it's simplicity, ease of use, intuitiveness, all batteries included, and a solid base of rust was enough for me to give it a spin. The auto-deployment was the cherry on the cake!

# The How?

Now that I have raved long enough about Zola, how was the migrating experience? To sum it up, _smooth with a few hiccups_.

Migrating a blog is like moving into a new home. You arrange all of your _furniture and appliances_ (your posts), and decorate the house with _fancy wallpapers/wall paint, curtains, etc._ (themes) and hope that the _location_ (permalinks) remains the same so that the old visitors can easily find their way when they come again.

## The links must be the same

Making the permalinks the same is _very very important_. If you change the links that initially pointed to the old posts you would be contributing to [Link rot](https://en.wikipedia.org/wiki/Link_rot), the people who may have referenced your posts would have broken links. And a visitor arriving at your blog would see the disgraceful 404 page! So your content's links _must_ be the same when you switch to a new SSG.

The link of my blog posts has the structure of `xypnox.com/blag/posts/<slug>`.To achieve the same structure I put the markdown files in `content/posts/` with an `_index.md` file in the posts directory with:

```markdown
+++
transparent = true
redirect_to = "/"
+++
```

The `transparent` tells Zola that the posts in this directory are meant to be pushed one directory up so that they appear in the index list. And if someone visits the `/posts/` URL, they will be redirected to the homepage `/`.

The specific pages such as [About](@/pages/about.md), [Quotes](@/pages/quotes.md), [Why xypnox](@/pages/why-xypnox.md) have configuration like:

```markdown
+++
title = "About"
path = "about"
template = "about.html"
+++

Markdown content of the page
```

So that when someone visits `/about/` path, they see the about page! And the template used to render is `about.html` which as defined in the theme, doesn't have the comment section.

## Configuration is easy

The configuration ideology of Zola is quite simple: _You opt-in for the things you need._ And the only necessary variable in `config.toml` is `base_url`! This approach makes it easier to understand and maintain your blog as you are only dealing with what you are using explicitly. This includes code highlighting, search index, sass compilation, feed generation, taxonomies, etc.

When you start using a theme, some of the themes will require you to set up these variables such as taxonomies because the themes require them to render properly.

## Templating is solid

Zola uses the [Tera](https://tera.netlify.app/) templating engine. It is inspired by Jinja and Django's templating engine and therefore if you have prior experience with these, it will feel like home. And even if you are new, it is still simple enough to understand and use.

Most of the code for the theme will be written as templates. You can always use pre-existing themes as a starting point. I used the [Even theme](https://zola-even.netlify.app/) as it was bare and its layout was similar to my previous Hugo based blog. Needless to say, the current theme is a significant step-up from the Even theme. Here is a screenshot of the theme I created:

![Blag screenshot](https://github.com/xypnox/blag/blob/master/themes/xyblag/screenshot.png?raw=true)

If you need to include any javascript files or other links, you can add them to the template. A tweak that I did to improve the loading performance was to put the [slideout.js](https://slideout.js.org/) script with the static files so that when the page loads it doesn't do a request to another server just for a small javascript file.

## Sass: Make it pop

The styling is handled via [SASS](https://sass-lang.com/), and I love it. I have used SASS in a lot of my previous projects and I adore the variables, mixins, and nested styles. It just ends up making stylesheets more readable and maintainable.

"Even" theme had a great underline from center animation on menu links and in the Index and Taxonomy lists. I modified the animation to add a little glow with a thicker line and rounded corners.

Moreover, even though I liked the summaries in the original theme, I found it not as useful in my theme. Firstly, because to use the summaries you need to add a `<!-- more -->` comment to specify where to break, and usually the summaries are not of similar length.

Hence, the current [index page](https://www.xypnox.com/blag/) just has the post title and the category with the date. One unintended but happy consequence of removing the summaries is that people will open the article to view the full contents more often!

## [You want it darker?](https://youtu.be/v0nmHymgM7Y)

If you haven't seen the dark mode yet, do it right now! You can use the switcher below:

<center><div class="theme-switcher">
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
    </div>
</div> </center>

<br />

<br />

(The switcher is also located at the top menu bar, and in mobile, it is in the side-menu)

And there it is, the _Dark Mode_ in all its glory.

To add dark mode, I had to restructure the colors to use CSS variables so that I could simply change them whenever the theme switched at the base itself. This also meant that since I was always using the CSS variables, later updates would force me to take care of the dark mode, as I will not forget to add and change the variable in the dark mode as well!

There are a few things to take into consideration while adding dark mode to your site:

- Does your site have elements that need more than color variables to switch the theme? For example, Wikipedia's equations are rendered SVGs so it is harder to change its color.
- The theme preference should be stored locally so that subsequent revisits have the same preference.
- The theme should respect the [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) setting of the user if it can't find the preference in the `localStorage`.
- When the site loads, it shouldn't load the light theme or dark theme by default and then switch on detecting the user's preference. This will make a flash of light before switching to the dark mode and vice versa.

These can be solved by including a little bit of Javascript just before the main content of the body. The trick here is that this bit of code is executed and only after it's evaluation is the rest of the code executed. Here is the JS code that finds and sets the theme on the page-load of this blog:

```javascript
(function initTheme() {
  let body = document.getElementsByTagName('body')[0];

  if (window.localStorage.getItem('theme') !== null) {
    if (window.localStorage.getItem('theme') === 'dark') {
      body.setAttribute('data-theme', 'dark');
    } else {
      body.setAttribute('data-theme', 'light');
    }
  } else {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      body.setAttribute('data-theme', 'dark');
    }
  }
})();
```

And that switcher that comes in between this post? That is plain HTML copied from the theme code. Also, it triggers the same function that changes the theme.

## Socially appropriate: Media tags

Zola is so minimal that it doesn't add any media tags, [Opengraph](https://ogp.me/) and [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards), required to display nice previews when shared to social sites such as Facebook, Twitter, etc. (_And the "Even" theme didn't have them either_). So, I had to add them myself, one set of tags for all the generic pages, and one for the posts.

Another problem with the social tags is that even though Facebook will correctly parse the page and use an appropriate image for its card, twitter requires you to put a specific image URL in the meta tags. To solve this I added a new variable in the posts' configuration, `metadata_image`, that stores the absolute path of the image that is used in social previews.

## Them Comments

Comments are an important part of the blog for me as they allow me to have a discourse with the people who are interested and excited by my posts. And preserving the old comments from the previous version was therefore important. Luckily, I used [Disqus](https://disqus.com/) as the comment platform, and the great thing is that if the link to the posts is the same, Disqus shows the old comments!

Adding Disqus to Zola was a bit more complicated than others, still, it was simple enough. I had to copy the [universal embed code](https://help.disqus.com/en/articles/1717112-universal-embed-code) and put it in the template in the right place. In the initialization script, I used the template variables to fill the link and unique identifiers for the post and that was enough for the comments to show up successfully.

In terms of theme support, when Disqus is set to the Auto theme, it automatically sets the correct theme depending on the font color passed to it. The problem is that the Disqus theme doesn't change when the overall theme changes. So, to switch the Disqus theme as well, I have to reload Disqus on every theme change, so that you don't have to reload the entire page to access Disqus with the correct theme.

## Analytics? Oh no.

Even though I am interested in collecting analytics for my blog, [adding Google Analytics requires affirmative consent from the user](https://consent.guide/google-analytics-cookie-consent/). And adding a big-yucky-privacy-consent-popup when someone lands on a minimal blog page is just ugly.

For me, the _aesthetic disadvantages_ of adding a banner for consent far outweigh the _advantages of collecting data_ which I may barely use. The blog posts I write aren't monetized and if someone wants to communicate, or suggest a topic for a post, he or she can always comment or reach out via mail! (xypnox gmail com).

Besides, Google's search console provides similar data about the popularity of my blog posts already, albeit only limited to the Google search results.

## Deployment

The current blog uses a [GitHub action](https://github.com/shalzz/zola-deploy-action) to auto-deploy whenever a new commit is pushed to master. Setting up the deployment was easy and the [steps mentioned in the documentation](https://www.getzola.org/documentation/deployment/github-pages/#github-actions) are enough.

The cool thing is that I can mark the `public` folder as ignored in git and I don't ever commit any of the generated code in the ~~master~~ main branch. Also, to add a new article, I can just create a markdown file using mobile or any device by logging into GitHub on that machine.

# The future: Where from to from now?

Even though this blog has almost all the features I desire, there are still somethings to iron out:

1. Emoji Support
2. Independent, decoupled Reusable theme
3. Highlighting of the current title in the Content sidebar
4. Content sidebar for mobile

There may be more features coming but these are the major ones for now.

The source code of the blog is available at [xypnox/blag](https://github.com/xypnox/blag).

If you are interested in this theme do feel free to reach out. I will prioritize the decoupling of the theme based on other people's interest in it.

# xyBlag

xyBlag is a minimal, modern, responsive theme featuring dark mode, categories, tags and pagination.

![Blag screenshot](https://github.com/xypnox/blag/blob/master/themes/xyblag/screenshot.png?raw=true)

## Contents

- [Installation](#installation)
- [Options](#options)
  - [Top menu](#top-menu)
  - [Title](#title)

## Installation

First download this repo and copy the folder `themes/xyblag` to your `themes` directory:

```bash
$ git clone https://github.com/xypnox/blag.git
```

and then enable it in your `config.toml`:

```toml
theme = "xyblag"
```

The theme requires tags and categories taxonomies to be enabled in your `config.toml`:

```toml
taxonomies = [
    # You can enable/disable RSS
    {name = "categories", rss = true},
    {name = "tags", rss = true},
]
```

If you want to paginate taxonomies pages, you will need to overwrite the templates
as it only works for non-paginated taxonomies by default.

It also requires to put the posts in the root of the `content` folder and to enable pagination, for example in `content/_index.md`:

```
+++
paginate_by = 5
sort_by = "date"
+++
```

## Options

### Top-menu

Set a field in `extra` with a key of blog_menu`:

```toml
# This is the default menu
blog_menu = [
    {url = "$BASE_URL", name = "Home"},
    {url = "$BASE_URL/categories", name = "Categories"},
    {url = "$BASE_URL/tags", name = "Tags"},
    {url = "$BASE_URL/about", name = "About"},
]
```

If you put `$BASE_URL` in a url, it will automatically be replaced by the actual
site URL.

### Title and Description

The site title and description is used in the header.

### Meta Image Metadata

While sharing an article on social media, you may want to display a specific image related to the article in the preview cards rather than the default one. This can be set via the `metadata_image` variable in the `[extra]` section of the page.

For example:

```yaml
[extra]
metadata_image = "/posts/migrating-to-zola/cover.png"
```

Here the path is relative to the root and the image is in the folder `/posts/migrating-to-zola/` and the file is at `/posts/migrating-to-zola/index.md`.

### Disqus comments

To enable disqus comments set the [`disqus_shortname`](https://help.disqus.com/en/articles/1717111-what-s-a-shortname) variable in the `[extra]` config to the shortname of your site.

```yaml
# CUSTOM VARIABLES
[extra]

# Disqus shortname for comments by disqus, when not set comment section isn't displayed
disqus_shortname = "xypnox-blag"
```

### KaTeX math formula support

This theme contains math formula support using [KaTeX](https://katex.org/),
which can be enabled by setting `katex_enable = true` in the `extra` section
of `config.toml`:

```toml
[extra]
katex_enable = true
```

After enabling this extension, the `katex` short code can be used in documents:

- `{{ katex(body="\KaTeX") }}` to typeset a math formula inlined into a text,
  similar to `$...$` in LaTeX
- `{% katex(block=true) %}\KaTeX{% end %}` to typeset a block of math formulas,
  similar to `$$...$$` in LaTeX

#### Automatic rendering without short codes

Optionally, `\\( \KaTeX \\)` inline and `\\[ \KaTeX \\]` / `$$ \KaTeX $$`
block-style automatic rendering is also supported, if enabled in the config:

```toml
[extra]
katex_enable = true
katex_auto_render = true
```

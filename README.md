# jekyll-theme-minimalistic

[![Featured](https://img.shields.io/badge/featured%20on-JekyllThemes-red.svg)](https://jekyll-themes.com/jekyll-theme-minimalistic/)
[![GitHub top language](https://img.shields.io/github/languages/top/vaibhavvikas/jekyll-theme-minimalistic)](#)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/vaibhavvikas/jekyll-theme-minimalistic)](#)
[![GitHub stars](https://img.shields.io/github/stars/vaibhavvikas/jekyll-theme-minimalistic)](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/stargazers)
[![Ruby Gem](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/actions/workflows/gem-push.yml/badge.svg)](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/actions/workflows/gem-push.yml)
[![pages-build-deployment](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/actions/workflows/pages/pages-build-deployment)


Minimalistic theme is based on gh-pages minimal theme, with navigation in the sidebar and super amazing features. Wanna see it in action? You can view a live demo at [Minimalistic](https://vaibhavvikas.github.io/jekyll-theme-minimalistic/).

![Screenshot](https://user-images.githubusercontent.com/28614457/179896288-56255d9e-946a-4566-aca4-85459d403ff9.png)

## Features
1. Auto light/dark mode.
2. Syntax Highlighting for light/dark mode.
3. Logo Support for the page.
4. Links in Sidebar.
5. List/Sublist in Sidebar.
6. Fully responsive with mobile support.
7. Logo/Favicon Support.
8. Github-Pages Support.
9. Card Support
10. Under active development.
11. And many more. 😁

## Usage

You can refer to this [Wiki Link](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/wiki) if you want to use this theme for creating github pages for your own custom repository.

To use the Minimalistic theme:

1. Add the following line to your Gemfile

```ruby
gem "jekyll-remote-theme"
```

then run `bundle install` to install the plugin.

2. Add the following to your site's `_config.yml` to activate the plugin:

```yml
plugins:
  - jekyll-remote-theme
```

Note: If you are using a Jekyll version less than 3.5.0, use the `gems` key instead of `plugins`.

1. Add the following line to your `config.yml` to use the theme

```yml
remote_theme: vaibhavvikas/jekyll-theme-minimalistic
```

then running `bundle exec jekyll serve` for local deployment.

## Customizing

### Configuration variables

Minimalistic will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]
```

Additionally, you may choose to set the following optional variables:

```yml
google_analytics: [Your Google Analytics tracking ID]
```

Choose light, dark, or automatically adjusting theme based on system theme:

```yml
color-scheme: auto/light/dark
```

Specify logo for the website:

```yml
logo: /assets/img/<logo_file>
```

Enable favicon by putting a `favicon.ico` in the repo's root directory and add the following line in `config.yml`:

```yml
favicon: true
```

### Customizing Sidebar

You can define a list of platforms that are linked from the sidebar in `_config.yml`:

```yml
platforms:
  - name: GitHub
    icon: <i class="fa-brands fa-github"></i>
    link: https://github.com/vaibhavvikas
  - name: LinkedIn
    icon: <i class="fa-brands fa-linkedin"></i>
    link: https://www.linkedin.com/in/vaibhavvikas
  - ...
```

### Navigation

You can also define, hyperlinks for specific pages or section of a pages (very helpful if creating multipage documentation or easy navigation between multiple sections). 

For adding navigation do the following steps:

1. Put your .md files in the root directory. and add the below text on top of pages to get it converted to html by jekyll.
   
```yml
---
layout: default
---
```

2. Use the navigation example below to add navigation section in _config.yml file. Treat all your .md files as .html files. Currently it only supports one nesting in sublist.

```yml
navigation:
  - name: Readme
    link: ./index.html
    sublist:
      - name: Image
        link: ./index.html#small-image
  - name: Another Page
    link: ./another-page.html
  - ...
```

### Example:

[Live Example](https://vaibhavvikas.github.io/jekyll-theme-minimalistic/)\
[Code used in GitHub page](https://github.com/vaibhavvikas/jekyll-theme-minimalistic/tree/gh-pages)

Lets say you have a file name xyz.md, you put that into the root dir. Now, add the text in step 1 at the top of the md file. After that for the text in _config.yml you will put it like:

```yml
navigation:
  - name: [Write name of your hyperlink]
    link: ./xyz.html
```

### Adding Card:

Use the code template:
```html
<div class="card">
  <h3>Some Title</h3>
  <p><b>New Delhi</b>, India<br>
  Some Text</p>
  <a href="https://vaibhavvikas.ml/"><span class="card-link-spanner"></span></a>
</div>
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:

    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```

3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Customizing Google Analytics code

Google has released several iterations to their Google Analytics code over the years since this theme was first created. If you would like to take advantage of the latest code, paste it into `_includes/head-custom-google-analytics.html` in your Jekyll site.

## Previewing the theme locally

If you'd like to preview the theme locally (for example, in the process of proposing a change):

1. Clone down the theme's repository (`git clone https://github.com/vaibhavvikas/jekyll-theme-minimalistic`)
2. `cd` into the theme's directory
3. Run `script/bootstrap` to install the necessary dependencies
4. Run `bundle exec jekyll serve` to start the preview server
5. Visit [`localhost:4000`](http://localhost:4000) in your browser to preview the theme

## Running tests

The theme contains a minimal test suite, to ensure a site with the theme would build successfully. To run the tests, simply run `script/cibuild`. You'll need to run `script/bootstrap` once before the test script will work.

## Contributors

All contributions and suggestions are welcome.

## Credits:

This theme was built using [Minimalist](https://github.com/BDHU/minimalist) theme by BDHU and [Minimal](https://github.com/pages-themes/minimal) by GithHub.

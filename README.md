# jekyll-minimal

A fork of gh-pages minimal theme with navigation in the sidebar.

## Usage

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

3. Add the following line to your `config.yml` to use the theme

```yml
remote_theme: vaibhavvikas/jekyll-minimalistic
```

then running `bundle exec jekyll serve` for local deployment.

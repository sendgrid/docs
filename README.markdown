# SendGrid Documentation

[![Build Status](https://travis-ci.org/sendgrid/docs.svg?branch=develop)](https://travis-ci.org/sendgrid/docs)
[![Dependency Status](https://gemnasium.com/sendgrid/docs.svg)](https://gemnasium.com/sendgrid/docs)

This site is based on Octopress, which in turn is based on Jekyll, with a dash of Twitter Bootstrap added.

The develop branch is continuously deployed to a preview site. [View dev site](http://d2w67tjf43xwdp.cloudfront.net/)

The develop branch is merged to production weekly (unless we need to do a release sooner than that).

The master branch is continuously deployed to production.

### _Please_, feel free to make any contributions you feel will make SendGrid Documentation better.

**Submit all pull requests to the develop branch**

**Before your pull request can be merged into the develop branch, you must submit a completed CLA.**

## CLAs and CCLAs

Before you get started, SendGrid requires that a SendGrid Contributor License Agreement (CLA) be filled out by every contributor to a SendGrid open source project.

Our goal with the CLA is to clarify the rights of our contributors and reduce other risks arising from inappropriate contributions. The CLA also clarifies the rights SendGrid holds in each contribution and helps to avoid misunderstandings over what rights each contributor is required to grant to SendGrid when making a contribution. In this way the CLA encourages broad participation by our open source community and helps us build strong open source projects, free from any individual contributor withholding or revoking rights to any contribution.

SendGrid does not merge a pull request made against a SendGrid open source project until that pull request is associated with a signed CLA. Copies of the CLA are available [here](https://gist.github.com/SendGridDX/98b42c0a5d500058357b80278fde3be8#file-sendgrid_cla).

When you create a Pull Request, after a few seconds, a comment will appear with a link to the CLA. Click the link and fill out the brief form and then click the "I agree" button and you are all set. You will not be asked to re-sign the CLA unless we make a change.

## Local Setup

### Dependencies

* Required:
    * Git
    * Xcode
    * Java
    * Rvm
    * Yaml
    * Homebrew
    * npm
    * git-flow
    * bundler gem
    * bower

### Setup Steps

* Install Git: [http://git-scm.com/download/mac](http://git-scm.com/download/mac)
* Install a GitGUI(if you want it) [http://mac.github.com](http://mac.github.com)
* Install Xcode (if you don't have it installed. Go to the App Store and download it)
* Install Xcode command line tools > Xcode > Preferences > Downloads (These are bundled in Xcode as of OSX 10.9)
    * Note: You may need to run $ xcode-select --install
* Install JDK  
The yui compressor will need the full JDK to run - [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Install RVM

	`$ \curl -L [https://get.rvm.io](https://get.rvm.io/) | bash -s stable --ruby`

* Close and reopen your terminal window
* Check which version of Ruby you have  

	`$ ruby -v`

The very latest stable version (2.4.0) isn't compatible with the gems we use for the build, so you'll probably need to download version 2.3.0.

	`$ rvm install 2.3.0`

then set that version to be the default version

	`$ rvm --default use 2.3.0`

* Install Homebrew (if you don't have it)

	`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* Install YAML

	`$ brew install libyaml`

* Install npm

	`$ brew install npm`

* Set your Node version

	`$ npm install -g n`

	`$ n 6.10.1`

* install git flow to manage branches ([http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)) (optional)

	`$ brew install git-flow`

* clone repo

	`$ git clone [https://github.com/sendgrid/docs.git](https://github.com/sendgrid/docs.git)`

OR use the GitGUI tool to clone the repo


* switch to develop branch to make changes

	`$ ls docs`

	`$ git checkout develop`

* install bundle (if you don't have this installed)

	`$ sudo gem install bundler`

* Go to your docs directory

	`$ cd docs`

* Install the build tools

	`$ npm install`

to install build tools.

* Install bower

	`$ npm install -g bower`

* Install client-side dependencies (jQuery, bootstrap)

	`$ bower install`

to install client-side dependencies.

* Install required Ruby gems

	`$ bundle install`

If the gem installation fails with a message like "An error occurred while installing libv8 (3.16.14.7), and Bundler cannot continue", a few extra steps will be necessary in order to build and install a version of V8 that can be used by the libv8 and therubyracer gems:

	- `gem uninstall libv8`
	- `brew tap homebrew/versions`
	- `brew install --force v8-315`
	- `bundle config build.libv8 "--with-system-v8 --with-v8-dir=$(brew --prefix v8-315)"`
	- `sudo gem install therubyracer -v '0.12.2'`
        - `bundle config build.therubyracer "--with-v8-dir=$(brew --prefix v8-315)"`
	- `bundle install`

### Configure jekyll

* Copy, DO NOT DELETE the _config.sample.yml file - definitely do not commit a delete of this file !

	`$ cp _config.sample.yml _config.yml

* Edit the following items in the _config.yml "Jekyll & Plugins" section to match your local environment:

	`source: /path_to_your_files/source_`
(if you're running locally path_to_your_files will be `/)_`

	`destination: /path_to_your_files/public`

For example:

`The source would be: /Users/USERNAME/docs/source`

`The destination would be: /Users/USERNAME/docs/public`

### Running

* Do the following instead of Jekyll serve:

	`$ bundle exec rake preview`

Note: if you receive an error message similar to "No Java Runtime Present: Requesting Install" please see the following instructions

* Open your Terminal
* java -version gives you an error and a popup
* Get the mac download here [https://www.java.com/en/download/faq/java_mac.xml](https://www.java.com/en/download/faq/java_mac.xml)
* Install it
* In your terminal, type:

	`export JAVA_HOME="/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home"

* run java -version again
If that worked, then add the above command to your .bash_profile or .profile file and then run 'source .profile'
[http://stackoverflow.com/a/19582689](http://stackoverflow.com/a/19582689)

### View your install
* Browse to [localhost:4000](localhost:4000)


### Important Things to Know

* The source files are in `/source`, and the generated files will be created in `/public`. They get overwritten or wiped out when the site is rebuilt.

* To rebuild the site, [control][c] to cancel the build, and then [bundle exec rake preview] to restart it.

## Config

The config is defined in `_config.yml`.

The only config variables you should need to know about are <code>root</code>, which is the root from which all links are calculated, and the <code>folder_weights</code> hash, which specifies the order that the folders should be displayed in the nav tree. Higher weights mean higher display priority (higher in the tree). You can also specify icons for folders with the
<code>folder_icons</code> hash.

There's also a <code>version</code> number in the config.

### The Nav Tree

The nav tree is generated by the plugin `site_navigation.rb`. It is essentially a recursive traversal of all the folders and pages in the Source folder that generates a hierarchical tree, sorted by folder weight and page weight.

Breadcrumbs are generated by the `breadcrumbs.rb` plugin.

### Pages

You can write pages in markdown, HTML, or HAML. They all get converted to HTML when the site is generated.

Pages have a block of YAML at the top that sets a few options. They are pretty self-explanatory; here's an example

```
---
layout: page
weight: 0
title: Docs Home
icon: icon-home
showTitle: false
navigation:
  show: true
---
```

Weights are same as the folder weights - the higher numbers move higher up the tree. Icons are based on the CSS icon class names from Twitter Bootstrap. showTitle and navigation["show"] both default to true if not specified.

#### SEO
Various fields pertinent to SEO can be controlled through the YAML front matter. Here's an example:

```
---
seo:
  title: Really Great Documentation - SendGrid Documentation | SendGrid
  override: true
  description: This is some really great documentation! I hope you like it!
  canonical: http://sendgrid.com/docs/really-great-docs
---
```

By default `<title>` tags follow the template `{Page Title} {Site Title}`. However the page title can be changed for the purpose of the tag by using `seo["title"]`. `seo["override"]` will override the entire template, instead making the title page `{seo["title"]}`. `description` and `canonical` change their respective tags.

### Custom Liquid Tags
There are some custom plugins (look in the `plugins` folder) that define new liquid blocks for use in pages.

#### Anchors

You can create anchor tags that will have named anchors generated for them automatically with links on hover.
The parameter is the wrapping element to use.

```
{% anchor h2 %}
Some Anchor Text
{% endanchor %}
```
#### Info blocks

Similarly you can create info and warning blocks:

```
{% info %}
Some info for a breakout block.
{% endinfo %}

{% warning %}
...And a warning breakout.
{% endwarning %}
```

#### API Examples

If you are working on API reference docs, you can generate XML and JSON nav tabs and the corresponding example calls and responses like so:

```
{% apiexample identifier GET http://some.endpoint.url var1=stuff&var2=junk %}
  {% response json %}
{ "foo": "bar" }
  {% endresponse %}

  {% response xml %}
<foo>bar</foo>
  {% endresponse %}
{% endapiexample %}
```

The parameters for the `apiexample` block are: unique identifier, HTTP
method, the url (excluding .json or .xml extension), and the data
payload in querystring format.

## JS and CSS, etc

JavaScript and CSS are minified and combined. The files to be packaged and their orders are specified in `_includes/head.html` and <code>CssMinify.yml</code>. Preprocessing and options can be specified
via `_plugins/jekyll_asset_pipeline.rb`.

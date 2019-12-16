![SendGrid Logo](https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)

# SendGrid Documentation

[![Build Status](https://travis-ci.org/sendgrid/docs.svg?branch=develop)](https://travis-ci.org/sendgrid/docs)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./license)

This is a Gatsby site.

The develop branch is merged to production weekly (unless we need to do a release sooner than that).

The master branch is continuously deployed to production.

### _Please_, feel free to make any contributions you feel will make SendGrid Documentation better.

**Submit all pull requests to the develop branch**

**Before your pull request can be merged into the develop branch, you must submit a completed CLA.**


## Table of Contents

* [Contributing Guidelines](#contributing)
* [Local Setup](#local)
* [About](#about)
* [License](#license)

<a name="contributing"></a>
## Contributing

Please see the [contributing guidelines](./CONTRIBUTING.md).

<a name="local"></a>
## Local Setup

<a name="dependencies"></a>
### Dependencies

* Required:
    * [Git](https://git-scm.com)
    * [RVM](https://rvm.io)
    * [Homebrew](https://brew.sh)
    * [npm](https://www.npmjs.com)
    * [yarn](https://yarnpkg.com/en/)
    * [Gatsby](https://www.gatsbyjs.org)

<a name="setup"></a>
### Setup Steps

* Install Git for:
	* [Mac](https://git-scm.com/download/mac) 
	* [Windows](https://git-scm.com/download/win) 
	* [Linux](https://git-scm.com/download/linux)

* Install RVM

	`$ \curl -sSL https://get.rvm.io | bash -s stable --ruby`

* Install Homebrew (if you don't have it)

	`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* Install or update npm

        `sudo apt-get update && sudo apt-get upgrade` // Optional

	`$ brew install npm`
	
**Note:** You may need to use 'sudo' before the command to get it to work as intended. 

* Set your Node version

	`$ npm install -g n`

	`$ n 8.7.0`

* Download yarn

  `$ brew install yarn`

* Clone the repo

	`$ git clone https://github.com/sendgrid/docs.git`


* Go to your docs directory

	`$ cd docs`

* Switch to develop branch to make changes

	`$ git checkout develop`

* Install the Gatsby CLI

	`$ npm install -g gatsby-cli`

* Install npm package dependencies

  `$ yarn install`

* Build the local site

  `$ yarn develop`
  Gatsby starts a hot-reloading development environment accessible at [localhost:8000](localhost:8000)

<a name="about"></a>
## About

SendGrid is guided and supported by the SendGrid [Developer Experience Team](mailto:dx@sendgrid.com).
It is maintained and funded by SendGrid, Inc. The names and logos are trademarks of SendGrid, Inc.


<a name="license"></a>
## License
SendGrid Documentation is licensed under the **[MIT License (MIT)](https://github.com/sendgrid/docs/blob/develop/license)**

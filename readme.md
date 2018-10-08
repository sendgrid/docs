![SendGrid Logo](https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)

# SendGrid Documentation

[![Build Status](https://travis-ci.org/sendgrid/docs.svg?branch=develop)](https://travis-ci.org/sendgrid/docs)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![GitHub contributors](https://img.shields.io/github/contributors/sendgrid/docs.svg)](https://github.com/sendgrid/docs/graphs/contributors)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./license)

This is a Gatsby site.

The develop branch is continuously deployed to a preview site. [View dev site](http://d2w67tjf43xwdp.cloudfront.net/)

The develop branch is merged to production weekly (unless we need to do a release sooner than that).

The master branch is continuously deployed to production.

### _Please_, feel free to make any contributions you feel will make SendGrid Documentation better.

**Submit all pull requests to the develop branch**

**Before your pull request can be merged into the develop branch, you must submit a completed CLA.**


## Table of Contents

* [CLAs and CCLAs](#cla)
* [Local Setup](#local)
* [About](#about)
* [License](#license)

<a name="cla"></a>
## CLAs and CCLAs

Before you get started, SendGrid requires that a SendGrid Contributor License Agreement (CLA) be filled out by every contributor to a SendGrid open source project.

Our goal with the CLA is to clarify the rights of our contributors and reduce other risks arising from inappropriate contributions. The CLA also clarifies the rights SendGrid holds in each contribution and helps to avoid misunderstandings over what rights each contributor is required to grant to SendGrid when contributing. In this way, the CLA encourages broad participation by our open source community and helps us build strong open source projects, free from any individual contributor withholding or revoking rights to any contribution.


SendGrid does not merge a pull request made against a SendGrid open source project until that pull request is associated with a signed CLA. Copies of the CLA are available [here](https://gist.github.com/SendGridDX/98b42c0a5d500058357b80278fde3be8#file-sendgrid_cla).

<a name="local"></a>
## Local Setup

<a name="dependencies"></a>
### Dependencies

* Required:
    * Git
    * RVM
    * Homebrew
    * npm
    * yarn
    * Gatsby

<a name="setup"></a>
### Setup Steps

* Install Git for:
	* [Mac](https://git-scm.com/download/mac) 
	* [Windows](https://git-scm.com/download/win) 
	* [Linux](https://git-scm.com/download/linux)

* Install RVM

	`$ \curl -sSL https://get.rvm.io | bash -s stable --ruby`

* Install Homebrew (if you don't have it)

	`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* Install npm

	`$ brew install npm`
	
**Note:** You may need to use 'sudo' before the command to get it to work as intended. 

* Set your Node version

	`$ npm install -g n`

	`$ n 8.4.0`

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

  `$ gatsby develop`
  Gatsby starts a hot-reloading development environment accessible at [localhost:8000](localhost:8000)

<a name="about"></a>
## About

SendGrid is guided and supported by the SendGrid [Developer Experience Team](mailto:dx@sendgrid.com).
It is maintained and funded by SendGrid, Inc. The names and logos are trademarks of SendGrid, Inc.


<a name="license"></a>
## License
[The MIT License (MIT)](https://github.com/sendgrid/docs/blob/develop/license)

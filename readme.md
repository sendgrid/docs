![SendGrid Logo](https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)

# SendGrid Documentation

[![Build Status](https://travis-ci.org/sendgrid/docs.svg?branch=develop)](https://travis-ci.org/sendgrid/docs)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![GitHub contributors](https://img.shields.io/github/contributors/sendgrid/docs.svg)](https://github.com/sendgrid/docs/graphs/contributors)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./license)

Ini adalah situs Gatsby.

Cabang pengembang akan terus diarahkan ke situs pratinjau. [Lihat situs dev] (http://d2w67tjf43xwdp.cloudfront.net/)

Cabang Pengembang digabung menjadi produksi secara mingguan (kecuali kita perlu melakukan rilis lebih cepat dari itu).

Cabang Pengembang akan terus ditujukan untuk produksi.

### _Tolong_, jangan ragu untuk membuat kontribusi apa pun yang Anda rasa akan membuat Dokumentasi SendGrid menjadi lebih baik.

**Kirim semua pull requests ke branch develop**

**Sebelum pull requestmu bisa di gabung ke cabang pengembang, kamu harus mengirim CLA lengkap.**


## Daftar isi

* [CLAs and CCLAs](#cla)
* [Local Setup](#local)
* [About](#about)
* [License](#license)

<a name="cla"></a>
## CLAs and CCLAs

Sebelum Anda memulai, SendGrid mengharuskan Perjanjian Lisensi Kontributor SendGrid (CLA) diisi oleh setiap kontributor ke proyek open source SendGrid.

Tujuan kami dengan CLA adalah untuk memperjelas hak kontributor kami dan mengurangi risiko lain yang timbul dari kontribusi yang tidak pantas. CLA juga menjelaskan hak-hak pemegang SendGrid di setiap kontribusi dan membantu untuk menghindari kesalahpahaman atas hak apa yang diperlukan setiap kontributor untuk diberikan kepada SendGrid ketika berkontribusi. Dengan cara ini, CLA mendorong partisipasi luas oleh komunitas open source kami dan membantu kami membangun proyek open source yang kuat, bebas dari kontributor individual yang menahan atau mencabut hak atas kontribusi apa pun.


SendGrid tidak menggabungkan permintaan tarik dibuat terhadap proyek open source SendGrid sampai permintaan tarik dikaitkan dengan CLA yang ditandatangani. Salinan CLA tersedia [di sini] (https://gist.github.com/SendGridDX/98b42c0a5d500058357b80278fde3be8#file-sendgrid_cla).

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

* Install Homebrew (jika belum punya)

	`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* Install npm

	`$ brew install npm`
	
**Note:** Kamu mungkin harus menggunakan 'sudo' di depan command agar bisa bekerja 

* Set Node versionmu

	`$ npm install -g n`

	`$ n 8.4.0`

* Download yarn

  `$ brew install yarn`

* Cloning repo

	`$ git clone https://github.com/sendgrid/docs.git`


* Masuk ke folder Docs
	`$ cd docs`

* Switch to develop branch to make changes
* Ubah ke cabang pengembang untuk membuat perubahan

	`$ git checkout develop`

* Install Gatsby CLI

	`$ npm install -g gatsby-cli`

* Install npm package dependencies

  `$ yarn install`

* Build the local site

  `$ gatsby develop`
  Gatsby starts a hot-reloading development environment accessible at [localhost:8000](localhost:8000)

<a name="about"></a>
## About

SendGrid dipandu dan didukung oleh SendGrid [Tim Pengalaman Pengembang] (mailto: dx@sendgrid.com).
Dipertahankan dan didanai oleh SendGrid, Inc. Nama dan logo adalah merek dagang dari SendGrid, Inc.


<a name="license"></a>
## License
[The MIT License (MIT)](https://github.com/sendgrid/docs/blob/develop/license)

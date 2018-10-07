This documentation is based on our [Docs](https://github.com/sendgrid/docs/tree/develop/source).

* [Local Setup](#local)
	* [Configure jekyll](#jekyll)
	* [Running](#running)
	* [View your install](#view)
	* [Using Docker](#using-docker)

###Local setup
<a name="jekyll"></a>
### Configure jekyll

* Copy, DO NOT DELETE the _config.sample.yml file - definitely do not commit a delete of this file !

	`$ cp _config.sample.yml _config.yml`

* Edit the following items in the _config.yml "Jekyll & Plugins" section to match your local environment:

	`source: /path_to_your_files/source_`
(if you're running locally path_to_your_files will be `/)_`

	`destination: /path_to_your_files/public`

For example:

`The source would be: /Users/USERNAME/docs/source`

`The destination would be: /Users/USERNAME/docs/public`

<a name="running"></a>
### Running

* Do the following instead of Jekyll serve:

	`$ bundle exec rake preview`

Note: if you receive an error message similar to "No Java Runtime Present: Requesting Install" please see the following instructions

* Open your Terminal or Cmd
* If `java -version` gives you an error and a popup
* Get the download here
	* [Mac](https://www.java.com/en/download/faq/java_mac.xml)
	* [Windows](https://www.java.com/en/download/)
* Install it
* In your terminal, type:

	`export JAVA_HOME="/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home"`

* Run `java -version` again.

If that worked, then add the above command to your .bash_profile or .profile file and then run 'source .profile'
[http://stackoverflow.com/a/19582689](http://stackoverflow.com/a/19582689)

<a name="view"></a>
### View your install
* Browse to [http://localhost:4000](http://localhost:4000)

### Using Docker

Install [Docker](https://www.docker.com/) first, then in terminal execute:

```
docker build -t sendgrid/docs:latest .
docker run --rm -it -p 4000:4000 sendgrid/docs:latest
```

Wait until you see `Server running... press ctrl-c to stop.` and browse to [http://localhost:4000](http://localhost:4000)

### Run linklint and jsonlink

```
 bundle exec rake linklint
 bundle exec rake validate_json_xml
```

### Run spell check

```
npm run spellcheck
```

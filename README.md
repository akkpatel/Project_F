# SubmittalProcess

## Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).
  * [Ruby](https://www.ruby-lang.org/en/): Use the installer for your OS. For Windows users, [JRuby](http://jruby.org/) is a popular alternative.
    * With Ruby installed, run `gem install bundler sass`.
  * [Grunt] and [Bower](http://bower.io): Run `[sudo] npm install -g gulp bower`

## Get Started

Make sure you have uploaded a key to git.

You can find instructions on how to generate keys for your laptop to connect to github here>
https://help.github.com/articles/generating-ssh-keys/

Clone this repository, where `app` is the name of your app.

```bash
git clone https://github.com/PointSource/reserved-ui.git
```

## Change into client directory

Install the dependencies. Running `npm install` will also automatically run `bower install` after. If you're running Mac OS or Linux, you may need to run `sudo npm install` instead, depending on how your machine is configured.

```bash
npm install
bower install
```

While you're working on your project, run:

```bash
grunt serve
```

This will compile the Sass and assemble your Angular app. **Now go to `localhost:9000` in your browser to see it in action.**
# NodeJS

## What is NodeJS?

* An open source server side runtime environment.
* It's a runtime environment, it is not a language.
* Truly cross platform.
* Uses JS as a language.

# What is Express?

* It is a web development framework.
* Is is the web piece that would be built inside NodeJS.
* Unopinionated and minimalist web framework used to build out a website.
* It will handle our routing, page rendering and etc for us.
* Ultimately it is an NPM package that will site inside NodeJS.

## Node Installation

You can download NodeJS from[here](https://nodejs.org/en/download/).

## Node Commands

You can verify that Node is installed and working on your machine
by running the following commands:

* Run `node --version` to check the node version installed.
* Run `node` to access JS via node and type JS in the command line.
    * `console.log('Hello There');`
    * `var hi = 'Hello There'`

## What is NPM?

* Package Management for NodeJS.
* `npm init` initialises any NPM package.json for the specific application.

### package.json

* Contains our dependencies/packages required/installed for our application.
`npm install express --save` will allow NPM to download express in out application
and save the dependency name in our package.json file. 

## NPM Versioning

`^4.13.3` (Carrot) - Means that NPM will install any version of this package
that is the same Major Version. So as long as it is `^4.x.x` then NPM
will install it. So if `^4.14.1` came out and you did `npm install`, then 
NPM would go ahead and install that version since you have the `^` character
in front. In most cases that is fine but there are usually faults and bugs 
when upgrading from one major to another and that is a risk you'd be willing 
to take.

`~4.13.3` (Tilde) - Means that NPM will install anything that is a minor version.
so anything that is `4.13.3`, `4.13.4`, `4.13.5` etc. But if `4.13.3` went up to 
`4.14.1`, NPM will not pull that in.

`4.13.3` - Means that NPM will install ONLY that specific version and it will not 
pull any previous or future version.

## NPM Start

You may want to deploy or pass your app to be used by the next person,
so instead of the next person having knowledge of what the main JS file is called,
you can create a script in your `package.json` that can be associated with your 
`node app.js` command. You can do this by adding 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js" <== ADD THIS SCRIPT!
  },
```

Now you can run `npm start` and that should work the same as `node app.js`.

## What is Bower?

* Package manager for the web.
* Angular, Bootstrap or FontAwsome are installed via Bower.
* NPM is the backend package manager, Bower is the frontend package manager.
* Installed with NPM.
* Flat package hierarchy.
* Works similar to NPM.
* Has a bower.json just as NPM has package.json

### Bower Install

* You can install bower using the `-g` parameter to allow you to be able to 
access bower via the command line. 
* To install just run the following command:

`npm install bower -g`

* To initialise bower you will need to run the following command:

`bower init`

* This will then produce a bower.json file to hold details and dependencies for your
frontend.

## What is Gulp?

* Task manager for your web projects.
* Installed with NPM.
* Easy to use.
* Code based configuration.
* Package based.

## JSHint

* Code quality enforcement.
* Detects potential errors.
* Enforces coding conventions.
* Easily configurable.
* Open source.

## JSCS

* Coding style enforcement.
* Enforces style conventions.
* Easily configurable.
* Open Source.

### Gulp Install

To install Gulp you'll need to run the following command:

`npm install gulp -g`

After that you'll need to install a local version of Gulp by running:

`npm install gulp --save-dev`

Notice if you try to run `gulp` it will say that there is no gulpfile found.
So you'll need to create a gulpfile that is called:
`gulpfile.js`

## What is WireDep

* Wires Bower dependencies to your source code.
* Installed via NPM.
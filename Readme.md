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
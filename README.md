# Bulma boilerplate

The goal of this small project is to provide a simple boilerplate for the Bulma CSS framework.

The Bulma Start guide (https://bulma.io/documentation/overview/start/) explains how to install a npm package of the framework, but the user is left alone for the next steps.

The idea is to provide a sandbox for frontend designers to play with, in order to produce mockups, detaches from any specific framework consideration (no reference to any of React, Angular or Vue)

## Content

Contains a simple index.html file, one JS file and one SCSS file.
Uses the following packages:

* Babel
* Node Sass
* Webpack

And that's it.

## Installation

Clone the repository.

Then run
```
npm install
```

to get the latest packages.

## Usage

Only two commands:

```
npm run dev
```
which will run the transpiling and watch the JS and SCSS file

```
npm run prod
```
which won't be watching any files and will minify the JS and SCSS files.


## Known alternatives

Alternatively, there is another starter project here: https://github.com/jgthms/bulma-start
You may want to consider it as well. In my case, this happened to be a touch more complex than what I needed Bulma for.


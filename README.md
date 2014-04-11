Note: These instructions are work in progress and have not been fully tested yet. However most of it is correct and you are invited to check it out and contribute.



# Aim

The content of this project is an [Amber Smalltalk](http://amber-lang.net) project template.

The  [grunt-init](http://gruntjs.com/project-scaffolding) tool uses this to create an Amber based application.
grunt-init-amber



## Prerequisites

In a terminal check if you have installed the amber command line version 

      amber repl
      
If not do so 

      npm install -g amber

Then check for `grunt-init`

      grunt-init --version
      
If it is not installed install it according to [grunt-init project scaffolding](http://gruntjs.com/project-scaffolding).

In case grunt-cli is not installed use [these instructions](http://gruntjs.com/getting-started).


## Installation

 The content of this project has to go into your `~/.grunt-init/` directory.

The recommeded way is to clone the project with git as follows:

```
git clone git://github.com/hhzl/grunt-init-amber.git ~/.grunt-init/amber
```

_Windows users, see [the grunt-init documentation](http://gruntjs.com/project-scaffolding) for the correct directory destination_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.


```
grunt-init amber
```

Then you will be asked questions about your project. 

**Note** _that this command will generate Amber project files in the current directory,
so be sure to change to a new directory first if you do not want to overwrite existing files._


Then add the local Amber Smalltalk web client side installation with

```
bower install amber --save
```

Start the Amber server
```
amber serve
```



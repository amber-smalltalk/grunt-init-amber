# [Amber Smalltalk](http://amber-lang.net) application generator.


## Installation (the Amber way)

If you want to go the completely integrated Amber way you should not use this grunt-init template directly.
Use [amber-cli](https://github.com/amber-smalltalk/amber-cli) instead.
Installation is done via `(sudo) npm install -g amber-cli`
(in case you have old Amber CLI installed from `amber` package itself, which is now defunct,
you should uninstall it first with `(sudo) npm uninstall -g amber`).

Then you can stop reading here and jump over to the amber-cli documentation.


## Installation (the [Grunt](http://gruntjs.com/project-scaffolding) way)

Install [grunt-init](http://gruntjs.com/project-scaffolding) if you have not already done so.

Place this template in your `~/.grunt-init/` directory after installing grunt-init with the following command.

```
git clone git://github.com/amber-smalltalk/grunt-init-amber.git ~/.grunt-init/amber
```

_Windows users, see [the grunt-init documentation](http://gruntjs.com/project-scaffolding) for the correct directory destination_


At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init amber
```

_Note that this template will generate files in the current directory,
so be sure to change to a new directory first if you do not want to overwrite existing files._

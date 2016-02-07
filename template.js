/*
 * grunt-init-amber
 * https://amber-lang.net/
 *
 * Copyright (c) 2013 Manfred Kroehnert, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a web application based on Amber Smalltalk.';

// Template-specific notes to be displayed before question prompts.
exports.notes = ' _Project title_ should be a human-readable title.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You need to have these installed globally via npm:' +
' _amber-cli_; _grunt-cli_; _bower_.' +
' Now, install project dependencies with _bower install_,' +
' tool dependencies with _npm install_ and optionally, recompile with _grunt_.' +
' If you are running _amber init_, these three tasks are going to be performed for you now.' +
' Afterwards, start the development server with _amber serve_.' +
' Your application is then accessible via _http://localhost:4000/_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {
    var remembered = {};

    function rememberViaValidator(name) {
        var oldValidator = init.prompts[name].validator || function (line) {
                return true;
            };

        var newValidator;
        switch (oldValidator.length) { //apply would not work, .length is used to call it differently
            case 1:
                newValidator = function (line) {
                    remembered[name] = line;
                    return oldValidator.call(this, line);
                };
                break;
            case 2:
                newValidator = function (line, next) {
                    remembered[name] = line;
                    return oldValidator.call(this, line, next);
                };
                break;
            default:
                throw new Error("Panic: " + oldValidator.length + "-argument validator for " + name + ".");
        }

        init.prompts[name].validator = newValidator;
    }

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    init.prompts.name.message = 'Main class and package of Amber application.\nProject name is derived by lowercasing this.';
    init.prompts.name.validator = function (line) {
        return /^[A-Z][A-Za-z0-9]*$/.test(line)
    };
    init.prompts.name.warning = 'Must be a valid class name: only alphanumeric and starting with an uppercase letter!';
    rememberViaValidator('name');
    rememberViaValidator('title');

    init.process({type: 'amber'}, [
        // Prompt for these values.
        init.prompt('title', 'Application or Library Title'),
        init.prompt('name', function (value, data, done) {
            var words = remembered.title.split(/\W/);
            words = words.filter(function (x) {
                return x && x !== "none";
            }).map(capitalize);
            value = words.length ? words.join('') : 'MysteriousApp';
            done(null, value);
        }),
        init.prompt('description', 'The Application or The Library doing The Thing.'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        {
            name: 'namespace',
            message: 'Namespace of the new Amber package.',
            altDefault: function (value, data, done) {
                value = 'amber-' + remembered.name.toLowerCase();
                done(null, value);
            },
            validator: /^[a-z][a-z0-9/\-]*$/,
            warning: 'Only lowercase letters, numbers, and - are allowed in namespaces!'
        },
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('author_url'),
        init.prompt('licenses', 'MIT')
    ], function (err, props) {
        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props, {noProcess: 'libs/**'});

        // Clean up non-npm props.
        delete props.namespace;

        props.name = props.name.toLowerCase();

        // A few additional properties.
        props.keywords = ['Amber', 'Smalltalk'];
        props.devDependencies = {
            "amber-dev": "^0.8.2",
            "grunt": "^0.4.5",
            "grunt-contrib-clean": "^0.7.0",
            "grunt-contrib-requirejs": "^0.4.4",
            "grunt-execute": "^0.2.2",
            "requirejs": "^2.1.15"
        };
        props.node_version = '0.10.x || 0.12.x || >=4.0.0';
        props.scripts = {
            "test": "grunt test"
        };

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', props);

        // generate bower.json file
        grunt.file.write('bower.json', JSON.stringify({
            "name": props.name,
            "description": props.description,
            "ignore": [
                "**/.*",
                "node_modules",
                "bower_components",
                "/*.js",
                "/*.html",
                "test",
                "tests"
            ],
            "authors": [
                {
                    "name": props.author_name,
                    "email": props.author_email
                }
            ],
            "homepage": props.homepage,
            "main": props.main,
            "keywords": props.keywords,
            "license": props.licenses,
            "private": false,
            "dependencies": {
                "amber": "^0.15.0",
                "amber-compat-es2015": "^0.1.0",
                "amber-contrib-jquery": "^0.2.0",
                "amber-contrib-web": "^0.3.0",
                "domite": "^0.4.0",
                "silk": "^0.2.0"
            },
            "devDependencies": {
                "amber-contrib-legacy": "^0.3.0",
                "amber-ide-starter-dialog": "^0.1.0",
                "helios": "^0.6.0"
            }
        }, null, 4));


        // All done!
        done();
    });

};

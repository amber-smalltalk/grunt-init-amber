({
    mainConfigFile: "config.js",
    onBuildWrite: function (moduleName, path, contents) {
        return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'devel'}}});" : contents;
    },
    include: ['config', 'node_modules/requirejs/require'],
    out: "the.js"
})
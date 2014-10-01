({
    mainConfigFile: "config.js",
    onBuildWrite: function (moduleName, path, contents) {
        return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'deploy'}}});" : contents;
    },
    pragmas: {
        excludeIdeData: true,
        excludeDebugContexts: true
    },
    include: ['config', 'node_modules/requirejs/require', 'deploy'],
    out: "the.js"
})
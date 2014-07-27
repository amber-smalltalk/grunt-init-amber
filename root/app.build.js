({
    mainConfigFile: "config.js",
    paths: {
        // paths for jquery-ui and jquery must be set manually
        // because r.js is unable to process array path mapping
        // how to finally solve this is open issue
        // if these do not match your config, try the alternative one
        // find the alternatives inside your config.js paths: section
        "jquery-ui": "bower_components/jquery-ui/jquery-ui.min",
        "jquery": "bower_components/jquery/jquery.min"
    },
    include: ['{%= namespace %}/{%= name %}', 'amber/deploy'],
    out: "all-in-1.js"
})
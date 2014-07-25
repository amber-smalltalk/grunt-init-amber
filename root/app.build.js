({
    mainConfigFile: "config.js",
    paths: {
        __comment1: "paths for jquery-ui and jquery must be set manually",
        __comment2: "because r.js is unable to process array path mapping",
        __comment3: "how to finally solve this is open issue",
        "jquery-ui": "bower_components/jquery-ui/jquery-ui.min",
        "jquery": "bower_components/jquery/jquery.min"
    },
    include: ['{%= namespace %}/{%= name %}', 'amber/deploy'],
    out: "all-in-1.js"
})
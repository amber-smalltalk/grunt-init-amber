({
    mainConfigFile: "config.js",
    include: ['{%= namespace %}/{%= name %}', 'amber/deploy', 'amber/requirejs/require.min'],
    out: "all-in-1.js"
})
define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    '{%= namespace %}/{%= name %}-Tests',
    'amber-attic/Benchfib',
    'amber-attic/Examples',
    'amber-attic/IDE'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});

define([
    'amber/devel',
    'deploy',
    // --- packages used only during development begin here ---
    '{%= namespace %}/{%= name %}-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});

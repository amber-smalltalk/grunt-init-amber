define([
    'amber/devel',
    'deploy',
    // --- packages to be deployed begin here ---
    '{%= namespace %}/{%= name %}-Tests'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});

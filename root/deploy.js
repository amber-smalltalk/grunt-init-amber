define([
    'amber/deploy',
    // --- packages to be deployed begin here ---
    'amber/web/Web',
    '{%= namespace %}/{%= name %}'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});

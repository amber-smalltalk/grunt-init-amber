define([
    './deploy',
    'amber_core/SUnit',
    // --- packages used only during automated testing begin here ---
    '{%= namespace %}/{%= name %}-Tests'
    // --- packages used only during automated testing end here ---
], function (amber) {
    return amber;
});

define("{%= namespace %}/{%= name %}-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('{%= name %}-Tests');
$core.packages["{%= name %}-Tests"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

$core.addClass('{%= name %}Test', $globals.TestCase, [], '{%= name %}-Tests');

});

define("{%= namespace %}/{%= name %}", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('{%= name %}');
$core.packages["{%= name %}"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

$core.addClass('{%= name %}', $globals.Object, [], '{%= name %}');

});

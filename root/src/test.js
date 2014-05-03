define("{%= namespace %}/{%= name %}-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st,globals){
smalltalk.addPackage('{%= name %}-Tests');
smalltalk.packages["{%= name %}-Tests"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

smalltalk.addClass('{%= name %}Test', globals.TestCase, [], '{%= name %}-Tests');

});

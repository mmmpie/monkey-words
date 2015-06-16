(function(){
	'use strict';

	var globalScope;

	if(typeof(global) === 'object'){
		console.log("using global");
		globalScope = global;
	}
	else {
		console.log("using window");
	    globalScope = window;
	}

	// main is the first file which will get loaded
	// it defines core shared libraries which other modules are going to use
	// modules is an evil global!
	if("_" in globalScope) feature( 'libraries' ).lodash = globalScope._;
	if("$" in globalScope) feature( 'libraries' ).jquery = globalScope.$;
	if("Q" in globalScope) feature( 'libraries' ).promise = globalScope.Q;
	if("document" in globalScope) feature( 'libraries' ).document = globalScope.document;

	// use jquery to schedule loading the main controller
	globalScope.$( function(){
		feature().controller.main( 'body' );
	});
})();

(function(){
	'use strict';

	var global = global || window;

	// main is the first file which will get loaded
	// it defines core shared libraries which other modules are going to use
	// modules is an evil global!
	if("_" in global) module( 'libraries' ).lodash = global._;
	if("$" in global) module( 'libraries' ).jquery = global.$;
	if("Q" in global) module( 'libraries' ).promise = global.Q;

	// use jquery to schedule loading the main controller
	global.$( function(){
		module().controllers.main( 'body' );
	});
})();

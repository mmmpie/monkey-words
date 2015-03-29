(function(){
	'use strict';

	module( 'stateMachines' )
	.main = function(){
		var _public = module().stateMachines.stateMachine();

		_public.addTransition( 'start', 'intro' );
		_public.addTransition( 'intro', ['highscores', 'demo', 'game']);
		_public.addTransition( 'highscores', 'intro' );
		_public.addTransition( 'demo', 'intro' );
		_public.addTransition( 'game', 'highscores' );

		_public.setInitialState( 'start' );
		_public.setTerminalState( 'intro' );

		return _public;
	};
})();

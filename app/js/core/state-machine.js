(function(){
	'use strict';

	feature( 'stateMachines' )
	.stateMachine = function(){
		var _log = feature().core.logging();
		var _ = feature().libraries.lodash;
		var $ = feature().libraries.jquery;

		var _public = {};
		var running = false;

		var listeners = [];

		var initialState = null;
		var currentState = null;
		var stateHistory = [];
		var transitionCount = 0;

		var transition = function( to ){
			// record the transition on the history stack
			stateHistory.push( currentState );
			// update the state record
			currentState = to;
			// call the listeners to let them know that a transition happened
			_.each( listeners, function( listener ){ listener( _public, currentState ); });
		};

		var canTransition = function( state, event ){
			return state.name === event;
		};

		var createState = function( name ){
			return {
				name: name,
				to: [],
				terminal: false,
				subMachines: []
			};
		};

		var states = {
			'error': createState( 'error' )
		};

		_public.setInitialState = function( name ){
			var newStates = _.cloneDeep( states );

			initialState = newStates[name];
			if(!initialState){ throw 'cant set final on a non existant state'; }

			states = newStates;
			return _public;
		};

		_public.setTerminalState = function( name ){
			var newStates = _.cloneDeep( states );

			var terminalState = newStates[name];
			if(!terminalState){ throw 'cant set final on a non existant state'; }
			terminalState.terminal = true;
			states = newStates;
			return _public;
		};

		_public.start = function(){
			running = true;
			transition( initialState );

			// start all the submachines
			_.each(states, function(state){
				_.invoke(state.subMachines, 'start' );
			});

			return _public;
		};

		_public.stop = function(){
			running = false;
			if(!_public.isTerminal()){ transition( states.error ); }

			return _public;
		};

		/**
		 * Add a new state to the state machine. Pass a list of states that it transitions to.
		 * @param {string} name
		 * @param {string} to
		 *
		 * @return {self} Returns itself for chaining.
		 */
		_public.addTransition = function( from, to ){
			var newStates = _.cloneDeep( states );

			// create the from state if it doesnt exist
			newStates[from] = newStates[from] || createState( from );

			// if the to state was named
			if(to){
				// create the to state if it doesnt exist
				newStates[to] = newStates[to] || createState( to );

				// record the transition between the two states
				newStates[from].to.push( newStates[to].name );
			}

			states = newStates;

			return _public;
		};

		_public.addListener = function( listener ){
			if(typeof(listener) !== 'function' ){ throw 'listeners must be functions'; }
			listeners.push( listener );

			return _public;
		};

		/**
		 * Given an event check each transition's validation function to see if
		 * it is a valid target to transition to. All potential transitions are
		 * checked, so the last one will win. The event should be in a format
		 * expected by the transition validator. The default validator expects
		 * the even to be a string which will equal the name of the state to
		 * transition to.
		 *
		 * @param  {object} event An event which will be examined for validity.
		 * @return {object}       Itself, for chaining.
		 */
		_public.step = function( event ){
			var previousState = currentState;
			_log.info( 'step' );

			if( !running ){ throw 'state machine cannot be advanced, it is not running'; }

			// If the state has submachines they need to be processed first.
			// If any of the submachines are in an error state then transition
			// to an error.
			// If all the sub machines are in a terminal state then see if the
			// event can be used to transition in this FSM.
			// Otherwise pass the event down to each sub machine.
			var subFsms = currentState.subMachines;

			// if the state has no sub fsms then areAllFsmsTerminal will be true
			// and the state will attempt to transition
			var areAllFsmsTerminal = _.invoke( subFsms, 'isTerminal' ).reduce(function(allTerminal, terminal){ return allTerminal && terminal; }, true );
			if( areAllFsmsTerminal ){
				// find a valid transition
				var validTransition = _.find(currentState.to, function( potentialState ){
					return canTransition( states[potentialState], event );
				});
				// if one was found take it
				if( validTransition ){ transition( states[validTransition] ); }
				else { transition( states.error ); }
			}
			else {
				// otherwise send the event to the sub machines
				_.each(currentState.subMachines, function( subFsm ){
					subFsm.step( event );
				});
			}

			var areAnyFsmsInError = _.invoke( subFsms, 'isError' ).reduce(function(anyError, error){ return anyError || error; }, false );
			if( areAnyFsmsInError ){
				transition( states.error );
				return;
			}

			return _public;
		};

		/**
		 * Returns true if the fsm is in the error state.
		 * @return {Boolean}
		 */
		_public.isError = function(){
			if( currentState ){ return currentState === states.error; }
			return false;
		};

		_public.isTerminal = function(){
			if( currentState ){ return currentState.terminal === true; }
			return false;
		};

		_public.state = function(){
			return currentState;
		};

		_public.history = function(){
			return stateHistory;
		};

		/**
		* Given a state and a state machine add the state machine
		* as a sub machine on the state.
		* When events are sent to the parent they will be passed on to
		* the sub state machine.
		*
		* @param string The name of the state to add the sub machine to.
		* @param {object} A state machine to add.
		* @return self
		*/
		_public.addSubFsm = function( state, subStateMachine ){
			// copy the state machine
			var subFsm = _.cloneDeep( subStateMachine );
			var newStates = _.cloneDeep( states );
			var parentState = newStates[state];
			parentState.subMachines.push( subFsm );
			states = newStates;

			return _public;
		};

		return _public;
	};
})();

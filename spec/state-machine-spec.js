// var stateMachine = require( '../app/js/core/state-machine.js' );
//  
// describe("step", function () {
// 	it("should advance one step", function () {
// 		var fsm = stateMachine();
// 		fsm.addTransition( 'start', 'second' );
// 		fsm.addTransition( 'second', 'third' );
// 		fsm.setInitialState( 'start' );
// 		fsm.start();
//
// 		expect( fsm.history().length ).toBe( 1 );
// 		expect( fsm.state().name ).toBe( 'start' );
// 	});
//
// 	it("should advance two steps", function () {
// 		var fsm = stateMachine();
// 		fsm.addTransition( 'start', 'second' );
// 		fsm.addTransition( 'second', 'third' );
// 		fsm.setInitialState( 'start' );
// 		fsm.start();
// 		fsm.step( 'second' );
//
// 		expect( fsm.history().length ).toBe( 2 );
// 		expect( fsm.state().name ).toBe( 'second' );
// 	});
//
// 	it("should go to an error state", function () {
// 		var fsm = stateMachine();
// 		fsm.addTransition( 'start', 'second' );
// 		fsm.addTransition( 'second', 'third' );
// 		fsm.setInitialState( 'start' );
// 		fsm.start();
// 		fsm.step( 'third' );
//
// 		expect( fsm.history().length ).toBe( 2 );
// 		expect( fsm.state().name ).toBe( 'error' );
// 	});
//
// 	it("should terminate in a final state", function () {
// 		var fsm = stateMachine();
// 		fsm.addTransition( 'start', 'second' );
// 		fsm.addTransition( 'second', 'third' );
// 		fsm.setInitialState( 'start' );
// 		fsm.setTerminalState( 'third' );
// 		fsm.start();
// 		fsm.step( 'second' );
// 		fsm.step( 'third' );
// 		fsm.stop();
// 		expect( fsm.history().length ).toBe( 3 );
// 		expect( fsm.state().name ).toBe( 'third' );
// 		expect( fsm.isTerminal()).toBe( true );
// 	});
//
//     it("should accept an fsm as a state", function () {
//         var fsm = stateMachine();
//         fsm.addTransition( 'start', 'second' );
//         fsm.addTransition( 'second', 'third' );
//         fsm.setInitialState( 'start' );
//         fsm.setTerminalState( 'third' );
//
//         var subFsm = stateMachine();
//         subFsm.addTransition( '_start', '_second' );
//         subFsm.addTransition( '_second', '_third' );
//         subFsm.setInitialState( '_start' )
//         subFsm.setTerminalState( '_third' );
//
//         fsm.addSubFsm( 'second', subFsm );
//
//         fsm.start();
//         fsm.step( 'second' );
//
//         // these should go to the sub fsm
//         fsm.step( '_second' );
//         fsm.step( '_third' );
//
//         // this should continue in the parent
//         fsm.step( 'third' );
//         fsm.stop();
//         expect( fsm.history().length ).toBe( 3 );
//         expect( fsm.state().name ).toBe( 'third' );
//         expect( fsm.isTerminal()).toBe( true );
//     });
// });

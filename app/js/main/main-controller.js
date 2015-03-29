(function(){
    'use strict';

    module( 'controllers' )
    .main = function(selector){
        //var _log = module('core.logging')();
        var _public = module().controllers.controller();
        console.log(module('core.logging'));
        var mainStateMachine = module().stateMachines.main();
        var mainView = module().views.main( 'body' );
        var timer = module().core.timer( 1000 );

        mainStateMachine.addListener( mainView.incoming );
        timer.addListener( function(event){
            mainStateMachine.step(event);
            _log.info( mainStateMachine.isError());
        });
        mainView.addListener( mainStateMachine );
        mainView.render();

        // add listeners for the state machine events
        // each listener starts a sub controller
        // and attaches it as a child of the view
        _public.intro = function(){
            _public.setChild( module().controllers.intro());
        };

        _public.highscores = function(){
            _public.setChild( module().controllers.highscores());
        };

        _public.demo = function(){
            _public.setChild( module().controllers.demo());
        };

        _public.game = function(){
            _public.setChild( module().controllers.game());
        };

        mainStateMachine.start();
        timer.start();

        return _public;
    };
})();

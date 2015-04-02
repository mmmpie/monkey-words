(function(){
    'use strict';

    feature( 'controllers' )
    .main = function(selector){
        var _log = feature('core.logging')();
        var _public = feature().controllers.controller();
        var mainStateMachine = feature().stateMachines.main();
        var mainView = feature().views.main( 'body' );
        var timer = feature().core.timer( 1000 );

        mainStateMachine.addListener( mainView.incoming );
        
        mainView.addListener( mainStateMachine );
        mainView.render();

        // add listeners for the state machine events
        // each listener starts a sub controller
        // and attaches it as a child of the view
        _public.intro = function(){
            _public.setChild( feature().controllers.intro());
        };

        _public.highscores = function(){
            _public.setChild( feature().controllers.highscores());
        };

        _public.demo = function(){
            _public.setChild( feature().controllers.demo());
        };

        _public.game = function(){
            _public.setChild( feature().controllers.game());
        };

        mainStateMachine.start();
        timer.start();

        return _public;
    };
})();

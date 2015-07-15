/// <reference path="../features.ts"/>
/// <reference path="../core/controller.ts"/>

interface MainController extends Controller {
    credits: any;
    intro: any;
    highscores: any;
    demo: any;
    game: any;
}

(function(){
    'use strict';

    feature( 'controller' )
    .main = function(selector){
        var _log = feature().core.logging();
        var _public: MainController = feature().controller();
        var mainStateMachine = feature().stateMachine.main();
        var mainView = feature().view.main( 'body' );
        var timer = feature().core.timer( 1000 );
        var dom = feature().core.dom();

        // connect the view to receive events from the state machine
        // that is, the view will listen for state machine changes
        // and respond to them
        //mainStateMachine.addListener( mainView.incoming );
        mainStateMachine.addListener( _public.incoming );

        // connect the state machine to receive events from
        // the main view
        mainView.addListener( mainStateMachine );

        dom.render(mainView)(dom.get(
            
            ));

        // add listeners for the state machine events
        // each listener starts a sub controller
        // and attaches it as a child of the view
        _public.credits = function(){
          console.log('clicked credits');
          console.log(feature('controller.credits'));
            _public.setChild( feature('controller.credits')());
        };

        _public.intro = function(){
            _public.setChild( feature('controller.intro')());
        };

        _public.highscores = function(){
            _public.setChild( feature('controller.highscores')());
        };

        _public.demo = function(){
            _public.setChild( feature('controller.demo')());
        };

        _public.game = function(){
            _public.setChild( feature('controller.game')());
        };

        mainStateMachine.start();
        timer.start();

        return _public;
    };
})();

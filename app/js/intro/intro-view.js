(function(){
    'use strict';

    module( 'intro' )
    .view = function(){
        var _public = module().views.view();
        _public.selector( 'body' );

        _public.render = function( data ){
            _public.select().append('<div><h1>Monkey Words</h1><button>Play</button><button>High Scores</button><button>Credits</button></div>');
        };

        return _public;
    };
})();
/// <reference path="../features.ts"/>

(function(){
    'use strict';

    feature( 'view' )
    .intro = function(){
        var _public = feature().view();
        _public.selector( 'body' );

        _public.render = function( data ){
            _public.select().append('<div><h1>Monkey Words</h1><button>Play</button><button>High Scores</button><button>Credits</button></div>');
        };

        return _public;
    };
})();

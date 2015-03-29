(function(){
    'use strict';

    module( 'views' )
    .game = function(){
        var _public = module().views.view();
        _public.selector( 'body' );

        _public.render = function( data ){
            _public.select().append('<div class="main"></div>');
        };

        return _public;
    };
})();

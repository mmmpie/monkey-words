(function(){
    'use strict';

    feature( 'views' )
    .game = function(){
        var _public = feature().views.view();
        _public.selector( 'body' );

        _public.render = function( data ){
            _public.select().append('<div class="main"></div>');
        };

        return _public;
    };
})();

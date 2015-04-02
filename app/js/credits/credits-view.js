(function(){
    'use strict';

    feature( 'credits' )
    .view = function(selector){
        var _public = feature().core.view();

        selector = selector | '.main';
        _public.selector( selector );

        _public.render = function( data ){
            _public.select().append('<div>Programming and Design by Jon Hart</div>');
        };

        return _public;
    };
})();

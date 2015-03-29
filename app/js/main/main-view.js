(function(){
    'use strict';

    module( 'views' )
    .main = function(selector){
        var _log = module().core.logging();
        var _public = module().views.view();

        _public.attachTo(selector);

        _public.render = function( data ){
            _public.select().append('<div class="main"></div>');
        };

        return _public;
    };
})();

(function(){
    'use strict';

    feature( 'controllers' )
    .controller = function( selector ){
        var _public = {};
        var _private = {
          child: undefined
        };

        _public.setChild = function( newChild ){
            if(_private.child){_private.child.destroy();}
            _private.child = newChild;
        };

        return _public;
    };
}());

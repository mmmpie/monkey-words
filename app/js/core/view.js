(function(){
    'use strict';

    /**
     * Given a set of data render it.
     * todo - support nesting
     * todo - support concurrency
     * todo - support promises
     *
     * @return {object}
     */
     feature( 'views' )
    .view = function(selector){
        var _ = feature().libraries.lodash;
        var $ = feature().libraries.jquery;
        var _public = {};

        var _private = {
            selector: selector,
            listeners: []
        };

        _public.attachTo = function( selector ){
            _private.selector = selector;
        };

        _public.select = function( selector ){
            return $(_private.selector);
        };

        _public.addListener = function( listener ){
            _private.listeners.push( listener );
        };

        _public.listen = function( event ){
            _(_private.listeners).each(_public.call);
        };

        _public.call = function( listener ){
            listener( event );
        };

        _public.render = function( data ){
            $(_private.selector).append( '<div>test</div>' );
        };

        _public.incoming = function( data ){
            // handle events
        };

        return _public;
    };
})();

(function(){
    module( 'core' )
    .timer = function( intervalTime ){
        var _log = module().core.logging();
        var _private = {
            interval: intervalTime,
            timer: null,
            listeners: []
        };

        var _public = {};

        _public.start = function(){
            _private.timer = setInterval( _public.tick, _private.interval );

            return _public;
        };

        _public.stop = function(){
            clearInterval( _private.timer );
            _private.timer = null;

            return _public;
        };

        _public.tick = function(){
            _log.info( 'tick' );
            _.each(_private.listeners, function(listener){
                listener( 'tick' );
            });

            return _public;
        };

        _public.addListener = function( listener ){
            if(typeof(listener) !== 'function' ){ throw 'listeners must be functions'; }
            _private.listeners.push( listener );

            return _public;
        };

        return _public;
    };
})();

/// <reference path="../features.ts"/>
/// <reference path="../core/logging.ts"/>

interface Controller {
    incoming(event: any): Controller;
    setChild(newChild: any): Controller;
}

(function(){
    'use strict';

    feature()
    .controller = function( selector ){
        var _log: Logger = feature().core.logging();
        var _private = {
            child: undefined
        };

        var _public = {
            incoming: (event) => {
                _log.info(event.state().name);
                if(_public.hasOwnProperty(event.state().name)){
                    console.log('calling ' + event.state().name);
                    _public[event.state().name]();
                }

                return _public;
            },
            setChild: (newChild) => {
                if(_private.child){_private.child.destroy();}
                _private.child = newChild;

                return _public;
            }
        }
        return _public;
    };
}());

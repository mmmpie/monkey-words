/// <reference path="../features.ts"/>
/// <reference path="../core/logging.ts"/>
(function () {
    'use strict';
    feature().controller = function (selector) {
        var _log = feature().core.logging();
        var _private = {
            child: undefined
        };
        var _public = {
            incoming: function (event) {
                _log.info(event.state().name);
                if (_public.hasOwnProperty(event.state().name)) {
                    console.log('calling ' + event.state().name);
                    _public[event.state().name]();
                }
                return _public;
            },
            setChild: function (newChild) {
                if (_private.child) {
                    _private.child.destroy();
                }
                _private.child = newChild;
                return _public;
            }
        };
        return _public;
    };
}());

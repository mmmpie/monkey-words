/// <reference path="../features.ts"/>
(function () {
    'use strict';
    /**
     * Given a set of data render it.
     * todo - support nesting
     * todo - support concurrency
     * todo - support promises
     *
     * @return {object}
     */
    feature().view = function (selector) {
        var _ = feature().libraries.lodash;
        var $ = feature().libraries.jquery;
        var dom = feature().core.dom();
        var log = feature().core.logging();
        var _public = {};
        var _private = {
            selector: selector,
            listeners: []
        };
        _public.attachTo = function (selector) {
            _private.selector = selector;
        };
        _public.select = function (selector) {
            return $(_private.selector);
        };
        _public.addListener = function (listener) {
            _private.listeners.push(listener);
        };
        _public.listen = function (event) {
            _(_private.listeners).each(_public.call);
        };
        _public.call = function (listener) {
            listener(event);
        };
        _public.render = function (viewFn) {
            var rootElement = $();
            var html = viewFn();
        };
        _public.incoming = function (data) {
            // handle a browser event,
            // this involves extracting an event name and the passing
            // it to the controller (which will typically have a state machine)
            var event = '';
            if (data.toElement) {
                event = data.toElement.innerText.toLowerCase().replace(' ', '');
            }
            _.each(_private.listeners, function (listener) {
                listener.step(event);
            });
        };
        return _public;
    };
})();

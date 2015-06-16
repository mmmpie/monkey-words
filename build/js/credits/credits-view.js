/// <reference path="../features.ts"/>
(function () {
    'use strict';
    feature('view').credit = function (selector) {
        var _public = feature().view();
        selector = selector | '.main';
        _public.selector(selector);
        _public.render = function (data) {
            _public.select().append('<div>Programming and Design by Jon Hart</div>');
        };
        return _public;
    };
})();

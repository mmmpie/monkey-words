/// <reference path="../features.ts"/>
(function () {
    'use strict';
    feature('view').highScores = function () {
        var _public = feature().view();
        _public.selector('body');
        _public.render = function (data) {
            _public.select().append('<div class="main"></div>');
        };
        return _public;
    };
})();

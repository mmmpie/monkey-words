/// <reference path="../features.ts"/>

(function(){
    'use strict';

    feature( 'controller.credits', function(selector){
        var _log = feature('core.logging')();
        var _public = feature().controller();
        var view = feature().view.credits();
        view.render();

        return _public;
    });
    console.log(feature('controller.credits'));
})();

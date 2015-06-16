/// <reference path="../features.ts"/>

(function(){
  'use strict';

  feature( 'view' )
  .main = function(selector){
    var $ = feature( 'libraries.jquery' );
    var _log = feature( 'core.logging' );
    var _public = feature( 'view' )( selector );
    var liveElement = undefined;

    _public.attachTo(selector);

    _public.render = function( data ){
        var element = div(
            div(
                h1( 'Monkey Words' )
                .button( 'Play', {value: 'play'})
                .button( 'Intro' )
                .button( 'High Scores' )
                .button( 'Credits' )
            )
            .div({id:'view'})
        )
        .unwrap();

        element.bind( 'click', _public.incoming );
        liveElement = element;
        _public.select().append(element);
    };

    return _public;
  };
})();

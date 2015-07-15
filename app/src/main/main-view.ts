/// <reference path="../features.ts"/>

(function(){
  'use strict';

  feature( 'view' )
  .main = function(selector){
    var _ = feature( 'libraries.lodash' );
    var $ = feature( 'libraries.jquery' );
    var log = feature( 'core.logging' );
    var _public = feature( 'view' )( selector );
    var dom = feature().core.dom();
    var document = feature( 'libraries.document' );
    

    _public.attachTo( selector );

    // the render method is special, it will get called
    // in the object context of the dom library,
    // giving it access to the methods defined in the dom
    // library
    _public.render = function( data ){
        return div(
            div(
                eventTap( 'click', _public.incoming ),
                h1( text( 'Monkey Words' )),
                button( text( 'Play' ), attr( 'value', 'play' )),
                button( text( 'Intro' )),
                button( text( 'High Scores' )),
                button( text( 'Credits' ))
            ),
            div(
                attr( 'id', 'view' ),
                render( _public.children )
            )
        );
    };

    return _public;
  };
})();

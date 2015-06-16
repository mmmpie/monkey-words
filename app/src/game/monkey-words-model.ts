/// <reference path="../features.ts"/>

(function(){
    'use strict';

    feature( 'model' )
    .game = function(){
        var pieces = feature().model.pieces();
        var _public = feature().model();

        var _private = {
            // set up the pieces which are shared in the middle of the table
            pile: pieces.setupPieces(),

            // these are the players
            players: []
        };

        _public.addPlayer = function( name ){
            var newPlayer = feature().models.player( name );
            _private.players.push( newPlayer );
        };

        return _public;
    };
})();

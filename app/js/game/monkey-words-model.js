(function(){
    'use strict';

    feature( 'models' )
    .game = function(){
        var pieces = feature().models.pieces();
        var _public = feature().models.model();

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

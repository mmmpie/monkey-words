(function(){
    'use strict';

    module( 'models' )
    .game = function(){
        var pieces = module().models.pieces();
        var _public = module().models.model();

        var _private = {
            // set up the pieces which are shared in the middle of the table
            pile: pieces.setupPieces(),

            // these are the players
            players: []
        };

        _public.addPlayer = function( name ){
            var newPlayer = module().models.player( name );
            _private.players.push( newPlayer );
        };

        return _public;
    };
})();

/// <reference path="../features.ts"/>

(function(){
    'use strict';

    feature( 'model' )
    .player = function(){
        var _public = feature().model();

        var _private = {
            name: '',

            // there are the pieces in the player's hand
            pieces: [],

            // words is an array of word objects
            // each word object knows which pieces it is using
            // where it is on the board and if it is spelt correctly
            words: []
        };

        return _public;
    };
})();

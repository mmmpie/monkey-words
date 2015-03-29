require( './css/monkeywords.css' );

var monkeyWords = function(){
	var $ = require( 'jquery' );
	var _ = require( 'lodash' );
	
	var methods = {
		setupPieces: function(){
			var sum = function( data ){
				var total = 0;
				for( var key in data ){
					total += data[key];
				}

				return total;
			};
			var pick = function( data, position ){
				var total = 0;
				for( var key in data ){
					total += data[key];
					if( total >= position ){
						data[key]--;
						return key;
					}
				}

				return '';
			};


			var letterFrequency = {
				a: 13,
				b: 3,
				c: 3,
				d: 6,
				e: 18,
				f: 3,
				g: 4,
				h: 3,
				i: 12,
				j: 2,
				k: 2,
				l: 5,
				m: 3,
				n: 8,
				o: 11,
				p: 3,
				q: 2,
				r: 9,
				s: 6,
				t: 9,
				u: 6,
				v: 3,
				w: 3,
				x: 2,
				y: 3,
				z: 2
			};

			var letters = [];
			var remainingCount = sum( letterFrequency );
			while( remainingCount > 0 ){
				var nextLetter = Math.floor(( Math.random() * remainingCount ) + 1 );
				letters.push( pick( letterFrequency, nextLetter ));
				remainingCount--;
			}

			return letters;
		},
		render: function(){
			for( var i = 0; i < pile.length; i++ ){
				$('body').append( "<div class='letter'>" + pile[i] + "</div>" );
			}
		},
		word: function(){

		}
	};

	// set up the pieces which are shared in the middle of the table
	var pile = methods.setupPieces();
	
	// there are the pieces in the player's hand
	var pieces = [];
	
	// words is an array of word objects
	// each word object knows which pieces it is usind
	// where it is on the board and if it is spelt correctly
	var words = [];
	
	
	$( document ).ready(function() {
  		methods.render();
	});

	return methods;
}();


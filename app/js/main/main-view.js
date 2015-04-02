(function(){
    'use strict';

    feature( 'views' )
    .main = function(selector){
        var _log = feature().core.logging();
        var _public = feature().views.view();

        _public.attachTo(selector);

        _public.render = function( data ){
            _public.select().append('<div class="main"><div><h1>Monkey Words</h1><button>Play</button><button>Intro</button><button>High Scores</button><button>Credits</button></div></div>');
        };

        return _public;
    };
})();

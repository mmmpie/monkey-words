(function(){
    'use strict';

    feature('libraries')
    .jquery = function(selector){
        var state = {
            tag: selector
        };

        return {
            state: state,
            text: function(text) {
                state.text = text;
            }
        };
    };
})();

(function(){
    'use strict';

    feature('libraries')
    .document = {
        createElement: function(tag){
            var element = {
                type: tag,
                children: [],
                appendChild: function(child){
                    element.children.push(child);
                }
            };

            return element;
        },
        createTextNode: function(text){
            return {
                type: 'text',
                text: text
            };
        }
    };
})();

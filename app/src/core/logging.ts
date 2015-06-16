/// <reference path="../features.ts"/>

interface Logger {
    info(obj: any): Logger;
}

(function(){
    feature( 'core' )
    .logging = function(){
        var _public = {
            info: (obj) => {
                console.log(obj);
                // nothing real
                return this;
            }
        };
        return _public;
    };
})();

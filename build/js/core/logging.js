/// <reference path="../features.ts"/>
(function () {
    feature('core').logging = function () {
        var _this = this;
        var _public = {
            info: function (obj) {
                console.log(obj);
                // nothing real
                return _this;
            }
        };
        return _public;
    };
})();

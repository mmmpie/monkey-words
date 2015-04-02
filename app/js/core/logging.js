(function(){
  feature( 'core' )
    .logging = function(){
        var _public = {};

        _public.info = function(a){
            console.log(a);
        };

        return _public;
    };
})();

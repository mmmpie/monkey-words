(function(){
    'use strict';

    // the modules are held in this closure
    var modules = {};

    // but the function is declared globaly
    this.module = function( name ){
        // when no name is passed in return the entire module tree
        if(!name){ return modules; }

        // otherwise build the path and return its children
        var parts = name.split();
        var module = modules;

        for( var i = 0; i < parts.length; i++ ){
            // if the part name doesnt exist add it
            if( !module.hasOwnProperty(parts[i])){
                module[parts[i]] = {};
            }

            // and then move down the module tree
            module = module[parts[i]];
        }

        return module;
    };
}).call( this );

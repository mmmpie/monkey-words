(function(){
    'use strict';

    // the features are held in this closure
    var features = {};

    // but the function is declared globaly
    this.feature = function( name, featureConstructor ){
        // when no name is passed in return the entire feature tree
        if(!name){ return features; }

        // otherwise build the path and return its children
        var parts = name.split();
        var feature = features;
        var isFeatureNew = false;

        for( var i = 0; i < parts.length; i++ ){
          isFeatureNew = false;
            // if the part name doesnt exist add it
            if( !feature.hasOwnProperty(parts[i])){
                feature[parts[i]] = {};
                isFeatureNew = true;
            }

            // and then move down the feature tree
            feature = feature[parts[i]];
        }

        if(featureConstructor && isFeatureNew){
          feature = featureConstructor;
        }

        return feature;
    };
}).call(global || window); // create the feature access function in the global scope for node or in the window for browsers

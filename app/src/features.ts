declare var feature: any;
declare var global: any;


var globalScope;

if(typeof(global) === 'object'){
    globalScope = global;
}
else {
    globalScope = window;
}

(function(){
    'use strict';
    if(this.feature){ throw 'features already loaded'; }

    // the features are held in this closure
    var features = {};

    // but the function is declared globaly
    this.feature = function( name, featureConstructor ){
        // when no name is passed in return the entire feature tree
        if(!name){ return features; }

        // otherwise build the path and return its children
        var parts = name.split('.');
        var feature = features;
        var parentFeature;
        var featureName;
        var isFeatureNew = false;

        for( var i = 0; i < parts.length; i++ ){
          isFeatureNew = false;
          // if the part name doesnt exist add it
          if( !feature.hasOwnProperty(parts[i])){
              feature[parts[i]] = function(){ throw 'no functor defined for ' + name; };
              isFeatureNew = true;
          }

          // and then move down the feature tree
          parentFeature = feature;
          featureName = parts[i];
          feature = feature[parts[i]];
        }

        if(featureConstructor && isFeatureNew && parentFeature && featureName){
          parentFeature[featureName] = featureConstructor;
        }

        return feature;
    };
}).call(globalScope); // create the feature access function in the global scope for node or in the window for browsers

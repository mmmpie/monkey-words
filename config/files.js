/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    // js: {
    //   vendor: [
    //     "vendor/js/underscore.js",
    //     "vendor/js/**/*.js"
    //   ]
    // }

    js: {
      app: [
        "app/js/modules.js",
        "app/js/core/*.js",
        "app/js/controllers/*.js",
        "app/js/models/*.js",
        "app/js/state-machines/*.js",
        "app/js/views/*.js",
        "app/js/main.js"
      ]
    }
  };
};

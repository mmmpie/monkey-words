describe("features", function () {
    it("defines a feature", function () {
      require( '../app/js/features.js' );
      var featureA = feature('A') = function(){};
      expect(feature('A')).toBeDefined();
    });

    it("defines a sub feature", function () {
      require( '../app/js/features.js' );
      var featureA = feature('A.B');
      expect(feature('A')).toBeDefined();
    });
});

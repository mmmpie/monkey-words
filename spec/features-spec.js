require( '../app/js/features.js' );

describe("features", function () {
    it("defines a feature", function () {
      var featureA = feature('A', function(){ return 'working';});
      expect(feature('A')()).toBe( 'working' );
    });

    it("defines a sub feature", function () {
      var featureA = feature('A.B');
      expect(feature('A.B')).toBeDefined();
    });

    it("defines a sub sub feature", function () {
      var featureA = feature('A.B.c', function(){ return 'working'; });
      expect(feature('A.B.c')()).toBe('working');
      expect(feature().A.B.c()).toBe('working');
    });
});

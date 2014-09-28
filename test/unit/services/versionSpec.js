describe('version', function() {
    beforeEach(module('dionysusApp.services'));

    it('should return current version', inject(function(version) {
        expect(version).toEqual('0.1.3');
    }));
});
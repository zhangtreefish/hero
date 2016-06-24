
describe('QuickStart E2E Tests', function () {

    var expectedMsg = 'Tour of Projects';

    beforeEach(function () {
        browser.get('');
    });

    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    });
});

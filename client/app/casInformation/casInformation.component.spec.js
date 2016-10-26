'use strict';

describe('Component: CasInformationComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.casInformation'));

  var CasInformationComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CasInformationComponent = $componentController('casInformation', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: CasGetStartedComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.casGetStarted'));

  var CasGetStartedComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CasGetStartedComponent = $componentController('casGetStarted', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

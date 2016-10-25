'use strict';

describe('Component: PricingComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.pricing'));

  var PricingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PricingComponent = $componentController('pricing', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

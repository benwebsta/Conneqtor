'use strict';

describe('Component: CasBenefitsComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.casBenefits'));

  var CasBenefitsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CasBenefitsComponent = $componentController('casBenefits', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: AdvisorSearchComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.advisorSearch'));

  var AdvisorSearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AdvisorSearchComponent = $componentController('advisorSearch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: ClientSearchComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientSearch'));

  var ClientSearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientSearchComponent = $componentController('clientSearch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

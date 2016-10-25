'use strict';

describe('Component: ClientacquisitionsystemComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientacquisitionsystem'));

  var ClientacquisitionsystemComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientacquisitionsystemComponent = $componentController('clientacquisitionsystem', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

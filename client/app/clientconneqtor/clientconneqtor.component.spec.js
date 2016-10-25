'use strict';

describe('Component: ClientconneqtorComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientconneqtor'));

  var ClientconneqtorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientconneqtorComponent = $componentController('clientconneqtor', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

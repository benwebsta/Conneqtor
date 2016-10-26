'use strict';

describe('Component: ClientConneqtorComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientConneqtor'));

  var ClientConneqtorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientConneqtorComponent = $componentController('clientConneqtor', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

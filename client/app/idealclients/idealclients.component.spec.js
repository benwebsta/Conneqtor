'use strict';

describe('Component: IdealClientsComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.idealClients'));

  var IdealClientsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IdealClientsComponent = $componentController('idealClients', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: ClientsearchComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientsearch'));

  var ClientsearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientsearchComponent = $componentController('clientsearch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

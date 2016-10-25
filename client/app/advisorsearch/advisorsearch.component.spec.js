'use strict';

describe('Component: AdvisorsearchComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.advisorsearch'));

  var AdvisorsearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AdvisorsearchComponent = $componentController('advisorsearch', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

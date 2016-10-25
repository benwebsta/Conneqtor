'use strict';

describe('Component: IdealclientsComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.idealclients'));

  var IdealclientsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IdealclientsComponent = $componentController('idealclients', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

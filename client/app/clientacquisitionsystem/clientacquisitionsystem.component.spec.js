'use strict';

describe('Component: ClientAcquisitionSystemComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.clientAcquisitionSystem'));

  var ClientAcquisitionSystemComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientAcquisitionSystemComponent = $componentController('clientAcquisitionSystem', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

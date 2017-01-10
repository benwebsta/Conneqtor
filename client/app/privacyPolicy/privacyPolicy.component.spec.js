'use strict';

describe('Component: PrivacyPolicyComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.privacyPolicy'));

  var PrivacyPolicyComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PrivacyPolicyComponent = $componentController('privacyPolicy', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

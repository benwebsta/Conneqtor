'use strict';

describe('Component: TermsOfUseComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.termsOfUse'));

  var TermsOfUseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TermsOfUseComponent = $componentController('termsOfUse', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

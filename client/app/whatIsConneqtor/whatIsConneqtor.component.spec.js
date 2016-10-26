'use strict';

describe('Component: WhatIsConneqtorComponent', function() {
  // load the controller's module
  beforeEach(module('conneqtorApp.whatIsConneqtor'));

  var WhatIsConneqtorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhatIsConneqtorComponent = $componentController('whatIsConneqtor', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

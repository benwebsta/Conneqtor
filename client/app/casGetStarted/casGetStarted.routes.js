'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('casGetStarted', {
      url: '/casGetStarted',
      template: '<cas-get-started></cas-get-started>'
    });
}

'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('casInformation', {
      url: '/casInformation',
      template: '<cas-information></cas-information>'
    });
}

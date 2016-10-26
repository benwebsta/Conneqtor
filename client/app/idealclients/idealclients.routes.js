'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('idealClients', {
      url: '/idealClients',
      template: '<ideal-clients></ideal-clients>'
    });
}

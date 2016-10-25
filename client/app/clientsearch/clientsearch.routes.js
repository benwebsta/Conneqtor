'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('clientsearch', {
      url: '/clientsearch',
      template: '<clientsearch></clientsearch>'
    });
}

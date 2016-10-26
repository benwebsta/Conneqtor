'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('clientSearch', {
      url: '/clientSearch',
      template: '<client-search></client-search>'
    });
}

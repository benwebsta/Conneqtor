'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pricing', {
      url: '/pricing',
      template: '<pricing></pricing>'
    });
}

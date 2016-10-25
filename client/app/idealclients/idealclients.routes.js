'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('idealclients', {
      url: '/idealclients',
      template: '<idealclients></idealclients>'
    });
}

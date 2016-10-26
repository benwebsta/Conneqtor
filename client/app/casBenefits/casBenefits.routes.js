'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('casBenefits', {
      url: '/casBenefits',
      template: '<cas-benefits></cas-benefits>'
    });
}

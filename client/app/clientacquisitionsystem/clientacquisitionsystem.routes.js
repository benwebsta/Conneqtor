'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('clientAcquisitionSystem', {
      url: '/clientAcquisitionSystem',
      template: '<client-acquisition-system></client-acquisition-system>'
    });
}

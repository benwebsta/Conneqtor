'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('clientConneqtor', {
      url: '/clientConneqtor',
      template: '<client-conneqtor></client-conneqtor>'
    });
}

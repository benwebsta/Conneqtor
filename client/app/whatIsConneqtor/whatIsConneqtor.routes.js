'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('whatIsConneqtor', {
      url: '/whatIsConneqtor',
      template: '<what-is-conneqtor></what-is-conneqtor>'
    });
}

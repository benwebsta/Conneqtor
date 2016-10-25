'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('advisorsearch', {
      url: '/advisorsearch',
      template: '<advisorsearch></advisorsearch>'
    });
}

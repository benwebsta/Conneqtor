'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('termsOfUse', {
      url: '/termsOfUse',
      template: '<terms-of-use></terms-of-use>'
    });
}

'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('advisorSearch', {
      url: '/advisorSearch',
      template: '<advisor-search></advisor-search>'
    });
}

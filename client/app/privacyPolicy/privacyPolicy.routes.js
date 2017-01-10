'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('privacyPolicy', {
      url: '/privacyPolicy',
      template: '<privacy-policy></privacy-policy>'
    });
}

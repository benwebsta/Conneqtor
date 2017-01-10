'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './privacyPolicy.routes';

export class PrivacyPolicyComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.privacyPolicy', [uiRouter])
  .config(routes)
  .component('privacyPolicy', {
    template: require('./privacyPolicy.html'),
    controller: PrivacyPolicyComponent,
    controllerAs: 'privacyPolicyCtrl'
  })
  .name;

'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './termsOfUse.routes';

export class TermsOfUseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.termsOfUse', [uiRouter])
  .config(routes)
  .component('termsOfUse', {
    template: require('./termsOfUse.html'),
    controller: TermsOfUseComponent,
    controllerAs: 'termsOfUseCtrl'
  })
  .name;

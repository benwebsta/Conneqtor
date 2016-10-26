'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './casInformation.routes';

export class CasInformationComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.casInformation', [uiRouter])
  .config(routes)
  .component('casInformation', {
    template: require('./casInformation.html'),
    controller: CasInformationComponent,
    controllerAs: 'casInformationCtrl'
  })
  .name;

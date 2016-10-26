'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientAcquisitionSystem.routes';

export class ClientAcquisitionSystemComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientAcquisitionSystem', [uiRouter])
  .config(routes)
  .component('clientAcquisitionSystem', {
    template: require('./clientAcquisitionSystem.html'),
    controller: ClientAcquisitionSystemComponent,
    controllerAs: 'clientAcquisitionSystemCtrl'
  })
  .name;

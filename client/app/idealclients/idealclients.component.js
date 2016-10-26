'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './idealClients.routes';

export class IdealClientsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.idealClients', [uiRouter])
  .config(routes)
  .component('idealClients', {
    template: require('./idealClients.html'),
    controller: IdealClientsComponent,
    controllerAs: 'idealClientsCtrl'
  })
  .name;

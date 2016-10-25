'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientsearch.routes';

export class ClientsearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientsearch', [uiRouter])
  .config(routes)
  .component('clientsearch', {
    template: require('./clientsearch.html'),
    controller: ClientsearchComponent,
    controllerAs: 'clientsearchCtrl'
  })
  .name;

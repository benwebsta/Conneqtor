'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientacquisitionsystem.routes';

export class ClientacquisitionsystemComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientacquisitionsystem', [uiRouter])
  .config(routes)
  .component('clientacquisitionsystem', {
    template: require('./clientacquisitionsystem.html'),
    controller: ClientacquisitionsystemComponent,
    controllerAs: 'clientacquisitionsystemCtrl'
  })
  .name;

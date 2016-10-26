'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientSearch.routes';

export class ClientSearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientSearch', [uiRouter])
  .config(routes)
  .component('clientSearch', {
    template: require('./clientSearch.html'),
    controller: ClientSearchComponent,
    controllerAs: 'clientSearchCtrl'
  })
  .name;

'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientconneqtor.routes';

export class ClientconneqtorComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientconneqtor', [uiRouter])
  .config(routes)
  .component('clientconneqtor', {
    template: require('./clientconneqtor.html'),
    controller: ClientconneqtorComponent,
    controllerAs: 'clientconneqtorCtrl'
  })
  .name;

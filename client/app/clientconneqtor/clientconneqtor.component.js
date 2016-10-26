'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './clientConneqtor.routes';

export class ClientConneqtorComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.clientConneqtor', [uiRouter])
  .config(routes)
  .component('clientConneqtor', {
    template: require('./clientConneqtor.html'),
    controller: ClientConneqtorComponent,
    controllerAs: 'clientConneqtorCtrl'
  })
  .name;

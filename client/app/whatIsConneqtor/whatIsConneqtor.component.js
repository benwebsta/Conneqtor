'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatIsConneqtor.routes';

export class WhatIsConneqtorComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.whatIsConneqtor', [uiRouter])
  .config(routes)
  .component('whatIsConneqtor', {
    template: require('./whatIsConneqtor.html'),
    controller: WhatIsConneqtorComponent,
    controllerAs: 'whatIsConneqtorCtrl'
  })
  .name;

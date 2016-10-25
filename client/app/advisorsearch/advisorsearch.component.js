'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './advisorsearch.routes';

export class AdvisorsearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.advisorsearch', [uiRouter])
  .config(routes)
  .component('advisorsearch', {
    template: require('./advisorsearch.html'),
    controller: AdvisorsearchComponent,
    controllerAs: 'advisorsearchCtrl'
  })
  .name;

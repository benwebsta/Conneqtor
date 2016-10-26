'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './casGetStarted.routes';

export class CasGetStartedComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.casGetStarted', [uiRouter])
  .config(routes)
  .component('casGetStarted', {
    template: require('./casGetStarted.html'),
    controller: CasGetStartedComponent,
    controllerAs: 'casGetStartedCtrl'
  })
  .name;

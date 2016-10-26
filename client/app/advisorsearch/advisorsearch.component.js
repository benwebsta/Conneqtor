'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './advisorSearch.routes';

export class AdvisorSearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.advisorSearch', [uiRouter])
  .config(routes)
  .component('advisorSearch', {
    template: require('./advisorSearch.html'),
    controller: AdvisorSearchComponent,
    controllerAs: 'advisorSearchCtrl'
  })
  .name;

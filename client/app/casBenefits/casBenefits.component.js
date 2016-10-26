'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './casBenefits.routes';

export class CasBenefitsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.casBenefits', [uiRouter])
  .config(routes)
  .component('casBenefits', {
    template: require('./casBenefits.html'),
    controller: CasBenefitsComponent,
    controllerAs: 'casBenefitsCtrl'
  })
  .name;

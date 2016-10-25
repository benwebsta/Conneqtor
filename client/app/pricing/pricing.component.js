'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pricing.routes';

export class PricingComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.pricing', [uiRouter])
  .config(routes)
  .component('pricing', {
    template: require('./pricing.html'),
    controller: PricingComponent,
    controllerAs: 'pricingCtrl'
  })
  .name;

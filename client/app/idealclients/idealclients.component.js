'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './idealclients.routes';

export class IdealclientsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('conneqtorApp.idealclients', [uiRouter])
  .config(routes)
  .component('idealclients', {
    template: require('./idealclients.html'),
    controller: IdealclientsComponent,
    controllerAs: 'idealclientsCtrl'
  })
  .name;

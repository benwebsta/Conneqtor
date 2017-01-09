'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './main.routes';
// import conneqtorApp.clientsearch from './clientsearch/clientsearch.component';

export class MainComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
    console.log(this.message);
  }
}

export default angular.module('conneqtorApp.main', [uiRouter])
  .config(routes)
  .component('main', {
    template: require('./main.html'),
    controller: MainComponent,  
    controllerAs: 'mainCtrl'
  })
  .name;
// function CarouselDemoCtrl($scope){
//   $scope.myInterval = 3000;
//   $scope.slides = [
//     {
//       image: url("../../assets/images/Carousel1.jpg")
//     },
//     {
//       image: url("../../assets/images/Carousel2.jpg")
//     },
//     {
//       image: url("../../assets/images/Carousel3.jpg")
//     },
//     {
//       image: url("../../assets/images/Carousel4.jpg")
//     }
//   ];
// }
'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('conneqtorApp.signup', [])
  .controller('SignupController', SignupController)
  .name;

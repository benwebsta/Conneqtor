'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import clientSearch from './clientSearch/clientSearch.component';
import advisorSearch from './advisorSearch/advisorSearch.component';
import idealClients from './idealClients/idealClients.component';
import clientConneqtor from './clientConneqtor/clientConneqtor.component';
import clientAcquisitionSystem from './clientAcquisitionSystem/clientAcquisitionSystem.component';
import pricing from './pricing/pricing.component';
import casInformation from './casInformation/casInformation.component';
import casBenefits from './casBenefits/casBenefits.component';
import casGetStarted from './casGetStarted/casGetStarted.component';
import whatIsConneqtor from './whatIsConneqtor/whatIsConneqtor.component';

import './app.less';

angular.module('conneqtorApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
    uiBootstrap, _Auth, account, admin, navbar, footer, main, constants, socket, util, 
    clientSearch, advisorSearch, idealClients, clientConneqtor, clientAcquisitionSystem,
    pricing, casInformation, casBenefits, casGetStarted, whatIsConneqtor
  ])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['conneqtorApp'], {
      strictDi: true
    });
  });

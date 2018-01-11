import angular from 'angular';
import AppController from './controllers';


angular
  .module('app', [
    AppController.name
  ]);
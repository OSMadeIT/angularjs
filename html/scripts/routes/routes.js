var demoAppp = angular.module('AngularApp', ['ngRoute']);
demoAppp.config(function ($routeProvider) {
      $routeProvider
        .when('/page1',
          {
            controller: 'SimpleController',
            templateUrl: 'page1.html'
          })
        .when('/page2',
          {
            controller: 'SimpleController',
            templateUrl: 'page2.html'
          })
        .otherwise({ redirectTo: '/page1' });
    });
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/myRequests',         {templateUrl: 'partials/myRequests.html',         controller: MyCtrl1});
    $routeProvider.when('/newRequest',         {templateUrl: 'partials/newRequest.html',         controller: MyCtrl2});
    $routeProvider.when('/validateRequests',   {templateUrl: 'partials/validateRequests.html',   controller: MyCtrl2});
    $routeProvider.when('/manageUsers',        {templateUrl: 'partials/manageUsers.html',        controller: MyCtrl2});
    $routeProvider.when('/manageUserTypes',    {templateUrl: 'partials/manageUserTypes.html',    controller: MyCtrl2});
    $routeProvider.when('/manageRequestTypes', {templateUrl: 'partials/manageRequestTypes.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/myRequests'});
  }]);

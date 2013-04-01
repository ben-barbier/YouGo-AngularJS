'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin',                 {templateUrl: 'partials/signin.html',                 controller: MainCtrl});
    $routeProvider.when('/myRequests',             {templateUrl: 'partials/myRequests.html',             controller: MainCtrl});
    $routeProvider.when('/newRequest',             {templateUrl: 'partials/newRequest.html',             controller: MainCtrl});
    $routeProvider.when('/validateRequests',       {templateUrl: 'partials/validateRequests.html',       controller: MainCtrl});
    $routeProvider.when('/manageUsers',            {templateUrl: 'partials/manageUsers.html',            controller: MainCtrl});
    $routeProvider.when('/manageUserTypes',        {templateUrl: 'partials/manageUserTypes.html',        controller: MainCtrl});
    $routeProvider.when('/manageRequestTypes',     {templateUrl: 'partials/manageRequestTypes.html',     controller: MainCtrl});
    $routeProvider.otherwise({redirectTo: '/signin'});
  }]);

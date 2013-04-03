'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin',                 {templateUrl: 'partials/signin.html'});
    $routeProvider.when('/myRequests',             {templateUrl: 'partials/myRequests.html'});
    $routeProvider.when('/newRequest',             {templateUrl: 'partials/newRequest.html'});
    $routeProvider.when('/validateRequests',       {templateUrl: 'partials/validateRequests.html'});
    $routeProvider.when('/manageUsers',            {templateUrl: 'partials/manageUsers.html'});
    $routeProvider.when('/manageUserTypes',        {templateUrl: 'partials/manageUserTypes.html'});
    $routeProvider.when('/manageRequestTypes',     {templateUrl: 'partials/manageRequestTypes.html'});
    $routeProvider.otherwise({redirectTo: '/signin'});
  }]);

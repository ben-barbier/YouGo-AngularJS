'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin',                 {templateUrl: 'partials/signin.html',                 controller: YougoCtrl});
    $routeProvider.when('/myRequests',             {templateUrl: 'partials/myRequests.html',             controller: YougoCtrl});
    $routeProvider.when('/newRequest',             {templateUrl: 'partials/newRequest.html',             controller: YougoCtrl});
    $routeProvider.when('/validateRequests',       {templateUrl: 'partials/validateRequests.html',       controller: YougoCtrl});
    $routeProvider.when('/manageUsers',            {templateUrl: 'partials/manageUsers.html',            controller: YougoCtrl});
    $routeProvider.when('/manageUsersList',        {templateUrl: 'partials/manageUsersList.html',        controller: YougoCtrl});
    $routeProvider.when('/manageUserTypes',        {templateUrl: 'partials/manageUserTypes.html',        controller: YougoCtrl});
    $routeProvider.when('/manageUserTypesList',    {templateUrl: 'partials/manageUserTypesList.html',    controller: YougoCtrl});
    $routeProvider.when('/manageRequestTypes',     {templateUrl: 'partials/manageRequestTypes.html',     controller: YougoCtrl});
    $routeProvider.when('/manageRequestTypesList', {templateUrl: 'partials/manageRequestTypesList.html', controller: YougoCtrl});
    $routeProvider.otherwise({redirectTo: '/signin'});
  }]);

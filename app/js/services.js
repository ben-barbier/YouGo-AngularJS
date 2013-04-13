'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', ['ngResource']);
services.value('version', '0.1');

services.factory('getNextID', function(){
  return function(list) {
    var newId = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id > newId) {
        newId = list[i].id;
      }
    };
    newId++;
    return newId;
  }
});

services.factory('formatDate', function(){
  return function(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m) + '/' + y;
  }
});
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);
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
'use strict';

/* Controllers */

function MainCtrl($scope, $log, $location) {

  $log.info("INIT CRTL");

  $scope.newUser = null;
  $scope.newRequest = {type: 1};

  $scope.requestTypes = [
    { id: 1, description: 'Congé payé' },
    { id: 2, description: 'Congé par anticipation' },
    { id: 3, description: 'Congé exceptionnel' },
    { id: 4, description: 'RTT Collaborateur' },
    { id: 5, description: 'RTT Employeur' },
    { id: 6, description: 'Récupération' },
    { id: 7, description: 'Repos compensateur' },
    { id: 8, description: 'Congé sans solde' }
  ];

  $scope.userTypes = [
    { id: 1, description: 'Consultant' },
    { id: 2, description: 'Ressources Humaines' },
    { id: 3, description: 'Direction' },
    { id: 4, description: 'Commercial' }
  ];

  $scope.users = [
    { id: 1, actif: true,  admin: false, nom: 'Kristina CHUNG', email: 'kristina.kristina@company.com', type: 1 },
    { id: 2, actif: true,  admin: true,  nom: 'Paige CHEN',     email: 'paige.paige@company.com',       type: 3 },
    { id: 3, actif: false, admin: false, nom: 'Sherri MELTON',  email: 'sherri.sherri@company.com',     type: 4 }
  ];

  $scope.requestStatus = [
    { id: 1, description: 'En attente', editable: true },
    { id: 2, description: 'Validé',     editable: false },
    { id: 3, description: 'Refusé',     editable: false }
  ];

  $scope.requests = [
    { id: 1, type: 5, du: new Date(2010, 10, 22), au: new Date(2010, 10, 24), observation: 'S‘il vous plait',  reponse: '',             statut: 1},
    { id: 2, type: 1, du: new Date(2010, 11, 23), au: new Date(2011,  3,  1), observation: 'Vacances de Noel', reponse: '',             statut: 1},
    { id: 3, type: 8, du: new Date(2011, 2,  17), au: new Date(2011,  2, 17), observation: '',                 reponse: 'OK',           statut: 2},
    { id: 4, type: 4, du: new Date(2011, 1,   3), au: new Date(2011,  1,  4), observation: '',                 reponse: 'Pas possible', statut: 3}
  ];

  $scope.selectRequest = function(requestId) {
    $scope.selectedRequest = $.grep($scope.requests, function(e){ return e.id == requestId; })[0];
  };

  $scope.selectRequestType = function(requestTypeId) {
    $scope.selectedRequestType = $.grep($scope.requestTypes, function(e){ return e.id == requestTypeId; })[0];
  };

  $scope.selectUserType = function(userTypeId) {
    $scope.selectedUserType = $.grep($scope.userTypes, function(e){ return e.id == userTypeId; })[0];
  };

  $scope.selectUser = function(userId) {
    $scope.selectedUser = $.grep($scope.users, function(e){ return e.id == userId; })[0];
  };

  $scope.getUserById = function(userId) {
    return $.grep($scope.users, function(e){ return e.id == userId; })[0];
  }

  $scope.getUserTypeById = function(userTypeId) {
    return $.grep($scope.userTypes, function(e){ return e.id == userTypeId; })[0];
  }

  $scope.getRequestTypeById = function(requestTypeId) {
    return $.grep($scope.requestTypes, function(e){ return e.id == requestTypeId; })[0];
  }

  $scope.getRequestStatusById = function(requestStatusId) {
    return $.grep($scope.requestStatus, function(e){ return e.id == requestStatusId; })[0];
  }

  $scope.addUserType = function(description) {
    $scope.userTypes.push({ id: getNextId($scope.userTypes), description: description });
  }

  $scope.removeUserType = function(userTypeId) {
    var userTypeToRemove = $scope.getUserTypeById(userTypeId);
    $scope.userTypes.splice($.inArray(userTypeToRemove, $scope.userTypes),1);
  }

  $scope.addRequestType = function(description) {
    $scope.requestTypes.push({ id: getNextId($scope.requestTypes), description: description });
  }

  $scope.removeRequestType = function(requestTypeId) {
    var requestTypeToRemove = $scope.getRequestTypeById(requestTypeId);
    $scope.requestTypes.splice($.inArray(requestTypeToRemove, $scope.requestTypes),1);
  }

  $scope.addUser = function(newUser) {
    $log.info("Add User : " + JSON.stringify(newUser));
    newUser['id'] = getNextId($scope.users);
    newUser['actif'] = (newUser.actif==true)?true:false;
    newUser['admin'] = (newUser.admin==true)?true:false;
    $scope.users.push(angular.copy(newUser));
  }

  $scope.removeUser = function(userId) {
    var userToRemove = $scope.getUserById(userId);
    $scope.users.splice($.inArray(userToRemove, $scope.users),1);
  }

  $scope.addRequest = function(newRequest) {
    $log.info("Add Request : " + JSON.stringify(newRequest));
    newRequest['id'] = getNextId($scope.requests);
    newRequest['statut'] = 1;
    $scope.requests.push(angular.copy(newRequest));
    $location.path('/myRequests');
  }

  function getNextId(list) {
    var newId = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id > newId) {
        newId = list[i].id;
      }
    };
    newId++;
    return newId;
  }

}

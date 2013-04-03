'use strict';

/* Controllers */

function MainCtrl($scope, $log) {

  $log.info("INIT CRTL");

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
    { id: 1, type: 5, du: '22/10/2010', au: '24/10/2010', observation: 'S‘il vous plait',  reponse: '',             statut: 1},
    { id: 2, type: 1, du: '23/12/2010', au: '03/01/2011', observation: 'Vacances de Noel', reponse: '',             statut: 1},
    { id: 3, type: 8, du: '17/02/2011', au: '17/02/2011', observation: '',                 reponse: 'OK',           statut: 2},
    { id: 4, type: 4, du: '03/01/2011', au: '04/01/2011', observation: '',                 reponse: 'Pas possible', statut: 3}
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
    $scope.newUserTypeDescription = null;
  }

  $scope.removeUserType = function(userTypeId) {
    var userTypeToRemove = $scope.getUserTypeById(userTypeId);
    $scope.userTypes.splice($.inArray(userTypeToRemove, $scope.userTypes),1);
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

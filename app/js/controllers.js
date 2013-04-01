'use strict';

/* Controllers */

function MainCtrl($scope) {
  $scope.user = "BOB";

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

  $scope.selectRequestType = function($requestTypeId) {
    $scope.selectedRequestType = $.grep($scope.requestTypes, function(e){ return e.id == $requestTypeId; })[0];
  };

  $scope.selectUserType = function($userTypeId) {
    $scope.selectedUserType = $.grep($scope.userTypes, function(e){ return e.id == $userTypeId; })[0];
  };

  $scope.selectUser = function($userId) {
    $scope.selectedUser = $.grep($scope.users, function(e){ return e.id == $userId; })[0];
  };

  $scope.getUserTypeById = function($userTypeId) {
    return $.grep($scope.userTypes, function(e){ return e.id == $userTypeId; })[0];
  }

}

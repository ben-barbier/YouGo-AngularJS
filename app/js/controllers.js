'use strict';

/* Controllers */

function UserCtrl($scope, $log, $location) {
  
  $log.info("Init UserCtrl");

  $scope.newUser = {type: 1};

  $scope.addUser = function(newUser) {
    newUser['id'] = $scope.getNextId($scope.users);
    newUser['actif'] = (newUser.actif==true)?true:false;
    newUser['admin'] = (newUser.admin==true)?true:false;
    $scope.users.push(angular.copy(newUser));
    $scope.message = "Utilisateur " + newUser.nom + " ajouté." ;
    $scope.newUser = {type: 1};
  }

  $scope.selectUser = function(userId) {
    $scope.selectedUser = angular.copy($scope.getUserById(userId));
  };

  $scope.removeUser = function(userId) {
    var userToRemove = $scope.getUserById(userId);
    $scope.users.splice($.inArray(userToRemove, $scope.users),1);
    $scope.message = "Utilisateur " + userToRemove.nom + " supprimé." ;
  }

  $scope.updateUser = function(user) {
    for (var i in $scope.users) {
      if ($scope.users[i].id == user.id) {
        $scope.users[i] = user;
      }
    }
  }

}

function UserTypeCtrl($scope, $log, $location) {
  
  $log.info("Init UserTypeCtrl");

  $scope.addUserType = function(description) {
    $scope.userTypes.push({ id: $scope.getNextId($scope.userTypes), description: description });
    $scope.message = "Type d'utilisateurs '" + description + "' ajouté." ;
    $scope.newDescription = "";
  }

  $scope.selectUserType = function(userTypeId) {
    $scope.selectedUserType = angular.copy($scope.getUserTypeById(userTypeId));
  };

  $scope.removeUserType = function(userTypeId) {
    var userTypeToRemove = $scope.getUserTypeById(userTypeId);
    $scope.userTypes.splice($.inArray(userTypeToRemove, $scope.userTypes),1);
    $scope.message = "Type d'utilisateurs '" + userTypeToRemove.description + "' supprimé." ;
  }

  $scope.updateUserType = function(userType) {
    $scope.userTypes[(userType.id - 1)].description = userType.description;
  }

}

function RequestTypeCtrl($scope, $log, $location) {
  
  $log.info("Init RequestTypeCtrl");

  $scope.addRequestType = function(description) {
    $scope.requestTypes.push({ id: $scope.getNextId($scope.requestTypes), description: description });
    $scope.message = "Type de congés '" + description + "' ajouté." ;
    $scope.newDescription = "";
  }

  $scope.selectRequestType = function(requestTypeId) {
    $scope.selectedRequestType = angular.copy($scope.getRequestTypeById(requestTypeId));
  };

  $scope.removeRequestType = function(requestTypeId) {
    var requestTypeToRemove = $scope.getRequestTypeById(requestTypeId);
    $scope.requestTypes.splice($.inArray(requestTypeToRemove, $scope.requestTypes),1);
    $scope.message = "Type de congés '" + requestTypeToRemove.description + "' supprimé." ;
  }

  $scope.updateRequestType = function(requestType) {
    $scope.requestTypes[(requestType.id - 1)].description = requestType.description;
  }

}

function AddRequestCtrl($scope, $log, $location) {
  
  $log.info("Init AddRequestCtrl");

  $scope.newRequest = {type: 1};

  $scope.addRequest = function(newRequest) {
    newRequest['id'] = $scope.getNextId($scope.requests);
    newRequest['statut'] = 1;
    newRequest['user'] = $scope.user.id;
    $scope.requests.push(angular.copy(newRequest));
    $location.path('/myRequests');
    $scope.message = "Demande de congé ajoutée." ;
  }

}

function MyRequestsCtrl($scope, $log, $location) {
  
  $log.info("Init MyRequestsCtrl");

  $scope.selectRequest = function(requestId) {
    $scope.selectedRequest = angular.copy($scope.getRequestById(requestId));
  };

  $scope.getUserRequests = function(userId) {
    return $.grep($scope.requests, function(e){ return e.user == userId; });
  }

  $scope.removeRequest = function(requestId) {
    var requestToRemove = $scope.getRequestById(requestId);
    $scope.message = "Demande de " + $scope.getRequestTypeById(requestToRemove.type).description + " du " + $scope.formatDate(requestToRemove.du) + " au " + $scope.formatDate(requestToRemove.au) + " supprimée." ;
    $scope.requests.splice($.inArray(requestToRemove, $scope.requests),1);    
  }

  $scope.updateRequest = function(request) {
    for (var i in $scope.requests) {
      if ($scope.requests[i].id == request.id) {
        $scope.requests[i] = request;
      }
    }
  }

}

function MainCtrl($scope, $log, $location) {

  $log.info("Init MainCtrl");

  $scope.user = null;
  $scope.message = "";

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
    { id: 1, type: 5, du: new Date(2010, 10, 22), au: new Date(2010, 10, 24), observation: 'S‘il vous plait',  reponse: '',             statut: 1, user: 1},
    { id: 2, type: 1, du: new Date(2010, 11, 23), au: new Date(2011,  3,  1), observation: 'Vacances de Noel', reponse: '',             statut: 1, user: 1},
    { id: 3, type: 8, du: new Date(2011, 2,  17), au: new Date(2011,  2, 17), observation: '',                 reponse: 'OK',           statut: 2, user: 1},
    { id: 4, type: 4, du: new Date(2011, 1,   3), au: new Date(2011,  1,  4), observation: '',                 reponse: 'Pas possible', statut: 3, user: 1},
    { id: 5, type: 5, du: new Date(2010, 10, 22), au: new Date(2010, 10, 24), observation: 'S‘il vous plait',  reponse: '',             statut: 1, user: 2}
  ];

  $scope.getUserById = function(userId) {
    return $.grep($scope.users, function(e){ return e.id == userId; })[0];
  }

  $scope.getRequestById = function(requestId) {
    return $.grep($scope.requests, function(e){ return e.id == requestId; })[0];
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

  $scope.signin = function(login, password) {
    if (login=='kristina.kristina@company.com' && password=='pass') {
      $scope.user = $scope.getUserById(1);
      $location.path('/myRequests');
      $scope.message = "";
    } else if (login=='paige.paige@company.com' && password=='pass') {
      $scope.user = $scope.getUserById(2);
      $location.path('/myRequests');
      $scope.message = "";
    } else {
      $scope.message = "Login ou mot de passe incorrect." ;
    }
  }

  $scope.signout = function(login, password) {
    $scope.user = null;
    $scope.message = "Déconnecté...";
    $location.path('/signin');
  }

  $scope.checkLogin = function() {
    if ($scope.user == null) {
      $log.info("checkLogin : KO (not logged)");
      $location.path('/signin');
    } else if ($scope.user.actif != true) {
      $log.info("checkLogin : KO (user not active)");
      $location.path('/signin');
    } else {
      $log.info("checkLogin : OK");
      return true;  
    }
  }

  $scope.getNextId = function(list) {
    var newId = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id > newId) {
        newId = list[i].id;
      }
    };
    newId++;
    return newId;
  }

  $scope.formatDate = function(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m) + '/' + y;
  }

}

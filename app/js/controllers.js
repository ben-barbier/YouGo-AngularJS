'use strict';

/* Controllers */

function UserCtrl($scope, $log, $location, getNextID) {
  
  $log.info("Init UserCtrl");

  $scope.newUser = {typeId: 1};

  $scope.addUser = function(newUser) {
    newUser['id'] = getNextID($scope.users);
    newUser['active'] = (newUser.active==true)?true:false;
    newUser['admin'] = (newUser.admin==true)?true:false;
    $scope.users.push(angular.copy(newUser));
    $scope.displayMessage("Utilisateur " + newUser.fullName + " ajouté.");
    $scope.newUser = {typeId: 1};
  }

  $scope.selectUser = function(userId) {
    $scope.selectedUser = angular.copy($scope.getUserById(userId));
  };

  $scope.removeUser = function(userId) {
    var userToRemove = $scope.getUserById(userId);
    $scope.users.splice($.inArray(userToRemove, $scope.users),1);
    $scope.displayMessage("Utilisateur " + userToRemove.fullName + " supprimé.");
  }

  $scope.updateUser = function(user) {
    for (var i in $scope.users) {
      if ($scope.users[i].id == user.id) {
        $scope.users[i] = user;
        $scope.displayMessage("Utilisateur " + user.fullName + " modifié.");
      }
    }
  }

}

function UserTypeCtrl($scope, $log, $location, getNextID) {
  
  $log.info("Init UserTypeCtrl");

  $scope.addUserType = function(description) {
    $scope.userTypes.push({ id: getNextID($scope.userTypes), description: description });
    $scope.displayMessage("Type d'utilisateurs '" + description + "' ajouté.");
    $scope.newDescription = "";
  }

  $scope.selectUserType = function(userTypeId) {
    $scope.selectedUserType = angular.copy($scope.getUserTypeById(userTypeId));
  };

  $scope.removeUserType = function(userTypeId) {
    var userTypeToRemove = $scope.getUserTypeById(userTypeId);
    $scope.userTypes.splice($.inArray(userTypeToRemove, $scope.userTypes),1);
    $scope.displayMessage("Type d'utilisateurs '" + userTypeToRemove.description + "' supprimé.");
  }

  $scope.updateUserType = function(userType) {
    $scope.userTypes[(userType.id - 1)].description = userType.description;
    $scope.displayMessage("Type d'utilisateurs '" + userType.description + "' modifié.");
  }

}

function RequestTypeCtrl($scope, $log, $location, getNextID) {
  
  $log.info("Init RequestTypeCtrl");

  $scope.addRequestType = function(description) {
    $scope.requestTypes.push({ id: getNextID($scope.requestTypes), description: description });
    $scope.displayMessage("Type de congés '" + description + "' ajouté.");
    $scope.newDescription = "";
  }

  $scope.selectRequestType = function(requestTypeId) {
    $scope.selectedRequestType = angular.copy($scope.getRequestTypeById(requestTypeId));
  };

  $scope.removeRequestType = function(requestTypeId) {
    var requestTypeToRemove = $scope.getRequestTypeById(requestTypeId);
    $scope.requestTypes.splice($.inArray(requestTypeToRemove, $scope.requestTypes),1);
    $scope.displayMessage("Type de congés '" + requestTypeToRemove.description + "' supprimé.");
  }

  $scope.updateRequestType = function(requestType) {
    $scope.requestTypes[(requestType.id - 1)].description = requestType.description;
    $scope.displayMessage("Type de congés '" + requestType.description + "' modifié.");
  }

}

function AddRequestCtrl($scope, $log, $location, getNextID) {
  
  $log.info("Init AddRequestCtrl");

  $scope.newRequest = {type: 1};

  $scope.addRequest = function(newRequest) {
    newRequest['id'] = getNextID($scope.requests);
    newRequest['statut'] = 1;
    newRequest['user'] = $scope.user.id;
    $scope.requests.push(angular.copy(newRequest));
    $location.path('/myRequests');
    $scope.displayMessage("Demande de congé ajoutée.");
  }

}

function MyRequestsCtrl($scope, $log, $location, formatDate) {
  
  $log.info("Init MyRequestsCtrl");

  $scope.selectRequest = function(requestId) {
    $scope.selectedRequest = angular.copy($scope.getRequestById(requestId));
  };

  $scope.getUserRequests = function(userId) {
    return $.grep($scope.requests, function(e){ return e.user == userId; });
  }

  $scope.removeRequest = function(requestId) {
    var requestToRemove = $scope.getRequestById(requestId);    
    $scope.requests.splice($.inArray(requestToRemove, $scope.requests),1);
    $scope.displayMessage("Demande de " + $scope.getRequestTypeById(requestToRemove.typeId).description + " du " + formatDate(requestToRemove.from) + " au " + formatDate(requestToRemove.to) + " supprimée.");
  }

  $scope.updateRequest = function(request) {
    for (var i in $scope.requests) {
      if ($scope.requests[i].id == request.id) {
        $scope.requests[i] = request;
        $scope.displayMessage("Demande de " + $scope.getRequestTypeById(request.typeId).description + " modifiée.");
      }
    }
  }

}

function MainCtrl($scope, $log, $location) {

  $log.info("Init MainCtrl");

  $scope.infoDisplayTime = 3000;
  $scope.user = null;
  $scope.message = "";

  $scope.requestTypes = sampleRequestTypes;
  $scope.userTypes = sampleUserTypes;
  $scope.users = sampleUsers;



  $scope.requestStatus = [
    { id: 'PENDING',  description: 'En attente', editable: true },
    { id: 'ACCEPTED', description: 'Validé',     editable: false },
    { id: 'REFUSED',  description: 'Refusé',     editable: false }
  ];

  $scope.requests = [
    { id: 1, typeId: 5, from: '2010-10-22T00:00:00Z', to: '2010-11-24T00:00:00Z', askComment: 'S‘il vous plait',  answerComment: '',             status: 'PENDING',  user: 1},
    { id: 2, typeId: 1, from: '2010-12-23T00:00:00Z', to: '2011-04-01T00:00:00Z', askComment: 'Vacances de Noel', answerComment: '',             status: 'PENDING',  user: 1},
    { id: 3, typeId: 8, from: '2011-03-17T00:00:00Z', to: '2011-03-17T00:00:00Z', askComment: '',                 answerComment: 'OK',           status: 'ACCEPTED', user: 1},
    { id: 4, typeId: 4, from: '2011-01-03T00:00:00Z', to: '2011-02-04T00:00:00Z', askComment: '',                 answerComment: 'Pas possible', status: 'REFUSED',  user: 1},
    { id: 5, typeId: 5, from: '2010-10-22T00:00:00Z', to: '2010-10-24T00:00:00Z', askComment: 'S‘il vous plait',  answerComment: '',             status: 'PENDING',  user: 2}
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
      $scope.displayMessage("Login ou mot de passe incorrect.");
    }
  }

  $scope.signout = function(login, password) {
    $scope.user = null;
    $scope.displayMessage("Déconnecté...");
    $location.path('/signin');
  }

  $scope.checkLogin = function() {
    if ($scope.user == null) {
      $log.info("checkLogin : KO (not logged)");
      $location.path('/signin');
    } else if ($scope.user.active != true) {
      $log.info("checkLogin : KO (user not active)");
      $location.path('/signin');
    } else {
      $log.info("checkLogin : OK");
      return true;  
    }
  }

  $scope.displayMessage = function(message) {
    $scope.message = message;
    $('.alert').fadeIn().delay($scope.infoDisplayTime).fadeOut();
  }

}

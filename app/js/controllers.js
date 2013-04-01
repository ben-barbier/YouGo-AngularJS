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

}

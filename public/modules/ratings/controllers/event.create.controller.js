(function() {
  'use strict';

  angular.module('ratings').controller('EventCreateController',
    ['$scope', '$state', 'EventsService', controller]);

  function controller($scope, $state, EventsService){
    $scope.event = {};

    $scope.submit = function(){
      EventsService.addEvent($scope.event).then(function(){
        $state.go('events');
      });
    };
  }

}());

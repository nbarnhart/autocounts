'use strict';

module.exports = ToursCtrl;

ToursCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function ToursCtrl($scope, $rootScope, User,$location,$state) {
    $scope.viewState = {
        tours: ['Courtney Love','Beach Boys','Beyoncé','Boys II Men'],
    };

    $rootScope.$broadcast('headerUpdate',{
        header: 'TOURS',
    });

    $scope.goToTour = function(tour){
        $state.transitionTo('main.tours.tour',{tour: tour});
    };

}

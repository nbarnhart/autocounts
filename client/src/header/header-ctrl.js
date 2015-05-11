'use strict';

module.exports = HeaderCtrl;

HeaderCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function HeaderCtrl($scope, $rootScope, User,$location,$state) {
    $scope.viewState = {
        header: '',
    };
    $scope.$on('headerUpdate', function(ev,headerInfo) {
        console.log('headerUpdate: ',headerInfo);
        $scope.viewState.header = headerInfo.header;
        $scope.viewState.back = headerInfo.back;
    });

    $scope.toggleNav = function() {
        $rootScope.$broadcast('toggleNav');
    };

    $scope.goBack = function() {
        $state.transitionTo($rootScope.previousState);
    };

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        $rootScope.previousState = from;
    });

}

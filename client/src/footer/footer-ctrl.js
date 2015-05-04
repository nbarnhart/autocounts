'use strict';

module.exports = FooterCtrl;

FooterCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function FooterCtrl($scope, $rootScope, User,$location,$state) {
    $scope.viewState = {
        selectedNavigation: ''
    };
    $scope.$on('$stateChangeSuccess', function() {
        $scope.viewState.state = $state.current.name;
    });
}

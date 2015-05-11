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
        selectedNavigation: '',
        showNav: false,
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.viewState.state = $state.current.name;
    });

    $scope.$on('toggleNav',function() {
        $scope.viewState.showNav = !$scope.viewState.showNav;
    });
}

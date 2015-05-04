'use strict';

module.exports = LogoutCtrl;

LogoutCtrl.$inject = [
    '$scope',
    'User',
    '$state'
];

function LogoutCtrl($scope, User, $state) {
    $scope.logout = function() {
        User.logout();
        $state.transitionTo('login');
    };
}

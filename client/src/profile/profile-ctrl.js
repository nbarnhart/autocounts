'use strict';

module.exports = ProfileCtrl;

ProfileCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function ProfileCtrl($scope, $rootScope, User,$location,$state) {
    $scope.viewState = {};

    $rootScope.$broadcast('headerUpdate',{
        header: 'PROFILE'
    });

}

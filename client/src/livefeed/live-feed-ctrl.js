'use strict';

module.exports = LiveFeedCtrl;

LiveFeedCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function LiveFeedCtrl($scope, $rootScope, User,$location,$state) {
    $scope.viewState = {};

    $rootScope.$broadcast('headerUpdate',{
        header: 'LIVE FEED'
    });

    function enableFlip() {
        $('ul li:first-child').addClass('first');
        $('ul li:last-child').addClass('last');

        $('.card').flip({
            trigger: 'hover',
            speed: 1000
        });
    }

    enableFlip();
}

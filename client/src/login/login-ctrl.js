'use strict';

module.exports = LoginCtrl;

LoginCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
];

function LoginCtrl($scope, $rootScope, User,$location,$state) {
    $rootScope.isLoginPage = true;

    $scope.loginForm = {
        email: '',
        password: '',
    };

    $scope.submit = function() {
        $state.go('main.livefeed');
    };

    /*
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        if((fromState.name === '' || fromState.name.indexOf('main') === 0) && toState.name === 'login'){
            $rootScope.currentUser = {};
            $rootScope.ezCompany = {};
        }
    });

    //MLM: TODO add the rememberMe checkbox
    $scope.submit = function() {
        //User.login({email: $scope.loginForm.email, password: $scope.loginForm.password, rememberMe: true}, function(accessToken) {
        User.login({email: $scope.loginForm.email, password: $scope.loginForm.password, ttl: 1209600000}, function(accessToken) {
           $state.go('main.messaging');
        },function(err){
            var loginAlert = $alert({
                title: 'Bad login or password!',
                content: 'Please re-enter your login and password and try again',
                placement: 'top',
                type: 'info',
                show: true,
                duration: 4,
            });
        });
    };
    */
}

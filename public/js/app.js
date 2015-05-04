(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
//require('angular');

var app = angular.module('autocounts-app', [
    /*
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    */

    'ui.router',
    //'ui.bootstrap', //replaced in favor of angularstrap

    //Loopback Angular SDK
    'lbServices',

    //Angularstrap
    /*
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.popover',
    'mgcrea.ngStrap.select',
    'mgcrea.ngStrap.tooltip',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.helpers.parseOptions',
    */

    /*
    'ngTouch',
    'angular-gestures',
    */

    //Features
    require('./main/index').name,
    require('./footer/index').name,
    require('./login/index').name,
    require('./livefeed/index').name,
    require('./profile/index').name,
    require('./tour/index').name,

    //Templates
    'markup',

]);

app.run(['$rootScope','$state','$location',function($rootScope,$state,$location) {
}]);

app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider){

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('main', {
        abstract: true,
        url: '/main',
        templateUrl: '/main/main.html',
    })
    .state('login', {
        url: '/login',
        templateUrl: '/login/login.html',
    })
    .state('main.livefeed', {
        url: '/livefeed',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/livefeed/livefeed.html',
            },
            'header@main': {
                templateUrl: '/livefeed/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.tour', {
        url: '/tour',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/tour/tour.html',
            },
            'header@main': {
                templateUrl: '/tour/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.profile', {
        url: '/profile',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/profile/profile.html',
            },
            'header@main': {
                templateUrl: '/profile/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })


    ;


}]);



},{"./footer/index":3,"./livefeed/index":4,"./login/index":6,"./main/index":9,"./profile/index":10,"./tour/index":11}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('footer', [
        'markup',
    ]);

    mod.controller('FooterCtrl', require('./footer-ctrl'));

    return mod;

})();

},{"./footer-ctrl":2}],4:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('livefeed', [
        'markup',
    ]);

    mod.controller('LiveFeedCtrl', require('./live-feed-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{"./live-feed-ctrl":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('login', [
        'markup',
    ]);

    mod.controller('LoginCtrl', require('./login-ctrl'));
    mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{"./login-ctrl":7,"./logout-ctrl":8}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('main', [
        'markup',
    ]);

    //mod.controller('LoginCtrl', require('./login-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{}],10:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('profile', [
        'markup',
    ]);

    //mod.controller('LoginCtrl', require('./login-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{}],11:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('tour', [
        'markup',
    ]);

    //mod.controller('LoginCtrl', require('./login-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{}]},{},[1]);

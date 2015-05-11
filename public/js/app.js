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
    require('./header/index').name,
    require('./login/index').name,
    require('./livefeed/index').name,
    require('./profile/index').name,
    require('./tour/index').name,
    require('./tours/index').name,

    require('./filters/index').name,

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
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.tours', {
        url: '/tours',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/tours/tours.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.tours.tour', {
        url: '/tour',
        params: {
            tour: null,
        },
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/tour/tour.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
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
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })


    ;


}]);



},{"./filters/index":2,"./footer/index":5,"./header/index":7,"./livefeed/index":8,"./login/index":10,"./main/index":13,"./profile/index":14,"./tour/index":16,"./tours/index":18}],2:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('filters', [
    ]);

    mod.filter('round', require('./round'));

    return mod;

})();

},{"./round":3}],3:[function(require,module,exports){
'use strict';

module.exports = Round;

function Round($filter) {
    return function (input) {
        if (isNaN(input)) return input;
        return Math.round(input);
    };
}

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('footer', [
        'markup',
    ]);

    mod.controller('FooterCtrl', require('./footer-ctrl'));

    return mod;

})();

},{"./footer-ctrl":4}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('header', [
        'markup',
    ]);

    mod.controller('HeaderCtrl', require('./header-ctrl'));

    return mod;

})();

},{"./header-ctrl":6}],8:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('livefeed', [
        'markup',
    ]);

    mod.controller('LiveFeedCtrl', require('./live-feed-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{"./live-feed-ctrl":9}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('login', [
        'markup',
    ]);

    mod.controller('LoginCtrl', require('./login-ctrl'));
    mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{"./login-ctrl":11,"./logout-ctrl":12}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('main', [
        'markup',
    ]);

    //mod.controller('LoginCtrl', require('./login-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

},{}],14:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('profile', [
        'markup',
    ]);

    mod.controller('ProfileCtrl', require('./profile-ctrl'));

    return mod;

})();

},{"./profile-ctrl":15}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('tour', [
        'markup',
    ]);

    mod.controller('TourCtrl', require('./tour-ctrl'));

    return mod;

})();

},{"./tour-ctrl":17}],17:[function(require,module,exports){
'use strict';

module.exports = TourCtrl;

TourCtrl.$inject = [
    '$scope',
    '$rootScope',
    'User',
    '$location',
    '$state',
    '$stateParams',
];

function TourCtrl($scope, $rootScope, User,$location,$state,$stateParams) {
    $scope.viewState = {
        listings: [{
            showPercentages: false,
            day: '16',
            month: 'Apr',
            year: '2015',
            city: 'Denver',
            state: 'CO',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 45,
            changePercent:'10',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '12',
            month: 'Apr',
            year: '2015',
            city: 'Provo',
            state: 'UT',
            countNumerator: 500,
            countDenominator: 500,
            gross: '$300',
            change: 56,
            changePercent:'8',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '8',
            month: 'Apr',
            year: '2015',
            city: 'New York',
            state: 'NY',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 32,
            changePercent:'15',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '4',
            month: 'Apr',
            year: '2015',
            city: 'Los Angeles',
            state: 'CA',
            countNumerator: 245,
            countDenominator: 300,
            gross: '$300',
            change: 25,
            changePercent:'2',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '30',
            month: 'Mar',
            year: '2015',
            city: 'Irvine',
            state: 'CA',
            countNumerator: 240,
            countDenominator: 1050,
            gross: '$300',
            change: 20,
            changePercent:'7',
            changeFinal: '',
        },{
            showPercentages: false,
            day: '18',
            month: 'Mar',
            year: '2015',
            city: 'Denver',
            state: 'CO',
            countNumerator: 1400,
            countDenominator: 1450,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        },{
            showPercentages: false,
            day: '3',
            month: 'Mar',
            year: '2015',
            city: 'Irvine',
            state: 'CA',
            countNumerator: 1200,
            countDenominator: 1250,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        },{
            showPercentages: false,
            day: '1',
            month: 'Mar',
            year: '2015',
            city: 'Los Angeles',
            state: 'CA',
            countNumerator: 800,
            countDenominator: 800,
            gross: '$300',
            change: 0,
            changePercent:'0',
            changeFinal: 'Final',
        }]

    };



    $rootScope.$broadcast('headerUpdate',{
        header: $stateParams.tour,
        back: true
    });

}

},{}],18:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('tours', [
        'markup',
    ]);

    mod.controller('ToursCtrl', require('./tours-ctrl'));

    return mod;

})();

},{"./tours-ctrl":19}],19:[function(require,module,exports){
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

},{}]},{},[1]);

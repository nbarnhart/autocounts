'use strict';

module.exports = (function() {

    var mod = angular.module('login', [
        'markup',
    ]);

    mod.controller('LoginCtrl', require('./login-ctrl'));
    mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

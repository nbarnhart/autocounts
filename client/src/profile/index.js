'use strict';

module.exports = (function() {

    var mod = angular.module('profile', [
        'markup',
    ]);

    mod.controller('ProfileCtrl', require('./profile-ctrl'));

    return mod;

})();

'use strict';

module.exports = (function() {

    var mod = angular.module('header', [
        'markup',
    ]);

    mod.controller('HeaderCtrl', require('./header-ctrl'));

    return mod;

})();

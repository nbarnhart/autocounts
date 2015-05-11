'use strict';

module.exports = (function() {

    var mod = angular.module('filters', [
    ]);

    mod.filter('round', require('./round'));

    return mod;

})();

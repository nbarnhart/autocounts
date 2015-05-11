'use strict';

module.exports = (function() {

    var mod = angular.module('tours', [
        'markup',
    ]);

    mod.controller('ToursCtrl', require('./tours-ctrl'));

    return mod;

})();

'use strict';

module.exports = (function() {

    var mod = angular.module('footer', [
        'markup',
    ]);

    mod.controller('FooterCtrl', require('./footer-ctrl'));

    return mod;

})();

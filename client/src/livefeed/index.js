'use strict';

module.exports = (function() {

    var mod = angular.module('livefeed', [
        'markup',
    ]);

    mod.controller('LiveFeedCtrl', require('./live-feed-ctrl'));
    //mod.controller('LogoutCtrl', require('./logout-ctrl'));

    return mod;

})();

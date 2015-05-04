'use strict';

module.exports = function(grunt) {
    return {
        // Primary markup
        index: {
            src: grunt.config('appdir') + '/index.html',
            dest: 'public/index.html'
        },
        angular: {
            src: 'node_modules/angular/angular.min.js',
            dest: 'public/js/angular.min.js'
        },
        angularMap: {
            src: 'node_modules/angular/angular.min.js.map',
            dest: 'public/js/angular.min.js.map'
        },
        uiRouter: {
            src: 'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            dest: 'public/js/angular-ui-router.min.js'
        },
        angularResource: {
            src: 'node_modules/angular-resource/angular-resource.min.js',
            dest: 'public/js/angular-resource.min.js'
        },
        angularResourceMap: {
            src: 'node_modules/angular-resource/angular-resource.min.js.map',
            dest: 'public/js/angular-resource.min.js.map'
        },
        angularCookies: {
            src: 'node_modules/angular-cookies/angular-cookies.min.js',
            dest: 'public/js/angular-cookies.min.js'
        },
        angularCookiesMap: {
            src: 'node_modules/angular-cookies/angular-cookies.min.js.map',
            dest: 'public/js/angular-cookies.min.js.map'
        },

        jQuery: {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: 'public/js/jquery.min.js'
        },
        jQueryMap: {
            src: 'node_modules/jquery/dist/jquery.min.map',
            dest: 'public/js/jquery.min.map'
        },


        // Extraneous assets
        assets: {
            expand: true,
            cwd: 'client/assets/',
            src: ['**'],
            dest: 'public/'
        },
    };
};

'use strict';

module.exports = function(grunt) {
    return {
        development: {
            options: {
                cleancss: true
            },
            files: {
                "public/app.css": "client/src/**/*.less"
            }
        }
    };
};

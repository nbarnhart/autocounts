'use strict';

module.exports = Round;

function Round($filter) {
    return function (input) {
        if (isNaN(input)) return input;
        return Math.round(input);
    };
}

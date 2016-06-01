/**
 * @name startFrom
 * @desc Custom Filter that displays items based on pagination
 * @returns {Array}
 */

angular.module('app')
    .filter('startFrom', function() {

        return function(input, start) {
            if (!input || !input.length) { return; }
            start = +start; //parse to int

            return input.slice(start);
        }
    });

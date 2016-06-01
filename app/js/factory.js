/**
 * @name albumsData
 * @desc Angular directive that communicates with the API
 * @returns {Object}
 */

angular.module('app')
    .factory('albumsData', ['$http', function ($http) {

        var url = 'http://jsonplaceholder.typicode.com/photos';
        var albumsData = {};

        /**
         * @name getDetails
         * @desc Method that returns the Array of object. Will be called in
         *       Controller
         * @returns {Object}
         */
        albumsData.getDetails = function () {
            return $http.get(url);
        }
        return albumsData;
    }])

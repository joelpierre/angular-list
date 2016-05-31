angular.module('app')
    .factory('albumsData', ['$http', function ($http) {

        var url = 'http://jsonplaceholder.typicode.com/photos';
        var albumsData = {};

        albumsData.getDetails = function () {
            return $http.get(url);
        }

        return albumsData;
    }])

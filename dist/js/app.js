angular.module('myApp', [])
    .factory('albumsData', ['$http', function ($http) {

        var url = 'http://jsonplaceholder.typicode.com/photos';
        var albumsData = {};

        albumsData.getDetails = function () {
            return $http.get(url);
        }

        return albumsData;
    }])

    .controller('MyController', function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 10;

        function showData(total, data) {
            $scope.albums = $filter('filter')(data);
            console.log(($scope.albums).length);
            console.log(total, data);
        }

        function getAlbums() {
            albumsData.getDetails()
                .success(function(albums){
                    showData (albums.length, albums);
                })
                .error(function (error) {
                    console.log('something went wrong');
                })
        }

        getAlbums();
    })

    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });

angular.module('myApp', [])
    .factory('albumsData', ['$http', function ($http) {

        var url = 'http://jsonplaceholder.typicode.com/photos';
        var albumsData = {};

        albumsData.getDetails = function () {
            return $http.get(url);
        }

        return albumsData;
    }])

    .controller('MyController', function ($scope, albumsData){

        getAlbums();

        function getAlbums() {
            albumsData.getDetails()
                .success(function(albums){
                    console.log();
                    $scope.albums = albums;
                })
                .error(function (error) {
                    console.log('something went wrong');
                })
        }
    });

angular.module('app')
    .controller('MyController', function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 20;

        /**
         * @name getTotalPage
         * @desc Gets the current page and the paginator filter
         * @returns {Number}
         */
        $scope.getTotalPage = function() {
            return Math.ceil($scope.albums.length/$scope.pageSize);
        };

        /**
         * @name getAlbums
         * @desc Gets the array of object to use in the template
         * @returns {Array}
         */
        function getAlbums() {
            albumsData.getDetails()
                .success(function(albums){
                    $scope.albums = albums;
                })
                .error(function (error) {
                    console.log('something went wrong');
                })
        };

        getAlbums();
    })

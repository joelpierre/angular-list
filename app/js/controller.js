angular.module('app')
    .controller('MyController', function ($scope, albumsData, $filter){

        $scope.currentPage = 0;
        $scope.pageSize = 20;

        /**
         * @name getTotalPage
         * @desc Gets the number of pages when the pagination option changes
         * @returns {Number}
         */
        $scope.getTotalPage = function() {
            if($scope.albums) {
                $scope.totalPages = Math.ceil($scope.albums.length/$scope.pageSize);
                return $scope.totalPages;
            }
        };

        /**
         * @name getAlbums
         * @desc Gets the array of object to use in the template
         * @returns {Array}
         */
        function getAlbums() {

            /**
             * @name getDetails
             * @desc A method defined in factory that retrives data from API
             * @returns {Object}
             */
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
